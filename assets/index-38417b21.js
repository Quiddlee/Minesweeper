var N=Object.defineProperty;var P=(c,n,e)=>n in c?N(c,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):c[n]=e;var l=(c,n,e)=>(P(c,typeof n!="symbol"?n+"":n,e),e);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();const A=["1-1","2-1","3-2","2-3","3-4","2-5","1-5","1-8","2-8","3-8","5-1","6-1","7-1","8-1","6-2","7-3","8-4","5-4","6-4","7-4","5-8","6-8","8-8","5-6","6-6","8-6"],I=new Map([["ease",["0-2","1-2","2-2","3-2","3-3","1-5","2-5","0-6","1-7","2-7","3-6","5-2","5-3","5-4","6-2","7-3","8-4","9-2","9-3","9-4","5-6","5-7","6-6","7-6","7-7","8-6","9-6","9-7"]],["medium",["2-4","3-4","4-4","5-4","5-5","5-6","3-8","4-8","2-9","3-10","4-10","5-9","7-4","7-5","7-6","8-4","9-5","10-6","11-4","11-5","11-6","7-8","7-9","8-8","9-8","9-9","10-8","11-8","11-9","7-10","9-10","11-10"]],["hard",["2-8","3-8","4-8","5-8","5-9","5-10","3-12","4-12","2-13","3-14","4-14","5-14","7-8","7-9","7-10","8-8","9-9","10-10","11-8","11-9","11-10","7-12","7-13","8-12","9-12","9-13","10-12","11-12","11-13","7-14","9-14","11-14"]]]),_={DEF:"game-field__cell",MARKED:"game-field__cell--marked",TEXT:"game-field__cell-text",OPEN_LIGHT:"game-field__cell--open-light",OPEN_DARK:"game-field__cell--open-dark",CLOSED:"game-field__cell--close",CELL_MARK_ICON:"game-field__cell__mark-icon"},h={BTN:"btn",CLOSE:"btn--close",ROUNDED:"btn--rounded",POPUP:"popup__btn"},E={POPUP:"popup",POPUP_ACTIVE:"popup-active",POPUP_WIN:"popup--win",POPUP_LOSE:"popup--lose"},d={CONTROLS:"controls",RESTART_GAME:"controls__restart-game",RESTART_GAME_ICON:"controls__restart-game__icon",NUM_OF_FLAGS:"controls__num-of-flags",NUM_OF_FLAGS_NUM:"controls__num-of-flags__num",NUM_OF_FLAGS_ICON:"controls__num-of-flags__icon",COUNTER:"controls__click-counter",ClICK_COUNTER:"controls__click-counter",NUM_OF_MINES:"controls__num-of-mines",NUM_OF_MINES_ICON:"controls__num-of-mines__icon",NUM_OF_MINES_NUM:"controls__num-of-mines__num",TIMER:"controls__timer-wrapper__timer",TIMER_WRAPPER:"controls__timer-wrapper",TIMER_ICON:"controls__timer-wrapper__icon",OPEN_MENU_BTN:"controls__open-menu-btn",OPEN_MENU_BTN_INNER:"controls__open-menu-btn__inner"},r={POPUP_MENU:"menu",THEME_TOGGLE:"menu__theme-toggle",THEME_TOGGLE_WRAPPER:"menu__theme-toggle__wrapper",THEME_TOGGLE_MOON:"menu__theme-toggle__moon",THEME_TOGGLE_MOON_ACTIVE:"menu__theme-toggle__moon-active",THEME_TOGGLE_SUN:"menu__theme-toggle__sun",THEME_TOGGLE_SUN_ACTIVE:"menu__theme-toggle__sun-active",THEME_TOGGLE_SUN_SUNBEAM:"menu__theme-toggle__sun__sunbeam",THEME_TOGGLE_SUN_SUNBEAM_ACTIVE:"menu__theme-toggle__sun__sunbeam-active",THEME_TOGGLE_CIRCLE:"menu__theme-toggle__circle",THEME_TOGGLE_CIRCLE_POS_LIGHT:"menu__theme-toggle__circle-pos-light",THEME_TOGGLE_CIRCLE_MOVE:"menu__theme-toggle__circle-move",DIFF_TABS_WRAPPER:"menu__difficulty",DIFF_TAB:"menu__difficulty__tab",DIFF_TAB_1:"menu__difficulty__tab--0",DIFF_TAB_2:"menu__difficulty__tab--1",DIFF_TAB_3:"menu__difficulty__tab--2",DIFF_TAB_ACTIVE:"menu__difficulty__tab--active",SOUND_ADJ:"menu__sound-adjustment",SOUND_ADJ_ICON:"menu__sound-adjustment__icon"},o={COLOR_PRIMARY_DARK:"--color-dark-primary",COLOR_SECONDARY_LIGHT:"--color-dark-secondary",COLOR_LIGHT_PRIMARY:"--color-light-primary",COLOR_LIGHT_SECONDARY:"--color-light-secondary",COLOR_PRIMARY:"--color-primary",COLOR_SECONDARY:"--color-secondary",UNOPENED_CELL_DARK:"--color-dark-unopened-cells",UNOPENED_CELL_LIGHT:"--color-light-unopened-cells",UNOPENED_CELL:"--color-unopened-cells",CELL_OPENED_DARK_EVEN:"--cell-opened-dark-even",CELL_OPENED_DARK_ODD:"--cell-opened-dark-odd",CELL_OPENED_LIGHT_EVEN:"--cell-opened-light-even",CELL_OPENED_LIGHT_ODD:"--cell-opened-light-odd",CELL_OPENED_EVEN:"--cell-opened-even",CELL_OPENED_ODD:"--cell-opened-odd",MARK_ICON:"--mark-icon",COLOR_DARK_MARK_CELL:"--color-dark-mark-cell",COLOR_LIGHT_MARK_CELL:"--color-light-mark-cell",COLOR_MARK_CELL:"--color-mark-cell",GAME_FIELD_WIDTH:"--game-field-width",GAME_FIELD_HEIGHT:"--game-field-height",CELL_WIDTH:"--cell-width",CELL_HEIGHT:"--cell-height",POPUP_DARK:"--popup-dark",POPUP_LIGHT:"--popup-light",POPUP_COLOR:"--color-popup"},T=new Map([["ease",{size:100,rowColNum:10,gameFieldHeight:"40rem",gameFieldWidth:"40rem",cellHeight:"4rem",cellWidth:"4rem"}],["medium",{size:225,rowColNum:15,gameFieldHeight:"50rem",gameFieldWidth:"50rem",cellHeight:"3.3333333333333333333333333333333rem",cellWidth:"3.3333333333333333333333333333333rem"}],["hard",{size:625,rowColNum:25,gameFieldHeight:"50rem",gameFieldWidth:"50rem",cellHeight:"2rem",cellWidth:"2rem"}]]),u=JSON.parse(localStorage.getItem("user-data"))||{},L=()=>localStorage.setItem("user-data",JSON.stringify(u));class C{constructor(){this.popup=document.createElement("dialog"),this.popupCloseBtn=document.createElement("button"),this.popupCloseBtn.addEventListener("click",this._closePopupHandler.bind(this)),this.popup.addEventListener("keydown",this._closePopupHandler.bind(this)),document.body.addEventListener("click",this._closeOutsidePopup.bind(this))}_openPopup(n){const e=document.querySelector(`.${n}`);e.showModal(),e.classList.add(E.POPUP_ACTIVE),e.blur()}_animateAndClosePopup(){this.popup.style.animation="popupFadeOut .3s",this.popup.classList.remove(E.POPUP_ACTIVE),this.popup.addEventListener("animationend",()=>{this.popup.style.animation="",this.popup.close()},{once:!0})}_closePopupHandler(n){(n.key==="Escape"||n.target.classList.contains(h.CLOSE))&&(n.preventDefault(),this._animateAndClosePopup())}_closeOutsidePopup(n){if(n.target!==this.popup)return;const e=n.target.getBoundingClientRect();e.top<=n.clientY&&n.clientY<=e.top+e.height&&e.left<=n.clientX&&n.clientX<=e.left+e.width||this._animateAndClosePopup()}_renderPopup(n,e=""){this.popup.classList.add(E.POPUP,n),this.popup.prepend(this.popupCloseBtn),document.body.prepend(this.popup),this.popup.innerHTML=e,this.popup=document.querySelector(`.${E.POPUP}`)}_renderPopupCloseBtn(){this.popupCloseBtn.classList.add(h.POPUP,h.BTN,h.CLOSE),this.popupCloseBtn.textContent="✖",this.popup.append(this.popupCloseBtn)}init(n,e){this._renderPopup(n,e),this._renderPopupCloseBtn()}}class S extends C{constructor(){super(...arguments);l(this,"marks",0);l(this,"marksCounterElem",document.querySelector(`.${d.NUM_OF_FLAGS_NUM}`))}_addMarkHandler(e){e.preventDefault();const t=e.target.closest(".game-field__cell"),s=this._getCellData(t==null?void 0:t.dataset.id);if(!(t!=null&&t.classList.contains(_.CLOSED)))return;if((t==null?void 0:t.innerHTML.length)>0)return this._removeMark(t,s);const i=document.createElement("div");i.classList.add(_.CELL_MARK_ICON),i.innerHTML=`
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="flag">
                    <path id="Vector" d="M0 0H4V32H0V0Z"/>
                    <g class="hide" id="banner">
                        <path id="Vector_2" d="M26 20.0939C28.582 20.0939 30.83 19.4689 32 18.5469V2.54688C30.83 3.46887 28.582 4.09387 26 4.09387C23.418 4.09387 21.17 3.46887 20 2.54688V18.5469C21.17 19.4689 23.418 20.0939 26 20.0939Z"/>
                        <path id="Vector_3" d="M19 1.016C17.534 0.393 15.39 0 13 0C9.988 0 7.365 0.625 6 1.547V17.547C7.365 16.625 9.988 16 13 16C15.39 16 17.534 16.393 19 17.016V1.016Z"/>
                    </g>
                </g>
            </svg>
        `,t.append(i),this._addMark(t,s)}_addMark(e,t){const s=e.querySelector("#banner");e.classList.add(_.MARKED),s.addEventListener("animationend",()=>{s.classList.remove("hide"),s.classList.add("show"),t.isFlag=!0},{once:!0}),this.marks++,this._renderMarksNums()}_removeMark(e,t){const s=e.querySelector("#banner"),i=e.querySelector("#flag");s.style.animation="markBannerFadeOut .2s",i.style.animation="markStickFadeOut .2s",s.addEventListener("animationend",()=>{e.classList.remove(_.MARKED),t.isFlag=!1,e.innerHTML=""},{once:!0}),this.marks--,this._renderMarksNums()}_renderMarksNums(){const e=this.marksCounterElem;return e.textContent=this.marks||0,this}}class D extends S{constructor(){super(...arguments);l(this,"animate");l(this,"clickAnimationQueue",new Set);l(this,"isWin",!1)}_clickHandler(e){this.isWin=!1;const t=e.target,s=t.classList;if(!u.isMuted){const a=new Audio("assets/sounds/cell.mp3");a.volume=.2,a.play()}if(!s.contains(_.DEF)||s.contains(_.MARKED))return;const i=this._getCellData(t.dataset.id);if(i.isMine){if(!u.isMuted){const a=new Audio("assets/sounds/lose.mp3");a.volume=.7,a.play()}return this._clearCells().then(p.restartGame.bind(p)),this._openPopup(E.POPUP_LOSE)}this.animate=this._createAnimateFunction(this.clickAnimationQueue),this._showMinesAroundNum(i,t),this._openCell(i,t),this._checkForWin(),i.minesAround===0&&this._openAdjacentCells(i)}_showMinesAroundNum(e,t){const s=document.createElement("span");t.textContent="",s.textContent=e.minesAround||"",s.classList.add(_.TEXT),t.append(s)}_paintChessBoard(e,t){const s=parseInt(e),i=parseInt(e==null?void 0:e.slice(e.indexOf("-")));(s%2===0&&i%2===0||s%2!==0&&i%2!==0)&&t.classList.add(_.OPEN_LIGHT),(s%2===0&&i%2!==0||s%2!==0&&i%2===0)&&t.classList.add(_.OPEN_DARK)}_openCell(e,t){const{id:s}=e;e.isFlag=e.isClose=!1,t.style.animation="cellFadeOut .2s",t.onanimationend=()=>{t.classList.remove(_.CLOSED,_.MARKED)},this._paintChessBoard(s,t)}_createAnimateFunction(e,t=.1){let s=0,i=1;return a=>{if(s+=30/(i+=t),!e)return setTimeout(a,s);const m=new Promise(g=>{setTimeout(()=>g(a()),s)});e.add(m)}}_checkForWin(){if(!this.isWin){for(const e of this.cells.values())if(!e.isMine&&e.isClose)return;if(!u.isMuted){const e=new Audio("assets/sounds/win.mp3");e.volume=.5,e.play()}this._clearCells().then(p.restartGame.bind(p)),this._openPopup(E.POPUP_WIN),this.isWin=!0}}_getAdjacentCellsAround(e){const t=Number.parseInt(e),s=Number.parseInt(e==null?void 0:e.slice(e.indexOf("-")+1));return[`${t}-${s+1}`,`${t-1}-${s}`,`${t}-${s-1}`,`${t+1}-${s}`,`${t+1}-${s+1}`,`${t-1}-${s-1}`,`${t+1}-${s-1}`,`${t-1}-${s+1}`]}_openAdjacentCells({id:e}){this._checkForWin(),this._getAdjacentCellsAround(e).forEach(t=>{const s=this._getCellData(t),i=this._getCellElement(t);!i||!s.isClose||s.isMine||(s.isClose=!1,this.animate(()=>{this._openCell(s,i),this._showMinesAroundNum(s,i)}),s.minesAround===0&&setTimeout(this._openAdjacentCells.bind(this,s)))})}_clearCells(e=.1){const t=new Set;return this.animate=this._createAnimateFunction(t,e),this.cells.forEach(s=>{const i=this._getCellElement(s.id);this.animate(()=>{i.classList.remove(_.MARKED);const a=i.firstElementChild;a&&(a.style.animation="textFadeOut .2s",a.onanimationend=()=>i.textContent=""),this._paintChessBoard(s.id,i)})}),Promise.all(t)}_drawMessage(e){this.timerId&&clearInterval(this.timerId),this.animate=this._createAnimateFunction(),e.forEach(t=>{const s=this._getCellElement(t);this.animate(()=>{s.className=_.DEF,s.classList.add(_.CLOSED)})})}_drawLoseMessage(){this._clearCells().then(this._drawMessage.bind(this,I.get(u.difficulty)))}_drawWinMessage(){this._clearCells().then(this._drawMessage.bind(this,A))}}class G extends D{constructor(){super();l(this,"cells");l(this,"timerId");l(this,"cssVar",document.documentElement.style);l(this,"gameSize");l(this,"rowColSize");({isFirstLoad:this.isFirstLoad=!0,difficulty:this.difficulty="ease"}=u),{size:this.gameSize,rowColNum:this.rowColSize}=T.get(this.difficulty),this.gameField=this._initializeGameField();const e=document.querySelector(`.${d.RESTART_GAME}`);e.addEventListener("click",this.restartGame.bind(this,e)),this.gameField.addEventListener("click",this._clickHandler.bind(this)),this.gameField.addEventListener("contextmenu",this._addMarkHandler.bind(this)),document.querySelector(`.${r.DIFF_TABS_WRAPPER}`).addEventListener("click",this._setDifficulty.bind(this))}_setDifficulty(e){const t=e.target;if(!t.classList.contains(r.DIFF_TAB))return;const s=t.textContent.toLowerCase();this.difficulty!==s&&(this.difficulty=s,u.difficulty=this.difficulty,L(),{size:this.gameSize,rowColNum:this.rowColSize}=T.get(this.difficulty),this.restartGame("_",!0))}_setGameFieldSize(){const{gameFieldHeight:e,gameFieldWidth:t,cellWidth:s,cellHeight:i}=T.get(this.difficulty);this.cssVar.setProperty(o.GAME_FIELD_HEIGHT,e),this.cssVar.setProperty(o.GAME_FIELD_WIDTH,t),this.cssVar.setProperty(o.CELL_HEIGHT,i),this.cssVar.setProperty(o.CELL_WIDTH,s)}_initializeGameField(){const e=document.createElement("div");return document.body.setAttribute("id","app"),document.body.prepend(e),e.classList.add("game-field"),this._setGameFieldSize(),e}_getCellData(e){return this.cells.get(e)||{}}_getCellElement(e){return document.querySelector(`[data-id='${e}']`)}_countMinesAround(e){this._getAdjacentCellsAround(e).forEach(t=>{this._getCellData(t).minesAround++})}_insertMines(e){const t=new Set;for(;e!==t.size;){const s=Math.floor(Math.random()*+(this.rowColSize+"0"))/10,i=Number.isInteger(s)?`${s}-0`:s.toString().replace(".","-");if(t.has(i))continue;t.add(i),this._countMinesAround(i);const a=this._getCellData(i);a.isMine=!0}}_generateCells(e){const t=new Map;let s=0,i=0;for(let a=0;a<e;a++){a%this.rowColSize===0&&a!==0&&(i=0,s++);const m={id:`${s}-${i}`,isMine:!1,isFlag:!1,isClose:!0,minesAround:0};t.set(m.id,m),i++}return t}_renderGame(e){const t=new Set,s=this._createAnimateFunction(t);this.gameField.innerHTML="";let i=0,a=0,m=1,g=this.difficulty==="ease"?3e-4:this.difficulty==="medium"?1e-4:5e-5;for(let M=0;M<e;M++){M%this.rowColSize===0&&M!==0&&(a=0,i++);const O=document.createElement("div");O.dataset.id=`${i}-${a}`,O.classList.add(_.DEF),this.gameField.append(O),s(()=>{m<=1.2&&(m+=g),this.gameField.style.scale=m,O.classList.add(_.CLOSED)}),a++}Promise.all(t).then(()=>{this.gameField.style="",this.gameField.animate([{scale:m},{scale:.99,offset:.2},{scale:1}],{duration:300})})}restartGame(e,t=!1){this.timerId&&clearInterval(this.timerId);try{e.style.animation="restartFlip 1.5s",e.addEventListener("animationend",()=>e.style.animation="",{once:!0})}catch{}t&&this._setGameFieldSize(),f.resetCounter(),this.init.call(this)}_updateTimer(){this.timerId&&clearInterval(this.timerId);const e=document.querySelector(`.${d.TIMER}`);e.textContent="00:00";let t=0;const s=i=>{const a=Math.floor(i/60).toString(),m=Math.floor(i%60).toString();e.textContent=`${a.padStart(2,"0")}:${m.padStart(2,"0")}`};this.timerId=setInterval(()=>{s(++t)},1e3)}_displayNumOfMines(){const e=document.querySelector(`.${d.NUM_OF_MINES_NUM}`);e.textContent=this.numOfMines}_resetMarksCounter(){const e=this._renderMarksNums();e.marks=0,this._renderMarksNums()}init(){this.isFirstLoad?(this.numOfMines=0,this.isFirstLoad=!1,u.isFirstLoad=this.isFirstLoad,L()):{numOfMines:this.numOfMines=10}=u,this.cells=this._generateCells(this.gameSize),this._renderGame(this.gameSize),this._insertMines(this.numOfMines),this._updateTimer(),this._displayNumOfMines(),this._resetMarksCounter()}}class R{constructor(){this.restartBtn=document.createElement("button"),this.restartIcon=document.createElement("div")}_renderBtn(){this.restartBtn.classList.add(h.BTN,h.ROUNDED,d.RESTART_GAME),document.querySelector(`.${d.CONTROLS}`).prepend(this.restartBtn),this.restartIcon.classList.add(d.RESTART_GAME_ICON),this.restartIcon.innerHTML=`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M0.685 10h2.372v-0.205c0.108-4.434 3.724-7.996 8.169-7.996 4.515 0 8.174 3.672 8.174 8.201s-3.659 8.199-8.174 8.199c-1.898 0-3.645-0.65-5.033-1.738l1.406-1.504c1.016 0.748 2.27 1.193 3.627 1.193 3.386 0 6.131-2.754 6.131-6.15s-2.745-6.15-6.131-6.15c-3.317 0-6.018 2.643-6.125 5.945v0.205h2.672l-3.494 3.894-3.594-3.894z"></path>
            </svg>
        `,this.restartBtn.append(this.restartIcon)}init(){this._renderBtn()}}class y{constructor(){this.menuElem=document.createElement("div")}_renderMenu(){document.body.prepend(this.menuElem),this.menuElem.classList.add("controls")}init(){this._renderMenu()}}class H{constructor(){this.timerWrapper=document.createElement("div"),this.icon=document.createElement("div"),this.timer=document.createElement("div")}_renderTimer(){this.timerWrapper.classList.add(d.TIMER_WRAPPER),document.querySelector(".controls").prepend(this.timerWrapper),this.icon.classList.add(d.TIMER_ICON),this.icon.innerHTML=`
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <title>clock</title>
                <path d="M20.586 23.414l-6.586-6.586v-8.828h4v7.172l5.414 5.414zM16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 28c-6.627 0-12-5.373-12-12s5.373-12 12-12c6.627 0 12 5.373 12 12s-5.373 12-12 12z"></path>
            </svg>
        `,this.timer.classList.add(d.TIMER),this.timerWrapper.prepend(this.icon,this.timer)}init(){this._renderTimer()}}class F{constructor(){this.counter=document.createElement("div"),this.counterNum=0,window.addEventListener("click",n=>{n.target.classList.contains(_.DEF)&&(this.counter.textContent=++this.counterNum)})}_renderCounter(){this.counter.classList.add(d.COUNTER),this.counter.textContent=0,document.querySelector(".controls").prepend(this.counter)}resetCounter(){this.counter.textContent=this.counterNum=0}init(){this._renderCounter()}}class U{constructor(){this.numOfFlags=document.createElement("div"),this.icon=document.createElement("div"),this.num=document.createElement("span")}_renderCounter(){this.numOfFlags.classList.add(d.NUM_OF_FLAGS),this.num.classList.add(d.NUM_OF_FLAGS_NUM),this.num.textContent=0,this.icon.classList.add(d.NUM_OF_FLAGS_ICON),this.icon.innerHTML=`
            <svg viewBox="0 0 32 32" fill="" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path d="M0 0H4V32H0V0Z" fill=""/>
                    <g>
                        <path id="Vector_2" d="M26 20.0939C28.582 20.0939 30.83 19.4689 32 18.5469V2.54688C30.83 3.46887 28.582 4.09387 26 4.09387C23.418 4.09387 21.17 3.46887 20 2.54688V18.5469C21.17 19.4689 23.418 20.0939 26 20.0939Z" fill=""/>
                        <path id="Vector_3" d="M19 1.016C17.534 0.393 15.39 0 13 0C9.988 0 7.365 0.625 6 1.547V17.547C7.365 16.625 9.988 16 13 16C15.39 16 17.534 16.393 19 17.016V1.016Z" fill=""/>
                    </g>
                </g>
            </svg>
        `,this.numOfFlags.append(this.icon,this.num),document.querySelector(".controls").prepend(this.numOfFlags)}init(){this._renderCounter()}}class w{constructor(){l(this,"numOfMines",document.createElement("div"));l(this,"icon",document.createElement("div"));l(this,"num",document.createElement("span"))}_renderMinesNum(){this.numOfMines.classList.add(d.NUM_OF_MINES),this.icon.classList.add(d.NUM_OF_MINES_ICON),this.icon.innerHTML=`
            <svg viewBox="0 0 751 752" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path d="M728.093 354.04L686.031 342.962C680.958 341.613 675.666 341.316 670.473 342.092C665.13 300.352 650.681 260.289 628.167 224.743L664.131 163.764C672.469 149.701 669.11 141.488 664.876 137.133C660.646 132.779 652.433 129.295 638.245 137.133L582.495 168.868V168.863C534.542 122.915 472.511 94.4667 406.402 88.1027L388.105 19.78C383.626 3.97732 375.662 0.618652 369.313 0.618652C363.219 0.618652 355.13 3.97799 350.771 19.78L331.859 89.7173C269.318 98.7121 211.286 127.447 166.219 171.728L105.985 137.379C91.7968 129.29 83.7088 132.775 79.3541 137.379C75 141.983 71.7656 149.821 80.0989 164.009L119.552 230.468C98.9216 264.656 85.7762 302.828 80.9736 342.468C75.7705 341.728 70.4788 342.067 65.4162 343.463L23.3536 354.541C7.30157 358.145 4.06689 366.234 4.06689 372.333C4.06689 378.432 7.42623 386.521 23.2336 390.749L64.5456 401.452C69.2904 402.733 74.1862 403.4 79.1029 403.442H79.9727C83.5716 444.551 95.962 484.4 116.311 520.296L80.098 581.026C71.7595 595.214 75.1188 603.302 79.3532 607.656C82.2855 610.677 86.3428 612.349 90.5511 612.26C96.0303 612.005 101.348 610.333 105.983 607.411L158.374 577.547V577.542C205.108 627.302 267.644 659.318 335.334 668.136L350.76 724.885C354.99 740.688 363.203 743.926 369.302 743.926C375.4 743.926 383.49 740.567 387.843 724.885L402.9 669.385L402.906 669.38C474.156 663.328 540.799 631.625 590.439 580.156L638.1 607.286C642.741 610.208 648.053 611.88 653.532 612.135C657.741 612.224 661.798 610.557 664.73 607.531C668.959 603.177 672.319 595.089 663.985 580.901L631.881 526.27H631.876C654.324 488.811 667.907 446.713 671.574 403.197H672.449C677.271 403.212 682.079 402.629 686.755 401.452L727.823 390.624C743.75 386.519 746.99 378.181 746.99 372.332C746.99 366.482 744 358.144 728.073 354.04L728.093 354.04ZM523.627 231.212L534.705 224.863L631.522 169.732L602.902 218.388L569.429 275.258L569.424 275.263C568.616 277.44 566.663 278.982 564.361 279.268C562.059 279.56 559.788 278.539 558.47 276.632L522.257 241.044C520.413 239.867 519.424 237.732 519.715 235.565C520.012 233.399 521.538 231.602 523.627 230.961L523.627 231.212ZM336.96 164.884L369.064 46.5345L384.247 102.534L398.184 154.056L401.049 164.759C402.033 166.748 401.809 169.129 400.46 170.894C399.116 172.665 396.887 173.514 394.705 173.097H343.559C341.377 173.514 339.143 172.665 337.799 170.894C336.455 169.129 336.226 166.748 337.21 164.759L336.96 164.884ZM220.356 513.324L154.277 550.657L112.709 574.922L174.933 469.392V469.397C175.902 467.381 177.73 465.913 179.913 465.413C181.923 465.579 183.798 466.517 185.137 468.027L221.225 503.615C223.068 504.792 224.063 506.928 223.771 509.094C223.475 511.261 221.949 513.058 219.86 513.699L220.356 513.324ZM221.601 241.164L185.513 276.752V276.757C184.195 278.663 181.924 279.679 179.622 279.392C177.32 279.106 175.372 277.564 174.56 275.387V274.392L112.586 169.736L162.362 197.862L220.977 231.211H220.982C223.071 231.852 224.597 233.649 224.894 235.81C225.185 237.977 224.19 240.117 222.347 241.289L221.601 241.164ZM401.174 579.657L369.07 698.006L356.627 653.704L336.591 579.782H336.586C335.602 577.793 335.831 575.413 337.175 573.647C338.524 571.881 340.753 571.027 342.935 571.444H394.457C396.639 571.027 398.868 571.881 400.217 573.647C401.561 575.413 401.79 577.793 400.8 579.782L401.174 579.657ZM369.314 409.67C359.47 409.441 350.111 405.327 343.283 398.228C336.455 391.129 332.705 381.618 332.862 371.769C333.013 361.92 337.049 352.529 344.096 345.644C351.143 338.758 360.623 334.941 370.471 335.014C380.32 335.092 389.741 339.055 396.684 346.045C403.621 353.034 407.517 362.487 407.523 372.337C407.523 382.389 403.47 392.019 396.278 399.05C389.09 406.076 379.366 409.905 369.314 409.67ZM594.554 553.777L523.622 513.46C521.534 512.819 520.008 511.022 519.711 508.861C519.419 506.694 520.409 504.554 522.252 503.382L541.794 484.34L558.596 467.914H558.591C559.935 466.403 561.805 465.466 563.82 465.299C565.997 465.799 567.831 467.268 568.794 469.284L573.523 477.372L630.893 574.935L594.554 553.777Z"/>
                </g>
            </svg>
        `,this.num.classList.add(d.NUM_OF_MINES_NUM),this.num.textContent=0,this.numOfMines.append(this.icon,this.num),document.querySelector(".controls").prepend(this.numOfMines)}init(){this._renderMinesNum()}}class v extends C{constructor(){super();l(this,"openMenuBtn",document.createElement("button"));l(this,"btnInner",document.createElement("span"));this.openMenuBtn.addEventListener("click",this._openPopup.bind(this,r.POPUP_MENU))}_renderBtn(){this.openMenuBtn.classList.add(h.BTN,h.ROUNDED,d.OPEN_MENU_BTN),this.btnInner.classList.add(d.OPEN_MENU_BTN_INNER),this.openMenuBtn.append(this.btnInner),document.querySelector(`.${d.CONTROLS}`).append(this.openMenuBtn)}init(){this._renderBtn()}}class b{constructor(){l(this,"toggleBtn",document.createElement("button"));l(this,"circle");l(this,"moon");l(this,"sun");({isDarkTheme:this.isDarkTheme=!0}=u),this.toggleBtn.addEventListener("click",this._toggleThemeClickHandler.bind(this))}_renderThemeToggle(){this.toggleBtn.classList.add(r.THEME_TOGGLE),this.toggleBtn.innerHTML=`
            <svg viewBox="0 0 90 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="toggler">
                    <rect class="${r.THEME_TOGGLE_WRAPPER}" id="toggler-wrapper" width="90" height="44" rx="22"/>
                    <path class="${r.THEME_TOGGLE_MOON}" id="moon"
                          d="M32.6839 24.6702C31.4893 29.4564 27.1613 33 22.005 33C15.9262 33 11 28.0738 11 21.995C11 16.8387 14.5456 12.5127 19.3298 11.3161V11.3161C20.3558 11.0589 21.1397 12.0999 21.0429 13.1532C21.0175 13.4292 21.0045 13.7087 21.0045 13.9914C21.0045 18.9636 25.0364 22.9955 30.0086 22.9955C30.2912 22.9955 30.5707 22.9824 30.8466 22.9568C31.9008 22.8593 32.9406 23.6431 32.6839 24.6702V24.6702Z"/>
                    <path class="${r.THEME_TOGGLE_CIRCLE}" id="toggle-btn"
                          d="M39 22C39 31.3888 31.3888 39 22 39C12.6112 39 5 31.3888 5 22C5 12.6112 12.6112 5 22 5C31.3888 5 39 12.6112 39 22Z"/>
                          
                    <g class="${r.THEME_TOGGLE_SUN}" id="sun">
                        <path id="sun-body"
                              d="M74.406 21.9029C74.406 25.4375 71.5406 28.3029 68.006 28.3029C64.4714 28.3029 61.606 25.4375 61.606 21.9029C61.606 18.3683 64.4714 15.5029 68.006 15.5029C71.5406 15.5029 74.406 18.3683 74.406 21.9029Z"/>
                        <rect class="${r.THEME_TOGGLE_SUN_SUNBEAM}" id="sunbeam" x="62.2622" y="17.084" width="3.4727" height="1.1601" rx="0.580049"
                              transform="rotate(-135 62.2622 17.084)" />
                        <path class="${r.THEME_TOGGLE_SUN_SUNBEAM}" id="sunbeam_2"
                              d="M68.0058 14.4727C67.6855 14.4727 67.4258 14.213 67.4258 13.8926V11.58C67.4258 11.2597 67.6855 11 68.0058 11V11C68.3262 11 68.5859 11.2597 68.5859 11.58V13.8926C68.5859 14.213 68.3262 14.4727 68.0058 14.4727V14.4727Z"/>
                        <path class="${r.THEME_TOGGLE_SUN_SUNBEAM}" id="sunbeam_3"
                              d="M73.3315 16.6802C73.105 16.4537 73.105 16.0864 73.3315 15.8599L74.9668 14.2246C75.1933 13.9981 75.5606 13.9981 75.7871 14.2246V14.2246C76.0136 14.4511 76.0136 14.8184 75.7871 15.0449L74.1519 16.6802C73.9253 16.9067 73.5581 16.9067 73.3315 16.6802V16.6802Z"/>
                        <path class="${r.THEME_TOGGLE_SUN_SUNBEAM}" id="sunbeam_4"
                              d="M75.5273 21.998C75.5273 21.6777 75.787 21.418 76.1074 21.418H78.42C78.7403 21.418 79 21.6777 79 21.998V21.998C79 22.3184 78.7403 22.5781 78.42 22.5781H76.1074C75.787 22.5781 75.5273 22.3184 75.5273 21.998V21.998Z"/>
                        <path class="${r.THEME_TOGGLE_SUN_SUNBEAM}" id="sunbeam_5"
                              d="M73.3286 27.3325C73.5551 27.106 73.9224 27.106 74.1489 27.3325L75.7842 28.9678C76.0107 29.1943 76.0107 29.5616 75.7842 29.7881V29.7881C75.5577 30.0146 75.1904 30.0146 74.9639 29.7881L73.3286 28.1528C73.1021 27.9263 73.1021 27.559 73.3286 27.3325V27.3325Z"/>
                        <path class="${r.THEME_TOGGLE_SUN_SUNBEAM}" id="sunbeam_6"
                              d="M67.998 33C67.6777 33 67.418 32.7403 67.418 32.42V30.1074C67.418 29.787 67.6777 29.5273 67.998 29.5273V29.5273C68.3184 29.5273 68.5781 29.787 68.5781 30.1074V32.42C68.5781 32.7403 68.3184 33 67.998 33V33Z"/>
                        <path class="${r.THEME_TOGGLE_SUN_SUNBEAM}" id="sunbeam_7"
                              d="M60.2188 29.7773C59.9922 29.5508 59.9922 29.1836 60.2187 28.957L61.854 27.3218C62.0805 27.0953 62.4478 27.0953 62.6743 27.3218V27.3218C62.9008 27.5483 62.9008 27.9156 62.6743 28.1421L61.0391 29.7773C60.8125 30.0039 60.4453 30.0039 60.2188 29.7773V29.7773Z"/>
                        <path class="${r.THEME_TOGGLE_SUN_SUNBEAM}" id="sunbeam_8"
                              d="M57 22.0029C57 21.6825 57.2597 21.4229 57.58 21.4229H59.8926C60.213 21.4229 60.4727 21.6825 60.4727 22.0029V22.0029C60.4727 22.3233 60.213 22.5829 59.8926 22.5829H57.58C57.2597 22.5829 57 22.3233 57 22.0029V22.0029Z"/>
                    </g>
                </g>
            </svg>
        `,document.querySelector(`.${r.POPUP_MENU}`).append(this.toggleBtn),this.circle=document.querySelector(`.${r.THEME_TOGGLE_CIRCLE}`),this.moon=document.querySelector(`.${r.THEME_TOGGLE_MOON}`),this.sun=document.querySelector(`.${r.THEME_TOGGLE_SUN}`),this._initTheme()}_initTheme(){this._changeTheme(),this.isDarkTheme&&(this.sun.classList.add(r.THEME_TOGGLE_SUN_ACTIVE),[...this.sun.children].forEach(n=>n.classList.add(r.THEME_TOGGLE_SUN_SUNBEAM_ACTIVE))),this.isDarkTheme||(this.moon.classList.add(r.THEME_TOGGLE_MOON_ACTIVE),this.circle.classList.add(r.THEME_TOGGLE_CIRCLE_POS_LIGHT))}_changeTheme(){const n=document.documentElement.style,e=getComputedStyle(document.documentElement),t=s=>e.getPropertyValue(s);this.isDarkTheme&&(n.setProperty(o.COLOR_PRIMARY,t(o.COLOR_PRIMARY_DARK)),n.setProperty(o.COLOR_SECONDARY,t(o.COLOR_LIGHT_PRIMARY)),n.setProperty(o.POPUP_COLOR,t(o.POPUP_DARK)),n.setProperty(o.CELL_OPENED_EVEN,t(o.CELL_OPENED_DARK_EVEN)),n.setProperty(o.CELL_OPENED_ODD,t(o.CELL_OPENED_DARK_ODD)),n.setProperty(o.UNOPENED_CELL,t(o.UNOPENED_CELL_DARK)),n.setProperty(o.COLOR_MARK_CELL,t(o.COLOR_DARK_MARK_CELL))),this.isDarkTheme||(n.setProperty(o.COLOR_PRIMARY,t(o.COLOR_LIGHT_PRIMARY)),n.setProperty(o.COLOR_SECONDARY,t(o.COLOR_PRIMARY_DARK)),n.setProperty(o.POPUP_COLOR,t(o.POPUP_LIGHT)),n.setProperty(o.CELL_OPENED_EVEN,t(o.CELL_OPENED_LIGHT_EVEN)),n.setProperty(o.CELL_OPENED_ODD,t(o.CELL_OPENED_LIGHT_ODD)),n.setProperty(o.UNOPENED_CELL,t(o.UNOPENED_CELL_LIGHT)),n.setProperty(o.COLOR_MARK_CELL,t(o.COLOR_LIGHT_MARK_CELL)))}_toggleThemeClickHandler(){this.circle.classList.add(r.THEME_TOGGLE_CIRCLE_MOVE),this.circle.onanimationend=()=>this.circle.classList.remove(r.THEME_TOGGLE_CIRCLE_MOVE),this.circle.classList.toggle(r.THEME_TOGGLE_CIRCLE_POS_LIGHT),this.moon.classList.toggle(r.THEME_TOGGLE_MOON_ACTIVE),this.sun.classList.toggle(r.THEME_TOGGLE_SUN_ACTIVE),this.sun.querySelectorAll(`.${r.THEME_TOGGLE_SUN_SUNBEAM}`).forEach(n=>{n.classList.toggle(r.THEME_TOGGLE_SUN_SUNBEAM_ACTIVE)}),this.isDarkTheme=!this.isDarkTheme,u.isDarkTheme=this.isDarkTheme,L(),this._changeTheme()}init(){this._renderThemeToggle()}}class k extends C{constructor(){super();l(this,"tabs",new Set);({difficulty:this.difficulty="ease"}=u),this.tabsWrapper=document.createElement("div"),this.tabsWrapper.addEventListener("click",this._diffClickHandler.bind(this))}_renderDifficultyTabs(){this.tabsWrapper.classList.add(r.DIFF_TABS_WRAPPER);const e=document.createElement("button"),t=document.createElement("button"),s=document.createElement("button");e.textContent="Ease",t.textContent="Medium",s.textContent="Hard",this.tabs.add(e).add(t).add(s),[e,t,s].forEach((i,a)=>{i.classList.add(h.BTN,r.DIFF_TAB,`${r.DIFF_TAB}--${a}`),i.textContent.toLowerCase()===this.difficulty&&i.classList.add(r.DIFF_TAB_ACTIVE)}),this.tabsWrapper.append(e,t,s),document.querySelector(`.${r.POPUP_MENU}`).append(this.tabsWrapper)}_diffClickHandler(e){const t=e.target;t.classList.contains(r.DIFF_TAB)&&(this.tabs.forEach(s=>{s.classList.remove(r.DIFF_TAB_ACTIVE)}),t.classList.add(r.DIFF_TAB_ACTIVE))}init(){this._renderDifficultyTabs()}}class V{constructor(){l(this,"mutedIcon",`
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 19.348v2.652h-2.652l-3.348-3.348-3.348 3.348h-2.652v-2.652l3.348-3.348-3.348-3.348v-2.652h2.652l3.348 3.348 3.348-3.348h2.652v2.652l-3.348 3.348 3.348 3.348z"></path>
            <path d="M13 30c-0.26 0-0.516-0.102-0.707-0.293l-7.707-7.707h-3.586c-0.552 0-1-0.448-1-1v-10c0-0.552 0.448-1 1-1h3.586l7.707-7.707c0.286-0.286 0.716-0.372 1.090-0.217s0.617 0.519 0.617 0.924v26c0 0.404-0.244 0.769-0.617 0.924-0.124 0.051-0.254 0.076-0.383 0.076z"></path>
        </svg>
    `);l(this,"unMutedIcon",`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path d="M22.485 25.985c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 4.094-4.094 4.094-10.755 0-14.849-0.586-0.586-0.586-1.536 0-2.121s1.536-0.586 2.121 0c2.55 2.55 3.954 5.94 3.954 9.546s-1.404 6.996-3.954 9.546c-0.293 0.293-0.677 0.439-1.061 0.439v0zM17.157 23.157c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 2.534-2.534 2.534-6.658 0-9.192-0.586-0.586-0.586-1.536 0-2.121s1.535-0.586 2.121 0c3.704 3.704 3.704 9.731 0 13.435-0.293 0.293-0.677 0.439-1.061 0.439z"></path>
            <path d="M13 30c-0.26 0-0.516-0.102-0.707-0.293l-7.707-7.707h-3.586c-0.552 0-1-0.448-1-1v-10c0-0.552 0.448-1 1-1h3.586l7.707-7.707c0.286-0.286 0.716-0.372 1.090-0.217s0.617 0.519 0.617 0.924v26c0 0.404-0.244 0.769-0.617 0.924-0.124 0.051-0.254 0.076-0.383 0.076z"></path>
        </svg>
    `);this.soundAdjWrapper=document.createElement("div"),this.soundElem=document.createElement("div"),{isMuted:this.isMuted=!1}=u,this.soundElem.addEventListener("click",()=>{this.isMuted=!this.isMuted,u.isMuted=this.isMuted,L(),this.isMuted?this.soundElem.innerHTML=this.mutedIcon:this.soundElem.innerHTML=this.unMutedIcon})}_renderSoundAdj(){this.soundAdjWrapper.classList.add(h.BTN,r.SOUND_ADJ),this.soundElem.classList.add(r.SOUND_ADJ_ICON),this.soundElem.innerHTML=this.isMuted?this.mutedIcon:this.unMutedIcon,this.soundAdjWrapper.append(this.soundElem),document.querySelector(`.${r.POPUP_MENU}`).append(this.soundAdjWrapper)}init(){this._renderSoundAdj()}}class B{constructor(){this.minesInputElem=document.createElement("input"),this.minesWrapper=document.createElement("div"),this.minesInputElem.addEventListener("keydown",n=>{if(n.key!=="Enter")return;const e=Number.parseInt(this.minesInputElem.value);e<0||e>99||!Number.isInteger(e)||(u.numOfMines=e,L(),this.minesInputElem.value="",p.numOfMines=e,p.restartGame())})}_renderMinesInput(){this.minesWrapper.classList.add("menu__mines-num"),this.minesInputElem.classList.add("menu__mines-num__input"),this.minesInputElem.type="number",this.minesInputElem.max="99",this.minesInputElem.min="0",this.minesInputElem.placeholder="Mines",this.minesWrapper.append(this.minesInputElem),document.querySelector(`.${r.POPUP_MENU}`).append(this.minesWrapper)}init(){this._renderMinesInput()}}new y().init();new C().init(r.POPUP_MENU);new C().init(E.POPUP_WIN,"You Win! <br> 🎉🎉🎉");new C().init(E.POPUP_LOSE,"You Lose( <br> 💥💥💥");new R().init();new H().init();const f=new F;f.init();new U().init();new w().init();new v().init();new b().init();new k().init();new V().init();new B().init();const p=new G;p.init();
