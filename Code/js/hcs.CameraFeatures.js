/*
 * 摄像机模块负责根据用户请求去计算不同的显示效果和角度。该模块需要对用户摄像机移动，缩放，设置观察角度，透明控制和自动选择最佳观察角度。
 */
var hcs = window.hcs || {};

hcs.CameraFeatures = function() {
    var t = null, e = function() {
        this.camera = void 0, this.wallTransparency = false, document.addEventListener("wnp.engine3D.camera.move", this.onCameraMove.bind(this), false), document.addEventListener("wnp.engine3D.camera.zoom", this.onCameraZoom.bind(this), false), document.addEventListener("wnp.engine3d.subslopeOverturesReady", this.onWallsReady.bind(this), false), document.addEventListener("wnp.contextChanged", this.onContextChanged.bind(this), false), document.addEventListener("wnp.engine3d.globaleFloorReady", this.onGlobaleFloorReady.bind(this), false)
    };
    e.prototype.setCamera = function(t) {
        this.camera = t
    }, e.prototype.onCameraMove = function() {
        this.wallTransparency && this.dynamicWallTransparency()
    }, e.prototype.onCameraZoom = function() {
        this.wallTransparency && this.dynamicWallTransparency()
    }, e.prototype.onWallsReady = function() {
        wanaplan.getSelectedEngine() === wanaplan.ENGINE_3D && this.wallTransparency && this.dynamicWallTransparency()
    }, e.prototype.stopTransparency = function() {
        t = t || wanaplan.getComponentByName("WallComponent3D");
        for (var e, i = wanaplan.getSelectedStructure(), o = t.get3DWallFrom2D(i), r = 0, s = o.material.subMaterials.length; s > r; r++)
            if (e = o.material.subMaterials[r], e.opacitySwitched) {
                if (o.objectInstances[r] && ("OvertureStructure" == o.objectInstances[r].name || "SubSlopeOvertureStructure" == o.objectInstances[r].name) && o.objectInstances[r].programmableInstance)
                    for (var a in o.objectInstances[r].programmableInstance.materials)
                        o.objectInstances[r].programmableInstance.materials.hasOwnProperty(a) && n(o.objectInstances[r].programmableInstance.materials[a]);
                n(e)
            }
        this.wallTransparency = false
    }, e.prototype.startTransparency = function() {
        this.dynamicWallTransparency(), this.wallTransparency = true
    }, e.prototype.buildPlaneFromBB = function(t) {
        var e = t.center, n = -t.angle, i = new BABYLON.Vector3(Math.sin(n), 0, -Math.cos(n));
        return BABYLON.Plane.FromPositionAndNormal(e, i)
    }, e.prototype.fillByZIndex = function(t) {
        {
            var e, n, i, o = {}, r = this.camera.target.clone(), s = new BABYLON.Ray(this.camera.position, r.subtract(this.camera.position).normalize());
            new BABYLON.Vector3
        }
        o[0] = true, o[1] = true;
        for (var a in t.subMeshes)
            e = t.boundingBoxes[a], e ? (n = this.buildPlaneFromBB(e), i = s.distanceToPlane(n), null !== i && i <= r.distanceTo(this.camera.position) && (o[a] = true)) : "top" == t.material.subMaterials[a].name ? o[a] = true : t.objectInstances[a] && "SubSlopeOvertureStructure" == t.objectInstances[a].name && (o[a] = true);
        return o
    };
    var n = function(t, e) {
        var n = void 0 !== t.alternativeOpacity ? t.alternativeOpacity : e;
        t.alternativeOpacity = t.alpha, t.alpha = n, t.opacitySwitched = !t.opacitySwitched, t.transparent = 1 != t.alpha
    };
    e.prototype.dynamicWallTransparency = function() {
        t = t || wanaplan.getComponentByName("WallComponent3D");
        var e = wanaplan.getSelectedStructure(), i = t.get3DWallFrom2D(e);
        if (i)
            for (var o, r = this.fillByZIndex(i), s = 0, a = i.subMeshes.length; a > s; s++)
                if (o = i.material.subMaterials[i.subMeshes[s].materialIndex], o.opacitySwitched && !r[i.subMeshes[s].materialIndex] || !o.opacitySwitched && r[i.subMeshes[s].materialIndex])
                    if (1 == s)
                        n(o, 0);
                    else {
                        if (i.objectInstances[s] && ("OvertureStructure" == i.objectInstances[s].name || "SubSlopeOvertureStructure" == i.objectInstances[s].name) && i.objectInstances[s].programmableInstance)
                            for (var l in i.objectInstances[s].programmableInstance.materials)
                                i.objectInstances[s].programmableInstance.materials.hasOwnProperty(l) && n(i.objectInstances[s].programmableInstance.materials[l], .2);
                        n(o, .2)
                    }
    }, e.prototype.makeWallsOpaque = function(e) {
        if (this.wallTransparency) {
            t = t || wanaplan.getComponentByName("WallComponent3D");
            var i, e = e || wanaplan.getSelectedStructure(), o = t.get3DWallFrom2D(e);
            if (!o)
                return;
            for (var r = 0, s = o.subMeshes.length; s > r; r++)
                if (i = o.material.subMaterials[o.subMeshes[r].materialIndex], i.opacitySwitched) {
                    if (o.objectInstances[r] && ("OvertureStructure" == o.objectInstances[r].name || "SubSlopeOvertureStructure" == o.objectInstances[r].name) && o.objectInstances[r].programmableInstance)
                        for (var a in o.objectInstances[r].programmableInstance.materials)
                            o.objectInstances[r].programmableInstance.materials.hasOwnProperty(a) && n(o.objectInstances[r].programmableInstance.materials[a]);
                    n(i)
                }
        }
    }, e.prototype.onContextChanged = function(t) {
        "3D" !== t.context && this.makeWallsOpaque()
    }, e.prototype.onGlobaleFloorReady = function(t) {
        for (var e = 0; e < wanaplan.structure.getLength(); e++) {
            var n = wanaplan.structure.getElement(e);
            e !== t.maxFloorId && this.makeWallsOpaque(n)
        }
    }, e.prototype.getBestFocusRadius = function(t, e, n) {
        var i = t.getBoundingSphere(), o = (i.center.clone().add(t.position), n.getEngine().getAspectRatio(e)), r = Math.max(1, 1 / o) * i.radius, s = r / Math.sin(e.fov / 2);
        return s
    }, e.prototype.computeCameraStateLooking = function(t, e, n) {
        n = n || new BABYLON.Viewport(0, 0, 1, 1);
        var i = t.getScene();
        e = e || i.activeCamera;
        var o = t.getBoundingSphere(), r = new BABYLON.Vector3(0, .3, 1.2);
        t.structure && "undefined" != typeof t.structure.preferredYAngle && (r.x = Math.sin(t.structure.preferredYAngle), r.z = Math.cos(t.structure.preferredYAngle)), r.normalize();
        var s = o.center.clone(), a = t.getWorldMatrix().clone();
        s.x += a.m[12], s.y += a.m[13], s.z += a.m[14], a.m[12] = a.m[13] = a.m[14] = 0;
        var l = BABYLON.Vector3.TransformCoordinates(r, a);
        l.y < 0 && (l.y = 0, l.normalize());
        var h = l.toSpherical(), c = i.getEngine().getAspectRatio(e), u = 1 / n.height * o.radius, p = 1 / n.width / c * o.radius, d = Math.max(p, u) / Math.sin(e.fov / 2), m = new BABYLON.Vector3(0, 1, 0), g = BABYLON.Vector3.Cross(m, r);
        (null == g || g.lengthSquared() < 1e-5) && (r = new BABYLON.Vector3(0, 1, .001), g = BABYLON.Vector3.Cross(m, r)), g.normalize(), BABYLON.Vector3.CrossToRef(g, r, m);
        var f = BABYLON.Matrix.FromArray([g.x, g.y, g.z, 0, m.x, m.y, m.z, 0, r.x, r.y, r.z, 0, 0, 0, 0, 1]);
        f.invert(), f = f.multiply(a), u = d * Math.sin(e.fov / 2), p = u * c;
        var y = new BABYLON.Vector3(p * n.x, 0, 0), _ = new BABYLON.Vector3(0, u * n.y, 0);
        return BABYLON.Vector3.TransformCoordinatesToRef(y, f, y), BABYLON.Vector3.TransformCoordinatesToRef(_, f, _), s.addInPlace(y), s.addInPlace(_), {target: s,alpha: h.alpha,beta: h.beta,radius: d}
    };
    var i = function(t, e) {
        this.animations = t, this.target = e, this.target._animationCancelor && this.target._animationCancelor.cancel(), this.target._animationCancelor = this
    };
    i.prototype.cancel = function() {
        this.target._animationCancelor == this && (this.target.getScene().stopAnimation(this.target), this._onAnimationEnd())
    }, i.prototype._onAnimationEnd = function() {
        if (this.target._animationCancelor == this && (this.target._animationCancelor = null, this._moreCleanUp && this._moreCleanUp(), this._callBack && this._callBack(), this.animations)) {
            for (var t = this.animations.length; t--; )
                for (var e = this.target.animations.length; e--; )
                    this.animations[t] == this.target.animations[e] && this.target.animations.splice(e, 1);
            this.animations = null
        }
    };
    var o = function(t, e, n, i, o, r) {
        r = r || {x: null,y: null};
        var s = 1 - t;
        return r.x = 3 * t * s * s * e + 3 * t * t * s * i + t * t * t, r.y = 3 * t * s * s * n + 3 * t * t * s * o + t * t * t, r
    }, r = function(t, e, n, i, r) {
        for (var s, a = 0, l = 1, h = {x: null,y: null}; l - a > .001; )
            o(s = (a + l) / 2, e, n, i, r, h).x > t ? l = s : a = s;
        return (a + l) / 2
    }, s = function(t, e, n, i, s) {
        return o(r(t, e, n, i, s), e, n, i, s).y
    }, a = {linear: function(t) {
            return t
        },ease: function(t) {
            return s(t, .5, 0, .5, 1)
        },easeOut: function(t) {
            return s(t, .64, .47, .34, 1)
        }};
    return e.prototype.computeAnimation = function(t, e, n, o) {
        o = o || {};
        var r = Math.max(.01, o.duration || 0), s = o.callback, l = ("undefined" == typeof o.cleanAfterAnimation ? true : o.cleanAfterAnimation, o.name || "animation"), h = o.isACamera, c = "function" == typeof o.smooth ? o.smooth : a[o.smooth || "linear"], u = [];
        for (var p in e) {
            for (var d, m, g = new BABYLON.Animation(l + "_" + p, p, 60, e[p] instanceof BABYLON.Vector3 ? BABYLON.Animation.ANIMATIONTYPE_VECTOR3 : BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT), f = [], y = (c == a.linear ? 2 : Math.max(2, r / 40)) >> 0, _ = y; _--; ) {
                d = _ / (y - 1);
                var v = 0 === d ? 0 : 1 === d ? 1 : c(d);
                switch (g.dataType) {
                    case BABYLON.Animation.ANIMATIONTYPE_VECTOR3:
                        m = g.vector3InterpolateFunction(e[p], n[p], v);
                        break;
                    case BABYLON.Animation.ANIMATIONTYPE_FLOAT:
                        m = g.floatInterpolateFunction(e[p], n[p], v)
                }
                f.unshift({frame: 100 * d,value: m})
            }
            g.setKeys(f), u.push(g)
        }
        if (.1 > r)
            return new i(u, t);
        t.animations = t.animations.concat(u);
        var b = new i(u, t);
        b._callBack = s;
        var w = 100 / 60 / (r / 1e3);
        if (t.getScene().beginAnimation(t, 0, 100, false, w, b._onAnimationEnd.bind(b)), h) {
            var x = function() {
                ujs.notify("wnp.engine3D.camera.move")
            }, C = t.getScene();
            C.registerBeforeRender(x), b._moreCleanUp = function() {
                C.unregisterBeforeRender(x), x = null
            }
        }
        return b
    }, e
}();