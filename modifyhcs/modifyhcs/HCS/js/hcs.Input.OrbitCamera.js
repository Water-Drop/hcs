/*
 * Author：虞思源
 * 
 * 上帝视角，camera初始时在中心点正上方，
 * 获取pointmanager和keyboardmanager中的事件，调整视角。
 * 调用时attach control，切换视角时dettach
 */
var hcs = window.hcs || {};
hcs.Input = hcs.Input || {},
	hcs.Input.OrbitCamera = function () {
    var orbitCamera = (BABYLON.Tools.GetPointerPrefix(), function (camera, alpha, beta, radius, target, camera) {
        BABYLON.Camera.call(this, camera, BABYLON.Vector3.Zero(), camera), 
		this.alpha = alpha,
		this.beta = beta, 
		this.radius = radius, 
		this.target = target, 
		this.enabled = !0, 
		this.cameraTranslationenabled = !0, 
		this._keys = [], 
		this.keysUp = [38], 
		this.keysDown = [40], 
		this.keysLeft = [37], 
		this.keysRight = [39], 
		this._viewMatrix = new BABYLON.Matrix, 
		orbitCamera.prototype._initCache.call(this), 
		this.getViewMatrix()
    });
    orbitCamera.prototype = Object.create(BABYLON.Camera.prototype);
    var camera = BABYLON.Camera;
    orbitCamera.prototype.inertialAlphaOffset = 0,
	orbitCamera.prototype.inertialBetaOffset = 0, 
	orbitCamera.prototype.inertialRadiusOffset = 0, 
	orbitCamera.prototype.lowerAlphaLimit = null, 
	orbitCamera.prototype.upperAlphaLimit = null, 
	orbitCamera.prototype.lowerBetaLimit = null, 
	orbitCamera.prototype.upperBetaLimit = null, 
	orbitCamera.prototype.lowerRadiusLimit = 40, 
	orbitCamera.prototype.upperRadiusLimit = 6e3, 
	orbitCamera.prototype.radiusSpeedFactor = .2, 
	orbitCamera.prototype.moveSpeedFactor = .5, 
	orbitCamera.prototype.angularSensibility = 1e3;
    var alpha = function (orbitCamera) {
        return orbitCamera.offsetX ? orbitCamera.offsetX : orbitCamera.layerX ? orbitCamera.layerX : orbitCamera.clientX
    }, beta = function (orbitCamera) {
        return orbitCamera.offsetY ? orbitCamera.offsetY : orbitCamera.layerY ? orbitCamera.layerY : orbitCamera.clientY
    };
    return orbitCamera.prototype._getTargetPosition = function () {
        return this.target.position || this.target
    }, orbitCamera.prototype._initCache = function () {
        camera.prototype._initCache.call(this), 
		this._cache.target = new BABYLON.Vector3(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), 
		this._cache.alpha = void 0, 
		this._cache.beta = void 0, 
		this._cache.radius = void 0
    }, orbitCamera.prototype._updateCache = function (orbitCamera) {
        orbitCamera || camera.prototype._updateCache.call(this), 
		this._cache.target.copyFrom(this._getTargetPosition()),
		this._cache.alpha = this.alpha, 
		this._cache.beta = this.beta,
		this._cache.radius = this.radius
    }, orbitCamera.prototype._isSynchronizedViewMatrix = function () {
        return camera.prototype._isSynchronizedViewMatrix.call(this) ? 
		this._cache.target.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && 
		this._cache.beta === this.beta && this._cache.radius === this.radius : !1
    }, orbitCamera.prototype.attachControl = function (orbitCamera, camera, alpha) {
        1 === hcsdesign.engine3D.pointerManager.mode ? this.attachControlForMobile(orbitCamera, camera, alpha) : 
		this.attachControlForDesktop(orbitCamera, camera, alpha)
    }, orbitCamera.prototype.attachControlForMobile = function (orbitCamera) {
        var camera, alpha = this._scene.getEngine(), 
		beta = .005, radius = !0, target = [{ x: 0, y: 0 }, { x: 0, y: 0}], 
		camera = 0, a = 0, l = this;
        this.angularSensibility = 1, 
		this._attachedCanvas = orbitCamera,
		window.ejecta && (this._attachedCanvas = document), d
		ocument.addEventListener("hcs.engine3d.dragcontrols.start", function () {
            radius = !1
        }, !1), 
		document.addEventListener("hcs.engine3d.dragcontrols.end", function () {
            radius = !0
        }, !1);
        var h = function (orbitCamera) {
            target[0].x = orbitCamera.touches[0].clientX || 
			orbitCamera.touches[0].pageX, target[0].y = orbitCamera.touches[0].clientY ||
			orbitCamera.touches[0].pageY, 2 === orbitCamera.touches.length && (target[1].x = orbitCamera.touches[1].clientX || 
			orbitCamera.touches[1].pageX, target[1].y = orbitCamera.touches[1].clientY || orbitCamera.touches[1].pageY)
        }, c = function (orbitCamera, camera) {
            var alpha = orbitCamera.x - camera.x, beta = orbitCamera.y - camera.y;
            return Math.sqrt(alpha * alpha + beta * beta)
        }, u = function (orbitCamera) {
            radius && (orbitCamera.preventDefault(), h(orbitCamera), alpha.isPointerLock = !0, orbitCamera.touches.length 
			&& (camera = { x: orbitCamera.touches[0].clientX * beta, y: orbitCamera.touches[0].clientY * beta }))
        }, p = function (orbitCamera) {
            if (radius && (orbitCamera.preventDefault(), h(orbitCamera), orbitCamera.touches.length)) {
                if (!camera)
                    return;
                var alpha = orbitCamera.touches[0].clientX * beta, u = orbitCamera.touches[0].clientY * beta, p = alpha - camera.x, 
				d = u - camera.y;
                if (orbitCamera.touches.length > 2) {
                    var m = hcsdesign.engine3D.projectMouseOnGround(0 | +(camera.x / beta), 0 | +(camera.y / beta)),
					g = hcsdesign.engine3D.projectMouseOnGround(0 | +(alpha / beta), 0 | +(u / beta));
                    null !== m && null !== g && (g.subtractInPlace(m), l._getTargetPosition().addInPlace(g.scaleInPlace(-1)),
					l._getTargetPosition().x = ujs.Math.clamp(l._getTargetPosition().x, hcsdesign.configuration.boundingSize.min.x, 
					hcsdesign.configuration.boundingSize.max.x), l._getTargetPosition().z = ujs.Math.clamp(l._getTargetPosition().z,
					hcsdesign.configuration.boundingSize.min.z, hcsdesign.configuration.boundingSize.max.z))
                } else if (2 == orbitCamera.touches.length) {
                    a = camera, camera = c(target[0], target[1]);
                    var f = +(camera - a) > 0 ? 2.5 : -2.5;
                    f *= hcsdesign.loopTimer.getDeltaTime(), l.inertialRadiusOffset += f
                } else
                    l.inertialAlphaOffset -= p / l.angularSensibility, l.inertialBetaOffset -= d / l.angularSensibility;
                camera = { x: alpha, y: u }
            }
        }, d = function (orbitCamera) {
            radius && (orbitCamera.preventDefault(), alpha.isPointerLock = !1, camera = null)
        };
        this._attachedCanvas.addEventListener("touchstart", u, !1), this._attachedCanvas.addEventListener("touchmove", p, !1), 
		this._attachedCanvas.addEventListener("touchend", d, !1), this._attachedCanvas.addEventListener("touchcancel", d, !1)
    }, orbitCamera.prototype.attachControlForDesktop = function (orbitCamera, camera) {
        var radius, target, camera = this, a = !1;
        if (!this._attachedCanvas) {
            this._attachedCanvas = orbitCamera;
            var l = this._scene.getEngine();
            void 0 === this._onPointerDown && (this._onPointerDown = function (orbitCamera) {
                return camera.enabled ? void (target || (target = orbitCamera.pointerId, radius = { x: alpha(orbitCamera),
				y: beta(orbitCamera) }, camera || orbitCamera.preventDefault())) : void (radius = null)
            }, this._onPointerUp = function (orbitCamera) {
                radius = null, target = null, camera || orbitCamera.preventDefault()
            }, this._onPointerMove = function (orbitCamera) {
                if (radius && !a && target === orbitCamera.pointerId) {
                    var l = alpha(orbitCamera) - radius.x, h = beta(orbitCamera) - radius.y;
                    if (camera.enabled) {
                        var c = orbitCamera.button;
                        if (!orbitCamera.button && orbitCamera.buttons ? (c = orbitCamera.buttons, c = 1 === orbitCamera.buttons ? 0 : c) : 
						-1 === c && (c = 1 === orbitCamera.buttons ? 0 : orbitCamera.buttons), 0 === c)
                            camera.inertialAlphaOffset -= l / camera.angularSensibility, 
							camera.inertialBetaOffset -= h / camera.angularSensibility;
                        else if (2 === c) {
                            if (!camera.cameraTranslationenabled)
                                return;
                            var u = hcsdesign.engine3D.projectMouseOnGround(radius.x, radius.y),
							p = hcsdesign.engine3D.projectMouseOnGround(alpha(orbitCamera), beta(orbitCamera));
                            if (null !== u && null !== p) {
                                p.subtractInPlace(u);
                                var d = p.length();
                                d > 125 && p.scaleInPlace(125 / d),
								camera._getTargetPosition().addInPlace(p.scaleInPlace(-1)), 
								camera._getTargetPosition().x = ujs.Math.clamp(camera._getTargetPosition().x,
								hcsdesign.configuration.boundingSize.min.x, hcsdesign.configuration.boundingSize.max.x), 
								camera._getTargetPosition().z = ujs.Math.clamp(camera._getTargetPosition().z,
								hcsdesign.configuration.boundingSize.min.z, hcsdesign.configuration.boundingSize.max.z)
                            }
                        }
                        ujs.notify("hcs.engine3D.camera.move"), 
						radius = { x: alpha(orbitCamera), y: beta(orbitCamera) }, camera || orbitCamera.preventDefault()
                    }
                }
            }, this._onMouseMove = function (orbitCamera) {
                if (camera.enabled && l.isPointerLock) {
                    var alpha = orbitCamera.movementX || orbitCamera.mozMovementX || 
					orbitCamera.webkitMovementX || orbitCamera.msMovementX || 0, 
					beta = orbitCamera.movementY || orbitCamera.mozMovementY || orbitCamera.webkitMovementY ||
					orbitCamera.msMovementY || 0;
                    camera.inertialAlphaOffset -= alpha / camera.angularSensibility, 
					camera.inertialBetaOffset -= beta / camera.angularSensibility, 
					camera || orbitCamera.preventDefault()
                }
            },//鼠标调整视角
			this._wheel = function (orbitCamera) {
                if (camera.enabled) {
                    var alpha = 0;
                    orbitCamera.wheelDelta ? alpha = orbitCamera.wheelDelta / (120 * camera.radiusSpeedFactor) : 
					orbitCamera.detail && (alpha = -orbitCamera.detail / (3 * camera.radiusSpeedFactor)), 
					alpha && (camera.inertialRadiusOffset += alpha), orbitCamera.preventDefault && (camera || orbitCamera.preventDefault())
                }
            }, //滚轴调整视角
			this._onKeyDown = function (orbitCamera) {
                if (camera.enabled && (-1 !== camera.keysUp.indexOf(orbitCamera.keyCode) ||
				-1 !== camera.keysDown.indexOf(orbitCamera.keyCode) || -1 !== camera.keysLeft.indexOf(orbitCamera.keyCode) ||
				-1 !== camera.keysRight.indexOf(orbitCamera.keyCode))) {
                    var alpha = camera._keys.indexOf(orbitCamera.keyCode);
-1 === alpha && camera._keys.push(orbitCamera.keyCode), orbitCamera.preventDefault && (camera || orbitCamera.preventDefault())
                }
            }, this._onKeyUp = function (orbitCamera) {
                if (camera.enabled && (-1 !== camera.keysUp.indexOf(orbitCamera.keyCode) || 
				-1 !== camera.keysDown.indexOf(orbitCamera.keyCode) || -1 !== camera.keysLeft.indexOf(orbitCamera.keyCode) || 
				-1 !== camera.keysRight.indexOf(orbitCamera.keyCode))) {
                    var alpha = camera._keys.indexOf(orbitCamera.keyCode);
                    alpha >= 0 && camera._keys.splice(alpha, 1), orbitCamera.preventDefault && (camera || orbitCamera.preventDefault())
                }
            }, this._onLostFocus = function () {
                camera.enabled && (camera._keys = [], target = null)
            }, this._onGestureStart = function (camera) {
                camera.enabled && void 0 !== window.MSGesture && (camera._MSGestureHandler || 
				(camera._MSGestureHandler = new MSGesture, camera._MSGestureHandler.target = orbitCamera), 
				camera._MSGestureHandler.addPointer(camera.pointerId))
            }, this._onGesture = function (orbitCamera) {
                camera.enabled && (1 !== orbitCamera.scale ? 
				(camera.inertialRadiusOffset += 65 * orbitCamera.scale * (orbitCamera.expansion > 0 ? 1 : -1), a = !0) :
				a = !1, orbitCamera.preventDefault && (camera || (orbitCamera.stopPropagation(), orbitCamera.preventDefault())))
            }, this._reset = function () {
                camera._keys = [], camera.inertialAlphaOffset = 0, camera.inertialBetaOffset = 0, radius = null, target = null
            });
            var h = window.PointerEvent ? "pointer" : "mouse";
            orbitCamera.addEventListener(h + "down", this._onPointerDown, !1), orbitCamera.addEventListener(h + "up", this._onPointerUp, !1), 
			orbitCamera.addEventListener(h + "out", this._onPointerUp, !1), orbitCamera.addEventListener(h + "move", this._onPointerMove, !1), 
			orbitCamera.addEventListener("mousemove", this._onMouseMove, !1), orbitCamera.addEventListener("MSPointerDown", this._onGestureStart, !1), 
			orbitCamera.addEventListener("MSGestureChange", this._onGesture, !1), window.addEventListener("keydown", this._onKeyDown, !1), 
			window.addEventListener("keyup", this._onKeyUp, !1), orbitCamera.addEventListener("mousewheel", this._wheel, !1), 
			window.addEventListener("DOMMouseScroll", this._wheel, !1), window.addEventListener("blur", this._onLostFocus, !1)
        }
    }, orbitCamera.prototype.detachControl = function (orbitCamera) {
        if (this._attachedCanvas == orbitCamera) {
            var camera = window.PointerEvent ? "pointer" : "mouse";
            orbitCamera.removeEventListener(camera + "down", this._onPointerDown, !1),
			orbitCamera.removeEventListener(camera + "up", this._onPointerUp, !1), 
			orbitCamera.removeEventListener(camera + "out", this._onPointerUp, !1),
			orbitCamera.removeEventListener(camera + "move", this._onPointerMove, !1), 
			orbitCamera.removeEventListener("mousemove", this._onMouseMove, !1), 
			orbitCamera.removeEventListener("MSPointerDown", this._onGestureStart, !1), 
			orbitCamera.removeEventListener("MSGestureChange", this._onGesture, !1),
			window.removeEventListener("keydown", this._onKeyDown),
			window.removeEventListener("keyup", this._onKeyUp), 
			orbitCamera.removeEventListener("mousewheel", this._wheel), 
			window.removeEventListener("DOMMouseScroll", this._wheel, !1), 
			window.removeEventListener("blur", this._onLostFocus), 
			this._MSGestureHandler = null, this._attachedCanvas = null, 
			this._reset && this._reset()
        }
    }, orbitCamera.prototype._update = function () {
        for (var orbitCamera = 0; orbitCamera < this._keys.length; orbitCamera++) {
            var camera = this._keys[orbitCamera];
            ujs.notify("hcs.engine3D.camera.move"), -1 !== this.keysLeft.indexOf(camera) ? 
			this.inertialAlphaOffset -= .01 : -1 !== this.keysUp.indexOf(camera) ? this.inertialBetaOffset -= .01 :
			-1 !== this.keysRight.indexOf(camera) ? this.inertialAlphaOffset += .01 : -1 !== this.keysDown.indexOf(camera)
			&& (this.inertialBetaOffset += .01)
        }
        (0 != this.inertialAlphaOffset || 0 != this.inertialBetaOffset || 0 != this.inertialRadiusOffset) && 
		(this.alpha += this.inertialAlphaOffset, this.beta += this.inertialBetaOffset, 
		this.radius -= this.inertialRadiusOffset, this.inertialAlphaOffset *= this.inertia,
		this.inertialBetaOffset *= this.inertia, this.inertialRadiusOffset *= this.inertia, 
		Math.abs(this.inertialAlphaOffset) < BABYLON.Engine.epsilon && (this.inertialAlphaOffset = 0), 
		Math.abs(this.inertialBetaOffset) < BABYLON.Engine.epsilon && (this.inertialBetaOffset = 0), 
		Math.abs(this.inertialRadiusOffset) < BABYLON.Engine.epsilon && (this.inertialRadiusOffset = 0)), 
		this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), 
		this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), 
		this.lowerBetaLimit && this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), 
		this.upperBetaLimit && this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), 
		this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit),
		this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit), 
		this._constraintToUpScene()
    }, orbitCamera.prototype.setPosition = function (orbitCamera) {
        var camera = orbitCamera.subtract(this._getTargetPosition());
        this.radius = camera.length(), this.alpha = Math.atan(camera.z / camera.x), 
		this.beta = Math.acos(camera.y / this.radius)
    }, orbitCamera.prototype._getViewMatrix = function () {
        this.beta > Math.PI && (this.beta = Math.PI), this.beta <= 0 && (this.beta = .01);
        var orbitCamera = Math.cos(this.alpha), camera = Math.sin(this.alpha), alpha = Math.cos(this.beta),
		beta = Math.sin(this.beta), radius = this._getTargetPosition();
        return radius.addToRef(new BABYLON.Vector3(this.radius * orbitCamera * beta,
		this.radius * alpha, this.radius * camera * beta), this.position), 
		BABYLON.Matrix.LookAtLHToRef(this.position, radius, this.upVector, this._viewMatrix), this._viewMatrix
    }, orbitCamera.prototype._constraintToUpScene = function () {
        var orbitCamera = 3, camera = -(this.target.y - orbitCamera) / this.radius;
        if (!(Math.abs(camera) > 1)) {
            var alpha = Math.abs(Math.acos(camera));
            this.beta = BABYLON.Math.NormalizeAngle(this.beta), 
			this.beta = Math.min(this.beta, alpha), 
			this.beta = Math.max(this.beta, -alpha)
        }
    }, orbitCamera
} ();
