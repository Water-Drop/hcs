var HideAvatarComponent = function() {
    var t = function(t) {
        BaseComponent3D.call(this, t, "HideAvatarComponent")
    };
    return t.prototype = new BaseComponent3D, t.prototype.initialize = function() {
        BaseComponent3D.prototype.initialize.call(this)
    }, t.prototype.startListening = function() {
        this.onZoom = this.onZoom.bind(this), document.addEventListener("hcs.engine3D.camera.zoom", this.onZoom, !1)
    }, t.prototype.stopListening = function() {
        document.removeEventListener("hcs.engine3D.camera.zoom", this.onZoom, !1)
    }, t.prototype.onZoom = function() {
        var t = 500,
            e = API.getComponent("CameraComponent");
        if (e.cameraActiveId == e.ORBITCAMERA) {
            var n = e.camera[e.cameraActiveId].position,
                i = API.getComponent("AvatarComponent3D"),
                o = i.avatar.position;
            i.setVisibility(n.distanceTo(o) <= t ? !1 : !0)
        }
    }, t
}();