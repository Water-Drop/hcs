var RoomStructure = function() {
    var t = 0,
        e = function() {
            BaseStructure.call(this, "roomStructure"), this.points = [], this.holes = [], this.walls = [], this.parentWallSides = [], this.panes = null, this.cycle = null, this.name = "room_" + t++, this.label = _("Room"), this.color = "#FFFFFF", this.area = 0, this.areaPosition = new BABYLON.Vector2, this.textWidth = 0, this.textHeight = 12, this.materials = {}, this.panesMaterials = [], this.elevation = 0, this.height = 0, this.thickness = 5, this.ceiling = 2
        };
    e.prototype = new BaseStructure, e.Deserialize = function(t) {
        var e = new RoomStructure;
        if (t.color) {
            var n = t.color.indexOf("0x"); - 1 != n && (t.color = "#" + t.color.slice(2))
        }
        return e.deserialize(t), e
    }, e.prototype.serialize = function() {
        var t = {
            "class": {
                name: "RoomStructure"
            }
        };
        return ujs.serializeObject(this, t, ["id", "label", "color", "isExternal", "elevation", "thickness", "area", "points", "materials", "panes", "ceiling"]), t
    }, e.prototype.deserialize = function(t) {
        return ujs.deserializeObject(t, this, ["id", "label", "color", "isExternal", "elevation", "thickness", "area", "points", "materials", "panes", "ceiling"]), this.panesMaterials = this.panes, this.panes = [], this.processRoomArea(), this
    }, e.prototype.getCenter = function() {
        return this.areaPosition.clone()
    }, e.prototype.setColor = function(t) {
        this.color = t
    }, e.prototype.getWallPanes = function() {
        return this.panes
    }, e.prototype.updatePaneMaterial = function(t, e) {
        t.addMaterial(e), t.materialInfo.center = t.center(), t.materialInfo.normal = t.offsetVector
    }, e.prototype.copy = function(t) {
        this.materials = t.materials, this.panesMaterials = t.panesMaterials, this.elevation = t.elevation, this.thickness = t.thickness, this.color = t.color, this.label = t.label, (2 != t.ceiling || this.ceiling) && (this.ceiling = t.ceiling)
    };
    var n = function(t) {
        for (var e = 0; 2 > e; e++)
            for (var n = 3; n >= 2; n--)
                if (t[e] == t[n])
                    return t[e];
        return Logger.warning("Parenting problem in cycle"), null
    };
    return e.prototype.createFromCycle = function(t) {
        if (t.length < 3)
            return null;
        for (var n = new e, i = t[t.length - 1].position, o = 0, r = t.length; r > o; o++)
            if (!i.distanceTo(t[o].position < .001) && t[o].parents[0] && t[o].parents[1]) {
                n.points.push(t[o].position), n.walls.push(t[o].parents[1]), n.parentWallSides.push(t[o].parentWallSide[1]), n.height = n.walls[0].height;
                for (var s = 0, a = 1, l = n.walls.length; l > a; a++)
                    n.walls[a] && n.walls[a].type === n.walls[a].TYPE_SEPARATOR && s++, s / n.walls.length > .25 && (n.ceiling = !1), n.walls[a] && n.walls[a].height && n.height !== n.walls[a].height && (n.ceiling = !1, n.height = Math.max(n.walls[a].height, n.height))
            } else
                t.splice(o, 1), o--, r--;
        return n.cycle = t, n.createWallPanes(), n.addFloorOnOvertures(t), n
    }, e.prototype.createWallPanes = function() {
        for (var t, e = [], n = 0, i = this.points.length; i > n; n++)
            this.walls[n] && this.walls[n].type !== this.walls[n].TYPE_SEPARATOR && (t = new WallPane3D([this.points[n], this.points[(n + 1) % i]], this.walls[n], this.parentWallSides[n]), t.setRoom(this), e.push(t));
        return this.panes = e, e
    }, e.prototype.dispatchMaterials = function() {
        var t, e = [],
            n = this.panes.slice(0);
        if (0 !== n.length) {
            for (var i in this.panesMaterials)
                if (this.panesMaterials[i] && this.panesMaterials[i].center && this.panesMaterials[i].normal) {
                    t = null;
                    for (var o, r, s, a = +1 / 0, l = 0, h = n.length; h > l; l++)
                        r = n[l].center(), s = n[l].normal(), o = this.panesMaterials[i].center.distanceTo(r), a > o && this.panesMaterials[i].normal.clone().normalize().dot(s) >= 0 && (a = o, t = l);
                    if (null !== t && (e.push(this.panesMaterials[i]), this.panesMaterials[i].normal = n[t].normal(), this.panesMaterials[i].center = n[t].center(), n[t].materialInfo = this.panesMaterials[i], n.splice(t, 1), 0 === n.length))
                        break
                }
            this.panesMaterials = e
        }
    }, e.prototype.addFloorOnOvertures = function() {
        for (var t = function(t, e) {
                for (var n = 0, i = 0; i < e.length; i++)
                    if (e[i] != t && t.width <= e[i].width && (n = e[i].position.subtract(t.position).length(), n - (e[i].width + t.width) / 2 < 0))
                        return !0;
                return !1
            }, e = this.cycle, i = this.points, o = 0, r = function(t, e) {
                return t.position.x - e.position.x
            }, s = function(t, e) {
                return e.position.x - t.position.x
            }, a = 0, l = e.length; l > a; a++) {
            var h = e[a],
                c = e[(a + 1) % e.length],
                u = [h.parents[0], h.parents[1], c.parents[0], c.parents[1]],
                p = n(u);
            if (p && p.overtures.length > 0) {
                var d = p.getNearestPoint(h.position),
                    m = p.getNearestPoint(c.position),
                    g = d.subtract(p.getPoints(0).position).length(),
                    f = m.subtract(p.getPoints(0).position).length();
                p.overtures.sort(m.subtract(d).dot(p.getWallVector()) > 0 ? r : s);
                for (var y = 0, _ = p.overtures.length; _ > y; y++)
                    if (p.overtures[y].parentWall && p.overtures[y].elevation == this.elevation && t(p.overtures[y], p.overtures) !== !0 && (p.overtures[y].position.x >= g && p.overtures[y].position.x <= f || p.overtures[y].position.x >= f && p.overtures[y].position.x <= g)) {
                        var v, b = h.parents.indexOf(p),
                            w = c.parents.indexOf(p);
                        v = h.parentWallSide[b].equals(c.parentWallSide[w]) ? h.parentWallSide[b].clone() : h.parentWallSide[(b + 1) % 2].equals(c.parentWallSide[w]) ? h.parentWallSide[(b + 1) % 2].clone() : c.parentWallSide[(w + 1) % 2].clone(), v.scaleInPlace(p.thickness / 2);
                        var x = p.overtures[y].getAbsolutePos(),
                            C = x.position.subtract(x.vector.scale(p.overtures[y].width / 2)),
                            M = x.position.add(x.vector.scale(p.overtures[y].width / 2)),
                            D = [C.add(v), C.add(v.clone().normalize().scale(.01)), M.add(v.clone().normalize().scale(.01)), M.add(v)];
                        m.subtract(d).dot(C.subtract(M)) > 0 && D.reverse(), D[0].isOverture = !0, D[1].isOverture = !0, D[2].isOverture = !0, D[3].isOverture = !0, i[a + o] && D[0].distanceTo(i[a + o]) < .01 ? i.splice(a + o, 1, D[0], D[1], D[2], D[3]) : i[a + o + 1] && D[3].distanceTo(i[a + o + 1]) < .01 ? i.splice(a + o + 1, 1, D[0], D[1], D[2], D[3]) : i.splice(a + 1 + o, 0, D[0], D[1], D[2], D[3]), o += 4
                    }
            }
        }
    }, e.prototype.eql = function(t) {
        for (var e = 0; e < this.points.length; e++)
            if (this.points[e].isInArray(t.points, !1) === !1)
                return !1;
        return !0
    }, e.prototype.isPointIn = function(t) {
        return this.points ? t.isPointInPolygon(this.points) ? !0 : !1 : void 0
    }, e.prototype.getRoomArea = function(t) {
        return this.area > 0 && !t ? this.area : this.processRoomArea()
    }, e.prototype.processRoomArea = function() {
        var t = this.points,
            e = t[0],
            n = 0,
            i = 0,
            o = 0;
        for (var r in t)
            n += (e.x + t[r].x) * (e.x * t[r].y - t[r].x * e.y), i += (e.y + t[r].y) * (e.x * t[r].y - t[r].x * e.y), o += e.x * t[r].y - t[r].x * e.y, e = t[r];
        o += e.x * t[0].y - t[0].x * e.y, n += (e.x + t[0].x) * (e.x * t[0].y - t[0].x * e.y), i += (e.y + t[0].y) * (e.x * t[0].y - t[0].x * e.y);
        var s = .5 * o;
        return this.area = Math.abs(s), this.areaPosition.x = 1 * n / (6 * s), this.areaPosition.y = 1 * i / (6 * s), Math.abs(s)
    }, e.prototype.orientedArea = function() {
        for (var t = this.points.length, e = 0, n = t - 1, i = 0; t > i; n = i++)
            e += this.points[n].x * this.points[i].y - this.points[i].x * this.points[n].y;
        return .5 * e
    }, e.prototype.reversePath = function() {
        this.points.reverse()
    }, e.prototype.toVec2Array = function() {
        for (var t = [], e = 0, n = this.points.length; n > e; e++)
            t.push(new BABYLON.Vector2(this.points[e].x, this.points[e].y));
        return t
    }, e.prototype.getOverlappingRectArea = function(t) {
        var e = this.getBoundingBox(),
            n = t.getBoundingBox();
        e.intersect(n);
        var i = e.maximum.x - e.minimum.x,
            o = e.maximum.y - e.minimum.y,
            r = i * o;
        return r = 0 > i || 0 > o ? 0 : r
    }, e.prototype.getLikelihood = function(t) {
        var e = 0,
            n = 0,
            i = 1,
            o = this.getRoomArea(),
            r = t.getRoomArea(),
            s = this.areaPosition.clone(),
            a = t.areaPosition.clone(),
            l = 1 - Math.abs(o - r) / Math.max(o, r),
            h = this.getOverlappingRectArea(t) / Math.min(o, r),
            c = 1 / (1 + s.distanceTo(a));
        return e * h + n * l + i * c
    }, e.prototype.getBoundingBox = function() {
        return BABYLON.BoundingBox.CreateFromPoints(this.points)
    }, e.prototype.getAvailableProperties = function() {
        return []
    }, e.prototype.remove = function() {}, e
}();