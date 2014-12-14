var LockComponent = function() {
    var t = "js/Components/LockComponent/Assets/",
        e = function(t) {
            BaseComponent3D.call(this, t, "LockComponent"), this._editionComponent = null, this._isLocked = !1
        };
    return e.prototype = Object.create(BaseComponent3D.prototype), e.prototype.onContextChanged = function(t) {
        "2D" === t ? ujs.notify("hcs.menu.top.sub.replace", {
            item: {
                id: "lock-icon",
                addClass: "hidden"
            },
            merge: !0
        }, !0) : ujs.notify("hcs.menu.top.sub.replace", {
            item: {
                id: "lock-icon",
                addClass: ""
            },
            merge: !0
        }, !0)
    }, e.prototype.initialize = function() {
        HTMLHelper.addStylesheet(t + "lockComponent.css", {
            media: "screen"
        }), this._editionComponent = hcsdesign.engine3D.searchComponent("EditionComponent3D"), this.toggleLock = this.toggleLock.bind(this);
        var e = {
            action: "hcs.component.lock",
            id: "lock-icon",
            index: 1,
            addClass: "hidden",
            icon: "fa fa-unlock",
            title: _("Lock/Unlock")
        };
        ujs.notify("hcs.menu.top.sub.add", {
            item: e,
            menuPath: "."
        }), document.addEventListener("hcs.component.lock", this.toggleLock, !1)
    }, e.prototype.destroy = function() {
        ujs.notify("hcs.menu.top.sub.delete", {
            id: "lock-icon",
            menuPath: "."
        }), document.removeEventListener("hcs.component.lock", this.toggleLock)
    }, e.prototype.toggleLock = function() {
        this._isLocked = !this._isLocked;
        var t = document.getElementById("lock-icon"),
            e = t.children[0].children[0];
        this._isLocked ? (this._editionComponent.dragControl.lock(), e.setAttribute("class", "fa fa-lock")) : (this._editionComponent.dragControl.unlock(), e.setAttribute("class", "fa fa-unlock"))
    }, e
}();