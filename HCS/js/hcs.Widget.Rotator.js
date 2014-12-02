var wnp = window.wnp || {};
wnp.Widget = wnp.Widget || {}, wnp.Widget.Rotator = function() {
    var t, e, n = null, i = null, o = null, r = new BABYLON.Plane(0, 1, 0, 0), s = !1, a = 0, l = function(n) {
        t = n, e = this, n.on("click", this.onClick), n.on("refresh", this.onRefreshObject), n.on("selectObject", this.onSelectObject), n.on("deselectObject", this.onDeselectObject), n.on("mousedown", this.onMouseDown), n.on("mouseup", this.onMouseUp), n.on("mousemove", this.onMouseMove), this.setupHistory()
    };
    return l.prototype.onRefreshObject = function(t) {
        n && n.dispose(), n = null, e.addSelectionBox(t.object)
    }, l.prototype.onSelectObject = function(t) {
        e.addSelectionBox(t.object)
    }, l.prototype.onDeselectObject = function() {
        n && n.dispose(), n = null
    }, l.prototype.isActive = function() {
        return s
    }, l.prototype.onClick = function() {
    }, l.prototype.onMouseMove = function() {
        if (s) {
            var e = wanaplan.engine3D.projectMouseOnPlane(r), a = n.position, l = i.subtract(a), h = e.subtract(a), c = Math.atan2(l.x, l.z), u = Math.atan2(h.x, h.z), p = o + u - c, d = Math.PI / 2, m = Math.round(p / d), g = p - m * d;
            return Math.abs(g) < .3 && (p -= g), t.getSelectedObject().rotation.y = p, t.getSelectedObject().computeWorldMatrix(!0), t.getSelectedObject().getFloor().markAsDirty(), !1
        }
    }, l.prototype.onMouseDown = function(n) {
        if (!t.getLocker() || t.getLocker() === e) {
            var a = n.collided;
            if (a && "rotator" == a.pickedMesh.name) {
                ujs.notify("wnp.engine3d.dragcontrols.start");
                {
                    t.getSelectedObject().position
                }
                r.d = -a.pickedPoint.y, i = a.pickedPoint, o = t.getSelectedObject().rotation.y, s = !0, t.lock(e)
            }
        }
    }, l.prototype.onMouseUp = function() {
        t.getLocker() && t.getLocker() !== e || (t.getSelectedObject() && null !== o && null !== t.getSelectedObject().rotation.y && o !== t.getSelectedObject().rotation.y && ujs.notify("wnp.request.historyAction", {component: e,object: t.getSelectedObject(),params: {oldAngle: o,newAngle: t.getSelectedObject().rotation.y},action: a}), ujs.notify("wnp.engine3d.dragcontrols.end"), r.d = 0, i = null, o = null, t.unlock(e), s = !1)
    }, l.prototype.setupHistory = function() {
        this.historycmp = wanaplan.getComponentByName("HistoryComponent"), this.historycmp && this.historycmp.registerAction(a, this.undoRotate, this.redoRotate, this)
    }, l.prototype.addHistory = function(t, e, n) {
        this.historycmp && this.historycmp.actionDone(t, e, n, this)
    }, l.prototype.undoRotate = function(t, n) {
        e.historyRotate(t, n.oldAngle)
    }, l.prototype.redoRotate = function(t, n) {
        e.historyRotate(t, n.newAngle)
    }, l.prototype.historyRotate = function(t, e) {
        t.rotation.y = e, ujs.notify("wnp.request.saveHistory")
    }, l.prototype.getRotationMesh = function(t, e) {
        var n = BABYLON.Mesh.CreateCylinder("rotator", 10, 2 * t + 10, 2 * t, 32, 1, !1, wanaplan.engine3D.scene);
        return n.material = new BABYLON.StandardMaterial("rotator", wanaplan.engine3D.scene), wnp.MaterialFactory.MakeBasicColor(n.material, e), n.material.backFaceCulling = !1, n
    }, l.prototype.addSelectionBox = function(t) {
        n && n.dispose();
        var e = t.getBoundingBox(!0), i = Math.sqrt((e.maximum.x - e.minimum.x) * (e.maximum.x - e.minimum.x) / 4 + (e.maximum.z - e.minimum.z) * (e.maximum.z - e.minimum.z) / 4);
        n = new BABYLON.Mesh("selector", wanaplan.engine3D.scene), n.isVisible = !1;
        var o = new BABYLON.Color3;
        o.fromHex(-1 !== t.name.indexOf("group_") ? wnp.Assets.groupColor : wnp.Assets.mainUIColor);
        var r = this.getRotationMesh(i, o);
        r.position.y = e.minimum.y + 10, r.position.x = e.center.x, r.position.z = e.center.z, r.selectorOf = t, r.parent = n;
        var s = new BABYLON.Mesh.CreatePlan("rotator", 28, 14, wanaplan.engine3D.scene);
        s.material = new BABYLON.StandardMaterial("buttons", wanaplan.engine3D.scene), s.material.diffuseTexture = new BABYLON.Texture(wnp.Assets.toolbarTextures.rotateTexture, wanaplan.engine3D.scene), s.material.diffuseTexture.hasAlpha = !0, s.material.backFaceCulling = !1, wnp.MaterialFactory.MakeBasicMaterial(s.material), s.material.emissiveColor.copyFromFloats(1, 1, 1), s.position.z = -i - 6, s.position.y = Math.PI, s.rotation.x = Math.PI / 4, s.selectorOf = t, s.parent = r, n.position = t.getAbsolutePosition(), n.rotation = t.rotation
    }, l
}();
