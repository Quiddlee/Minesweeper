import { STYLES_CONTROLS } from '../../data/data.js';

export default class NumOfFlags {
    constructor() {
        this.numOfFlags = document.createElement('div');
        this.icon = document.createElement('div');
        this.num = document.createElement('span');
    }

    _renderCounter() {
        this.numOfFlags.classList.add(STYLES_CONTROLS.NUM_OF_FLAGS);

        this.num.classList.add(STYLES_CONTROLS.NUM_OF_FLAGS_NUM);
        this.num.textContent = 0;

        this.icon.classList.add(STYLES_CONTROLS.NUM_OF_FLAGS_ICON);
        this.icon.innerHTML = `
            <svg viewBox="0 0 32 32" fill="" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path d="M0 0H4V32H0V0Z" fill=""/>
                    <g>
                        <path id="Vector_2" d="M26 20.0939C28.582 20.0939 30.83 19.4689 32 18.5469V2.54688C30.83 3.46887 28.582 4.09387 26 4.09387C23.418 4.09387 21.17 3.46887 20 2.54688V18.5469C21.17 19.4689 23.418 20.0939 26 20.0939Z" fill=""/>
                        <path id="Vector_3" d="M19 1.016C17.534 0.393 15.39 0 13 0C9.988 0 7.365 0.625 6 1.547V17.547C7.365 16.625 9.988 16 13 16C15.39 16 17.534 16.393 19 17.016V1.016Z" fill=""/>
                    </g>
                </g>
            </svg>
        `;

        this.numOfFlags.append(this.icon, this.num);
        document.querySelector('.controls').prepend(this.numOfFlags);
    }

    init() {
        this._renderCounter();
    }
}