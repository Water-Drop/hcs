var hcs = window.hcs || {};
hcs.Widget = hcs.Widget || {}, hcs.Widget.Group = function() {
    var t, e, n = !1, i = function(n) {
        t = n, this.imageGroup = "fa fa-link", this.imageUngroup = "fa fa-chain-broken", this.img = null, this.button = this.buildHTML(), this.selectedObject = null, this.buttonSelected = !1, e = this, this.hide(), n.on("selectObject", this.onSelectObject), n.on("deselectObject", this.onDeselectObject)
    };
    return i.prototype.buildHTML = function() {
        var t = document.getElementById("edition-panel"), e = document.createElement("li");
        e.setAttribute("id", "edition-group-button"), e.setAttribute("title", _("Group/Ungroup"));
        var n = document.createElement("span");
        n.setAttribute("id", "edition-group-icon"), n.setAttribute("class", "menu-icon");
        var i = document.createElement("i");
        return i.setAttribute("id", "edition-group-img"), i.setAttribute("class", this.imageUngroup), n.appendChild(i), e.appendChild(n), t.appendChild(e), e
    }, i.prototype.updatePanelColor = function(e) {
        var n = document.getElementById("edition-panel");
        t.isGroup(e) ? (n.style.backgroundColor = "#a99384", n.style.borderColor = "#a99384") : (n.style.backgroundColor = "#897364", n.style.borderColor = "#897364")
    }, i.prototype.updateGroupImg = function() {
        this.img = t.isVirtualGroup(e.selectedObject) ? this.imageUngroup : this.imageGroup, document.getElementById("edition-group-img").setAttribute("class", this.img)
    }, i.prototype.show = function() {
        e.button.style.display = "block", e.updateGroupImg(), t.elevationWidget.movePanel()
    }, i.prototype.hide = function() {
        e.button.style.display = "none", t.elevationWidget.movePanel()
    }, i.prototype.onSelectObject = function(i) {
        return e.selectedObject = i.object, e.updatePanelColor(e.selectedObject), t.isGroup(e.selectedObject) ? (e.show(), e.button.addEventListener("pointerdown", e.onButtonMouseDown, !1), document.addEventListener("pointerup", e.onMouseUp, !1), document.addEventListener("pointercancel", e.onMouseUp, !1), void (n = !0)) : void e.hide()
    }, i.prototype.onDeselectObject = function() {
        e.selectedObject = null, e.button.removeEventListener("pointerdown", e.onButtonMouseDown), document.removeEventListener("pointerup", e.onMouseUp), document.removeEventListener("pointercancel", e.onMouseUp), n = !1
    }, i.prototype.onButtonMouseDown = function(n) {
        n.preventDefault(), e.buttonSelected || (e.buttonSelected = !0, t.isVirtualGroup(e.selectedObject) ? t.virtualToRealGroup() : t.deleteSelectedGroup(), e.updateGroupImg())
    }, i.prototype.onMouseUp = function() {
        e.buttonSelected && (e.buttonSelected = !1)
    }, i.prototype.isActive = function() {
        return n
    }, i
}();