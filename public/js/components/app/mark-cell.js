import { storeUserData, STYLES_CELL, STYLES_CONTROLS, userData } from '../../data/data.js';
import PopupMenu from '../menu/popup-menu.js';
import { app } from '../../../../main.js';

export default class MarkCell extends PopupMenu {
    marks = 0;
    marksCounterElem = document.querySelector(`.${ STYLES_CONTROLS.NUM_OF_FLAGS_NUM }`);

    _addMarkHandler(evt) {
        evt.preventDefault();

        const cellElem = evt.target.closest('.game-field__cell');
        const cell = this._getCellData(cellElem?.dataset.id);

        if (!cellElem?.classList.contains(STYLES_CELL.CLOSED)) return;

        if (cellElem?.innerHTML.length > 0) this._removeMark(cellElem, cell);
        else this._addMark(cellElem, cell);

        userData.cells = JSON.stringify(Object.fromEntries(app.cells.entries()));
        storeUserData();
    }

    _renderMark() {
        const markIcon = document.createElement('div');
        markIcon.classList.add(STYLES_CELL.CELL_MARK_ICON);
        markIcon.innerHTML = `
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="flag">
                    <path id="Vector" d="M0 0H4V32H0V0Z"/>
                    <g class="hide" id="banner">
                        <path id="Vector_2" d="M26 20.0939C28.582 20.0939 30.83 19.4689 32 18.5469V2.54688C30.83 3.46887 28.582 4.09387 26 4.09387C23.418 4.09387 21.17 3.46887 20 2.54688V18.5469C21.17 19.4689 23.418 20.0939 26 20.0939Z"/>
                        <path id="Vector_3" d="M19 1.016C17.534 0.393 15.39 0 13 0C9.988 0 7.365 0.625 6 1.547V17.547C7.365 16.625 9.988 16 13 16C15.39 16 17.534 16.393 19 17.016V1.016Z"/>
                    </g>
                </g>
            </svg>
        `;

        return markIcon;
    }

    _addMark(cellElem, cell) {
        cellElem.append(this._renderMark());

        const banner = cellElem.querySelector('#banner');

        cellElem.classList.add(STYLES_CELL.MARKED);
        cell.isFlag = true;

        banner.addEventListener('animationend', () => {
            banner.classList.remove('hide');
            banner.classList.add('show');
        }, { once: true });

        this.marks++;
        this._renderMarksNums();
    }

    _removeMark(cellElem, cell) {
        const banner = cellElem.querySelector('#banner');
        const stick = cellElem.querySelector('#flag');

        banner.style.animation = 'markBannerFadeOut .2s';
        stick.style.animation = 'markStickFadeOut .2s';

        cell.isFlag = false;

        banner.addEventListener('animationend', () => {
            cellElem.classList.remove(STYLES_CELL.MARKED);
            cellElem.innerHTML = '';
        }, { once: true });

        this.marks--;
        this._renderMarksNums();
    }

    _subtractMarks() {
        this.marksCounterElem.textContent = --this.marks;
    }

    _renderMarksNums() {
        const marksCounterElem = this.marksCounterElem;
        marksCounterElem.textContent = this.marks || 0;
        return this;
    }
}