import { storeUserData, STYLES_BTN, STYLES_MENU, userData } from '../../data/data.js';

export default class AdjustSound {
    constructor() {
        this.soundAdjWrapper = document.createElement('div');
        this.soundElem = document.createElement('div');

        ({ isMuted: this.isMuted = false } = userData);

        this.soundAdjWrapper.addEventListener('click', () => {
            this.isMuted = !this.isMuted;

            userData.isMuted = this.isMuted;
            storeUserData();

            this.soundElem.classList.toggle(STYLES_MENU.SOUND_ADJ_ICON_ACTIVE);
        });
    }

    _renderSoundAdj() {
        this.soundAdjWrapper.classList.add(STYLES_BTN.BTN, STYLES_MENU.SOUND_ADJ);
        this.soundElem.classList.add(STYLES_MENU.SOUND_ADJ_ICON, !this.isMuted && STYLES_MENU.SOUND_ADJ_ICON_ACTIVE);

        this.soundElem.innerHTML = `
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <g id="volume" clip-path="url(#clip0_7_11)">
                    <path id="Vector"
                          d="M13 30.0002C12.74 30.0002 12.484 29.8982 12.293 29.7072L4.586 22.0002H1C0.448 22.0002 0 21.5522 0 21.0002V11.0002C0 10.4482 0.448 10.0002 1 10.0002H4.586L12.293 2.29319C12.579 2.00719 13.009 1.92119 13.383 2.07619C13.757 2.23119 14 2.59519 14 3.00019V29.0002C14 29.4042 13.756 29.7692 13.383 29.9242C13.259 29.9752 13.129 30.0002 13 30.0002Z"/>
                    <g id="Group 1">
                        <path id="sound-low" d="M17.1572 23.1569C16.7732 23.1569 16.3892 23.0109 16.0962 22.7179C15.5102 22.1319 15.5102 21.1829 16.0962 20.5969C18.6302 18.0629 18.6302 13.9389 16.0962 11.4049C15.5102 10.8189 15.5102 9.86885 16.0962 9.28385C16.6822 8.69885 17.6312 8.69785 18.2172 9.28385C21.9212 12.9879 21.9212 19.0149 18.2172 22.7189C17.9242 23.0119 17.5402 23.1579 17.1562 23.1579L17.1572 23.1569Z"/>
                        <path id="sound-loud" d="M22.5005 25.9691C22.1165 25.9691 21.7325 25.8231 21.4395 25.5301C20.8535 24.9441 20.8535 23.9951 21.4395 23.4091C25.5335 19.3151 25.5335 12.6541 21.4395 8.56013C20.8535 7.97413 20.8535 7.02413 21.4395 6.43913C22.0255 5.85413 22.9755 5.85313 23.5605 6.43913C26.1105 8.98913 27.5145 12.3791 27.5145 15.9851C27.5145 19.5911 26.1105 22.9811 23.5605 25.5311C23.2675 25.8241 22.8835 25.9701 22.4995 25.9701L22.5005 25.9691Z"/>
                        <path id="sound-muted" d="M30 19.348v2.652h-2.652l-3.348-3.348-3.348 3.348h-2.652v-2.652l3.348-3.348-3.348-3.348v-2.652h2.652l3.348 3.348 3.348-3.348h2.652v2.652l-3.348 3.348 3.348 3.348z"></path>
                    </g>
                </g>
            </svg>
        `;

        this.soundAdjWrapper.append(this.soundElem);
        document.querySelector(`.${ STYLES_MENU.MENU }`).append(this.soundAdjWrapper);
    }

    init() {
        this._renderSoundAdj();
    }
}