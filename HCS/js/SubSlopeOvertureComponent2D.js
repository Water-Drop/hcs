SubSlopeOvertureComponent2D = function() {
    var t = function(t) {
        BaseComponent2D.call(this, t, "SubSlopeOvertureComponent2D"), this.priority = 99, this._tmpOverture = null, this._addState = 0, this._targetedAt = null, this._targetedAtSide = null, this._overture1Magnetism = null, this._overture2Magnetism = null
    };
    return t.prototype = new BaseComponent2D, t.prototype.getTargeted = function(t) {
        if (0 != (wanaplan.engine2D.getMode() & wanaplan.engine2D.MODE_SUBSLOPE)) {
            var e = this.structure.getCurrentStructure(),
                n = e.getElements("walls");
            if (!(wanaplan.engine2D.getMode() & wanaplan.engine2D.MODE_DRAG))
                for (var i = 0, o = n.length; o > i; i++)
                    for (var r = 0, s = n[i].subSlopes.length; s > r; r++)
                        for (var a = 0, l = n[i].subSlopes[r].overtures.length; l > a; a++)
                            for (var h = 0; h < n[i].subSlopes[r].overtures[a].polygon.length; h++) {
                                var c = this.isPointInOvertureSide(t, n[i].subSlopes[r].overtures[a]);
                                if (ov = n[i].subSlopes[r].overtures[a], c !== !1)
                                    return this._targetedAtSide = c, wanaplan.engine2D.requestDynamicDraw(), n[i].subSlopes[r].overtures[a];
                                if (this._targetedAtSide = null, ov.isTargeted(t))
                                    return ov
                            }
            return !1
        }
    }, t.prototype.initialize = function() {
        /*var t = {
                title: _("天窗"),
                index: 90,
                id: "Velux",
                action: "wnp.engine2d.onAddSubSlopeOverture"
            },
            e = {
                title: _("屋顶窗"),
                index: 91,
                id: "Dormer",
                action: "wnp.engine2d.onAddSubSlopeOverture"
            };
        ujs.notify("wnp.menu.main.add", {
            item: t,
            menuPath: "draw2D.subslopes",
            position: 90
        }), ujs.notify("wnp.menu.main.add", {
            item: e,
            menuPath: "draw2D.subslopes",
            position: 91
        })*/
    }, t.prototype.startListening = function() {
        this.onAddSubSlopeOverture = this.onAddSubSlopeOverture.bind(this), this.onDragEndSubSlope = this.onDragEndSubSlope.bind(this), this.onDoubleClick = this.onDoubleClick.bind(this), document.addEventListener("wnp.engine2d.onAddSubSlopeOverture", this.onAddSubSlopeOverture, !1), document.addEventListener("wnp.subslope.drag-end", this.onDragEndSubSlope, !1), wanaplan.engine2D.registerEventCb("SubSlopeOvertureComponent2D.static-draw", this.priority, "static-draw", null, null, this.onStaticDraw.bind(this), null), wanaplan.engine2D.registerEventCb("SubSlopeOvertureComponent2D.hover", this.priority, "hover", null, SubSlopeOvertureStructure, this.onHover.bind(this), null), wanaplan.engine2D.registerEventCb("SubSlopeOvertureComponent2D.leave", this.priority, "leave", null, SubSlopeOvertureStructure, this.onLeave.bind(this), null), wanaplan.engine2D.registerEventCb("SubSlopeOvertureComponent2D.drag-start", this.priority, "drag-start", wanaplan.engine2D.MODE_SUBSLOPE, SubSlopeOvertureStructure, this.onDragStart.bind(this), null), wanaplan.engine2D.registerEventCb("SubSlopeOvertureComponent2D.context-menu", this.priority, "click", wanaplan.engine2D.MODE_SUBSLOPE, SubSlopeOvertureStructure, this.onContextMenu.bind(this), null), wanaplan.engine2D.registerEventCb("SubSlopeOvertureComponent2D.drag.dynamic-draw", this.priority, "dynamic-draw", wanaplan.engine2D.MODE_DRAG, SubSlopeOvertureStructure, this.onDragDynamicDraw.bind(this), {}), this.core.engine2D.registerEventCb("SubSlopeOvertureComponent2D.double-click", this.priority, "double-click", wanaplan.engine2D.MODE_SUBSLOPE, SubSlopeOvertureStructure, this.onDoubleClick, null)
    }, t.prototype.stopListening = function() {
        document.removeEventListener("wnp.engine2d.onAddSubSlopeOverture", this.onAddSubSlopeOverture, !1), document.removeEventListener("wnp.subslope.drag-end", this.onDragEndSubSlope, !1), wanaplan.engine2D.unregisterEventCb("SubSlopeOvertureComponent2D.static-draw"), wanaplan.engine2D.unregisterEventCb("SubSlopeOvertureComponent2D.hover"), wanaplan.engine2D.unregisterEventCb("SubSlopeOvertureComponent2D.leave"), this.core.engine2D.unregisterEventCb("SubSlopeOvertureComponent2D.double-click")
    }, t.prototype.onHover = function(t, e) {
        return wanaplan.engine2D.registerEventCb("SubSlopeOvertureComponent2D.hopper.drag-start", this.priority, "drag-start", wanaplan.engine2D.MODE_NORMAL, SubSlopeOvertureStructure, this.onDragStart.bind(this), {}), wanaplan.engine2D.registerEventCb("SubSlopeOvertureComponent2D.dynamic-draw", this.priority, "dynamic-draw", wanaplan.engine2D.MODE_SUBSLOPE, null, this.onSelectionDynamicDraw.bind(this), e), wanaplan.engine2D.registerEventCb("SubSlopeOvertureComponent2D.hopper-hover.dynamic-draw", this.priority, "dynamic-draw", null, SubSlopeOvertureStructure, this.onHoverSubSlopeOverture.bind(this), e), wanaplan.engine2D.requestDynamicDraw(), !1
    }, t.prototype.onHoverSubSlopeOverture = function(t, e, n, i) {
        this.drawTarget(i, t, n)
    }, t.prototype.onDragEndSubSlope = function() {
        for (var t = this.structure.getCurrentStructure(), e = t.getElements("subslopes"), n = 0; n < e.length; n++) {
            var i = [];
            i[0] = e[n].polygonPoints[0], i[1] = e[n].polygonPoints[1], i[2] = e[n].polygonPoints[3], i[3] = e[n].polygonPoints[2];
            for (var o = 0; o < e[n].overtures.length; o++)
                for (var r = 0; 4 > r; r++)
                    if (!e[n].overtures[o].polygon[r].isPointInPolygon(i)) {
                        e[n].overtures[o].remove(), wanaplan.engine2D.requestStaticDraw();
                        break
                    }
        }
    }, t.prototype.onLeave = function() {
        wanaplan.engine2D.unregisterEventCb("SubSlopeOvertureComponent2D.dynamic-draw"), wanaplan.engine2D.requestDynamicDraw()
    }, t.prototype.onDragDynamicDraw = function(t, e, n) {
        if (wanaplan.engine2D.getMode() & wanaplan.engine2D.MODE_SUBSLOPE)
            for (var i = this.structure.getCurrentStructure(), o = i.getElements("subslopes"), r = 0; r < o.length; r++) {
                var s = new Array,
                    a = o[r].wall,
                    l = a.getWallVector().normalize(),
                    h = new BABYLON.Vector2(l.y, -l.x),
                    c = o[r].overtures.length;
                this.reorganizeSubslopes(o[r].overtures, o[r], l);
                for (var u = 0; c - 1 > u; u++)
                    s[u] = this.calculateDistance(o[r].overtures[u], o[r].overtures[u + 1], l, 1), this.drawCotes(o[r].overtures[u], o[r].overtures[u + 1], t, e, n, s[u]);
                for (var p = 0; c > p; p++)
                    if (o[r].overtures[p]) {
                        var d = this.getIntersectPoint(o[r].overtures[p], o[r], h, 2);
                        this.drawCotesSS(o[r].overtures[p], o[r], t, e, n, d, h)
                    }
                if (o[r].overtures[0]) {
                    var m = [],
                        g = this.getIntersectPoint(o[r].overtures[0], o[r], l, 0),
                        f = this.getIntersectPoint(o[r].overtures[c - 1], o[r], l, 1),
                        y = this.getIntersectPoint(o[r].overtures[0], o[r], l, 1),
                        _ = this.getIntersectPoint(o[r].overtures[c - 1], o[r], l, 0),
                        v = new BABYLON.Vector2(o[r].overtures[0].getAbsolutePosition().position.x - o[r].polygonPoints[0].x, o[r].overtures[0].getAbsolutePosition().position.y - o[r].polygonPoints[0].y);
                    v.projectOnVector(l);
                    var b = new BABYLON.Vector2(o[r].polygonPoints[0].x + v.x, o[r].polygonPoints[0].y + v.y);
                    m[1] = Math.sqrt((b.x - o[r].polygonPoints[0].x) * (b.x - o[r].polygonPoints[0].x) + (b.y - o[r].polygonPoints[0].y) * (b.y - o[r].polygonPoints[0].y));
                    var w = new BABYLON.Vector2(o[r].overtures[c - 1].getAbsolutePosition().position.x - o[r].polygonPoints[0].x, o[r].overtures[c - 1].getAbsolutePosition().position.y - o[r].polygonPoints[0].y);
                    w.projectOnVector(l);
                    var x = new BABYLON.Vector2(o[r].polygonPoints[0].x + w.x, o[r].polygonPoints[0].y + w.y);
                    m[2] = Math.sqrt((x.x - o[r].polygonPoints[0].x) * (x.x - o[r].polygonPoints[0].x) + (x.y - o[r].polygonPoints[0].y) * (x.y - o[r].polygonPoints[0].y));
                    var C = new BABYLON.Vector2(o[r].overtures[0].getAbsolutePosition().position.x - o[r].polygonPoints[1].x, o[r].overtures[0].getAbsolutePosition().position.y - o[r].polygonPoints[1].y);
                    C.projectOnVector(l);
                    var M = new BABYLON.Vector2(o[r].polygonPoints[1].x + C.x, o[r].polygonPoints[1].y + C.y);
                    m[3] = Math.sqrt((M.x - o[r].polygonPoints[1].x) * (M.x - o[r].polygonPoints[1].x) + (M.y - o[r].polygonPoints[1].y) * (M.y - o[r].polygonPoints[1].y));
                    var D = new BABYLON.Vector2(o[r].overtures[c - 1].getAbsolutePosition().position.x - o[r].polygonPoints[1].x, o[r].overtures[c - 1].getAbsolutePosition().position.y - o[r].polygonPoints[1].y);
                    D.projectOnVector(l);
                    var B = new BABYLON.Vector2(o[r].polygonPoints[1].x + D.x, o[r].polygonPoints[1].y + D.y);
                    m[4] = Math.sqrt((B.x - o[r].polygonPoints[1].x) * (B.x - o[r].polygonPoints[1].x) + (B.y - o[r].polygonPoints[1].y) * (B.y - o[r].polygonPoints[1].y));
                    for (var A = 1 / 0, E = 1; 4 >= E; E++)
                        m[E] < A && (A = m[E]);
                    Math.abs(A - m[1]) < .1 || Math.abs(A - m[4]) < .1 ? (this.drawCotesSS(o[r].overtures[0], o[r], t, e, n, g, l), this.drawCotesSS(o[r].overtures[c - 1], o[r], t, e, n, f, l)) : (this.drawCotesSS(o[r].overtures[0], o[r], t, e, n, y, l), this.drawCotesSS(o[r].overtures[c - 1], o[r], t, e, n, _, l))
                }
            }
    }, t.prototype.calculateDistance = function(t, e, n, i) {
        var o, r = new BABYLON.Vector2(e.position.x - t.position.x, e.position.y - t.position.y);
        return r.projectOnVector(n), o = Math.sqrt(r.x * r.x + r.y * r.y), o -= 0 === i ? t.height / 2 + t.height / 2 : t.width / 2 + t.width / 2
    }, t.prototype.getIntersectPoint = function(t, e, n, i) {
        var o = new BABYLON.Vector2;
        if (2 != i)
            var r = e.polygonPoints[0 + i].x,
                s = e.polygonPoints[0 + i].y,
                a = e.polygonPoints[2 + i].x,
                l = e.polygonPoints[2 + i].y;
        else
            var r = e.polygonPoints[0].x,
                s = e.polygonPoints[0].y,
                a = e.polygonPoints[1].x,
                l = e.polygonPoints[1].y;
        var h = t.getAbsolutePosition().position.x,
            c = t.getAbsolutePosition().position.y,
            u = t.getAbsolutePosition().position.x + n.x,
            p = t.getAbsolutePosition().position.y + n.y;
        if (Math.abs(a - r) > .1 && Math.abs(u - h) > .1) {
            var d = (l - s) / (a - r),
                m = (s * (a - r) - r * (l - s)) / (a - r),
                g = (p - c) / (u - h),
                f = (c * (u - h) - h * (p - c)) / (u - h);
            o.x = (f - m) / (d - g), d * ((f - m) / (d - g)) + m, o.y = d * ((f - m) / (d - g)) + m
        } else if (Math.abs(a - r) < .1)
            o.x = r, o.y = c;
        else {
            o.x = h;
            var d = (l - s) / (a - r),
                m = (s * (a - r) - r * (l - s)) / (a - r);
            o.y = d * h + m
        }
        return o
    }, t.prototype.onSelectionDynamicDraw = function(t, e, n, i) {
        var o = i.parent.wall,
            r = o.points[0].position.clone().lerp(o.points[1].position, .5).add(i.position),
            s = {
                x: r.x * n + e.x,
                y: r.y * n + e.y
            };
        wanaplan.engine2D.symbols2D.drawGrip(t, s, [!0, !0, !0, !0], 0)
    }, t.prototype.changeAddStateVelux = function() {
        this._addState = 1, wanaplan.engine2D.registerEventCb("component.add-hopper.click", this.priority, "click", wanaplan.engine2D.MODE_SUBSLOPE, null, this.onAddVeluxClick.bind(this), {}), wanaplan.engine2D.registerEventCb("component.dynamic-component.mouse-move", this.priority, "mouse-move", wanaplan.engine2D.MODE_SUBSLOPE, null, this.onMouseMove.bind(this), {}), wanaplan.engine2D.registerEventCb("component.dynamic-component.dynamic-draw", this.priority, "dynamic-draw", wanaplan.engine2D.MODE_SUBSLOPE, null, this.onDynamicDraw.bind(this), {}), wanaplan.engine2D.requestStaticDraw()
    }, t.prototype.changeAddStateSubSlopeOverture = function() {
        this._addState = 1, wanaplan.engine2D.registerEventCb("component.add-hopper.click", this.priority, "click", wanaplan.engine2D.MODE_SUBSLOPE, null, this.onAddSubSlopeOvertureClick.bind(this), {}), wanaplan.engine2D.registerEventCb("component.dynamic-component.mouse-move", this.priority, "mouse-move", wanaplan.engine2D.MODE_SUBSLOPE, null, this.onMouseMove.bind(this), {}), wanaplan.engine2D.registerEventCb("component.dynamic-component.dynamic-draw", this.priority, "dynamic-draw", wanaplan.engine2D.MODE_SUBSLOPE, null, this.onDynamicDraw.bind(this), {}), wanaplan.engine2D.requestStaticDraw()
    }, t.prototype.onAddVelux = function() {
        this._tmpOverture = new SubSlopeOvertureStructure, this._tmpOverture.type = "Velux", this.changeAddStateVelux()
    }, t.prototype.onAddSubSlopeOverture = function(t) {
        this._tmpOverture = new SubSlopeOvertureStructure, this._tmpOverture.type = t.id, t.width && (this._tmpOverture.width = t.width), t.height && (this._tmpOverture.height = t.height), this.changeAddStateSubSlopeOverture()
    }, t.prototype.onAddSubSlopeOvertureClick = function() {
        wanaplan.helpBubbleManager.display("wnp.2d.subslopeOverture-menu"), 1 == this._addState && (this._tmpOverture.parent.overtures.push(this._tmpOverture), wanaplan.engine2D.requestStaticDraw(), ujs.notify("wnp.menu.main.deselect"), this._addState = 0, this._tmpOverture = null, wanaplan.engine2D.requestDynamicDraw())
    }, t.prototype.onMouseMove = function(t, e, n) {
        if (this._tmpOverture) {
            this._tmpOverture._tmpPos = n.planPos;
            for (var i = wanaplan.getSelectedStructure(), o = i.getElements("walls"), r = 0; r < o.length; r++)
                for (var s = 0; s < o[r].subSlopes.length; s++)
                    if (o[r].subSlopes[s].isPointIn(n.planPos)) {
                        this._tmpOverture.parent = o[r].subSlopes[s];
                        var a = o[r].subSlopes[s].wall,
                            l = a.getWallVector().normalize(),
                            h = new BABYLON.Vector2(l.y, -l.x);
                        return this._tmpOverture.position.copyFrom(this._tmpOverture._tmpPos).subtractInPlace(a.points[0].position.clone().lerp(a.points[1].position, .5)), this.appliedMagnetism(this._tmpOverture, o[r].subSlopes[s], h, l), void wanaplan.engine2D.requestStaticDraw()
                    }
        }
    }, t.prototype.onContextMenu = function(t, e) {
        var n, i = [],
            o = Math.atan((e.parent.hiHeight - e.parent.lowHeight) / e.parent.offset);
        n = "Dormer" == e.type ? 2 * e.wallThickness : 0, "Dormer" != e.type && i.push({
            name: "height",
            label: _("高度"),
            type: "slider",
            cast: "int",
            unit: "cm",
            value: {
                min: 20,
                max: 500,
                step: 1,
                value: e.height
            }
        }), i.push({
            name: "width",
            label: _("宽度"),
            type: "slider",
            cast: "int",
            unit: "cm",
            value: {
                min: 20,
                max: 500,
                step: 1,
                value: Math.round(e.width) + n
            }
        }), "Dormer" == e.type && (i.push({
            name: "dormerRoofHeight",
            label: _("屋顶高度"),
            type: "slider",
            cast: "int",
            value: {
                min: 0,
                max: e.width,
                step: 1,
                value: Math.round(e.dormerRoof.height > -1 ? e.dormerRoof.height : e.width / 2)
            }
        }), i.push({
            name: "nbCasement",
            label: _("窗的个数"),
            type: "slider",
            cast: "int",
            value: {
                min: 1,
                max: 6,
                step: 1,
                value: e.nbCasement
            }
        }), i.push({
            name: "height",
            label: _("高度"),
            type: "slider",
            cast: "int",
            unit: "cm",
            value: {
                min: 20,
                max: 500,
                step: 1,
                value: Math.round(e.height * Math.sin(o))
            }
        }), i.push({
            name: "depth",
            label: _("深度"),
            type: "html",
            html: "<label>" + _("深度") + '</label><span class="field">' + Math.round(e.height * Math.cos(o)) + " cm</span>"
        })), wanaplan.engine2D.displayContextMenu(i, e, this.onContextMenuPropertyChanged.bind(this), this.onContextMenuRemove.bind(this))
    }, t.prototype.onContextMenuPropertyChanged = function(t, e, n) {
        var i = Math.atan((t.parent.hiHeight - t.parent.lowHeight) / t.parent.offset);
        if (-1 != e.indexOf("sticks_")) {
            var o = e.split("_");
            t.sticks[o[1]] = n
        } else if ("cut" == e) {
            var r = t.points[this._targetedAtSide],
                s = t.points[this._targetedAtSide + 1],
                a = r.clone().lerp(s, .5);
            t.insertPointAt(this._targetedAtSide + 1, a)
        } else if ("enable_sticks" == e)
            for (var l = 0; l < t.points.length; l++)
                t.sticks[l] = !0;
        else if ("disable_sticks" == e)
            for (var l = 0; l < t.points.length; l++)
                t.sticks[l] = !1;
        else
            "dormerRoofHeight" == e ? t.dormerRoof.height = n : t[e] = "height" == e ? n / Math.sin(i) : "width" == e && "Dormer" == t.type ? n - 2 * t.wallThickness : n;
        wanaplan.engine2D.requestStaticDraw()
    }, t.prototype.onContextMenuRemove = function(t) {
        var e = wanaplan.getSelectedStructure();
        t.remove(e), wanaplan.engine2D.requestDynamicDraw()
    }, t.prototype.onStaticDraw = function(t, e, n) {
        if (0 != (wanaplan.engine2D.getMode() & wanaplan.engine2D.MODE_SUBSLOPE))
            for (var i = wanaplan.getSelectedStructure(), o = i.getElements("walls"), r = 0; r < o.length; r++)
                for (var s = 0; s < o[r].subSlopes.length; s++)
                    for (var a = 0; a < o[r].subSlopes[s].overtures.length; a++)
                        this.draw(o[r].subSlopes[s].overtures[a], t, e, n)
    }, t.prototype.onDynamicDraw = function(t, e, n) {
        1 == this._addState && (wanaplan.engine2D.setCursorIcon(wanaplan.engine2D.symbols2D.drawCursorCheck.bind(wanaplan.engine2D.symbols2D)), this.draw(this._tmpOverture, t, e, n, !1)), this.drawMagnetism(this._overture1Magnetism, this._overture2Magnetism, t, e, n)
    }, t.prototype.onDragStart = function(t, e) {
        return wanaplan.engine2D.registerEventCb("SubSlopeOvertureComponent2D.drag-end", this.priority, "drag-end", wanaplan.engine2D.MODE_DRAG, null, this.onDragEnd.bind(this), e), wanaplan.engine2D.registerEventCb("SubSlopeOvertureComponent2D.dynamic-draw", this.priority, "dynamic-draw", wanaplan.engine2D.MODE_DRAG, null, this.onSelectionDynamicDraw.bind(this), e), wanaplan.engine2D.registerEventCb("component.dynamic-component.dynamic-draw", this.priority, "dynamic-draw", wanaplan.engine2D.MODE_SUBSLOPE, null, this.onDynamicDraw.bind(this), {}), wanaplan.engine2D.registerEventCb("SubSlopeOvertureComponent2D.dragging", this.priority, "dragging", wanaplan.engine2D.MODE_DRAG, null, this.onDraggingMove.bind(this), e), !1
    }, t.prototype.onDraggingMove = function(t, e, n, i) {
        for (var o = i.parent.wall, r = o.getWallVector().normalize(), s = new BABYLON.Vector2(r.y, -r.x), a = this.structure.getCurrentStructure(), l = a.getElements("subslopes"), h = 0; h < l.length; h++)
            l[h].isPointIn(n.planPos) && (i.wall = l[h].wall);
        var o = i.wall,
            c = (o.getWallVector().normalize(), o.points[0].position.clone().lerp(o.points[1].position, .5), n.posDelta.scale(1 / wanaplan.engine2D.getZoom())),
            u = new BABYLON.Vector2(c.x, c.y),
            p = new BABYLON.Vector2(c.x, c.y);
        if (u.projectOnVector(r), p.projectOnVector(s), null === this._targetedAtSide) {
            var d = n.planPos.subtract(i.parent.wall.points[0].position.clone().lerp(i.parent.wall.points[1].position, .5)),
                m = (new BABYLON.Vector2((c.x * r.x + c.x * s.x) / (r.x * r.x + r.y * r.y), (c.x * r.y - c.x * s.y) / (r.x * r.x + r.y * r.y)), []);
            m[0] = n.planPos.add(r.scale(i.width / 2)).add(s.scale(i.height / 2)), m[1] = n.planPos.subtract(r.scale(i.width / 2)).add(s.scale(i.height / 2)), m[2] = n.planPos.add(r.scale(i.width / 2)).subtract(s.scale(i.height / 2)), m[3] = n.planPos.subtract(r.scale(i.width / 2)).subtract(s.scale(i.height / 2)), i.parent.computePolygonPoints(), this.isInSubSlope(i.parent.polygonPoints, m, i.width, i.height) && (i.position = d, this.appliedMagnetism(i, i.parent, s, r))
        } else {
            var g = Math.atan((i.parent.hiHeight - i.parent.lowHeight) / i.parent.offset),
                f = Math.cos(g),
                y = new BABYLON.Vector2(i.parent.polygonPoints[2].x - i.parent.polygonPoints[0].x, i.parent.polygonPoints[2].y - i.parent.polygonPoints[0].y);
            y.projectOnVector(s);
            var _ = y.x * s.x + y.y * s.y;
            0 > _ && (r.x = -r.x, r.y = -r.y, s.x = -s.x, s.y = -s.y);
            var v = i.polygon[this._targetedAtSide],
                b = this._targetedAtSide + 1 < i.polygon.length ? this._targetedAtSide + 1 : 0,
                w = i.polygon[b],
                m = (new BABYLON.Vector2(v.y - w.y, w.x - v.x), []);
            if (m[0] = i.polygon[0], m[1] = i.polygon[1], m[2] = i.polygon[2], m[3] = i.polygon[3], this._targetedAtSide % 2 === 0) {
                i.position.addInPlace(u.scale(.5));
                var x = r.dot(u) > 0 ? 1 : -1,
                    C = 0 === this._targetedAtSide ? 1 : -1;
                i.width += C * x * u.length(), this.appliedMagnetism(i, i.parent, s, r)
            } else {
                i.position.addInPlace(p.scale(.5));
                var x = s.dot(p) > 0 ? 1 : -1,
                    C = 1 === this._targetedAtSide ? -1 : 1;
                i.height += 1 / f * C * x * p.length()
            }
        }
        return i.modified = !0, wanaplan.engine2D.requestStaticDraw(), !1
    }, t.prototype.onDoubleClick = function(t, e) {
        return this.core.helpBubbleManager.display("wnp.2d.dup-overture"), this.onAddSubSlopeOverture({
            id: e.type,
            width: e.width,
            height: e.height
        }), !0
    }, t.prototype.isInSubSlope = function(t, e) {
        var n = [];
        return n[0] = t[0], n[1] = t[1], n[2] = t[3], n[3] = t[2], e[0].isPointInPolygon(n) && e[1].isPointInPolygon(n) && e[2].isPointInPolygon(n) && e[3].isPointInPolygon(n) ? !0 : !1
    }, t.prototype.appliedMagnetism = function(t, e, n) {
        var i = [];
        i.push(t);
        for (var o, r = 0; r < e.overtures.length; r++)
            if (e.overtures[r].id != t.id && (o = n.x * (e.overtures[r].position.x - t.position.x) + n.y * (e.overtures[r].position.y - t.position.y), Math.abs(o) < 6)) {
                i.push(e.overtures[r]);
                var s = new BABYLON.Vector2;
                s.x = e.overtures[r].position.x - t.position.x, s.y = e.overtures[r].position.y - t.position.y, s.projectOnVector(n), t.position.addInPlace(s.scale(1)), this._overture1Magnetism = t, this._overture2Magnetism = e.overtures[r]
            }
    }, t.prototype.appliedSideMagnetism = function(t, e, n, i, o) {
        if (3 == o)
            for (var r = 0; r < e.overtures.length; r++) {
                var s = n.length(),
                    a = t.height / (2 * s),
                    l = e.overtures[r].height / (2 * s),
                    h = new BABYLON.Vector2(t.position.x + n.x * a, t.position.y + n.y * a),
                    c = new BABYLON.Vector2(e.overtures[r].position.x + n.x * l, e.overtures[r].position.y + n.y * l),
                    u = new BABYLON.Vector2(h.x - c.x, h.y - c.y);
                if (e.overtures[r].id != t.id && Math.abs(u.x * n.x + u.y * n.y) < 7) {
                    u.projectOnVector(n);
                    var p = n.dot(u) > 0 ? -1 : 1;
                    t.height += p * u.length(), t.position.x -= .5 * u.x, t.position.y -= .5 * u.y
                }
            } else
                for (var r = 0; r < e.overtures.length; r++) {
                    var s = n.length(),
                        a = -t.height / (2 * s),
                        l = -e.overtures[r].height / (2 * s),
                        h = new BABYLON.Vector2(t.position.x + n.x * a, t.position.y + n.y * a),
                        c = new BABYLON.Vector2(e.overtures[r].position.x + n.x * l, e.overtures[r].position.y + n.y * l),
                        u = new BABYLON.Vector2(h.x - c.x, h.y - c.y);
                    if (e.overtures[r].id != t.id && Math.abs(u.x * n.x + u.y * n.y) < 7) {
                        u.projectOnVector(n);
                        var p = n.dot(u) > 0 ? 1 : -1;
                        t.height += p * u.length(), t.position.x -= .5 * u.x, t.position.y -= .5 * u.y
                    }
                }
    }, t.prototype.reorganizeSubslopes = function(t, e, n) {
        for (var i = n, o = (new BABYLON.Vector2(i.y, -i.x), []), r = (i.x * (e.polygonPoints[0].x - e.polygonPoints[1].x) + i.y * (e.polygonPoints[0].y - e.polygonPoints[1].y), 0); r < t.length; r++) {
            var s = new BABYLON.Vector2(t[r].position.x - e.polygonPoints[0].x, t[r].position.y - e.polygonPoints[0].y);
            s.projectOnVector(i);
            var a = new BABYLON.Vector2(e.polygonPoints[0].x + s.x, e.polygonPoints[0].y + s.y),
                l = Math.sqrt((a.x - e.polygonPoints[0].x) * (a.x - e.polygonPoints[0].x) + (a.y - e.polygonPoints[0].y) * (a.y - e.polygonPoints[0].y));
            o.push(l)
        }
        for (var h = 1; h < o.length; h++) {
            for (var c = o[h], u = t[h], p = h; p > 0 && o[p - 1] > c;)
                o[p] = o[p - 1], t[p] = t[p - 1], p--;
            o[p] = c, t[p] = u
        }
    }, t.prototype.onDragEnd = function(t, e, n, i) {
        wanaplan.engine2D.unregisterEventCb("SubSlopeOvertureComponent2D.dynamic-draw"), wanaplan.engine2D.requestStaticDraw(), this.checkCoherence(i), this._overture1Magnetism = null, this._overture2Magnetism = null
    }, t.prototype.checkCoherence = function(t) {
        t.width < 0 && (t.width = -t.width), t.height < 0 && (t.height = -t.height)
    }, t.prototype.isPointInOvertureSide = function(t, e) {
        for (var n = 0; n < e.polygon.length; n++) {
            var i = e.polygon[n].clone(),
                o = n + 1 < e.polygon.length ? e.polygon[n + 1] : e.polygon[0],
                r = Math.abs(i.distanceTo(t) + o.distanceTo(t) - i.distanceTo(o));
            if (1 > r)
                return n
        }
        return !1
    }, t.prototype.drawTarget = function(t, e, n) {
        if (null !== this._targetedAt) {
            var i = wanaplan.engine2D.toRealCoord(t.polygon[this._targetedAt]);
            wanaplan.engine2D.symbols2D.drawPointHover(e, i, n)
        } else if (null !== this._targetedAtSide) {
            var o = wanaplan.engine2D.toRealCoord(t.polygon[this._targetedAtSide]),
                r = wanaplan.engine2D.toRealCoord(this._targetedAtSide + 1 < t.polygon.length ? t.polygon[this._targetedAtSide + 1] : t.polygon[0]);
            wanaplan.engine2D.symbols2D.drawSegment(e, o, r)
        }
    }, t.prototype.draw = function(t, e, n, i, o) {
        if (e.save(), e.beginPath(), o ? (e.fillStyle = wanaplan.engine2D.symbols2D.COLOR_ACTIVE_FILL, e.strokeStyle = wanaplan.engine2D.symbols2D.COLOR_ACTIVE_STROKE_DARKER) : (e.fillStyle = wanaplan.engine2D.symbols2D.COLOR_INACTIVE_FILL, e.strokeStyle = wanaplan.engine2D.symbols2D.COLOR_INACTIVE_STROKE), null !== t.position && null !== t.parent) {
            var r = t.parent.wall,
                s = r.getWallVector().normalize(),
                a = new BABYLON.Vector2(s.y, -s.x),
                l = new BABYLON.Vector2(r.subSlopes[0].polygonPoints[2].x - r.subSlopes[0].polygonPoints[0].x, r.subSlopes[0].polygonPoints[2].y - r.subSlopes[0].polygonPoints[0].y);
            l.projectOnVector(a);
            var h = l.x * a.x + l.y * a.y;
            0 > h && (s.x = -s.x, s.y = -s.y, a.x = -a.x, a.y = -a.y);
            var c = r.points[0].position.clone().lerp(r.points[1].position, .5).add(t.position),
                u = 40 * t.parent.offset / (t.parent.hiHeight - t.parent.lowHeight);
            t.offset = t.position.dot(a), t.wallOrtho = a, t.center = c;
            var p = Math.atan((t.parent.hiHeight - t.parent.lowHeight) / t.parent.offset),
                d = Math.cos(p);
            "Dormer" == t.type ? (t.polygon[0] = c.add(s.scale(t.width / 2)).add(a.scale(t.height / (2 / d))).add(s.scale(t.wallThickness)), t.polygon[1] = c.add(s.scale(t.width / 2)).subtract(a.scale(t.height / (2 / d))).subtract(a.scale(t.wallThickness)).add(s.scale(t.wallThickness)), t.polygon[2] = c.subtract(s.scale(t.width / 2)).subtract(a.scale(t.height / (2 / d))).subtract(a.scale(t.wallThickness)).subtract(s.scale(t.wallThickness)), t.polygon[3] = c.subtract(s.scale(t.width / 2)).add(a.scale(t.height / (2 / d))).subtract(s.scale(t.wallThickness))) : (t.polygon[0] = c.add(s.scale(t.width / 2)).add(a.scale(t.height / (2 / d))), t.polygon[1] = c.add(s.scale(t.width / 2)).subtract(a.scale(t.height / (2 / d))), t.polygon[2] = c.subtract(s.scale(t.width / 2)).subtract(a.scale(t.height / (2 / d))), t.polygon[3] = c.subtract(s.scale(t.width / 2)).add(a.scale(t.height / (2 / d))));
            var m = c.add(a.scale(t.height / (2 / d) + u)),
                g = c.subtract(a.scale(t.height / (2 / d))),
                f = wanaplan.engine2D.toRealCoord(t.polygon[0], n, i),
                y = wanaplan.engine2D.toRealCoord(t.polygon[1], n, i),
                _ = wanaplan.engine2D.toRealCoord(t.polygon[2], n, i),
                v = wanaplan.engine2D.toRealCoord(t.polygon[3], n, i),
                b = wanaplan.engine2D.toRealCoord(m, n, i),
                w = wanaplan.engine2D.toRealCoord(g, n, i);
            "Velux" == t.type ? (e.moveTo(Math.round(f.x) + .5, Math.round(f.y) + .5), e.lineTo(Math.round(y.x) + .5, Math.round(y.y) + .5), e.lineTo(Math.round(_.x) + .5, Math.round(_.y) + .5), e.lineTo(Math.round(v.x) + .5, Math.round(v.y) + .5)) : (e.moveTo(Math.round(b.x) + .5, Math.round(b.y) + .5), e.lineTo(Math.round(v.x) + .5, Math.round(v.y) + .5), e.lineTo(Math.round(_.x) + .5, Math.round(_.y) + .5), e.lineTo(Math.round(y.x) + .5, Math.round(y.y) + .5), e.lineTo(Math.round(f.x) + .5, Math.round(f.y) + .5), e.lineTo(Math.round(b.x) + .5, Math.round(b.y) + .5), e.lineTo(Math.round(w.x) + .5, Math.round(w.y) + .5)), e.closePath(), e.fill(), e.stroke(), e.restore()
        }
    }, t.prototype.drawMagnetism = function(t, e, n, i, o) {
        if (n.save(), n.beginPath(), n.fillStyle = wanaplan.engine2D.symbols2D.COLOR_ACTIVE_FILL, n.strokeStyle = wanaplan.engine2D.symbols2D.COLOR_ACTIVE_STROKE, null !== t) {
            var r = t.getAbsolutePosition().position,
                s = e.getAbsolutePosition().position,
                a = wanaplan.engine2D.toRealCoord(r, i, o),
                l = wanaplan.engine2D.toRealCoord(s, i, o),
                h = t.parent.wall,
                c = h.getWallVector().normalize(),
                u = Math.abs(c.x * (r.y - s.y)),
                p = Math.abs(c.y * (r.x - s.x));
            Math.abs(u - p) < .01 && (n.moveTo(a.x, a.y), n.lineTo(l.x, l.y))
        }
        n.closePath(), n.fill(), n.stroke(), n.restore()
    }, t.prototype.drawCotes = function(t, e, n, i, o, r) {
        n.fillStyle = wanaplan.engine2D.symbols2D.COLOR_INACTIVE_FILL, n.strokeStyle = wanaplan.engine2D.symbols2D.COLOR_INACTIVE_STROKE;
        var s = t.parent.wall,
            a = s.getWallVector().normalize(),
            l = new BABYLON.Vector2(a.y, -a.x),
            h = t.getAbsolutePosition().position,
            c = e.getAbsolutePosition().position,
            u = h.add(c).scaleInPlace(.5),
            p = a,
            d = l,
            m = h.dot(p),
            g = c.dot(p);
        if (m > g) {
            var f = g;
            g = m, m = f, m += e.width / 2 + ("Dormer" == e.type ? e.wallThickness : 0), g -= t.width / 2 + ("Dormer" == t.type ? t.wallThickness : 0)
        } else
            m += t.width / 2 + ("Dormer" == t.type ? t.wallThickness : 0), g -= e.width / 2 + ("Dormer" == e.type ? e.wallThickness : 0);
        var y = u.dot(d),
            _ = new BABYLON.Vector2(p.x * m + d.x * y, p.y * m + d.y * y),
            v = new BABYLON.Vector2(p.x * g + d.x * y, p.y * g + d.y * y),
            b = wanaplan.engine2D.toRealCoord(_, i, o),
            w = wanaplan.engine2D.toRealCoord(v, i, o),
            x = Math.round(r) / 100;
        wanaplan.engine2D.symbols2D.drawMeasure(n, b, w, x + "m"), n.closePath(), n.fill(), n.stroke(), n.restore()
    }, t.prototype.drawCotesSS = function(t, e, n, i, o, r, s) {
        n.fillStyle = wanaplan.engine2D.symbols2D.COLOR_INACTIVE_FILL, n.strokeStyle = wanaplan.engine2D.symbols2D.COLOR_INACTIVE_STROKE;
        var a = t.parent.wall,
            l = a.getWallVector().normalize(),
            h = new BABYLON.Vector2(l.y, -l.x),
            c = t.getAbsolutePosition().position,
            u = r,
            p = Math.atan((e.hiHeight - e.lowHeight) / e.offset),
            d = Math.cos(p),
            m = new BABYLON.Vector2(c.x - u.x, c.y - u.y);
        if (Math.abs(s.x * h.x + s.y * h.y) < .1)
            if ("Dormer" == t.type) {
                c = c.subtract(m.normalize().scale(t.width / 2 + t.wallThickness));
                var g = 0
            } else {
                c = c.subtract(m.normalize().scale(t.width / 2));
                var g = 0
            } else if ("Dormer" == t.type) {
            c = c.subtract(m.normalize().scale(d * t.height / 2)).subtract(h.scale(t.wallThickness));
            var g = Math.atan((e.hiHeight - e.lowHeight) / e.offset)
        } else {
            c = c.subtract(m.normalize().scale(d * t.height / 2));
            var g = Math.atan((e.hiHeight - e.lowHeight) / e.offset)
        }
        var f = Math.sqrt((r.x - c.x) * (r.x - c.x) + (r.y - c.y) * (r.y - c.y)) / Math.cos(g);
        f = Math.round(f) / 100;
        var y = wanaplan.engine2D.toRealCoord(c, i, o),
            _ = wanaplan.engine2D.toRealCoord(u, i, o);
        wanaplan.engine2D.symbols2D.drawMeasure(n, y, _, f + "m"), n.closePath(), n.fill(), n.stroke(), n.restore()
    }, t
}();