const STYLES_CELL = {
    DEF: 'game-field__cell',
    MARKED: 'game-field__cell--marked',
    TEXT: 'game-field__cell-text',
    OPEN_LIGHT: 'game-field__cell--open-light',
    OPEN_DARK: 'game-field__cell--open-dark',
    CLOSED: 'game-field__cell--close',
    CELL_MARK_ICON: 'game-field__cell__mark-icon',
};

const STYLES_BTN = {
    BTN: 'btn',
    CLOSE: 'btn--close',
    ROUNDED: 'btn--rounded',
    POPUP: 'popup__btn'
};

const STYLES_POPUP = {
    POPUP: 'popup',
    POPUP_ACTIVE: 'popup-active',
    POPUP_WIN: 'popup--win',
    POPUP_LOSE: 'popup--lose',
};

const STYLES_CONTROLS = {
    CONTROLS: 'controls',

    RESTART_GAME: 'controls__restart-game',
    RESTART_GAME_ICON: 'controls__restart-game__icon',

    NUM_OF_FLAGS: 'controls__num-of-flags',
    NUM_OF_FLAGS_NUM: 'controls__num-of-flags__num',
    NUM_OF_FLAGS_ICON: 'controls__num-of-flags__icon',

    COUNTER: 'controls__click-counter',
    ClICK_COUNTER: 'controls__click-counter',

    NUM_OF_MINES: 'controls__num-of-mines',
    NUM_OF_MINES_ICON: 'controls__num-of-mines__icon',
    NUM_OF_MINES_NUM: 'controls__num-of-mines__num',

    TIMER: 'controls__timer-wrapper__timer',
    TIMER_WRAPPER: 'controls__timer-wrapper',
    TIMER_ICON: 'controls__timer-wrapper__icon',

    OPEN_MENU_BTN: 'controls__open-menu-btn',
    OPEN_MENU_BTN_INNER: 'controls__open-menu-btn__inner',
};

const STYLES_MENU = {
    MENU: 'menu',
    MENU_ACTIVE: 'menu--active',
    POPUP_MENU: 'popup--menu',
    POPUP_MENU_ACTIVE: 'popup--menu--active',
    POPUP_MENU_INNER: 'popup--menu__inner',
    POPUP_MENU_INNER_ACTIVE: 'popup--menu__inner--active',

    THEME_TOGGLE: 'menu__theme-toggle',
    THEME_TOGGLE_WRAPPER: 'menu__theme-toggle__wrapper',

    THEME_TOGGLE_MOON: 'menu__theme-toggle__moon',
    THEME_TOGGLE_MOON_ACTIVE: 'menu__theme-toggle__moon-active',

    THEME_TOGGLE_SUN: 'menu__theme-toggle__sun',
    THEME_TOGGLE_SUN_ACTIVE: 'menu__theme-toggle__sun-active',
    THEME_TOGGLE_SUN_SUNBEAM: 'menu__theme-toggle__sun__sunbeam',
    THEME_TOGGLE_SUN_SUNBEAM_ACTIVE: 'menu__theme-toggle__sun__sunbeam-active',

    THEME_TOGGLE_CIRCLE: 'menu__theme-toggle__circle',
    THEME_TOGGLE_CIRCLE_POS_LIGHT: 'menu__theme-toggle__circle-pos-light',
    THEME_TOGGLE_CIRCLE_MOVE: 'menu__theme-toggle__circle-move',

    DIFF_TABS_WRAPPER: 'menu__difficulty',
    DIFF_TAB: 'menu__difficulty__tab',
    DIFF_TAB_1: 'menu__difficulty__tab--0',
    DIFF_TAB_2: 'menu__difficulty__tab--1',
    DIFF_TAB_3: 'menu__difficulty__tab--2',
    DIFF_TAB_ACTIVE: 'menu__difficulty__tab--active',

    SOUND_ADJ: 'menu__sound-adjustment',
    SOUND_ADJ_ICON: 'menu__sound-adjustment__icon',
    SOUND_ADJ_ICON_ACTIVE: 'menu__sound-adjustment__icon--active',

    LATEST_RESULT_BTN: 'menu__latest-result--btn',
    LATEST_RESULT_BTN_ICON: 'menu__latest-result--btn__icon',

    LATEST_RESULTS: 'menu__latest-results-wrapper',
    LATEST_RESULTS_ACTIVE: 'menu__latest-results-wrapper--active',
    LATEST_RES_BLOCK: 'menu__latest-results-wrapper__res__block',
    LATEST_RES: 'menu__latest-results-wrapper__res',
    LATEST_RES_WIN: 'menu__latest-results-wrapper__res--win',
    LATEST_RES_LOSE: 'menu__latest-results-wrapper__res--lose',
    LATEST_RESULTS_BTN_BACK: 'menu__latest-results-wrapper__btn-back',
    LATEST_RESULTS_BTN_BACK_ICON: 'menu__latest-results-wrapper__btn-back__icon',
};

