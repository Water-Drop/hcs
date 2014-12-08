var HistoryComponent = function() {
    var t, e = function(e) {
        BaseComponent3D.call(this, e, "HistoryComponent"), t = this, this.componentList = [], this.history = [], this.currentHistoryIndex = -1, this.currentBalance = 0, this.maxHistoryLength = 50, this.callbackMap = []
    };
    e.prototype = new BaseComponent3D, e.prototype.startListening = function() {
        document.addEventListener("wnp.keyboardManager.keyDown", this.onKeyDown, !0), document.addEventListener("wnp.request.historyAction", this.onRotatorAction, !0)
    }, e.prototype.stopListening = function() {
        document.removeEventListener("wnp.keyboardManager.keyDown", this.onKeyDown, !0), document.removeEventListener("wnp.request.historyAction", this.onRotatorAction, !0)
    }, e.prototype.onContextChanged = function(t) {
        "3D" == t ? this.startListening() : (this.stopListening(), this.reset())
    };
    var n = function() {
        this.target = null, this.params = null, this.type = 0, this.componentInstance = null
    };
    return n.prototype.set = function(t, e, n, i) {
        this.target = t, this.params = e, this.type = n, this.componentInstance = i
    }, e.prototype.reset = function() {
        this.history.length = 0, this.currentHistoryIndex = -1, this.currentBalance = 0
    }, e.prototype.register = function(t) {
        this.componentList.push(t), this.callbackMap.push([])
    }, e.prototype.registerAction = function(t, e, n, i) {
        -1 == this.componentList.indexOf(i) && this.register(i);
        var o = {};
        this.callbackMap[this.componentList.indexOf(i)][t] = o, o.undo = e, o.redo = n
    }, e.prototype.actionDone = function(t, e, i, o) {
        this.currentHistoryIndex = (this.currentHistoryIndex + 1) % this.maxHistoryLength, this.currentBalance = 0, this.history[this.currentHistoryIndex] || (this.history[this.currentHistoryIndex] = new n), this.history[this.currentHistoryIndex].set(t, e, i, o)
    }, e.prototype.redo = function(t) {
        var e = this.callbackMap[this.componentList.indexOf(t.componentInstance)][t.type].redo;
        e(t.target, t.params)
    }, e.prototype.undo = function(t) {
        var e = this.callbackMap[this.componentList.indexOf(t.componentInstance)][t.type].undo;
        e(t.target, t.params)
    }, e.prototype.controlZ = function() {
        -1 != this.currentHistoryIndex && null != this.history[this.currentHistoryIndex] && (-this.currentBalance >= this.maxHistoryLength || (this.undo(this.history[this.currentHistoryIndex]), this.currentHistoryIndex = (this.currentHistoryIndex + this.maxHistoryLength - 1) % this.maxHistoryLength, this.currentBalance--))
    }, e.prototype.controlY = function() {
        -1 != this.currentHistoryIndex && (this.currentBalance >= 0 || (this.currentHistoryIndex = (this.currentHistoryIndex + 1) % this.maxHistoryLength, this.redo(this.history[this.currentHistoryIndex]), this.currentBalance++))
    }, e.prototype.onKeyDown = function(e) {
        var n = t.core.engine3D.keyboardManager.isPressed([17, 91, 224]);
        n && 90 == e.keyCode ? t.controlZ() : n && 89 == e.keyCode && t.controlY()
    }, e.prototype.onRotatorAction = function(t) {
        t.component.addHistory && t.component.addHistory(t.object, t.params, t.action)
    }, e
}();