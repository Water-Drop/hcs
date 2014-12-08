var CameraComponent = function() {
    var t, e = new BABYLON.Vector3(0, 170, 0),
        n = function(n) {
            BaseComponent3D.call(this, n, "CameraComponent"), t = this, this.ORBITCAMERA = 0, this.FPSCAMERA = 1, this.scene = n.engine3D.scene, this.cameraActiveId = 0, this.lookAt = null;
            var i = function() {
                this.bindLookAt(wanaplan.getComponentByName("AvatarComponent3D").avatar), document.removeEventListener("wnp.engine3d.globaleFloorReady", i, !1)
            }.bind(this);
            document.addEventListener("wnp.engine3d.globaleFloorReady", i, !1), this.avatarPosition = e.clone(), this.camera = [new wnp.Input.OrbitCamera("Camera", -Math.PI / 3, Math.PI / 4, 1500, e.clone(), n.engine3D.scene), new wnp.Input.FirstPersonCamera("FPS", this.avatarPosition, n.engine3D.scene)], this.camera[0].attachControl(n.engine3D.canvas), this.camera[0].inertia = 0, this.camera[0].angularSensibility = 300, this.camera[0].radiusSpeedFactor = .005, this.camera[0].moveSpeedFactor = 5, this.camera[0].fov = .25 * Math.PI, this.camera[0].minZ = 15, this.camera[0].maxZ = 4e4, this.camera[1].minZ = 15, this.camera[1].maxZ = 4e4, this.camera[1].heightMin = 20, this.camera[1].heightMax = 240, this.camera[1].radiusSpeedFactor = .2, this.camera[1].angularSensibility = 400, this.camera[1].height = 170, this.camera[1].fov = 70 / 180 * Math.PI, n.engine3D.scene.activeCamera = this.camera[this.cameraActiveId], n.engine3D.camera = n.engine3D.scene.activeCamera
        };
    return n.prototype = new BaseComponent3D, n.prototype.startListening = function() {
        this.onCameraChanged = this.onCameraChanged.bind(this), this.onFloorLevelChanged = this.onFloorLevelChanged.bind(this), this.onControleEnd = this.onControleEnd.bind(this), this.onControleMove = this.onControleMove.bind(this), this.onNewPlanReady = this.onNewPlanReady.bind(this), this.onGlobaleFloorReady = this.onGlobaleFloorReady.bind(this), document.addEventListener("wnp.request.cameraChanged", this.onCameraChanged, !1), document.addEventListener("wnp.request.floorSelected", this.onFloorLevelChanged, !1), document.addEventListener("mousemove", this.onMouseMove, !1), document.addEventListener("mousewheel", this.onMouseZoom, !1), document.addEventListener("wnp.engine3d.dragcontrols.end", this.onControleEnd, !1), document.addEventListener("wnp.engine3d.dragcontrols.move", this.onControleMove, !1), document.addEventListener("wnp.request.newPlanReady", this.onNewPlanReady, !1), document.addEventListener("wnp.engine3d.globaleFloorReady", this.onGlobaleFloorReady, !1), wanaplan.engine3D.pointerManager.touchManager.on("swipe", this.onMouseZoom)
    }, n.prototype.stopListening = function() {
        document.removeEventListener("wnp.request.cameraChanged", this.onCameraChanged, !1), document.removeEventListener("wnp.request.floorSelected", this.onFloorLevelChanged, !1), document.removeEventListener("wnp.request.newPlanReady", this.onNewPlanReady, !1), document.removeEventListener("mousemove", this.onMouseMove), document.removeEventListener("mousewheel", this.onMouseZoom), document.removeEventListener("wnp.engine3d.dragcontrols.end", this.onControleEnd), document.removeEventListener("wnp.engine3d.dragcontrols.move", this.onControleMove), document.removeEventListener("wnp.engine3d.globaleFloorReady", this.onGlobaleFloorReady), wanaplan.engine3D.pointerManager.touchManager.off("swipe", this.onMouseZoom)
    }, n.prototype.toggleFXAA = function(t) {
        var e = wanaplan.engine3D.scene.activeCamera;
        return "number" == typeof t && (e = wanaplan.engine3D.scene.cameras[t]), e.__fxaa__cookie ? (e.__fxaa__cookie.dispose(), e.__fxaa__cookie = null) : e.__fxaa__cookie = new BABYLON.FxaaPostProcess("fxaa", 1, e), e.__fxaa__cookie ? !0 : !1
    }, n.prototype.toggleFSAA = function(t, e) {
        var e = "number" == typeof e || BABYLON.Texture.BILINEAR_SAMPLINGMODE,
            n = wanaplan.engine3D.scene.activeCamera;
        return "number" == typeof t && (n = wanaplan.engine3D.scene.cameras[t]), n.__fsaa__cookie ? (n.__fsaa__cookie.dispose(), n.__fsaa__cookie = null) : (n.__fsaa__cookie = new BABYLON.PassPostProcess("fsaa", 2, n), n.__fsaa__cookie.renderTargetSamplingMode = e), n.__fsaa__cookie ? !0 : !1
    }, n.prototype.disableAllPostProcess = function() {
        camera.__fsaa__cookie && (camera.__fsaa__cookie.dispose(), camera.__fsaa__cookie = null), camera.__fxaa__cookie && (camera.__fxaa__cookie.dispose(), camera.__fxaa__cookie = null)
    }, n.prototype.onMouseMove = function() {}, n.prototype.onMouseZoom = function() {
        ujs.notify("wnp.engine3D.camera.zoom")
    }, n.prototype.onGlobaleFloorReady = function() {
        var t = this.core.structure.members[this.core.structure.currentStructureIndex].elevation;
        this.camera[0].target.y = t + 170, this.camera[1].height = t + 170, this.camera[1].heightMin = t + 20, this.camera[1].heightMax = t + 240, this.avatarPosition.y = t + 170
    }, n.prototype.onCameraChanged = function() {
        this.cameraActiveId = (this.cameraActiveId + 1) % 2, this.scene.activeCamera = this.camera[this.cameraActiveId], wanaplan.engine3D.camera = this.camera[this.cameraActiveId];
        var t = wanaplan.engine3D.searchComponent("AvatarComponent3D");
        this.cameraActiveId ? (this.camera[1].rotation.copyFromFloats(0, -this.camera[0].alpha - Math.PI / 2, 0), this.camera[1].position.copyFromFloats(t.avatar.position.x, this.camera[1].height, t.avatar.position.z), this.camera[1].attachControl(wanaplan.engine3D.canvas), this.camera[0].detachControl(wanaplan.engine3D.canvas), t && t.setVisibility(!1)) : (this.lookAt && (this.lookAt.position.x = this.camera[1].position.x, this.lookAt.position.z = this.camera[1].position.z), this.camera[0].target.x = this.camera[1].position.x, this.camera[0].target.z = this.camera[1].position.z, this.camera[0].alpha = -this.camera[1].rotation.y - Math.PI / 2, this.camera[0].attachControl(wanaplan.engine3D.canvas), this.camera[1].detachControl(wanaplan.engine3D.canvas), t && t.setVisibility(!0)), ujs.notify("wnp.engine3d.cameraChanged", {
            activeCameraId: this.cameraActiveId,
            activeCamera: this.cameraActiveId ? "fpsCamera" : "orbitCamera"
        })
    }, n.prototype.onFloorLevelChanged = function(e) {
        t.camera[0].target.y = e.structure.elevation + 170, t.camera[1].height = e.structure.elevation + 170, t.camera[1].position.y = e.structure.elevation + 170, t.camera[1].heightMax = e.structure.elevation + 240, t.camera[1].heightMin = e.structure.elevation + 20
    }, n.prototype.onControleEnd = function(e) {
        e.selected && this.lookAt && e.selected.pickedMesh.id == this.lookAt.id && (t.camera[0].target.x = this.lookAt.position.x, t.camera[0].target.z = this.lookAt.position.z)
    }, n.prototype.onControleMove = function(e) {
        !e.selected && this.lookAt && (this.lookAt.position.x = t.camera[0].target.x, this.lookAt.position.z = t.camera[0].target.z)
    }, n.prototype.onNewPlanReady = function() {
        this.structure = this.core.getSelectedStructure(), "undefined" != typeof this.structure.elevation && (t.camera[0].target.y = this.structure.elevation + 170)
    }, n.prototype.getLookAt = function() {
        return this.lookAt
    }, n.prototype.bindLookAt = function(t) {
        this.lookAt = t
    }, n.prototype.getActiveCameraId = function() {
        return this.cameraActiveId
    }, n
}();