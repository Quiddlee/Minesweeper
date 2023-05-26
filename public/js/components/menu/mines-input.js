import { storeUserData, STYLES_MENU, userData } from '../../data/data.js';
import { app } from '../../../../main.js';

export default class MinesInput {
    constructor() {
        this.minesInputElem = document.createElement('input');
        this.minesWrapper = document.createElement('div');
        this.minesInputElem.addEventListener('keydown', e => {
            if (e.key !== 'Enter') return;

            const inputNum = Number.parseInt(this.minesInputElem.value);
            if (
                inputNum < 0 ||
                inputNum > 99 ||
                !Number.isInteger(inputNum)
            ) return;

            userData.numOfMines = inputNum;
            storeUserData();

            this.minesInputElem.value = '';
            app.numOfMines = inputNum;
            app.restartGame();
        });
    }

    _renderMinesInput() {
        this.minesWrapper.classList.add('menu__mines-num');
        this.minesInputElem.classList.add('menu__mines-num__input');

        this.minesInputElem.type = 'number';
        this.minesInputElem.max = '99';
        this.minesInputElem.min = '0';
        this.minesInputElem.placeholder = 'Mines';

        this.minesWrapper.append(this.minesInputElem);

        document.querySelector(`.${ STYLES_MENU.MENU }`).append(this.minesWrapper);
    }

    init() {
        this._renderMinesInput();
    }
}