const CSS_VAR = {
    COLOR_PRIMARY_DARK: '--color-dark-primary',
    COLOR_SECONDARY_LIGHT: '--color-dark-secondary',
    COLOR_LIGHT_PRIMARY: '--color-light-primary',
    COLOR_LIGHT_SECONDARY: '--color-light-secondary',

    COLOR_PRIMARY: '--color-primary',
    COLOR_SECONDARY: '--color-secondary',

    UNOPENED_CELL_DARK: '--color-dark-unopened-cells',
    UNOPENED_CELL_LIGHT: '--color-light-unopened-cells',

    UNOPENED_CELL: '--color-unopened-cells',

    CELL_OPENED_DARK_EVEN: '--cell-opened-dark-even',
    CELL_OPENED_DARK_ODD: '--cell-opened-dark-odd',

    CELL_OPENED_LIGHT_EVEN: '--cell-opened-light-even',
    CELL_OPENED_LIGHT_ODD: '--cell-opened-light-odd',

    CELL_OPENED_EVEN: '--cell-opened-even',
    CELL_OPENED_ODD: '--cell-opened-odd',

    MARK_ICON: '--mark-icon',
    COLOR_DARK_MARK_CELL: '--color-dark-mark-cell',
    COLOR_LIGHT_MARK_CELL: '--color-light-mark-cell',

    COLOR_MARK_CELL: '--color-mark-cell',

    GAME_FIELD_WIDTH: '--game-field-width',
    GAME_FIELD_HEIGHT: '--game-field-height',

    CELL_WIDTH: '--cell-width',
    CELL_HEIGHT: '--cell-height',

    POPUP_DARK: '--popup-dark',
    POPUP_LIGHT: '--popup-light',
    POPUP_COLOR: '--color-popup',

    CELL_TEXT_DARK_GREEN: '--cell-text-color-dark-green',
    CELL_TEXT_DARK_YELLOW: '--cell-text-color-dark-yellow',
    CELL_TEXT_DARK_RED: '--cell-text-color-dark-red',

    CELL_TEXT_LIGHT_GREEN: '--cell-text-color-light-green',
    CELL_TEXT_LIGHT_YELLOW: '--cell-text-color-light-yellow',
    CELL_TEXT_LIGHT_RED: '--cell-text-color-light-red',

    CELL_TEXT_GREEN: '--cell-text-color-green',
    CELL_TEXT_YELLOW: '--cell-text-color-yellow',
    CELL_TEXT_RED: '--cell-text-color-red',
};

const SOUNDS = {
    LOSE: '../../../assets/sounds/lose.mp3',
    WIN: '../../../assets/sounds/win.mp3',
    CELL_CLICK: '../../../assets/sounds/cell.mp3'
};

const DIFFICULTIES = new Map([
    [ 'ease',
        {
            size: 100,
            rowColNum: 10,
            gameFieldHeight: '40rem',
            gameFieldWidth: '40rem',
            cellHeight: '4rem',
            cellWidth: '4rem'
        }
    ],

    [ 'medium',
        {
            size: 225,
            rowColNum: 15,
            gameFieldHeight: '50rem',
            gameFieldWidth: '50rem',
            cellHeight: '3.3333333333333333333333333333333rem',
            cellWidth: '3.3333333333333333333333333333333rem'
        }
    ],

    [ 'hard',
        {
            size: 625,
            rowColNum: 25,
            gameFieldHeight: '50rem',
            gameFieldWidth: '50rem',
            cellHeight: '2rem',
            cellWidth: '2rem'
        }
    ]
]);

const userData = JSON.parse(localStorage.getItem('user-data')) || {};

const addGameData = function (data) {
    console.log(userData.gameData.length, userData.gameData);
    if (userData.gameData.length === 10) userData.gameData.pop();
    userData.gameData.unshift(data);
    storeUserData();
};

const storeUserData = () => localStorage.setItem('user-data', JSON.stringify(userData));

if (!userData.gameData) {
    userData.gameData = [];
}

export {
    STYLES_CELL,
    STYLES_BTN,
    CSS_VAR,
    DIFFICULTIES,
    STYLES_CONTROLS,
    STYLES_MENU,
    STYLES_POPUP,
    userData,
    SOUNDS,
    storeUserData,
    addGameData
};