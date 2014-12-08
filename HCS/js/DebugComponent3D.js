var DebugComponent3D = function(t) {
    BaseComponent3D.call(this, t, "DebugComponent3D")
};
DebugComponent3D.prototype = Object.create(BaseComponent3D.prototype), DebugComponent3D.prototype.dumpSceneToFile = function() {
    var t = BABYLON.SceneSerializer.Serialize(wanaplan.engine3D.scene),
        e = JSON.stringify(t),
        n = new Blob([e], {
            type: "text/plain;charset=utf-8"
        });
    saveAs(n, "scene.babylon")
}, DebugComponent3D.prototype.marks = [], DebugComponent3D.prototype.mark = function(t, e, n, i, o) {
    var i = i || 16755200;
    Logger.message("%c Point marked with this color", "color:" + i);
    var r = new THREE.SphereGeometry(o || 5),
        s = new THREE.MeshBasicMaterial({
            color: i
        }),
        a = new THREE.Mesh(r, s);
    return this.scene.add(a), this.marks.push(a), a.position.set(t, e, n), wanaplan.engine3D.refreshRenderer(), this.marks.length - 1
}, DebugComponent3D.prototype.marklights = function() {
    Logger.message(this);
    for (var t = 0; t < this.scene.__lights.length; t++) {
        var e = this.scene.__lights[t].position;
        this.mark(e.x, e.y, e.z, 16776960)
    }
    return wanaplan.engine3D.refreshRenderer(), this.scene.__lights
}, DebugComponent3D.prototype.removemark = function(t) {
    return this.scene.remove(this.marks[t]), this.marks.splice(t, 1), t
}, DebugComponent3D.prototype.removemarks = function() {
    for (var t = 0; t < this.marks.length; t++)
        this.scene.remove(this.marks[t]);
    return this.marks = [], "done"
};
var DEBUG = DEBUG || !0;
DebugComponent3D.prototype.concatGeom = function(t) {
    var e = function(t) {
            var e = -1 / 0;
            for (var n in t.faces)
                e = Math.max(e, t.faces[n].materialIndex);
            return e
        },
        n = new THREE.Geometry,
        i = [],
        o = new THREE.MeshFaceMaterial(i),
        r = 0,
        s = function() {
            for (var s = t.children.length - 1; s >= 0; s--)
                if ("structure" == t.children[s].type)
                    for (var a in t.children[s].children)
                        if (t.children[s].children[a] instanceof THREE.Mesh && t.children[s].children[a].structure instanceof WallStructure) {
                            var l = e(t.children[s].children[a].geometry) + 1;
                            THREE.GeometryUtils.merge(n, t.children[s].children[a], r), i = i.concat(t.children[s].children[a].material.materials), r += l, t.remove(t.children[s].children[a])
                        }
            Logger.message(i), o.materials = i;
            var h = new THREE.Mesh(n, o);
            Logger.message(h.material), t.add(h), Logger.message(wanaplan.engine3D.renderer.autoUpdateObjects), wanaplan.engine3D.renderer.autoUpdateObjects = !1
        };
    s()
};