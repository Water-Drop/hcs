WallStructure = function() {
    var t = function() {
        BaseStructure.call(this, "WallStructure"), this.points = [new PointStructure, new PointStructure], this._edgePolygons = [
            [],
            []
        ], this.attachedPoints = [], this.overtures = [], this.height = 250, this.thickness = 30, this.measureDist = 15, this.measureDisplayed = !0, this.materials = {}, this.subSlopes = [], this.needsUpdate = !0, this.instance = "virtual", this.TYPE_NORMAL = 1, this.TYPE_SEPARATOR = 2, this.type = this.TYPE_NORMAL, this._pointsIds = [], this._attachedPointsIds = [], this._overturesIds = []
    };
    return t.prototype = new BaseStructure, t.prototype.serialize = function() {
        for (var t = {
                "class": {
                    name: "WallStructure"
                },
                _pointsIds: [],
                _attachedPointsIds: [],
                _overturesIds: []
            }, e = 0, n = this.points.length; n > e; e++)
            t._pointsIds.push(this.points[e].id);
        for (var e = 0, n = this.attachedPoints.length; n > e; e++)
            t._attachedPointsIds.push(this.attachedPoints[e].id);
        for (var e = 0, n = this.overtures.length; n > e; e++)
            t._overturesIds.push(this.overtures[e].id);
        return ujs.serializeObject(this, t, ["id", "type", "name", "instance", "height", "thickness", "measureDist", "measureDisplayed", "subSlopes"]), t
    }, t.prototype.deserialize = function(t) {
        ujs.deserializeObject(t, this, ["id", "type", "name", "instance", "height", "thickness", "measureDist", "materials", "measureDisplayed", "subSlopes", "_overturesIds", "_pointsIds", "_attachedPointsIds"]), this.thickness = Math.max(.1, this.thickness)
    }, t.prototype.checkCoherence = function(t) {
        if (this.points.length < 2)
            this.remove(t);
        else if (this.getLength() < 5)
            this.remove(t);
        else {
            var e = this.points[0],
                n = this.points[1];
            (Math.abs(e.position.x) > 5e3 || Math.abs(e.position.y) > 5e3) && (Math.abs(n.position.x) > 5e3 || Math.abs(n.position.y) > 5e3) && this.remove(t)
        }
    }, t.prototype.computeDefault = function(t) {
        var e = this.getNormalVector(this.thickness / 2),
            n = this.getPoints(t).position,
            i = n.add(e),
            o = (n.clone(), n.subtract(e));
        this._edgePolygons[t] = 0 == t ? [i, o] : [o, i]
    }, t.prototype.computeWeak = function(t) {
        this.computeDefault(t);
        var e = 0 == t ? -1 : 1;
        this._edgePolygons[t][1].addInPlace(this.getWallVector().normalize().scaleInPlace(e * this.getPoints(t).attachedTo.thickness / 4))
    }, t.prototype.computeStrong = function(t) {
        var e = Math.PI / 16,
            n = function(t, n, i, o) {
                return BABYLON.Vector2.Intersect(t, n, i, o, e)
            },
            i = this.getAxis(t),
            o = i[0],
            r = i[1],
            s = this.getPoints(t),
            a = s.parents.indexOf(this),
            l = s.parents[(a + 1) % 2],
            h = l.points.indexOf(s);
        if (!l)
            return void Logger.warning("Point avec un seul parent ne devrait pas ¨ºtre appel¨¦ par computeStrong");
        i = l.getAxis(h);
        var c, u, p, d, m = i[0],
            g = i[1];
        return h == t ? (c = n.call(this, o[0], o[1], g[0], g[1]), u = s.position.clone(), p = n.call(this, r[0], r[1], m[0], m[1])) : (c = n.call(this, o[0], o[1], m[0], m[1]), u = s.position.clone(), p = n.call(this, r[0], r[1], g[0], g[1])), c || (c = o[t]), p || (p = r[t]), d = [c, u, p], 1 == t && d.reverse(), this._edgePolygons[t] = d, d
    }, t.prototype.updateReferences = function(t) {
        var e = function(t, e, n) {
            n.length = 0;
            for (var i = 0, o = t.length; o > i; i++)
                for (var r = 0, s = e.length; s > r; r++)
                    e[r].id == t[i] && n.push(e[r])
        };
        e(this._pointsIds, t.points, this.points), e(this._attachedPointsIds, t.points, this.attachedPoints), e(this._overturesIds, t.overtures, this.overtures);
        for (var n = 0, i = this.subSlopes.length; i > n; n++)
            this.subSlopes[n].wall = this;
        for (var n = 0, i = this.overtures.length; i > n; n++)
            this.overtures[n].parentWall = this;
        for (var n = 0; n < this.attachedPoints.length; n++)
            this.attachedPoints[n].attachedTo = this;
        delete this._pointsIds, delete this._attachedPointsIds, delete this._overturesIds
    }, t.Deserialize = function(t) {
        return Logger.warning("Deserialize is virtual"), console.warn("Impossible de deserialiser un mur virtuel, l'instance par d¨¦faut choisie est polygonWall"), PolygonWall.Deserialize(t)
    }, t.prototype.getPoints = function(t) {
        return 0 != t && 1 != t ? [this.points[0], this.points[1]] : this.points[t]
    }, t.prototype.isTargeted = function(t) {
        var e = this.getPoints(),
            n = this.getWallVector(),
            i = new BABYLON.Vector2,
            o = new BABYLON.Vector2;
        if (i = t.subtract(e[0].position), o.copyFrom(i), i.projectOnVector(n), o.subtractInPlace(i), o.length() <= this.thickness / 2 + WallComponent2D.WALL_OFFSET) {
            var r = i.dot(n);
            if (r > 0 && r < n.lengthSquared())
                return !0
        }
        return !1
    }, t.prototype.setPoints = function(t, e) {
        for (var n in this.points)
            for (var i = this.points[n].parents.length - 1; i >= 0; i--)
                this.points[n].parents[i] == this && this.points[n].parents.splice(i, 1);
        if (t instanceof Array)
            2 == t.length && (this.points[0] = t[0], this.points[1] = t[1]);
        else {
            if (!(t instanceof PointStructure) || 0 != e && 1 != e)
                throw {
                    name: "Argument Error",
                    level: "Show Stopper",
                    message: "Bad Arguments for WallStructure.setPoints"
                };
            this.points[e] = t
        }
        for (var n in this.points)
            this.points[n].parents.push(this)
    }, t.prototype.getPolygon = function() {
        return 0 == this._edgePolygons[0].length && this.computeDefault(0), 0 == this._edgePolygons[1].length && this.computeDefault(1), this._edgePolygons[0].concat(this._edgePolygons[1])
    }, t.prototype.getWallVector = function() {
        return this.points[1].position.subtract(this.points[0].position)
    }, t.prototype.getLength = function() {
        return this.getWallVector().length()
    }, t.prototype.draw = function(t) {
        var e = this.getPolygon();
        t.beginPath(), t.moveTo(e[0].x, e[0].y);
        for (var n = 1; n < e.length; n++)
            t.lineTo(e[n].x, e[n].y);
        t.fill(), this.type === this.TYPE_SEPARATOR && (t.lineWidth = 4, t.stroke())
    }, t.prototype.update = function(t) {
        this.updateAttachedPoints(t)
    }, t.prototype.translate = function() {
        Logger.warning("translate is virtual")
    }, t.prototype.getIntersections = function(t) {
        var e, n, i, o = t.getElements("walls"),
            r = 5,
            s = r * r,
            a = [];
        for (var l in o)
            if (o[l] !== this && (n = this, i = o[l], e = BABYLON.Vector2.Intersect(n.points[0].position, n.points[1].position, i.points[0].position, i.points[1].position), void 0 !== e && !(n.distanceFrom(e) > BABYLON.Vector2.Precision || i.distanceFrom(e) > BABYLON.Vector2.Precision))) {
                var h = [n.points[0].position, n.points[1].position, i.points[0].position, i.points[1].position],
                    c = !1;
                for (var u in h)
                    c = c || e.distanceToSquared(h[u]) < s;
                if (!c) {
                    var p = new PointStructure;
                    p.parents = [n, i], p.position.copyFrom(e), a.push(p)
                }
            }
        return a.sort(function(t, e) {
            return t.position.distanceToSquared(t.parents[0].points[0].position) - e.position.distanceToSquared(t.parents[0].points[0].position)
        }), a
    }, t.prototype.splitAtIntersections = function() {
        Logger.warning("splitAtIntersections is virtual")
    }, t.prototype.reorganizeOnSplit = function(t, e) {
        if (!(e.length <= 1)) {
            for (var n = [], i = [], o = 0, r = e.length; r > o; o++)
                n = n.concat(e[o].overtures), i = i.concat(e[o].attachedPoints), e[o].attachedPoints = [], e[o].subSlopes.forEach(function(t) {
                    t.remove()
                });
            for (var o = 0, r = n.length; r > o; o++) {
                var s = n[o].parentWall.getWallVector();
                s.normalize(), s.scaleInPlace(n[o].position.x);
                for (var a = s.add(n[o].parentWall.getPoints(0).position), l = 0; e[l] && !e[l].isPointOn(a);)
                    l++;
                e[l] ? (n[o].computePositionOnWallChange(e[l]), n[o].setParentWall(e[l])) : Logger.warning("Erreur d'attachage !")
            }
            for (var o = 0, r = i.length; r > o; o++) {
                for (var l = 0; e[l] && !e[l].isPointInPolygon(i[o].position);)
                    l++;
                e[l] ? (e[l].attachedPoints.push(i[o]), i[o].attachedTo = e[l]) : Logger.warning("Erreur d'attachage !")
            }
        }
    }, t.prototype.weakToStrong = function(t, e) {
        if (t.attachedTo != this)
            return Logger.warning("weakToStrong doit ¨ºtre appel¨¦ sur un point attach¨¦ du mur"), !1;
        var n = this.getPoints(t.position.distanceTo(this.getPoints(0).position) < t.position.distanceTo(this.getPoints(1).position) ? 0 : 1);
        return n.attachedTo ? (n.unAttach(), t.unAttach(), t.forceMerge(n, e)) : (t.unAttach(), this.points[this.points.indexOf(n)] = t, t.parents.push(this), n.attachedTo = this, this.attachedPoints.push(n), n.parents.splice(n.parents.indexOf(this), 1), 0 == n.parents.length ? n.remove(e) : n.parents[0].needsUpdate = !0), t.parents[0].needsUpdate = !0, t.parents[1].needsUpdate = !0, !0
    }, t.prototype.tryMerge = function() {
        Logger.warning("tryMerge is virtual")
    }, t.prototype.updateAttachedPoints = function() {
        Logger.warning("updateAttachedPoints is virtual")
    }, t.prototype.updateOvertures = function(t) {
        for (var e = 0, n = this.overtures.length; n > e; e++)
            this.overtures[e] && (this.overtures[e].projectOnWall(), this.overtures[e].clampSize(!0, t))
    }, t.prototype.getNearestPoint = function(t, e) {
        var n, e = e || 0,
            i = this.getWallVector(),
            o = i.length(),
            r = t.subtract(this.getPoints(0).position);
        return r.projectOnVector(i), n = r.dot(i), -e * o >= n ? this.getPoints(0).position.subtract(i.normalize().scaleInPlace(e)) : n >= i.lengthSquared() + o * e ? this.getPoints(1).position.add(i.normalize().scaleInPlace(e)) : this.getPoints(0).position.add(r)
    }, t.prototype.getNearestPointOnAxe = function(t) {
        var e, n = this.getWallVector(),
            i = t.subtract(this.points[0].position);
        return i.projectOnVector(n), e = i.dot(n), this.points[0].position.add(i)
    }, t.prototype.getNearestPointOnRect = function() {
        Logger.warning("getNearestPointOnRect is virtual")
    }, t.prototype.isPointInPolygon = function(t) {
        var e = this.getPolygon();
        return e[0] && t.isPointInPolygon(e) ? !0 : !1
    }, t.prototype.getNearestPointOnPolygon = function(t) {
        if (this.isPointInPolygon(t))
            return t.clone();
        var e = this.getPolygon();
        if (!e[0])
            return Logger.warning("getNearestPointOnPolygon a ¨¦t¨¦ appel¨¦ sur un mur au polygone vide"), null;
        for (var n, i, o = +1 / 0, r = null, s = 0, a = e.length; a > s; s++)
            i = t.projectOnSegment(e[s], e[(s + 1) % a]), n = i.distanceTo(t), o > n && (r = i, o = n);
        return r
    }, t.prototype.getBoundingBox = function() {
        for (var t = +1 / 0, e = -1 / 0, n = +1 / 0, i = -1 / 0, o = this.getPolygon(), r = 0, s = o.length; s > r; r++)
            o[r].x < t && (t = o[r].x), o[r].x > e && (e = o[r].x), o[r].y < n && (n = o[r].y), o[r].y > i && (i = o[r].y);
        return {
            min: new BABYLON.Vector2(t, n),
            max: new BABYLON.Vector2(e, i)
        }
    }, t.prototype.getNearestWall = function(t, e) {
        for (var n, i = e.getElements("walls"), o = null, r = +1 / 0, s = 0, a = i.length; a > s; s++)
            n = i[s].distanceFrom(t), r > n && (o = i[s], r = n);
        return o
    }, t.prototype.distanceFrom = function(t) {
        var e = this.getNearestPoint(t),
            n = new BABYLON.Vector2;
        return n = t.subtract(e), n.length()
    }, t.prototype.distanceFromRect = function(t, e, n) {
        var i = this.getNearestPointOnRect(t, e, n),
            o = new BABYLON.Vector2;
        return o = t.subtract(i), o.length()
    }, t.prototype.vectorTo = function(t) {
        var e = this.getNearestPoint(t),
            n = new BABYLON.Vector2;
        return n = t.subtract(e)
    }, t.prototype.isPointOn = function(t, e) {
        var e = e || 1e-5,
            n = this.distanceFrom(t);
        return e >= n
    }, t.prototype.getNormalVector = function(t) {
        var t = void 0 === t ? 1 : t,
            e = new BABYLON.Vector2(this.points[0].position.y - this.points[1].position.y, this.points[1].position.x - this.points[0].position.x);
        return e.normalize(), e.scaleInPlace(t), e
    }, t.prototype.sortAttached = function() {
        var t = this;
        t.attachedPoints.sort(function(e, n) {
            return e.position.distanceToSquared(t.points[0].position) - n.position.distanceToSquared(t.points[0].position)
        })
    }, t.prototype.getAllPoints = function(t) {
        var e = [this.getPoints(0)];
        return this.sortAttached(), e = e.concat(this.attachedPoints), e.push(this.getPoints(1)), -1 == t && e.reverse(), e
    }, t.prototype.remove = function(t) {
        for (var e = 0, n = this.points.length; n > e; e++)
            for (var i = this.points[e].parents.length - 1; i >= 0; i--)
                this.points[e].parents[i] == this && this.points[e].parents.splice(i, 1);
        for (var o, e = this.attachedPoints.length - 1; e >= 0; e--)
            o = this.attachedPoints[e], o.unAttach(), o.needsUpdate = !0, o.parents[0] && (o.parents[0].needsUpdate = !0);
        if (void 0 != t) {
            for (var e = 0, n = this.points.length; n > e; e++)
                o = this.points[e], 0 == o.parents.length ? (o.unAttach(t), o.remove(t)) : o.needsUpdate = !0;
            for (var e = this.overtures.length - 1; e >= 0; e--)
                this.overtures[e].remove(t);
            t.removeElement("walls", this)
        }
    }, t.prototype.addToStructure = function(t) {
        for (var e in this.points)
            t.insertElement("points", this.points[e]);
        t.insertElement("walls", this)
    }, t.prototype.paralleleTo = function(t) {
        return void 0 === BABYLON.Vector2.Intersect(this.getPoints(0).position, this.getPoints(1).position, t.getPoints(0).position, t.getPoints(1).position)
    }, t.prototype.addMaterial = function(t, e, n, i) {
        return Logger.warning("WallStructure.addMaterial is deprecated"), null
    }, t
}();