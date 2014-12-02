var GlobalHelper = function() {
    function t() {
        if (wanaplan && wanaplan.engine3D)
            return wanaplan.engine3D.engine._gl;
        var t = document.createElement("canvas");
        return t.getContext("webgl") || t.getContext("experimental-webgl")
    }
    var e = {}, n = null, i = !!navigator.userAgent.match(/Android/i), o = i && !!navigator.userAgent.match(/GT-/i), r = !!navigator.userAgent.match(/iPhone|iPad|iPod/i), s = !!navigator.userAgent.match(/trident.*(Windows Phone|NOKIA)/i), a = !!navigator.userAgent.match(/trident.*(arm|tablet|Windows Phone|NOKIA)/i), l = i || r || a, h = /fr/i.test(navigator.language || navigator.languages || navigator.userLanguage || navigator.systemLanguage || "en");
    return e.getCapabilities = function() {
        if (null === n) {
            n = {maxTextureSize: 512,maxCubemapTextureSize: 512,extensions: {}};
            var e = ["EXT_texture_filter_anistrotropic", "OES_element_index_uint", "OES_standard_derivatives", "OES_texture_float", "OES_texture_float_linear", "OES_texture_half_float", "OES_texture_half_float_linear", "OES_vertex_array_object", "WEBGL_compressed_texture_s3tc", "WEBGL_lose_context", "WEBGL_debug_renderer_info"], i = t();
            if (i) {
                for (var o = 0, r = e.length; r > o; o++) {
                    for (var s = e[o].split("_"), a = s[1], l = 2, h = s.length; h > l; l++)
                        a += s[l].replace(s[l][0], s[l][0].toUpperCase());
                    n.extensions[a] = i.getExtension(e[o]) ? !0 : !1
                }
                n.maxTextureSize = i.getParameter(i.MAX_TEXTURE_SIZE), n.maxCubemapTextureSize = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE)
            }
        }
        return n
    }, e.getWrappedMouseEventNames = function() {
        return "ontouchstart" in window ? {down: "touchstart",move: "touchmove",up: "touchend",cancel: "touchcancel"} : {down: "pointerdown",move: "pointermove",up: "pointerup",cancel: "pointercancel",out: "pointerout"}
    }, e.hasWebGL = function() {
        return t() ? !0 : !1
    }, e.hasCanvas2D = function() {
        return window.HTMLCanvasElement
    }, e.hasAzertyKeyboard = function() {
        return h
    }, e.isMobileDevice = function() {
        return l
    }, e.isAndroidDevice = function() {
        return i
    }, e.isAppleDevice = function() {
        return r
    }, e.isSamsungDevice = function() {
        return o
    }, e.isWindowsDevice = function() {
        return a
    }, e.isWindowsPhoneDevice = function() {
        return s
    }, e.isIE = function() {
        var t = navigator.userAgent.toLowerCase();
        return -1 != t.indexOf("msie") ? parseInt(t.split("msie")[1]) : -1
    }, e.isIE9 = function() {
        return "Explorer" === BrowserDetect.browser && 9 === BrowserDetect.version
    }, e.isIE10 = function() {
        return "Explorer" === BrowserDetect.browser && 10 === BrowserDetect.version
    }, e.createScreenshot3D = function(t, e, n) {
        var i = document.createElement("canvas"), e = e || {width: window.innerWidth,height: window.innerHeight}, o = new BABYLON.RenderTargetTexture("screenShot", e, t.scenes[0]);
        o.renderList = t.scenes[0].meshes, o.onAfterRender = function() {
            for (var o = 4 * e.width, r = e.height / 2, s = t.readPixels(0, 0, e.width, e.height), a = 0; r > a; a++)
                for (var l = 0; o > l; l++) {
                    var h = l + a * o, c = e.height - a - 1, u = l + c * o, p = s[h];
                    s[h] = s[u], s[u] = p
                }
            i.width = e.width, i.height = e.height;
            var d = i.getContext("2d"), m = d.createImageData(i.width, i.height);
            m.data.set(s), d.putImageData(m, 0, 0), n(i)
        }, o.render(), o.dispose()
    }, e.__forceMobileDevice = function(t) {
        l = t
    }, e.stripDomainUrl = function(t, e) {
        if (t && -1 !== t.indexOf("http://") && -1 !== t.indexOf(e)) {
            var n = t.replace("http://", "").split("/");
            t = t.replace("http://" + n[0], "/"), t = t.split("///").join("//"), t = t.split("//").join("/")
        }
        return t
    }, e
}();