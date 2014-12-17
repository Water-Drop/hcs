var TopMenuComponent = function(t) {
    var e = [],
        n = [],
        i = function() {
            BaseComponent2D.call(this, t, "TopMenuComponent"), this.menu = new hcs.UI.Menu(e, "toolbarMenu", {
                oneClick: !0
            }), this.submenu = new hcs.UI.Menu(n, "subMenuList", {
                oneClick: !0
            }), document.addEventListener("hcs.menu.top.add", this.addItem.bind(this), !1), document.addEventListener("hcs.menu.top.delete", this.removeItem.bind(this), !1), document.addEventListener("hcs.menu.top.replace", this.replaceItem.bind(this), !1), document.addEventListener("hcs.menu.top.sub.add", this.addSubItem.bind(this), !1), document.addEventListener("hcs.menu.top.sub.delete", this.removeSubItem.bind(this), !1), document.addEventListener("hcs.menu.top.sub.replace", this.replaceSubItem.bind(this), !1), document.addEventListener("hcs.menu.top.deselect", this.deselectItem.bind(this), !1)
        };
    return i.prototype = Object.create(BaseComponent2D.prototype), i.prototype._addItem = function(t, e) {
        if (e.item && e.menuPath) {
            var n = e.item,
                i = e.menuPath,
                o = e.position > -1 ? e.position : 1e5;
            n.index = n.index > -1 ? n.index : o, t.addMenuItem(i, n, o), t.updateHtml()
        }
    }, i.prototype._replaceItem = function(t, e) {
        if (e.item) {
            var n = e.item,
                i = "undefined" != typeof e.merge ? e.merge : !1;
            t.replaceMenuItem(n.id, n, i), t.updateHtml()
        }
    }, i.prototype._removeItem = function(t, e) {
        e.id && (t.deleteMenuItem(e.id), t.updateHtml())
    }, i.prototype.deselectItem = function() {
        this.menu.deselect(!0)
    }, i.prototype.addItem = function(t) {
        this._addItem(this.menu, t)
    }, i.prototype.replaceItem = function(t) {
        this._replaceItem(this.menu, t)
    }, i.prototype.removeItem = function(t) {
        this._removeItem(this.menu, t)
    }, i.prototype.addSubItem = function(t) {
        this._addItem(this.submenu, t)
    }, i.prototype.replaceSubItem = function(t) {
        this._replaceItem(this.submenu, t)
    }, i.prototype.removeSubItem = function(t) {
        this._removeItem(this.submenu, t)
    }, i
}();