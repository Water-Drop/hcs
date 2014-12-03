var wnp = window.wnp || {};
wnp.Input = wnp.Input || {}, wnp.Input.FirstPersonCamera = function () {
    var t = !1, e = function (t, n, i) {
        BABYLON.Camera.call(this, t, n, i), this.cameraDirection = new BABYLON.Vector3(0, 0, 0), this.cameraRotation = new BABYLON.Vector2(0, 0), this.rotation = new BABYLON.Vector3(0, 0, 0), this.ellipsoid = new BABYLON.Vector3(.5, 1, .5), this._keys = [], this.keysUp = [38, 87], this.keysDown = [40, 83], this.keysLeft = [37, 81], this.keysRight = [39, 69], this.keysStrafeLeft = [65], this.keysStrafeRight = [68], GlobalHelper.hasAzertyKeyboard && (this.keysUp[1] = 90, this.keysLeft[1] = 65, this.keysStrafeLeft[0] = 81), this._collider = new BABYLON.Collider, this._needMoveForGravity = !0, this._currentTarget = BABYLON.Vector3.Zero(), this._viewMatrix = BABYLON.Matrix.Zero(), this._camMatrix = BABYLON.Matrix.Zero(), this._cameraTransformMatrix = BABYLON.Matrix.Zero(), this._cameraRotationMatrix = BABYLON.Matrix.Zero(), this._referencePoint = BABYLON.Vector3.Zero(), this._transformedReferencePoint = BABYLON.Vector3.Zero(), this._oldPosition = BABYLON.Vector3.Zero(), this._diffPosition = BABYLON.Vector3.Zero(), this._newPosition = BABYLON.Vector3.Zero(), this._lookAtTemp = BABYLON.Matrix.Zero(), this._tempMatrix = BABYLON.Matrix.Zero(), e.prototype._initCache.call(this)
    };
    e.prototype = Object.create(BABYLON.Camera.prototype);
    var n = BABYLON.Camera;
    return e.prototype.speed = 2, e.prototype.checkCollisions = !1, e.prototype.applyGravity = !1, e.prototype.noRotationConstraint = !1, e.prototype.angularSensibility = 2e3, e.prototype.lockedTarget = null, e.prototype.onCollide = null, e.prototype._getLockedTargetPosition = function () {
        return this.lockedTarget ? this.lockedTarget.position || this.lockedTarget : null
    }, e.prototype._onMessageBoxOpened = function () {
        t = !0
    }, e.prototype._onMessageBoxClosed = function () {
        t = !1
    }, e.prototype._initCache = function () {
        n.prototype._initCache.call(this), this._cache.lockedTarget = new BABYLON.Vector3(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new BABYLON.Vector3(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
    }, e.prototype._updateCache = function (t) {
        t || n.prototype._updateCache.call(this);
        var e = this._getLockedTargetPosition();
        e ? this._cache.lockedTarget ? this._cache.lockedTarget.copyFrom(e) : this._cache.lockedTarget = e.clone() : this._cache.lockedTarget = null, this._cache.rotation.copyFrom(this.rotation)
    }, e.prototype._isSynchronizedViewMatrix = function () {
        if (!BABYLON.Camera.prototype._isSynchronizedViewMatrix.call(this))
            return !1;
        var t = this._getLockedTargetPosition();
        return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(t) : !t) && this._cache.rotation.equals(this.rotation)
    }, e.prototype._computeLocalCameraSpeed = function () {
        return this.speed * (BABYLON.Tools.GetDeltaTime() / (10 * BABYLON.Tools.GetFps()))
    }, e.prototype.setTarget = function (t) {
        this.upVector.normalize(), BABYLON.Matrix.LookAtLHToRef(this.position, t, this.upVector, this._camMatrix), this._camMatrix.invert(), this.rotation.x = Math.atan(this._camMatrix.m[6] / this._camMatrix.m[10]);
        var e = t.subtract(this.position);
        this.rotation.y = e.x >= 0 ? -Math.atan(e.z / e.x) + Math.PI / 2 : -Math.atan(e.z / e.x) - Math.PI / 2, this.rotation.z = -Math.acos(BABYLON.Vector3.Dot(new BABYLON.Vector3(0, 1, 0), this.upVector)), isNaN(this.rotation.x) && (this.rotation.x = 0), isNaN(this.rotation.y) && (this.rotation.y = 0), isNaN(this.rotation.z) && (this.rotation.z = 0)
    }, e.prototype.lockUnrelatedActions = function () {
        var t = wanaplan.getComponentByName("EditionComponent3D");
        return t && (ujs.notify("wnp.request.configurator.cancel"), t.lock(this, 14), t.deselectObject()), !0
    }, e.prototype.unlockUnrelatedActions = function () {
        var t = wanaplan.getComponentByName("EditionComponent3D");
        return t && t.unlock(this, 14), !0
    }, e.prototype.attachControl = function (e, n) {
        var i, o = this, r = this._scene.getEngine();
        if (!this._attachedCanvas) {
            document.addEventListener("wnp.ui.messagebox.opened", this._onMessageBoxOpened, !1), document.addEventListener("wnp.ui.messagebox.closed", this._onMessageBoxClosed, !1), this.lockUnrelatedActions(), this._attachedCanvas = e, void 0 === this._onMouseDown && (this.onMouseDown = function (t) {
                i = t.touches && 1 == t.touches.length ? { x: t.touches[0].pageX, y: t.touches[0].pageY} : { x: t.clientX, y: t.clientY }, n || t.preventDefault()
            }, this.onMouseUp = function (t) {
                i = null, n || t.preventDefault()
            }, this.onMouseOut = function (t) {
                i = null, o._keys = [], n || t.preventDefault()
            }, this.onMouseMove = function (t) {
                if (i || r.isPointerLock) {
                    var e, s;
                    t.touches && 1 == t.touches.length ? (e = t.touches[0].pageX - i.x, s = t.touches[0].pageY - i.y, i = { x: t.touches[0].pageX, y: t.touches[0].pageY }) : r.isPointerLock ? (e = t.movementX || t.mozMovementX || t.webkitMovementX || t.msMovementX || 0, s = t.movementY || t.mozMovementY || t.webkitMovementY || t.msMovementY || 0) : (e = t.clientX - i.x, s = t.clientY - i.y, i = { x: t.clientX, y: t.clientY }), t.touches || (e *= -1, s *= -1), o.rotation.y -= e / o.angularSensibility, o.rotation.x - s / o.angularSensibility < Math.PI / 2 && o.rotation.x - s / o.angularSensibility > -Math.PI / 2 && (o.rotation.x -= s / o.angularSensibility), n || t.preventDefault()
                }
            }, this.onWheel = function (t) {
                var e = 0;
                t.wheelDelta ? e = t.wheelDelta / (120 * o.radiusSpeedFactor) : t.detail && (e = -t.detail / (3 * o.radiusSpeedFactor)), o.height + e < o.heightMax && o.height + e > o.heightMin && (o.height += e, o.position.y = o.height), t.preventDefault && (n || t.preventDefault())
            }, this.onKeyDown = function (e) {
                if (!t && (-1 !== o.keysUp.indexOf(e.keyCode) || -1 !== o.keysDown.indexOf(e.keyCode) || -1 !== o.keysLeft.indexOf(e.keyCode) || -1 !== o.keysRight.indexOf(e.keyCode) || -1 !== o.keysStrafeLeft.indexOf(e.keyCode) || -1 !== o.keysStrafeRight.indexOf(e.keyCode))) {
                    var i = o._keys.indexOf(e.keyCode);
-1 === i && o._keys.push(e.keyCode), n || e.preventDefault()
                }
            }, this.onKeyUp = function (e) {
                if (!t && (-1 !== o.keysUp.indexOf(e.keyCode) || -1 !== o.keysDown.indexOf(e.keyCode) || -1 !== o.keysLeft.indexOf(e.keyCode) || -1 !== o.keysRight.indexOf(e.keyCode) || -1 !== o.keysStrafeLeft.indexOf(e.keyCode) || -1 !== o.keysStrafeRight.indexOf(e.keyCode))) {
                    var i = o._keys.indexOf(e.keyCode);
                    i >= 0 && o._keys.splice(i, 1), n || e.preventDefault()
                }
            }, this.onLostFocus = function () {
                o._keys = []
            }, this.reset = function () {
                o._keys = [], i = null, o.cameraDirection = new BABYLON.Vector3(0, 0, 0), o.cameraRotation = new BABYLON.Vector2(0, 0)
            });
            var s = window.PointerEvent ? "pointer" : "mouse";
            e.addEventListener(s + "down", this.onMouseDown, !1), e.addEventListener(s + "up", this.onMouseUp, !1), e.addEventListener(s + "out", this.onMouseOut, !1), e.addEventListener(s + "move", this.onMouseMove, !1), e.addEventListener("mousewheel", this.onWheel, !1), window.addEventListener("keydown", this.onKeyDown, !1), window.addEventListener("keyup", this.onKeyUp, !1), window.addEventListener("blur", this.onLostFocus, !1), document.addEventListener("touchend", this.onMouseUp, !1), document.addEventListener("touchcancel", this.onMouseUp, !1), document.addEventListener("touchmove", this.onMouseMove, !1), document.addEventListener("touchstart", this.onMouseDown, !1)
        }
    }, e.prototype.detachControl = function (t) {
        if (this._attachedCanvas == t) {
            this.unlockUnrelatedActions();
            var e = window.PointerEvent ? "pointer" : "mouse";
            t.removeEventListener(e + "down", this.onMouseDown), t.removeEventListener(e + "up", this.onMouseUp), t.removeEventListener(e + "out", this.onMouseOut), t.removeEventListener(e + "move", this.onMouseMove), t.removeEventListener("mousewheel", this.onWheel), window.removeEventListener("keydown", this.onKeyDown), window.removeEventListener("keyup", this.onKeyUp), window.removeEventListener("blur", this.onLostFocus), document.removeEventListener("touchend", this.onMouseUp), document.removeEventListener("touchcancel", this.onMouseUp), document.removeEventListener("touchmove", this.onMouseMove), document.removeEventListener("touchstart", this.onMouseDown), document.removeEventListener("wnp.ui.messagebox.opened", this._onMessageBoxOpened), document.removeEventListener("wnp.ui.messagebox.closed", this._onMessageBoxClosed), this._attachedCanvas = null, this._reset && this._reset()
        }
    }, e.prototype._collideWithWorld = function (t) {
        this.position.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._collider.radius = this.ellipsoid, this._scene._getNewPosition(this._oldPosition, t, this._collider, 3, this._newPosition), this._newPosition.subtractToRef(this._oldPosition, this._diffPosition), this._diffPosition.length() > BABYLON.Engine.collisionsEpsilon && (this.position.addInPlace(this._diffPosition), this.onCollide && this.onCollide(this._collider.collidedMesh))
    }, e.prototype._checkInputs = function () {
        this._localDirection || (this._localDirection = BABYLON.Vector3.Zero(), this._transformedDirection = BABYLON.Vector3.Zero()), this._localRotation || (this._localRotation = BABYLON.Vector3.Zero(), this._transformedRotation = BABYLON.Vector3.Zero());
        for (var t = 0; t < this._keys.length; t++) {
            var e = this._keys[t], n = this._computeLocalCameraSpeed(), i = BABYLON.Tools.GetFps() / 60;
-1 !== this.keysLeft.indexOf(e) ? this._localRotation.copyFromFloats(0, -n / 3 * i, 0) : -1 !== this.keysUp.indexOf(e) ? this._localDirection.copyFromFloats(0, 0, 100 * n * i) : -1 !== this.keysRight.indexOf(e) ? this._localRotation.copyFromFloats(0, n / 3 * i, 0) : -1 !== this.keysDown.indexOf(e) ? this._localDirection.copyFromFloats(0, 0, 100 * -n * i) : -1 !== this.keysStrafeLeft.indexOf(e) ? this._localDirection.copyFromFloats(100 * -n * i, 0, 0) : -1 !== this.keysStrafeRight.indexOf(e) && this._localDirection.copyFromFloats(100 * n * i, 0, 0), this.getViewMatrix().invertToRef(this._cameraTransformMatrix), -1 !== this.keysUp.indexOf(e) || -1 !== this.keysDown.indexOf(e) || -1 !== this.keysStrafeLeft.indexOf(e) || -1 !== this.keysStrafeRight.indexOf(e) ? (BABYLON.Vector3.TransformNormalToRef(this._localDirection, this._cameraTransformMatrix, this._transformedDirection), this.position.addInPlace(this._transformedDirection)) : (BABYLON.Vector3.TransformNormalToRef(this._localRotation, this._cameraTransformMatrix, this._transformedRotation), this.rotation.y += this._transformedRotation.y), this.position.y = this.height
        }
    }, e.prototype.moveLocal = function (t) {
        BABYLON.Vector3.TransformNormalToRef(t, this._cameraTransformMatrix, this._transformedDirection), this.position.addInPlace(this._transformedDirection)
    }, e.prototype.rotateLocal = function (t) {
        this._transformedRotation = BABYLON.Vector3.Zero(), BABYLON.Vector3.TransformNormalToRef(t, this._cameraTransformMatrix, this._transformedRotation), this.rotation.x += this._transformedRotation.x, this.rotation.x = ujs.Math.clamp(this.rotation.x, -Math.PI / 2, Math.PI / 2), this.rotation.y += this._transformedRotation.y
    }, e.prototype._update = function () {
        this._checkInputs();
        var t = this._needMoveForGravity || Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0, e = Math.abs(this.cameraRotation.x) > 0 || Math.abs(this.cameraRotation.y) > 0;
        if (t)
            if (this.checkCollisions && this._scene.collisionsEnabled) {
                if (this._collideWithWorld(this.cameraDirection), this.applyGravity) {
                    var n = this.position;
                    this._collideWithWorld(this._scene.gravity), this._needMoveForGravity = 0 != BABYLON.Vector3.DistanceSquared(n, this.position)
                }
            } else
                this.position.addInPlace(this.cameraDirection);
        if (e && (this.rotation.x += this.cameraRotation.x, this.rotation.y += this.cameraRotation.y, !this.noRotationConstraint)) {
            var i = Math.PI / 2 * .95;
            this.rotation.x > i && (this.rotation.x = i), this.rotation.x < -i && (this.rotation.x = -i)
        }
        t && (Math.abs(this.cameraDirection.x) < BABYLON.Engine.epsilon && (this.cameraDirection.x = 0), Math.abs(this.cameraDirection.y) < BABYLON.Engine.epsilon && (this.cameraDirection.y = 0), Math.abs(this.cameraDirection.z) < BABYLON.Engine.epsilon && (this.cameraDirection.z = 0), this.cameraDirection.scaleInPlace(this.inertia)), e && (Math.abs(this.cameraRotation.x) < BABYLON.Engine.epsilon && (this.cameraRotation.x = 0), Math.abs(this.cameraRotation.y) < BABYLON.Engine.epsilon && (this.cameraRotation.y = 0), this.cameraRotation.scaleInPlace(this.inertia))
    }, e.prototype._getViewMatrix = function () {
        return BABYLON.Vector3.FromFloatsToRef(0, 0, 1, this._referencePoint), this.lockedTarget ? this._currentTarget.copyFrom(this._getLockedTargetPosition()) : (0 != this.upVector.x || 1 != this.upVector.y || 0 != this.upVector.z ? (BABYLON.Matrix.LookAtLHToRef(BABYLON.Vector3.Zero(), this._referencePoint, this.upVector, this._lookAtTemp), BABYLON.Matrix.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix), this._lookAtTemp.multiplyToRef(this._cameraRotationMatrix, this._tempMatrix), this._lookAtTemp.invert(), this._tempMatrix.multiplyToRef(this._lookAtTemp, this._cameraRotationMatrix)) : BABYLON.Matrix.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix), BABYLON.Vector3.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget)), BABYLON.Matrix.LookAtLHToRef(this.position, this._currentTarget, this.upVector, this._viewMatrix), this._viewMatrix
    }, e
} ();
