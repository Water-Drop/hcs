var OvertureComponent2D = function() {
    var t = function(t) {
        BaseComponent2D.call(this, t, "OvertureComponent2D"), this.COLOR = "#888", this.MINSIZE = 30, this.priority = 60, this.overtureDragged = !1, this._applyToAll = !1
    };
    return t.prototype = new BaseComponent2D, t.prototype.startListening = function() {
        this.onAddOverture = this.onAddOverture.bind(this), this.onAddOvertureEnd = this.onAddOvertureEnd.bind(this), this.onStaticDraw = this.onStaticDraw.bind(this), this.onHover = this.onHover.bind(this), this.onLeave = this.onLeave.bind(this), this.onContextMenu = this.onContextMenu.bind(this), this.onDoubleClick = this.onDoubleClick.bind(this), document.addEventListener("wnp.engine2d.onAddOverture", this.onAddOverture, !1), document.addEventListener("wnp.engine2d.onAddOvertureEnd", this.onAddOvertureEnd, !1), wanaplan.engine2D.registerEventCb("OvertureComponent2D.static-draw", this.priority, "static-draw", null, null, this.onStaticDraw, null), wanaplan.engine2D.registerEventCb("OvertureComponent2D.drag-start", this.priority, "drag-start", wanaplan.engine2D.MODE_NORMAL, OvertureStructure, this.onDragStart.bind(this), null), wanaplan.engine2D.registerEventCb("OvertureComponent2D.hover", this.priority, "hover", wanaplan.engine2D.MODE_NORMAL | wanaplan.engine2D.MODE_DRAG | wanaplan.engine2D.MODE_CONTEXTMENU, OvertureStructure, this.onHover, null), wanaplan.engine2D.registerEventCb("OvertureComponent2D.leave", this.priority, "leave", wanaplan.engine2D.MODE_NORMAL | wanaplan.engine2D.MODE_CONTEXTMENU, OvertureStructure, this.onLeave, null), wanaplan.engine2D.registerEventCb("OvertureComponent2D.context-menu", this.priority, "click", wanaplan.engine2D.MODE_NORMAL, OvertureStructure, this.onContextMenu, null), wanaplan.engine2D.registerEventCb("OvertureComponent2D.double-click", this.priority, "double-click", wanaplan.engine2D.MODE_NORMAL, OvertureStructure, this.onDoubleClick, null)
    }, t.prototype.stopListening = function() {
        document.removeEventListener("wnp.engine2d.onAddOverture", this.onAddOverture, !1), document.removeEventListener("wnp.engine2d.onAddOvertureEnd", this.onAddOvertureEnd, !1), wanaplan.engine2D.unregisterEventCb("OvertureComponent2D.static-draw"), wanaplan.engine2D.unregisterEventCb("OvertureComponent2D.drag-start"), wanaplan.engine2D.unregisterEventCb("OvertureComponent2D.hover"), wanaplan.engine2D.unregisterEventCb("OvertureComponent2D.leave"), wanaplan.engine2D.unregisterEventCb("OvertureComponent2D.context-menu"), wanaplan.engine2D.unregisterEventCb("OvertureComponent2D.double-click")
    }, t.prototype.initialize = function() {
        var t, e = [
            ["doors", _("门洞"), "Door", 0, 90, 204, 0, !1, !1],
            ["doors", _("房门"), "Door", 0, 73, 204, 1, !1, !1],
            /*["doors", _("双开门"), "Door", 0, 140, 204, 2, !1, !1],
            ["doors", _("滑门"), "Door", 0, 140, 204, 2, !0, !1],
            ["doors", _("车库门"), "Garage", 0, 240, 200, 3, !1, !1],*/
            /*["bay_windows", _("固定式凸窗"), "Window", 0, 80, 215, 1, !0, !1],
            ["bay_windows", _("法式门"), "Window", 0, 80, 215, 1, !1, !1],
            ["bay_windows", _("双开法式门"), "Window", 0, 120, 215, 2, !1, !1],
            ["bay_windows", _("滑式凸窗"), "Window", 0, 160, 215, 2, !0, !1],*/
            ["windows", _("窗户"), "Window", 90, 80, 125, 0, !1, !1],
            /*["windows", _("固定式窗"), "Window", 90, 60, 125, 1, !0, !1],*/
            ["windows", _("单面推窗"), "Window", 90, 80, 125, 1, !1, !1],
            /*["windows", _("双开窗"), "Window", 90, 100, 125, 2, !1, !1],*/
            ["windows", _("滑动窗"), "Window", 90, 100, 125, 2, !0, !1]
        ];
        t = {
            title: _("门"),
            id: "doors",
            items: []
        }, ujs.notify("wnp.menu.main.add", {
            item: t,
            menuPath: "draw2D",
            position: 1
        }), /*t = {
            title: _("凸窗"),
            id: "bay_windows",
            items: []
        }, ujs.notify("wnp.menu.main.add", {
            item: t,
            menuPath: "draw2D",
            position: 2
        }),*/ t = {
            title: _("窗"),
            id: "windows",
            items: []
        }, ujs.notify("wnp.menu.main.add", {
            item: t,
            menuPath: "draw2D",
            position: 2
        });
        for (var n in e)
            t = {
                title: e[n][1],
                action: "wnp.engine2d.onAddOverture",
                cancelAction: "wnp.engine2d.onAddOvertureEnd",
                params: {
                    overtureType: e[n][2],
                    elevation: e[n][3],
                    width: e[n][4],
                    height: e[n][5],
                    nbCasement: e[n][6],
                    sliding: e[n][7],
                    galandage: e[n][8]
                }
            }, "Door" === e[n][2] && (t.params.stretched_texture = !0), ujs.notify("wnp.menu.main.add", {
                item: t,
                menuPath: "draw2D." + e[n][0],
                position: n
            })
    }, t.prototype.getTargeted = function(t) {
        var e, n, i = this.structure.getCurrentStructure(),
            o = i.getElements("walls"),
            r = new BABYLON.Vector2,
            s = new BABYLON.Vector2,
            a = 0,
            l = 0,
            h = 0,
            c = null,
            u = null;
        for (l = 0, h = o.length; h > l; l++)
            if (r = t.subtract(o[l].getPoints(0).position), s.copyFrom(r), n = o[l].getWallVector(), r.projectOnVector(n), s.subtractInPlace(r), s.length() <= o[l].thickness / 2 + 5)
                for (a = o[l].overtures.length - 1; a >= 0; a--)
                    if (c = o[l].overtures[a].position.x - o[l].overtures[a].width / 2 - 13, u = o[l].overtures[a].position.x + o[l].overtures[a].width / 2 + 13, e = r.length() * Math.sign(r.dot(n)), e > c && u > e)
                        return o[l].overtures[a];
        return null
    }, t.prototype._drawOverture = function(t, e, n, i) {
        if (i.getParentWall() || i.remove(wanaplan.getSelectedStructure()), t.save(), t.strokeStyle = this.COLOR, t.translate(Math.round(i.getParentWall().getPoints(0).position.x * n) + e.x, Math.round(i.getParentWall().getPoints(0).position.y * n) + e.y), t.rotate(Math.atan2(-i.getParentWall().getWallVector().x, i.getParentWall().getWallVector().y) + Math.PI / 2), t.translate(Math.round(i.position.x * n), 0), t.fillStyle = "#fff", t.fillRect(Math.round(-i.width / 2 * n), Math.round(-i.getParentWall().thickness / 2 * n) - 1, Math.round(i.width * n), Math.round(i.getParentWall().thickness * n) + 2), t.fillStyle = this.COLOR, t.fillRect(Math.round(-i.width / 2 * n), Math.round(-i.getParentWall().thickness / 2 * n), Math.round(i.width * n), Math.round(i.getParentWall().thickness * n)), i.sliding) {
            t.strokeStyle = "rgba(255, 255, 255, .8)", t.fillStyle = "rgba(255, 255, 255, .4)", t.beginPath();
            var o = Math.round((i.getParentWall().thickness / 2 - 4) * n) + .5,
                r = Math.round(i.width / 2 * n);
            if (1 == i.nbCasement)
                t.rect(-r + .5, Math.round(-o / 2) - .5, Math.round(i.width * n) - 1, Math.round(o));
            else {
                var s = i.width / i.nbCasement * n;
                t.moveTo(r - .5, -.5), t.lineTo(-r + .5, -.5);
                for (var a = 0, l = -r + .5, h = o; a <= i.nbCasement; a++, l += s, h = -h)
                    l > r - s / 2 && r + s / 2 > l && (l = r - .5), a > 0 && t.lineTo(Math.round(l) - .5, -h), a < i.nbCasement && t.lineTo(Math.round(l) - .5, h);
                t.closePath()
            }
            t.fill(), t.stroke()
        } else
            "Garage" == i.type ? (-1 == i.side && t.rotate(Math.PI), t.strokeRect(Math.round(-i.width / 2 * n) + .5, Math.round(-i.getParentWall().thickness / 2 * n) + .5, Math.round(i.width * n), Math.round(i.height * n)), t.beginPath(), t.moveTo(Math.round(-i.width / 2 * n), Math.round(+i.getParentWall().thickness / 2 * n)), t.lineTo(0, Math.round((i.height - i.getParentWall().thickness / 2) * n)), t.lineTo(Math.round(i.width / 2 * n), Math.round(+i.getParentWall().thickness / 2 * n)), t.stroke()) : 1 == i.nbCasement ? (-1 == i.side && t.rotate(Math.PI), t.beginPath(), 0 == i.hinge ? (t.arc(Math.round(-i.width / 2 * n) + .5, Math.round(i.getParentWall().thickness / 2 * n) + .5, Math.round(i.width * n), 0, Math.PI / 2, !1), t.lineTo(Math.round(-i.width / 2 * n) + .5, Math.round(i.getParentWall().thickness / 2 * n) + .5)) : (t.arc(Math.round(i.width / 2 * n) + .5, Math.round(i.getParentWall().thickness / 2 * n) + .5, Math.round(i.width * n), Math.PI, Math.PI / 2, !0), t.lineTo(Math.round(i.width / 2 * n) + .5, Math.round(i.getParentWall().thickness / 2 * n) + .5)), t.stroke()) : 2 == i.nbCasement && (-1 == i.side && t.rotate(Math.PI), t.beginPath(), t.arc(Math.round(-i.width / 2 * n) + .5, Math.round(i.getParentWall().thickness / 2 * n) + .5, Math.round(i.width / 2 * n), 0, Math.PI / 2, !1), t.lineTo(Math.round(-i.width / 2 * n) + .5, Math.round(i.getParentWall().thickness / 2 * n) + .5), t.stroke(), t.beginPath(), t.arc(Math.round(i.width / 2 * n) + .5, Math.round(i.getParentWall().thickness / 2 * n) + .5, Math.round(i.width / 2 * n), Math.PI, Math.PI / 2, !0), t.lineTo(Math.round(i.width / 2 * n) + .5, Math.round(i.getParentWall().thickness / 2 * n) + .5), t.stroke());
        t.restore()
    }, t.prototype.compute = function() {
        for (var t = this.structure.getCurrentStructure(), e = t.getElements("walls"), n = 0; n < e.length; n++)
            for (var i = e[n].overtures.length - 1; i >= 0; i--)
                e[n].overtures[i].parentWall && e[n].overtures[i].parentWall.id != e[n].id && e[n].overtures.splice(i, 1)
    }, t.prototype.onStaticDraw = function(t, e, n) {
        var i = this.structure.getCurrentStructure().getElements("overtures");
        for (var o in i)
            this._drawOverture(t, e, n, i[o])
    }, t.prototype.onDragStart = function(t, e, n) {
        var i = e.getAbsolutePos(),
            o = i.position.subtract(i.vector.clone().scaleInPlace(e.width / 2)),
            r = i.position.add(i.vector.clone().scaleInPlace(e.width / 2));
        return wanaplan.engine2D.registerEventCb("overtureComponent2D.drag-end", this.priority, "drag-end", wanaplan.engine2D.MODE_DRAG, null, this.onDragEnd.bind(this), e), wanaplan.engine2D.registerEventCb("overtureComponent2D.dynamic-draw", this.priority, "dynamic-draw", wanaplan.engine2D.MODE_DRAG, null, this.onSelectionDynamicDraw.bind(this), e), n.planPos.distanceTo(o) <= 13 || n.planPos.distanceTo(r) <= 13 ? wanaplan.engine2D.registerEventCb("overtureComponent2D.dragging", this.priority, "dragging", wanaplan.engine2D.MODE_DRAG, null, this.onDraggingResize.bind(this), e) : wanaplan.engine2D.registerEventCb("overtureComponent2D.dragging", this.priority, "dragging", wanaplan.engine2D.MODE_DRAG, null, this.onDraggingMove.bind(this), e), this.overtureDragged = !0, !1
    }, t.prototype.onDraggingMove = function(t, e, n, i) {
        var o = this.structure.getCurrentStructure(),
            r = n.planPos.clone(),
            s = WallStructure.prototype.getNearestWall(r, o),
            a = s.getNearestPoint(r),
            l = a.distanceTo(s.getPoints(0).position);
        return i.position.x = l, i.setParentWall(s), i.projectOnWall(), wanaplan.engine2D.requestStaticDraw(), !1
    }, t.prototype.onDraggingResize = function(t, e, n, i) {
        var o = n.planPos.clone(),
            r = i.parentWall.getNearestPoint(o),
            s = i.getAbsolutePos();
        return i.width = 2 * r.distanceTo(s.position) + 10, i.clampSize(), wanaplan.engine2D.requestStaticDraw(), !1
    }, t.prototype.onDragEnd = function(t, e, n, i) {
        wanaplan.engine2D.unregisterEventCb("overtureComponent2D.dynamic-draw"), this.overtureDragged = !1, i.width = Math.round(i.width), wanaplan.getSelectedStructure().dirty(), wanaplan.engine2D.requestStaticDraw()
    }, t.prototype.onHover = function(t, e) {
        return wanaplan.engine2D.registerEventCb("overtureComponent2D.dynamic-draw", this.priority, "dynamic-draw", wanaplan.engine2D.MODE_NORMAL, null, this.onSelectionDynamicDraw.bind(this), e), wanaplan.engine2D.requestDynamicDraw(), !1
    }, t.prototype.onLeave = function() {
        wanaplan.engine2D.unregisterEventCb("overtureComponent2D.dynamic-draw"), wanaplan.engine2D.requestDynamicDraw()
    }, t.prototype.onSelectionDynamicDraw = function(t, e, n, i) {
        if (!i.parentWall)
            return !1;
        var o = i.parentWall.getPoints(0).position,
            r = i.parentWall.getWallVector().normalize(),
            s = o.add(r.clone().scaleInPlace(i.position.x - i.width / 2)),
            a = o.add(r.clone().scaleInPlace(i.position.x + i.width / 2)),
            l = {
                x: s.x * n + e.x,
                y: s.y * n + e.y
            },
            h = {
                x: a.x * n + e.x,
                y: a.y * n + e.y
            };
        wanaplan.engine2D.symbols2D.drawGripSegment(t, l, h, [!1, !1, !1, !0], [!1, !0, !1, !1], i.getAngle())
    }, t.prototype.onAddOverture = function(t) {
        overture = new OvertureStructure, overture.type = t.overtureType, overture.elevation = t.elevation, overture.width = t.width, overture.height = t.height, overture.nbCasement = t.nbCasement, overture.sliding = t.sliding, overture.galandage = t.galandage, void 0 != t.hinge && (overture.hinge = t.hinge), void 0 != t.side && (overture.side = t.side), void 0 != t.batiThickness && (overture.batiThickness = t.batiThickness), void 0 != t.stretched_texture && (overture.stretched_texture = t.stretched_texture), wanaplan.engine2D.registerEventCb("OvertureComponent2D.addOverture.wall.hover", this.priority, "hover", wanaplan.engine2D.MODE_DRAW, WallStructure, this.onAddOvertureUpdate.bind(this), overture), wanaplan.engine2D.registerEventCb("OvertureComponent2D.addOverture.all.move", this.priority, "mouse-move", wanaplan.engine2D.MODE_DRAW, null, this.onAddOvertureUpdate.bind(this), overture), wanaplan.engine2D.registerEventCb("OvertureComponent2D.addOverture.all.click", this.priority, "click", wanaplan.engine2D.MODE_DRAW, null, this.onAddOvertureEnd.bind(this), overture), wanaplan.engine2D.registerEventCb("OvertureComponent2D.addOverture.all.drag-start", this.priority, "drag-start", wanaplan.engine2D.MODE_DRAW, null, this.onAddOvertureDragStart.bind(this), overture), this.core.engine2D.registerEventCb("OvertureComponent2D.addOverture.all.leave-draw-zone", this.priority, "leave-draw-zone", this.core.engine2D.MODE_DRAW, null, this.onAddOvertureLeaveZone.bind(this), overture), wanaplan.engine2D.setMode(wanaplan.engine2D.MODE_DRAW)
    }, t.prototype.onAddOvertureDragStart = function(t, e, n, i) {
        return 0 != (n.buttons & n.BUTTON_LEFT) ? (wanaplan.engine2D.registerEventCb("OvertureComponent2D.addOverture.all.dragging", this.priority, "dragging", wanaplan.engine2D.MODE_DRAG, null, this.onAddOvertureUpdate.bind(this), i), wanaplan.engine2D.registerEventCb("OvertureComponent2D.addOverture.all.drag-end", this.priority, "drag-end", wanaplan.engine2D.MODE_DRAG, null, this.onAddOvertureEnd.bind(this), i), !1) : void 0
    }, t.prototype.onAddOvertureUpdate = function(t, e, n, i) {
        wanaplan.engine2D.setCursorIcon(wanaplan.engine2D.symbols2D.drawCursorCheck.bind(wanaplan.engine2D.symbols2D));
        var o = this.structure.getCurrentStructure();
        return e instanceof WallStructure && i.setParentWall(e), o.insertElement("overtures", i), this.onDraggingMove(t, e, n, i), wanaplan.engine2D.requestStaticDraw(), !1
    }, t.prototype.onAddOvertureEnd = function(t, e, n, i) {
        return "deselect" != t.from && ujs.notify("wnp.menu.main.deselect"), "touchUp" == t.type && this.onAddOvertureUpdate(t, e, n, i), wanaplan.engine2D.setMode(wanaplan.engine2D.MODE_NORMAL), wanaplan.helpBubbleManager.display("wnp.2d.properties"), wanaplan.getSelectedStructure().dirty(), wanaplan.engine2D.requestStaticDraw(), !1
    }, t.prototype.onAddOvertureLeaveZone = function(t, e) {
        this.core.engine2D.unregisterEventCb("OvertureComponent2D.addOverture.wall.hover"), this.core.engine2D.unregisterEventCb("OvertureComponent2D.addOverture.all.click"), this.core.engine2D.unregisterEventCb("OvertureComponent2D.addOverture.all.move"), this.core.engine2D.unregisterEventCb("OvertureComponent2D.addOverture.all.drag-start"), this.core.engine2D.unregisterEventCb("OvertureComponent2D.addOverture.all.leave-draw-zone");
        var n = this.core.getSelectedStructure();
        return e.remove(n), this.core.engine2D.setMode(this.core.engine2D.MODE_NORMAL), wanaplan.getSelectedStructure().dirty(), wanaplan.engine2D.requestStaticDraw(), !1
    }, t.prototype.onContextMenu = function(t, e) {
        var n = [];
        if (n.push({
                name: "width",
                label: _("宽度"),
                type: "slider",
                cast: "int",
                unit: "cm",
                value: {
                    min: 20,
                    max: e.parentWall.getLength(),
                    step: 1,
                    value: e.width
                }
            }), n.push({
                name: "height",
                label: _("高度"),
                type: "slider",
                cast: "int",
                unit: "cm",
                value: {
                    min: 20,
                    max: e.parentWall.height,
                    step: 1,
                    value: e.height
                }
            }), n.push({
                name: "elevation",
                label: _("离地面的高度"),
                type: "slider",
                cast: "int",
                unit: "cm",
                value: {
                    min: 0,
                    max: e.parentWall.height,
                    step: 1,
                    value: e.elevation
                }
            }), /*n.push({
                name: "plinte",
                label: _("Plinte"),
                type: "slider",
                cast: "int",
                value: {
                    min: 0,
                    max: 1,
                    step: 1,
                    value: e.plttt
                }
            }), "Door" == e.type && n.push({
                name: "stretched_texture",
                label: _("stretched texture"),
                type: "checkbox",
                cast: "bool",
                value: e.stretched_texture
            }),*/ "Garage" == e.type && n.push({
                name: "nbCasement",
                label: _("Number of casements"),
                type: "slider",
                cast: "int",
                value: {
                    min: 1,
                    max: 6,
                    step: 1,
                    value: e.nbCasement
                }
            }), "Garage" != e.type) {
            var i = _("Door" == e.type ? "门" : "Window" == e.type ? "窗" : "");
            n.push({
                name: "_applyToAll",
                label: _("将宽度、高度、离地面高度应用到所有的{typetarget}").replace("{typetarget}", i),
                type: "checkbox",
                cast: "bool",
                value: this._applyToAll
            })
        }
        (e.sliding || "Window" == e.type) && n.push({
            name: "nbCasement",
            label: _("窗的个数"),
            type: "slider",
            cast: "int",
            value: {
                min: 1,
                max: 5,
                step: 1,
                value: e.nbCasement
            }
        }), e.nbCasement % 2 != 1 || e.sliding || "Garage" == e.type || n.push({
            name: "hinge",
            label: _("开窗方向"),
            type: "button",
            cast: "int",
            value: _("切换")
        }), e.nbCasement > 0 && !e.sliding && n.push({
            name: "side",
            label: _("内外方向"),
            type: "button",
            cast: "int",
            value: _("切换")
        }), wanaplan.engine2D.displayContextMenu(n, e, this.onContextMenuPropertyChanged.bind(this), this.onContextMenuRemove.bind(this))
    }, t.prototype.onContextMenuPropertyChanged = function(t, e, n) {
        switch (e) {
            case "hinge":
                t.hinge = (t.hinge + 1) % 2;
                break;
            case "side":
                t.side = -t.side;
                break;
            case "_applyToAll":
                this._applyToAll = n;
                break;
            default:
                t[e] = n
        }
        if (this._applyToAll && ("elevation" == e || "height" == e || "width" == e))
            for (var i = wanaplan.getSelectedStructure(), o = i.getElements("overtures"), r = 0; r < o.length; r++)
                o[r].type == t.type && (o[r][e] = n);
        wanaplan.engine2D.requestStaticDraw()
    }, t.prototype.onContextMenuRemove = function(t) {
        var e = wanaplan.getSelectedStructure();
        t.remove(e)
    }, t.prototype.onDoubleClick = function(t, e) {
        return wanaplan.helpBubbleManager.display("wnp.2d.dup-overture"), this.onAddOverture({
            overtureType: e.type,
            elevation: e.elevation,
            width: e.width,
            height: e.height,
            nbCasement: e.nbCasement,
            sliding: e.sliding,
            hinge: e.hinge,
            side: e.side,
            batiThickness: e.batiThickness
        }), !0
    }, t
}();