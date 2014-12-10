var RoomComponent2D = function() {
    var t = function(t) {
        BaseComponent2D.call(this, t, "RoomComponent2D"), this.priority = 9, this.rooms = [], this._remainings = 0, this.internalRooms = [], this.externalRooms = [], this.useCache = !1, this.displayRoomName = !0, this.core.engine2D.registerEventCb("RoomComponent2D.static-draw", this.priority, "static-draw", null, null, this.onStaticDraw.bind(this), null), this.core.engine2D.registerEventCb("RoomComponent2D.room.click", this.priority, "click", this.core.engine2D.MODE_NORMAL, RoomStructure, this.onContextMenu.bind(this), {})
    };
    return t.prototype = new BaseComponent2D, t.prototype.update = function(t) {
        return !t && !wanaplan.getSelectedStructure().isDirty() || wanaplan.engine2D.getMode() & wanaplan.engine2D.MODE_CONTEXTMENU ? void 0 : (t = t || wanaplan.getSelectedStructure(), this.useCache ? (this.useCache = !1, this.computeRooms(t, PolygonMerger.getCachedCycles())) : this.computeRooms(t))
    }, t.prototype.removeBiggestArea = function() {
        for (var t, e = 0, n = 0, i = this.rooms.length; i > n; n++)
            this.rooms[n].getRoomArea() > e && (t = n, e = this.rooms[n].getRoomArea());
        return this.internalRooms.splice(t, 1), this.rooms.splice(t, 1)
    }, t.prototype.getExternalWalls = function(t) {
        return Logger.warning("getExternalWalls is deprecated"), null
    }, t.prototype.getAllSubSlopes = function(t) {
        var t = t || wanaplan.getSelectedStructure(),
            e = t.getElements("internalRooms");
        0 != e.length && e[0].cycle || (this.update(t), e = t.getElements("internalRooms"));
        for (var n = [], i = function(t, e) {
                var n = 1e-4;
                return t.subtract(e).lengthSquared() < n
            }, o = function(t, e) {
                for (var o = 0, r = n.length; r > o; o++)
                    if (t == n[o].wall && i(e, n[o].side[0]))
                        return n[o];
                return null
            }, r = function(t, e) {
                if (t.parents[e]) {
                    var i = o(t.parents[e], t.parentWallSide[e]);
                    i || (i = n[n.push(new SubSlopeStructure) - 1], i.wall = t.parents[e]), i.points.push(t.position), i.side.push(t.parentWallSide[e]), i.neighbors.push(t.parents[(e + 1) % 2])
                }
            }, s = 0; s < e.length; s++)
            if (!e[s].isExternal)
                for (var a = 0; a < e[s].cycle.length; a++)
                    r(e[s].cycle[a], 0), r(e[s].cycle[a], 1);
        return n
    }, t.prototype.getInternalRooms = function() {
        return this.internalRooms
    }, t.prototype.getExternalRooms = function() {
        return this.externalRooms
    }, t.prototype.identifyRooms = function(t, e) {
        var n, i, o = function(t, e) {
                return e.area - t.area
            },
            r = [];
        t.length <= e.length ? (n = t, i = e.slice(0)) : (n = e, i = t.slice(0)), n.sort(o), i.sort(o);
        for (var s = 0, a = n.length; a > s; s++) {
            for (var l = i[0], h = n[s].getLikelihood(i[0]), c = 0; c < i.length; c++) {
                var u = n[s].getLikelihood(i[c]);
                u > h && (l = i[c], h = u)
            }
            i.splice(i.indexOf(l), 1), r.push(l)
        }
        return r
    }, t.prototype.dispatchRooms = function(t, e) {
        var n = e.getElements(t),
            i = this.identifyRooms(this[t], n);
        if (n.length > 0)
            if (this[t].length <= n.length)
                for (var o = 0; o < i.length; o++)
                    this[t][o].copy(i[o]);
            else
                for (var o = 0; o < i.length; o++)
                    i[o].copy(n[o])
    }, t.prototype.computeRooms = function(t, e) {
        var n, i = t || this.structure.getCurrentStructure(),
            o = [];
        if (this.internalRooms.length = 0, this.externalRooms.length = 0, n = e || PolygonMerger.merge(i.getElements("walls"))) {
            for (var r = 0, s = n.length; s > r; r++) {
                var a = RoomStructure.prototype.createFromCycle(n[r]);
                a.points.length < 3 || (a.processRoomArea(), o.push(a))
            }
            this.rooms = o;
            var l = new RoomHierarchy(o);
            if (window.ejecta && o.length) {
                this.internalRooms = [];
                for (var r = 0, s = o.length - 1; s > r; r++)
                    this.internalRooms.push(o[r])
            }
            l.discrimineRooms(this.internalRooms, this.externalRooms), l.adjustRooms(), this.dispatchRooms("internalRooms", i), this.dispatchRooms("externalRooms", i), this.internalRooms.forEach(function(t) {
                t.dispatchMaterials()
            }), this.externalRooms.forEach(function(t) {
                t.dispatchMaterials()
            }), i.replaceElements("internalRooms", this.internalRooms), i.replaceElements("externalRooms", this.externalRooms)
        }
    }, t.prototype.getTargeted = function(t) {
        for (var e = this.structure.getCurrentStructure().getElements("internalRooms"), n = this.core.engine2D.getZoom(), i = 0, o = e.length; o > i; i++) {
            var r = e[i].areaPosition;
            if (!e[i].textWidth) {
                var s = wanaplan.engine2D.canvas.getContext("2d");
                e[i].textWidth = s.measureText(e[i].label).width
            }
            var a = r.x - e[i].textWidth / 2 / n,
                l = r.x + e[i].textWidth / 2 / n,
                h = r.y - e[i].textHeight / n,
                c = r.y + e[i].textHeight / n;
            if (t.x <= l && t.x >= a && t.y <= c && t.y >= h)
                return e[i]
        }
        return null
    }, t.prototype.onContextMenu = function(t, e) {
        var n = [];
        n.push({
            name: "label",
            label: _("房间名"),
            type: "text",
            cast: "string",
            value: e.label
        }), /*n.push({
            name: "ceiling",
            label: _("天花板"),
            type: "checkbox",
            value: e.ceiling
        }),*/ n.push({
            name: "elevation",
            label: _("地面高度"),
            type: "slider",
            cast: "int",
            unit: "cm",
            value: {
                min: 0,
                max: 80,
                step: 1,
                value: e.elevation
            }
        })/*, n.push({
            name: "thickness",
            label: _("Thickness"),
            type: "slider",
            cast: "int",
            unit: "cm",
            value: {
                min: 5,
                max: 100,
                step: 1,
                value: e.thickness
            }
        }),*/ /*this.core.engine2D.displayContextMenu(n, e, this.onContextMenuPropertyChanged.bind(this))*/
    }, t.prototype.onContextMenuPropertyChanged = function(t, e, n) {
        t[e] = n
    }, t.prototype.onStaticDraw = function(t, e, n) {
        this.drawRooms(t, e, n)
    }, t.prototype.drawRooms = function(t, e, n) {
        var i = wanaplan.getSelectedStructure();
        for (var o in i.internalRooms)
            i.internalRooms[o].area > 250 && this.drawRoom(i.internalRooms[o], t, e, n)
    }, t.prototype.isPointInRooms = function(t) {
        for (var e = 0; e < this.rooms.length; e++) {
            var n = this.rooms[e];
            if (n.isPointIn(t))
                return n
        }
        return !1
    }, t.prototype.drawRoom = function(t, e, n, i) {
        if (t && 0 != t.draw) {
            var e = e || this.ctx;
            e.fillStyle = t.color || "#ffffff", e.beginPath();
            for (var o = 0; o < t.points.length; o++) {
                var r = t.points[o].scale(i).addInPlace(n);
                0 == o ? e.moveTo(r.x, r.y) : e.lineTo(r.x, r.y)
            }
            if (e.fill(), this.displayRoomName) {
//                var s = t.areaPosition.scale(i).addInPlace(n);
//                e.font = "normal 9pt sans-serif", e.textBaseline = "middle", e.textAlign = "center", e.fillStyle = this.core.engine2D.symbols2D.COLOR_ANNOTATION, e.fillText(t.label, s.x, s.y - 7), e.fillText(Math.round(t.area / 100) / 100 + " m²", s.x, s.y + 7)
            }
        }
    }, t
}();