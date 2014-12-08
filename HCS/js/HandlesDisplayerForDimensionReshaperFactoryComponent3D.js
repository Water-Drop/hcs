var HandlesDisplayerForDimensionReshaperFactoryComponent3D = function() {
    var t = function(t) {
        BaseComponent3D.call(this, t, "HandlesDisplayerForDimensionReshaperFactoryComponent3D")
    };
    t.prototype = new BaseComponent3D, t.prototype.create = function(t, n) {
        var i = new e;
        return i.initialize(t, n), i
    };
    var e = function() {};
    return e.prototype.initialize = function(t, e) {
        this.scene = e, this.camera = t, this.dimensionConfigurator = wanaplan.getComponentByName("DimensionReshaperComponent3D"), this._spriteManager = new BABYLON.SpriteManager("handleMgr", wnp.Assets.toolbarTextures.arrowTexture, 6, 128, this.scene), this._sprite = {}, this._animated = {}, this._availableHandles = {}, this.initBindForThisInstance()
    }, e.prototype.initBindForThisInstance = function() {
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
    }, e.prototype.start = function(t) {
        this.stop(), this.object = t, this._computeAvailableHandles(t), document.addEventListener("wnp.engine3D.camera.move", this.myBind.onCameraMove), document.addEventListener("wnp.engine3D.drag-start", this.myBind.onMouseDown), this.myBind.onCameraMove()
    }, e.prototype.stop = function() {
        document.removeEventListener("wnp.engine3D.camera.move", this.myBind.onCameraMove), document.removeEventListener("wnp.engine3D.drag-start", this.myBind.onMouseDown), this.dispose()
    }, e.prototype.startAnimeHandle = function(t) {
        var e = 2 * Math.abs(t.y) + 4 * Math.abs(t.z) + (t.x + t.z + t.y < 0 ? 0 : 1);
        if (!this._animated[e]) {
            var n = this.scene;
            n.beginAnimation(this._getHandle(e), 0, 100, !0, 3), this._animated[e] = !0
        }
    }, e.prototype.stopAnimeHandle = function(t) {
        if (t) {
            var e;
            if (e = "string" == typeof t ? t : 2 * Math.abs(t.y) + 4 * Math.abs(t.z) + (t.x + t.z + t.y < 0 ? 0 : 1), this._sprite[e] && this._animated[e]) {
                var n = this.scene;
                n.stopAnimation(this._sprite[e]), this._animated[e] = !1, this._sprite[e].animations && this._sprite[e].animations.length && this._sprite[e].position.copyFrom(this._sprite[e].animations[0]._keys[0].value)
            }
        } else
            for (var i in this._sprite)
                this.stopAnimeHandle(i + "")
    }, e.prototype.placeHandleOnObject = function(t, e, n) {
        var i = this.dimensionConfigurator.computeDimension(t, e || new BABYLON.Vector3(0, 0, 0), n || 0);
        return this.placeHandles(i.newPosition, i.newDimension, i.rotationMatrix)
    }, e.prototype.placeHandles = function(t, e, n) {
        var i = this.camera,
            o = new BABYLON.Vector3,
            r = new BABYLON.Vector3,
            s = new BABYLON.Vector3,
            a = i.getViewMatrix().clone();
        a.m[12] = a.m[13] = a.m[14] = 0;
        for (var l = i.position.subtract(i.target).normalize(), h = 15, c = 0; 6 > c; c++)
            if (2 != c && this._availableHandles[c]) {
                var u = [0, 0, 0];
                if (u[c >> 1] = c % 2 ? 1 : -1, BABYLON.Vector3.FromArrayToRef(u, 0, o), BABYLON.Vector3.TransformCoordinatesToRef(o, n, s), Math.abs(BABYLON.Vector3.Dot(s, l)) < .6) {
                    r.x = o.x * (.5 * e.x + h), r.y = o.y * (.5 * e.y + h), r.z = o.z * (.5 * e.z + h), BABYLON.Vector3.TransformCoordinatesToRef(r, n, r), r.addInPlace(t);
                    var p = this._getHandle(c + "", r, s);
                    p.position.copyFrom(r), BABYLON.Vector3.TransformCoordinatesToRef(s, a, o), p.angle = Math.atan2(o.y, o.x)
                } else
                    this._disposeHandle(c + "")
            }
    }, e.prototype.dispose = function() {
        this._disposeHandle()
    }, e.prototype._disposeHandle = function(t) {
        if ("undefined" != typeof t)
            this._sprite[t] && (this.stopAnimeHandle(t), this._sprite[t].dispose(), this._sprite[t] = null);
        else
            for (var e in this._sprite)
                this._disposeHandle(e)
    }, e.prototype._getHandle = function(t, e, n) {
        if (this._sprite[t])
            return this._sprite[t];
        this.scene;
        if (this._sprite[t] = new BABYLON.Sprite("handle_" + t, this._spriteManager), this._sprite[t].size = 20, e && n) {
            var i = new BABYLON.Animation("jump_handle_animation", "position", 60, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE),
                o = e.clone(),
                r = n.scale(10);
            r.addInPlace(o), i.setKeys([{
                frame: 0,
                value: o
            }, {
                frame: 50,
                value: r
            }, {
                frame: 100,
                value: o
            }]), this._sprite[t].animations = this._sprite[t].animations || [], this._sprite[t].animations.push(i)
        }
        return this._sprite[t]
    }, e.prototype._computeAvailableHandles = function(t) {
        this._availableHandles = {};
        for (var e = new BABYLON.Vector3, n = 0; 6 > n; n++)
            if (2 != n) {
                var i = [0, 0, 0];
                i[n >> 1] = n % 2 ? 1 : -1, BABYLON.Vector3.FromArrayToRef(i, 0, e), this._availableHandles[n] = !!this.dimensionConfigurator._getPropertyName(t, e)
            }
    }, e.prototype.handlers = {
        onCameraMove: function() {
            var t = this.object;
            this.placeHandleOnObject(t)
        },
        onMouseDown: function(t) {
            var e = [];
            for (var n in this._sprite || {})
                this._sprite[n] && e.push(this._sprite[n]._colliderMesh);
            var i = wanaplan.engine3D,
                o = i.scene.createPickingRay(t.mstate.pos.x, t.mstate.pos.y),
                r = o.intersectMeshes(e, !0, !0);
            if (r && r.pickedMesh) {
                var n = parseInt(r.pickedMesh.name.match(/[0-9]*$/)[0]),
                    s = [0, 0, 0];
                s[n >> 1] = n % 2 ? 1 : -1, this.dimensionConfigurator.askStartResize(this.object, BABYLON.Vector3.FromArray(s), r.pickedMesh.position.clone(), this)
            }
        }
    }, t
}();