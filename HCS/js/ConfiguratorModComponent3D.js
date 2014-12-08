var ConfiguratorModComponent3D = function() {
    var t = function(t) {
        BaseComponent3D.call(this, t, "ConfiguratorModComponent3D"), this.edcmp = wanaplan.getComponentByName("EditionComponent3D")
    };
    return t.prototype = new BaseComponent3D, t.prototype.startListening = function() {
        this.initBindForThisInstance(), this.stopListening(), document.addEventListener("wnp.request.configurator.start", this.myBind.onRequestStart), document.addEventListener("wnp.request.configurator.stop", this.myBind.onRequestStop), document.addEventListener("wnp.request.configurator.cancel", this.myBind.onRequestCancel), document.addEventListener("wnp.engine3d.configurator.animationIn.end", this.myBind.onAnimationInEnd), document.addEventListener("wnp.engine3d.configurator.animationOut.end", this.myBind.onAnimationOutEnd), document.addEventListener("wnp.engine3d.configurator.animationIn.begin", this.myBind.onAnimationInStart), document.addEventListener("wnp.engine3d.configurator.animationOut.begin", this.myBind.onAnimationOutStart), document.addEventListener("wnp.engine3D.object.remove", this.myBind.onDisposeObject, !1), document.addEventListener("wnp.engine3D.object.dispose", this.myBind.onDisposeObject, !1), document.addEventListener("wnp.engine3D.object.refresh", this.myBind.onRefreshObject, !1), document.addEventListener("wnp.engine3d.globaleFloorReady", this.myBind.onFloorChanged, !1), document.addEventListener("wnp.contextChanged ", this.myBind.onSwapEngine)
    }, t.prototype.stopListening = function() {
        this.initBindForThisInstance(), document.removeEventListener("wnp.request.configurator.start", this.myBind.onRequestStart), document.removeEventListener("wnp.request.configurator.stop", this.myBind.onRequestStop), document.removeEventListener("wnp.request.configurator.cancel", this.myBind.onRequestCancel), document.removeEventListener("wnp.engine3d.configurator.animationIn.end", this.myBind.onAnimationInEnd), document.removeEventListener("wnp.engine3d.configurator.animationOut.end", this.myBind.onAnimationOutEnd), document.removeEventListener("wnp.engine3d.configurator.animationIn.begin", this.myBind.onAnimationInStart), document.removeEventListener("wnp.engine3d.configurator.animationOut.begin", this.myBind.onAnimationOutStart), document.removeEventListener("wnp.engine3D.object.remove", this.myBind.onDisposeObject, !1), document.removeEventListener("wnp.engine3D.object.dispose", this.myBind.onDisposeObject, !1), document.removeEventListener("wnp.engine3D.object.refresh", this.myBind.onRefreshObject, !1), document.removeEventListener("wnp.engine3d.globaleFloorReady", this.myBind.onFloorChanged, !1), document.removeEventListener("wnp.contextChanged ", this.myBind.onSwapEngine)
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
    }, t.prototype.initialize = function() {
        this._state = "idle", this._currentObject = null
    }, t.prototype.getCurrentObject = function() {
        return this._currentObject
    }, t.prototype.getState = function() {
        return this._state
    }, t.prototype.requestStart = function() {
        return "idle" != this.getState() ? !1 : this.getCurrentObject() ? void(this._animateInandOut() ? ujs.notify("wnp.request.configurator.animationIn.start") : (ujs.notify("wnp.engine3d.configurator.animationIn.begin"), ujs.notify("wnp.engine3d.configurator.animationIn.end"))) : !1
    }, t.prototype.requestStop = function() {
        return "ready" != this.getState() ? !1 : void(this._animateInandOut() ? ujs.notify("wnp.request.configurator.animationOut.start") : (ujs.notify("wnp.engine3d.configurator.animationOut.begin"), ujs.notify("wnp.engine3d.configurator.animationOut.end")))
    }, t.prototype.cancel = function() {
        switch (this._canceling = !0, this._state) {
            case "animationIn":
                ujs.notify(this._animateInandOut() ? "wnp.request.configurator.animation.cancel" : "wnp.engine3d.configurator.animationIn.end"), this._state = "animationOut", ujs.notify("wnp.engine3d.configurator.animationOut.begin"), ujs.notify("wnp.engine3d.configurator.animationOut.end");
                break;
            case "animationOut":
                ujs.notify(this._animateInandOut() ? "wnp.request.configurator.animation.cancel" : "wnp.engine3d.configurator.animationOut.end");
                break;
            case "ready":
                this._state = "animationOut", ujs.notify("wnp.engine3d.configurator.animationOut.begin"), ujs.notify("wnp.engine3d.configurator.animationOut.end");
                break;
            case "idle":
        }
        this._canceling = !1, this._state = "idle"
    }, t.prototype._lockUnrelatedActions = function() {
        return this.edcmp.lock(this, 14), this.edcmp.disableWidget(), !0
    }, t.prototype._unlockUnrelatedActions = function() {
        return this.edcmp.unlock(this, 14), this.edcmp.enableWidget(), this.getCurrentObject() && this.getCurrentObject().parent && this.edcmp.isGroup(this.getCurrentObject().parent) && this.edcmp.selectObject(this.getCurrentObject().parent), !0
    }, t.prototype._animateInandOut = function() {
        return !!wanaplan.getComponentByName("ConfiguratorInOutAnimationComponent3D")
    }, t.prototype.handlers = {
        onAnimationInStart: function() {
            this._lockUnrelatedActions(), this._state = "animationIn"
        },
        onAnimationInEnd: function() {
            this._state = "ready", this._canceling || ujs.notify("wnp.engine3d.configurator.start", {
                furniture: this.getCurrentObject()
            })
        },
        onAnimationOutStart: function() {
            this._state = "animationOut", this._unlockUnrelatedActions(), ujs.notify("wnp.engine3d.configurator.stop")
        },
        onAnimationOutEnd: function() {
            this._state = "idle", this._unlockUnrelatedActions()
        },
        onRequestStart: function(t) {
            this._currentObject = t.object || t.furniture || this.edcmp.getSelectedObject(), this.edcmp.isGroup(this._currentObject) && (this._currentObject = null), this.requestStart()
        },
        onRequestStop: function() {
            this.requestStop()
        },
        onRequestCancel: function() {
            this.cancel()
        },
        onSwapEngine: function(t) {
            "2D" == t.engine && ujs.notify("wnp.request.configurator.cancel")
        },
        onFloorChanged: function() {},
        onDisposeObject: function(t) {
            "idle" != this.getState() && t.object == this._currentObject && ujs.notify("wnp.request.configurator.cancel")
        },
        onRefreshObject: function() {
            "idle" != this.getState() && this.getCurrentObject() == event.object && this._lockUnrelatedActions()
        }
    }, t
}();