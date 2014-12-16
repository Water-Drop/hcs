var PrintComponent2D = function() {
    var t, e = function(e) {
        BaseTopMenuComponent2D.call(this, e, "PrintComponent2D"), this.isMainMenuItem = !1, this._item = {
            title: _("Print"),
            icon: "fa fa-print",
            action: "wnp.request.print",
            id: "print-icon-component",
            index: 20
        }, t = this
    };
    return e.prototype = Object.create(BaseTopMenuComponent2D.prototype), e.prototype.startListening = function() {
        document.addEventListener("wnp.request.print", this.onPrint, !1)
    }, e.prototype.stopListening = function() {
        document.removeEventListener("wnp.request.print", this.onPrint, !1)
    }, e.prototype.onPrint = function() {
        var e = 842,
            n = 596,
            i = document.createElement("canvas");
        i.width = e, i.height = n, i.style.width = e + "px", i.style.height = n + "px";
        var o = i.getContext("2d"),
            r = t.core.engine2D.getBestZoomAttributes(e, n),
            s = t.core.getComponentByName("WallComponent2D"),
            a = t.core.getComponentByName("RoomComponent2D"),
            l = t.core.getComponentByName("OvertureComponent2D"),
            h = t.core.getComponentByName("StairwayComponent2D"),
            c = t.core.getComponentByName("HopperComponent2D");
        a.onStaticDraw(o, r.translation, r.zoom, null), s.onStaticDraw(o, r.translation, r.zoom, null), l.onStaticDraw(o, r.translation, r.zoom, null), h.onStaticDraw(o, r.translation, r.zoom, null), c.onStaticDraw(o, r.translation, r.zoom, null);
        var u = t.core.getOrigin(),
            p = new Image,
            d = t.core.api.logoUrl || u + "/logo.png";
        p.src = "php/retrieveImage.php?image=" + d;
        var m = t.core.structure.name,
            g = o.measureText(m);
        o.fillText(m, 55 + g.width / 2, 20), p.onload = function() {
            o.drawImage(p, 0, 0, 48, 48)
        }, setTimeout(function() {
            var t, o = i.toDataURL("image/png");
            try {
                t = window.open("", "_blank", "width=" + e + ",height=" + n), t.document.write("<img src='" + o + "' />"), t.document.close(), t.focus(), t.print(), t.close()
            } catch (r) {
                parent.postMessage({
                    type: "printPopup",
                    img: o,
                    w: e,
                    h: n,
                    message: _("you must enable popup for this site")
                }, u)
            }
        }, 1e3)
    }, e
}();