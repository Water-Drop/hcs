SubSlopeComponent2D = function() {
    var t = function(t) {
        BaseComponent2D.call(this, t, "SubSlopeComponent2D"), this.priority = 100, this.subSlopes = [], this.needsUpdate = !0, this._applyHeightToAll = !1, this._HANDLERADIUS = 10, this._HANDLESTATICSTYLE = "rgba(137,115,100,0.8)", this._HANDLESTYLE = this._HANDLESTATICSTYLE
    };
    return t.prototype = new BaseComponent2D, t.prototype.startListening = function() {
        this.onEditSubSlope = this.onEditSubSlope.bind(this), this.onModeSubSlopeEnd = this.onModeSubSlopeEnd.bind(this), document.addEventListener("wnp.engine2d.onEditSubSlope", this.onEditSubSlope, !1), document.addEventListener("wnp.engine2d.onModeSubSlopeEnd", this.onModeSubSlopeEnd, !1), wanaplan.engine2D.registerEventCb("SubSlopeComponent2D.static-draw", this.priority, "static-draw", wanaplan.engine2D.MODE_SUBSLOPE | wanaplan.engine2D.MODE_DRAG, null, this.onStaticDraw.bind(this), null), wanaplan.engine2D.registerEventCb("SubSlopeComponent2D.hover", this.priority, "hover", wanaplan.engine2D.MODE_SUBSLOPE, SubSlopeStructure, this.onHover.bind(this), null), wanaplan.engine2D.registerEventCb("SubSlopeComponent2D.leave", this.priority, "leave", wanaplan.engine2D.MODE_SUBSLOPE, SubSlopeStructure, this.onLeave.bind(this), null), wanaplan.engine2D.registerEventCb("SubSlopeComponent2D.dragstart", this.priority, "drag-start", wanaplan.engine2D.MODE_SUBSLOPE, SubSlopeStructure, this.onDragStart.bind(this), null), wanaplan.engine2D.registerEventCb("SubSlopeComponent2D.subslope-end", this.priority, "subslope-end", null, null, this.onSubSlopeEnd.bind(this), null), wanaplan.engine2D.registerEventCb("SubSlopeComponent2D.context-menu", this.priority, "click", wanaplan.engine2D.MODE_SUBSLOPE, SubSlopeStructure, this.onContextMenu.bind(this), null)
    }, t.prototype.stopListening = function() {
        document.removeEventListener("wnp.engine2d.onEditSubSlope", this.onEditSubSlope, !1), document.removeEventListener("wnp.engine2d.onModeSubSlopeEnd", this.onModeSubSlopeEnd, !1), wanaplan.engine2D.unregisterEventCb("SubSlopeComponent2D.static-draw"), wanaplan.engine2D.unregisterEventCb("SubSlopeComponent2D.hover"), wanaplan.engine2D.unregisterEventCb("SubSlopeComponent2D.leave"), wanaplan.engine2D.unregisterEventCb("SubSlopeComponent2D.dragstart"), wanaplan.engine2D.unregisterEventCb("SubSlopeComponent2D.subslope-end"), wanaplan.engine2D.unregisterEventCb("SubSlopeComponent2D.context-menu")
    }, t.prototype.initialize = function() {
        this.startListening();
        var t = {
            id: "subslopes",
            title: _("斜顶"),
            index: 90,
            action: "wnp.engine2d.onEditSubSlope",
            cancelAction: "wnp.engine2d.onModeSubSlopeEnd"
        };
        ujs.notify("wnp.menu.main.add", {
            item: t,
            menuPath: "0",
            position: 90
        })
    }, t.prototype.onEditSubSlope = function() {
        this.needsUpdate = !0, wanaplan.engine2D.setMode(wanaplan.engine2D.MODE_SUBSLOPE), wanaplan.engine2D.requestStaticDraw()
    }, t.prototype.onModeSubSlopeEnd = function() {
        wanaplan.engine2D.setMode(wanaplan.engine2D.MODE_NORMAL)
    }, t.prototype.onSubSlopeEnd = function() {
        wanaplan.engine2D.requestStaticDraw()
    }, t.prototype.onStaticDraw = function(t, e, n) {
        0 != (wanaplan.engine2D.getMode() & wanaplan.engine2D.MODE_SUBSLOPE) && (this.getSubSlopes(), this.update(), this.draw(t, e, n))
    }, t.prototype.onHover = function(t, e) {
        return this._HANDLESTYLE = "rgba(137,115,100,0.8)", wanaplan.engine2D.registerEventCb("SubSlopeComponent2D.dynamic-draw", this.priority, "dynamic-draw", null, null, this.onDynamicDraw.bind(this), e), wanaplan.engine2D.requestDynamicDraw(), !1
    }, t.prototype.onLeave = function() {
        this._HANDLESTYLE = "rgba(137,115,100,0.8)", wanaplan.engine2D.unregisterEventCb("SubSlopeComponent2D.dynamic-draw"), wanaplan.engine2D.requestDynamicDraw()
    }, t.prototype.onDragStart = function(t, e) {
        return wanaplan.engine2D.registerEventCb("SubSlopeComponent2D.dragging", this.priority, "dragging", wanaplan.engine2D.MODE_DRAG, null, this.onDragging.bind(this), e), wanaplan.engine2D.registerEventCb("SubSlopeComponent2D.drag-end", this.priority, "drag-end", wanaplan.engine2D.MODE_DRAG, null, this.onDragEnd.bind(this), e), !1
    }, t.prototype.onDragging = function(t, e, n, i) {
        var o = wanaplan.getSelectedStructure(),
            r = n.posDelta.scaleInPlace(1 / wanaplan.engine2D.getZoom()),
            s = r.clone().projectOnVector(i.polygonPoints[3].subtract(i.polygonPoints[2])),
            a = r.subtractInPlace(s),
            l = [];
        l[0] = i.polygonPoints[0], l[1] = i.polygonPoints[1], l[2] = i.polygonPoints[3], l[3] = i.polygonPoints[2];
        for (var h = i.overtures.length, c = 0; h > c; c++)
            if (void 0 != i.overtures[c])
                for (var u = 0; u < i.overtures[c].polygon.length; u++)
                    if (!i.overtures[c].polygon[u].isPointInPolygon(l) && a.dot(i.side[0]) < 0 && (i.overtures[c].position.x += r.x, i.overtures[c].position.y += r.y, 1 == u || 2 == u)) {
                        i.overtures[c].remove(i.overtures[c]);
                        break
                    }
        var p = i.wall.getWallVector(),
            d = new BABYLON.Vector2;
        d.x = p.y, d.y = p.x;
        for (var m = 0; m < i.neighbors.length; m++) {
            var p = i.neighbors[m].getWallVector(),
                g = new BABYLON.Vector2(r.x, r.y);
            g.projectOnVector(p);
            var f = [];
            f[0] = i.neighbors[m].subSlopes[0].polygonPoints[0], f[1] = i.neighbors[m].subSlopes[0].polygonPoints[1], f[2] = i.neighbors[m].subSlopes[0].polygonPoints[3], f[3] = i.neighbors[m].subSlopes[0].polygonPoints[2];
            for (var y = 0; y < i.neighbors[m].subSlopes[0].overtures.length; y++)
                for (var _ = 0; 4 > _; _++)
                    !i.neighbors[m].subSlopes[0].overtures[y].polygon[_].isPointInPolygon(f) && a.dot(i.side[0]) > 0 && (i.neighbors[m].subSlopes[0].overtures[y].position.x += g.x, i.neighbors[m].subSlopes[0].overtures[y].position.y += g.y)
        }
        i.offset += a.dot(i.side[0]), i.offset < 0 && (i.offset = 0);
        var v = function(t, e) {
                for (var n = 0; n < t.subSlopes.length; n++) {
                    var i = t.subSlopes[n].neighbors.indexOf(e.wall);
                    if (-1 != i)
                        return i
                }
                return -1
            },
            b = function(t, e) {
                for (var n = 0; n < t.subSlopes.length; n++) {
                    var i = t.subSlopes[n].points[1].subtract(t.subSlopes[n].points[0]),
                        o = e.subtract(t.subSlopes[n].points[0]),
                        r = i.lengthSquared(),
                        s = i.dot(o);
                    if (s >= 0 && r >= s)
                        return t.subSlopes[n]
                }
                return null
            };
        if (i.offset >= 0 && i.neighbors[0] && i.neighbors[1]) {
            var w, x, C;
            i.neighbors[0].subSlopes[0] && (w = v(i.neighbors[0], i), x = i.neighbors[0].subSlopes[0].indexClosest(i.points), -1 == w && (C = b(i.neighbors[0], i.points[x]), this.splitSubSlope(C, i))), i.neighbors[1].subSlopes[0] && (w = v(i.neighbors[1], i), x = i.neighbors[1].subSlopes[0].indexClosest(i.points), -1 == w && (C = b(i.neighbors[1], i.points[x]), this.splitSubSlope(C, i)))
        }
        for (var M = o.getElements("subslopes"), c = 0; c < M.length; c++)
            - 1 != M[c].neighbors.indexOf(i.wall) && (M[c].needsUpdate = !0);
        i.needsUpdate = !0, wanaplan.engine2D.requestStaticDraw()
    }, t.prototype.onDragEnd = function() {
        wanaplan.engine2D.requestDynamicDraw(), ujs.notify("wnp.subslope.drag-end")
    }, t.prototype.onDynamicDraw = function(t, e, n, i) {
        if (0 != (wanaplan.engine2D.getMode() & wanaplan.engine2D.MODE_SUBSLOPE)) {
            var o = BABYLON.Vector2.Lerp(i.polygonPoints[3], i.polygonPoints[2], .5);
            o.scaleInPlace(n), o.addInPlace(e)
        }
    }, t.prototype.update = function(t) {
        if ((t || wanaplan.getSelectedStructure().isDirty()) && this.getSubSlopes(!0, t), 0 != (wanaplan.engine2D.getMode() & wanaplan.engine2D.MODE_SUBSLOPE))
            for (var t = wanaplan.getSelectedStructure(), e = t.getElements("subslopes"), n = 0, i = e.length; i > n; n++)
                e[n].computePolygonPoints()
    }, t.prototype.getTargeted = function(t) {
        if (0 != (wanaplan.engine2D.getMode() & wanaplan.engine2D.MODE_SUBSLOPE)) {
            for (var e = wanaplan.getSelectedStructure(), n = e.getElements("subslopes"), i = 0; i < n.length; i++) {
                var o = BABYLON.Vector2.Lerp(n[i].polygonPoints[3], n[i].polygonPoints[2], .5);
                if (t.distanceTo(o) < this._HANDLERADIUS / wanaplan.engine2D.getZoom())
                    return n[i]
            }
            return null
        }
    }, t.prototype.getSubSlopes = function(t, e) {
        var e = e || wanaplan.getSelectedStructure(),
            n = e.getElements("subslopes");
        if (!this.needsUpdate && !t)
            return n;
        for (var i = function(t) {
                if (!(t.points.length <= 2)) {
                    for (var e, n = t.points[0], i = t.points[1].subtract(n).normalize(), o = 0, r = t.points[1].subtract(n).dot(i), s = 0, a = 1, l = 1, h = t.points.length; h > l; l++)
                        e = t.points[l].subtract(n).dot(i), o > e ? (s = l, o = e) : e > r && (a = l, r = e);
                    t.points = [t.points[s], t.points[a]], t.side = [t.side[s], t.side[a]], t.neighbors = [t.neighbors[s], t.neighbors[a]]
                }
            }, o = wanaplan.getComponentByName("RoomComponent2D").getAllSubSlopes(e), r = e.getElements("walls"), s = [], a = [], l = 0; l < r.length; l++) {
            for (var h = [], c = 0; c < r[l].subSlopes.length; c++)
                h.push({
                    offset: r[l].subSlopes[c].offset,
                    lowHeight: r[l].subSlopes[c].lowHeight,
                    hiHeight: r[l].subSlopes[c].hiHeight,
                    materials: r[l].subSlopes[c].materials,
                    overtures: r[l].subSlopes[c].overtures
                });
            r[l].subSlopes.length = 0, s.push(h), a.push(r[l])
        }
        for (var l = o.length - 1; l >= 0; l--)
            if (o[l].wall.thickness < 20)
                o.splice(l, 1);
            else if (o[l].points.length < 2)
            o.splice(l, 1);
        else if (o[l].points[1].distanceTo(o[l].points[0]) < 10)
            o.splice(l, 1);
        else {
            i(o[l]), o[l].wall.subSlopes.push(o[l]), o[l].offset = 0;
            var u = s[a.indexOf(o[l].wall)];
            if (u && u.length > 0 && u[o[l].wall.subSlopes.length - 1]) {
                var p = u[o[l].wall.subSlopes.length - 1].offset;
                o[l].offset = void 0 !== p ? p : 0;
                var d = u[o[l].wall.subSlopes.length - 1].lowHeight;
                o[l].lowHeight = void 0 !== d ? d : 0;
                var m = u[o[l].wall.subSlopes.length - 1].hiHeight;
                o[l].hiHeight = void 0 !== m ? m : 0;
                var g = u[o[l].wall.subSlopes.length - 1].materials;
                o[l].materials = void 0 !== g ? g : {};
                var f = u[o[l].wall.subSlopes.length - 1].overtures;
                o[l].overtures = void 0 !== f ? f : [];
                for (var y = o[l].overtures.slice(), c = 0; c < y.length; c++)
                    y[c].setParent(o[l])
            }
        }
        this.subSlopes = o;
        for (var l = o.length - 1; l >= 0; l--)
            o[l].computePolygonPoints();
        return e.replaceElements("subslopes", o), this.needsUpdate = !1, o
    }, t.prototype.splitSubSlope = function(t, e) {
        var n = wanaplan.getSelectedStructure(),
            i = n.getElements("subslopes"),
            o = t.indexClosest(e.points),
            r = new SubSlopeStructure,
            s = function() {
                for (var n = 10 + t.wall.thickness / 2, i = 0; i < e.wall.subSlopes.length; i++)
                    if (!(e.wall.subSlopes[i].side[0].subtract(e.side[0]).lengthSquared() < 1e-4)) {
                        if (e.wall.subSlopes[i].distanceFrom(t) < n)
                            return {
                                ss: e.wall.subSlopes[i],
                                index: t.indexClosest(e.wall.subSlopes[i].points)
                            };
                        Logger.message("Probl®®me : sous-pente adjacente non-trouv®¶e")
                    }
            },
            a = s();
        if (a) {
            var l = a.ss.side[0].dot(t.getVector()) > 0 ? 1 : 0;
            r.points = [a.ss.points[a.index], t.points[l]], t.points[l] = e.points[o], r.neighbors = [e.wall, t.neighbors[l]], t.neighbors[l] = e.wall, r.side[0] = r.side[1] = t.side[0], i.push(r), t.wall.subSlopes.push(r), r.wall = t.wall, t.needsUpdate = !0
        }
    }, t.prototype.draw = function(t, e, n) {
        for (var i = this.getSubSlopes(), o = 0, r = i.length; r > o; o++)
            this.drawOnWall(t, e, n, i[o])
    }, t.prototype.drawOnWall = function(t, e, n, i) {
        t.fillStyle = wanaplan.engine2D.symbols2D.COLOR_ACTIVE_FILL, t.strokeStyle = wanaplan.engine2D.symbols2D.COLOR_ACTIVE_STROKE, t.lineWidth = 2, t.beginPath();
        for (var o = [i.polygonPoints[0].clone(), i.polygonPoints[1].clone(), i.polygonPoints[3].clone(), i.polygonPoints[2].clone()], r = new BABYLON.Vector2, s = 0, a = i.polygonPoints.length; a > s; s++)
            r = o[s], r.scaleInPlace(n), r.addInPlace(e), r.x = Math.round(r.x), r.y = Math.round(r.y), 0 == s ? t.moveTo(r.x, r.y) : t.lineTo(r.x, r.y);
        t.fill(), i.offset > 0 && (t.closePath(), t.stroke());
        var l = o[2].lerp(o[3], .5),
            h = Math.atan2(i.side[0].y, i.side[0].x);
        wanaplan.engine2D.symbols2D.drawGrip(t, l, [!1, !1, !1, !1], 0), wanaplan.engine2D.symbols2D.drawArrows(t, l, [!1, !0, !1, !1], 12, h, !0)
    }, t.prototype.onContextMenu = function(t, e) {
        var n = [];
        n.push({
            name: "lowHeight",
            label: _("相对低的高度"),
            type: "slider",
            cast: "int",
            unit: "cm",
            value: {
                min: 1,
                max: 500,
                step: 1,
                value: e.lowHeight
            }
        }), n.push({
            name: "hiHeight",
            label: _("相对高的高度"),
            type: "slider",
            cast: "int",
            unit: "cm",
            value: {
                min: 1,
                max: 500,
                step: 1,
                value: e.hiHeight
            }
        }), n.push({
            name: "offset",
            label: _("长度"),
            type: "slider",
            cast: "int",
            unit: "cm",
            value: {
                step: 1,
                min: 0,
                max: 5e3,
                value: Math.round(e.offset)
            }
        }), n.push({
            name: "Length",
            label: _("角度"),
            type: "html",
            html: "<label>" + _("角度") + '</label><span class="field">' + Math.round(180 * Math.atan2(e.hiHeight - e.lowHeight, e.offset) / Math.PI) + "°</span>"
        }), n.push({
            name: "_applyHeightToAll",
            label: _("将高度应用到所有的斜顶"),
            type: "checkbox",
            cast: "bool",
            value: this._applyHeightToAll
        }), wanaplan.engine2D.displayContextMenu(n, e, this.onContextMenuPropertyChanged.bind(this), this.onContextMenuRemove.bind(this))
    }, t.prototype.onContextMenuPropertyChanged = function(t, e, n) {
        if (!("lowHeight" == e && n > t.hiHeight || "hiHeight" == e && n < t.lowHeight)) {
            t[e] = n;
            var i = wanaplan.getSelectedStructure(),
                o = i.getElements("walls");
            if (("hiHeight" == e || "lowHeight" == e || "_applyHeightToAll" == e) && t._applyHeightToAll) {
                for (var r = 0; r < o.length; r++)
                    for (var s = 0; s < o[r].subSlopes.length; s++)
                        o[r].subSlopes[s].lowHeight = t.lowHeight, o[r].subSlopes[s].hiHeight = t.hiHeight;
                i.height = t.height
            }
            wanaplan.engine2D.requestStaticDraw()
        }
    }, t.prototype.onContextMenuRemove = function(t) {
        var e = wanaplan.getSelectedStructure();
        t.remove(e)
    }, t
}();