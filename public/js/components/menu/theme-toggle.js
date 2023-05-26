import { CSS_VAR, storeUserData, STYLES_MENU, userData } from '../../data/data.js';

export default class ThemeToggle {
    toggleBtn = document.createElement('button');
    circle;
    moon;
    sun;

    constructor() {
        ({ isDarkTheme: this.isDarkTheme = true } = userData);
        this.toggleBtn.addEventListener('click', this._toggleThemeClickHandler.bind(this));

        document.body.style.transition = 'none';
        setTimeout(() => {
            document.body.style.transition = '';
        });
    }

    _renderThemeToggle() {
        this.toggleBtn.classList.add(STYLES_MENU.THEME_TOGGLE);
        this.toggleBtn.innerHTML = `
            <svg viewBox="0 0 90 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="toggler">
                    <rect class="${ STYLES_MENU.THEME_TOGGLE_WRAPPER }" id="toggler-wrapper" width="90" height="44" rx="22"/>
                    <path class="${ STYLES_MENU.THEME_TOGGLE_MOON }" id="moon"
                          d="M32.6839 24.6702C31.4893 29.4564 27.1613 33 22.005 33C15.9262 33 11 28.0738 11 21.995C11 16.8387 14.5456 12.5127 19.3298 11.3161V11.3161C20.3558 11.0589 21.1397 12.0999 21.0429 13.1532C21.0175 13.4292 21.0045 13.7087 21.0045 13.9914C21.0045 18.9636 25.0364 22.9955 30.0086 22.9955C30.2912 22.9955 30.5707 22.9824 30.8466 22.9568C31.9008 22.8593 32.9406 23.6431 32.6839 24.6702V24.6702Z"/>
                    <path class="${ STYLES_MENU.THEME_TOGGLE_CIRCLE }" id="toggle-btn"
                          d="M39 22C39 31.3888 31.3888 39 22 39C12.6112 39 5 31.3888 5 22C5 12.6112 12.6112 5 22 5C31.3888 5 39 12.6112 39 22Z"/>
                          
                    <g class="${ STYLES_MENU.THEME_TOGGLE_SUN }" id="sun">
                        <path id="sun-body"
                              d="M74.406 21.9029C74.406 25.4375 71.5406 28.3029 68.006 28.3029C64.4714 28.3029 61.606 25.4375 61.606 21.9029C61.606 18.3683 64.4714 15.5029 68.006 15.5029C71.5406 15.5029 74.406 18.3683 74.406 21.9029Z"/>
                        <rect class="${ STYLES_MENU.THEME_TOGGLE_SUN_SUNBEAM }" id="sunbeam" x="62.2622" y="17.084" width="3.4727" height="1.1601" rx="0.580049"
                              transform="rotate(-135 62.2622 17.084)" />
                        <path class="${ STYLES_MENU.THEME_TOGGLE_SUN_SUNBEAM }" id="sunbeam_2"
                              d="M68.0058 14.4727C67.6855 14.4727 67.4258 14.213 67.4258 13.8926V11.58C67.4258 11.2597 67.6855 11 68.0058 11V11C68.3262 11 68.5859 11.2597 68.5859 11.58V13.8926C68.5859 14.213 68.3262 14.4727 68.0058 14.4727V14.4727Z"/>
                        <path class="${ STYLES_MENU.THEME_TOGGLE_SUN_SUNBEAM }" id="sunbeam_3"
                              d="M73.3315 16.6802C73.105 16.4537 73.105 16.0864 73.3315 15.8599L74.9668 14.2246C75.1933 13.9981 75.5606 13.9981 75.7871 14.2246V14.2246C76.0136 14.4511 76.0136 14.8184 75.7871 15.0449L74.1519 16.6802C73.9253 16.9067 73.5581 16.9067 73.3315 16.6802V16.6802Z"/>
                        <path class="${ STYLES_MENU.THEME_TOGGLE_SUN_SUNBEAM }" id="sunbeam_4"
                              d="M75.5273 21.998C75.5273 21.6777 75.787 21.418 76.1074 21.418H78.42C78.7403 21.418 79 21.6777 79 21.998V21.998C79 22.3184 78.7403 22.5781 78.42 22.5781H76.1074C75.787 22.5781 75.5273 22.3184 75.5273 21.998V21.998Z"/>
                        <path class="${ STYLES_MENU.THEME_TOGGLE_SUN_SUNBEAM }" id="sunbeam_5"
                              d="M73.3286 27.3325C73.5551 27.106 73.9224 27.106 74.1489 27.3325L75.7842 28.9678C76.0107 29.1943 76.0107 29.5616 75.7842 29.7881V29.7881C75.5577 30.0146 75.1904 30.0146 74.9639 29.7881L73.3286 28.1528C73.1021 27.9263 73.1021 27.559 73.3286 27.3325V27.3325Z"/>
                        <path class="${ STYLES_MENU.THEME_TOGGLE_SUN_SUNBEAM }" id="sunbeam_6"
                              d="M67.998 33C67.6777 33 67.418 32.7403 67.418 32.42V30.1074C67.418 29.787 67.6777 29.5273 67.998 29.5273V29.5273C68.3184 29.5273 68.5781 29.787 68.5781 30.1074V32.42C68.5781 32.7403 68.3184 33 67.998 33V33Z"/>
                        <path class="${ STYLES_MENU.THEME_TOGGLE_SUN_SUNBEAM }" id="sunbeam_7"
                              d="M60.2188 29.7773C59.9922 29.5508 59.9922 29.1836 60.2187 28.957L61.854 27.3218C62.0805 27.0953 62.4478 27.0953 62.6743 27.3218V27.3218C62.9008 27.5483 62.9008 27.9156 62.6743 28.1421L61.0391 29.7773C60.8125 30.0039 60.4453 30.0039 60.2188 29.7773V29.7773Z"/>
                        <path class="${ STYLES_MENU.THEME_TOGGLE_SUN_SUNBEAM }" id="sunbeam_8"
                              d="M57 22.0029C57 21.6825 57.2597 21.4229 57.58 21.4229H59.8926C60.213 21.4229 60.4727 21.6825 60.4727 22.0029V22.0029C60.4727 22.3233 60.213 22.5829 59.8926 22.5829H57.58C57.2597 22.5829 57 22.3233 57 22.0029V22.0029Z"/>
                    </g>
                </g>
            </svg>
        `;

        document.querySelector(`.${ STYLES_MENU.MENU }`).append(this.toggleBtn);

        this.circle = document.querySelector(`.${ STYLES_MENU.THEME_TOGGLE_CIRCLE }`);
        this.moon = document.querySelector(`.${ STYLES_MENU.THEME_TOGGLE_MOON }`);
        this.sun = document.querySelector(`.${ STYLES_MENU.THEME_TOGGLE_SUN }`);

        this._initTheme();
    }

