var wnp = window.wnp || {};
wnp.UI = wnp.UI || {}, wnp.UI.ColorPopup = function() {
    function t(t, e, n) {
        var i = document.createElement(t);
        return n && i.setAttribute("id", n), e && i.setAttribute("class", e), i
    }
    var e = null, n = {}, i = 0, o = function() {
    }, r = function(t) {
        var t = t || {};
        t.autoSize = t.autoSize === !1 ? !1 : !0, t.width = 215, t.height = 200, wnp.UI.Frame.call(this, t)
    };
    return r.prototype = new wnp.UI.Frame, r.prototype.addColorItems = function(e) {
        for (var n, o, r = 0; r < e.length; r++)
            n = e[r].params.color, o = t("div", "luxens"), r == i && o.classList.add("selected"), o.setAttribute("rel", r), o.style.backgroundColor = "rgb(" + Math.round(255 * n.r) + "," + Math.round(255 * n.g) + "," + Math.round(255 * n.b) + ")", this.mainContent.appendChild(o), o.addEventListener("click", this.onItemClick, !1)
            }, r.prototype.onItemClick = function(t) {
                e.close(), i = t.target.getAttribute("rel"), o && o.call(this, i, n[i].params.color), ujs.notify("wnp.core.colorSelected", {id: i,color: n[i].params.color})
            }, r.prototype.buildHTML = function() {
                this.config.layout || "horizontal";
                this.domElement = t("div", "window", "colorPopup"), this.header = t("header", "window-title"), this.closeWindow = t("span", "window-close"), this.config.showCloseButton === !1 && (this.closeWindow.style.display = "none"), this.header.appendChild(this.closeWindow), this.headerTitle = t("h1");
                var i = t("span", "window-title-text");
                i.innerHTML = this.content.title || _("Colors"), this.headerTitle.appendChild(i), this.header.appendChild(this.headerTitle), this.domElement.appendChild(this.header), this.mainContent = t("div", "window-content"), n = LuxensComponent3D.getLuxens(), this.addColorItems(n), this.domElement.appendChild(this.mainContent), e.setPosition(window.innerWidth - this.windowSize.width - 260, 0), this.domElement.style.width = this.windowSize.width + "px", this.domElement.style.height = window.innerHeight + "px"
            }, r.show = function(t, r) {
                null == e && (e = new wnp.UI.ColorPopup({}, {title: _("colors")}), e.initialize()), i = r || i, e.mainContent.innerHTML = "", e.addColorItems(n), o = t || function() {
                }, e.show()
            }, r.prototype.show = function() {
                this.initialize(), this.domElement.style.display = "block"
            }, r
}();
