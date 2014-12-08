var BaseComponent2D = function() {
    var t = function(t, e) {
        this.core = t, this.name = e || "Component2D", this.structure = null, this.keyboard = null, this.priority = 42, this.enabled = !0;
        var n = this;
        "undefined" != typeof t && (this.structure = this.core.structure, this.keyboardManager = this.core.keyboardManager, document.addEventListener("wnp.contextChanged", function(t) {
            n.enabled && t.context != t.previousContext && n.onContextChanged(t.context)
        }, !1))
    };
    return t.prototype.initialize = function() {
        this.startListening()
    }, t.prototype.startListening = function() {}, t.prototype.stopListening = function() {}, t.prototype.onContextChanged = function(t) {
        "2D" == t ? this.startListening() : this.stopListening()
    }, t.prototype.disable = function() {
        this.enabled = !1, this.stopListening()
    }, t.prototype.enable = function() {
        this.enabled = !0
    }, t.prototype.getTargeted = function() {
        return null
    }, t.prototype.update = function() {}, t.prototype.compute = function() {}, t.prototype.destroy = function() {}, t
}();