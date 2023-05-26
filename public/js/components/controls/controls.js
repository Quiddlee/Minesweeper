export default class Controls {
    constructor() {
        this.menuElem = document.createElement('div');
    }

    _renderMenu() {
        document.body.prepend(this.menuElem);
        this.menuElem.classList.add('controls');
    }

    init() {
        this._renderMenu();
    }
}