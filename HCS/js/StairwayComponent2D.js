StairwayComponent2D = function() {
    var t = null,
        e = function(e) {
            BaseComponent2D.call(this, e, "StairwayComponent2D"), this.priority = 50, this._tmpStairway = !1, this._tmpPoint = null, this._targetedAt = null, this._targetedAtPoint = null, this._SIZE = 13, t = this, this.onFloorAdded = this.onFloorAdded.bind(this), document.addEventListener("wnp.request.floorAdded", this.onFloorAdded), document.addEventListener("wnp.core.structure.loaded", this.onStructureLoaded.bind(this))
        };
    return e.prototype = new BaseComponent2D, e.prototype.startListening = function() {
        this.onAddStairway = this.onAddStairway.bind(this), document.addEventListener("wnp.engine2d.onAddStairway", this.onAddStairway, !1), this.core.engine2D.registerEventCb("StairwayComponent2D.stair.static-draw", this.priority, "static-draw", null, null, this.onStaticDraw.bind(this), {}), this.core.engine2D.registerEventCb("StairwayComponent2D.stair.hover", this.priority, "hover", this.core.engine2D.MODE_NORMAL | this.core.engine2D.MODE_DRAG | this.core.engine2D.MODE_CONTEXTMENU, StairwayStructure, this.onHover.bind(this), {}), this.core.engine2D.registerEventCb("StairwayComponent2D.stair.leave", this.priority, "leave", this.core.engine2D.MODE_NORMAL | this.core.engine2D.MODE_CONTEXTMENU, StairwayStructure, this.onLeave.bind(this), {}), this.core.engine2D.registerEventCb("StairwayComponent2D.stair.click", this.priority, "click", this.core.engine2D.MODE_NORMAL, StairwayStructure, this.onContextMenu.bind(this), {}), this.core.engine2D.registerEventCb("StairwayComponent2D.stair.dblclick", this.priority, "double-click", this.core.engine2D.MODE_NORMAL, StairwayStructure, this.onDoubleClick.bind(this), {})
    }, e.prototype.stopListening = function() {
        document.removeEventListener("wnp.engine2d.onAddStairway", this.onAddStairway, !1), this.core.engine2D.unregisterEventCb("StairwayComponent2D.stair.static-draw"), this.core.engine2D.unregisterEventCb("StairwayComponent2D.stair.hover"), this.core.engine2D.unregisterEventCb("StairwayComponent2D.stair.leave"), this.core.engine2D.unregisterEventCb("StairwayComponent2D.stair.click"), this.core.engine2D.unregisterEventCb("StairwayComponent2D.stair.dblclick")
    }, e.prototype.onStructureLoaded = function() {
        for (var t, e = 0; e < this.structure.members.length; e++) {
            t = this.structure.members[e];
            for (var n = t.stairways.length - 1; n >= 0; n--)
                t.stairways[n] instanceof StairwayStructure || t.stairways.splice(n, 1)
        }
    }, e.prototype.onFloorAdded = function(t) {
        var e = t.id,
            n = this.structure.getElement(+e),
            i = this.structure.getElement(+e - 1),
            o = t.callback || function() {};
        if (i)
            for (var r = i.getElements("stairways"), s = 0; s < r.length; s++) {
                var a = new HopperStructure;
                a.points = r[s].getHopperPoints(), a.stairwayId = r[s].id, n.insertElement("hoppers", a)
            }
        o.call(this)
    }, e.prototype.onLeave = function() {
        this.core.engine2D.unregisterEventCb("StairwayComponent2D.stair-hover.dynamic-draw"), this.core.engine2D.unregisterEventCb("StairwayComponent2D.stair.drag-start"), this.core.engine2D.requestDynamicDraw()
    }, e.prototype.onHoverStair = function(t, e, n, i) {
        t.strokeStyle = this.core.engine2D.symbols2D.COLOR_ACTIVE_STROKE_DARKER, this.draw(i, t, e, n), this.drawTarget(i, t, e, n)
    }, e.prototype.onHoverStairMouseMove = function(t, e, n) {
        var i = e.isTargeted(n.planPos);
        e.targeted = i, this.core.engine2D.requestDynamicDraw()
    }, e.prototype.onHover = function(t, e) {
        return (this.core.engine2D.getMode() & (this.core.engine2D.MODE_DRAW | this.core.engine2D.MODE_SUBSLOPE)) > 0 ? !1 : (this.core.engine2D.registerEventCb("StairwayComponent2D.stair-hover.mouse-move", this.priority, "mouse-move", null, StairwayStructure, this.onHoverStairMouseMove.bind(this), e), this.core.engine2D.registerEventCb("StairwayComponent2D.stair-hover.dynamic-draw", this.priority, "dynamic-draw", null, StairwayStructure, this.onHoverStair.bind(this), e), this.core.engine2D.registerEventCb("StairwayComponent2D.stair.drag-start", this.priority, "drag-start", this.core.engine2D.MODE_NORMAL, StairwayStructure, this.onDragStart.bind(this), {}), this.core.engine2D.requestDynamicDraw(), !1)
    }, e.prototype.onDragEnd = function(t, e, n, i) {
        this._targetedAtPoint = !1, this._targetedAt = !1;
        for (var o = 0; o < i.points.length - 1; o++)
            "spiral" != i.type && i.points[o].distanceTo(i.points[o + 1]) < i.width / 2 && (i.points.splice(o + 1, i.points.length), this.core.engine2D.requestStaticDraw(), this.core.engine2D.requestDynamicDraw());
        var r = this.core.getSelectedStructure();
        if (topStructure = this.structure.getElement(+r.id + 1)) {
            var s = null;
            if (s = topStructure.getElementByIdentifier(i.id, "hoppers", "stairwayId"))
                0 == s.modified && (s.points = i.getHopperPoints());
            else {
                var s = new HopperStructure;
                s.points = i.getHopperPoints(), s.stairwayId = i.id, topStructure.insertElement("hoppers", s)
            }
        }
    }, e.prototype.onDrawDragging = function(t, e, n, i) {
        return this.onMouseMove(t, e, n, i), !1
    }, e.prototype.onDrawDragStart = function(t, e, n, i) {
        0 == this._tmpStairway.points.length && this.onAddStairwayClick(t, e, n, i), this.core.engine2D.registerEventCb("StairwayComponent2D.stair-draw.drag", this.priority, "dragging", null, null, this.onDrawDragging.bind(this), e), this.core.engine2D.registerEventCb("StairwayComponent2D.stair-draw.drag-end", this.priority, "drag-end", null, null, this.onAddStairwayClick.bind(this), e)
    }, e.prototype.onDragStart = function(t, e) {
        this.core.engine2D.registerEventCb("StairwayComponent2D.stair-hover.drag", this.priority, "dragging", null, null, this.onDragStair.bind(this), e), this.core.engine2D.registerEventCb("StairwayComponent2D.stair-hover.drag-end", this.priority, "drag-end", null, null, this.onDragEnd.bind(this), e)
    }, e.prototype.onDragStairSpiral = function(t, e, n, i) {
        var o = n.posDelta.clone().scaleInPlace(1 / this.core.engine2D.getZoom());
        if (i.targeted.point > 0) {
            var r = n.planPos.clone(),
                s = i.points[0],
                a = s.clone().add(new BABYLON.Vector3(i.width, 0, 0)),
                l = s.clone().add(new BABYLON.Vector3(-i.width, 0, 0)),
                h = s.clone().add(new BABYLON.Vector3(0, i.width, 0)),
                c = s.clone().add(new BABYLON.Vector3(0, -i.width, 0)),
                u = s.clone().add(r.clone().subtractInPlace(s).normalize().scaleInPlace(i.width));
            i.points[i.targeted.point] = u.distanceTo(a) < 20 ? a : u.distanceTo(l) < 20 ? l : u.distanceTo(h) < 20 ? h : u.distanceTo(c) < 20 ? c : u
        } else
            for (var p = 0; p < i.points.length; p++)
                i.points[p].addInPlace(o);
        return this.core.engine2D.requestStaticDraw(), !1
    }, e.prototype.onDragStair = function(t, e, n, i) {
        if ("spiral" == i.type)
            return this.onDragStairSpiral(t, e, n, i), !1; {
            var o = i.targeted.step,
                r = i.points[o],
                s = i.points[o + 1],
                a = n.posDelta.clone().scaleInPlace(1 / this.core.engine2D.getZoom());
            this.core.getComponentByName("RoomComponent2D")
        }
        if (i.targeted.point !== !1 && -1 === [0, i.points.length - 1].indexOf(+i.targeted.point))
            for (var l = 0; l < i.points.length; l++)
                i.points[l].addInPlace(a);
        else if (i.targeted.point !== !1 && -1 !== [0, i.points.length - 1].indexOf(+i.targeted.point))
            i.points[i.targeted.point].addInPlace(a);
        else if (o !== !1)
            if (i.points.length > 2) {
                var h = new BABYLON.Vector3(r.y - s.y, s.x - r.x, 0).normalize();
                a.projectOnVector(h), r.addInPlace(a), s.addInPlace(a)
            } else
                for (var l = 0; l < i.points.length; l++)
                    i.points[l].addInPlace(a);
        return this.core.engine2D.requestStaticDraw(), !1
    }, e.prototype.getTargeted = function(t) {
        for (var e = this.core.getSelectedStructure(), n = e.getElements("stairways"), i = 0; i < n.length; i++) {
            var o = n[i];
            if (!(this.core.engine2D.getMode() & this.core.engine2D.MODE_DRAG) && o.isTargeted(t))
                return o
        }
        return null
    }, e.prototype.initialize = function() {
        _item = {
            title: _("Stairway"),
            id: "stairways",
            items: [{
                title: _("Winder Stairs"),
                action: "wnp.engine2d.onAddStairway",
                params: {
                    stairwayType: "straight",
                    bearing: !1
                }
            }, {
                title: _("Landing Stairs"),
                action: "wnp.engine2d.onAddStairway",
                params: {
                    stairwayType: "straight",
                    bearing: !0
                }
            }, {
                title: _("Hanging"),
                action: "wnp.engine2d.onAddStairway",
                params: {
                    stairwayType: "straight",
                    bearing: !1,
                    have_contremarche: !1,
                    limon: 0,
                    rail_a: !1,
                    rail_b: 0,
                    stair_offset: 0
                }
            }, {
                title: _("Spiral"),
                action: "wnp.engine2d.onAddStairway",
                params: {
                    stairwayType: "spiral"
                }
            }]
        }, ujs.notify("wnp.menu.main.add", {
            item: _item,
            menuPath: "draw2D",
            position: 5
        })
    }, e.prototype.onAddStairway = function(t) {
        this._tmpStairway = "spiral" == t.stairwayType ? new SpiralStairwayStructure : new StraightStairwayStructure, this._tmpStairway.height = this.core.getSelectedStructure().height;
        for (var e in this._tmpStairway)
            this._tmpStairway.hasOwnProperty(e) && "undefined" != typeof t[e] && "type" != e && (this._tmpStairway[e] = t[e]);
        this._tmpPoint = null, this.core.helpBubbleManager.display("wnp.2d.draw-staires"), this.core.engine2D.setMode(wanaplan.engine2D.MODE_DRAW), this.core.engine2D.registerEventCb("StairwayComponent2D.add-stair.click", this.priority, "click", this.core.engine2D.MODE_DRAW, null, this.onAddStairwayClick.bind(this), {}), this.core.engine2D.registerEventCb("StairwayComponent2D.dynamic-stair.mouse-move", this.priority, "mouse-move", this.core.engine2D.MODE_DRAW, null, this.onMouseMove.bind(this), {}), this.core.engine2D.registerEventCb("StairwayComponent2D.dynamic-stair.dynamic-draw", this.priority, "dynamic-draw", this.core.engine2D.MODE_DRAW, null, this.onDynamicDraw.bind(this), {}), this.core.engine2D.registerEventCb("StairwayComponent2D.stair.drag-start-draw", this.priority, "drag-start", this.core.engine2D.MODE_DRAW, null, this.onDrawDragStart.bind(this), {})
    }, e.prototype.onDoubleClick = function(t, e) {
        e.targeted && e.targeted.point == e.points.length - 1 && (this.onAddStairway({}), this._tmpStairway = e, this.core.engine2D.setMode(this.core.engine2D.MODE_DRAW))
    }, e.prototype.finalizeTmpStairway = function() {
        var t = this.core.getSelectedStructure();
        if (this._tmpStairway.isValid()) {
            t.insertElement("stairways", this._tmpStairway);
            var e = !1;
            if (e = this.structure.getElement(+t.id + 1)) {
                var n = new HopperStructure;
                n.points = this._tmpStairway.getHopperPoints(), n.stairwayId = this._tmpStairway.id, e.insertElement("hoppers", n)
            }
        }
        this._tmpStairway = new StairwayStructure, this._tmpPoint = null, this.core.engine2D.requestStaticDraw(), this.core.engine2D.setMode(this.core.engine2D.MODE_NORMAL), ujs.notify("wnp.menu.main.deselect")
    }, e.prototype.onAddStairwayClick = function(t, e, n, i) {
        if ("touchUp" == t.type && this.onDrawDragging(t, e, n, i), 0 == this._tmpStairway.points.length || this._tmpPoint) {
            if (this._tmpPoint = this._tmpPoint || n.planPos, this._tmpPoint = this._tmpPoint || n.planPos, this._tmpStairway.points.push(this._tmpPoint.clone()), 1 == this._tmpStairway.points.length) {
                var o = this.core.getComponentByName("RoomComponent2D");
                this._tmpStairway.room = o.isPointInRooms(this._tmpPoint)
            }
            "spiral" == this._tmpStairway.type && (this._tmpStairway.computeSpiralPoints(), this.finalizeTmpStairway()), this._tmpPoint = !1
        } else
            this.finalizeTmpStairway()
    }, e.prototype.onMouseMove = function(t, e, n) {
        if (0 != !this._tmpStairway.points.length || this._tmpPoint || this.core.engine2D.setCursorIcon(this.core.engine2D.symbols2D.drawCursorCheck.bind(this.core.engine2D.symbols2D)), this._tmpStairway.points.length < 2)
            this._tmpPoint = n.planPos.clone();
        else {
            var i = this._tmpStairway.points;
            if (i[i.length - 1].distanceTo(n.planPos) < this._tmpStairway.width / 2)
                return void(this._tmpPoint = null);
            var o = new BABYLON.Ray(i[i.length - 1], this._tmpStairway.getNormalAtPoint(i.length - 1)),
                r = o.closestPointToPoint(n.planPos);
            this._tmpPoint = r.distanceTo(n.planPos) > 20 ? n.planPos.clone() : r
        }
    }, e.prototype._getMagneticRays = function(t, e) {
        var n = [];
        if (e.room) {
            for (var i = 0; i < e.room.points.length - 1; i++) {
                var o = e.room.points[i],
                    r = e.room.points[i + 1];
                n.push(new BABYLON.Ray(t, o.clone().subtractInPlace(r.clone()).normalize()))
            }
            var o = e.room.points[i],
                r = e.room.points[0];
            n.push(new BABYLON.Ray(t, o.clone().subtractInPlace(r.clone()).normalize()))
        } else
            n.push(new BABYLON.Ray(t, new BABYLON.Vector3(0, 1, 0))), n.push(new BABYLON.Ray(t, new BABYLON.Vector3(1, 0, 0)));
        return n
    }, e.prototype.onStaticDraw = function(t, e, n) {
        for (var i = this.core.getSelectedStructure(), o = i.getElements("stairways"), r = 0; r < o.length; r++)
            this.draw(o[r], t, e, n);
        var s = !1;
        if (s = this.structure.getElement(+i.id - 1))
            for (var a = s.getElements("stairways"), r = 0; r < a.length; r++)
                t.save(), t.strokeStyle = "#eeeeee", this.draw(a[r], t, e, n), t.restore()
    }, e.prototype.onDynamicDraw = function(t, e, n) {
        this.draw(this._tmpStairway, t, e, n, this._tmpPoint), t.save(), t.fillStyle = "rgba(60,82,129,0.8)";
        var i = this._tmpStairway;
        if (1 == i.points.length) {
            var o = this.core.engine2D.toRealCoord(i.points[0], e, n);
            if (this._tmpPoint) {
                var r = Math.atan2(this._tmpPoint.y - i.points[0].y, this._tmpPoint.x - i.points[0].x);
                this.core.engine2D.symbols2D.drawGrip(t, o, [!1, !0, !1, !1], r)
            } else
                this.core.engine2D.symbols2D.drawGrip(t, o, [!0, !0, !0, !0])
        } else if (i.points.length > 1) {
            var s = i.points[i.points.length - 1],
                a = i.points[i.points.length - 2],
                r = Math.atan2(s.y - a.y, s.x - a.x),
                o = this.core.engine2D.toRealCoord(s, e, n);
            this.core.engine2D.symbols2D.drawCheckGrip(t, o, [!0, !1, !0, !1], r)
        }
        t.restore()
    }, e.prototype.onContextMenu = function(t, e) {
        var n = [];
        n.push({
            name: "width",
            label: _("Width"),
            type: "slider",
            cast: "int",
            unit: "cm",
            value: {
                min: 40,
                max: 300,
                step: 1,
                value: e.width
            }
        }), n.push({
            name: "height",
            label: _("Height"),
            type: "slider",
            cast: "int",
            unit: "cm",
            value: {
                min: 20,
                max: 500,
                step: 1,
                value: e.height
            }
        }), n.push({
            name: "elevation",
            label: _("Elevation"),
            type: "slider",
            cast: "int",
            unit: "cm",
            value: {
                min: 0,
                max: 250,
                step: 1,
                value: e.elevation
            }
        }), n.push({
            name: "stair_offset",
            label: _("Stair Offset"),
            type: "slider",
            cast: "int",
            unit: "cm",
            value: {
                min: 0,
                max: 10,
                step: 1,
                value: e.stair_offset
            }
        }), n.push({
            name: "stair_thickness",
            label: _("Stair thickness"),
            type: "slider",
            cast: "int",
            unit: "cm",
            value: {
                min: 0,
                max: 50,
                step: 1,
                value: e.stair_thickness
            }
        }), n.push({
            name: "have_contremarche",
            label: _("riser"),
            type: "checkbox",
            value: e.have_contremarche
        }), "straight" == e.type ? (n.push({
            name: "bearing",
            label: _("bearing"),
            type: "checkbox",
            value: e.bearing
        }), n.push({
            name: "rail_a",
            label: _("Right guard-rail"),
            type: "checkbox",
            value: e.rail_a
        }), n.push({
            name: "rail_b",
            label: _("Left guard-rail"),
            type: "checkbox",
            value: e.rail_b
        }), n.push({
            name: "limon",
            label: _("Limon (-1 => default)"),
            type: "text",
            value: e.limon
        })) : "spiral" == e.type && (n.push({
            name: "rail_a",
            label: _("Guard-rail"),
            type: "checkbox",
            value: e.rail_a
        }), n.push({
            name: "diameter",
            label: _("Core diameter"),
            type: "slider",
            cast: "int",
            unit: "cm",
            value: {
                min: 1,
                max: 40,
                step: 1,
                value: e.diameter
            }
        }), n.push({
            name: "orientation",
            label: _("Orientation (clockwise)"),
            type: "checkbox",
            value: e.orientation
        })), this.core.engine2D.displayContextMenu(n, e, this.onContextMenuPropertyChanged.bind(this), this.onContextMenuRemove.bind(this))
    }, e.prototype.onContextMenuPropertyChanged = function(t, e, n) {
        t[e] = n, this.core.engine2D.requestStaticDraw()
    }, e.prototype.onContextMenuRemove = function(t) {
        var e = this.core.getSelectedStructure();
        if (topStructure = this.structure.getElement(+e.id + 1)) {
            var n = topStructure.getElementByIdentifier(t.id, "hoppers", "stairwayId");
            n && n.remove(topStructure)
        }
        t.remove(e)
    }, e.prototype.draw = function(t, e, n, i, o) {
        e.save(), e.translate(n.x, n.y), e.scale(i, i), t.draw(e, o), e.restore()
    }, e.prototype.drawTargetSpiral = function(t, e) {
        if (t.targeted && t.targeted.point > 0)
            this.core.engine2D.symbols2D.drawPointHover(e, this.core.engine2D.toRealCoord(t.points[t.targeted.point]));
        else {
            var n = this.core.engine2D.toRealCoord(t.points[0]);
            n.x = Math.round(n.x) + .5, n.y = Math.round(n.y) + .5, this.core.engine2D.symbols2D.drawGrip(e, n, [!0, !0, !0, !0]);
            for (var i = 1; i < t.points.length; i++)
                this.core.engine2D.symbols2D.drawPoint(e, this.core.engine2D.toRealCoord(t.points[i]))
        }
    }, e.prototype.drawTarget = function(t, e, n, i) {
        if (t) {
            if ("spiral" == t.type)
                return void this.drawTargetSpiral(t, e, n, i);
            if (t.targeted && t.targeted.point !== !1) {
                var o = this.core.engine2D.toRealCoord(t.points[t.targeted.point]);
                this.core.engine2D.symbols2D.drawGrip(e, o, [!0, !0, !0, !0])
            } else if (t.targeted && t.targeted.step !== !1) {
                {
                    var o = this.core.engine2D.toRealCoord(t.points[t.targeted.step]),
                        r = this.core.engine2D.toRealCoord(t.points[t.targeted.step + 1]);
                    Math.atan2(r.y - o.y, r.x - o.x)
                }
                this.core.engine2D.symbols2D.drawSegment(e, o, r)
            }
        }
    }, e
}();