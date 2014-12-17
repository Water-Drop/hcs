var OvertureComponent3D = function() {
    var t, e = 0,
        n = function(e) {
            BaseComponent3D.call(this, e, "OvertureComponent3D"), this.priority = 11, t = this, this._defaultMaterial = new hcs.WhiteMaterial("bati", hcsdesign.engine3D.scene, {
                factor: 1
            })
        };
    return n.prototype = new BaseComponent3D, n.prototype.startListening = function() {
        document.addEventListener("hcs.engine3d.wallsReady", this.onWallsReady, !1), document.addEventListener("hcs.engine3d.subslopesReady", this.onSubslopesReady, !1)
    }, n.prototype.stopListening = function() {
        document.removeEventListener("hcs.engine3d.wallsReady", this.onWallsReady, !1), document.removeEventListener("hcs.engine3d.subslopesReady", this.onSubslopesReady, !1)
    }, n.prototype.onWallsReady = function(e) {
        for (var n = e.floor || t.getFloor(), i = e.structure || t.core.getSelectedStructure(), o = e.walls || [], r = hcsdesign.getComponentByName("WallComponent3D").get3DWallFrom2D(i), s = new BABYLON.CSG.FromMesh(r), a = i.getElements("overtures"), l = new BABYLON.CSG, h = 0; h < a.length; h++)
            l.unionInPlace(t.overtureBox(a[h], i, n));
        t.carveWithOvertureMeshes(l, s, r, n);
        for (var h = 0; h < a.length; h++)
            t.createOverture(a[h], i, n);
        ujs.notify("hcs.engine3d.overturesReady", {
            floor: n,
            structure: i,
            walls: o
        })
    }, n.prototype.onSubslopesReady = function(e) {
        for (var n = e.floor || t.getFloor(), i = e.structure || t.core.getSelectedStructure(), o = e.walls || [], r = i.getElements("subslopes"), s = 0; s < r.length; s++)
            for (var a = 0; a < r[s].overtures.length; a++)
                o = t.carveSubslopeOverture(r[s], r[s].overtures[a], i, n), t.createOverture(r[s].overtures[a], i, n);
        var l = hcsdesign.engine3D.searchComponent("WallComponent3D");
        l && l.createInstances(o);
        var h = hcsdesign.engine3D.searchComponent("RoomComponent3D");
        h && h.createInstances(h.mesh), n.roomMesh = o, ujs.notify("hcs.engine3d.subslopeOverturesReady", {
            floor: n,
            structure: i,
            walls: o
        })
    }, n.prototype.createOverture = function(t, n, i) {
        function o(t) {
            t.traverse(function(t) {
                "vitre" !== t.name && (hcsdesign.engine3D.castShadows(t), t.receiveShadows = !0)
            })
        }

        function r(t, e) {
            var n = void 0 !== t.alternativeOpacity ? t.alternativeOpacity : e;
            t.alternativeOpacity = t.alpha, t.alpha = n, t.opacitySwitched = !t.opacitySwitched, t.transparent = 1 != t.alpha
        }
        var s, i = i || this.core.getComponentByName("FloorComponent3D").getFloor(n),
            a = function(n) {
                var s = n.getObject3D(hcsdesign.engine3D.scene);
                s.structure = t, s.animate = n.animate.bind(n), s.decorate = n.decorate.bind(s), o(s), s.structure.programmableInstance = n, t.programmableInstance = n, s.isDecorable = !0, s.parent = i, s.name = "Overture_" + e++;
                var a = t.programmableInstance.materials;
                if (t.programmableInstance.getDefaultMaterials && (a = ujs.mergeObjects(t.programmableInstance.getDefaultMaterials(hcsdesign.engine3D.scene), a)), t.programmableInstance.materials = a, s.initMaterials(a), t.material.opacitySwitched)
                    for (var l in n.materials)
                        n.materials.hasOwnProperty(l) && !n.materials[l].opacitySwitched && r(n.materials[l], .2)
            }.bind(this);
        switch (t.type) {
            case "Door":
                s = "Aperture.Door.js";
                break;
            case "Window":
                s = "Aperture.Window.js";
                break;
            case "Garage":
                s = "Aperture.Garage.js";
                break;
            case "Velux":
                s = "Aperture.Velux.js";
                break;
            case "Dormer":
                s = "Aperture.Dormer.js";
                break;
            default:
                s = "Aperture.js"
        }
        var l = t.programmableInstance ? t.programmableInstance.materials : null,
            h = {
                type: t.type,
                width: t.width,
                height: t.height,
                thickness: t.thickness,
                elevation: t.elevation,
                angle: -t.angle || 0,
                angleX: -t.angleX || 0,
                hinge: t.hinge,
                side: t.side,
                nbCasement: t.nbCasement,
                minsize: t.minsize,
                sliding: t.sliding,
                galandage: t.galandage,
                batiThickness: t.batiThickness,
                wallThickness: t.wallThickness,
                dormerRoof: t.dormerRoof || {},
                plinte: t.plinte,
                stretched_texture: t.stretched_texture
            };
        return hcs.Programmable.createInstance(s, h, l, t, a, !1, this.engine3D), !0
    }, n.prototype.overtureBox = function(t, e, n) {
        var e = e || this.core.getSelectedStructure(),
            n = n || this.core.getComponentByName("FloorComponent3D").getFloor(e),
            i = t.getAbsolutePos().position;
        i.z = -i.y, i.y = t.elevation + t.height / 2; {
            var o = 5,
                r = t.parentWall.getWallVector(),
                s = Math.atan2(-r.y, r.x);
            t.parentWall.thickness + o, hcsdesign.getComponentByName("WallComponent3D").get3DWallFrom2D(e)
        }
        t.material = t.material || this._defaultMaterial.clone("DefaultMaterial");
        var a = new BABYLON.Mesh.CreateBloc("CSGtemp", t.width, t.height, t.parentWall.thickness + 10, hcsdesign.engine3D.scene),
            l = a.getBoundingBox();
        l.angle = s, l.center = i, a.subMeshes[0].objectInstance = t, a.subMeshes[0].boundingBox = l, a.position = i, a.rotation.y = -s, a.parent = n;
        var h = new BABYLON.CSG.FromMesh(a);
        return a.dispose(), h
    }, n.prototype.carveWithOvertureMeshes = function(t, e, n, i) {
        var o = o || this.core.getSelectedStructure(),
            i = i || this.core.getComponentByName("FloorComponent3D").getFloor(o);
        e.subtractInPlace(t);
        var r = e.toMesh(n.name, n.material, hcsdesign.engine3D.scene, !0);
        return r.isDecorable = !0, r.parent = i, hcsdesign.getComponentByName("WallComponent3D").replaceWall(n, r), hcsdesign.engine3D.castShadows(r), r
    }, n.prototype.carveSubslopeOverture = function(t, e, n, i) {
        var n = n || this.core.getSelectedStructure(),
            i = i || this.core.getComponentByName("FloorComponent3D").getFloor(n),
            o = t.polygonPoints[2].dot(e.wallOrtho),
            r = t.polygonPoints[0].dot(e.wallOrtho),
            s = Math.atan2(o - r, -(t.hiHeight - t.lowHeight)),
            a = t.wall.thickness,
            l = -a / Math.tan(s),
            h = new BABYLON.Vector3(e.center.x, 0, -e.center.y);
        h.y = e.offset / t.offset * (-l + t.hiHeight - t.lowHeight) + t.lowHeight + l / 2;
        var c = t.wall.getWallVector(),
            u = new BABYLON.Vector2(c.y, -c.x),
            p = new BABYLON.Vector2(t.polygonPoints[2].x - t.polygonPoints[0].x, t.polygonPoints[2].y - t.polygonPoints[0].y);
        p.projectOnVector(u);
        var d = p.x * u.x + p.y * u.y;
        0 > d && (c.x = -c.x, c.y = -c.y, u.x = -u.x, u.y = -u.y);
        var m = Math.atan2(-c.y, c.x);
        e.elevation = h.y, e.angle = m, e.angleX = s;
        var g = hcsdesign.getComponentByName("WallComponent3D").get3DWallFrom2D(n),
            f = new BABYLON.Mesh.CreateBloc("CSGtemp", e.width, e.height, 20, hcsdesign.engine3D.scene),
            y = f.getBoundingBox();
        y.angle = m, y.center = h, f.material = new BABYLON.StandardMaterial("CSGtemp", hcsdesign.engine3D.scene), f.subMeshes[0].objectInstance = e, f.position = h, f.rotation.y = -m + Math.PI, f.rotation.x = s, f.parent = i;
        var _ = new BABYLON.CSG.FromMesh(g),
            v = new BABYLON.CSG.FromMesh(f),
            b = _.subtract(v);
        e.material = e.material || new BABYLON.StandardMaterial("bati", hcsdesign.engine3D.scene);
        var w = b.toMesh(g.name, g.material, hcsdesign.engine3D.scene, !0);
        return f.dispose(), w.isDecorable = !0, w.parent = i, hcsdesign.getComponentByName("WallComponent3D").replaceWall(g, w), hcsdesign.engine3D.castShadows(w), w
    }, n
}();