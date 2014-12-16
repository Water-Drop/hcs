var PointStructure = function() {
    var t = function() {
        BaseStructure.call(this, "PointStructure"), this.position = new BABYLON.Vector2(0, 0), this.attachedTo = null, this.needsUpdate = !0, this.parents = [], this._parentIds = null
    };
    return t.prototype = new BaseStructure, t.prototype.serialize = function() {
        this.position.x = Math.round(10 * this.position.x) / 10, this.position.y = Math.round(10 * this.position.y) / 10;
        for (var t = {
                "class": {
                    name: "PointStructure"
                },
                _parentIds: []
            }, e = 0, n = this.parents.length; n > e; e++)
            t._parentIds.push(this.parents[e].id);
        return ujs.serializeObject(this, t, ["name", "id", "position"]), t
    }, t.prototype.deserialize = function(t) {
        ujs.deserializeObject(t, this, ["name", "id", "position"]), this._parentIds = t._parentIds
    }, t.prototype.checkCoherence = function() {}, t.prototype.updateReferences = function(t) {
        this.parents.length = 0;
        for (var e = 0, n = this._parentIds.length; n > e; e++)
            for (var i = 0, o = t.walls.length; o > i; i++)
                t.walls[i].id == this._parentIds[e] && this.parents.push(t.walls[i]);
        delete this._parentIds
    }, t.Deserialize = function(e) {
        var n = new t;
        return n.deserialize(e), n
    }, t.prototype.update = function(t) {
        this.tryMerge(t).tryAttach(t)
    }, t.prototype.translate = function(t) {
        this.position.addInPlace(t)
    }, t.prototype.remove = function(t) {
        this.unAttach(), void 0 != t && t.removeElement("points", this)
    }, t.prototype.replaceParent = function(t, e) {
        var n = this.parents.indexOf(t); - 1 != n && this.parents.splice(n, 1), void 0 !== e && this.parents.push(e)
    }, t.prototype.tryMerge = function(t) {
        if (!this.parents[0])
            return this;
        if (this.parents[0] && this.parents[1])
            return this;
        for (var e = 15, n = t.getElements("points"), i = 0, o = n.length; o > i; i++)
            if (n[i] !== this && !(this.position.distanceTo(n[i].position) > e || n[i].parents[0] && n[i].parents[1])) {
                var r, s;
                if (r = this.wallAttached(t), s = n[i].wallAttached(t), !r && !s || r == n[i].parents[0] && s == this.parents[0]) {
                    n[i].parents.push(this.parents[0]);
                    var a = this.parents[0].points.indexOf(this);
                    this.parents[0].points[a] = n[i], n[i].unAttach(), this.unAttach();
                    var l = n[i];
                    return this.remove(t), l.parents[0].update(t), l
                }
            }
        return this
    }, t.prototype.forceMerge = function(t, e) {
        if (this.parents[0]) {
            var n = t.parents[0];
            n && (this.parents.push(n), n.points[n.points.indexOf(t)] = this), this.unAttach(e), t.unAttach(e), t.remove(e), t.parents.length = 0, this.parents[0].needsUpdate = !0, this.parents[1] && (this.parents[1].needsUpdate = !0)
        } else
            t.position.lerp(this.position, .5), t.unAttach(e), t.needsUpdate = !0
    }, t.prototype.tryAttach = function(t, e) {
        if (!this.parents[0])
            return !1;
        if (this.parents[0] && this.parents[1])
            return !1;
        if (this.isAttached(t))
            return !1;
        for (var n, i = 5, o = t.getElements("walls"), r = [], s = null, a = 0, l = o.length; l > a; a++)
            if ((void 0 === e || e !== o[a]) && o[a] != this.parents[0] && o[a] != this.parents[1] && this.parents[0] && (n = this.parents[0].points[(this.parents[0].points.indexOf(this) + 1) % 2], o[a] != n.wallAttached(t) && o[a].points[0].wallAttached(t) !== this.parents[0] && o[a].points[1].wallAttached(t) !== this.parents[0])) {
                var h = o[a].distanceFromRect(this.position, 0, t);
                if (!(h > i + o[a].thickness)) {
                    var c = o[a].getNearestPointOnRect(this.position, 0, t),
                        u = o[a].getPoints(0).position.subtract(c),
                        p = o[a].getPoints(1).position.subtract(c),
                        d = u.lengthSquared() > p.lengthSquared() ? u : p;
                    r.push({
                        wall: o[a],
                        vector: d.normalize()
                    })
                }
            }
        if (n) {
            for (var m = -1, g = n.position.subtract(this.position).normalize(), a = 0, l = r.length; l > a; a++) {
                var f = g.dot(r[a].vector);
                f >= m && (s = r[a].wall, m = f)
            }
            return s ? (s.attachedPoints.push(this), this.attachedTo = s, this.position = s.getNearestPointOnPolygon(this.position), s.needsUpdate = !0, this.parents[0].needsUpdate = !0, !0) : !1
        }
    }, t.prototype.isAttached = function() {
        return null != this.attachedTo
    }, t.prototype.wallAttached = function() {
        return this.attachedTo
    }, t.prototype.unAttach = function() {
        return this.attachedTo ? (this.attachedTo.attachedPoints.splice(this.attachedTo.attachedPoints.indexOf(this), 1), this.attachedTo = null, !0) : !1
    }, t
}();