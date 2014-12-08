var WallComponent2D = function() {
    var t = function(t) {
        BaseComponent2D.call(this, t, "WallComponent2D"), this.TYPE_NORMAL = 1, this.TYPE_SEPARATOR = 2, this._COLORS = ["#333333", "#616161", "#BEBEBE", "#EEEEEE"], this._PATTERNS = [null, null, null, null], this._PATTERN_IMGS = [new Image, new Image, null, null], this._PATTERN_IMGS[0].addEventListener("load", function() {
            this._PATTERNS[0] = wanaplan.engine2D.canvas.getContext("2d").createPattern(this._PATTERN_IMGS[0], "repeat"), wanaplan.engine2D.requestStaticDraw()
        }.bind(this), !1), this._PATTERN_IMGS[1].addEventListener("load", function() {
            this._PATTERNS[1] = wanaplan.engine2D.canvas.getContext("2d").createPattern(this._PATTERN_IMGS[1], "repeat"), wanaplan.engine2D.requestStaticDraw()
        }.bind(this), !1), this._PATTERN_IMGS[0].src = wnp.Assets.globalPath + "js/Components/CoreComponents/Wall/Images/pattern.png", this._PATTERN_IMGS[1].src = wnp.Assets.globalPath + "js/Components/CoreComponents/Wall/Images/pattern_tmp.png", this.priority = 10, this._tmpWall = null, this._tmpThickness = 20, this._tmpType = this.TYPE_NORMAL, this._tmpDragStartPt = null, this._lastPlanPos = new BABYLON.Vector3, this._updateList = [], this._applyHeightToAll = !1, this._minWallLengthRatio = .01, this._draggingMinWallLengthRatio = .5, this.displayMesure = !0
    };
    return t.prototype = new BaseComponent2D, t.WALL_OFFSET = 10, t.prototype.startListening = function() {
        this.onAddWall = this.onAddWall.bind(this), this.onAddWallEnd = this.onAddWallEnd.bind(this), document.addEventListener("wnp.engine2d.onAddWall", this.onAddWall, !1), document.addEventListener("wnp.engine2d.onAddWallEnd", this.onAddWallEnd, !1), this.core.engine2D.registerEventCb("WallComponent2D.static-draw", this.priority, "static-draw", null, null, this.onStaticDraw.bind(this), null), this.core.engine2D.registerEventCb("WallComponent2D.hover", this.priority, "hover", this.core.engine2D.MODE_NORMAL | this.core.engine2D.MODE_DRAW | this.core.engine2D.MODE_CONTEXTMENU, WallStructure, this.onHover.bind(this), null), this.core.engine2D.registerEventCb("WallComponent2D.leave", this.priority, "leave", this.core.engine2D.MODE_NORMAL | this.core.engine2D.MODE_DRAW | this.core.engine2D.MODE_CONTEXTMENU, WallStructure, this.onLeave.bind(this), null), this.core.engine2D.registerEventCb("WallComponent2D.double-click", this.priority, "double-click", this.core.engine2D.MODE_NORMAL, WallStructure, this.onDoubleClick.bind(this), null), this.core.engine2D.registerEventCb("WallComponent2D.context-menu", this.priority, "click", this.core.engine2D.MODE_NORMAL, WallStructure, this.onContextMenu.bind(this), null), GlobalHelper.isMobileDevice() && wanaplan.engine2D.registerEventCb("WallComponent2D.mobile-drag-start", this.priority, "drag-start", wanaplan.engine2D.MODE_NORMAL, null, this.onMobileDragStart.bind(this), null)
    }, t.prototype.stopListening = function() {
        document.removeEventListener("wnp.engine2d.onAddWall", this.onAddWall, !1), document.removeEventListener("wnp.engine2d.onAddWallEnd", this.onAddWallEnd, !1), this.core.engine2D.unregisterEventCb("WallComponent2D.static-draw"), this.core.engine2D.unregisterEventCb("WallComponent2D.hover"), this.core.engine2D.unregisterEventCb("WallComponent2D.leave"), this.core.engine2D.unregisterEventCb("WallComponent2D.double-click"), this.core.engine2D.unregisterEventCb("WallComponent2D.context-menu"), GlobalHelper.isMobileDevice() && wanaplan.engine2D.unregisterEventCb("WallComponent2D.drag-start")
    }, t.prototype.initialize = function() {
        this.startListening();
        var t = {
            title: _("房间和墙"),
            id: "rooms_walls",
            items: [
                {
                    title: _("承重墙"),
                    action: "wnp.engine2d.onAddWall",
                    cancelAction: "wnp.engine2d.onAddWallEnd",
                    params: {
                        wallType: this.TYPE_NORMAL,
                        thickness: 30,
                        putPoint: !1
                    }
                },
                {
                    title: _("墙"),
                    action: "wnp.engine2d.onAddWall",
                    cancelAction: "wnp.engine2d.onAddWallEnd",
                    params: {
                        wallType: this.TYPE_NORMAL,
                        thickness: 7,
                        putPoint: !1
                    }
                }/*,
                {
                    title: _("房间分割线"),
                    cancelAction: "wnp.engine2d.onAddWallEnd",
                    action: "wnp.engine2d.onAddWall",
                    params: {
                        wallType: this.TYPE_SEPARATOR,
                        thickness: .2,
                        putPoint: !1
                    }
                }*/
            ]};
        ujs.notify("wnp.menu.main.add", {item: t,menuPath: "draw2D",position: .5})
    }, t.prototype.update = function(t) {
        var e, n = t || this.structure.getCurrentStructure(),
            i = n.getElements("walls");
        this._updateList.length = 0;
        for (var o = i.length - 1; o >= 0; o--)
            i[o].needsUpdate && (this._updateList.push(i[o]), i[o].needsUpdate = !1);
        for (var o = this._updateList.length - 1; o >= 0; o--) {
            for (var r = 0; 2 > r; r++)
                1 == this._updateList[o].getPoints(r).parents.length && this._updateList[o].computeDefault(r);
            this._updateList[o].computeCp && this._updateList[o].computeCp()
        }
        for (var o = this._updateList.length - 1; o >= 0; o--)
            for (var r = 0; 2 > r; r++)
                if (2 == this._updateList[o].getPoints(r).parents.length)
                    for (var s = 0; 2 > s; s++)
                        e = this._updateList[o].getPoints(r).parents[s].getPoints().indexOf(this._updateList[o].getPoints(r)), this._updateList[o].getPoints(r).parents[s].computeStrong(e);
        for (var o = this._updateList.length - 1; o >= 0; o--) {
            for (var r = 0; 2 > r; r++)
                this._updateList[o].getPoints(r).attachedTo && this._updateList[o].computeWeak(r);
            this._updateList[o].needsUpdate = !1, this._updateList[o].update(n)
        }
        this._updateList.length && n.dirty()
    }, t.prototype.getTargeted = function(t) {
        var e = this.structure.getCurrentStructure().getElements("walls");
        for (var n in e)
            if (e[n].isTargeted(t))
                return e[n];
        return null
    }, t.prototype.simplifyWalls = function() {
        for (var t = this.structure.getCurrentStructure(), e = t.getElements("walls"), n = t.getElements("points"), i = e.length - 1; i >= 0; i--) {
            var o, r;
            e[i].getLength() < this._minWallLengthRatio * e[i].thickness && (o = e[i].points[0], r = e[i].points[1], e[i].remove(t), -1 != n.indexOf(o) && o.forceMerge(r, t))
        }
    }, t.prototype._drawWall = function(t, e, n, i, o) {
        var o = o || {},
            r = (o.measureDisplayed === !1 ? !1 : !0, o.styleId || 0);
        t.fillStyle = this._PATTERNS[r] || this._COLORS[r], t.strokeStyle = this._COLORS[r], t.save(), t.translate(e.x, e.y), t.scale(n, n), i.draw(t), t.restore()
    }, t.prototype._drawMeasures = function(t, e, n) {
        wanaplan.getComponentByName("MeasureComponent").draw(t, e, n)
    }, t.prototype._addWallFirstPoint = function(t, e) {
        var n = wanaplan.getComponentByName("MagnetismComponent2D", wanaplan.ENGINE_2D),
            i = (wanaplan.getComponentByName("PointComponent2D", wanaplan.ENGINE_2D), wanaplan.getSelectedStructure());
        this._tmpWall = new PolygonWall, this._tmpWall.height = i.height, this._tmpWall.thickness = this._tmpThickness, this._tmpWall.type = this._tmpType || this._tmpWall.TYPE_NORMAL;
        var o = e || new PointStructure,
            r = new PointStructure;
        e || (o.position = t.planPos.clone()), r.position = t.planPos.clone(), e || (n && n.addVirtualPoint(this.name, o), wanaplan.engine2D.setEnableAutoScroll(!0)), n && n.onWallDrawStart(o), this._tmpWall.setPoints([o, r]), wanaplan.engine2D.requestStaticDraw()
    }, t.prototype._addWallNewPoint = function(t) {
        {
            var e = wanaplan.getSelectedStructure(),
                n = wanaplan.getComponentByName("MagnetismComponent2D", wanaplan.ENGINE_2D);
            wanaplan.getComponentByName("PointComponent2D", wanaplan.ENGINE_2D)
        }
        n.removeVirtualPoint(this.name, null), this._tmpWall.getPoints(1).position = t.planPos.clone(), this._tmpWall.addToStructure(e);
        var i = !1,
            o = this._tmpWall.tryMerge(e);
        for (var r in this._tmpWall.points) {
            var s = o.points[r],
                a = o.points[r].tryMerge(e);
            s != a && (a.parents[0].update(e), a.parents[1].update(e), 1 == r && (i = !0))
        }
        return o.splitAtIntersections(e), i
    }, t.prototype._addWallUpdate = function(t) {
        var e = this._tmpWall.getPoints(1);
        e.position = t.planPos.clone(), this._tmpWall.setPoints(e, 1), this._tmpWall.needsUpdate = !0, wanaplan.engine2D.requestDynamicDraw()
    }, t.prototype.onStaticDraw = function(t, e, n) {
        var i = !1;
        if (i = this.structure.getElement(+this.structure.getCurrentStructure().id - 1))
            for (var o = i.getElements("walls"), r = 0; r < o.length; r++)
                if (o[r].thickness >= 15) {
                    var s = {
                        measureDisplayed: !1,
                        styleId: 3
                    };
                    this._drawWall(t, e, n, o[r], s)
                }
        var a = this.structure.getCurrentStructure().getElements("walls");
        for (var r in a) {
            var s = {
                styleId: a[r].type == a[r].TYPE_SEPARATOR ? 2 : 0
            };
            this._drawWall(t, e, n, a[r], s)
        }
        this.displayMesure && (wanaplan.getComponentByName("MeasureComponent").buildFromRooms(wanaplan.getSelectedStructure().internalRooms, wanaplan.getSelectedStructure().externalRooms), this._drawMeasures(t, e, n))
    }, t.prototype.onDragStart = function(t, e, n) {
        return e.targeted = e && e.isTargeted(n.planPos) instanceof BABYLON.Vector3 ? e.cp : !1, this._lastPlanPos.copyFrom(n.planPos), wanaplan.engine2D.registerEventCb("WallComponent2D.dragging", this.priority, "dragging", wanaplan.engine2D.MODE_DRAG, null, this.onDragging.bind(this), e), wanaplan.engine2D.registerEventCb("WallComponent2D.drag-end", this.priority, "drag-end", wanaplan.engine2D.MODE_DRAG, null, this.onDragEnd.bind(this), e), wanaplan.engine2D.registerEventCb("WallComponent2D.dynamic-draw", this.priority, "dynamic-draw", wanaplan.engine2D.MODE_DRAG, null, this.onSelectionDynamicDraw.bind(this), e), wanaplan.engine2D.registerEventCb("WallComponent2D.drag.hover", this.priority, "hover", wanaplan.engine2D.MODE_DRAG, WallStructure, this.onHover.bind(this), e), wanaplan.engine2D.registerEventCb("WallComponent2D.drag.leave", this.priority, "leave", wanaplan.engine2D.MODE_DRAG, WallStructure, this.onLeave.bind(this), e), !1
    }, t.prototype.onDragging = function(t, e, n, i) {
        var o;
        if (o = n.forcePosition ? n.forcePosition.clone().subtractInPlace(i.getPoints(0).position) : n.planPos.clone().subtractInPlace(this._lastPlanPos), this._lastPlanPos.copyFrom(n.planPos), i.needsUpdate = !0, i.targeted)
            return i.cp.addInPlace(mouseVector), wanaplan.engine2D.requestStaticDraw(), !1;
        var r = o.clone().projectOnVector(i.getWallVector()),
            s = o.subtractInPlace(r);
        return i.translate(s, this.structure.getCurrentStructure()), i.getLength() < this._draggingMinWallLengthRatio * i.thickness && (i.remove(this.structure.getCurrentStructure()), wanaplan.engine2D.setMode(wanaplan.engine2D.MODE_NORMAL), this.simplifyWalls(), wanaplan.getSelectedStructure().dirty(), wanaplan.engine2D.requestStaticDraw(), wanaplan.engine2D.unregisterEventCb("WallComponent2D.dynamic-draw")), wanaplan.engine2D.requestStaticDraw(), !1
    }, t.prototype.onDragEnd = function(t, e, n, i) {
        var o = this.structure.getCurrentStructure(),
            r = o.getElements("walls");
        PolygonMerger.merge(r);
        var s = i.tryMerge(o),
            a = s.points[0],
            l = s.points[1];
        a.needsUpdate = !0, l.needsUpdate = !0;
        var h = a.parents[(a.parents.indexOf(s) + 1) % 2],
            c = l.parents[(l.parents.indexOf(s) + 1) % 2];
        h && h.splitAtIntersections(o), c && c.splitAtIntersections(o), s.splitAtIntersections(o);
        for (var u = 0, p = s.attachedPoints.length; p > u; u++)
            s.attachedPoints[u].parents[0] && s.attachedPoints[u].parents[0].splitAtIntersections(o);
        h && h.tryMerge(o), c && c.tryMerge(o);
        for (var u = 0, p = s.attachedPoints.length; p > u; u++)
            s.attachedPoints[u].parents[0] && s.attachedPoints[u].parents[0].tryMerge(o);
        this.update(), this.simplifyWalls(), wanaplan.getComponentByName("PointComponent2D").update(), wanaplan.getSelectedStructure().dirty(), wanaplan.engine2D.requestStaticDraw(), wanaplan.engine2D.unregisterEventCb("WallComponent2D.dynamic-draw"), wanaplan.engine2D.unregisterEventCb("WallComponent2D.drag.hover"), wanaplan.engine2D.unregisterEventCb("WallComponent2D.drag.leave"), this.update()
    }, t.prototype.onHover = function(t, e, n, i) {
        var e = i || e;
        return wanaplan.engine2D.registerEventCb("WallComponent2D.dynamic-draw", this.priority, "dynamic-draw", null, null, this.onSelectionDynamicDraw.bind(this), e), wanaplan.engine2D.registerEventCb("WallComponent2D.drag-start", this.priority, "drag-start", wanaplan.engine2D.MODE_NORMAL, WallStructure, this.onDragStart.bind(this), null), wanaplan.engine2D.requestDynamicDraw(), !1
    }, t.prototype.onLeave = function(t, e, n, i) {
        wanaplan.engine2D.unregisterEventCb("WallComponent2D.dynamic-draw"), wanaplan.engine2D.unregisterEventCb("WallComponent2D.drag-start"), wanaplan.engine2D.requestDynamicDraw()
    }, t.prototype.onMobileDragStart = function(t, e, n, i) {
        return e ? this.onDragStart(t, e, n, i) : void 0
    }, t.prototype.onSelectionDynamicDraw = function(t, e, n, i) {
        var o = i.getPoints(),
            r = {
                x: o[0].position.x * n + e.x,
                y: o[0].position.y * n + e.y
            },
            s = {
                x: o[1].position.x * n + e.x,
                y: o[1].position.y * n + e.y
            };
        if ("curved" == i.instance) {
            var a = i.getCp(),
                l = {
                    x: a.x * n + e.x,
                    y: a.y * n + e.y
                };
            wanaplan.engine2D.symbols2D.drawPoint(t, l), wanaplan.engine2D.symbols2D.drawMeasure(t, r, l), wanaplan.engine2D.symbols2D.drawMeasure(t, s, l), wanaplan.engine2D.symbols2D.drawArc(t, r, l, s)
        } else
            wanaplan.engine2D.symbols2D.drawSegment(t, r, s)
    }, t.prototype.onDoubleClick = function(t, e, n) {
        var i = wanaplan.getSelectedStructure(),
            o = new PointStructure;
        o.position = e.getNearestPoint(n.planPos);
        var r = new PolygonWall;
        r.height = e.height, r.type = e.type, r.thickness = e.thickness, r.points = [o, e.getPoints(1)], e.points[1] = o, o.parents = [r, e], r.getPoints(1).parents.splice(r.getPoints(1).parents.indexOf(e), 1), r.getPoints(1).parents.push(r), r.reorganizeOnSplit(i, [r, e]), i.insertElement("points", o), i.insertElement("walls", r), wanaplan.engine2D.requestStaticDraw()
    }, t.prototype.onAddWall = function(t) {
        if (wanaplan.helpBubbleManager.display("wnp.2d.draw-wall"), this._tmpThickness = t.thickness, this._tmpType = t.wallType, this._tmpRounded = t.rounded || !1, wanaplan.engine2D.setMode(wanaplan.engine2D.MODE_DRAW), wanaplan.engine2D.registerEventCb("WallComponent2D.add-wall.dynamic-draw", this.priority, "dynamic-draw", wanaplan.engine2D.MODE_DRAW, null, this.onAddWallDynamicDraw.bind(this), null), wanaplan.engine2D.registerEventCb("WallComponent2D.add-wall.click", this.priority, "click", wanaplan.engine2D.MODE_DRAW, null, this.onAddWallClick.bind(this), null), wanaplan.engine2D.registerEventCb("WallComponent2D.add-wall.drag-start", this.priority, "drag-start", wanaplan.engine2D.MODE_DRAW, null, this.onAddWallDragStart.bind(this), null), wanaplan.engine2D.registerEventCb("WallComponent2D.add-wall.mouse-move", this.priority, "mouse-move", wanaplan.engine2D.MODE_DRAW, null, this.onAddWallMouseMove.bind(this), null), wanaplan.engine2D.registerEventCb("WallComponent2D.add-wall.draw-end", this.priority, "draw-end", wanaplan.engine2D.MODE_DRAW, null, this.onAddWallDrawEnd.bind(this), null), 1 == t.putPoint) {
            var e = wanaplan.engine2D.getMouseState(),
                n = wanaplan.getComponentByName("MagnetismComponent2D", wanaplan.ENGINE_2D);
            n.applyPointMag(e), this.onAddWallClick(t, null, e, null)
        }
    }, t.prototype.onAddWallEnd = function() {
        wanaplan.engine2D.setMode(wanaplan.engine2D.MODE_NORMAL)
    }, t.prototype.onAddWallClick = function(t, e, n, i) {
        var o = wanaplan.getComponentByName("MagnetismComponent2D");
        if ("touchUp" == t.type && null != this._tmpWall && this.onAddWallMouseMove(t, e, n, i), wanaplan.getSelectedStructure().dirty(), !i && null != this._tmpWall && this._tmpWall.getLength() <= 10)
            return wanaplan.getComponentByName("PointComponent2D").update(), wanaplan.engine2D.setMode(wanaplan.engine2D.MODE_NORMAL), ujs.notify("wnp.menu.main.deselect"), o && o.onWallDrawEnd(), void wanaplan.engine2D.requestStaticDraw();
        var r = !1;
        if (!i && null != this._tmpWall && (e instanceof WallStructure || e instanceof PointStructure) && (r = !0), null == this._tmpWall)
            this._addWallFirstPoint(n);
        else {
            var s = this._addWallNewPoint(n);
            r || s ? (this._tmpWall = null, wanaplan.getComponentByName("PointComponent2D").update(), wanaplan.getSelectedStructure().update(), wanaplan.engine2D.setMode(wanaplan.engine2D.MODE_NORMAL), ujs.notify("wnp.menu.main.deselect"), o && o.onWallDrawEnd(), wanaplan.engine2D.requestStaticDraw()) : this._addWallFirstPoint(n, this._tmpWall.getPoints(1))
        }
    }, t.prototype.onAddWallDragStart = function(t, e, n) {
        return 0 == (n.buttons & n.BUTTON_LEFT) ? !0 : (this._tmpDragStartPt = n.planPos.clone(), wanaplan.engine2D.registerEventCb("WallComponent2D.add-wall.drag-end", this.priority, "drag-end", wanaplan.engine2D.MODE_DRAG, null, this.onAddWallDragEnd.bind(this), null), wanaplan.engine2D.registerEventCb("WallComponent2D.add-wall.dragging", this.priority, "dragging", wanaplan.engine2D.MODE_DRAG, null, this.onAddWallMouseMove.bind(this), null), !1)
    }, t.prototype.onAddWallDragEnd = function(t, e, n, i) {
        wanaplan.getSelectedStructure().dirty();
        var o = wanaplan.getComponentByName("MagnetismComponent2D");
        if (!i && null != this._tmpWall && this._tmpWall.getLength() <= 10)
            return wanaplan.getComponentByName("PointComponent2D").update(), wanaplan.engine2D.setMode(wanaplan.engine2D.MODE_NORMAL), ujs.notify("wnp.menu.main.deselect"), void(o && o.onWallDrawEnd());
        var r = !1;
        if (null != this._tmpWall && (e instanceof WallStructure || e instanceof PointStructure) && (r = !0), null == this._tmpWall)
            this._addWallFirstPoint(n);
        else {
            var s = this._addWallNewPoint(n);
            r || s ? (this._tmpWall = null, wanaplan.getComponentByName("PointComponent2D").update(), wanaplan.getSelectedStructure().dirty(), wanaplan.engine2D.setMode(wanaplan.engine2D.MODE_NORMAL), ujs.notify("wnp.menu.main.deselect"), o && o.onWallDrawEnd()) : this._addWallFirstPoint(n, this._tmpWall.getPoints(1))
        }
    }, t.prototype.onAddWallMouseMove = function(t, e, n) {
        if (null != this._tmpWall && null == this._tmpDragStartPt)
            this._tmpWall.needsUpdate = !0, this._addWallUpdate(n);
        else if (null != this._tmpDragStartPt && this._tmpDragStartPt.distanceTo(n.planPos) > 10) {
            var n = n;
            n.planPos = this._tmpDragStartPt, this._tmpDragStartPt = null, this.onAddWallClick(t, e, n, !0)
        }
    }, t.prototype.onAddWallDynamicDraw = function(t, e, n) {
        if (null != this._tmpWall) {
            this._tmpWall.getLength() > 5 && (this._tmpWall.computeCp && this._tmpWall.computeCp(!0), this._tmpWall.computeDefault(0), this._tmpWall.computeDefault(1), this._drawWall(t, e, n, this._tmpWall, {
                styleId: 1
            }), this.displayMesure && wanaplan.getComponentByName("MeasureComponent").drawTmpWallMesure(t, e, n));
            var i = {
                x: this._tmpWall.points[0].position.x,
                y: this._tmpWall.points[0].position.y
            };
            i.x = i.x * n + e.x, i.y = i.y * n + e.y, 1 == this._tmpWall.points[0].parents.length ? wanaplan.engine2D.symbols2D.drawCancelGrip(t, i, [!1, !1, !1, !1], 0) : wanaplan.engine2D.symbols2D.drawCheckGrip(t, i, [!1, !1, !1, !1], 0);
            var o = wanaplan.engine2D.getTarget();
            (o instanceof WallStructure || o instanceof PointStructure) && wanaplan.engine2D.setCursorIcon(wanaplan.engine2D.symbols2D.drawCursorCheck.bind(wanaplan.engine2D.symbols2D))
        }
    }, t.prototype.onAddWallDrawEnd = function() {
        null != this._tmpWall && this._tmpWall.remove(), this._tmpWall = null, this._tmpDragStartPt = null;
        var t = wanaplan.getComponentByName("MagnetismComponent2D", wanaplan.ENGINE_2D);
        t.removeVirtualPoint(this.name, null), wanaplan.engine2D.requestStaticDraw()
    }, t.prototype.onContextMenu = function(t, e) {
        var n = [];
        e.type != e.TYPE_SEPARATOR && (n.push({
            name: "thickness",
            label: _("厚度"),
            type: "slider",
            cast: "int",
            unit: "cm",
            value: {
                min: 3,
                max: 100,
                step: 1,
                value: e.thickness
            }
        }), n.push({
            name: "height",
            label: _("高度"),
            type: "slider",
            cast: "int",
            unit: "cm",
            value: {
                min: 20,
                max: 1e3,
                step: 10,
                value: e.height
            }
        }), n.push({
            name: "_applyHeightToAll",
            label: _("将高度应用到所有的墙"),
            type: "checkbox",
            cast: "bool",
            value: this._applyHeightToAll
        })), n.push({
            name: "measureDist",
            label: _("度量信息离目标物体的距离"),
            type: "slider",
            cast: "int",
            unit: "cm",
            value: {
                min: 5,
                max: 50,
                step: 1,
                value: e.measureDist
            }
        }), n.push({
            name: "measureDisplayed",
            label: _("显示度量信息"),
            type: "checkbox",
            cast: "bool",
            value: e.measureDisplayed
        }), wanaplan.engine2D.displayContextMenu(n, e, this.onContextMenuPropertyChanged.bind(this), this.onContextMenuRemove.bind(this))
    }, t.prototype.onContextMenuPropertyChanged = function(t, e, n) {
        "_applyHeightToAll" == e ? this._applyHeightToAll = n : t[e] = n;
        var i = wanaplan.getSelectedStructure(),
            o = i.getElements("walls");
        if ("height" != e && "_applyHeightToAll" != e || !this._applyHeightToAll) {
            for (var r = 0, s = 1; s < o.length; s++)
                o[r].height < o[s].height && (r = s);
            i.height = o[r].height
        } else {
            for (var s = 0; s < o.length; s++)
                o[s].height = t.height;
            i.height = t.height
        }
        wanaplan.structure.updateFloorElevations(), t.needsUpdate = !0, wanaplan.engine2D.requestStaticDraw()
    }, t.prototype.onContextMenuRemove = function(t) {
        var e = wanaplan.getSelectedStructure();
        t.remove(e)
    }, t
}();