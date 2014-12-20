/*
 * Author：虞思源
 * 
 * 提供第一人称视角。初始时在中心，面对x轴正方向。
 * 第一人称视角时上下左右移动。
 * 创建时attachControl
 * 恢复上帝视角时dettach
 * 
 */
var hcs = window.hcs || {};
hcs.Input = hcs.Input || {}, hcs.Input.FirstPersonCamera = function () {
    var flag = !1, firstPersonCamera = function (px, py, pz) {
        BABYLON.Camera.call(this, px, py, pz),
        this.cameraDirection = new BABYLON.Vector3(0, 0, 0),
        this.cameraRotation = new BABYLON.Vector2(0, 0),
        this.rotation = new BABYLON.Vector3(0, 0, 0),
        this.ellipsoid = new BABYLON.Vector3(.5, 1, .5),
        this._keys = [],
        this.keysUp = [38, 87],
        this.keysDown = [40, 83],
        this.keysLeft = [37, 81],
        this.keysRight = [39, 69],
        this.keysStrafeLeft = [65],
        this.keysStrafeRight = [68],
        GlobalHelper.hasAzertyKeyboard && (this.keysUp[1] = 90, this.keysLeft[1] = 65, this.keysStrafeLeft[0] = 81),
        this._collider = new BABYLON.Collider,
        this._needMoveForGravity = !0,
        this._currentTarget = BABYLON.Vector3.Zero(), this._viewMatrix = BABYLON.Matrix.Zero(),
        this._camMatrix = BABYLON.Matrix.Zero(), this._cameraTransformMatrix = BABYLON.Matrix.Zero(),
        this._cameraRotationMatrix = BABYLON.Matrix.Zero(), this._referencePoint = BABYLON.Vector3.Zero(),
        this._transformedReferencePoint = BABYLON.Vector3.Zero(),
        this._oldPosition = BABYLON.Vector3.Zero(),
        this._diffPosition = BABYLON.Vector3.Zero(),
        this._newPosition = BABYLON.Vector3.Zero(),
        this._lookAtTemp = BABYLON.Matrix.Zero(),
        this._tempMatrix = BABYLON.Matrix.Zero(),
        firstPersonCamera.prototype._initCache.call(this)
    };
    firstPersonCamera.prototype = Object.create(BABYLON.Camera.prototype);
    var n = BABYLON.Camera;
    return firstPersonCamera.prototype.speed = 2, 
	firstPersonCamera.prototype.checkCollisions = !1, 
	firstPersonCamera.prototype.applyGravity = !1, 
	firstPersonCamera.prototype.noRotationConstraint = !1, 
	firstPersonCamera.prototype.angularSensibility = 2e3, 
	firstPersonCamera.prototype.lockedTarget = null, 
	firstPersonCamera.prototype.onCollide = null, 
	firstPersonCamera.prototype._getLockedTargetPosition = function () {
        return this.lockedTarget ? this.lockedTarget.position || this.lockedTarget : null
    }, firstPersonCamera.prototype._onMessageBoxOpened = function () {
        flag = !0
    }, firstPersonCamera.prototype._onMessageBoxClosed = function () {
        flag = !1
    }, firstPersonCamera.prototype._initCache = function () {
        n.prototype._initCache.call(this), 
		this._cache.lockedTarget = new BABYLON.Vector3(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), 
		this._cache.rotation = new BABYLON.Vector3(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
    }, firstPersonCamera.prototype._updateCache = function (cache) {
        cache || n.prototype._updateCache.call(this);
        var position = this._getLockedTargetPosition();
        position ? this._cache.lockedTarget ? this._cache.lockedTarget.copyFrom(position) : 
		this._cache.lockedTarget = position.clone() : this._cache.lockedTarget = null,
		this._cache.rotation.copyFrom(this.rotation)
    }, firstPersonCamera.prototype._isSynchronizedViewMatrix = function () {
        if (!BABYLON.Camera.prototype._isSynchronizedViewMatrix.call(this))
            return !1;
        var event = this._getLockedTargetPosition();
        return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(event) : !event) 
		&& this._cache.rotation.equals(this.rotation)
    }, firstPersonCamera.prototype._computeLocalCameraSpeed = function () {
        return this.speed * (BABYLON.Tools.GetDeltaTime() / (10 * BABYLON.Tools.GetFps()))
    }, firstPersonCamera.prototype.setTarget = function (target) {
        this.upVector.normalize(), 
		BABYLON.Matrix.LookAtLHToRef(this.position, target, this.upVector, this._camMatrix),
		this._camMatrix.invert(), 
		this.rotation.x = Math.atan(this._camMatrix.m[6] / this._camMatrix.m[10]);
        var ptmp = target.subtract(this.position);
        this.rotation.y = ptmp.x >= 0 ? -Math.atan(ptmp.z / ptmp.x) + Math.PI / 2 : -Math.atan(ptmp.z / ptmp.x) - Math.PI / 2,
		this.rotation.z = -Math.acos(BABYLON.Vector3.Dot(new BABYLON.Vector3(0, 1, 0), this.upVector)), isNaN(this.rotation.x) 
		&& (this.rotation.x = 0), isNaN(this.rotation.y) && (this.rotation.y = 0), isNaN(this.rotation.z) && (this.rotation.z = 0)
    }, firstPersonCamera.prototype.lockUnrelatedActions = function () {
        var tmp = hcsdesign.getComponentByName("EditionComponent3D");
        return tmp && (ujs.notify("hcs.request.configurator.cancel"), tmp.lock(this, 14), tmp.deselectObject()), !0
    }, firstPersonCamera.prototype.unlockUnrelatedActions = function () {
        var tmp = hcsdesign.getComponentByName("EditionComponent3D");
        return tmp && tmp.unlock(this, 14), !0
    }, firstPersonCamera.prototype.attachControl = function (control, target) {
        var i, o = this, r = this._scene.getEngine();
        if (!this._attachedCanvas) {
            document.addEventListener("hcs.ui.messagebox.opened", this._onMessageBoxOpened, !1), 
			document.addEventListener("hcs.ui.messagebox.closed", this._onMessageBoxClosed, !1), 
			this.lockUnrelatedActions(), 
			this._attachedCanvas = control, 
			void 0 === this._onMouseDown && (this.onMouseDown = function (event) {
                i = event.touches && 1 == event.touches.length ? 
				{ x: event.touches[0].pageX, y: event.touches[0].pageY} : { x: event.clientX, y: event.clientY }, 
				target || event.preventDefault()
            }, this.onMouseUp = function (event) {
                i = null, target || event.preventDefault()
            }, this.onMouseOut = function (event) {
                i = null, o._keys = [], target || event.preventDefault()
            }, this.onMouseMove = function (event) {
                if (i || r.isPointerLock) {
                    var position, s;
                    event.touches && 1 == event.touches.length ? 
					(position = event.touches[0].pageX - i.x, 
					s = event.touches[0].pageY - i.y,
					i = { x: event.touches[0].pageX, y: event.touches[0].pageY }) : r.isPointerLock ?
					(position = event.movementX || event.mozMovementX || event.webkitMovementX || event.msMovementX || 0, 
					s = event.movementY || event.mozMovementY || event.webkitMovementY || event.msMovementY || 0) : 
					(position = event.clientX - i.x,
					s = event.clientY - i.y, 
					i = { x: event.clientX, y: event.clientY }), 
					event.touches || (position *= -1, s *= -1), 
					o.rotation.y -= position / o.angularSensibility,
					o.rotation.x - s / o.angularSensibility < Math.PI / 2 && o.rotation.x - s / o.angularSensibility > -Math.PI / 2 
					&& (o.rotation.x -= s / o.angularSensibility), target || event.preventDefault()
                }
            }, this.onWheel = function (event) {
                var position = 0;
                event.wheelDelta ? position = event.wheelDelta / (120 * o.radiusSpeedFactor) : 
				event.detail && (position = -event.detail / (3 * o.radiusSpeedFactor)), 
				o.height + position < o.heightMax && o.height + position > o.heightMin && (o.height += position, o.position.y = o.height),
				event.preventDefault && (target || event.preventDefault())
            }, this.onKeyDown = function (position) {
                if (!flag && (-1 !== o.keysUp.indexOf(position.keyCode) || 
				-1 !== o.keysDown.indexOf(position.keyCode) || -1 !== o.keysLeft.indexOf(position.keyCode) ||
				-1 !== o.keysRight.indexOf(position.keyCode) || -1 !== o.keysStrafeLeft.indexOf(position.keyCode) ||
				-1 !== o.keysStrafeRight.indexOf(position.keyCode))) {
                    var i = o._keys.indexOf(position.keyCode);
					-1 === i && o._keys.push(position.keyCode), target || position.preventDefault()
                }
            }, this.onKeyUp = function (position) {
                if (!flag && (-1 !== o.keysUp.indexOf(position.keyCode) || 
				-1 !== o.keysDown.indexOf(position.keyCode) || 
				-1 !== o.keysLeft.indexOf(position.keyCode) || 
				-1 !== o.keysRight.indexOf(position.keyCode) || 
				-1 !== o.keysStrafeLeft.indexOf(position.keyCode) || 
				-1 !== o.keysStrafeRight.indexOf(position.keyCode))) {
                    var i = o._keys.indexOf(position.keyCode);
                    i >= 0 && o._keys.splice(i, 1), target || position.preventDefault()
                }
            }, this.onLostFocus = function () {
                o._keys = []
            }, this.reset = function () {
                o._keys = [], i = null, o.cameraDirection = new BABYLON.Vector3(0, 0, 0), o.cameraRotation = new BABYLON.Vector2(0, 0)
            });
            var s = window.PointerEvent ? "pointer" : "mouse";
            control.addEventListener(s + "down", this.onMouseDown, !1),
			control.addEventListener(s + "up", this.onMouseUp, !1),
			control.addEventListener(s + "out", this.onMouseOut, !1),
			control.addEventListener(s + "move", this.onMouseMove, !1), 
			control.addEventListener("mousewheel", this.onWheel, !1), 
			window.addEventListener("keydown", this.onKeyDown, !1), 
			window.addEventListener("keyup", this.onKeyUp, !1), 
			window.addEventListener("blur", this.onLostFocus, !1), 
			document.addEventListener("touchend", this.onMouseUp, !1), 
			document.addEventListener("touchcancel", this.onMouseUp, !1), 
			document.addEventListener("touchmove", this.onMouseMove, !1), 
			document.addEventListener("touchstart", this.onMouseDown, !1)
        }
    }, firstPersonCamera.prototype.detachControl = function (event) {
        if (this._attachedCanvas == event) {
            this.unlockUnrelatedActions();
            var position = window.PointerEvent ? "pointer" : "mouse";
            event.removeEventListener(position + "down", this.onMouseDown), 
			event.removeEventListener(position + "up", this.onMouseUp),
			event.removeEventListener(position + "out", this.onMouseOut), 
			event.removeEventListener(position + "move", this.onMouseMove),
			event.removeEventListener("mousewheel", this.onWheel), 
			window.removeEventListener("keydown", this.onKeyDown),
			window.removeEventListener("keyup", this.onKeyUp), 
			window.removeEventListener("blur", this.onLostFocus),
			document.removeEventListener("touchend", this.onMouseUp), 
			document.removeEventListener("touchcancel", this.onMouseUp), 
			document.removeEventListener("touchmove", this.onMouseMove),
			document.removeEventListener("touchstart", this.onMouseDown),
			document.removeEventListener("hcs.ui.messagebox.opened", this._onMessageBoxOpened), 
			document.removeEventListener("hcs.ui.messagebox.closed", this._onMessageBoxClosed), 
			this._attachedCanvas = null, 
			this._reset && this._reset()
        }
    }, firstPersonCamera.prototype._collideWithWorld = function (event) {
        this.position.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition),
		this._collider.radius = this.ellipsoid, 
		this._scene._getNewPosition(this._oldPosition, event, this._collider, 3, this._newPosition), 
		this._newPosition.subtractToRef(this._oldPosition, this._diffPosition),
		this._diffPosition.length() > BABYLON.Engine.collisionsEpsilon && (this.position.addInPlace(this._diffPosition), 
		this.onCollide && this.onCollide(this._collider.collidedMesh))
    },//碰撞检测，只有简单的碰撞 
	firstPersonCamera.prototype._checkInputs = function () {
        this._localDirection || (this._localDirection = BABYLON.Vector3.Zero(), 
		this._transformedDirection = BABYLON.Vector3.Zero()), 
		this._localRotation || (this._localRotation = BABYLON.Vector3.Zero(), 
		this._transformedRotation = BABYLON.Vector3.Zero());
        for (var event = 0; event < this._keys.length; event++) {
            var position = this._keys[event], n = this._computeLocalCameraSpeed(), i = BABYLON.Tools.GetFps() / 60;
		-1 !== this.keysLeft.indexOf(position) ? this._localRotation.copyFromFloats(0, -n / 3 * i, 0) : -1 !== this.keysUp.indexOf(position)
		? this._localDirection.copyFromFloats(0, 0, 100 * n * i) : -1 !== this.keysRight.indexOf(position) ? 
		this._localRotation.copyFromFloats(0, n / 3 * i, 0) : -1 !== this.keysDown.indexOf(position) ? 
		this._localDirection.copyFromFloats(0, 0, 100 * -n * i) : -1 !== this.keysStrafeLeft.indexOf(position) ?
		this._localDirection.copyFromFloats(100 * -n * i, 0, 0) : -1 !== this.keysStrafeRight.indexOf(position) 
		&& this._localDirection.copyFromFloats(100 * n * i, 0, 0), this.getViewMatrix().invertToRef(this._cameraTransformMatrix),
		-1 !== this.keysUp.indexOf(position) || -1 !== this.keysDown.indexOf(position) || 
		-1 !== this.keysStrafeLeft.indexOf(position) || -1 !== this.keysStrafeRight.indexOf(position) ? 
		(BABYLON.Vector3.TransformNormalToRef(this._localDirection, this._cameraTransformMatrix, this._transformedDirection), 
		this.position.addInPlace(this._transformedDirection)) : 
		(BABYLON.Vector3.TransformNormalToRef(this._localRotation, this._cameraTransformMatrix, this._transformedRotation), 
		this.rotation.y += this._transformedRotation.y), this.position.y = this.height
        }
    }, firstPersonCamera.prototype.moveLocal = function (event) {
        BABYLON.Vector3.TransformNormalToRef(event, this._cameraTransformMatrix, this._transformedDirection),
		this.position.addInPlace(this._transformedDirection)
    }, firstPersonCamera.prototype.rotateLocal = function (event) {
        this._transformedRotation = BABYLON.Vector3.Zero(),
		BABYLON.Vector3.TransformNormalToRef(event, this._cameraTransformMatrix, this._transformedRotation), 
		this.rotation.x += this._transformedRotation.x, 
		this.rotation.x = ujs.Math.clamp(this.rotation.x, -Math.PI / 2, Math.PI / 2), 
		this.rotation.y += this._transformedRotation.y
    }, firstPersonCamera.prototype._update = function () {
        this._checkInputs();
        var event = this._needMoveForGravity || Math.abs(this.cameraDirection.x) > 0 || 
		Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0, 
		position = Math.abs(this.cameraRotation.x) > 0 || Math.abs(this.cameraRotation.y) > 0;
        if (event)
            if (this.checkCollisions && this._scene.collisionsEnabled) {
                if (this._collideWithWorld(this.cameraDirection), this.applyGravity) {
                    var n = this.position;
                    this._collideWithWorld(this._scene.gravity), 
					this._needMoveForGravity = 0 != BABYLON.Vector3.DistanceSquared(n, this.position)
                }
            } else
                this.position.addInPlace(this.cameraDirection);
        if (position && (this.rotation.x += this.cameraRotation.x, 
		this.rotation.y += this.cameraRotation.y, !this.noRotationConstraint)) {
            var i = Math.PI / 2 * .95;
            this.rotation.x > i && (this.rotation.x = i), this.rotation.x < -i && (this.rotation.x = -i)
        }
        event && (Math.abs(this.cameraDirection.x) < BABYLON.Engine.epsilon && (this.cameraDirection.x = 0), 
		Math.abs(this.cameraDirection.y) < BABYLON.Engine.epsilon && (this.cameraDirection.y = 0), 
		Math.abs(this.cameraDirection.z) < BABYLON.Engine.epsilon && (this.cameraDirection.z = 0),
		this.cameraDirection.scaleInPlace(this.inertia)), position && (Math.abs(this.cameraRotation.x) < BABYLON.Engine.epsilon && 
		(this.cameraRotation.x = 0), Math.abs(this.cameraRotation.y) < BABYLON.Engine.epsilon && (this.cameraRotation.y = 0), 
		this.cameraRotation.scaleInPlace(this.inertia))
    }, firstPersonCamera.prototype._getViewMatrix = function () {
        return BABYLON.Vector3.FromFloatsToRef(0, 0, 1, this._referencePoint),
		this.lockedTarget ? this._currentTarget.copyFrom(this._getLockedTargetPosition()) : 
		(0 != this.upVector.x || 1 != this.upVector.y || 0 != this.upVector.z ? (BABYLON.Matrix.LookAtLHToRef(BABYLON.Vector3.Zero(), 
		this._referencePoint, this.upVector, this._lookAtTemp),
		BABYLON.Matrix.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix), 
		this._lookAtTemp.multiplyToRef(this._cameraRotationMatrix, this._tempMatrix), 
		this._lookAtTemp.invert(),
		this._tempMatrix.multiplyToRef(this._lookAtTemp, this._cameraRotationMatrix)) : 
		BABYLON.Matrix.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, 
		this._cameraRotationMatrix), BABYLON.Vector3.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, 
		this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget)), 
		BABYLON.Matrix.LookAtLHToRef(this.position, this._currentTarget, this.upVector, this._viewMatrix), this._viewMatrix
    }, //获得视野
	firstPersonCamera
} ();