    _initTheme() {
        this._changeTheme();

        if (this.isDarkTheme) {
            this.sun.classList.add(STYLES_MENU.THEME_TOGGLE_SUN_ACTIVE);
            [ ...this.sun.children ].forEach(
                child => child.classList.add(STYLES_MENU.THEME_TOGGLE_SUN_SUNBEAM_ACTIVE)
            );
        }

        if (!this.isDarkTheme) {
            this.moon.classList.add(STYLES_MENU.THEME_TOGGLE_MOON_ACTIVE);
            this.circle.classList.add(STYLES_MENU.THEME_TOGGLE_CIRCLE_POS_LIGHT);
        }
    }

    _changeTheme() {
        const cssVars = document.documentElement.style;
        const computedVars = getComputedStyle(document.documentElement);
        const getComputedVar = varName => computedVars.getPropertyValue(varName);

        if (this.isDarkTheme) {
            cssVars.setProperty(CSS_VAR.COLOR_PRIMARY, getComputedVar(CSS_VAR.COLOR_PRIMARY_DARK));
            cssVars.setProperty(CSS_VAR.COLOR_SECONDARY, getComputedVar(CSS_VAR.COLOR_LIGHT_PRIMARY));

            cssVars.setProperty(CSS_VAR.POPUP_COLOR, getComputedVar(CSS_VAR.POPUP_DARK));

            cssVars.setProperty(CSS_VAR.CELL_OPENED_EVEN, getComputedVar(CSS_VAR.CELL_OPENED_DARK_EVEN));
            cssVars.setProperty(CSS_VAR.CELL_OPENED_ODD, getComputedVar(CSS_VAR.CELL_OPENED_DARK_ODD));

            cssVars.setProperty(CSS_VAR.UNOPENED_CELL, getComputedVar(CSS_VAR.UNOPENED_CELL_DARK));
            cssVars.setProperty(CSS_VAR.COLOR_MARK_CELL, getComputedVar(CSS_VAR.COLOR_DARK_MARK_CELL));

            cssVars.setProperty(CSS_VAR.CELL_TEXT_GREEN, getComputedVar(CSS_VAR.CELL_TEXT_DARK_GREEN));
            cssVars.setProperty(CSS_VAR.CELL_TEXT_YELLOW, getComputedVar(CSS_VAR.CELL_TEXT_DARK_YELLOW));
            cssVars.setProperty(CSS_VAR.CELL_TEXT_RED, getComputedVar(CSS_VAR.CELL_TEXT_DARK_RED));
        }

        if (!this.isDarkTheme) {
            cssVars.setProperty(CSS_VAR.COLOR_PRIMARY, getComputedVar(CSS_VAR.COLOR_LIGHT_PRIMARY));
            cssVars.setProperty(CSS_VAR.COLOR_SECONDARY, getComputedVar(CSS_VAR.COLOR_PRIMARY_DARK));

            cssVars.setProperty(CSS_VAR.POPUP_COLOR, getComputedVar(CSS_VAR.POPUP_LIGHT));

            cssVars.setProperty(CSS_VAR.CELL_OPENED_EVEN, getComputedVar(CSS_VAR.CELL_OPENED_LIGHT_EVEN));
            cssVars.setProperty(CSS_VAR.CELL_OPENED_ODD, getComputedVar(CSS_VAR.CELL_OPENED_LIGHT_ODD));

            cssVars.setProperty(CSS_VAR.UNOPENED_CELL, getComputedVar(CSS_VAR.UNOPENED_CELL_LIGHT));
            cssVars.setProperty(CSS_VAR.COLOR_MARK_CELL, getComputedVar(CSS_VAR.COLOR_LIGHT_MARK_CELL));

            cssVars.setProperty(CSS_VAR.CELL_TEXT_GREEN, getComputedVar(CSS_VAR.CELL_TEXT_LIGHT_GREEN));
            cssVars.setProperty(CSS_VAR.CELL_TEXT_YELLOW, getComputedVar(CSS_VAR.CELL_TEXT_LIGHT_YELLOW));
            cssVars.setProperty(CSS_VAR.CELL_TEXT_RED, getComputedVar(CSS_VAR.CELL_TEXT_LIGHT_RED));
        }
    }

    _toggleThemeClickHandler() {
        this.circle.classList.add(STYLES_MENU.THEME_TOGGLE_CIRCLE_MOVE);
        this.circle.onanimationend = () => this.circle.classList.remove(STYLES_MENU.THEME_TOGGLE_CIRCLE_MOVE);
        this.circle.classList.toggle(STYLES_MENU.THEME_TOGGLE_CIRCLE_POS_LIGHT);

        this.moon.classList.toggle(STYLES_MENU.THEME_TOGGLE_MOON_ACTIVE);
        this.sun.classList.toggle(STYLES_MENU.THEME_TOGGLE_SUN_ACTIVE);
        this.sun.querySelectorAll(`.${ STYLES_MENU.THEME_TOGGLE_SUN_SUNBEAM }`)
            .forEach(beam => {
                beam.classList.toggle(STYLES_MENU.THEME_TOGGLE_SUN_SUNBEAM_ACTIVE);
            });

        this.isDarkTheme = !this.isDarkTheme;

        userData.isDarkTheme = this.isDarkTheme;
        storeUserData();

        this._changeTheme();
    }

    init() {
        this._renderThemeToggle();
    }
}