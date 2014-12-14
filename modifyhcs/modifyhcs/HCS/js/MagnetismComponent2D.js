var MagnetismComponent2D = function() {
    var t = function(t) {
        BaseComponent2D.call(this, t, "MagnetismComponent2D"), this.priority = 100, this._precision = 10, this._draggedWall = null, this._magnetism = [], this._wallCandidates = [], this._wallFirstPoint = null, this._virtualPoints = {}, this.core.engine2D.registerEventCb("MagnetismComponent2D.dynamic-draw", 0, "dynamic-draw", 255 - this.core.engine2D.MODE_CONTEXTMENU - this.core.engine2D.MODE_NORMAL, null, this.onDynamicDraw.bind(this), null), this.core.engine2D.registerEventCb("MagnetismComponent2D.point-mag.mouse-move", this.priority, "mouse-move", null, null, this.onPointMagMove.bind(this), null), this.core.engine2D.registerEventCb("MagnetismComponent2D.point-mag.drag-start", this.priority, "drag-start", null, null, this.onPointMagDragStart.bind(this), null), this.core.engine2D.registerEventCb("MagnetismComponent2D.point-mag.click", this.priority, "click", null, null, this.onPointMagClick.bind(this), null), this.core.engine2D.registerEventCb("MagnetismComponent2D.wall-mag.drag-start", this.priority, "drag-start", null, null, this.onWallMagDragStart.bind(this), null)
    };
    return t.prototype = new BaseComponent2D, t.prototype.addVirtualPoint = function(t, e) {
        if (this._virtualPoints[t] || (this._virtualPoints[t] = []), e instanceof PointStructure)
            return this._virtualPoints[t].push(e), this._virtualPoints[t].length - 1;
        if (e instanceof BABYLON.Vector2) {
            var n = new PointStructure;
            return n.position = e, this._virtualPoints[t].push(n), this._virtualPoints[t].length - 1
        }
        Logger.error("Error: MagnetismComponent2D.addVirtualPoint: `point` is neither a `PointStructure` neither a `BABYLON.Vector3`.")
    }, t.prototype.removeVirtualPoint = function(t, e) {
        this._virtualPoints[t] && (null == e ? this._virtualPoints[t].length = 0 : delete this._virtualPoints[t][e])
    }, t.prototype.applyPointMag = function(t) {
        this._magFromPoint(t)
    }, t.prototype._shortCircuitMagnetism = function(t) {
        return (t.modifiers & t.MODIFIER_CTRL) > 1 ? !0 : !1
    }, t.prototype._magFromPoint = function(t, e) {
        if (!this._shortCircuitMagnetism(t)) {
            var n = (this.core.engine2D.getTranslation(), this.core.engine2D.getZoom()),
                i = this._precision / Math.sqrt(n),
                o = this.structure.getCurrentStructure().getElements("points").slice(0);
            for (var r in this._virtualPoints)
                if (this._virtualPoints[r].constructor === Array)
                    for (var s in this._virtualPoints[r])
                        o.push(this._virtualPoints[r][s]);
            var a = !1,
                l = !1;
            for (var s in o) {
                if (e instanceof PointStructure) {
                    if (o[s] == e)
                        continue;
                    var h = !1;
                    for (var c in e.parents)
                        if (!h && e.parents[c] instanceof WallStructure && e.parents[c].attachedPoints)
                            for (var u in e.parents[c].attachedPoints)
                                if (e.parents[c].attachedPoints[u] == o[s]) {
                                    h = !0;
                                    break
                                }
                    if (h)
                        continue
                }
                if ((!a && Math.abs(o[s].position.x - t.planPos.x) <= i || a && Math.abs(o[s].position.x - t.planPos.x) < 1) && (t.planPos.x = o[s].position.x, this._magnetism.push([o[s].position, t.planPos]), a = !0), (!l && Math.abs(o[s].position.y - t.planPos.y) <= i || l && Math.abs(o[s].position.y - t.planPos.y) < 1) && (t.planPos.y = o[s].position.y, this._magnetism.push([o[s].position, t.planPos]), l = !0), a && l)
                    break
            }
            this.core.engine2D.requestDynamicDraw()
        }
    }, t.prototype._globalWallMag = function(t, e) {
        var n, i, o = Math.PI / 150,
            r = 30,
            s = this.structure.getCurrentStructure().getElements("walls"),
            a = new BABYLON.Vector2,
            l = t.getWallVector().normalize(),
            h = e.planPos.clone();
        h.subtractInPlace(t.getPoints(0).position);
        for (var c = h.clone().projectOnVector(l), u = h.subtractInPlace(c), p = t.getPoints(0).position.add(u), d = (t.getPoints(1).position.add(u), function(t, e) {
                return e ? a.copyFrom(t).addInPlace(e).subtractInPlace(p).normalize() : a.copyFrom(t).subtractInPlace(p).normalize(), n = a.determinant(l), Math.abs(n) < o
            }), m = function(t, e) {
                var n = Math.PI / 100,
                    i = t.getWallVector(),
                    o = e.getWallVector(),
                    r = Math.atan(i.y, i.x) - Math.atan(o.y, o.x);
                return Math.abs(r) < n || Math.abs(r + Math.PI) < n || Math.abs(r - Math.PI) < n || Math.abs(r + 2 * Math.PI) < n || Math.abs(r - 2 * Math.PI) < n
            }, g = function(n, i) {
                var o = n.getWallVector(),
                    s = t.getNormalVector(),
                    a = i ? t.getPoints(0).position.add(i) : t.getPoints(0).position.clone(),
                    l = (o.determinant(n.getPoints(0).position) - o.determinant(a)) / o.determinant(s);
                return s.scaleInPlace(l), Math.abs(l) < r ? (e.forcePosition = i ? s.add(a).addInPlace(i) : s.add(a), !0) : !1
            }.bind(this), f = 0, y = s.length; y > f; f++)
            if (s[f] != t && m(s[f], t)) {
                if ((d(s[f].getPoints(0).position) || d(s[f].getPoints(1).position)) && g(s[f]))
                    return;
                if (s[f].thickness > t.thickness) {
                    if (i = s[f].getNormalVector((s[f].thickness - t.thickness) / 2), (d(s[f].getPoints(0).position, i) || d(s[f].getPoints(1).position, i)) && g(s[f], i))
                        return;
                    if (i.scaleInPlace(-1), (d(s[f].getPoints(0).position, i) || d(s[f].getPoints(1).position, i)) && g(s[f], i))
                        return
                }
            }
    }, t.prototype._magFromWalls = function(t, e) {
        var n = Math.PI / 18;
        if (!this._shortCircuitMagnetism(t) && this._wallFirstPoint) {
            for (var i, o = (this.core.engine2D.getTranslation(), this.core.engine2D.getZoom()), r = (this._precision / Math.sqrt(o), e || this.structure.getCurrentStructure().getElements("walls"), t.planPos.x - this._wallFirstPoint.x), s = t.planPos.y - this._wallFirstPoint.y, a = Math.atan2(s, r), l = 0, h = this._wallCandidates.length; h > l; l++)
                if (i = Math.abs(this._wallCandidates[l].angle - a) % (Math.PI / 2), n > i || Math.PI / 2 - i < n) {
                    var c;
                    i = Math.abs((this._wallCandidates[l].angle - a) % Math.PI), c = i < Math.PI / 4 || i > 3 * Math.PI / 4 ? 0 : Math.PI / 2, c += this._wallCandidates[l].angle;
                    var u = Math.cos(c),
                        p = Math.sin(c),
                        d = new BABYLON.Vector2(u, p),
                        m = new BABYLON.Vector2(r, s),
                        g = m.clone().projectOnVector(d);
                    t.planPos.copyFrom(g).addInPlace(this._wallFirstPoint);
                    break
                }
            this.core.engine2D.requestDynamicDraw()
        }
    }, t.prototype.onDynamicDraw = function(t, e, n) {
        t.lineWidth = 2, t.strokeStyle = "#009900";
        for (var i in this._magnetism) {
            var o = this._magnetism[i][0].scale(n).addInPlace(e),
                r = this._magnetism[i][1].scale(n).addInPlace(e);
            t.beginPath(), t.moveTo(Math.round(o.x), Math.round(o.y)), t.lineTo(Math.round(r.x), Math.round(r.y)), t.stroke(), t.closePath()
        }
        this._magnetism = []
    }, t.prototype.onPointMagMove = function(t, e, n) {
        this.core.engine2D.getMode() == this.core.engine2D.MODE_DRAW && (this._magFromPoint(n), this._magFromWalls(n))
    }, t.prototype.onPointMagDragStart = function(t, e, n, i) {
        (e instanceof PointStructure || this.core.engine2D.getMode() == this.core.engine2D.MODE_DRAW) && (this.onPointMagClick(t, e, n, i), this.core.engine2D.registerEventCb("MagnetismComponent2D.point-mag.draging", this.priority, "dragging", this.core.engine2D.MODE_DRAG, null, this.onPointMagDragging.bind(this), e), this.core.engine2D.registerEventCb("MagnetismComponent2D.point-mag.drag-end", this.priority, "drag-end", this.core.engine2D.MODE_DRAG, null, this.onPointMagClick.bind(this), e))
    }, t.prototype.onPointMagDragging = function(t, e, n, i) {
        this._magFromPoint(n, i), this._magFromWalls(n, i)
    }, t.prototype.onPointMagClick = function(t, e, n) {
        if (e instanceof PointStructure)
            this._magFromPoint(n, e), this._magFromWalls(n);
        else {
            if (e instanceof WallStructure && this.core.engine2D.getMode() == this.core.engine2D.MODE_NORMAL)
                return;
            this._magFromPoint(n), this._magFromWalls(n)
        }
    }, t.prototype.onWallMagDragStart = function(t, e) {
        return e instanceof WallStructure ? (this.core.engine2D.registerEventCb("MagnetismComponent2D.wall-mag.dragging", this.priority, "dragging", null, null, this.onWallMagDragging.bind(this), null), void(this._draggedWall = e)) : void(this._draggedWall = null)
    }, t.prototype.onWallMagDragging = function(t, e, n) {
        this._draggedWall && this._globalWallMag(this._draggedWall, n)
    }, t.prototype.onWallDrawStart = function(t) {
        var e = this.structure.getCurrentStructure().getElements("walls"),
            n = 15;
        this._wallCandidates.length = 0, this._wallFirstPoint = t.position;
        for (var i = 0, o = e.length; o > i; i++)
            if (e[i].distanceFrom(this._wallFirstPoint) < n) {
                var r = e[i].getWallVector();
                this._wallCandidates.push({
                    wall: e[i],
                    angle: Math.atan2(r.y, r.x)
                })
            }
    }, t.prototype.onWallDrawEnd = function() {
        this._wallFirstPoint = null
    }, t
}();