export class DataSource {
    constructor() {
        this._priceScale = null;
        this._zorder = 0;
    }
    zorder() {
        return this._zorder;
    }
    setZorder(zorder) {
        this._zorder = zorder;
    }
    priceScale() {
        return this._priceScale;
    }
    setPriceScale(priceScale) {
        this._priceScale = priceScale;
    }
    labelPaneViews(pane) {
        return [];
    }
    timeAxisViews() {
        return [];
    }
    visible() {
        return true;
    }
}
