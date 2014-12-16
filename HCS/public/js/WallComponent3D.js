var WallComponent3D = function() {
    var t, e = function(e) {
        BaseComponent3D.call(this, e, "WallComponent3D"), this.walls = [], this.initialized = !1, this.defaultWallTexture = null, this.priority = 10, t = this, this._defaultMaterial = new wnp.WhiteMaterial("defaultWall", wanaplan.engine3D.scene, {
            factor: 1
        })
    };
    e.prototype = new BaseComponent3D, e.prototype.onRoomsReady = function(e) {
        var n = e.floor || t.getFloor(),
            i = e.structure || t.core.getSelectedStructure();
        t.walls.length = 0;
        var o = t.draw(i);
        ujs.notify("wnp.engine3d.wallsReady", {
            floor: n,
            structure: i,
            walls: o
        })
    }, e.prototype.startListening = function() {
        document.addEventListener("wnp.engine3d.roomsReady", this.onRoomsReady, !1)
    }, e.prototype.stopListening = function() {
        document.addEventListener("wnp.engine3d.roomsReady", this.onRoomsReady, !1)
    }, e.prototype.get3DWallFrom2D = function(t) {
        return wanaplan.engine3D.scene.getMeshByName("WallMesh_" + t.id)
    }, e.prototype.replaceWall = function(t, e) {
        -1 != wanaplan.engine3D.scene.meshes.indexOf(t) && (e.name = t.name, e.id = t.id, e.boundingBoxes = t.boundingBoxes, e.objectInstances = t.objectInstances, e.decorate = t.decorate, e.receiveShadows = t.receiveShadows, t.dispose())
    };
    var n = function(t, e) {
        for (var n, i, o, r = 0, s = this.subMeshes.length; s > r; r++)
            3 * e.faceId >= this.subMeshes[r].indexStart && 3 * e.faceId < this.subMeshes[r].indexStart + this.subMeshes[r].indexCount && (n = this.objectInstances[r], n && (i = this.material.subMaterials[r].name, this.material.subMaterials[r] = t, n.materialInfo ? o = n.addMaterial(t) : "OvertureStructure" == n.name ? (o = n.material.clone(n.material.name), n.material = t) : (o = n.materials[i].clone(i), n.materials[i] = t, n.materials[i].name = i)));
        return o
    };
    return e.prototype.draw = function(t) {
        t = t || wanaplan.getSelectedStructure();
        var e = wanaplan.getComponentByName("RoomComponent2D").getInternalRooms(),
            i = wanaplan.getComponentByName("RoomComponent2D").getExternalRooms(),
            o = wanaplan.getComponentByName("MeasureComponent"),
            r = o.getInternalMeasures(),
            s = (o.getExternalMeasures(), t.getElements("walls")),
            a = wanaplan.getComponentByName("FloorComponent3D").getFloor(t),
            l = new BABYLON.Mesh("WallMesh_" + t.id, wanaplan.engine3D.scene),
            h = [],
            c = [],
            u = [],
            p = [],
            d = {};
        l.objectInstances = [], l.material = new BABYLON.MultiMaterial("wall_material", wanaplan.engine3D.scene), l.material.subMaterials.push(new wnp.WhiteMaterial("white", wanaplan.engine3D.scene), new wnp.WhiteMaterial("white", wanaplan.engine3D.scene));
        var m, g, f, y, _, v, b, w, x, C = {},
            M = 0,
            D = 0,
            B = 1;
        l.boundingBoxes = [];
        var A, E = [],
            T = new BABYLON.Vector3,
            S = new BABYLON.Vector3,
            L = function(t, e, n, i, o, r) {
                var r = r || 0;
                E.length = 0, h.push(t.x, r, -t.y, e.x, r, -e.y), E.push(t.x, r, -t.y, e.x, r, -e.y), h.push(t.x, n, -t.y, e.x, n, -e.y), E.push(t.x, n, -t.y, e.x, n, -e.y), T.copyFromFloats(e.x - t.x, r, -e.y + t.y), S.copyFromFloats(0, n, 0), A = BABYLON.Tools.PlaneUVProjection(E, T, S, 512);
                for (var s = 0, a = A.length; a > s; s++)
                    u.push(A[s]);
                o ? (w = !0, p.push(D + 3, D + 1, D), p.push(D, D + 2, D + 3)) : (p.push(D, D + 1, D + 3), p.push(D + 3, D + 2, D), w = !1)
            },
            O = function(t) {
                for (var e, n, i = 0, o = t.length; o > i; i++) {
                    m = t[i].parent, g = new BABYLON.Vector3(t[i].offsetVector.x, 0, -t[i].offsetVector.y), L(t[i].points[0], t[i].points[1], m.height, e, g), n = t[i].materialInfo && t[i].materialInfo.material ? t[i].materialInfo.material : this._defaultMaterial.clone("defaultWall"), t[i].addMaterial(n), t[i].materialIndex = B + 1, l.material.subMaterials.push(n), f = new BABYLON.Vector3(h[3 * p[3 * M + 1]], h[3 * p[3 * M + 1] + 1], h[3 * p[3 * M + 1] + 2]), y = new BABYLON.Vector3(h[3 * p[3 * M + 2]], h[3 * p[3 * M + 2] + 1], h[3 * p[3 * M + 2] + 2]), x = f.clone().lerp(y, .5), b = -Math.atan2(y.z - f.z, y.x - f.x), v = y.distanceTo(f);
                    var r = new BABYLON.Vector3(-v / 2, 0, 0).add(x),
                        s = new BABYLON.Vector3(v / 2, m.height, 0).add(x);
                    _ = new BABYLON.BoundingBox(new BABYLON.Vector3(Math.min(r.x, s.x), Math.min(r.y, s.y), Math.min(r.z, s.z)), new BABYLON.Vector3(Math.max(r.x, s.x), Math.max(r.y, s.y), Math.max(r.z, s.z))), _.angle = b, C[B] = {
                        indexStart: 3 * M,
                        indexCount: 6,
                        objectInstance: t[i],
                        boundingBox: _
                    }, B++, D += 4, M += 2, "undefined" == typeof d[m.id] && (d[m.id] = []), d[m.id].push([t[i].points[0], t[i].points[1]])
                }
            }.bind(this),
            P = wanaplan.structure.version;
        "1.2.0.1" == P && this.migrateMaterials(t.walls, r);
        for (var I = 0, N = e.length; N > I; I++)
            e[I].dispatchMaterials(), currentPanes = e[I].panes, O(currentPanes);
        for (var I = 0, N = i.length; N > I; I++)
            i[I].dispatchMaterials(), currentPanes = i[I].panes, O(currentPanes, !0);
        C[0] = {
            indexStart: 3 * M,
            indexCount: 0
        };
        for (var R = PolygonMerger.getCachedDeletedEdges(), I = 0, N = R.length; N > I; I++) {
            var k = !0;
            R[I].parent.type != R[I].parent.TYPE_SEPARATOR && (L(R[I].points[0].position, R[I].points[1].position, R[I].parent.height, 0, k, 0), C[0].indexCount += 6, D += 4, M += 2)
        }
        for (var V, F, Y, z, j = [], I = 0, N = s.length; N > I; I++)
            s[I].type !== s[I].TYPE_SEPARATOR && (V = s[I].getPolygon(), V && (F = BABYLON.Mesh.TriangulateNewMesh("wallTop", V, null, wanaplan.engine3D.scene), F && (Y = F.duplicate(), Y.invertFaces(), F.position.y = s[I].height, j.push(F), j.push(Y))));
        z = BABYLON.Mesh.mergeMeshes("wallTop", j, wanaplan.engine3D.scene), BABYLON.Mesh.ComputeFlatNormal(h, c, p), l.setVerticesData(BABYLON.VertexBuffer.PositionKind, h), l.setVerticesData(BABYLON.VertexBuffer.NormalKind, c), l.setVerticesData(BABYLON.VertexBuffer.UVKind, u), l.setIndices(p), l.subMeshes = [];
        for (var I in C) {
            var W = BABYLON.SubMesh.CreateFromIndices(+I, C[I].indexStart, C[I].indexCount, l);
            W.boundingBox = C[I].boundingBox, W.objectInstance = C[I].objectInstance
        }
        var G = BABYLON.Mesh.mergeMeshes("WallMesh_" + t.id, [z, l], wanaplan.engine3D.scene, !0);
        return G.material = l.material, G.isDecorable = !0, wanaplan.engine3D.castShadows(G), G.receiveShadows = !0, G.parent = a, G.decorate = n, this._mesh = G, G
    }, e.prototype.migrateMaterials = function(t, e) {
        for (var n, i, o, r, s = 0, a = t.length; a > s; s++)
            if (t[s].materials) {
                Logger.message("Conversion des materiaux du mur " + s);
                for (var l in t[s].materials)
                    if (r = +1 / 0, n = t[s].materials[l].centroid, i = t[s].materials[l].side, n.y = n.z, i.y = i.z, n.z = 0, i.z = 0, n) {
                        for (var h = null, c = 0, u = e.length; u > c; c++)
                            for (var p = 0, d = e[c].length; d > p; p++)
                                o = e[c][p].center().distanceTo(n), e[c][p].center().distanceTo(n) < r && e[c][p].offsetVector.dot(i) > 0 && void 0 !== t[s].materials[l].params.baseColor && (r = o, h = e[c][p]);
                        h ? (h.addMaterial(t[s].materials[l]), Logger.message("Material " + l + " : succ¨¨s.")) : Logger.message("Echec non critique pour le material " + l + " : mat¨¦riau par d¨¦faut.")
                    }
            }
        Logger.message("Conversion termin¨¦e");
        var m = wanaplan.structure.version.split(".");
        m[1] = +m[1] + 1, wanaplan.structure.version = m.join(".")
    }, e.prototype.switchTransparentStatusByStructure = function(t) {
        var e = (wanaplan.getComponentByName("FloorComponent3D").getFloor(t), this.get3DWallFrom2D(t));
        if (e)
            for (var n, i, o = 0, r = e.subMeshes.length; r > o; o++)
                n = e.subMeshes[o], i = n.getMaterial(), void 0 !== i.alternativeMaterialIndex && switchMaterialIndex(i)
    }, e.prototype.createInstances = function(t) {
        if (t) {
            for (var e = [], n = [], i = [], o = !0, r = [], s = 0, a = 0, l = t.subMeshes.length; l > a; a++) {
                var h = t.subMeshes[a];
                if (h.objectInstance) {
                    e[s] = h.objectInstance;
                    var c;
                    h.objectInstance.materialInfo ? c = h.objectInstance.materialInfo.material : "OvertureStructure" == h.objectInstance.name || "SubSlopeOvertureStructure" == h.objectInstance.name ? c = h.objectInstance.material : "SubSlopeStructure" == h.objectInstance.name && (c = o ? h.objectInstance.materials.bottom : h.objectInstance.materials.top, o = !o), h.materialIndex = s, i[s] = c, h.boundingBox && (n[s] = h.boundingBox), s++
                } else
                    0 == a || 1 == a ? (i[s] = new wnp.WhiteMaterial("white", wanaplan.engine3D.scene, {
                        factor: 0
                    }), h.materialIndex = 0, s++) : r.push(a)
            }
            for (var u = r.length - 1; u >= 0; u--)
                t.subMeshes.splice(r[u], 1);
            t.objectInstances = e, t.boundingBoxes = n, t.material.subMaterials = i
        }
    }, e
}();