import { STYLES_BTN, STYLES_CONTROLS, STYLES_MENU } from '../../data/data.js';
import PopupMenu from '../menu/popup-menu.js';

export default class OpenMenuBtn extends PopupMenu {
    openMenuBtn = document.createElement('button');
    btnInner = document.createElement('span');

    constructor() {
        super();

        this.openMenuBtn.addEventListener('click', this._openPopup.bind(this, STYLES_MENU.POPUP_MENU));
    }

    _renderBtn() {
        this.openMenuBtn.classList.add(STYLES_BTN.BTN, STYLES_BTN.ROUNDED, STYLES_CONTROLS.OPEN_MENU_BTN);

        this.btnInner.classList.add(STYLES_CONTROLS.OPEN_MENU_BTN_INNER);

        this.openMenuBtn.append(this.btnInner);

        document.querySelector(`.${ STYLES_CONTROLS.CONTROLS }`).append(this.openMenuBtn);
    }

    init() {
        this._renderBtn();
    }
}