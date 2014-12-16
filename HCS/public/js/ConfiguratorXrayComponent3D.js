var ConfiguratorXrayComponent3D = function() {
    var t = function(t) {
        BaseComponent3D.call(this, t, "ConfiguratorXrayComponent3D"), this.confm = wanaplan.getComponentByName("ConfiguratorModComponent3D"), this.hec = wanaplan.getComponentByName("TransparencyComponent"), this.camF = wanaplan.engine3D.cameraFeatures
    };
    t.prototype = new BaseComponent3D, t.prototype.initialize = function() {
        this._options || this.setOptions(), this._savedMaterials = {}, this._clonedMaterials = {}, e = new BABYLON.StandardMaterial("xrayTransparentDefaultMaterial", this.scene)
    };
    var e, n = function(t, n) {
            t.getTotalVertices() && (t.material || (t.material = e), "undefined" == typeof t.material.alternativeOpacity && (t.material.alternativeOpacity = "undefined" != typeof t.material.alpha ? t.material.alpha : 1), t.material.alpha = n, t.material.transparent = 1 != t.material.alpha)
        },
        i = function(t) {
            n(t, 0)
        },
        o = function(t) {
            n(t, .1)
        },
        r = function(t) {
            t.getTotalVertices() && (t.material.alpha = "undefined" == typeof t.material.alternativeOpacity ? 1 : t.material.alternativeOpacity, t.material.transparent = 1 != t.material.alpha, t.material == e && (t.material = null))
        },
        s = {
            wallTransparency: !0,
            hideAll: !0,
            partialTransparency: !0
        };
    return t.prototype.setOptions = function(t) {
        this._options = this._options || {}, t = t || {};
        for (var e in s)
            this._options[e] = "undefined" == typeof t[e] ? s[e] : t[e];
        return this._setHideStrategy(), this
    }, t.prototype.stopListening = function() {
        this.initBindForThisInstance(), document.removeEventListener("wnp.engine3d.configurator.animationIn.begin", this.myBind.onAnimationInStart, !1), document.removeEventListener("wnp.engine3d.configurator.animationOut.end", this.myBind.onAnimationOutEnd, !1), document.removeEventListener("wnp.engine3D.camera.move", this.myBind.onCameraMove, !1)
    }, t.prototype.startListening = function() {
        this.stopListening(), document.addEventListener("wnp.engine3d.configurator.animationIn.begin", this.myBind.onAnimationInStart, !1), document.addEventListener("wnp.engine3d.configurator.animationOut.end", this.myBind.onAnimationOutEnd, !1)
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
    }, t.prototype.start = function() {
        document.removeEventListener("wnp.engine3D.camera.move", this.myBind.onCameraMove, !1), this._stopSharingMaterial(this.confm.getCurrentObject()), this._flagMeshes(), this._changeOnCameraMove && document.addEventListener("wnp.engine3D.camera.move", this.myBind.onCameraMove, !1), this._options.wallTransparency && this._startWallTransparency()
    }, t.prototype.stop = function() {
        if (document.removeEventListener("wnp.engine3D.camera.move", this.myBind.onCameraMove, !1), this._continueSharingMaterial(this.confm.getCurrentObject()), this._restoreMeshes(), this._options.wallTransparency)
            try {
                this._stopWallTransparency()
            } catch (t) {
                console.warn("TODO  fix wallTransparency when floor have changed")
            }
    }, t.prototype._stopSharingMaterial = function(t) {
        var e, n = this._savedMaterials,
            i = this._clonedMaterials;
        t.traverse(function(o) {
            o.material && !n[e = t.name + ":" + o.material.id + ":" + o.name] && o.material.clone && (n[e] = o.material, i[e] = o.material = o.material.clone())
        })
    }, t.prototype._continueSharingMaterial = function(t) {
        var e, n = this._savedMaterials,
            i = this._clonedMaterials;
        t.traverse(function(o) {
            o.material && n[e = t.name + ":" + o.material.id + ":" + o.name] && (i[e] != o.material || (o.material = n[e], o.material.dispose()), i[e] = null, n[e] = null, delete i[e], delete n[e])
        })
    }, t.prototype._flagMeshes = function() {
        var t = this.camera,
            e = this.confm.getCurrentObject(),
            n = this._options.partialTransparency ? o : i;
        this._hideStrategyInit || this._hideStrategyInit(e, t);
        for (var s, a = wanaplan.engine3D.scene.meshes, l = a.length; l--;)
            s = a[l], s.name && "Object" == s.name.substr(0, 6) && s != e && s.traverse(this._hideStrategyAccept(s, e, t) ? n : r)
    }, t.prototype._restoreMeshes = function() {
        for (var t, e = this.confm.getCurrentObject(), n = wanaplan.engine3D.scene.meshes, i = n.length; i--;)
            t = n[i], t.name && "Object" == t.name.substr(0, 6) && t != e && t.traverse(r)
    }, t.prototype._startWallTransparency = function() {
        var t = this.hec,
            e = this.camF;
        this._previousWallTransparency = e.wallTransparency, t.setTransparencyMode(!0)
    }, t.prototype._stopWallTransparency = function() {
        {
            var t = this.hec;
            this.camF
        }
        t.setTransparencyMode(this._previousWallTransparency)
    }, t.prototype._setHideStrategy = function(t) {
        switch ("undefined" == typeof t && (t = "do not hide", this._options.hideAll && (t = "hide all")), t) {
            case "hide all":
                this._hideStrategyInit = function() {}, this._hideStrategyAccept = function() {
                    return !0
                }, this._changeOnCameraMove = !1;
                break;
            case "do not hide":
            default:
                this._hideStrategyInit = function() {}, this._hideStrategyAccept = function() {
                    return !1
                }, this._changeOnCameraMove = !1
        }
    }, t.prototype.handlers = {
        onAnimationInStart: function() {
            this.start()
        },
        onAnimationOutEnd: function() {
            this.stop()
        },
        onCameraMove: function() {
            this._flagMeshes()
        }
    }, t
}();