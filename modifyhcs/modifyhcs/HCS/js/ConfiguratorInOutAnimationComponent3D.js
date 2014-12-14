var ConfiguratorInOutAnimationComponent3D = function() {
    var t = function(t) {
        BaseComponent3D.call(this, t, "ConfiguratorInOutAnimationComponent3D"), this.confm = hcsdesign.getComponentByName("ConfiguratorModComponent3D"), this.camComp = hcsdesign.getComponentByName("CameraComponent"), this.avatarComp = hcsdesign.getComponentByName("AvatarComponent3D"), this.camF = hcsdesign.engine3D.cameraFeatures, this.setOptions({
            alpha: !1,
            beta: !0,
            goBack: !0,
            velocity: 2
        })
    };
    t.prototype = Object.create(BaseComponent3D.prototype), t.prototype.initialize = function() {
        this._previous = {
            cameraState: null,
            wallTransparency: null,
            lookAtObject: null,
            lookAtY: null,
            controlLock: null
        }, this._options || this.setOptions()
    };
    var e = {
        duration: 250,
        velocity: !1,
        smooth: "ease",
        alpha: !0,
        beta: !0,
        radius: !0,
        goBack: !0
    };
    t.prototype.setOptions = function(t) {
        this._options = this._options || {}, t = t || {};
        for (var n in e)
            this._options[n] = "undefined" == typeof t[n] ? e[n] : t[n];
        return this
    }, t.prototype.replaceCameraTarget = function(t) {
        var e = hcsdesign.engine3D.scene.activeCamera,
            n = this.camF,
            i = n.computeCameraStateLooking(t, e);
        i = {
            target: i.target
        };
        var o = {
                target: e.target.clone()
            },
            r = this._options.velocity ? this._coputeDelta(o, i) / (.1 * this._options.velocity) : .5 * this._options.duration;
        return n.computeAnimation(e, o, i, {
            duration: r,
            name: "cameraAnimation",
            isACamera: !0,
            smooth: "ease"
        })
    }, t.prototype.focusObject = function(t) {
        var e = hcsdesign.engine3D.camera,
            n = this.camF;
        if ("In" != this._currentAnimation && !this._focus) {
            this._previous.cameraState = {
                target: e.target.clone(),
                alpha: e.alpha,
                beta: e.beta,
                radius: e.radius
            };
            var i = {
                    target: e.target.clone(),
                    alpha: e.alpha,
                    beta: e.beta,
                    radius: e.radius
                },
                o = n.computeCameraStateLooking(t, e);
            o.alpha = BABYLON.Math.ClosestAngle(o.alpha, i.alpha), o.beta = BABYLON.Math.ClosestAngle(o.beta, i.beta), this.stopCurrentAnimation(), i = this._filterCameraState(i), o = this._filterCameraState(o);
            var r = this._options.velocity ? this._coputeDelta(i, o) / this._options.velocity : this._options.duration;
            this._cancelor = n.computeAnimation(e, i, o, {
                duration: r,
                callback: this.myBind.afterAnimation,
                name: "cameraFocusOn_" + t.name,
                isACamera: !0,
                smooth: "ease"
            }), this._currentAnimation = "In", ujs.notify("hcs.engine3d.configurator.animationIn.begin")
        }
    }, t.prototype.stopCurrentAnimation = function() {
        if (this._cancelor) {
            this._cancelor.cancel(), this._listenBreakEvent(!1);
            var t = this._currentAnimation;
            switch (this._cancelor = null, this._currentAnimation = null, t) {
                case "In":
                case "Out":
                    ujs.notify("hcs.engine3d.configurator.animation" + t + ".end")
            }
        }
    }, t.prototype.cancel = function() {
        this.stopCurrentAnimation()
    }, t.prototype.restoreCameraState = function() {
        var t = hcsdesign.engine3D.camera,
            e = this.camF;
        if ("Out" != this._currentAnimation && this._focus) {
            var n = {
                    target: t.target.clone(),
                    alpha: t.alpha,
                    beta: t.beta,
                    radius: t.radius
                },
                i = this._previous.cameraState;
            i.alpha = BABYLON.Math.ClosestAngle(i.alpha, n.alpha), i.beta = BABYLON.Math.ClosestAngle(i.beta, n.beta), this.stopCurrentAnimation(), n = this._filterCameraState(n), i = this._filterCameraState(i);
            var o = this._options.velocity ? this._coputeDelta(n, i) / this._options.velocity : this._options.duration;
            this._cancelor = e.computeAnimation(t, n, i, {
                duration: o,
                callback: this.myBind.afterAnimation,
                name: "cameraFocusOff",
                isACamera: !0,
                smooth: "ease"
            }), this._currentAnimation = "Out", this._previous.cameraState = !1, ujs.notify("hcs.engine3d.configurator.animationOut.begin"), this._listenBreakEvent(!0)
        }
    }, t.prototype.startListening = function() {
        this.stopListening(), document.addEventListener("hcs.request.configurator.animation.cancel", this.myBind.onRequestCancel), document.addEventListener("hcs.request.configurator.animationIn.start", this.myBind.onRequestAnimationIn), document.addEventListener("hcs.request.configurator.animationOut.start", this.myBind.onRequestAnimationOut), document.addEventListener("hcs.engine3d.configurator.animationIn.begin", this.myBind.onAnimationInStart), document.addEventListener("hcs.engine3d.configurator.animationIn.end", this.myBind.onAnimationInEnd), document.addEventListener("hcs.engine3d.configurator.animationOut.begin", this.myBind.onAnimationOutStart), document.addEventListener("hcs.engine3d.configurator.animationOut.end", this.myBind.onAnimationOutEnd), document.addEventListener("hcs.engine3D.object.refresh", this.myBind.onRefresh), document.addEventListener("hcs.engine3D.object.translate", this.myBind.onRefresh), document.addEventListener("hcs.engine3D.object.rotate", this.myBind.onRefresh), this._listening = !0
    }, t.prototype.stopListening = function() {
        this.initBindForThisInstance(), document.removeEventListener("hcs.request.configurator.animation.cancel", this.myBind.onRequestCancel), document.removeEventListener("hcs.request.configurator.animationIn.start", this.myBind.onRequestAnimationIn), document.removeEventListener("hcs.request.configurator.animationOut.start", this.myBind.onRequestAnimationOut), document.removeEventListener("hcs.engine3d.configurator.animationIn.begin", this.myBind.onAnimationInStart), document.removeEventListener("hcs.engine3d.configurator.animationIn.end", this.myBind.onAnimationInEnd), document.removeEventListener("hcs.engine3d.configurator.animationOut.begin", this.myBind.onAnimationOutStart), document.removeEventListener("hcs.engine3d.configurator.animationOut.end", this.myBind.onAnimationOutEnd), document.removeEventListener("hcs.engine3D.object.refresh", this.myBind.onRefresh), document.removeEventListener("hcs.engine3D.object.translate", this.myBind.onRefresh), document.removeEventListener("hcs.engine3D.object.rotate", this.myBind.onRefresh), this._listening = !1
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
    }, t.prototype.avatarUnbind = function() {
        var t = this.camComp,
            e = hcsdesign.engine3D.camera;
        this._previous.lookAtObject = t.lookAt, this._previous.lookAtY = e.target.y, t.bindLookAt(null)
    }, t.prototype.avatarRebind = function() {
        var t = this.camComp,
            e = hcsdesign.engine3D.camera;
        t.cameraActiveId ? t.camera[0].target.y = this.avatarComp.avatar.position.y + 170 : (e.target.y = this._previous.lookAtY, e.target.y = this.avatarComp.avatar.position.y + 170, t.bindLookAt(this._previous.lookAtObject))
    }, t.prototype._listenBreakEvent = function(t) {
        for (var e = n.length; e--;)
            document.removeEventListener(n[e], this.myBind.onRequestCancel, !1);
        if (t)
            for (var e = n.length; e--;)
                document.addEventListener(n[e], this.myBind.onRequestCancel, !1)
    }, t.prototype._filterCameraState = function(t) {
        var e = {
            target: t.target
        };
        for (var n in t)
            switch (n) {
                case "beta":
                case "alpha":
                case "radius":
                    this._options[n] && (e[n] = t[n])
            }
        return e
    }, t.prototype._coputeDelta = function(t, e) {
        var n, i = 0;
        for (var o in t) {
            switch (o) {
                case "beta":
                case "alpha":
                    n = Math.abs(e[o] - t[o]) / Math.PI * 800;
                    break;
                case "radius":
                    n = .6 * Math.abs(e[o] - t[o]);
                    break;
                case "target":
                    n = 1.6 * BABYLON.Vector3.Distance(t[o], e[o])
            }
            n > i && (i = n)
        }
        return i
    }, t.prototype.handlers = {
        afterAnimation: function() {
            this.stopCurrentAnimation()
        },
        onAnimationInStart: function() {
            this.avatarUnbind()
        },
        onAnimationInEnd: function() {
            this._focus = !0
        },
        onAnimationOutStart: function() {
            this._focus = !1
        },
        onAnimationOutEnd: function() {
            this.avatarRebind()
        },
        onRequestAnimationOut: function() {
            this._options.goBack ? this.restoreCameraState() : (ujs.notify("hcs.engine3d.configurator.animationOut.begin"), ujs.notify("hcs.engine3d.configurator.animationOut.end"))
        },
        onRequestAnimationIn: function() {
            this.confm.getCurrentObject() && this.focusObject(this.confm.getCurrentObject())
        },
        onRequestCancel: function() {
            this.cancel()
        },
        onRefresh: function(t) {
            (this._focus || this._currentAnimation) && t.object == this.confm.getCurrentObject() && this.replaceCameraTarget(t.object)
        }
    };
    var n = ["hcs.engine3D.dragging", "hcs.engine3D.camera.zoom", "hcs.engine3D.click"];
    return t
}();