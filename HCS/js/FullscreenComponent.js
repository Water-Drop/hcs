var FullscreenComponent = function() {
    function t(t) {
        t.requestFullScreen || (t.requestFullScreen = t.msRequestFullscreen || t.webkitRequestFullscreen || t.mozRequestFullScreen || function() {
            return !1
        }), document.cancelFullScreen || (document.cancelFullScreen = document.msExitFullscreen || document.webkitCancelFullScreen || document.mozCancelFullScreen || function() {
            return !1
        })
    }

    function e() {
        return document.fullscreen || document.msFullscreenElement || document.webkitIsFullScreen || document.mozFullScreen
    }
    var n = function(t) {
        BaseTopMenuComponent2D.call(this, t, "FullscreenComponent"), this.isMainMenuItem = !1, this._item = {
            title: "Full Screen",
            icon: "fa fa-arrows-alt",
            action: "wnp.request.toggleFullscreen",
            id: "fullscreen-btn",
            items: [],
            index: 1001
        }
    };
    return n.prototype = Object.create(BaseTopMenuComponent2D.prototype), n.prototype.initialize = function() {
        if (BaseTopMenuComponent2D.prototype.initialize.call(this), document.addEventListener("wnp.request.toggleFullscreen", this.toggleFullscreen, !1), document.addEventListener("mozfullscreenchange", this.onFullScreenChange, !1), document.addEventListener("webkitfullscreenchange", this.onFullScreenChange, !1), document.addEventListener("MSFullscreenChange", this.onFullScreenChange, !1), document.addEventListener("fullscreenchange", this.onFullScreenChange, !1), wanaplan.mode === wanaplan.MODE_VIEWER) {
            var e = document.getElementById("fullscreen-btn");
            e.setAttribute("title", _("Toggle to fullscreen mode")), e.addEventListener("click", toggleFullscreen, !1)
        }
        t(document.body)
    }, n.prototype.destroy = function() {
        BaseTopMenuComponent2D.prototype.destroy.call(this), document.removeEventListener("wnp.request.toggleFullscreen", this.toggleFullscreen), document.removeEventListener("mozfullscreenchange", this.onFullScreenChange), document.removeEventListener("webkitfullscreenchange", this.onFullScreenChange), document.removeEventListener("MSFullscreenChange", this.onFullScreenChange), document.removeEventListener("fullscreenchange", this.onFullScreenChange)
    }, n.prototype.toggleFullscreen = function(n) {
        var i = document.body;
        n instanceof HTMLElement && (i = n, t(i)), e() ? document.cancelFullScreen() : i.requestFullScreen()
    }, n.prototype.onFullScreenChange = function() {
        var t = document.getElementById("fullscreen-btn").querySelector(".menu-icon > i");
        t.setAttribute("class", e() ? "fa fa-expand" : "fa fa-arrows-alt")
    }, n
}();