import ClickHandler from './click-handler.js';
import {
    CSS_VAR,
    DIFFICULTIES,
    storeUserData,
    STYLES_CELL,
    STYLES_CONTROLS,
    STYLES_MENU,
    userData
} from '../../data/data.js';
import { app, clickCounter } from '../../../../main.js';

export default class App extends ClickHandler {
    cells;
    timerId;
    cssVar = document.documentElement.style;
    gameSize;
    rowColSize;
    timerCounter;

    constructor() {
        super();

        ({
            isFirstLoad: this.isFirstLoad = true,
            difficulty: this.difficulty = 'ease',
            numOfMines: this.numOfMines = 10,
            time: this.timerCounter = 0,
        } = userData);

        ({
            size: this.gameSize,
            rowColNum: this.rowColSize,
        } = DIFFICULTIES.get(this.difficulty));

        if (userData.cells) {
            const lastGameSession = new Map(Object.entries(JSON.parse(userData.cells)));
            this.cells = lastGameSession.size !== 0 ? lastGameSession : this._generateCells(this.gameSize);
        } else {
            this.cells = this._generateCells(this.gameSize);
        }

        this.gameField = this._initializeGameField();

        const restartBtn = document.querySelector(`.${ STYLES_CONTROLS.RESTART_GAME }`);
        restartBtn.addEventListener('click', this.restartGame.bind(this, restartBtn));
        this.gameField.addEventListener('click', this._clickHandler.bind(this));
        this.gameField.addEventListener('contextmenu', this._addMarkHandler.bind(this));

        const tabsWrapper = document.querySelector(`.${ STYLES_MENU.DIFF_TABS_WRAPPER }`);
        tabsWrapper.addEventListener('click', this._setDifficulty.bind(this));
    }

    _setDifficulty(e) {
        const target = e.target;

        if (!target.classList.contains(STYLES_MENU.DIFF_TAB)) return;

        const clickedTabDiff = target.textContent.toLowerCase();

        if (this.difficulty === clickedTabDiff) return;
        this.difficulty = clickedTabDiff;

        userData.difficulty = this.difficulty;
        storeUserData();

        ({
            size: this.gameSize,
            rowColNum: this.rowColSize,
        } = DIFFICULTIES.get(this.difficulty));

        this.restartGame('_', true);
    }

    _setGameFieldSize() {
        const {
            gameFieldHeight,
            gameFieldWidth,
            cellWidth,
            cellHeight
        } = DIFFICULTIES.get(this.difficulty);

        this.cssVar.setProperty(CSS_VAR.GAME_FIELD_HEIGHT, gameFieldHeight);
        this.cssVar.setProperty(CSS_VAR.GAME_FIELD_WIDTH, gameFieldWidth);
        this.cssVar.setProperty(CSS_VAR.CELL_HEIGHT, cellHeight);
        this.cssVar.setProperty(CSS_VAR.CELL_WIDTH, cellWidth);
    }

    _initializeGameField() {
        const gameField = document.createElement('div');
        document.body.setAttribute('id', 'app');
        document.body.prepend(gameField);
        gameField.classList.add('game-field');

        this._setGameFieldSize();
        return gameField;
    }

    _getCellData(id) {
        return this.cells.get(id) || {};
    }

    _getCellElement(id) {
        return document.querySelector(`[data-id='${ id }']`);
    }

    _countMinesAround(minedCellId) {
        this._getAdjacentCellsAround(minedCellId)
            .forEach((neighbourCellId) => {
                this._getCellData(neighbourCellId).minesAround++;
            });
    }

    _insertMines(numOfMines) {
        const existedMines = new Set();

        for (; numOfMines !== existedMines.size;) {
            const rndmNum = (Math.floor(Math.random() * +(this.rowColSize + '0'))) / 10;

            const mineId = Number.isInteger(rndmNum)
                ? `${ rndmNum }-0`
                : rndmNum.toString().replace('.', '-');

            if (existedMines.has(mineId)) continue;

            existedMines.add(mineId);
            this._countMinesAround(mineId);

            const minedCell = this._getCellData(mineId);
            minedCell.isMine = true;
        }
    }

