var PointComponent2D = function() {
    var t = function(t) {
        BaseComponent2D.call(this, t, "PointComponent2D"), this._SIZE = 13, this._ANGLERADIUS = 55, this.anglePointList = [], this.dragging = !1, wanaplan.engine2D.registerEventCb("PointComponent2D.double-click", this.priority, "double-click", wanaplan.engine2D.MODE_NORMAL, PointStructure, this.onDoubleClick.bind(this), null), wanaplan.engine2D.registerEventCb("PointComponent2D.hover", this.priority, "hover", wanaplan.engine2D.MODE_NORMAL | wanaplan.engine2D.MODE_DRAW, PointStructure, this.onHover.bind(this), null), wanaplan.engine2D.registerEventCb("PointComponent2D.leave", this.priority, "leave", wanaplan.engine2D.MODE_NORMAL | wanaplan.engine2D.MODE_DRAW, PointStructure, this.onLeave.bind(this), null), wanaplan.engine2D.registerEventCb("PointComponent2D.dragstart", this.priority, "drag-start", wanaplan.engine2D.MODE_NORMAL, PointStructure, this.onDragStart.bind(this), null), this.priority = 90
    };
    return t.prototype = new BaseComponent2D, BaseComponent2D.prototype.getTargeted = function(t) {
        var e = this.structure.getCurrentStructure(),
            n = e.getElements("points"),
            i = null;
        for (var o in n)
            n[o].position.distanceTo(t) < this._SIZE + 5 && (null == i ? i = n[o] : !i.isAttached(e) && n[o].isAttached(e) && (i = n[o]));
        return i
    }, t.prototype.update = function() {
        this.tryMergeAttachAll()
    }, t.prototype.tryMergeAttachAll = function(t) {
        for (var e = this.structure.getCurrentStructure(), n = e.getElements("points"), i = n.length - 1; i >= 0; i--)
            (n[i].needsUpdate || t) && (n[i].needsUpdate = !1, n[i].update(e), e.dirty())
    }, t.prototype.drawAngle = function(t, e, n, i) {
        var o, r, s, a;
        if (2 === i.parents.length)
            o = i.parents[0], r = i.parents[1], s = 0 === o.points.indexOf(i) ? o.getWallVector() : o.getWallVector().scaleInPlace(-1), a = 0 === r.points.indexOf(i) ? r.getWallVector() : r.getWallVector().scaleInPlace(-1);
        else {
            if (1 !== i.parents.length || null == i.attachedTo)
                return;
            o = i.parents[0], r = i.attachedTo, s = 0 === o.points.indexOf(i) ? o.getWallVector() : o.getWallVector().scaleInPlace(-1), a = r.getWallVector(), s.dot(a) < 0 && a.scaleInPlace(-1)
        }
        var l = s.dot(a) / (s.length() * a.length()),
            h = s.determinant(a) / (s.length() * a.length()),
            c = Math.acos(BABYLON.Math.clamp(l, -1, 1)) * (h > 0 ? 1 : -1),
            u = BABYLON.Math.NormalizeAngle(Math.atan2(s.y, s.x), !0);
        wanaplan.engine2D.symbols2D.drawAngle(t, {
            x: e.x + n * i.position.x,
            y: e.y + n * i.position.y
        }, n, this._ANGLERADIUS, u, u + c, 0 > h)
    }, t.prototype.onDynamicDraw = function(t, e, n, i) {
        var o = {
            x: e.x + i.position.x * n,
            y: e.y + i.position.y * n
        };
        wanaplan.engine2D.symbols2D.drawPointHover(t, o, n);
        for (var r = 0, s = this.anglePointList.length; s > r; r++)
            this.drawAngle(t, e, n, this.anglePointList[r])
    }, t.prototype.onDragStart = function(t, e) {
        if (e) {
            e.unAttach(this.structure.getCurrentStructure()), this.anglePointList.push(e);
            for (var n = 0, i = e.parents.length; i > n; n++)
                for (var o = 0, r = e.parents[n].points.length; r > o; o++)
                    e.parents[n].points[o] !== e && this.anglePointList.push(e.parents[n].points[o])
        }
        return this.dragging = !0, wanaplan.engine2D.registerEventCb("PointComponent2D.dragging", this.priority, "dragging", wanaplan.engine2D.MODE_DRAG, null, this.onDragging.bind(this), e), wanaplan.engine2D.registerEventCb("PointComponent2D.drag-end", this.priority, "drag-end", wanaplan.engine2D.MODE_DRAG, null, this.onDragEnd.bind(this), e), wanaplan.engine2D.registerEventCb("PointComponent2D.drag.hover", this.priority, "hover", wanaplan.engine2D.MODE_DRAG, PointStructure, this.onHover.bind(this), e), wanaplan.engine2D.registerEventCb("PointComponent2D.drag.leave", this.priority, "leave", wanaplan.engine2D.MODE_DRAG, PointStructure, this.onLeave.bind(this), e), !1
    }, t.prototype.onDragging = function(t, e, n, i) {
        0 == i.parents.length && this.onDragEnd(), i.position.copyFrom(n.planPos);
        for (var o = 0, r = i.parents.length; r > o; o++)
            i.parents[o] && (i.parents[o].needsUpdate = !0);
        wanaplan.engine2D.requestStaticDraw()
    }, t.prototype.onDragEnd = function(t, e, n, i) {
        if (this.anglePointList.length = 0, this.dragging = !1, i) {
            var o = this.structure.getCurrentStructure();
            i.unAttach(o);
            var r = i.tryMerge(o);
            r === i && i.tryAttach(o);
            var s = [r.parents[0], r.parents[1]],
                a = o.getElements("walls");
            s[0] && -1 != a.indexOf(s[0]) && (s[0] = s[0].tryMerge(o)), s[1] && -1 != a.indexOf(s[1]) && (s[1] = s[1].tryMerge(o)), s[0] && -1 != a.indexOf(s[0]) && s[0].splitAtIntersections(o), s[1] && -1 != a.indexOf(s[1]) && s[1].splitAtIntersections(o), wanaplan.getComponentByName("WallComponent2D").update(), wanaplan.getComponentByName("WallComponent2D").simplifyWalls(), this.update(), o.dirty(), wanaplan.engine2D.requestStaticDraw(), wanaplan.engine2D.unregisterEventCb("PointComponent2D.drag.hover"), wanaplan.engine2D.unregisterEventCb("PointComponent2D.drag.leave"), wanaplan.getComponentByName("WallComponent2D").update()
        }
    }, t.prototype.onHover = function(t, e, n, i) {
        var e = i || e;
        return this.dragging || this.anglePointList.push(e), wanaplan.engine2D.registerEventCb("PointComponent2D.dynamic-draw", this.priority, "dynamic-draw", null, null, this.onDynamicDraw.bind(this), e), wanaplan.engine2D.requestDynamicDraw(), !1
    }, t.prototype.onLeave = function(t, e, n, i) {
        this.dragging || (this.anglePointList.length = 0, wanaplan.engine2D.unregisterEventCb("PointComponent2D.dynamic-draw")), wanaplan.engine2D.requestDynamicDraw()
    }, t.prototype.onDoubleClick = function(t, e, n) {
        var i = wanaplan.getSelectedStructure(),
            o = wanaplan.getComponentByName("WallComponent2D", wanaplan.ENGINE_2D);
        if (e.isAttached(i)) {
            var r = e.wallAttached(i);
            n.planPos = e.position.clone(), o.onDoubleClick(t, r, n, null)
        } else {
            if (n.modifiers != n.MODIFIER_SHIFT)
                return;
            var r = null;
            for (var s in e.parents)
                e.parents[s] instanceof WallStructure && (r = e.parents[s]);
            o.onAddWall({
                wallType: r.type,
                thickness: r.thickness,
                putPoint: !0
            })
        }
        i.dirty()
    }, t
}();