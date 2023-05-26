import { STYLES_BTN, STYLES_MENU, STYLES_POPUP } from '../../data/data.js';
import { latestResults } from '../../../../main.js';

export default class PopupMenu {
    constructor() {
        this.popup = document.createElement('dialog');
        this.popupCloseBtn = document.createElement('button');
        this.menu = document.createElement('div');
        this.popupInner = document.createElement('div');

        this.popupCloseBtn.addEventListener('click', this._closePopupHandler.bind(this));
        this.popup.addEventListener('keydown', this._closePopupHandler.bind(this));
        document.body.addEventListener('click', this._closeOutsidePopup.bind(this));
    }

    _openPopup(popupSelector) {
        const popupElem = document.querySelector(`.${ popupSelector }`);

        popupElem.showModal();
        popupElem.classList.add(STYLES_POPUP.POPUP_ACTIVE);
        popupElem.blur();
    }

    _animateAndClosePopup() {
        this.popup.style.animation = 'popupFadeOut .3s';
        this.popup.classList.remove(STYLES_POPUP.POPUP_ACTIVE);
        this.popup.addEventListener('animationend', () => {
            this.popup.style.animation = '';
            this.popup.close();
            latestResults.btnBack.click();
        }, { once: true });
    }

    _closePopupHandler(evt) {
        if (
            evt.key === 'Escape' ||
            evt.target.classList.contains(STYLES_BTN.CLOSE)
        ) {
            evt.preventDefault();
            this._animateAndClosePopup();
        }
    }

    _closeOutsidePopup(evt) {
        if (evt.target !== this.popup) return;
        const rect = evt.target.getBoundingClientRect();

        const clickedInDialog = (
            rect.top <= evt.clientY &&
            evt.clientY <= rect.top + rect.height &&
            rect.left <= evt.clientX &&
            evt.clientX <= rect.left + rect.width
        );

        if (!clickedInDialog) this._animateAndClosePopup();
    }

    _renderPopup(cssClass, content = '', isMenu = true) {
        if (isMenu) {
            this._renderInner();
            this.popup.classList.add(STYLES_POPUP.POPUP, cssClass);

            this.menu.classList.add(STYLES_MENU.MENU);

            this.popupInner.prepend(this.menu);
            document.body.prepend(this.popup);

            this.menu.innerHTML = content;
        }

        if (!isMenu) {
            this.popup.classList.add(STYLES_POPUP.POPUP, cssClass);

            document.body.prepend(this.popup);

            this.popup.innerHTML = content;
        }

        this.popup = document.querySelector(`.${ STYLES_POPUP.POPUP }`);
    }

    _renderInner() {
        this.popupInner.classList.add(STYLES_MENU.POPUP_MENU_INNER);
        this.popup.append(this.popupInner);
    }

    init(cssClass, content, isMenu) {
        this._renderPopup(cssClass, content, isMenu);
    }
}