HopperComponent2D = function() {
    var t = null,
        e = function(e) {
            BaseComponent2D.call(this, e, "HopperComponent2D"), this.priority = 80, this._tmpHopper = new HopperStructure, this._targetedAt = null, this._targetedAtSide = null, t = this
        };
    return e.prototype = new BaseComponent2D, e.prototype.startListening = function() {
        this.onAddHopper = this.onAddHopper.bind(this), document.addEventListener("hcs.engine2d.onAddHopper", this.onAddHopper, !1), hcsdesign.engine2D.registerEventCb("HopperComponent2D.hopper.static-draw", this.priority, "static-draw", null, null, this.onStaticDraw.bind(this), {}), hcsdesign.engine2D.registerEventCb("HopperComponent2D.hopper.hover", this.priority, "hover", hcsdesign.engine2D.MODE_NORMAL | hcsdesign.engine2D.MODE_DRAG | hcsdesign.engine2D.MODE_CONTEXTMENU, HopperStructure, this.onHover.bind(this), {}), hcsdesign.engine2D.registerEventCb("HopperComponent2D.hopper.leave", this.priority, "leave", hcsdesign.engine2D.MODE_NORMAL | hcsdesign.engine2D.MODE_CONTEXTMENU, HopperStructure, this.onLeave.bind(this), {}), hcsdesign.engine2D.registerEventCb("HopperComponent2D.hopper.click", this.priority, "click", hcsdesign.engine2D.MODE_NORMAL, HopperStructure, this.onContextMenu.bind(this), {}), hcsdesign.engine2D.registerEventCb("HopperComponent2D.hopper.dblclick", this.priority, "double-click", hcsdesign.engine2D.MODE_NORMAL, HopperStructure, this.onDblClick.bind(this), {})
    }, e.prototype.stopListening = function() {
        document.removeEventListener("hcs.engine2d.onAddHopper", this.onAddHopper, !1), hcsdesign.engine2D.unregisterEventCb("HopperComponent2D.hopper.static-draw"), hcsdesign.engine2D.unregisterEventCb("HopperComponent2D.hopper.hover"), hcsdesign.engine2D.unregisterEventCb("HopperComponent2D.hopper.leave"), hcsdesign.engine2D.unregisterEventCb("HopperComponent2D.hopper.click"), hcsdesign.engine2D.unregisterEventCb("HopperComponent2D.hopper.dblclick")
    }, e.prototype.getTargeted = function(t) {
        for (var e = hcsdesign.getSelectedStructure(), n = e.getElements("hoppers"), i = (hcsdesign.engine2D.getZoom(), 0); i < n.length; i++) {
            if (!(hcsdesign.engine2D.getMode() & hcsdesign.engine2D.MODE_DRAG))
                for (var o = 0; o < n[i].points.length; o++) {
                    if (n[i].points[o].distanceTo(t) < 13)
                        return this._targetedAt = o, this._targetedAtSide = null, hcsdesign.engine2D.requestDynamicDraw(), n[i];
                    var r = this.isPointInHopperSide(t, n[i]);
                    if (r !== !1)
                        return this._targetedAtSide = r, this._targetedAt = null, hcsdesign.engine2D.requestDynamicDraw(), n[i]
                }
            if (this.isPointInHopper(t, n[i]))
                return hcsdesign.engine2D.getMode() & hcsdesign.engine2D.MODE_DRAG || (this._targetedAt = null, this._targetedAtSide = null, hcsdesign.engine2D.requestDynamicDraw()), n[i]
        }
    }, e.prototype.onLeave = function() {
        hcsdesign.engine2D.unregisterEventCb("HopperComponent2D.hopper-hover.dynamic-draw"), hcsdesign.engine2D.unregisterEventCb("HopperComponent2D.hopper.drag-start"), hcsdesign.engine2D.requestDynamicDraw()
    }, e.prototype.onHover = function(t, e) {
        return hcsdesign.engine2D.registerEventCb("HopperComponent2D.hopper-hover.dynamic-draw", this.priority, "dynamic-draw", null, HopperStructure, this.onHoverHopper.bind(this), e), hcsdesign.engine2D.registerEventCb("HopperComponent2D.hopper.drag-start", this.priority, "drag-start", hcsdesign.engine2D.MODE_NORMAL, HopperStructure, this.onDragStart.bind(this), {}), hcsdesign.engine2D.requestDynamicDraw(), !1
    }, e.prototype.onHoverHopper = function(t, e, n, i) {
        this.draw(i, t, e, n, !0), this.drawTarget(i, t, n)
    }, e.prototype.onDblClick = function(t, e, n) {
        if (e instanceof HopperStructure) {
            var i = this.isPointInHopperSide(n.planPos, e);
            if (i !== !1) {
                var o = e.points[i],
                    r = i + 1 < e.points.length ? e.points[i + 1] : e.points[0],
                    s = n.planPos.projectOnSegment(o, r);
                e.insertPointAt(i + 1, s), this._targetedAtSide = null, this._targetedAt = i + 1, hcsdesign.engine2D.requestDynamicDraw()
            }
        }
    }, e.prototype.onDrag = function(t, e, n, i) {
        if (null !== this._targetedAt) {
            for (var o = n.planPos.clone(), r = 0; r < i.points.length; r++)
                r != this._targetedAt && (Math.abs(o.x - i.points[r].x) < 10 && (o.x = i.points[r].x), Math.abs(o.y - i.points[r].y) < 10 && (o.y = i.points[r].y));
            this.getRoom(i).isPointIn(o) && (i.points[this._targetedAt] = o)
        } else if (null !== this._targetedAtSide) {
            var s = n.posDelta.scale(1 / hcsdesign.engine2D.getZoom()),
                a = i.points[this._targetedAtSide],
                l = this._targetedAtSide + 1 < i.points.length ? this._targetedAtSide + 1 : 0,
                h = i.points[l],
                c = new BABYLON.Vector2(a.y - h.y, h.x - a.x);
            s.projectOnVector(c), this.getRoom(i).isPointIn(i.points[this._targetedAtSide].add(s)) && this.getRoom(i).isPointIn(i.points[l].add(s)) && (i.points[this._targetedAtSide].addInPlace(s), i.points[l].addInPlace(s))
        } else {
            var s = n.posDelta.scale(1 / hcsdesign.engine2D.getZoom());
            i.move(s)
        }
        return i.modified = !0, hcsdesign.engine2D.requestStaticDraw(), !1
    }, e.prototype.compute = function() {
        for (var t = hcsdesign.getSelectedStructure(), e = 0; e < t.getElements("hoppers").length; e++)
            this.computeHopper(t.getElements("hoppers")[e])
    }, e.prototype.computeHopper = function(t) {
        for (var e = t.points.length - 1; e >= 0; e--) {
            var n = e - 1 >= 0 ? e - 1 : t.points.length - 1;
            t.points[e].distanceTo(t.points[n]) < 2 && t.points.splice(e, 1)
        }
        t.points.length < 3 && (t.remove(hcsdesign.getSelectedStructure()), hcsdesign.engine2D.requestStaticDraw(), hcsdesign.engine2D.requestDynamicDraw(), this._targetedAt = null, this._targetedAtSide = null)
    }, e.prototype.onDragEnd = function(t, e, n, i) {
        this.computeHopper(i)
    }, e.prototype.onDragStart = function(t, e) {
        this.getRoom(e, !0), hcsdesign.engine2D.registerEventCb("hopperComponent2D.hopper.drag", this.priority, "dragging", null, null, this.onDrag.bind(this), e), hcsdesign.engine2D.registerEventCb("hopperComponent2D.stair-hover.drag-end", this.priority, "drag-end", null, null, this.onDragEnd.bind(this), e)
    }, e.prototype.onAddHopper = function() {
        hcsdesign.engine2D.setMode(hcsdesign.engine2D.MODE_DRAW), hcsdesign.engine2D.registerEventCb("hopperComponent2D.add-hopper.click", this.priority, "click", hcsdesign.engine2D.MODE_DRAW, null, this.onAddHopperClick.bind(this), {}), hcsdesign.engine2D.registerEventCb("hopperComponent2D.dynamic-stair.mouse-move", this.priority, "mouse-move", hcsdesign.engine2D.MODE_DRAW, null, this.onMouseMove.bind(this), {}), hcsdesign.engine2D.registerEventCb("hopperComponent2D.dynamic-stair.dynamic-draw", this.priority, "dynamic-draw", hcsdesign.engine2D.MODE_DRAW, null, this.onDynamicDraw.bind(this), {})
    }, e.prototype.onAddHopperClick = function() {
        var t = hcsdesign.getSelectedStructure();
        t.insertElement("hoppers", this._tmpHopper), this._tmpHopper = new HopperStructure, hcsdesign.engine2D.requestStaticDraw(), hcsdesign.engine2D.setMode(hcsdesign.engine2D.MODE_NORMAL), ujs.notify("hcs.menu.main.deselect")
    }, e.prototype.onMouseMove = function(t, e, n) {
        var i = n.planPos.subtract(this._tmpHopper.points[0].clone());
        i.x -= 50, i.y -= 50, this._tmpHopper.move(i)
    }, e.prototype.onContextMenu = function(t, e) {
        var n = [];
        null !== this._targetedAtSide ? (n.push({
            name: "sticks_" + this._targetedAtSide,
            label: _("Enable the guard-rail on this side"),
            type: "checkbox",
            cast: "int",
            value: e.sticks[this._targetedAtSide]
        }), n.push({
            name: "cut",
            label: _("Add point"),
            type: "button",
            value: _("Add")
        })) : (n.push({
            name: "enable_sticks",
            label: _("四周有护栏"),
            type: "button",
            value: _("选择")
        }), n.push({
            name: "disable_sticks",
            label: _("四周没有护栏"),
            type: "button",
            value: _("选择")
        })), hcsdesign.engine2D.displayContextMenu(n, e, this.onContextMenuPropertyChanged.bind(this), this.onContextMenuRemove.bind(this))
    }, e.prototype.onContextMenuPropertyChanged = function(t, e, n) {
        if (-1 != e.indexOf("sticks_")) {
            var i = e.split("_");
            t.sticks[i[1]] = n
        } else if ("cut" == e) {
            var o = t.points[this._targetedAtSide],
                r = t.points[this._targetedAtSide + 1],
                s = o.clone().lerp(r, .5);
            t.insertPointAt(this._targetedAtSide + 1, s)
        } else if ("enable_sticks" == e)
            for (var a = 0; a < t.points.length; a++)
                t.sticks[a] = !0;
        else if ("disable_sticks" == e)
            for (var a = 0; a < t.points.length; a++)
                t.sticks[a] = !1;
        else
            t[e] = n;
        hcsdesign.engine2D.requestStaticDraw()
    }, e.prototype.onContextMenuRemove = function(t) {
        var e = hcsdesign.getSelectedStructure();
        t.remove(e)
    }, e.prototype.onStaticDraw = function(t, e, n) {
        for (var i = hcsdesign.getSelectedStructure(), o = i.getElements("hoppers"), r = 0; r < o.length; r++)
            this.draw(o[r], t, e, n)
    }, e.prototype.onDynamicDraw = function(t, e, n) {
        hcsdesign.engine2D.setCursorIcon(hcsdesign.engine2D.symbols2D.drawCursorCheck.bind(hcsdesign.engine2D.symbols2D)), this.draw(this._tmpHopper, t, e, n)
    }, e.prototype.initialize = function() {
        var t = {
            title: _("储料仓"),
            index: 80,
            action: "hcs.engine2d.onAddHopper"
        };
        ujs.notify("hcs.menu.main.add", {
            item: t,
            menuPath: "draw2D",
            position: 80
        })
    }, e.prototype.drawTarget = function(t, e, n) {
        if (null !== this._targetedAt) {
            var i = hcsdesign.engine2D.toRealCoord(t.points[this._targetedAt]);
            hcsdesign.engine2D.symbols2D.drawPointHover(e, i, n)
        } else if (null !== this._targetedAtSide) {
            var o = hcsdesign.engine2D.toRealCoord(t.points[this._targetedAtSide]),
                r = hcsdesign.engine2D.toRealCoord(this._targetedAtSide + 1 < t.points.length ? t.points[this._targetedAtSide + 1] : t.points[0]);
            hcsdesign.engine2D.symbols2D.drawSegment(e, o, r)
        }
    }, e.prototype.draw = function(t, e, n, i, o) {
        e.save(), e.beginPath(), o ? (e.fillStyle = hcsdesign.engine2D.symbols2D.COLOR_ACTIVE_FILL, e.strokeStyle = hcsdesign.engine2D.symbols2D.COLOR_ACTIVE_STROKE_DARKER) : (e.fillStyle = hcsdesign.engine2D.symbols2D.COLOR_INACTIVE_FILL, e.strokeStyle = hcsdesign.engine2D.symbols2D.COLOR_INACTIVE_STROKE);
        for (var r = 0; r < t.points.length; r++) {
            var s = hcsdesign.engine2D.toRealCoord(t.points[r], n, i);
            0 == r ? e.moveTo(Math.round(s.x) + .5, Math.round(s.y) + .5) : e.lineTo(Math.round(s.x) + .5, Math.round(s.y) + .5)
        }
        e.closePath(), e.fill(), e.stroke(), e.beginPath();
        for (var r = 0; r < t.points.length; r++)
            if (t.sticks[r]) {
                var a = hcsdesign.engine2D.toRealCoord(t.points[r], n, i),
                    l = r + 1 < t.points.length ? r + 1 : 0,
                    h = hcsdesign.engine2D.toRealCoord(t.points[l], n, i);
                e.lineWidth = 4, e.beginPath(), e.moveTo(Math.round(a.x), Math.round(a.y)), e.lineTo(Math.round(h.x), Math.round(h.y)), e.stroke()
            }
        e.restore()
    }, e.prototype.getRoom = function(t, e) {
        var e = e || !1;
        if (t.room && e === !1)
            return t.room;
        var n = hcsdesign.getComponentByName("RoomComponent2D"),
            i = n.isPointInRooms(t.points[0]);
        return i !== !1 ? (t.room = i, t.room) : !1
    }, e.prototype.isPointInHopperSide = function(t, e) {
        for (var n = 0; n < e.points.length; n++) {
            var i = e.points[n].clone(),
                o = n + 1 < e.points.length ? e.points[n + 1] : e.points[0],
                r = Math.abs(i.distanceTo(t) + o.distanceTo(t) - i.distanceTo(o));
            if (1 > r)
                return n
        }
        return !1
    }, e.prototype.isPointInHopper = function(t, e) {
        return t.isPointInPolygon(e.points) ? !0 : !1
    }, e
}();