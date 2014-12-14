var FloorComponent3D = function() {
    var t = null,
        e = function(e) {
            BaseComponent3D.call(this, e, "FloorComponent3D"), this._floors = [], this.priority = 1, this._current = 0, t = this, this.onNewPlanReady = this.onNewPlanReady.bind(this), document.addEventListener("hcs.request.newPlanReady", this.onNewPlanReady)
        };
    return e.prototype = new BaseComponent3D, e.prototype.compute = function() {}, e.prototype.startListening = function() {
        this.onSelectFloor = this.onSelectFloor.bind(this), this.onDeleteFloor = this.onDeleteFloor.bind(this), document.addEventListener("hcs.request.floorSelected", this.onSelectFloor), document.addEventListener("hcs.request.floorDeleted", this.onDeleteFloor)
    }, e.prototype.stopListening = function() {
        document.removeEventListener("hcs.request.floorSelected", this.onSelectFloor), document.removeEventListener("hcs.request.floorDeleted", this.onDeleteFloor)
    }, e.prototype.onContextChanged = function(t) {
        "3D" == t ? (this.startListening(), this.createFloor()) : this.stopListening()
    }, e.prototype.onSelectFloor = function(t) {
        var e = t.id;
        this.createFloor(+e > +this._current ? this._current : e), this._current = e
    }, e.prototype.onDeleteFloor = function(t) {
        this.deleteFloor({
            id: t.id
        })
    }, e.prototype.onNewPlanReady = function() {
        for (var t = hcsdesign.engine3D.scene.meshes.slice(0), e = t.length - 1; e >= 0; e--)
            "structure" == t[e].type && t[e].dispose();
        return !0
    }, e.prototype.deleteFloor = function(t) {
        for (var e = hcsdesign.engine3D.scene.meshes.slice(0), n = e.length - 1; n >= 0; n--)
            e[n].name && -1 != e[n].name.indexOf("FloorMesh") && e[n].structureId >= t.id && e[n].dispose()
    }, e.prototype.getFloor = function(t) {
        for (var t = t || hcsdesign.getSelectedStructure(), e = "FloorMesh_" + t.id, n = 0; n < hcsdesign.engine3D.scene.meshes.length; n++)
            if (hcsdesign.engine3D.scene.meshes[n].name == e)
                return hcsdesign.engine3D.scene.meshes[n];
        return null
    }, e.prototype.createFloor = function(t) {
        var e, t = t || 0,
            n = +hcsdesign.getSelectedStructure().id || 0;
        this._current = n;
        for (var i = n + 1; i < this.structure.getLength(); i++)
            e = this.structure.getElement(i), this.deleteFloor(e);
        for (var o = t; n >= o; o++)
            if (e = this.structure.getElement(o), this.deleteFloor(e), e instanceof FloorStructure) {
                var r = this.createFloorMesh(e);
                r.position.y = e.elevation, r.computeWorldMatrix(), ujs.notify("hcs.engine3d.floorReady", {
                    floor: r,
                    structure: e
                })
            }
        ujs.notify("hcs.engine3d.globaleFloorReady", {
            maxFloorId: n
        }), this.initialized = !0
    }, e.prototype.createFloorMesh = function(t) {
        var e = new BABYLON.Mesh("FloorMesh_" + t.id, hcsdesign.engine3D.scene);
        return e.isVisible = !1, e.structureId = t.id, e.structure = t, e.id = t.id, e.type = "structure", e
    }, e
}();