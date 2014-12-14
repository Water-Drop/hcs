var MainMenuComponent = function() {
    var t = [{
            title: "房型设计",
            index: 1,
            icon: "",
            action: "hcs.request.changeEngine",
            id: "draw2D",
            params: {
                engine: "2D"
            },
            layout: "layout-list",
            context: "2D",
            items: []
        }, {
            title: "家具设计",
            index: 2,
            icon: "",
            action: "hcs.request.changeEngine",
            id: "furnishing3D",
            context: "3D",
            params: {
                engine: "3D"
            },
            layout: "layout-list",
            items: []
        }/*, {
            title: "装饰设计",
            index: 3,
            icon: "",
            action: "hcs.request.changeEngine",
            id: "decorate3D",
            context: "3D",
            params: {
                engine: "3D"
            },
            layout: "layout-list",
            items: []
        }*/],
        e = function(e) {
            BaseComponent2D.call(this, e, "MainMenuComponent"), this.menu = new hcs.UI.Menu(t, "mainMenuTabs", {
                selected: t[0],
                inception: !1
            }), this.menu.initialize(), this.menuTitleDom = document.getElementById("mainMenuTitle"), this.menuTitleDom.innerHTML = _(this.menu.selected.title), this.submenu = new hcs.UI.Menu(t[0].items, "mainMenuContentList"), document.addEventListener("hcs.menu.main.add", this.addItem.bind(this), !1), document.addEventListener("hcs.menu.main.replace", this.replaceItem.bind(this), !1), document.addEventListener("hcs.menu.main.deselect", this.deselectItem.bind(this), !1), document.addEventListener("hcs.menu.main.remove", this.removeItem.bind(this), !1), document.addEventListener("hcs.request.changeEngine", this.onChangeEngine.bind(this), !1), document.addEventListener("hcs.menu.main.remove", this.removeItem.bind(this), !1)
        };
    return e.prototype = new BaseComponent2D, e.prototype.onChangeEngine = function() {
        this.menuTitleDom.innerHTML = _(this.menu.selected.title), this.updateSubMenu()
    }, e.prototype.removeItem = function(t) {
        this.menu.deleteMenuItem(t.item), this.menu.updateHtml(), this.submenu.updateHtml()
    }, e.prototype.replaceItem = function(t) {
        if (t.item) {
            var e = t.item,
                n = t.merge || !1;
            this.menu.replaceMenuItem(e.id, e, n), this.submenu.updateHtml(e)
        }
    }, e.prototype.deselectItem = function(t) {
        var e = t.all || !1,
            n = t.itemId || !1;
        this.submenu.selected.items && 0 != this.submenu.selected.items.length && this.submenu.selected.items != {} || this.submenu.deselect(e, n)
    }, e.prototype.updateSubMenu = function() {
        this.menu.selected.items && (this.submenu = new hcs.UI.Menu(this.menu.selected.items, "mainMenuContentList"), this.submenu.initialize())
    }, e.prototype.addItem = function(t) {
        if (t.item && t.menuPath) {
            var e = t.item,
                n = t.menuPath,
                i = t.position > -1 ? t.position : 1e5;
            e.index = e.index > -1 ? e.index : i, this.menu.addMenuItem(n, e, i), this.submenu.updateHtml()
        }
    }, e.prototype.removeItem = function(t) {
        t.item && (this.menu.deleteMenuItem(t.item), this.menu.updateHtml(), this.submenu.updateHtml())
    }, e
}();