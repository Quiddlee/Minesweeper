import { storeUserData, STYLES_CELL, STYLES_CONTROLS, userData } from '../../data/data.js';

export default class ClickCounter {
    constructor() {
        this.counter = document.createElement('div');

        this.counterNum = userData.clicks ? userData.clicks : 0;
        window.addEventListener('click', evt => {
            if (!evt.target.classList.contains(STYLES_CELL.DEF)) return;
            this.counter.textContent = ++this.counterNum;
            userData.clicks = this.counterNum;
            storeUserData();
        });
    }

    get clicks() {
        return this.counterNum;
    }

    _renderCounter() {
        this.counter.classList.add(STYLES_CONTROLS.COUNTER);
        this.counter.textContent = this.counterNum;
        document.querySelector('.controls').prepend(this.counter);
    }

    resetCounter() {
        this.counter.textContent = this.counterNum = 0;
    }

    init() {
        this._renderCounter();
    }
}