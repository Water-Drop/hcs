var Keys = { up: 38, down: 40, left: 37, right: 39, space: 32, escape: 27, shift: 16, ctrl: 17, alt: 18, tab: 9, a: 65, z: 90, e: 69, q: 81, s: 83, d: 68, r: 82, cmd: 91 },hcs = window.hcs || {};
hcs.KeyboardManager = function () {
    function t(t) {
        for (var e = 0; 110 > e; e++)
            t[e] = !1
    }
    var e, n = [], i = function () {
        this.keys = [], this.preventDefault = !1, this.initialized = !1;
        for (var t = 0; 110 > t; t++)
            this.keys[t] = !1;
        n = [8], e = this
    };
    return i.prototype.initialize = function () {
        t(this.keys), this.startEventsListening()
    }, i.prototype.destroy = function () {
        t(this.keys), this.stopEventsListening()
    }, i.prototype.startEventsListening = function () {
        this.initialized || (document.addEventListener("keydown", this.onKeyStateChange, !1), document.addEventListener("keyup", this.onKeyStateChange, !1), window.addEventListener("focus", this.onFocus, !1), this.initialized = !0)
    }, i.prototype.stopEventsListening = function () {
        this.initialized && (document.removeEventListener("keydown", this.onKeyStateChange), document.removeEventListener("keyup", this.onKeyStateChange), window.removeEventListener("focus", this.onFocus, !1), this.initialized = !1)
    }, i.prototype.onFocus = function () {
        for (var t = 0; t < e.keys.length; t++)
            e.keys[t] = !1
    }, i.prototype.onKeyStateChange = function (t) {
        var i = "keydown" == t.type ? !0 : !1, o = "keydown" == t.type ? "hcs.keyboardManager.keyDown" : "hcs.keyboardManager.keyUp";
        if (ujs.notify(o, t), "INPUT" == document.activeElement.nodeName || "TEXTAREA" == document.activeElement.nodeName)
            ;
        else if (e.preventDefault === !0)
            t.preventDefault();
        else
            for (var r = 0, s = n.length; s > r; r++)
                t.keyCode == n[r] && t.preventDefault();
        e.keys[t.keyCode] = i
    }, i.prototype.isPressed = function (t) {
        if (t instanceof Array) {
            for (var e = !1, n = 0, i = this.keys.length; i > n && !e; )
                e = this.keys[t[n]], n++;
            return e
        }
        return this.keys[t]
    }, i.prototype.isReleased = function (t) {
        return !this.isPressed(t)
    }, i
} ();
