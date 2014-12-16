var RoomComponent3D = function() {
    var t, e = function(e) {
        BaseComponent3D.call(this, e, "RoomComponent3D"), this._defaultRoomTextures = {
            diffuseTexture: new BABYLON.Texture(wnp.Assets.roomTextures.diffuse, wanaplan.engine3D.scene),
            specularTexture: new BABYLON.Texture(wnp.Assets.roomTextures.specular, wanaplan.engine3D.scene),
            bumpTexture: new BABYLON.Texture(wnp.Assets.roomTextures.normal, wanaplan.engine3D.scene)
        }, this._defaultMaterial = new wnp.WoodMaterial("floor", wanaplan.engine3D.scene), this._defaultMaterial.diffuseTexture = this._defaultRoomTextures.diffuseTexture, this._defaultMaterial.bumpTexture = this._defaultRoomTextures.bumpTexture, this._defaultCeiling = new wnp.WhiteMaterial("CeilingBasic", wanaplan.engine3D.scene), this._commonMaterials = [new wnp.WhiteMaterial("FloorSide_common", wanaplan.engine3D.scene), new wnp.WhiteMaterial("Ceiling_common", wanaplan.engine3D.scene)], this._materialOffset = 0, t = this
    };
    e.prototype = new BaseComponent3D, e.prototype.getSideMaterial = function() {
        return this._defaultMaterial
    }, e.prototype.setSideMaterial = function(t) {
        this._defaultMaterial = t
    }, e.prototype.getCeilingMaterial = function() {
        return this._defaultCeiling
    }, e.prototype.setCeilingMaterial = function(t) {
        this._defaultCeiling = t
    }, e.prototype.onContextChanged = function(t) {
        "3D" == t ? this.initialized || (document.addEventListener("wnp.engine3d.floorReady", this.onFloorReady, !1), this.initialized = !0) : this.initialized && (document.removeEventListener("wnp.engine3d.floorReady", this.onFloorReady, !1), this.initialized = !1)
    }, e.prototype.onFloorReady = function(e) {
        var n = e.floor || t.getFloor(),
            i = e.structure || t.core.getSelectedStructure();
        wanaplan.getComponentByName("RoomComponent2D").update(i);
        var o = i.getElements("hoppers"),
            r = wanaplan.structure.getElement(i.id + 1),
            s = i.getElements("internalRooms");
        if (r)
            var a = t.build(s, o, n, r.hoppers);
        else
            var a = t.build(s, o, n, []);
        t.mesh = a, ujs.notify("wnp.engine3d.roomsReady", {
            floor: n,
            structure: i
        })
    };
    var n = function(t, e) {
        for (var n, i, o = 0, r = this.subMeshes.length; r > o; o++)
            3 * e.faceId >= this.subMeshes[o].indexStart && 3 * e.faceId < this.subMeshes[o].indexStart + this.subMeshes[o].indexCount && (n = this.objectInstances[this.subMeshes[o].materialIndex], n && (i = this.material.subMaterials[this.subMeshes[o].materialIndex].clone(this.material.subMaterials[this.subMeshes[o].materialIndex].name), t.name = i.name, n.materials[i.name] = t, this.material.subMaterials[this.subMeshes[o].materialIndex] = t));
        return i
    };
    return e.prototype.build = function(t, e, i, o) {
        for (var r = [], s = 0, a = 0, l = t.length; l > a; a++) {
            var h = this.createRoom(t[a], 0, t[a].height);
            s < t[a].height && (s = t[a].elevation), h && (r.push(h.floor), r.push(h.ceiling))
        }
        var c = BABYLON.Mesh.mergeMeshes("RoomMesh_" + i.structure.id, r, wanaplan.engine3D.scene, !0);
        if (c.material = new BABYLON.MultiMaterial("RoomMaterial", wanaplan.engine3D.scene), c.isDecorable = !0, c.decorate = n, c.parent = i, i.roomMesh = c, c.receiveShadows = !0, wanaplan.engine3D.scene.lights.point.excludedMeshes.push(c), HopperComponent3D) {
            for (var u = 0; u < e.length; u++)
                c = HopperComponent3D.Build(c, e[u], 0, s + 5);
            for (var u = 0; u < o.length; u++)
                c = HopperComponent3D.Build(c, o[u], i.structure.height - 10)
        }
        return c
    }, e.prototype.normalizePolygon = function(t) {
        for (var e = [], n = 0, i = t.length; i > n; n++)
            t[n].isOverture || e.push(t[n]);
        return e
    }, e.prototype.createRoom = function(t, e, n) {
        var i, o = (this.core.getComponentByName("HopperComponent3D", this.core.ENGINE_3D), t.points);
        if (o.length < 3)
            return !1;
        if (i = BABYLON.Mesh.ExtrudeNewMesh("room", o, null, {
                amount: 5 + t.elevation
            }, wanaplan.engine3D.scene))
            var r = BABYLON.Mesh.TriangulateNewMesh("ceiling", o, [], wanaplan.engine3D.scene, n - .1);
        else {
            var s = this.normalizePolygon(t.points);
            i = BABYLON.Mesh.ExtrudeNewMesh("room", s, null, {
                amount: 5 + t.elevation
            }, wanaplan.engine3D.scene);
            var r = BABYLON.Mesh.TriangulateNewMesh("ceiling", s, [], wanaplan.engine3D.scene, n - .1);
            if (!i)
                return null
        }
        r.invertFaces(), r.invertNormales(), t.materials.floor = t.materials.floor || this._defaultMaterial.clone("floor"), t.materials.ceiling = t.materials.ceiling || this._defaultCeiling.clone("ceiling"), t.ceiling ? t.materials.ceiling.oldAlpha && (t.materials.ceiling.alpha = t.materials.ceiling.oldAlpha) : (t.materials.ceiling.oldAlpha = t.materials.ceiling.alpha, t.materials.ceiling.alpha = 0);
        var a = i.getBoundingBox();
        a.ceil = !1;
        var l = r.getBoundingBox();
        l.ceil = !0, i.receiveShadows = !0;
        for (var h = 0, c = t.holes.length; c > h; h++)
            i = this.carveHole(i, t.holes[h], t.elevation + n), r = this.carveHole(r, t.holes[h], t.elevation + n);
        return i.subMeshes[0].objectInstance = t, i.subMeshes[0].boundingBox = a, r.subMeshes[0].objectInstance = t, r.subMeshes[0].boundingBox = l, {
            floor: i,
            ceiling: r
        }
    }, e.prototype.carveHole = function(t, e, n) {
        var i = BABYLON.CSG.FromMesh(t),
            o = BABYLON.Mesh.ExtrudeNewMesh("hopper_temp", e, null, {
                amount: n
            }, wanaplan.engine3D.scene);
        if (!o)
            return t;
        o.parent = t.parent, o.material = this._commonMaterials[0];
        var r = BABYLON.CSG.FromMesh(o),
            s = i.subtract(r),
            a = s.toMesh("room_global", t.material, wanaplan.engine3D.scene, !1);
        return a.parent = t.parent, o.dispose(), this.replaceRoom(t, a), a
    }, e.prototype.replaceRoom = function(t, e) {
        -1 != wanaplan.engine3D.scene.meshes.indexOf(t) && (e.name = t.name, e.id = t.id, e.parent = t.parent, e.boundingBoxes = t.boundingBoxes, e.objectInstances = t.objectInstances, e.decorate = t.decorate, e.receiveShadows = t.receiveShadows, wanaplan.engine3D.scene.lights.point.excludedMeshes.push(e), t.dispose(), this.mesh = e)
    }, e.prototype.createInstances = function(t) {
        if (t) {
            for (var e, n = [], i = [], o = [], r = 0, s = 0, a = t.subMeshes.length; a > s; s++) {
                var l = t.subMeshes[s];
                if (l.objectInstance) {
                    if (n[s] = l.objectInstance, l.boundingBox)
                        if (l.boundingBox.ceil)
                            var h = l.objectInstance.materials.ceiling;
                        else
                            var h = l.objectInstance.materials.floor;
                    else
                        var h = l.objectInstance.material;
                    o[s] = h
                } else
                    e || (e = s), r++;
                l.materialIndex = s, l.boundingBox && (i[s] = l.boundingBox)
            }
            e && t.subMeshes.splice(e, r), t.objectInstances = n, t.boundingBoxes = i, t.material.subMaterials = o
        }
    }, e
}();