    _generateCells(size) {
        const cells = new Map();
        let row = 0;
        let counter = 0;

        for (let i = 0; i < size; i++) {
            if (i % this.rowColSize === 0 && i !== 0) {
                counter = 0;
                row++;
            }

            const cell = {
                id: `${ row }-${ counter }`,
                isMine: false,
                isFlag: false,
                isClose: true,
                minesAround: 0,
            };

            cells.set(cell.id, cell);
            counter++;
        }

        return cells;
    }

    _renderGame() {
        this.gameField.innerHTML = '';

        const animationQueue = new Set();
        const cells = new Set();
        const animate = this._createAnimateFunction(animationQueue);
        let scaleVal = 1;
        let scaleGain =
            this.difficulty === 'ease' ? .0003
                : this.difficulty === 'medium' ? 0.0001
                    : 0.00005;

        for (const cellStorage of this.cells.entries()) {
            const [ rowCol, cellData ] = cellStorage;
            const row = rowCol.slice(0, rowCol.indexOf('-'));
            const col = rowCol.slice(rowCol.indexOf('-') + 1);

            const cellElem = document.createElement('div');
            cellElem.dataset.id = `${ row }-${ col }`;
            cellElem.classList.add(STYLES_CELL.DEF);
            this.gameField.append(cellElem);

            cells.add({ cellElem, cellData });

            animate(() => {
                if (scaleVal <= 1.2) scaleVal += scaleGain;
                this.gameField.style.scale = scaleVal;

                if (cellData.isClose) return cellElem.classList.add(STYLES_CELL.CLOSED);

                if (!cellData.isClose) {
                    this._openCell(cellData, cellElem);
                    this._showMinesAroundNum(cellData, cellElem);
                    this._paintChessBoard(rowCol, cellElem);
                }
            });
        }

        Promise.all(animationQueue)
            .then(() => {
                cells.forEach(({ cellElem, cellData }) => {
                    if (cellData.isFlag) this._addMark.call(this, cellElem, cellData);
                });

                this.gameField.style = '';
                this.gameField.animate([
                    { scale: scaleVal },
                    { scale: .99, offset: .2 },
                    { scale: 1 },
                ], { duration: 300 });
            });
    }

    restartGame(restartBtn, changeFieldElemSize = false) {
        if (this.timerId) clearInterval(this.timerId);

        try {
            restartBtn.style.animation = 'restartFlip 1.5s';
            restartBtn.addEventListener('animationend', () => restartBtn.style.animation = '', { once: true });
        } catch (e) {
        }

        if (changeFieldElemSize) this._setGameFieldSize();

        ({ numOfMines: this.numOfMines = 10 } = userData);

        userData.clicks = userData.time = null;
        storeUserData();
        app.timerCounter = 0;

        this.cells = this._generateCells(this.gameSize);
        this._insertMines(this.numOfMines);
        clickCounter.resetCounter();
        this.init.call(this);

        userData.cells = JSON.stringify(Object.fromEntries(this.cells.entries()));
        storeUserData();
    }

    _updateTimer() {
        if (this.timerId) clearInterval(this.timerId);

        const timerElem = document.querySelector(`.${ STYLES_CONTROLS.TIMER }`);
        timerElem.textContent = '00:00';

        const renderTime = counter => {
            const min = Math.floor(counter / 60).toString();
            const sec = Math.floor(counter % 60).toString();
            timerElem.textContent = `${ min.padStart(2, '0') }:${ sec.padStart(2, '0') }`;
        };

        this.timerId = setInterval(() => {
            renderTime(++this.timerCounter);
        }, 1000);
    }

    _displayNumOfMines() {
        const numOfMinesElem = document.querySelector(`.${ STYLES_CONTROLS.NUM_OF_MINES_NUM }`);
        numOfMinesElem.textContent = this.numOfMines;
    }

    _resetMarksCounter() {
        const instance = this._renderMarksNums();
        instance.marks = 0;
        this._renderMarksNums();
    }

    getGameData() {
        const { counterNum } = clickCounter;

        return {
            numOfMines: this.numOfMines,
            numOfFlags: this.marks,
            timer: this.timerCounter,
            counterNum,
            isLose: false,
            isWin: false
        };
    }

    init() {
        if (this.isFirstLoad) {
            this.numOfMines = 0;
            this.isFirstLoad = false;
            userData.isFirstLoad = this.isFirstLoad;
            storeUserData();
        }

        this._renderGame();
        this._updateTimer();
        this._displayNumOfMines();
        this._resetMarksCounter();
    }
}