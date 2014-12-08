var MobileInputComponent = function() {
    var t = null,
        e = !1,
        n = 0,
        i = function(e) {
            BaseComponent2D.call(this, e, "MobileInputComponent"), this._evtBinded = !1, this._bindListeners(), t = this
        };
    return i.prototype = Object.create(BaseComponent2D.prototype), i.prototype.destroy = function() {
        this._unbindListeners()
    }, i.prototype._bindListeners = function() {
        this._evtBinded || (this._evtBinded = !0, window.addEventListener("touchstart", this._onInputChanged, !1), window.addEventListener("mousemove", this._onInputChanged, !1), window.addEventListener("pointerdown", this._onInputChanged, !1), window.addEventListener("MSPointerDown", this._onInputChanged, !1))
    }, i.prototype._unbindListeners = function() {
        this._evtBinded && (this._evtBinded = !1, window.removeEventListener("touchstart", this._onInputChanged), window.removeEventListener("mousemove", this._onInputChanged), window.removeEventListener("pointerdown", this._onInputChanged), window.removeEventListener("MSPointerDown", this._onInputChanged))
    }, i.prototype._onInputChanged = function(i) {
        return "onpointerdown" in window ? void(0 === n ? (n++, e = "mousemove" === i.type) : t.removeInputSupport("mousemove" === i.type ? "touch" : "mouse")) : void t.removeInputSupport("touchstart" === i.type || "touch" === i.pointerType ? "mouse" : "touch")
    }, i.prototype.removeInputSupport = function(t) {
        var e = wanaplan.engine2D._pointerManager,
            n = wanaplan.engine3D.pointerManager;
        if ("mouse" === t) {
            e.removeMouseSupport(), n && n.removeMouseSupport();
            var i = wanaplan.engine2D.searchComponent("MobileComponent");
            i || (console.log("create new"), i = new MobileComponent(wanaplan, !0), wanaplan.engine2D.addInstancedComponent(i), i.onCoreInitialized()), i.addPointerCallback(), GlobalHelper.__forceMobileDevice(!0)
        } else
        //            e.removeTouchSupport(), n && n.removeTouchSupport();
            this._unbindListeners(), wanaplan.engine2D.removeComponent(this, !0)
    }, i
}();