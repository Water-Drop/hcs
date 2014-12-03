var GridComponent2D = function() {
    var t = function(t) {
        BaseComponent2D.call(this, t, "GridComponent2D"), this.priority = 1, this.displayGrid = !0
    };
    return t.prototype = new BaseComponent2D, t.prototype.startListening = function() {
        this.core.engine2D.registerEventCb("GridComponent2D.static-draw", this.priority, "static-draw", null, null, this.onStaticDraw.bind(this), null), this.core.engine2D.registerEventCb("GridComponent2D.drag-start", this.priority, "drag-start", 255 - this.core.engine2D.MODE_CONTEXTMENU, null, this.onDragStart.bind(this), null), this.core.engine2D.registerEventCb("GridComponent2D.zoom-in", this.priority, "zoom-in", 255 - this.core.engine2D.MODE_CONTEXTMENU, null, this.onZoomIn.bind(this), null), this.core.engine2D.registerEventCb("GridComponent2D.zoom-out", this.priority, "zoom-out", 255 - this.core.engine2D.MODE_CONTEXTMENU, null, this.onZoomOut.bind(this), null)
    }, t.prototype.stopListening = function() {
        this.core.engine2D.unregisterEventCb("GridComponent2D.static-draw"), this.core.engine2D.unregisterEventCb("GridComponent2D.drag-start"), this.core.engine2D.unregisterEventCb("GridComponent2D.zoom-in"), this.core.engine2D.unregisterEventCb("GridComponent2D.zoom-out")
    }, t.prototype.enableScrolling = function(t) {
        t && !this.scrollingEnabled ? (this.core.engine2D.registerEventCb("GridComponent2D.drag-start", this.priority, "drag-start", 255 - this.core.engine2D.MODE_CONTEXTMENU, null, this.onDragStart.bind(this), null), this.core.engine2D.registerEventCb("GridComponent2D.zoom-in", this.priority, "zoom-in", 255 - this.core.engine2D.MODE_CONTEXTMENU, null, this.onZoomIn.bind(this), null), this.core.engine2D.registerEventCb("GridComponent2D.zoom-out", this.priority, "zoom-out", 255 - this.core.engine2D.MODE_CONTEXTMENU, null, this.onZoomOut.bind(this), null), this.scrollingEnabled = !0) : (this.scrollingEnabled = !1, this.core.engine2D.unregisterEventCb("GridComponent2D.drag-start"), this.core.engine2D.unregisterEventCb("GridComponent2D.zoom-in"), this.core.engine2D.unregisterEventCb("GridComponent2D.zoom-out"))
    }, t.prototype.onStaticDraw = function(t, e, n) {
        if (this.displayGrid) {
            var i = this.core.getWidth(),
                o = this.core.getHeight(),
                r = 50 * n,
                s = Math.floor(e.x % r),
                a = Math.floor(e.y % r),
                l = 0,
                h = 0,
                c = this.core.configuration.boundingSize,
                u = this.core.getWidth() / 2 + (this.core.engine2D.getZoom() * Math.abs(c.min.x) - this.core.getWidth() / 2),
                p = this.core.getHeight() / 2 + (this.core.engine2D.getZoom() * Math.abs(c.min.y) - this.core.getHeight() / 2),
                d = this.core.getWidth() / 2 - (this.core.engine2D.getZoom() * Math.abs(c.max.x) - this.core.getWidth() / 2),
                m = this.core.getHeight() / 2 - (this.core.engine2D.getZoom() * Math.abs(c.max.y) - this.core.getHeight() / 2);
            s = e.x >= u ? e.x - u : s, l = e.x >= u ? s : 0, a = e.y >= p ? e.y - p : a, h = e.y >= p ? a : 0, i = e.x < d ? i + e.x - d : i, o = e.y < m ? o + e.y - m : o, t.strokeStyle = "#dddddd", t.lineWidth = 1, t.beginPath();
            for (var g = a; o > g; g += r)
                t.moveTo(l, Math.floor(g) + .5), t.lineTo(i, Math.floor(g) + .5);
            for (var f = s; i > f; f += r)
                t.moveTo(Math.floor(f) + .5, h), t.lineTo(Math.floor(f) + .5, o);
            t.stroke(), t.strokeStyle = "#aaaaaa", t.lineWidth = 3, t.beginPath(), e.x >= u && (t.moveTo(Math.floor(s) + .5, h), t.lineTo(Math.floor(s) + .5, o)), e.x <= d && (t.moveTo(Math.floor(i) + .5, h), t.lineTo(Math.floor(i) + .5, o)), e.y >= p && (t.moveTo(l, Math.floor(a) + .5), t.lineTo(i, Math.floor(a) + .5)), e.y <= m && (t.moveTo(l, Math.floor(o) + .5), t.lineTo(i, Math.floor(o) + .5)), t.stroke(), t.fillStyle = "#770000", t.fillRect(e.x - 5, e.y - 5, 11, 11);
            var y = 100,
                _ = "1m";
            n > 2.5 && (y = 50, _ = "0.5m"), t.strokeStyle = "#999999", t.beginPath(), t.lineWidth = 3, t.moveTo(20, o - 30.5), t.lineTo(Math.floor(20 + y * n), o - 30.5), t.stroke(), t.lineWidth = 2, t.moveTo(20, o - 29), t.lineTo(20, o - 35), t.moveTo(Math.floor(20 + y * n), o - 29), t.lineTo(Math.floor(20 + y * n), o - 35), t.stroke(), t.fillStyle = "#777777", t.font = "10px Verdana", t.textAlign = "center", t.fillText(_, y / 2 * n + 20, o - 15)
        }
    }, t.prototype.onDragStart = function() {
        this.core.engine2D.registerEventCb("GridComponent2D.dragging", this.priority, "dragging", this.core.engine2D.MODE_DRAG, null, this.onDragging.bind(this), null), this.core.engine2D.registerEventCb("GridComponent2D.drag-end", this.priority, "drag-end", this.core.engine2D.MODE_DRAG, null, this.onDragEnd.bind(this), null)
    }, t.prototype.onDragging = function(t, e, n) {
        var i = this.core.engine2D.getTranslation();
        i = i.add(new BABYLON.Vector2(n.posDelta.x, n.posDelta.y)), this.core.engine2D.setTranslation(i)
    }, t.prototype.onDragEnd = function() {
        this.core.engine2D.unregisterEventCb("GridComponent2D.dragging"), this.core.engine2D.unregisterEventCb("GridComponent2D.drag-end")
    }, t.prototype.onZoomIn = function(t, e, n) {
        var i = this.core.engine2D.getZoom();
        if (this.core.engine2D.setZoom(1.05 * i), this.core.engine2D.getZoom() != i) {
            var o = this.core.engine2D.getTranslation(),
                r = n.pos.clone().subtractInPlace(o);
            r.scaleInPlace(.05), this.core.engine2D.setTranslation(o.subtractInPlace(r))
        }
    }, t.prototype.onZoomOut = function(t, e, n) {
        var i = this.core.engine2D.getZoom();
        this.core.engine2D.setZoom(.95 * i);
        i - this.core.engine2D.getZoom();
        if (this.core.engine2D.getZoom() != i) {
            var o = this.core.engine2D.getTranslation(),
                r = n.pos.clone().subtractInPlace(o);
            r.scaleInPlace(.05), this.core.engine2D.setTranslation(o.add(r))
        }
    }, t
}();