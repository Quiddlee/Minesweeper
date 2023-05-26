import MarkCell from './mark-cell.js';
import { addGameData, CSS_VAR, SOUNDS, storeUserData, STYLES_CELL, STYLES_POPUP, userData, } from '../../data/data.js';
import { app, latestResults } from '../../../../main.js';

export default class ClickHandler extends MarkCell {
    animate;
    clickAnimationQueue = new Set();
    isWin = false;

    _clickHandler(evt) {
        this.isWin = false;
        const target = evt.target;
        const elemClassList = target.classList;

        this._playSound(SOUNDS.CELL_CLICK);

        if (!elemClassList.contains(STYLES_CELL.DEF) ||
            elemClassList.contains(STYLES_CELL.MARKED)
        ) return;

        const cell = this._getCellData(target.dataset.id);
        if (cell.isMine) {
            this._playSound(SOUNDS.LOSE);

            const data = app.getGameData();
            data.isLose = true;
            addGameData(data);
            latestResults.renderGameResults();

            this._clearCells()
                .then(app.restartGame.bind(app));
            return this._openPopup(STYLES_POPUP.POPUP_LOSE);
        }

        this.animate = this._createAnimateFunction(this.clickAnimationQueue);
        this._showMinesAroundNum(cell, target);
        this._openCell(cell, target);
        this._checkForWin();
        cell.minesAround === 0 && this._openAdjacentCells(cell);

        Promise.all(this.clickAnimationQueue)
            .then(() => {
                userData.cells = JSON.stringify(Object.fromEntries(app.cells.entries()));
                storeUserData();
            });
    }

    _playSound(soundNaming) {
        if (userData.isMuted) return;

        const audio = new Audio(soundNaming);
        audio.volume = .7;
        audio.play();
    }

    _showMinesAroundNum(cell, cellElem) {
        const text = document.createElement('span');
        cellElem.textContent = '';
        text.textContent = cell.minesAround || '';

        text.style.color =
            cell.minesAround === 1 ? `var(${ CSS_VAR.CELL_TEXT_GREEN })`
                : cell.minesAround === 2 ? `var(${ CSS_VAR.CELL_TEXT_YELLOW })`
                    : text.style.color = `var(${ CSS_VAR.CELL_TEXT_RED })`;


        text.classList.add(STYLES_CELL.TEXT);
        cellElem.append(text);
    }

    _paintChessBoard(cellId, cellElem) {
        const row = parseInt(cellId);
        const col = parseInt(cellId?.slice(cellId.indexOf('-')));

        if (
            row % 2 === 0 && col % 2 === 0 ||
            row % 2 !== 0 && col % 2 !== 0
        ) {
            cellElem.classList.add(STYLES_CELL.OPEN_LIGHT);
        }

        if (
            row % 2 === 0 && col % 2 !== 0 ||
            row % 2 !== 0 && col % 2 === 0
        ) {
            cellElem.classList.add(STYLES_CELL.OPEN_DARK);
        }
    }

    _openCell(cell, cellElem) {
        const { id: cellId } = cell;

        if (cell.isFlag) this._subtractMarks();

        cell.isFlag = cell.isClose = false;
        cellElem.style.animation = 'cellFadeOut .2s';

        cellElem.onanimationend = () => {
            cellElem.classList.remove(STYLES_CELL.CLOSED, STYLES_CELL.MARKED);
        };

        this._paintChessBoard(cellId, cellElem);
    }

    _createAnimateFunction(animationQueue, speedGainRatio = 0.1) {
        let cellOpenDelay = 0;
        let cellOpenSpeedGain = 1;

        return cellTodoCb => {
            cellOpenDelay += (30 / (cellOpenSpeedGain += speedGainRatio));

            if (!animationQueue) return setTimeout(cellTodoCb, cellOpenDelay);

            const promise = new Promise(resolve => {
                setTimeout(() => resolve(cellTodoCb()), cellOpenDelay);
            });

            animationQueue.add(promise);
        };
    }

    _checkForWin() {
        if (this.isWin) return;

        for (const cell of this.cells.values()) {
            if (!cell.isMine && cell.isClose) return;
        }

        this._playSound(SOUNDS.WIN);

        const data = app.getGameData();
        data.isWin = true;
        addGameData(data);
        latestResults.renderGameResults();

        this._clearCells()
            .then(app.restartGame.bind(app));
        this._openPopup(STYLES_POPUP.POPUP_WIN);
        this.isWin = true;
    }

    _getAdjacentCellsAround(cellId) {
        const row = Number.parseInt(cellId);
        const col = Number.parseInt(cellId?.slice(cellId.indexOf('-') + 1));

        return [
            `${ row }-${ col + 1 }`,
            `${ row - 1 }-${ col }`,
            `${ row }-${ col - 1 }`,
            `${ row + 1 }-${ col }`,
            `${ row + 1 }-${ col + 1 }`,
            `${ row - 1 }-${ col - 1 }`,
            `${ row + 1 }-${ col - 1 }`,
            `${ row - 1 }-${ col + 1 }`,
        ];
    }

    _openAdjacentCells({ id: cellId }) {
        this._checkForWin();

        this._getAdjacentCellsAround(cellId)
            .forEach((adjCellId) => {
                const adjCell = this._getCellData(adjCellId);
                const adjCellElem = this._getCellElement(adjCellId);

                if (!adjCellElem || !adjCell.isClose || adjCell.isMine) return;

                adjCell.isClose = false;

                this.animate(() => {
                    this._openCell(adjCell, adjCellElem);
                    this._showMinesAroundNum(adjCell, adjCellElem);
                });

                if (adjCell.minesAround !== 0) return;

                // setTimeout here to change execution order of the recursion
                setTimeout(this._openAdjacentCells.bind(this, adjCell));
            });
    };

    _clearCells(speedGainRatio = 0.1) {
        const animationQueue = new Set();
        this.animate = this._createAnimateFunction(animationQueue, speedGainRatio);

        this.cells.forEach(cell => {
            const cellElem = this._getCellElement(cell.id);

            this.animate(() => {
                cellElem.classList.remove(STYLES_CELL.MARKED);
                const adjCellNum = cellElem.firstElementChild;

                if (adjCellNum) {
                    adjCellNum.style.animation = 'textFadeOut .2s';
                    adjCellNum.onanimationend = () => cellElem.textContent = '';
                }
                this._paintChessBoard(cell.id, cellElem);
            });
        });

        return Promise.all(animationQueue);
    }
}