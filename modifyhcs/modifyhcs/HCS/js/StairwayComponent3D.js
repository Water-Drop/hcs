var StairwayComponent3D = function() {
    function t(t) {
        t.traverse(function(t) {
            hcsdesign.engine3D.castShadows(t), t.receiveShadows = !0
        })
    }
    var e, n = function(t) {
        BaseComponent3D.call(this, t, "StairwayComponent3D"), this._scenes = [], this.priority = 1, e = this
    };
    return n.prototype = new BaseComponent3D, n.prototype.compute = function() {}, n.prototype.startListening = function() {
        document.addEventListener("hcs.engine3d.floorReady", this.onFloorReady, !1)
    }, n.prototype.stopListening = function() {
        document.removeEventListener("hcs.engine3d.floorReady", this.onFloorReady, !1)
    }, n.prototype.onFloorReady = function(t) {
        for (var n = t.floor || e.getFloor(), i = t.structure || e.core.getSelectedStructure(), o = 0; o < i.stairways.length; o++)
            e.createStairway(i.stairways[o], n, hcsdesign.engine3D.scene)
    }, n.prototype.createScene = function() {
        for (var t = this.core.getComponentByName("FloorComponent3D"), e = 0; e < this.structure.getLength(); e++) {
            var n = this.structure.getElement(e);
            if (n instanceof FloorStructure)
                for (var i = t.getFloor(n), o = 0; o < n.stairways.length; o++)
                    this.createStairway(n.stairways[o], i, hcsdesign.engine3D.scene)
        }
    }, n.prototype.initMaterials = function(t, e) {
        for (var n in e)
            t.traverse(function(t) {
                t.name === n && (t.material = e[n])
            })
    }, n.prototype.createStairway = function(e, n, i) {
        var o = (this.core.getComponentByName("ObjectComponent3D", this.core.ENGINE_3D), function(o) {
                var r = o.getObject3D(i);
                t(r), r.structure = e, r.structure.programmableInstance = o, r.name = "Stairway_" + e.id, r.isDecorable = !0, r.decorate = o.decorate, r.parent = n;
                var s = o.materials;
                o.getDefaultMaterials && (s = ujs.mergeObjects(o.getDefaultMaterials(hcsdesign.engine3D.scene), s)), this.initMaterials(r, s), e.materials = s, o.materials = s
            }.bind(this)),
            r = e.programmableInstance ? e.programmableInstance.materials : e.materials;
        return "spiral" == e.type ? hcs.Programmable.createInstance("Stairs.Spiral.js", e, r, e, o) : hcs.Programmable.createInstance("Stairs.js", e, r, e, o), !0
    }, n
}();