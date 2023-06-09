import { STYLES_CONTROLS } from '../../data/data.js';

export default class Timer {
    constructor() {
        this.timerWrapper = document.createElement('div');
        this.icon = document.createElement('div');
        this.timer = document.createElement('div');
    }

    _renderTimer() {
        this.timerWrapper.classList.add(STYLES_CONTROLS.TIMER_WRAPPER);
        document.querySelector('.controls').prepend(this.timerWrapper);

        this.icon.classList.add(STYLES_CONTROLS.TIMER_ICON);
        this.icon.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <title>clock</title>
                <path d="M20.586 23.414l-6.586-6.586v-8.828h4v7.172l5.414 5.414zM16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 28c-6.627 0-12-5.373-12-12s5.373-12 12-12c6.627 0 12 5.373 12 12s-5.373 12-12 12z"></path>
            </svg>
        `;

        this.timer.classList.add(STYLES_CONTROLS.TIMER);
        this.timerWrapper.prepend(this.icon, this.timer);
    }

    init() {
        this._renderTimer();
    }
}