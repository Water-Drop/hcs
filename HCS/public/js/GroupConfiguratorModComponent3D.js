var GroupConfiguratorModComponent3D = function() {
    var t = function(t) {
        BaseComponent3D.call(this, t, "GroupConfiguratorModComponent3D"), this.edcmp = hcsdesign.getComponentByName("EditionComponent3D")
    };
    return t.prototype = new BaseComponent3D, t.prototype.initialize = function() {
        this._state = "idle", this._currentObject = null
    }, t.prototype.getState = function() {
        return this._state
    }, t.prototype.getCurrentObject = function() {
        return this._currentObject
    }, t.prototype.lockUnrelatedActions = function() {
        this.edcmp.lock(this, 14);
        for (var t = this.edcmp.widgets.length; t--;)
            this.edcmp.widgets[t].removeInfo && this.edcmp.widgets[t].removeInfo();
        return !0
    }, t.prototype.unlockUnrelatedActions = function() {
        if (this.edcmp.unlock(this, 14), this.edcmp.getSelectedObject())
            for (var t = this.edcmp.widgets.length; t--;)
                this.edcmp.widgets[t].addInfo && this.edcmp.widgets[t].addInfo();
        return !0
    }, t.prototype.requestStart = function() {
        return "ready" == this.getState() ? !1 : this.getCurrentObject() ? (this.lockUnrelatedActions(), this._state = "ready", void ujs.notify("hcs.engine3d.groupConfigurator.start")) : !1
    }, t.prototype.requestStop = function() {
        return "idle" == this.getState() ? !1 : (this._state = "idle", ujs.notify("hcs.engine3d.groupConfigurator.stop"), void this.unlockUnrelatedActions())
    }, t.prototype.startListening = function() {
        this.initBindForThisInstance(), this.stopListening(), document.addEventListener("hcs.request.groupConfigurator.start", this.myBind.onRequestStart), document.addEventListener("hcs.request.groupConfigurator.stop", this.myBind.onRequestStop), document.addEventListener("hcs.request.groupConfigurator.cancel", this.myBind.onRequestCancel), document.addEventListener("hcs.engine3D.object.remove", this.myBind.onDisposeObject, !1), document.addEventListener("hcs.engine3D.object.dispose", this.myBind.onDisposeObject, !1), document.addEventListener("hcs.engine3d.globaleFloorReady", this.myBind.onFloorChanged, !1), document.addEventListener("hcs.contextChanged ", this.myBind.onSwapEngine)
    }, t.prototype.stopListening = function() {
        this.initBindForThisInstance(), document.removeEventListener("hcs.request.groupConfigurator.start", this.myBind.onRequestStart), document.removeEventListener("hcs.request.groupConfigurator.stop", this.myBind.onRequestStop), document.removeEventListener("hcs.request.groupConfigurator.cancel", this.myBind.onRequestCancel), document.removeEventListener("hcs.engine3D.object.remove", this.myBind.onDisposeObject, !1), document.removeEventListener("hcs.engine3D.object.dispose", this.myBind.onDisposeObject, !1), document.removeEventListener("hcs.engine3d.globaleFloorReady", this.myBind.onFloorChanged, !1), document.removeEventListener("hcs.contextChanged ", this.myBind.onSwapEngine)
    }, t.prototype.initBindForThisInstance = function() {
        if (this.myBind)
            return this;
        var t = this;
        this.myBind = {};
        for (var e in this.handlers)
            (function() {
                var n = t.handlers[e];
                t.myBind[e] = function(e) {
                    n.call(t, e)
                }
            })();
        return this
    }, t.prototype.handlers = {
        onRequestStart: function(t) {
            this._currentObject = t.object || t.furniture || this.edcmp.getSelectedObject(), this.edcmp.isGroup(this._currentObject) || (this._currentObject = null), this.requestStart()
        },
        onRequestStop: function() {
            this.requestStop()
        },
        onRequestCancel: function() {
            this.cancel()
        },
        onSwapEngine: function(t) {
            "2D" == t.engine && ujs.notify("hcs.request.groupConfigurator.cancel")
        },
        onFloorChanged: function() {},
        onDisposeObject: function() {}
    }, t
}();