SubSlopeComponent3D = function() {
    var t, e = function(e) {
        BaseComponent3D.call(this, e, "SubSlopeComponent3D"), this.currentID = 0, t = this
    };
    return e.prototype = new BaseComponent3D, e.prototype.startListening = function() {
        document.addEventListener("wnp.engine3d.wallsReady", this.onWallsReady, !1)
    }, e.prototype.stopListening = function() {
        document.removeEventListener("wnp.engine3d.wallsReady", this.onWallsReady, !1)
    }, e.prototype.onWallsReady = function(e) {
        var n = e.floor || t.getFloor(),
            i = e.structure || t.core.getSelectedStructure();
        t.core.getComponentByName("SubSlopeComponent2D").getSubSlopes(!0), t.drawSSForStructure(i, n, wanaplan.engine3D.scene)
    }, e.prototype.buildCSG = function(t, e, n, i) {
        var o, r, s = s || !1;
        n = n || this.core.getComponentByName("FloorComponent3D").getFloor(e);
        var a = t[0].subtract(t[1]),
            l = t[3].subtract(t[2]),
            h = [],
            c = [],
            u = [],
            p = [];
        if (a.dot(l) > 0) {
            for (r = 0; r < t.length; r++)
                h.push(t[r].x, t[r].y, t[r].z);
            h.push(t[0].x, t[2].y, t[0].z), h.push(t[1].x, t[3].y, t[1].z), c.push(0, 2, 3), c.push(2, 0, 1), c.push(5, 3, 2), c.push(3, 5, 4), c.push(4, 1, 0), c.push(1, 4, 5), c.push(5, 2, 1), c.push(3, 4, 0)
        } else {
            var d = t[0].subtract(t[3]),
                m = t[3].subtract(t[2]).length(),
                g = t[1].subtract(t[0]).length(),
                f = m / g + 1,
                y = d.scale(1 / f).subtract(t[0]).scale(-1),
                _ = [t[0], t[1], y];
            for (r = 0; r < _.length; r++)
                h.push(_[r].x, _[r].y, _[r].z);
            h.push(_[2].x, t[2].y, _[2].z), h.push(t[0].x, t[2].y, t[0].z), h.push(t[1].x, t[2].y, t[1].z), c.push(0, 1, 2), c.push(2, 3, 0), c.push(3, 4, 0), c.push(1, 5, 2), c.push(3, 2, 5), c.push(4, 3, 5), c.push(1, 0, 4), c.push(1, 4, 5)
        }
        u = BABYLON.Tools.PlaneUVProjection(h, new BABYLON.Vector3(1, 0, 0), new BABYLON.Vector3(0, 0, 1)), BABYLON.Mesh.ComputeFlatNormal(h, p, c);
        var v = new BABYLON.Mesh("carveMesh", i);
        return v.setVerticesData(BABYLON.VertexBuffer.PositionKind, h, s), v.setVerticesData(BABYLON.VertexBuffer.NormalKind, p, s), v.setVerticesData(BABYLON.VertexBuffer.UVKind, u, s), v.setIndices(c), v.parent = n, o = BABYLON.CSG.FromMesh(v), v.dispose(), o
    }, e.prototype.addSubSlope = function(t, e, n, i, o, r) {
        var s, a, l, h, c, u, p, d = d || !1,
            m = [],
            g = [],
            f = [],
            y = [];
        o = o || this.core.getComponentByName("FloorComponent3D").getFloor(i);
        var _ = new wnp.WhiteMaterial("bottom", wanaplan.engine3D.scene, {
                factor: 1
            }),
            v = n.materials.bottom || _;
        n.materials.bottom || (n.materials.bottom = v), v.name = "bottom";
        var b = n.materials.top || _.clone("top");
        n.materials.top || (n.materials.top = b), b.name = "top";
        var w = e[0].subtract(e[1]),
            x = e[3].subtract(e[2]);
        if (w.dot(x) > 0) {
            for (g.push(0, 2, 3), g.push(2, 0, 1), g.push(7, 5, 4), g.push(5, 7, 6), s = 0; s < e.length; s++)
                m.push(e[s].x, e[s].y, e[s].z);
            for (s = 0; s < e.length; s++)
                m.push(e[s].x, e[s].y + .1, e[s].z);
            l = new BABYLON.Vector3(e[1].x - e[0].x, e[1].y - e[0].y, e[1].z - e[0].z), l.normalize(), h = new BABYLON.Vector3(e[2].x - e[1].x, e[2].y - e[1].y, e[2].z - e[1].z), h.normalize(), u = BABYLON.Vector3.Cross(l, h), c = BABYLON.Vector3.Cross(u, l), f = BABYLON.Tools.PlaneUVProjection(m, l, c, 512), BABYLON.Mesh.ComputeFlatNormal(m, y, g), a = new BABYLON.Mesh("subslope_" + this.currentID++, r), a.setVerticesData(BABYLON.VertexBuffer.PositionKind, m, d), a.setVerticesData(BABYLON.VertexBuffer.NormalKind, y, d), a.setVerticesData(BABYLON.VertexBuffer.UVKind, f, d), a.setIndices(g), a.subMeshes.shift(), p = BABYLON.SubMesh.CreateFromIndices(0, 0, 6, a), p.objectInstance = n, p = BABYLON.SubMesh.CreateFromIndices(1, 6, 6, a), p.objectInstance = n
        } else {
            var C = e[0].subtract(e[3]),
                M = e[3].subtract(e[2]).length(),
                D = e[1].subtract(e[0]).length(),
                B = M / D + 1,
                A = C.scale(1 / B).subtract(e[0]).scale(-1),
                E = [e[0], e[1], A];
            for (s = 0; s < E.length; s++)
                m.push(E[s].x, E[s].y, E[s].z);
            for (s = 0; s < E.length; s++)
                m.push(E[s].x, E[s].y + .1, E[s].z);
            g.push(0, 1, 2), g.push(5, 4, 3), l = new BABYLON.Vector3(e[1].x - e[0].x, e[1].y - e[0].y, e[1].z - e[0].z), l.normalize(), h = new BABYLON.Vector3(e[2].x - e[1].x, e[2].y - e[1].y, e[2].z - e[1].z), h.normalize(), u = BABYLON.Vector3.Cross(l, h), c = BABYLON.Vector3.Cross(u, l), f = BABYLON.Tools.PlaneUVProjection(m, l, c, 512), BABYLON.Mesh.ComputeFlatNormal(m, y, g), a = new BABYLON.Mesh("subslope_" + this.currentID++, r), a.setVerticesData(BABYLON.VertexBuffer.PositionKind, m, d), a.setVerticesData(BABYLON.VertexBuffer.NormalKind, y, d), a.setVerticesData(BABYLON.VertexBuffer.UVKind, f, d), a.setIndices(g), a.subMeshes.shift(), p = BABYLON.SubMesh.CreateFromIndices(0, 0, 3, a), p.objectInstance = n, p = BABYLON.SubMesh.CreateFromIndices(1, 3, 3, a), p.objectInstance = n
        }
        a.position.y = .2;
        var T = t,
            S = BABYLON.Mesh.mergeMeshes("mat", [T, a], r, !0);
        S.name = T.name, S.id = T.id, S.decorate = T.decorate, S.receiveShadows = T.receiveShadows, S.material = T.material, S.isDecorable = !0, wanaplan.engine3D.castShadows(S)
    }, e.prototype.buildFromCSG = function(t, e, n, i, o, r) {
        var s = t,
            a = e,
            l = i.clone();
        a.subtractInPlace(i);
        var h = a.toMesh("mat", s.material, r, !0);
        this.core.getComponentByName("WallComponent3D").replaceWall(s, h), h.material = s.material, h.isDecorable = !0, wanaplan.engine3D.castShadows(h);
        var c = n;
        c.subtractInPlace(l);
        var u = c.toMesh("mat", o.roomMesh.material, r, !0);
        return u.isDecorable = !0, this.core.getComponentByName("RoomComponent3D").replaceRoom(o.roomMesh, u), u.parent = o, o.roomMesh = u, h
    }, e.prototype.drawSSForStructure = function(t, e, n) {
        var i, o, r, s = [],
            a = t.getElements("subslopes"),
            l = 0,
            h = this.core.getComponentByName("WallComponent3D").get3DWallFrom2D(t),
            c = BABYLON.CSG.FromMesh(h),
            u = BABYLON.CSG.FromMesh(e.roomMesh),
            p = new BABYLON.CSG;
        for (o = 0, r = a.length; r > o; o++)
            if (i = a[o].plane(), i && (l++, s.push(i)), i) {
                var d = this.buildCSG(i, a[o], e, n);
                d ? p.unionInPlace(d) : l--
            }
        for (h = this.core.getComponentByName("WallComponent3D").get3DWallFrom2D(t), this.buildFromCSG(h, c, u, p, e, n), o = 0, r = a.length; r > o; o++)
            i = a[o].plane(), h = this.core.getComponentByName("WallComponent3D").get3DWallFrom2D(t), i && this.addSubSlope(h, i, a[o], t, e, n);
        h = this.core.getComponentByName("WallComponent3D").get3DWallFrom2D(t), h.parent = e, ujs.notify("wnp.engine3d.subslopesReady", {
            floor: e,
            structure: t,
            walls: h
        })
    }, e
}();