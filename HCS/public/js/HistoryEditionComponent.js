var HistoryEditionComponent = function() {
    var t = function(t) {
        BaseComponent3D.call(this, t, "HistoryEditionComponent"), this.historyComponent3D = null, this.isMainMenuItem = !1, this._items = [{
            title: _("Undo"),
            icon: "fa fa-reply",
            action: "hcs.request.undo",
            index: 10
        }, {
            title: _("Redo"),
            icon: "fa fa-share",
            action: "hcs.request.redo",
            index: 11
        }], this.undo = this.undo.bind(this), this.redo = this.redo.bind(this)
    };
    return t.prototype = Object.create(BaseComponent3D.prototype), t.prototype.initialize = function() {
        BaseComponent3D.prototype.initialize.call(this), this.historyComponent3D = hcsdesign.getComponentByName("HistoryComponent");
        for (var t = 0, e = this._items.length; e > t; t++)
            ujs.notify("hcs.menu.top.sub.add", {
                item: this._items[t],
                menuPath: "."
            });
        document.addEventListener("hcs.request.undo", this.undo, !1), document.addEventListener("hcs.request.redo", this.redo, !1)
    }, t.prototype.destroy = function() {
        console.log("destroy");
        for (var t = 0, e = this._items.length; e > t; t++)
            ujs.notify("hcs.menu.top.sub.delete", {
                id: this._items[t].id,
                menuPath: "."
            });
        document.removeEventListener("hcs.request.undo", this.undo), document.removeEventListener("hcs.request.redo", this.redo)
    }, t.prototype.undo = function() {
        hcsdesign.getSelectedEngine() == hcsdesign.ENGINE_2D ? hcsdesign.backFromHistory() : this.historyComponent3D.controlZ()
    }, t.prototype.redo = function() {
        hcsdesign.getSelectedEngine() == hcsdesign.ENGINE_2D ? hcsdesign.nextFromHistory() : this.historyComponent3D.controlY()
    }, t
}();