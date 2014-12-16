/*
 * Author：虞思源
 *
 * 摄像头，绑定了移动事件，主要调用babylon函数中摄像头部分
 * getBestFocusRadius调整至最佳角度
 * makeWallsOpaque穿透墙
 */
var hcs = window.hcs || {};
hcs.CameraFeatures = function() {
    var CameraFeatures = null,
        camera = function() {
        this.camera = void 0, this.wallTransparency = !1,
            document.addEventListener("hcs.engine3D.camera.move", this.onCameraMove.bind(this), !1),
            document.addEventListener("hcs.engine3D.camera.zoom", this.onCameraZoom.bind(this), !1),
            document.addEventListener("hcs.engine3d.subslopeOverturesReady", this.onWallsReady.bind(this), !1),
            document.addEventListener("hcs.contextChanged", this.onContextChanged.bind(this), !1),
            document.addEventListener("hcs.engine3d.globaleFloorReady", this.onGlobaleFloorReady.bind(this), !1)
    };
    camera.prototype.setCamera = function(cam) {
        this.camera = cam
    }, camera.prototype.onCameraMove = function() {
        this.wallTransparency && this.dynamicWallTransparency()
    }, camera.prototype.onCameraZoom = function() {
        this.wallTransparency && this.dynamicWallTransparency()
    }, camera.prototype.onWallsReady = function() {
        hcsdesign.getSelectedEngine() === hcsdesign.ENGINE_3D && this.wallTransparency && this.dynamicWallTransparency()
    }, camera.prototype.stopTransparency = function() {
        CameraFeatures = CameraFeatures || hcsdesign.getComponentByName("WallComponent3D");
        for (var tmp, selected = hcsdesign.getSelectedStructure(), o = CameraFeatures.get3DWallFrom2D(selected), r = 0, s = o.material.subMaterials.length; s > r; r++)
            if (tmp = o.material.subMaterials[r], tmp.opacitySwitched) {
                if (o.objectInstances[r] && ("OvertureStructure" == o.objectInstances[r].name || "SubSlopeOvertureStructure" == o.objectInstances[r].name)
                    && o.objectInstances[r].programmableInstance)
                    for (var a in o.objectInstances[r].programmableInstance.materials)
                        o.objectInstances[r].programmableInstance.materials.hasOwnProperty(a) && init(o.objectInstances[r].programmableInstance.materials[a]);
                init(tmp)
            }
        this.wallTransparency = !1
    }, camera.prototype.startTransparency = function() {
        this.dynamicWallTransparency(), this.wallTransparency = !0
    }, camera.prototype.buildPlaneFromBB = function(bb) {
        var center = bb.center,
            n = -bb.angle,
            i = new BABYLON.Vector3(Math.sin(n), 0, -Math.cos(n));
        return BABYLON.Plane.FromPositionAndNormal(center, i)
    }, camera.prototype.fillByZIndex = function(Zindex) {
        {
            var e, n, i, o = {}, r = this.camera.target.clone(), s = new BABYLON.Ray(this.camera.position, r.subtract(this.camera.position).normalize());
            new BABYLON.Vector3
        }
        o[0] = !0, o[1] = !0;
        for (var a in Zindex.subMeshes)
            e = Zindex.boundingBoxes[a], e ? (n = this.buildPlaneFromBB(e), i = s.distanceToPlane(n),
            null !== i && i <= r.distanceTo(this.camera.position) && (o[a] = !0)) : "top" == Zindex.material.subMaterials[a].name ? o[a] = !0 : Zindex.objectInstances[a] && "SubSlopeOvertureStructure" == Zindex.objectInstances[a].name && (o[a] = !0);
        return o
    };
    var init = function(camera, sign) {
        var n = void 0 !== camera.alternativeOpacity ? camera.alternativeOpacity : sign;
        camera.alternativeOpacity = camera.alpha, camera.alpha = n, camera.opacitySwitched = !camera.opacitySwitched, camera.transparent = 1 != camera.alpha
    };
    camera.prototype.dynamicWallTransparency = function() {
        CameraFeatures = CameraFeatures || hcsdesign.getComponentByName("WallComponent3D");
        var e = hcsdesign.getSelectedStructure(), i = CameraFeatures.get3DWallFrom2D(e);
        if (i)
            for (var o, r = this.fillByZIndex(i), s = 0, a = i.subMeshes.length; a > s; s++)
                if (o = i.material.subMaterials[i.subMeshes[s].materialIndex], o.opacitySwitched && !r[i.subMeshes[s].materialIndex] || !o.opacitySwitched && r[i.subMeshes[s].materialIndex])
                    if (1 == s)
                        init(o, 0);
                    else {
                        if (i.objectInstances[s] && ("OvertureStructure" == i.objectInstances[s].name || "SubSlopeOvertureStructure" == i.objectInstances[s].name) && i.objectInstances[s].programmableInstance)
                            for (var l in i.objectInstances[s].programmableInstance.materials)
                                i.objectInstances[s].programmableInstance.materials.hasOwnProperty(l) && init(i.objectInstances[s].programmableInstance.materials[l], .2);
                        init(o, .2)
                    }
    }, camera.prototype.makeWallsOpaque = function(wall) {
        if (this.wallTransparency) {
            CameraFeatures = CameraFeatures || hcsdesign.getComponentByName("WallComponent3D");
            var i, selected = wall || hcsdesign.getSelectedStructure(), o = CameraFeatures.get3DWallFrom2D(selected);
            if (!o)
                return;
            for (var r = 0, s = o.subMeshes.length; s > r; r++)
                if (i = o.material.subMaterials[o.subMeshes[r].materialIndex], i.opacitySwitched) {
                    if (o.objectInstances[r] && ("OvertureStructure" == o.objectInstances[r].name || "SubSlopeOvertureStructure" == o.objectInstances[r].name) && o.objectInstances[r].programmableInstance)
                        for (var a in o.objectInstances[r].programmableInstance.materials)
                            o.objectInstances[r].programmableInstance.materials.hasOwnProperty(a) && init(o.objectInstances[r].programmableInstance.materials[a]);
                    init(i)
                }
        }
        //摄像头可穿透墙
    }, camera.prototype.onContextChanged = function(context) {
        "3D" !== context.context && this.makeWallsOpaque()
    }, camera.prototype.onGlobaleFloorReady = function(floor) {
        for (var e = 0; e < hcsdesign.structure.getLength(); e++) {
            var n = hcsdesign.structure.getElement(e);
            e !== floor.maxFloorId && this.makeWallsOpaque(n)
        }
    }, camera.prototype.getBestFocusRadius = function(scene, ratio, engine) {
        var i = scene.getBoundingSphere(),
        o = (i.center.clone().add(scene.position),
        engine.getEngine().getAspectRatio(ratio)),
        r = Math.max(1, 1 / o) * i.radius,
        s = r / Math.sin(ratio.fov / 2);
        return s
    }, //调整摄像头至最佳角度
        camera.prototype.computeCameraStateLooking = function(scene, camera, viewport) {
        viewport = viewport || new BABYLON.Viewport(0, 0, 1, 1);
        var i = scene.getScene();
        camera = camera || i.activeCamera;
        var o = scene.getBoundingSphere(), r = new BABYLON.Vector3(0, .3, 1.2);
        scene.structure && "undefined" != typeof scene.structure.preferredYAngle && (r.x = Math.sin(scene.structure.preferredYAngle),
        r.z = Math.cos(scene.structure.preferredYAngle)), r.normalize();
        var s = o.center.clone(), a = scene.getWorldMatrix().clone();
        s.x += a.m[12], s.y += a.m[13], s.z += a.m[14], a.m[12] = a.m[13] = a.m[14] = 0;
        var l = BABYLON.Vector3.TransformCoordinates(r, a);
        l.y < 0 && (l.y = 0, l.normalize());
        var h = l.toSpherical(), c = i.getEngine().getAspectRatio(camera), u = 1 / viewport.height * o.radius, p = 1 / viewport.width / c * o.radius, d = Math.max(p, u) / Math.sin(camera.fov / 2), m = new BABYLON.Vector3(0, 1, 0), g = BABYLON.Vector3.Cross(m, r);
        (null == g || g.lengthSquared() < 1e-5) && (r = new BABYLON.Vector3(0, 1, .001),
        g = BABYLON.Vector3.Cross(m, r)),
        g.normalize(), BABYLON.Vector3.CrossToRef(g, r, m);
        var f = BABYLON.Matrix.FromArray([g.x, g.y, g.z, 0, m.x, m.y, m.z, 0, r.x, r.y, r.z, 0, 0, 0, 0, 1]);
        f.invert(), f = f.multiply(a), u = d * Math.sin(camera.fov / 2), p = u * c;
        var y = new BABYLON.Vector3(p * viewport.x, 0, 0), _ = new BABYLON.Vector3(0, u * viewport.y, 0);
        return BABYLON.Vector3.TransformCoordinatesToRef(y, f, y),
            BABYLON.Vector3.TransformCoordinatesToRef(_, f, _),
            s.addInPlace(y), s.addInPlace(_),
        {target: s,alpha: h.alpha,beta: h.beta,radius: d}
    };
    var change = function(anim, target) {
        this.animations = anim, this.target = target, this.target._animationCancelor && this.target._animationCancelor.cancel(), this.target._animationCancelor = this
    };
    change.prototype.cancel = function() {
        this.target._animationCancelor == this && (this.target.getScene().stopAnimation(this.target), this._onAnimationEnd())
    }, change.prototype._onAnimationEnd = function() {
        if (this.target._animationCancelor == this && (this.target._animationCancelor = null, this._moreCleanUp && this._moreCleanUp(), this._callBack && this._callBack(), this.animations)) {
            for (var t = this.animations.length; t--; )
                for (var e = this.target.animations.length; e--; )
                    this.animations[t] == this.target.animations[e] && this.target.animations.splice(e, 1);
            this.animations = null
        }
    };
    var compute = function(px, py, pz, x, y, z) {
        z = z || {x: null,y: null};
        var s = 1 - px;
        return z.x = 3 * px * s * s * py + 3 * px * px * s * x + px * px * px, z.y = 3 * px * s * s * pz + 3 * px * px * s * y + px * px * px, z
    }, x = function(py, pz, x, y, z) {
        for (var s, a = 0, l = 1, h = {x: null,y: null}; l - a > .001; )
            compute(s = (a + l) / 2, pz, x, y, z, h).x > py ? l = s : a = s;
        return (a + l) / 2
    }, y = function(px, pz, x, y, z) {
        return compute(x(px, pz, x, y, z), pz, x, y, z).y
    }, z = {linear: function(t) {
        return t
    },ease: function(t) {
        return y(t, .5, 0, .5, 1)
    },easeOut: function(t) {
        return y(t, .64, .47, .34, 1)
    }};
    return camera.prototype.computeAnimation = function(camera, engine, model, status) {
        status = status || {};
        var r = Math.max(.01, status.duration || 0),
            s = status.callback, l = ("undefined" == typeof status.cleanAfterAnimation ? !0 : status.cleanAfterAnimation, status.name || "animation"),
            h = status.isACamera, c = "function" == typeof status.smooth ? status.smooth : z[status.smooth || "linear"], u = [];
        for (var p in engine) {
            for (var d, m, g = new BABYLON.Animation(l + "_" + p, p, 60, engine[p] instanceof BABYLON.Vector3 ? BABYLON.Animation.ANIMATIONTYPE_VECTOR3 : BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT), f = [], y = (c == z.linear ? 2 : Math.max(2, r / 40)) >> 0, _ = y; _--; ) {
                d = _ / (y - 1);
                var v = 0 === d ? 0 : 1 === d ? 1 : c(d);
                switch (g.dataType) {
                    case BABYLON.Animation.ANIMATIONTYPE_VECTOR3:
                        m = g.vector3InterpolateFunction(engine[p], model[p], v);
                        break;
                    case BABYLON.Animation.ANIMATIONTYPE_FLOAT:
                        m = g.floatInterpolateFunction(engine[p], model[p], v)
                }
                f.unshift({frame: 100 * d,value: m})
            }
            g.setKeys(f), u.push(g)
        }
        if (.1 > r)
            return new change(u, camera);
        camera.animations = camera.animations.concat(u);
        var b = new change(u, camera);
        b._callBack = s;
        var w = 100 / 60 / (r / 1e3);
        if (camera.getScene().beginAnimation(camera, 0, 100, !1, w, b._onAnimationEnd.bind(b)), h) {
            var x = function() {
                ujs.notify("hcs.engine3D.camera.move")
            }, scene = camera.getScene();
            scene.registerBeforeRender(x), b._moreCleanUp = function() {
                scene.unregisterBeforeRender(x), x = null
            }
        }
        return b
    }, camera
}();