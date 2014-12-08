var ScreenshotMenuComponent = function() {
    var t = function(t) {
        BaseTopMenuComponent2D.call(this, t, "ScreenshotMenuComponent"), this.isMainMenuItem = !1, this._item = {
            title: "Capture",
            icon: "fa fa-camera",
            action: "wnp.request.takeScreenshot",
            id: "toolbarScreenshot",
            items: [],
            index: 500
        }
    };
    return t.prototype = Object.create(BaseTopMenuComponent2D.prototype), t
}();