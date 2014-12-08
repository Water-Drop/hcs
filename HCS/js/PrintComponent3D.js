var PrintComponent3D = function() {
    var t = function(t) {
        BaseComponent3D.call(this, t, "PrintComponent3D")
    };
    return t.prototype = Object.create(BaseComponent3D.prototype), t.prototype.startListening = function() {
        document.addEventListener("wnp.request.print", this.onPrint, !1)
    }, t.prototype.stopListening = function() {
        document.removeEventListener("wnp.request.print", this.onPrint, !1)
    }, t.prototype.onPrint = function() {
        var t = 842,
            e = 596,
            n = wanaplan.getOrigin();
        GlobalHelper.createScreenshot3D(wanaplan.engine3D.engine, void 0, function(i) {
            var o = i.toDataURL("image/png"),
                r = setTimeout(function() {
                    clearTimeout(r);
                    var i;
                    try {
                        i = window.open("", "_blank", "width=" + t + ",height=" + e), i.document.write("<img src='" + o + "' />"), i.document.close(), i.focus(), i.print(), i.close()
                    } catch (s) {
                        parent.postMessage({
                            type: "printPopup",
                            img: o,
                            w: t,
                            h: e,
                            message: _("you must enable popup for this site")
                        }, n)
                    }
                }, 1e3)
        })
    }, t
}();