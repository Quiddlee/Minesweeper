import { STYLES_BTN, STYLES_MENU, userData } from '../../data/data.js';
import PopupMenu from './popup-menu.js';

export default class Difficulty extends PopupMenu {
    tabs = new Set();

    constructor() {
        super();
        ({ difficulty: this.difficulty = 'ease' } = userData);

        this.tabsWrapper = document.createElement('div');
        this.tabsWrapper.addEventListener('click', this._diffClickHandler.bind(this));
    }

    _renderDifficultyTabs() {
        this.tabsWrapper.classList.add(STYLES_MENU.DIFF_TABS_WRAPPER);

        const ease = document.createElement('button');
        const medium = document.createElement('button');
        const hard = document.createElement('button');

        ease.textContent = 'Ease';
        medium.textContent = 'Medium';
        hard.textContent = 'Hard';
        this.tabs.add(ease).add(medium).add(hard);

        [ ease, medium, hard ]
            .forEach(
                (tab, i) => {
                    tab.classList.add(
                        STYLES_BTN.BTN, STYLES_MENU.DIFF_TAB, `${ STYLES_MENU.DIFF_TAB }--${ i }`
                    );
                    const tabDiff = tab.textContent.toLowerCase();
                    if (tabDiff === this.difficulty) tab.classList.add(STYLES_MENU.DIFF_TAB_ACTIVE);
                }
            );

        this.tabsWrapper.append(ease, medium, hard);
        document.querySelector(`.${ STYLES_MENU.MENU }`).append(this.tabsWrapper);
    }

    _diffClickHandler(e) {
        const target = e.target;

        if (!target.classList.contains(STYLES_MENU.DIFF_TAB)) return;

        this.tabs.forEach(tab => {
            tab.classList.remove(STYLES_MENU.DIFF_TAB_ACTIVE);
        });

        target.classList.add(STYLES_MENU.DIFF_TAB_ACTIVE);
    }

    init() {
        this._renderDifficultyTabs();
    }
}