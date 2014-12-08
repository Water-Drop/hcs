SubSlopeStructure = function() {
    var t = function() {
        BaseStructure.call(this, "SubSlopeStructure"), this.points = [], this.side = [], this.wall = null, this.neighbors = [], this.overtures = [], this.offset = 0, this.materials = {}, this.lowHeight = 80, this.hiHeight = 250, this.polygonPoints = [new BABYLON.Vector2, new BABYLON.Vector2, new BABYLON.Vector2, new BABYLON.Vector2], this.needsUpdate = !0
    };
    return t.prototype = new BaseStructure, t.prototype.serialize = function() {
        var t = {
            "class": {
                name: "SubSlopeStructure"
            }
        };
        return ujs.serializeObject(this, t, ["offset", "lowHeight", "hiHeight", "overtures", "materials"]), t
    }, t.Deserialize = function(t) {
        var e = new SubSlopeStructure;
        ujs.deserializeObject(t, e, ["offset", "lowHeight", "_overturesIds", "hiHeight", "overtures", "materials"]);
        for (var n in e.overtures)
            e.overtures[n].parent = e;
        return e.checkCoherence(), e
    }, t.prototype.checkCoherence = function() {
        var t;
        this.lowHeight > this.hiHeight && (t = this.hiHeight, this.hiHeight = this.lowHeight, this.lowHeight = t), 0 === this.lowHeight && (this.lowHeight = 1), 0 == this.materials.length && (this.materials = {}), this.offset > 4e3 && (this.offset = 4e3)
    }, t.prototype.indexClosest = function(t) {
        return this.wall.distanceFrom(t[0]) < this.wall.distanceFrom(t[1]) ? 0 : 1
    }, t.prototype.isSameSide = function(t) {
        var e = this.wall.distanceFrom(t[0]) < this.wall.distanceFrom(t[1]) ? 0 : 1,
            n = t[(e + 1) % 2].subtract(t[e]);
        return n.dot(this.side[0]) >= 0
    }, t.prototype.getVector = function() {
        return this.points[1].subtract(this.points[0])
    }, t.prototype.distanceFrom = function(t) {
        var e = t.points[1].subtract(t.points[0]),
            n = e.lengthSquared(),
            i = this.points[1].subtract(t.points[0]),
            o = this.points[0].subtract(t.points[0]),
            r = i.projectOnVector(e),
            s = o.projectOnVector(e);
        r.dot(e) < 0 && r.copyFromFloats(0, 0, 0), s.dot(e) < 0 && s.copyFromFloats(0, 0, 0), r.dot(e) > n && r.copyFrom(e), s.dot(e) > n && s.copyFrom(e);
        var a = t.points[0].add(r),
            l = t.points[0].add(s);
        return Math.min(a.distanceTo(this.points[1]), l.distanceTo(this.points[0]))
    }, t.prototype.getPolygonPoints = function() {
        this.polygonPoints[1].x = this.wall.points[0].position.x + this.wall.thickness / 2, this.polygonPoints[1].y = this.wall.points[0].position.y + this.wall.thickness / 2, this.polygonPoints[0].x = this.wall.points[1].position.x + this.wall.thickness / 2, this.polygonPoints[0].y = this.wall.points[1].position.y - this.wall.thickness / 2, this.polygonPoints[3].x = this.wall.points[0].position.x - this.offset - this.wall.thickness / 2, this.polygonPoints[3].y = this.wall.points[0].position.y + this.wall.thickness / 2, this.polygonPoints[2].x = this.wall.points[1].position.x - this.offset - this.wall.thickness / 2, this.polygonPoints[2].y = this.wall.points[1].position.y - this.wall.thickness / 2
    }, t.prototype.computePolygonPoints = function(t) {
        if ((t || this.needsUpdate) && 0 != this.side.length) {
            var e = this.side[0].scale(this.offset),
                n = function(t, n) {
                    if (n >= 2) {
                        if (t.offset <= 0)
                            return void(this.polygonPoints[n] = this.polygonPoints[n - 2].add(e.clone().normalize().scaleInPlace(this.offset + this.wall.thickness)));
                        var i = t.side[0].scale(t.offset),
                            o = this.points[0].add(e),
                            r = this.points[1].add(e),
                            s = t.points[0].add(i),
                            a = t.points[1].add(i),
                            l = BABYLON.Vector2.Intersect(o, r, s, a, Math.PI / 50);
                        if (!l)
                            return Logger.warning("No intersect"), void(this.polygonPoints[n] = this.polygonPoints[n - 2].add(e));
                        this.polygonPoints[n].copyFrom(l)
                    } else {
                        var o = this.polygonPoints[0],
                            r = this.polygonPoints[1],
                            s = t.points[0].subtract(t.side[0].scale(t.wall.thickness)),
                            a = t.points[1].subtract(t.side[0].scale(t.wall.thickness)),
                            l = BABYLON.Vector2.Intersect(o, r, s, a, Math.PI / 50);
                        if (!l)
                            return;
                        this.polygonPoints[n].copyFrom(l)
                    }
                };
            if (this.needsUpdate = !1, this.polygonPoints[0].copyFrom(this.points[0]), this.polygonPoints[1].copyFrom(this.points[1]), this.offset > 0) {
                var i = this.wall.thickness;
                this.polygonPoints[0].subtractInPlace(this.side[0].scale(i)), this.polygonPoints[1].subtractInPlace(this.side[0].scale(i))
            }
            var o = function(t) {
                var i = .001;
                if (this.neighbors[t]) {
                    for (var o = 0; o < this.neighbors[t].subSlopes.length && this.distanceFrom(this.neighbors[t].subSlopes[o]) > i;)
                        o++;
                    var r = this.neighbors[t].subSlopes[o];
                    r && r.wall != this.wall ? (n.call(this, r, t), n.call(this, r, t + 2)) : this.polygonPoints[t + 2] = this.polygonPoints[t].add(e.clone().normalize().scaleInPlace(this.offset + this.wall.thickness))
                } else
                    this.polygonPoints[t + 2] = this.polygonPoints[t].add(e.clone().normalize().scaleInPlace(this.offset + this.wall.thickness))
            };
            o.call(this, 0), o.call(this, 1)
        }
    }, t.prototype.isPointIn = function(t) {
        var e = [this.polygonPoints[0], this.polygonPoints[1], this.polygonPoints[3], this.polygonPoints[2]];
        return t.isPointInPolygon(e)
    }, t.prototype.plane = function() {
        if (this.offset <= 0)
            return null;
        var t = [new BABYLON.Vector3(this.polygonPoints[0].x, this.lowHeight, -this.polygonPoints[0].y), new BABYLON.Vector3(this.polygonPoints[1].x, this.lowHeight, -this.polygonPoints[1].y), new BABYLON.Vector3(this.polygonPoints[3].x, this.hiHeight, -this.polygonPoints[3].y), new BABYLON.Vector3(this.polygonPoints[2].x, this.hiHeight, -this.polygonPoints[2].y)],
            e = t[2].subtract(t[1]),
            n = t[0].subtract(t[1]);
        if (e.cross(n), e.y < 0) {
            var i = t[0];
            t[0] = t[1], t[1] = i, i = t[2], t[2] = t[3], t[3] = i
        }
        return t
    }, t.prototype.remove = function() {
        this.offset = 0, this.lowHeight = 80, this.hiHeight = 250, this.needsUpdate = !0, this.overtures.length = 0
    }, t.prototype.getNearestSubSlope = function(t, e) {
        for (var n, i = e.getElements("SubSlopeStructure"), o = null, r = +1 / 0, s = 0, a = i.length; a > s; s++)
            n = i[s].distanceFrom(t), r > n && (o = i[s], r = n);
        return o
    }, t.prototype.addMaterial = function(t, e, n) {
        n.colorOnly ? this.materials[n.materialIndex] ? (this.materials[n.materialIndex].color.r = n.color.r, this.materials[n.materialIndex].color.g = n.color.g, this.materials[n.materialIndex].color.b = n.color.b) : (this.materials[n.materialIndex] = n, n.colorOnly = !1) : this.materials[n.materialIndex] = n
    }, t
}();