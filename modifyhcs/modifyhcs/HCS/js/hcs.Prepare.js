/*
 * Author: Zhou Jun
 * Function: 拓展js的原生对象
 */
window.requestAnimationFrame = function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
        window.setTimeout(t, 1e3 / 60)
    }
}(), window.cancelRequestAnimationFrame = function() {
    return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout
}(), String.prototype.startsWith = String.prototype.startsWith || function(t) {
    return t = String(t), String(this).substring(0, t.length) === t
}, String.prototype.endsWith = String.prototype.endsWith || function(t) {
    t = String(t);
    var e = String(this);
    return e.substring(e.length - t.length) === t
}, String.prototype.trimLeft = String.prototype.trimLeft || function() {
    return this.replace(/^\s+/, "")
}, String.prototype.trimRight = String.prototype.trimRight || function() {
    return this.replace(/\s+$/, "")
}, String.prototype.trim = String.prototype.trim || function() {
    return this.replace(/^\s+|\s+$/g, "")
}, Math.sign = function(t) {
    return 0 > t ? -1 : 1
};