import './style.css';
import App from './public/js/components/app/app.js';
import PopupMenu from './public/js/components/menu/popup-menu.js';
import RestartGame from './public/js/components/controls/restart-game.js';
import Controls from './public/js/components/controls/controls.js';
import Timer from './public/js/components/controls/timer.js';
import ClickCounter from './public/js/components/controls/click-counter.js';
import NumOfFlags from './public/js/components/controls/num-of-flags.js';
import NumOfMines from './public/js/components/controls/num-of-mines.js';
import OpenMenuBtn from './public/js/components/controls/open-menu-btn.js';
import ThemeToggle from './public/js/components/menu/theme-toggle.js';
import Difficulty from './public/js/components/menu/difficulty.js';
import AdjustSound from './public/js/components/menu/adjust-sound.js';
import { STYLES_MENU, STYLES_POPUP } from './public/js/data/data.js';
import MinesInput from './public/js/components/menu/mines-input.js';
import LatestResults from './public/js/components/menu/latest-results.js';

new Controls().init();
new PopupMenu().init(STYLES_MENU.POPUP_MENU);
new PopupMenu().init(STYLES_POPUP.POPUP_WIN, 'You Win! <br> 🎉🎉🎉', false);
new PopupMenu().init(STYLES_POPUP.POPUP_LOSE, 'You Lose( <br> 💥💥💥', false);
new RestartGame().init();
new Timer().init();
const clickCounter = new ClickCounter();
clickCounter.init();
new NumOfFlags().init();
new NumOfMines().init();

new OpenMenuBtn().init();
new ThemeToggle().init();
new Difficulty().init();
new AdjustSound().init();
new MinesInput().init();

const latestResults = new LatestResults();
latestResults.init();
const app = new App();
app.init();

export { app, clickCounter, latestResults };
