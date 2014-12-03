var wnp = window.wnp || {};
wnp.Input = wnp.Input || {}, wnp.Input.OrbitCamera = function () {
    var t = (BABYLON.Tools.GetPointerPrefix(), function (e, n, i, o, r, s) {
        BABYLON.Camera.call(this, e, BABYLON.Vector3.Zero(), s), this.alpha = n, this.beta = i, this.radius = o, this.target = r, this.enabled = !0, this.cameraTranslationenabled = !0, this._keys = [], this.keysUp = [38], this.keysDown = [40], this.keysLeft = [37], this.keysRight = [39], this._viewMatrix = new BABYLON.Matrix, t.prototype._initCache.call(this), this.getViewMatrix()
    });
    t.prototype = Object.create(BABYLON.Camera.prototype);
    var e = BABYLON.Camera;
    t.prototype.inertialAlphaOffset = 0, t.prototype.inertialBetaOffset = 0, t.prototype.inertialRadiusOffset = 0, t.prototype.lowerAlphaLimit = null, t.prototype.upperAlphaLimit = null, t.prototype.lowerBetaLimit = null, t.prototype.upperBetaLimit = null, t.prototype.lowerRadiusLimit = 40, t.prototype.upperRadiusLimit = 6e3, t.prototype.radiusSpeedFactor = .2, t.prototype.moveSpeedFactor = .5, t.prototype.angularSensibility = 1e3;
    var n = function (t) {
        return t.offsetX ? t.offsetX : t.layerX ? t.layerX : t.clientX
    }, i = function (t) {
        return t.offsetY ? t.offsetY : t.layerY ? t.layerY : t.clientY
    };
    return t.prototype._getTargetPosition = function () {
        return this.target.position || this.target
    }, t.prototype._initCache = function () {
        e.prototype._initCache.call(this), this._cache.target = new BABYLON.Vector3(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0
    }, t.prototype._updateCache = function (t) {
        t || e.prototype._updateCache.call(this), this._cache.target.copyFrom(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius
    }, t.prototype._isSynchronizedViewMatrix = function () {
        return e.prototype._isSynchronizedViewMatrix.call(this) ? this._cache.target.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius : !1
    }, t.prototype.attachControl = function (t, e, n) {
        1 === wanaplan.engine3D.pointerManager.mode ? this.attachControlForMobile(t, e, n) : this.attachControlForDesktop(t, e, n)
    }, t.prototype.attachControlForMobile = function (t) {
        var e, n = this._scene.getEngine(), i = .005, o = !0, r = [{ x: 0, y: 0 }, { x: 0, y: 0}], s = 0, a = 0, l = this;
        this.angularSensibility = 1, this._attachedCanvas = t, window.ejecta && (this._attachedCanvas = document), document.addEventListener("wnp.engine3d.dragcontrols.start", function () {
            o = !1
        }, !1), document.addEventListener("wnp.engine3d.dragcontrols.end", function () {
            o = !0
        }, !1);
        var h = function (t) {
            r[0].x = t.touches[0].clientX || t.touches[0].pageX, r[0].y = t.touches[0].clientY || t.touches[0].pageY, 2 === t.touches.length && (r[1].x = t.touches[1].clientX || t.touches[1].pageX, r[1].y = t.touches[1].clientY || t.touches[1].pageY)
        }, c = function (t, e) {
            var n = t.x - e.x, i = t.y - e.y;
            return Math.sqrt(n * n + i * i)
        }, u = function (t) {
            o && (t.preventDefault(), h(t), n.isPointerLock = !0, t.touches.length && (e = { x: t.touches[0].clientX * i, y: t.touches[0].clientY * i }))
        }, p = function (t) {
            if (o && (t.preventDefault(), h(t), t.touches.length)) {
                if (!e)
                    return;
                var n = t.touches[0].clientX * i, u = t.touches[0].clientY * i, p = n - e.x, d = u - e.y;
                if (t.touches.length > 2) {
                    var m = wanaplan.engine3D.projectMouseOnGround(0 | +(e.x / i), 0 | +(e.y / i)), g = wanaplan.engine3D.projectMouseOnGround(0 | +(n / i), 0 | +(u / i));
                    null !== m && null !== g && (g.subtractInPlace(m), l._getTargetPosition().addInPlace(g.scaleInPlace(-1)), l._getTargetPosition().x = ujs.Math.clamp(l._getTargetPosition().x, wanaplan.configuration.boundingSize.min.x, wanaplan.configuration.boundingSize.max.x), l._getTargetPosition().z = ujs.Math.clamp(l._getTargetPosition().z, wanaplan.configuration.boundingSize.min.z, wanaplan.configuration.boundingSize.max.z))
                } else if (2 == t.touches.length) {
                    a = s, s = c(r[0], r[1]);
                    var f = +(s - a) > 0 ? 2.5 : -2.5;
                    f *= wanaplan.loopTimer.getDeltaTime(), l.inertialRadiusOffset += f
                } else
                    l.inertialAlphaOffset -= p / l.angularSensibility, l.inertialBetaOffset -= d / l.angularSensibility;
                e = { x: n, y: u }
            }
        }, d = function (t) {
            o && (t.preventDefault(), n.isPointerLock = !1, e = null)
        };
        this._attachedCanvas.addEventListener("touchstart", u, !1), this._attachedCanvas.addEventListener("touchmove", p, !1), this._attachedCanvas.addEventListener("touchend", d, !1), this._attachedCanvas.addEventListener("touchcancel", d, !1)
    }, t.prototype.attachControlForDesktop = function (t, e) {
        var o, r, s = this, a = !1;
        if (!this._attachedCanvas) {
            this._attachedCanvas = t;
            var l = this._scene.getEngine();
            void 0 === this._onPointerDown && (this._onPointerDown = function (t) {
                return s.enabled ? void (r || (r = t.pointerId, o = { x: n(t), y: i(t) }, e || t.preventDefault())) : void (o = null)
            }, this._onPointerUp = function (t) {
                o = null, r = null, e || t.preventDefault()
            }, this._onPointerMove = function (t) {
                if (o && !a && r === t.pointerId) {
                    var l = n(t) - o.x, h = i(t) - o.y;
                    if (s.enabled) {
                        var c = t.button;
                        if (!t.button && t.buttons ? (c = t.buttons, c = 1 === t.buttons ? 0 : c) : -1 === c && (c = 1 === t.buttons ? 0 : t.buttons), 0 === c)
                            s.inertialAlphaOffset -= l / s.angularSensibility, s.inertialBetaOffset -= h / s.angularSensibility;
                        else if (2 === c) {
                            if (!s.cameraTranslationenabled)
                                return;
                            var u = wanaplan.engine3D.projectMouseOnGround(o.x, o.y), p = wanaplan.engine3D.projectMouseOnGround(n(t), i(t));
                            if (null !== u && null !== p) {
                                p.subtractInPlace(u);
                                var d = p.length();
                                d > 125 && p.scaleInPlace(125 / d), s._getTargetPosition().addInPlace(p.scaleInPlace(-1)), s._getTargetPosition().x = ujs.Math.clamp(s._getTargetPosition().x, wanaplan.configuration.boundingSize.min.x, wanaplan.configuration.boundingSize.max.x), s._getTargetPosition().z = ujs.Math.clamp(s._getTargetPosition().z, wanaplan.configuration.boundingSize.min.z, wanaplan.configuration.boundingSize.max.z)
                            }
                        }
                        ujs.notify("wnp.engine3D.camera.move"), o = { x: n(t), y: i(t) }, e || t.preventDefault()
                    }
                }
            }, this._onMouseMove = function (t) {
                if (s.enabled && l.isPointerLock) {
                    var n = t.movementX || t.mozMovementX || t.webkitMovementX || t.msMovementX || 0, i = t.movementY || t.mozMovementY || t.webkitMovementY || t.msMovementY || 0;
                    s.inertialAlphaOffset -= n / s.angularSensibility, s.inertialBetaOffset -= i / s.angularSensibility, e || t.preventDefault()
                }
            }, this._wheel = function (t) {
                if (s.enabled) {
                    var n = 0;
                    t.wheelDelta ? n = t.wheelDelta / (120 * s.radiusSpeedFactor) : t.detail && (n = -t.detail / (3 * s.radiusSpeedFactor)), n && (s.inertialRadiusOffset += n), t.preventDefault && (e || t.preventDefault())
                }
            }, this._onKeyDown = function (t) {
                if (s.enabled && (-1 !== s.keysUp.indexOf(t.keyCode) || -1 !== s.keysDown.indexOf(t.keyCode) || -1 !== s.keysLeft.indexOf(t.keyCode) || -1 !== s.keysRight.indexOf(t.keyCode))) {
                    var n = s._keys.indexOf(t.keyCode);
-1 === n && s._keys.push(t.keyCode), t.preventDefault && (e || t.preventDefault())
                }
            }, this._onKeyUp = function (t) {
                if (s.enabled && (-1 !== s.keysUp.indexOf(t.keyCode) || -1 !== s.keysDown.indexOf(t.keyCode) || -1 !== s.keysLeft.indexOf(t.keyCode) || -1 !== s.keysRight.indexOf(t.keyCode))) {
                    var n = s._keys.indexOf(t.keyCode);
                    n >= 0 && s._keys.splice(n, 1), t.preventDefault && (e || t.preventDefault())
                }
            }, this._onLostFocus = function () {
                s.enabled && (s._keys = [], r = null)
            }, this._onGestureStart = function (e) {
                s.enabled && void 0 !== window.MSGesture && (s._MSGestureHandler || (s._MSGestureHandler = new MSGesture, s._MSGestureHandler.target = t), s._MSGestureHandler.addPointer(e.pointerId))
            }, this._onGesture = function (t) {
                s.enabled && (1 !== t.scale ? (s.inertialRadiusOffset += 65 * t.scale * (t.expansion > 0 ? 1 : -1), a = !0) : a = !1, t.preventDefault && (e || (t.stopPropagation(), t.preventDefault())))
            }, this._reset = function () {
                s._keys = [], s.inertialAlphaOffset = 0, s.inertialBetaOffset = 0, o = null, r = null
            });
            var h = window.PointerEvent ? "pointer" : "mouse";
            t.addEventListener(h + "down", this._onPointerDown, !1), t.addEventListener(h + "up", this._onPointerUp, !1), t.addEventListener(h + "out", this._onPointerUp, !1), t.addEventListener(h + "move", this._onPointerMove, !1), t.addEventListener("mousemove", this._onMouseMove, !1), t.addEventListener("MSPointerDown", this._onGestureStart, !1), t.addEventListener("MSGestureChange", this._onGesture, !1), window.addEventListener("keydown", this._onKeyDown, !1), window.addEventListener("keyup", this._onKeyUp, !1), t.addEventListener("mousewheel", this._wheel, !1), window.addEventListener("DOMMouseScroll", this._wheel, !1), window.addEventListener("blur", this._onLostFocus, !1)
        }
    }, t.prototype.detachControl = function (t) {
        if (this._attachedCanvas == t) {
            var e = window.PointerEvent ? "pointer" : "mouse";
            t.removeEventListener(e + "down", this._onPointerDown, !1), t.removeEventListener(e + "up", this._onPointerUp, !1), t.removeEventListener(e + "out", this._onPointerUp, !1), t.removeEventListener(e + "move", this._onPointerMove, !1), t.removeEventListener("mousemove", this._onMouseMove, !1), t.removeEventListener("MSPointerDown", this._onGestureStart, !1), t.removeEventListener("MSGestureChange", this._onGesture, !1), window.removeEventListener("keydown", this._onKeyDown), window.removeEventListener("keyup", this._onKeyUp), t.removeEventListener("mousewheel", this._wheel), window.removeEventListener("DOMMouseScroll", this._wheel, !1), window.removeEventListener("blur", this._onLostFocus), this._MSGestureHandler = null, this._attachedCanvas = null, this._reset && this._reset()
        }
    }, t.prototype._update = function () {
        for (var t = 0; t < this._keys.length; t++) {
            var e = this._keys[t];
            ujs.notify("wnp.engine3D.camera.move"), -1 !== this.keysLeft.indexOf(e) ? this.inertialAlphaOffset -= .01 : -1 !== this.keysUp.indexOf(e) ? this.inertialBetaOffset -= .01 : -1 !== this.keysRight.indexOf(e) ? this.inertialAlphaOffset += .01 : -1 !== this.keysDown.indexOf(e) && (this.inertialBetaOffset += .01)
        }
        (0 != this.inertialAlphaOffset || 0 != this.inertialBetaOffset || 0 != this.inertialRadiusOffset) && (this.alpha += this.inertialAlphaOffset, this.beta += this.inertialBetaOffset, this.radius -= this.inertialRadiusOffset, this.inertialAlphaOffset *= this.inertia, this.inertialBetaOffset *= this.inertia, this.inertialRadiusOffset *= this.inertia, Math.abs(this.inertialAlphaOffset) < BABYLON.Engine.epsilon && (this.inertialAlphaOffset = 0), Math.abs(this.inertialBetaOffset) < BABYLON.Engine.epsilon && (this.inertialBetaOffset = 0), Math.abs(this.inertialRadiusOffset) < BABYLON.Engine.epsilon && (this.inertialRadiusOffset = 0)), this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), this.lowerBetaLimit && this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), this.upperBetaLimit && this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit), this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit), this._constraintToUpScene()
    }, t.prototype.setPosition = function (t) {
        var e = t.subtract(this._getTargetPosition());
        this.radius = e.length(), this.alpha = Math.atan(e.z / e.x), this.beta = Math.acos(e.y / this.radius)
    }, t.prototype._getViewMatrix = function () {
        this.beta > Math.PI && (this.beta = Math.PI), this.beta <= 0 && (this.beta = .01);
        var t = Math.cos(this.alpha), e = Math.sin(this.alpha), n = Math.cos(this.beta), i = Math.sin(this.beta), o = this._getTargetPosition();
        return o.addToRef(new BABYLON.Vector3(this.radius * t * i, this.radius * n, this.radius * e * i), this.position), BABYLON.Matrix.LookAtLHToRef(this.position, o, this.upVector, this._viewMatrix), this._viewMatrix
    }, t.prototype._constraintToUpScene = function () {
        var t = 3, e = -(this.target.y - t) / this.radius;
        if (!(Math.abs(e) > 1)) {
            var n = Math.abs(Math.acos(e));
            this.beta = BABYLON.Math.NormalizeAngle(this.beta), this.beta = Math.min(this.beta, n), this.beta = Math.max(this.beta, -n)
        }
    }, t
} ();
