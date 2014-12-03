var AvatarComponent3D = function() {
    var t, e = function(e) {
        BaseComponent3D.call(this, e, "AvatarComponent3D"), this.avatar = null, this.structure = this.core.getSelectedStructure(), this._avatarEnabled = !0, wanaplan.api.params.avatarEnabled === !1 && (this._avatarEnabled = !1), t = this, BABYLON.SceneLoader.ImportMesh("", wnp.Assets.globalPath + "js/Components/AvatarComponent/avatar/", "girl.babylon", e.engine3D.scene, function(n) {
            t.avatar = new BABYLON.Mesh("avatar", e.engine3D.scene), t.avatar.isVisible = !1;
            for (var i = 0, o = n.length; o > i; i++)
                n[i].parent = t.avatar, t._avatarEnabled ? (n[i].material.backFaceCulling = !1, n[i].receiveShadows = !0, e.engine3D.castShadows(n[i])) : n[i].isVisible = !1;
            t.avatar.position.y += 5;
            var r = wanaplan.getComponentByName("EditionComponent3D");
            r && r.addUnremovableDraggable(t.avatar)
        }), this.globalBoundingBox = this.core.configuration.boundingSize, this.onNewPlanReady = this.onNewPlanReady.bind(this), document.addEventListener("wnp.request.newPlanReady", this.onNewPlanReady, !1)
    };
    return e.prototype = Object.create(BaseComponent3D.prototype), e.prototype.onFloorSelected = function(t) {
        var e = t.structure;
        this.structure = e, "undefined" != typeof e.elevation && (this.avatar.position.y = e.elevation + 5)
    }, e.prototype.startListening = function() {
        this.onFloorSelected = this.onFloorSelected.bind(this), document.addEventListener("wnp.request.floorSelected", this.onFloorSelected, !1)
    }, e.prototype.stopListening = function() {
        document.removeEventListener("wnp.request.floorSelected", this.onFloorSelected, !1)
    }, e.prototype.onNewPlanReady = function() {
        this.structure = this.core.getSelectedStructure(), "undefined" != typeof this.structure.elevation && (this.avatar.position.y = this.structure.elevation + 5)
    }, e.prototype.setVisibility = function(t) {
        this._avatarEnabled && this.avatar.traverse(function(e) {
            e.isVisible = t
        })
    }, e.prototype.update = function() {
        this.avatar && (null == this.avatar || this.avatar.visible || (this.avatar.position.y = this.core.getSelectedStructure().elevation + 5), this.avatar.position.x = this.avatar.position.x < this.globalBoundingBox.min.x ? this.globalBoundingBox.min.x : this.avatar.position.x, this.avatar.position.z = this.avatar.position.z < this.globalBoundingBox.min.z ? this.globalBoundingBox.min.z : this.avatar.position.z, this.avatar.position.x = this.avatar.position.x > this.globalBoundingBox.max.x ? this.globalBoundingBox.max.x : this.avatar.position.x, this.avatar.position.z = this.avatar.position.z > this.globalBoundingBox.max.z ? this.globalBoundingBox.max.z : this.avatar.position.z)
    }, e
}();