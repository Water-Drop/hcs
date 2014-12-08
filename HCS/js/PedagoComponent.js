var PedagoComponent = function() {
    var t = function(t) {
        // called in window.onload
        BaseComponent2D.call(this, t, "PedagoComponent"), this.pedagoPath = "js/Components/PedagoComponent/pedago/pages/"
    };
    return t.prototype = Object.create(BaseComponent2D.prototype), t.prototype.checkBrowserCapability = function() {
        /*
         * function : ºÏ≤È‰Ø¿¿∆˜ºÊ»›–‘
         */
        // step 01: check hasCanvas2D()
        GlobalHelper.hasCanvas2D() || this.redirectToPage("no-webgl");
        // step 02 : check hasWebGL()
        var t = wnpLocalStorage.getItem("wnp.core.force2D"); // will return null when window.onload call.
        return t ? !0 : GlobalHelper.hasWebGL() ? !0 : (this.redirectToPage(GlobalHelper.isAppleDevice() ? "ios" : "Mac" == BrowserDetect.OS && "Safari" == BrowserDetect.browser ? "safari" : GlobalHelper.isAndroidDevice() && navigator.userAgent.match(/chrome/i) ? "no-webgl-chrome-android" : GlobalHelper.isMobileDevice() ? "mobile" : "no-webgl"), !1)
    }, t.prototype.getPageURL = function(t) {
        return [this.pedagoPath, t, ".php"].join("")
    }, t.prototype.redirectToPage = function(t) {
        window.location.href = this.getPageURL(t)
    }, t
}();