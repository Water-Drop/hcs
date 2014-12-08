var wnp = window.wnp || {};
wnp.Widget = wnp.Widget || {}, wnp.Widget.Remove = function() {
    var t, e, n = !1, i = function(n) {
        t = n, this.icon = "fa fa-trash-o", this.button = this.buildHTML(), this.buttonSelected = !1, e = this, n.on("selectObject", this.onSelectObject), n.on("deselectObject", this.onDeselectObject)
    };
    return i.prototype.buildHTML = function() {
        var t = document.getElementById("edition-panel"), e = document.createElement("li");
        e.setAttribute("id", "edition-remove-button"), e.setAttribute("title", _("Remove"));
        var n = document.createElement("span");
        n.setAttribute("id", "edition-remove-icon"), n.setAttribute("class", "menu-icon");
        var i = document.createElement("i");
        return i.setAttribute("id", "edition-remove-img"), i.setAttribute("class", this.icon), n.appendChild(i), e.appendChild(n), t.appendChild(e), e
    }, i.prototype.onSelectObject = function() {
        e.button.addEventListener("pointerdown", e.onButtonMouseDown, !1), document.addEventListener("pointerup", e.onMouseUp, !1), document.addEventListener("pointercancel", e.onMouseUp, !1), n = !0
    }, i.prototype.onDeselectObject = function() {
        e.button.removeEventListener("pointerdown", e.onButtonMouseDown), document.removeEventListener("pointerup", e.onMouseUp), document.removeEventListener("pointercancel", e.onMouseUp), n = !1
    }, i.prototype.onButtonMouseDown = function(t) {
        t.preventDefault(), e.buttonSelected || (e.buttonSelected = !0, ujs.notify("wnp.request.object.remove"))
    }, i.prototype.onMouseUp = function() {
        e.buttonSelected && (e.buttonSelected = !1)
    }, i.prototype.isActive = function() {
        return n
    }, i
}();