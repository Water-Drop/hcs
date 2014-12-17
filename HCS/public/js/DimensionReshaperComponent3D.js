var DimensionReshaperComponent3D = function() {
    var t = function(t) {
        BaseComponent3D.call(this, t, "DimensionReshaperComponent3D"), this._listeners = [], this._options || this.setOptions(), this.setOptions({
            roundDimension: .25,
            displayHandleOnResize: !0,
            keepAnimateHandleOnResize: !0
        })
    };
    t.prototype = Object.create(BaseComponent3D.prototype), t.prototype.initBindForThisInstance = function() {
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
        var t = hcsdesign.getComponentByName("MasterReshaperComponent3D");
        if (!t)
            return console.warn("MasterReshaperComponent3D not found, the configurator " + this.name + " components will be disabled.");
        this.master = t, this._options || this.setOptions();
        var e = hcsdesign.getComponentByName("HandlesDisplayerForDimensionReshaperFactoryComponent3D"),
            n = hcsdesign.getComponentByName("BoundingLimitDisplayerForDimensionReshaperFactoryComponent3D"),
            i = hcsdesign.getComponentByName("MesureDisplayerForDimensionReshaperFactoryComponent3D");
        this.displayer = {}, n && (this.displayer.boundingLimit = n.create(this.camera, this.scene, "green")), n && this._options.displayNewBoundingLimit && (this.displayer.boundingLimitNew = n.create(this.camera, this.scene, "yellow")), e && (this.displayer.handles = e.create(this.camera, this.scene)), i && (this.displayer.mesure = i.create(this.camera, this.scene)), this.initBindForThisInstance(), t.on("editionStart", this.myBind.onEditionStart), t.on("editionEnd", this.myBind.onEditionEnd), t.on("dragStart", this.myBind.onDragStart), t.on("dragging", this.myBind.onDragging), t.on("dragEnd", this.myBind.onDragEnd), t.on("refresh", this.myBind.onAfterRefresh), this.displayer.boundingLimit && this._options.displayBoundingLimitOnHover && (t.on("hover", this.myBind.onHover), t.on("leave", this.myBind.onLeave))
    };
    var e = {
        displayHandleOnResize: !0,
        keepAnimateHandleOnResize: !1,
        animateHandleOnHover: !0,
        displayNewBoundingLimit: !0,
        displayBoundingLimitOnHover: !0,
        displayBoundingLimitOnDrag: !0,
        roundDimension: 1,
        debug: !1
    };
    return t.prototype.setOptions = function(t) {
        this._options = this._options || {}, t = t || {};
        for (var n in e)
            this._options[n] = "undefined" == typeof t[n] ? e[n] : t[n];
        return this
    }, t.prototype.askStartResize = function(t, e, n, i) {
        return this._asker && i == this.displayer.handles ? !1 : t && !this._getPropertyName(t, e) ? !1 : this.master.requireHand(this) ? (this._direction = e, this._pickedPoint = n, this._asker = i || this, this.myBind.onDragging(event), !0) : !1
    }, t.prototype.cancelHand = function() {
        this._touchedFace = null, this._direction = null, this._pickedPoint = null, this._asker = null, this.master.releaseHand(this)
    }, t.prototype.computeDimension = function(t, e, n) {
        var i = t.getBoundingBox(),
            o = i.maximum.subtract(i.minimum);
        o.multiplyInPlace(t.scaling, o);
        var r = i.center.clone(),
            s = t.getWorldMatrix();
        BABYLON.Vector3.TransformCoordinatesToRef(r, s, r);
        var a = this.rotationToWorld(t),
            l = new BABYLON.Matrix;
        if (a.toRotationMatrix(l), !e)
            return {
                position: r,
                dimension: o,
                rotationMatrix: l,
                rotationQuat: a
            };
        var h = e.scale(.5 * n);
        BABYLON.Vector3.TransformCoordinatesToRef(h, l, h), h.addInPlace(r);
        var c = e.multiply(e);
        return c.scaleInPlace(n), c.addInPlace(o), {
            position: r,
            dimension: o,
            newPosition: h,
            newDimension: c,
            rotationMatrix: l,
            rotationQuat: a
        }
    }, t.prototype.rotationToWorld = function(t) {
        for (var e = t.getTopLevelObject(), n = new BABYLON.Quaternion(0, 0, 0, 1), i = new BABYLON.Quaternion; t && (BABYLON.Quaternion.RotationYawPitchRollToRef(t.rotation.y, t.rotation.x, t.rotation.z, i), n = i.multiply(n), t != e);)
            t = t.parent;
        return n
    }, t.prototype.getbestAxis = function(t, e, n) {
        n = n || this._direction, e = e || this._pickedPoint || t.position;
        var i = hcsdesign.engine3D,
            o = i.scene.activeCamera,
            r = o.position.subtract(e),
            s = this.computeDimension(t).rotationMatrix.clone();
        s.invert(), BABYLON.Vector3.TransformCoordinatesToRef(r, s, r);
        for (var a = r.multiply(r).asArray(), l = n.asArray(), h = null, c = 3; c--;)
            (null === h || a[c] > a[h]) && Math.abs(l[c]) < .7 && (h = c);
        var u = [0, 0, 0];
        return u[h] = r.asArray()[h] < 0 ? 1 : -1, BABYLON.Vector3.FromArray(u)
    }, t.prototype._getCollider = function() {
        if (this._collider)
            return this._collider;
        this._objectPool = this._objectPool || {};
        var t = this.scene;
        return this._collider = BABYLON.Mesh.CreateBox("boundingboxConfigurator.collider", 1, t)
    }, t.prototype._getTouchedFace = function(t, e) {
        var n = this._getCollider();
        n.isVisible = !0;
        var i = t.pickedMesh,
            o = i.getTopLevelObject(!0),
            r = this.computeDimension(o);
        n.position = r.position, n.scaling = r.dimension, n.rotationQuaternion = r.rotationQuat;
        var s = hcsdesign.engine3D,
            a = s.scene.createPickingRay(e.mstate.pos.x, e.mstate.pos.y),
            l = a.intersectMeshes([n], !0, !0);
        if (this._options.debug || (n.isVisible = !1), !l || !l.hit)
            return null;
        var h = n.getIndices(),
            c = n.getVerticesData(BABYLON.VertexBuffer.NormalKind),
            u = BABYLON.Vector3.FromArray(c, 3 * h[3 * l.faceId]),
            p = s.scene.activeCamera,
            d = p.position.subtract(p.target);
        d.normalize();
        var m = BABYLON.Vector3.TransformNormal(u, n.getWorldMatrix());
        if (m.normalize(), BABYLON.Vector3.Dot(d, m) > .6)
            return null;
        var h = i.getIndices(),
            c = i.getVerticesData(BABYLON.VertexBuffer.NormalKind),
            g = BABYLON.Vector3.FromArray(c, 3 * h[3 * t.faceId]),
            f = BABYLON.Vector3.TransformNormal(g, i.getWorldMatrix());
        return f.normalize(), BABYLON.Vector3.Dot(m, f) < .35 ? null : u
    }, t.prototype._computeL = function(t, e, n, i) {
        var o = this._getCollider();
        o.isVisible = !0;
        var r = this.computeDimension(t);
        o.position = n.clone(), o.rotationQuaternion = r.rotationQuat, o.scaling.x = o.scaling.y = o.scaling.z = 1;
        var s = 9e3,
            a = this.getbestAxis(t, n, e);
        a.multiplyInPlace(a), a.scaleInPlace(-s + .1);
        var l = new BABYLON.Vector3(s, s, s);
        l.addInPlace(a), o.scaling = l, o.markAsDirty();
        var h = hcsdesign.engine3D,
            c = h.scene.createPickingRay(i.mstate.pos.x, i.mstate.pos.y),
            u = c.intersectMeshes([o], !0, !0);
        if (this._options.debug || (o.isVisible = !1), !u || !u.pickedPoint)
            return 0;
        var p = r.rotationMatrix.clone();
        p.invert();
        var d = u.pickedPoint.subtract(n);
        BABYLON.Vector3.TransformCoordinatesToRef(d, p, d);
        var m = BABYLON.Vector3.Dot(d, e);
        return m
    }, t.prototype._getPropertyName = function(t, e) {
        var n = t.structure.programmableInstance.objectName,
            i = t.structure.programmableInstance.params;
        if (Math.abs(e.x) > .9)
            switch (n) {
                case "Bed":
                    return "mattress.width";
                case "Bath":
                case "GlassConsole":
                case "BabylonImporter":
                case "Light":
                    return null;
                case "Tv":
                    return "screen.width";
                case "PhotoFrame":
                case "photoFrame":
                    return "structure.width";
                case "BenchIkea":
                    return "global.width";
                case "spotMultiple":
                    return "tube.width";
                default:
                    return "undefined" != typeof i.width ? "width" : null
            }
        if (Math.abs(e.y) > .9)
            switch (n) {
                case "spotMultiple":
                case "Sofa":
                case "BabylonImporter":
                case "Bed":
                    return null;
                case "BenchIkea":
                    return "feet.height";
                case "PhotoFrame":
                case "photoFrame":
                    return "structure.height";
                case "Tv":
                    return "screen.height";
                case "Shower":
                    return t.structure.programmableInstance.nbWall ? "height" : null;
                case "GlassConsole":
                    return i.bar && "undefined" != typeof i.bar.height ? "bar.height" : null;
                case "Basic":
                    if ("undefined" != typeof t.structure.programmableInstance.horizontal && !t.structure.programmableInstance.horizontal)
                        return null;
                default:
                    return "undefined" != typeof i.height ? "height" : null
            }
        if (Math.abs(e.z) > .9)
            switch (n) {
                case "Bed":
                    return "mattress.length";
                case "PhotoFrame":
                case "photoFrame":
                    return "structure.depth";
                case "BenchIkea":
                    return "plank.depth";
                case "Bath":
                case "BabylonImporter":
                case "GlassConsole":
                case "spotMultiple":
                case "Curtains":
                case "Tv":
                case "TowelDry":
                case "Light":
                    return null;
                case "Basic":
                    if ("undefined" != typeof t.structure.programmableInstance.horizontal)
                        return t.structure.programmableInstance.horizontal ? null : "height";
                default:
                    return "undefined" != typeof i.depth ? "depth" : null
            }
    }, t.prototype._computePropertyValue = function(t, e, n) {
        var i = t.structure,
            o = this.computeDimension(t, e, n),
            r = Math.abs(BABYLON.Vector3.Dot(o.dimension, e)),
            s = Math.abs(BABYLON.Vector3.Dot(o.newDimension, e)),
            a = ujs.setProperty(i.programmableInstance.params, this._getPropertyName(t, e)) || 0,
            l = s - (r - a);
        return l = Math.abs(e.y) > .9 ? Math.max(1, l) : Math.abs(l)
    }, t.prototype._roundL = function(t) {
        return Math.round(t / this._options.roundDimension) * this._options.roundDimension
    }, t.prototype._enlargeYourObject = function(t, e, n) {
        if (!(Math.abs(n) < 1e-4)) {
            var i = t.structure,
                o = hcsdesign.getComponentByName("EditionComponent3D"),
                r = {},
                s = this._getPropertyName(t, e),
                a = this._roundL(this._computePropertyValue(t, e, n));
            r["programmableInstance.params." + s] = {
                newValue: a,
                exValue: ujs.getProperty(i.programmableInstance.params, s)
            }, ujs.setProperty(i.programmableInstance.params, s, a);
            var l = BABYLON.Matrix.RotationYawPitchRoll(t.rotation.y, t.rotation.x, t.rotation.z),
                h = new BABYLON.Vector3(.5 * n * e.x, 0, .5 * n * e.z);
            BABYLON.Vector3.TransformCoordinatesToRef(h, l, h), h.addInPlace(t.position), r.position = {
                newValue: h.clone(),
                exValue: t.position.clone()
            }, t.position.copyFrom(h), o.refreshObject(t, {
                modifiedProperties: r
            }), ujs.notify("hcs.request.saveHistory")
        }
    }, t.prototype.handlers = {
        onDragStart: function(t) {
            t.collided && t.collided.pickedMesh && (this._touchedFace = this._getTouchedFace(t.collided, t), this._touchedFace && (this.displayer.handles && !this._options.keepAnimateHandleOnResize && this.displayer.handles.stopAnimeHandle(), this.displayer.handles && !this._options.displayHandleOnResize && this.displayer.handles.dispose(), this.askStartResize(this.object, this._touchedFace, t.collided.pickedPoint)))
        },
        onDragEnd: function(t) {
            if (this._direction) {
                this.myBind.onDragging(t);
                var e = this._roundL(this._l);
                this._enlargeYourObject(this.object, this._direction, e), this.displayer.boundingLimit && this.displayer.boundingLimit.hide(), this.displayer.boundingLimitNew && this.displayer.boundingLimitNew.hide(), this.displayer.mesure && this.displayer.mesure.hide(), this.displayer.handles && this.displayer.handles.dispose(), this._direction = null, this.master.releaseHand(this)
            }
        },
        onDragging: function(t) {
            if (this._direction) {
                this._l = this._computeL(this.object, this._direction, this._pickedPoint, t);
                var e = this._roundL(this._l);
                this.displayer.boundingLimit && this._options.displayBoundingLimitOnDrag && this.displayer.boundingLimit.display(this.object, this._direction, 0), this.displayer.boundingLimitNew && this._options.displayBoundingLimitOnDrag && this.displayer.boundingLimitNew.display(this.object, this._direction, e), this.displayer.handles && this._options.displayHandleOnResize && this.displayer.handles.placeHandleOnObject(this.object, this._direction, e), this.displayer.mesure && this.displayer.mesure.display(this.object, this._direction, this._pickedPoint, e)
            }
        },
        onHover: function(t) {
            return this._touchedFace = this._getTouchedFace(t.collided, t), this._touchedFace && this._getPropertyName(this.object, this._touchedFace) && this.master.requireHand(this) ? (this.displayer.boundingLimit && this._options.displayBoundingLimitOnHover && this.displayer.boundingLimit.display(this.object, this._touchedFace), this.displayer.handles && this._options.animateHandleOnHover && (this._previousHoverFace && BABYLON.Vector3.Dot(this._previousHoverFace, this._touchedFace) < .9 && this.displayer.handles.stopAnimeHandle(), this.displayer.handles.startAnimeHandle(this._touchedFace)), void(this._previousHoverFace = this._touchedFace)) : this.myBind.onLeave(t)
        },
        onLeave: function() {
            this.displayer.boundingLimit.hide(), this.displayer.handles && this.displayer.handles.stopAnimeHandle(), this._previousHoverFace = this._touchedFace = null, this.master.releaseHand(this)
        },
        onAfterRefresh: function() {
            this.displayer.handles && this.displayer.handles.start(this.object)
        },
        onEditionStart: function(t) {
            this.object = t.furniture, this.displayer.handles && this.displayer.handles.start(this.object)
        },
        onEditionEnd: function() {
            this.displayer.handles && this.displayer.handles.stop(), this.displayer.boundingLimit && this.displayer.boundingLimit.hide(), this.displayer.boundingLimitNew && this.displayer.boundingLimitNew.hide(), this.displayer.mesure && this.displayer.mesure.hide(), this._direction = null, this.master.releaseHand(this), this.object = null
        }
    }, t
}();