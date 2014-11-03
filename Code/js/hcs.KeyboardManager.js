/*
 * Author：吴疆
 * Date：2014年11月3日
 * Email：me@wujiang.name
 * 键盘管理模块
 */
var hcs = window.hcs || {};

var Keys = {up: 38,down: 40,left: 37,right: 39,space: 32,escape: 27,shift: 16,ctrl: 17,alt: 18,tab: 9,a: 65,z: 90,e: 69,q: 81,s: 83,d: 68,r: 82,cmd: 91};

hcs.Handle.KeyboardManager = function() {
    function clearKeys(keys) {
        for (var i = 0; 110 > i; i++)
            keys[i] = false;
    }
    var e, n = []; 
    var KeyboardManager = function() {
        this.keys = [], this.preventDefault = false, this.initialized = false;
        for (var t = 0; 110 > t; t++)
            this.keys[t] = false;
        n = [8], e = this;
    };
    return KeyboardManager.prototype.initialize = function() {
        clearKeys(this.keys), this.startEventsListening();
    }, KeyboardManager.prototype.destroy = function() {
        clearKeys(this.keys), this.stopEventsListening();
    }, KeyboardManager.prototype.startEventsListening = function() {
        this.initialized || (document.addEventListener("keydown", this.onKeyStateChange, false), document.addEventListener("keyup", this.onKeyStateChange, false), window.addEventListener("focus", this.onFocus, false), this.initialized = true);
    }, KeyboardManager.prototype.stopEventsListening = function() {
        this.initialized && (document.removeEventListener("keydown", this.onKeyStateChange), document.removeEventListener("keyup", this.onKeyStateChange), window.removeEventListener("focus", this.onFocus, false), this.initialized = false);
    }, KeyboardManager.prototype.onFocus = function() {
        for (var t = 0; t < e.keys.length; t++)
            e.keys[t] = false;
    }, KeyboardManager.prototype.onKeyStateChange = function(t) {
        var KeyboardManager = "keydown" == t.type ? true : false, o = "keydown" == t.type ? "hcs.keyboardManager.keyDown" : "hcs.keyboardManager.keyUp";
        if (ujs.notify(o, t), "INPUT" == document.activeElement.nodeName || "TEXTAREA" == document.activeElement.nodeName)
            ;
        else if (e.preventDefault === true)
            t.preventDefault();
        else
            for (var r = 0, s = n.length; s > r; r++)
                t.keyCode == n[r] && t.preventDefault();
        e.keys[t.keyCode] = KeyboardManager;
    }, KeyboardManager.prototype.isPressed = function(t) {
        if (t instanceof Array) {
            for (var e = false, n = 0, KeyboardManager = this.keys.length; KeyboardManager > n && !e; )
                e = this.keys[t[n]], n++;
            return e;
        }
        return this.keys[t];
    }, KeyboardManager.prototype.isReleased = function(t) {
        return !this.isPressed(t);
    }, KeyboardManager;
}();