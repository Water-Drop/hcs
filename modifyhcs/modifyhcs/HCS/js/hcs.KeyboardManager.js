/*
 * Author：虞思源
 * 
 * 用于获取键盘事件
 * 提供键盘状态
 * 调用isPressed Released检查键盘状态
 * 
 */
var Keys = { up: 38, down: 40, left: 37, right: 39, space: 32, escape: 27, shift: 16, ctrl: 17, alt: 18, tab: 9, a: 65, z: 90, e: 69, q: 81, s: 83, d: 68, r: 82, cmd: 91 },hcs = window.hcs || {};
//按键编码
hcs.KeyboardManager = function () {
    function loadKey(key) {
        for (var e = 0; 110 > e; e++)
            key[e] = !1
    }
    var e, n = [], keyboardManager = function () {
        this.keys = [], this.preventDefault = !1, this.initialized = !1;
        for (var t = 0; 110 > t; t++)
            this.keys[t] = !1;
        n = [8], e = this
    };
    return keyboardManager.prototype.initialize = function () {
        loadKey(this.keys), this.startEventsListening()
    }, keyboardManager.prototype.destroy = function () {
        loadKey(this.keys), this.stopEventsListening()
    }, //创建和损毁
	keyboardManager.prototype.startEventsListening = function () {
        this.initialized || (document.addEventListener("keydown", this.onKeyStateChange, !1), 
		document.addEventListener("keyup", this.onKeyStateChange, !1),
		window.addEventListener("focus", this.onFocus, !1), this.initialized = !0)
    }, keyboardManager.prototype.stopEventsListening = function () {
        this.initialized && (document.removeEventListener("keydown", this.onKeyStateChange),
		document.removeEventListener("keyup", this.onKeyStateChange), 
		window.removeEventListener("focus", this.onFocus, !1), this.initialized = !1)
    }, keyboardManager.prototype.onFocus = function () {
        for (var t = 0; t < e.keys.length; t++)
            e.keys[t] = !1
    }, keyboardManager.prototype.onKeyStateChange = function (keyPressed) {
        var keyboardManager = "keydown" == keyPressed.type ? !0 : !1, o = "keydown" == keyPressed.type ? "hcs.keyboardManager.keyDown" : "hcs.keyboardManager.keyUp";
        if (ujs.notify(o, keyPressed), "INPUT" == document.activeElement.nodeName || "TEXTAREA" == document.activeElement.nodeName);
        else if (e.preventDefault === !0)
            keyPressed.preventDefault();
        else
            for (var r = 0, s = n.length; s > r; r++)
                keyPressed.keyCode == n[r] && keyPressed.preventDefault();
        e.keys[keyPressed.keyCode] = keyboardManager
    }, keyboardManager.prototype.isPressed = function (key) {
        if (key instanceof Array) {
            for (var e = !1, n = 0, keyboardManager = this.keys.length; keyboardManager > n && !e; )
                e = this.keys[key[n]], n++;
            return e
        }
        return this.keys[key]
    }, keyboardManager.prototype.isReleased = function (key) {
        return !this.isPressed(key)
    }, keyboardManager
} ();
