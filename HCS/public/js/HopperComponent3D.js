var HopperComponent3D = function() {
    var t, e = function(e) {
        BaseComponent3D.call(this, e, "HopperComponent3D"), t = this;
        var n = hcsdesign.getComponentByName("RoomComponent3D");
        this._commonHopperMaterial = n.getSideMaterial()
    };
    return e.prototype = new BaseComponent3D, e.prototype.startListening = function() {
        document.addEventListener("hcs.engine3d.floorReady", this.onFloorReady, !1)
    }, e.prototype.stopListening = function() {
        document.removeEventListener("hcs.engine3d.floorReady", this.onFloorReady, !1)
    }, e.prototype.onFloorReady = function(e) {
        for (var n = e.floor || t.getFloor(), i = e.structure || hcsdesign.getSelectedStructure(), o = 0; o < i.hoppers.length; o++)
            t.createHopperSticks(i.hoppers[o], n)
    }, e.prototype.decorate = function(t, e) {
        var n = e.pickedMesh.material;
        return this.traverse(function(n) {
            n.name === e.pickedMesh.name && (n.material = t)
        }), this.structure.materials[e.pickedMesh.name] = t, n
    }, e.prototype.createScene = function() {
        for (var t = this.core.getComponentByName("FloorComponent3D"), e = 0; e < this.structure.getLength(); e++) {
            var n = this.structure.getElement(e);
            if (n instanceof FloorStructure)
                for (var i = t.getFloor(n), o = 0; o < n.hoppers.length; o++)
                    this.createHopperSticks(n.hoppers[o], i)
        }
    }, e.prototype.mergeGeometries = function(t, e, n) {
        var i = [],
            o = [],
            r = [];
        if (t.computeWorldMatrix(!0), t.traverse(function(t) {
                t.computeWorldMatrix(!0), t.isVisible && ("rail_stick" == t.name ? i.push(t) : "rails" == t.name ? o.push(t) : "bas" == t.name && r.push(t))
            }), i.length) {
            var s = BABYLON.Mesh.mergeMeshes("rail_stick", i, n);
            s.parent = t
        }
        if (o.length) {
            var a = BABYLON.Mesh.mergeMeshes("rails", o, n);
            a.parent = t
        }
        if (r.length) {
            var l = BABYLON.Mesh.mergeMeshes("bas", r, n);
            l.parent = t
        }
    }, e.prototype.createHopperSticks = function(t, e) {
        if (Object.keys(t.sticks).length) {
            var n = t.materials;
            n = ujs.mergeObjects(this.getDefaultMaterials(hcsdesign.engine3D.scene), n);
            var i = new BABYLON.Mesh("sticks", hcsdesign.engine3D.scene);
            i.isVisible = !1;
            for (var o in t.sticks) {
                var r = t.sticks[o] ? o : !1;
                if (r !== !1) {
                    var s = new BABYLON.Mesh("rails", hcsdesign.engine3D.scene);
                    s.isVisible = !1;
                    var a = t.points[+r],
                        l = t.points[+r + 1 >= t.points.length ? 0 : +r + 1],
                        h = a.clone().lerp(l.clone(), .5),
                        c = Math.atan2(l.y - a.y, l.x - a.x),
                        u = a.distanceTo(l),
                        p = BABYLON.Mesh.CreateBloc("bas", u, 10, 5, hcsdesign.engine3D.scene);
                    p.parent = s, p.position.y = 5, p.name = "bas", p.isDecorable = !0;
                    var d = BABYLON.Mesh.CreateBloc("rails", u, 3, 5, hcsdesign.engine3D.scene);
                    d.position.y = 90, d.name = "rails", d.isDecorable = !0, d.parent = s;
                    var m = 20,
                        g = Math.round(u / m),
                        m = u / g,
                        f = new BABYLON.Mesh("stick", hcsdesign.engine3D.scene);
                    f.isVisible = !1;
                    for (var y = BABYLON.Mesh.CreateCylinder("rail_stick", 90, 2, 2, 6, 1, !0, hcsdesign.engine3D.scene), _ = 0; g > _; _++) {
                        var v = y.clone();
                        v.position.x = 3 + _ * m, v.position.z = 0, v.position.y = 45, v.parent = f
                    }
                    y.dispose(), f = BABYLON.Mesh.mergeMeshesRec("rail_stick", [f], hcsdesign.engine3D.scene), f.position.x -= u / 2, f.isDecorable = !0, f.parent = s, s.rotation.y = c, s.position.x = h.x, s.position.z = -h.y, s.parent = i
                }
            }
            this.mergeGeometries(i, n, hcsdesign.engine3D.scene), i.isDecorable = !0, i.decorate = this.decorate, i.structure = t, i.parent = e, this.initMaterials(i, n), t.materials = n
        }
        return !1
    }, e.prototype.getDefaultMaterials = function(t) {
        var e = {};
        return e.rails = new hcs.WhiteMaterial("rails", t, {
            factor: .8
        }), e.rail_stick = new hcs.MetalMaterial("rail_stick", t, {
            brillance: .2
        }), e.bas = new hcs.WhiteMaterial("bas", t, {
            factor: .8
        }), e
    }, e.prototype.prepareMaterials = function(t, e) {
        var n = t || {};
        for (var i in e.materials)
            this.materialFactory.copyFromParams(n[i], e.materials[i]);
        return n
    }, e.prototype.initMaterials = function(t, e) {
        for (var n in e)
            t.traverse(function(t) {
                t.name === n && (t.material = e[n])
            })
    }, e.Build = function(e, n, i, o) {
        if (e && 0 !== e.getTotalVertices()) {
            var r = BABYLON.CSG.FromMesh(e),
                i = i || 0,
                s = e.parent.structure.height < 100 ? e.parent.structure.height - 1 : 100,
                s = 100 > o ? o + 1 : 100,
                a = BABYLON.Mesh.ExtrudeNewMesh("hopper_temp", n.points, null, {
                    amount: s
                }, hcsdesign.engine3D.scene);
            if (!a)
                return e;
            a.position.y += i, a.parent = e.parent, n.material = n.material || t._commonHopperMaterial, a.subMeshes[0].objectInstance = n;
            var l = BABYLON.CSG.FromMesh(a);
            r.subtractInPlace(l);
            var h = r.toMesh("room_global", e.material, hcsdesign.engine3D.scene, !0);
            return h.parent = e.parent, hcsdesign.getComponentByName("RoomComponent3D").replaceRoom(e, h), 0 != i && h.subMeshes.splice(h.subMeshes.length - 1, 1), h.isDecorable = !0, h.parent.roomMesh = h, a.dispose(), h
        }
    }, e.Debug = function() {
        var t = BABYLON.Mesh.CreateSphere("sphere", 1, 40, hcsdesign.engine3D.scene),
            e = BABYLON.Mesh.CreateBox("box", 40, hcsdesign.engine3D.scene);
        t.position.y += 51, e.position.y += 25;
        var n = BABYLON.CSG.FromMesh(t),
            i = BABYLON.CSG.FromMesh(e),
            o = new BABYLON.MultiMaterial("multiMat", hcsdesign.engine3D.scene),
            r = new BABYLON.StandardMaterial("mat0", hcsdesign.engine3D.scene),
            s = new BABYLON.StandardMaterial("mat1", hcsdesign.engine3D.scene);
        r.diffuseColor.copyFromFloats(.8, .2, .2), r.backFaceCulling = !1, s.diffuseColor.copyFromFloats(.2, .8, .2), s.backFaceCulling = !1, o.subMaterials.push(r, s);
        var a = i.subtract(n),
            l = a.toMesh("csg", o, hcsdesign.engine3D.scene, !0);
        l.position = new BABYLON.Vector3(-100, 0, 0), a = n.subtract(i), l = a.toMesh("csg2", o, hcsdesign.engine3D.scene, !0), l.position = new BABYLON.Vector3(100, 0, 0), a = n.intersect(i), l = a.toMesh("csg3", o, hcsdesign.engine3D.scene, !0), l.position = new BABYLON.Vector3(0, 0, 100)
    }, e
}();