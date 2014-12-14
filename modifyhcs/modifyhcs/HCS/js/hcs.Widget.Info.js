var hcs = window.hcs || {};
hcs.Widget = hcs.Widget || {}, hcs.Widget.Info = function() {
    var t, e, n, i, o, r = null, s = !1, a = function() {
    }, l = function(i) {
        n = i, o = this, t = new BABYLON.SpriteManager("objectMgr", hcs.Assets.toolbarTextures.infoTexture, 2, 128, hcsdesign.engine3D.scene), e = new BABYLON.SpriteManager("groupMgr", hcs.Assets.toolbarTextures.infoTextureGroup, 2, 128, hcsdesign.engine3D.scene), i.on("click", this.onClick), i.on("special", this.onSpecial), i.on("selectObject", this.onSelectObject), i.on("deselectObject", this.onDeselectObject)
    };
    return l.prototype.setClickCallback = function(t) {
        a = t
    }, l.prototype.onClick = function(t) {
        t.collided && "_sprite_info" == t.collided.pickedMesh.name && (a(n.getSelectedObject()), ujs.notify("hcs.engine3D.info", {}))
    }, l.prototype.onSpecial = function() {
        a(n.getSelectedObject())
    }, l.prototype.onSelectObject = function() {
        o.addInfo()
    }, l.prototype.onDeselectObject = function() {
        o.removeInfo()
    }, l.prototype.addInfo = function() {
        r && this.removeInfo();
        var o = n.getSelectedObject().getBoundingBox(), s = new BABYLON.Vector3((o.minimum.x + o.maximum.x) / 2, o.maximum.y, (o.minimum.z + o.maximum.z) / 2);
        r = n.isGroup(n.getSelectedObject()) ? new BABYLON.Sprite("info", e) : new BABYLON.Sprite("info", t), r.size = 30, i = new BABYLON.Mesh("info", hcsdesign.engine3D.scene), i.isVisible = !1, i.position = n.getSelectedObject().getAbsolutePosition();
        var a = new BABYLON.Mesh("info", hcsdesign.engine3D.scene);
        return a.parent = i, a.isVisible = !1, a.position = s, a.position.y += 35, r.position = a.getAbsolutePosition(), toolbar
    }, l.prototype.removeInfo = function() {
        r && (r.dispose(), i.dispose()), i = null, r = null
    }, l.prototype.isActive = function() {
        return s
    }, l
}();
