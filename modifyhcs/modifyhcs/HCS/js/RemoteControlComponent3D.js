var RemoteControlComponent3D = function() {
    var t, e, n, i = !1,
        o = !1,
        r = function(e) {
            BaseComponent3D.call(this, e, "RemoteControlComponent3D"), t = this
        };
    return r.prototype = new BaseComponent3D, r.prototype.initialize = function() {
        this.createHTML(), document.addEventListener("mouseup", this.onMouseUp, !1), document.addEventListener("mousemove", this.onMouseMove, !1), window.addEventListener("mousewheel", this.onZoomUpdated, !1), document.addEventListener("touchend", this.onMouseUp, !1), document.addEventListener("touchcancel", this.onMouseUp, !1), document.addEventListener("touchmove", this.onMouseMove, !1), document.addEventListener("hcs.request.zoomUpdated", this.onZoomUpdated, !1), document.addEventListener("hcs.contextChanged", this.onZoomUpdated, !1), document.addEventListener("hcs.engine3d.cameraChanged", this.onCameraHasChanged.bind(this), !1), document.addEventListener("hcs.request.changeEngine", this.onCameraHasChanged.bind(this), !1)
    }, r.prototype.listenJoystickEvents = function() {
        this.joystick.addEventListener("mousedown", this.onJoystickMouseDown, !1), this.joystick.addEventListener("touchstart", this.onJoystickMouseDown, !1)
    }, r.prototype.listenCursorEvents = function() {
        this.cursor.addEventListener("mousedown", this.onCursorMouseDown, !1), this.cursor.addEventListener("touchstart", this.onCursorMouseDown, !1)
    }, r.prototype.onZoomUpdated = function() {
        var e = n.height;
        if (hcsdesign.getSelectedEngine() == hcsdesign.ENGINE_2D) {
            var i = hcsdesign.engine2D.getZoom(),
                o = e * (1 - i);
            o = 0 > o ? 0 : o
        } else {
            var r = hcsdesign.engine3D.camera;
            if ("Camera" == r.name)
                var s = r.radius,
                    o = e * (s - r.lowerRadiusLimit) / (r.upperRadiusLimit - r.lowerRadiusLimit);
            else
                var o = e * (r.heightMax - r.height) / (r.heightMax - r.heightMin)
        }
        t.cursor.style.marginTop = o + "px"
    }, r.prototype.onMouseMove = function(e) {
        if (i) {
            var o = e.pageY || e.clientY;
            e.touches && (e.preventDefault(), o = e.touches[0].pageY);
            var r = o - n.top,
                s = 0;
            if (r > 0 && r < n.height ? s = r : r > 0 && r > n.height ? s = n.height : 0 > r && (s = 0), hcsdesign.getSelectedEngine() == hcsdesign.ENGINE_2D) {
                {
                    var a = (n.height - s) / n.height;
                    hcsdesign.engine2D.getZoom()
                }
                hcsdesign.engine2D.setZoom(a)
            } else {
                var a = s / n.height,
                    l = hcsdesign.engine3D.camera;
                "Camera" == l.name ? l.radius = l.lowerRadiusLimit + (l.upperRadiusLimit - l.lowerRadiusLimit) * a : (l.height = l.heightMax + (l.heightMin - l.heightMax) * a, l.position.y = l.height), t.cursor.style.marginTop = s + "px", ujs.notify("hcs.engine3D.camera.zoom")
            }
        }
    }, r.prototype.onJoystickMouseDown = function(n) {
        o = !0, n.touches && n.preventDefault();
        var i = t.joystick.getBoundingClientRect(),
            r = {
                x: (n.touches ? n.touches[0].pageX : n.pageX || n.clientX) - i.left,
                y: (n.touches ? n.touches[0].pageY : n.pageY || n.clientY) - i.top
            },
            s = Math.floor(r.x / i.width * 3),
            a = Math.floor(r.y / i.height * 3);
        1 == s && 1 == a && ujs.notify("hcs.request.cameraChanged"), e = setInterval(function() {
            t.setTranslation(s, a)
        }, 1)
    }, r.prototype.setTranslation = function(t, e) {
        if (hcsdesign.getSelectedEngine() == hcsdesign.ENGINE_2D) {
            var n = 10,
                i = hcsdesign.engine2D.getTranslation();
            1 > t && (i.x -= n), t > 1 && (i.x += n), 1 > e && (i.y -= n), e > 1 && (i.y += n), hcsdesign.engine2D.setTranslation(i)
        } else {
            var o = hcsdesign.engine3D.camera;
            if ("Camera" == o.name) {
                var n = Math.PI / 300;
                1 > t && (o.alpha -= n), t > 1 && (o.alpha += n), 1 > e && (o.beta -= n), e > 1 && (o.beta += n)
            } else {
                var n = o._computeLocalCameraSpeed();
                o._localDirection || (o._localDirection = BABYLON.Vector3.Zero(), o._transformedDirection = BABYLON.Vector3.Zero()), o._localRotation || (o._localRotation = BABYLON.Vector3.Zero(), o._transformedRotation = BABYLON.Vector3.Zero()), 1 > t ? o._localRotation.copyFromFloats(0, -n / 15, 0) : 1 > e ? o._localDirection.copyFromFloats(0, 0, 50 * n) : t > 1 ? o._localRotation.copyFromFloats(0, n / 15, 0) : e > 1 && o._localDirection.copyFromFloats(0, 0, 50 * -n), o.getViewMatrix().invertToRef(o._cameraTransformMatrix), 1 > e || e > 1 ? (BABYLON.Vector3.TransformNormalToRef(o._localDirection, o._cameraTransformMatrix, o._transformedDirection), o.position.addInPlace(o._transformedDirection)) : (BABYLON.Vector3.TransformNormalToRef(o._localRotation, o._cameraTransformMatrix, o._transformedRotation), o.rotation.y += o._transformedRotation.y), o.position.y = o.height
            }
        }
    }, r.prototype.onCursorMouseDown = function() {
        i = !0
    }, r.prototype.onMouseUp = function() {
        i = !1, o && (clearInterval(e), o = !1)
    }, r.prototype.createHTML = function() {
        var e = document.createElement("div");
        e.setAttribute("id", "remoteController"), e.style.width = "50px", e.style.height = "210px", e.style.position = "relative", e.style.backgroundImage = "url('" + hcs.Assets.globalPath + hcs.Assets.remote.bg + "')", this.cursorContainer = document.createElement("div"), this.cursorContainer.setAttribute("style", "width:20px;height:150px;position:absolute;top:57px;left:15px;"), this.cursor = document.createElement("div"), this.cursor.setAttribute("style", "width:20px;height:7px;background:" + hcs.Assets.mainUIColor + ";border-radius:2px;cursor:pointer;border:1px solid " + ("#897364" == hcs.Assets.mainUIColor ? "#897364" : "#333") + ";margin-top:50px;"), this.listenCursorEvents(), this.cursorContainer.appendChild(this.cursor), e.appendChild(this.cursorContainer), this.cameraButton = document.createElement("div"), this.cameraButton.id = "camera-swap-btn", this.cameraButton.style.width = "18px", this.cameraButton.style.height = "18px", this.cameraButton.style.position = "absolute", this.cameraButton.style.backgroundSize = "cover", this.cameraButton.style.top = "16px", this.cameraButton.style.left = "16px", this.cameraButton.style.borderRadius = "7px", e.appendChild(this.cameraButton), t._setCameraIcon(!1), this.joystick = document.createElement("div"), this.joystick.setAttribute("style", "width:50px;height:50px;cursor:pointer;position:absolute;"), this.listenJoystickEvents(), e.appendChild(this.joystick);
        var i = document.getElementById("remote-controller");
        i || (i = document.createElement("div"), i.style.position = "absolute", i.style.top = "50px", i.style.left = "10px", i.style.height = "300px", i.style.width = "50px", document.getElementById("modalWidgets").appendChild(i)), i.appendChild(e), n = this.cursorContainer.getBoundingClientRect()
    }, r.prototype.destroy = function() {
        window.removeEventListener("mousewheel", this.onZoomUpdated), document.removeEventListener("mouseup", this.onMouseUp), document.removeEventListener("mousemove", this.onMouseMove), document.removeEventListener("touchend", this.onMouseUp), document.removeEventListener("touchcancel", this.onMouseUp), document.removeEventListener("touchmove", this.onMouseMove), document.removeEventListener("hcs.request.zoomUpdated", this.onZoomUpdated), document.removeEventListener("hcs.contextChanged", this.onZoomUpdated);
        var t = document.getElementById("remoteController");
        if (t) {
            var e = t.parentNode;
            e.removeChild(t), e.parentNode.removeChild(e)
        }
    }, r.prototype.onCameraHasChanged = function(t) {
        this._setCameraIcon(t.engine && "2D" == t.engine ? !1 : t.activeCamera)
    }, r.prototype._setCameraIcon = function(t) {
        this.cameraButton.style.display = t === !1 ? "none" : "block";
        var e;
        switch (t) {
            case "fpsCamera":
                e = hcs.Assets.remote.cam;
                break;
            case "orbitCamera":
            default:
                e = hcs.Assets.remote.man
        }
        this.cameraButton.style.backgroundImage = "url('" + hcs.Assets.globalPath + e + "')"
    }, r
}();