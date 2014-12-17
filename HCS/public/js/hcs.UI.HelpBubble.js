var hcs = window.hcs || {};
hcs.UI = hcs.UI || {}, hcs.UI.HelpBubble = function() {
    var t = function() {
        this._isVisible = !1, this._e_bubble = document.getElementById("helpbubble"), this._e_image = document.getElementById("helpbubble-image"), this._e_content = document.getElementById("helpbubble-content"), this._image = "", this._content = "", document.getElementById("helpbubble-close").onclick = this.hide.bind(this)
    };
    return t.prototype.newBubble = function(t, e, n) {
        t && (this._image = t), e && (this._content = e), n && this.show()
    }, t.prototype.show = function() {
        this._isVisible ? (this.hide(), window.setTimeout(this.show.bind(this), 600)) : (this._isVisible = !0, this._e_image.src = this._image, this._e_content.innerHTML = this._content, this._e_bubble.setAttribute("class", "visible"))
    }, t.prototype.hide = function() {
        this._isVisible = !1, this._e_bubble.setAttribute("class", "")
    }, t
}();