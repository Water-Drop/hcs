var wnp = window.wnp || {};
wnp.Input = wnp.Input || {}, wnp.Input.TouchManager = function (t) {
    var e = [{ x: 0, y: 0 }, { x: 0, y: 0}], n = [{ x: 0, y: 0 }, { x: 0, y: 0}], i = { x: 0, y: 0, reset: function () {
        this.x = 0, this.y = 0
    }, update: function () {
        this.x = e[0].x - n[0].x, this.y = e[0].y - n[0].y
    } 
    }, o = { timer: 0, duration: 200 }, r = { sx: 0, sy: 0, timer: null, duration: 900, deadZone: 5 }, s = !1, a = 2, l = !1, h = 0, c = 0, u = 0, p = !1, d = {}, m = null, g = -1;
    this.on = function (t, e) {
        d[t] = e
    }, this.off = function (t) {
        delete d[t]
    }, this.setDeadZone = function (t) {
        a = t
    };
    var f = function (t, n) {
        var i = document.createEvent("HTMLEvents");
        i.initEvent(t, !0, !1), i.pageX = e[0].x, i.pageY = e[0].y, i.clientX = e[0].x, i.clientY = e[0].y, i.detail = -h, i.distance = c, i.wheelDeltaY = m ? h : +(c - u) > 0 ? 2.5 : -2.5, i.button = 0;
        for (var o in n)
            i[o] = n[o];
        return i
    }, y = function (t, e) {
        d[t] && d[t](f(t, e))
    }, _ = function (t, e) {
        var n = t.x - e.x, i = t.y - e.y;
        return Math.sqrt(n * n + i * i)
    }, v = function (t, i, o) {
        o || (n[i].x = e[i].x, n[i].y = e[i].y), window.PointerEvent && t instanceof window.PointerEvent || window.MSPointerEvent && t instanceof MSPointerEvent ? (e[i].x = t.clientX || t.pageX, e[i].y = t.clientY || t.pageY) : t.touches && (e[i].x = t.touches[i].clientX || t.touches[i].pageX, e[i].y = t.touches[i].clientY || t.touches[i].pageY), o && (n[i].x = e[i].x, n[i].y = e[i].y)
    }, b = function (t, e) {
        v(t, 0, e), t.touches && t.touches.length > 1 && v(t, 1, e)
    }, w = function (t) {
        if (t.preventDefault(), !("pointerdown" === t.type && g > -1)) {
            g = t.pointerId, s = !0, l = !1, b(t, !0);
            var n = 0;
            t.touches && t.touches.length > 1 && (n = 1), y("touchDown", { button: n }), t.touches && 1 === t.touches.length || g ? (y("tap"), o.timer ? (clearTimeout(o.timer), o.timer = null, y("dblTap")) : o.timer = setTimeout(function () {
                clearTimeout(o.timer), o.timer = null
            }, o.duration), r.timer && clearTimeout(r.timer), r.sx = e[0].x, r.sy = e[0].y, r.timer = setTimeout(function () {
                clearTimeout(r.timer), r.timer = null;
                var t = e[0].x - r.sx, n = e[0].y - r.sy;
                Math.abs(t) < r.deadZone && Math.abs(n) < r.deadZone && y("longPress")
            }, r.duration)) : t.touches && t.touches.length > 1 && y("touchUp")
        }
    }, x = function (t) {
        if (!(p || "pointerdown" === t.type && t.pointerId !== g) && (t.preventDefault(), b(t), i.update(), l || (l = Math.abs(i.x) > a || Math.abs(i.y) > a)))
            if (t.touches && 2 == t.touches.length) {
                y("touchUp");
                var o = e[0].x - n[0].x, r = e[1].y - n[1].y;
                u = c, c = _(e[0], e[1]), h = Math.abs(o) > Math.abs(r) ? o : r, y("swipe"), y("rotate")
            } else
                s && y("touchMove")
    }, C = function (t) {
        h = 0, c = 0, u = 0, s = !1, l = !1, t.pointerId && g === t.pointerId && (g = -1), r.timer && (clearTimeout(r.timer), r.timer = null), y("touchUp")
    }, M = function (e) {
        void 0 !== window.MSGesture && (m || (m = new MSGesture, m.target = t), m.addPointer(e.pointerId))
    }, D = function (t) {
        1 !== t.scale ? (h = 50 * t.scale * (t.expansion > 0 ? 1 : -1), p = !0, y("touchUp"), y("swipe"), y("rotate"), t.stopPropagation(), t.preventDefault()) : p = !1
    }, B = GlobalHelper.getWrappedMouseEventNames();
    this.start = function () {
        t.addEventListener(B.down, w, !1), t.addEventListener(B.move, x, !1), t.addEventListener(B.up, C, !1), t.addEventListener(B.cancel, C, !1), B.out && t.addEventListener(B.out, C, !1), t.addEventListener("MSPointerDown", M, !1), t.addEventListener("MSGestureChange", D, !1)
    }, this.stop = function () {
        t.removeEventListener(B.down, w), t.removeEventListener(B.move, x), t.removeEventListener(B.up, C), t.removeEventListener(B.cancel, C), B.out && t.removeEventListener(B.out, C), t.removeEventListener("MSPointerDown", M), t.removeEventListener("MSGestureChange", D)
    }
};
