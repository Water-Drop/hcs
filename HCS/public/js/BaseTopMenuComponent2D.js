var BaseTopMenuComponent2D = function() {
    var t = function(t, e) {
        BaseComponent2D.call(this, t, e), this._topMenuComponent = null, this._item = {}, this.isMainMenuItem = !0
    };
    return t.prototype = Object.create(BaseComponent2D.prototype), t.prototype.initialize = function() {
        BaseComponent2D.prototype.initialize.call(this), ujs.notify(this.isMainMenuItem ? "hcs.menu.top.add" : "hcs.menu.top.sub.add", {
            item: this._item,
            menuPath: "."
        })
    }, t.prototype.destroy = function() {
        BaseComponent2D.prototype.destroy.call(this), ujs.notify(this.isMainMenuItem ? "hcs.menu.top.delete" : "hcs.menu.top.sub.delete", {
            id: this._item.id,
            menuPath: "."
        })
    }, t
}();