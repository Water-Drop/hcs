/*
 * Author：
 * Date：
 * Email：
 * 
 */
var hcs = window.hcs || {};
hcs.UI = hcs.UI || {}, hcs.UI.IFrame = function() {
    function t() {
        e.close(!0)
    }
    var e = null, n = function(t, n, i, o) {
        this.domElement = document.createElement("div"), this.domElement.setAttribute("id", "hcs-iframe"), this.domElement.style.width = window.innerWidth + "px", this.domElement.style.height = window.innerHeight + "px", this.iframeContainer = document.createElement("div"), this.iframeContainer.setAttribute("class", "hcs-iframe-container"), this.iframe = document.createElement("iframe"), this.iframe.setAttribute("seamless", "seamless"), this.iframe.setAttribute("sandbox", "allow-same-origin allow-scripts allow-top-navigation allow-popups  allow-forms"), this.parentNode = t, this.added = !1, this.closeOnClick = i && "undefined" != typeof i.closeOnClick ? i.closeOnClick : !1, this.closeCallback = o || function() {
        };
        for (var r in n)
            this.iframe[r] = n[r];
        this.closeButton = document.createElement("a"), this.closeButton.setAttribute("href", "#"), this.closeButton.setAttribute("class", "close-button");
        var s = document.createElement("img");
        s.setAttribute("src", "images/close-icon.png"), this.closeButton.appendChild(s);
        var i = i || {};
        i.showClose && this.iframeContainer.appendChild(this.closeButton), this.iframeContainer.appendChild(this.iframe), this.domElement.appendChild(this.iframeContainer), e = this, this.resize(n.width, n.height)
    };
    return n.prototype.open = function() {
        this.added || (this.iframeContainer.style.left = +(+window.innerWidth / 2) - +parseInt(this.iframeContainer.style.width) / 2 + "px", this.iframeContainer.style.top = +(+window.innerHeight / 2) - +parseInt(this.iframeContainer.style.height) / 2 + "px", this.parentNode.appendChild(this.domElement), this.closeButton.addEventListener("click", t, !0), this.closeOnClick && this.parentNode.addEventListener("click", t, !1), this.added = !0)
    }, n.prototype.close = function(n) {
        this.added && (this.parentNode.removeChild(e.domElement), this.closeButton.removeEventListener("click", t), this.closeOnClick && this.parentNode.removeEventListener("click", t), this.added = !1, this.closeCallback()), "boolean" == typeof n && delete this
    }, n.show = function(t, n, i) {
        hcs.UI.IFrame.close(), e = new hcs.UI.IFrame(t, n, i), e.open()
    }, n.close = function(t) {
        e && (e.close(t), e = null)
    }, n.prototype.resize = function(t, n) {
        var t = t, n = n;
        t && (t > wanaplan.getWidth() - 40 && (t = wanaplan.getWidth() - 40), e.iframeContainer.style.width = t + "px", e.iframe.setAttribute("width", t), e.iframeContainer.style.left = Math.round(+(+window.innerWidth / 2) - +parseInt(e.iframeContainer.style.width) / 2) + "px"), n && (n > wanaplan.getHeight() - 40 && (n = wanaplan.getHeight() - 40), e.iframeContainer.style.height = n + "px", e.iframe.setAttribute("height", n), e.iframeContainer.style.top = Math.round(+(+window.innerHeight / 2) - +parseInt(e.iframeContainer.style.height) / 2) + "px")
    }, n.resize = n.prototype.resize, n
}();
