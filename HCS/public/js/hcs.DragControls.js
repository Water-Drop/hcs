var wnp = window.wnp || {};
wnp.DragControls = function(t, e, n, i) {
    function o(e) {
        if (m.enabled) {
            e.preventDefault();
            var n = t.createPickingRay(e.clientX, e.clientY);
            if (m.enabled && a) {
                var i, o = n.distanceToPlane(f);
                _xyz.length > 1 ? (i = n.direction.scale(o), i.addInPlace(n.origin), i.subtractInPlace(l)) : (i = n.direction.scale(a.distance), i.addInPlace(n.origin), i.subtractInPlace(l));
                var r = a.pickedMesh.parent ? a.pickedMesh.parent.getWorldMatrix().clone() : BABYLON.Matrix.Identity();
                r.invert(), i = BABYLON.Vector3.TransformCoordinates(i, r), h.copyFrom(a.pickedMesh.position), w && (a.pickedMesh.position.x = i.x), x && (a.pickedMesh.position.y = i.y), C && (a.pickedMesh.position.z = i.z), a.pickedMesh.computeWorldMatrix(!0);
                var s = a.pickedMesh.getFloor();
                return s && s.markAsDirty(), ujs.notify("wnp.engine3d.dragcontrols.start", {selected: a}), M("drag", a), void (u === !1 ? u = 0 : 0 === u && (u = !0))
            }
            ujs.notify("wnp.engine3d.dragcontrols.move"), u = !1
        }
    }
    function r(i) {
        if (m.enabled) {
            if (i.preventDefault(), 0 === i.button) {
                var o = t.createPickingRay(i.clientX, i.clientY), r = o.intersectMeshes(t.meshes, !0, !0);
                if (r && -1 == n.indexOf(r.pickedMesh.getTopLevelObject(d)) && (r = null), r && r.hit) {
                    if (g && -1 === r.pickedMesh.name.indexOf("_girl"))
                        return;
                    console.warn("TODO : moveObject() de l'edition component pour avoir le magnetisme en event"), a = r, a.pickedMesh = a.pickedMesh.getTopLevelObject(d), f = new BABYLON.Plane(0, 1, 0, -a.pickedPoint.y);
                    var s = a.pickedMesh.parent ? a.pickedMesh.parent.getWorldMatrix().clone() : BABYLON.Matrix.Identity(), h = s.clone();
                    return h.invert(), l.copyFrom(BABYLON.Vector3.TransformCoordinates(a.pickedPoint, h)).subtractInPlace(a.pickedMesh.position), l.copyFrom(BABYLON.Vector3.TransformNormal(l, s)), e.style.cursor = "move", M("dragstart", a), void M("mousedown", a)
                }
            }
            M("mousedown", {hit: !1})
        }
    }
    function s(t) {
        if (m.enabled) {
            t.preventDefault();
            var n = !1;
            ujs.notify("wnp.engine3d.dragcontrols.end", {selected: a}), a && 1 == u ? (u = !1, n = !0, M("dragend", a), a = null) : a && (a = null), e.style.cursor = "auto", M("mouseup", {dragged: n})
        }
    }
    var a, n = n || [], l = new BABYLON.Vector3, h = new BABYLON.Vector3, c = (new BABYLON.Vector2, new BABYLON.Vector2), u = !1, p = 1;
    this.GROUPS = 0, this.OBJECTS = 1;
    var d = this.GROUPS, m = this, i = i || {}, g = !1, c = (i.offsets || {x: 0,y: 0}, {width: i.width || e.width,height: i.height || e.height}), f = new BABYLON.Plane(0, 1, 0, 0), y = !1, _ = function() {
        y || (e.addEventListener("pointermove", o, !1), e.addEventListener("pointerdown", r, !1), e.addEventListener("pointerup", s, !1), y = !0)
    }, v = function() {
        y && (e.removeEventListener("pointermove", o), e.removeEventListener("pointerdown", r), e.removeEventListener("pointerup", s), y = !1)
    };
    this.enabled = !0;
    var b = {};
    _(), this.setHardwareScaling = function(t) {
        p = t
    }, this.setDomElement = function(t) {
        v(), e = t, _()
    }, this.setDraggingMode = function(t) {
        d = t
    }, this.startEventsListening = function() {
        _()
    }, this.stopEventListening = function() {
        v()
    }, this.on = function(t, e) {
        return b[t] || (b[t] = []), b[t].push(e), m
    }, this.off = function(t, e) {
        var n = b[t];
        return n ? (n.indexOf(e) > -1 && n.splice(e, 1), m) : m
    }, this.lock = function() {
        g = !0
    }, this.unlock = function() {
        g = !1
    };
    var w, x, C, M = function(t, e, n) {
        var i = b[t];
        if (i && !n)
            for (var o = 0; o < i.length; o++)
                i[o](e)
                };
    w = x = C = !0, this.constrains = function(t) {
        return void 0 === t && (t = "xyz"), _xyz = t, w = x = C = !1, t.indexOf("x") > -1 && (w = !0), t.indexOf("y") > -1 && (x = !0), t.indexOf("z") > -1 && (C = !0), this
    }, this.addDraggable = function(t) {
        t.traverse(function(t) {
                   n.push(t)
                   })
    }, this.addUnremovableDraggable = function(t) {
        t.traverse(function(t) {
                   t._unremovableDraggable = !0, n.push(t)
                   })
    }, this.removeDraggable = function(t) {
        var e = -1;
        t.traverse(function(t) {
                   t._unremovableDraggable || (e = n.indexOf(t), n.splice(e, 1))
                   })
    }, this.resetDraggable = function() {
        var t = this;
        n.forEach(function(e) {
                  t.removeDraggable(e)
                  })
    }, this.onDocumentResize = function() {
        c = {width: window.innerWidth,height: window.innerHeight}
    }, this.setScreenSize = function(t, e) {
        c = {width: t,height: e}
    }, this.setSelectedObject = function(t) {
        a.pickedMesh = t, l.copyFrom(a.pickedPoint).subtractInPlace(a.pickedMesh.position)
    }, this.reset = function() {
        a = !1
    }, this.refreshReferentPlane = function() {
        var t = 0;
        a && (t = -a.pickedPoint.y), f = new BABYLON.Plane(0, 1, 0, t)
    }
};