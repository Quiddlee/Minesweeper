import { STYLES_BTN, STYLES_MENU, userData } from '../../data/data.js';

export default class LatestResults {
    gameData;

    constructor() {
        this.latestResultsBtn = document.createElement('button');
        this.latestResultsBtnIcon = document.createElement('div');
        this.latestResults = document.createElement('div');
        this.btnBack = document.createElement('button');

        this.menu = document.querySelector(`.${ STYLES_MENU.MENU }`);
        this.popupInner = document.querySelector(`.${ STYLES_MENU.POPUP_MENU_INNER }`);
        this.popup = document.querySelector(`.${ STYLES_MENU.POPUP_MENU }`);

        ({ gameData: this.gameData } = userData);

        this.latestResultsBtn.addEventListener('click', this._showLatestResults.bind(this));
        this.btnBack.addEventListener('click', this._btnBackHandler.bind(this));
    }

    _showLatestResults() {
        this.popup.classList.add(STYLES_MENU.POPUP_MENU_ACTIVE);
        this.menu.classList.add(STYLES_MENU.MENU_ACTIVE);
        this.latestResults.classList.add(STYLES_MENU.LATEST_RESULTS_ACTIVE);
        this.popupInner.classList.add(STYLES_MENU.POPUP_MENU_INNER_ACTIVE);
    }

    _btnBackHandler() {
        this.popup.classList.remove(STYLES_MENU.POPUP_MENU_ACTIVE);
        this.menu.classList.remove(STYLES_MENU.MENU_ACTIVE);
        this.latestResults.classList.remove(STYLES_MENU.LATEST_RESULTS_ACTIVE);
        this.popupInner.classList.remove(STYLES_MENU.POPUP_MENU_INNER_ACTIVE);
    }

    _renderLatestResultsBtn() {
        this.latestResultsBtn.classList.add(STYLES_BTN.BTN, STYLES_BTN.ROUNDED, STYLES_MENU.LATEST_RESULT_BTN);

        this.latestResultsBtnIcon.classList.add(STYLES_MENU.LATEST_RESULT_BTN_ICON);
        this.latestResultsBtnIcon.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path d="M12 2h20v4h-20v-4zM12 14h20v4h-20v-4zM12 26h20v4h-20v-4zM0 4c0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4s-4-1.791-4-4zM0 16c0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4s-4-1.791-4-4zM0 28c0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4s-4-1.791-4-4z"></path>
            </svg>
        `;

        this.latestResultsBtn.append(this.latestResultsBtnIcon);

        this.menu.append(this.latestResultsBtn);
    }

    _renderLatestResultsMenu() {
        this.latestResults.classList.add(STYLES_MENU.LATEST_RESULTS);

        this.popupInner.append(this.latestResults);
    }

    _renderBackBtn() {
        this.btnBack.innerHTML = ``;
        this.btnBack.classList.add(STYLES_BTN.BTN, STYLES_BTN.ROUNDED, STYLES_MENU.LATEST_RESULTS_BTN_BACK);
        const upper = document.createElement('div');
        const lower = document.createElement('div');
        const icon = `
            <svg class="${ STYLES_MENU.LATEST_RESULTS_BTN_BACK_ICON }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M10.707 7.050l-0.707-0.707-5.657 5.657 1.414 1.414 4.243-4.242 4.243 4.242 1.414-1.414z"></path>
            </svg>
        `;

        lower.innerHTML = icon;
        upper.innerHTML = icon;
        this.btnBack.append(upper, lower);

        lower.setAttribute('id', 'lower');
        upper.setAttribute('id', 'upper');

        this.latestResults.append(this.btnBack);
    }

    renderGameResults() {
        this.latestResults.innerHTML = '';
        this._renderBackBtn();

        this.gameData.forEach((
            {
                isWin,
                timer,
                numOfMines,
                numOfFlags,
                counterNum
            }
        ) => {
            const gameRes = document.createElement('div');
            gameRes.classList.add(STYLES_MENU.LATEST_RES);

            isWin
                ? gameRes.classList.add(STYLES_MENU.LATEST_RES_WIN)
                : gameRes.classList.add(STYLES_MENU.LATEST_RES_LOSE);

            gameRes.innerHTML = `
                <div class="${ STYLES_MENU.LATEST_RES_BLOCK }">
                    ${ isWin ? '🎉  ' : '💥  ' }Time:
                    <span>${ timer }s</span>
                </div>
                
                <div class="${ STYLES_MENU.LATEST_RES_BLOCK }">
                    Mines:
                    <span>${ numOfMines }</span>
                </div>
                
                <div class="${ STYLES_MENU.LATEST_RES_BLOCK }">
                    Marks:
                    <span>${ numOfFlags }</span>
                </div>
                            
                <div class="${ STYLES_MENU.LATEST_RES_BLOCK }">
                    Clicks:
                    <span>${ counterNum }</span>
                </div>
            `;

            this.latestResults.append(gameRes);
        });
    }

    init() {
        this._renderLatestResultsBtn();
        this._renderLatestResultsMenu();
        this.renderGameResults();
    }
}