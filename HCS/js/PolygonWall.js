PolygonWall = function() {
    var t = function() {
        WallStructure.call(this, "PolygonWall"), this.polygonPoints = [], this.instance = "polygon"
    };
    return t.prototype = new WallStructure, t.prototype.serialize = function() {
        var t = WallStructure.prototype.serialize.call(this);
        return t.class.name = "PolygonWall", t
    }, t.prototype.deserialize = function(t) {
        WallStructure.prototype.deserialize.call(this, t)
    }, t.Deserialize = function(e) {
        var n = new t;
        return n.deserialize(e), n
    }, t.prototype.getAxis = function() {
        var t = (this.getWallVector(), this.getNormalVector(this.thickness / 2)),
            e = this.getPoints(0).position,
            n = this.getPoints(1).position;
        return [
            [e.add(t), n.add(t)],
            [e.subtract(t), n.subtract(t)]
        ]
    }, t.prototype.translate = function(e, n) {
        for (var i = function(e, i, o) {
                var r = new t,
                    s = new PointStructure;
                s.position.copyFrom(e.position), s.parents = [r, i], e.parents = [o, r], r.points = [e, s], r.thickness = Math.min(i.thickness, o.thickness), r.height = o.height, r.type = i.type;
                var a = i.points[0] == e ? 0 : 1;
                i.points[a] = s, n.insertElement("walls", r), n.insertElement("points", s)
            }, o = Math.PI / 8, r = this.points[0].position.add(e), s = this.points[1].position.add(e), a = null, l = null, h = 0, c = this.points[0].parents.length; c > h; h++)
            this.points[0].parents[h] != this && (a = this.points[0].parents[h], a.needsUpdate = !0);
        for (var h = 0, c = this.points[1].parents.length; c > h; h++)
            this.points[1].parents[h] != this && (l = this.points[1].parents[h], l.needsUpdate = !0);
        var u, p = .01,
            d = function(t, a, l) {
                if (null !== t) {
                    var h = t.getPoints(0).position,
                        c = t.getPoints(1).position;
                    if (t.getLength() < p && (c = h.add(e)), u = BABYLON.Vector2.GetAbsoluteSine(r, s, h, c), o > u && void 0 !== n)
                        t.getLength() > 0 && i(this.points[a], t, this);
                    else {
                        var d = BABYLON.Vector2.Intersect(r, s, h, c);
                        d && l.copyFromFloats(d.x, d.y)
                    }
                }
            }.bind(this);
        d(a, 0, r), d(l, 1, s);
        this.getPoints(0).position.clone(), this.getPoints(1).position.clone();
        this.getPoints(0).position.x = r.x, this.getPoints(0).position.y = r.y, this.getPoints(1).position.x = s.x, this.getPoints(1).position.y = s.y;
        var m, g = function(t) {
            var e = this.getPoints(0).position,
                i = this.getPoints(1).position,
                o = t.parents[0];
            return m = BABYLON.Vector2.Intersect(e, i, o.getPoints(0).position, o.getPoints(1).position), void 0 === m ? (t.unAttach(n), !1) : (m = new BABYLON.Vector2(m.x, m.y), this.distanceFromRect(m, 0, n) > BABYLON.Vector2.Precision ? !0 : !1)
        };
        if (void 0 !== n) {
            a && a.updateOvertures(n), l && l.updateOvertures(n), this.updateAttachedPoints(n);
            for (var f, h = 0; 2 > h; h++)
                f = this.getPoints(h).attachedTo, f && (g.call(f, this.getPoints(h)) ? (m && this.getPoints(h).position.copyFrom(m), f.weakToStrong(this.getPoints(h), n)) : this.getPoints(h).position.copyFrom(m))
        }
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
    }, t.prototype.splitAtIntersections = function(e) {
        var n = this.getIntersections(e),
            i = [this];
        for (var o in n) {
            var r = new t,
                s = new PointStructure;
            s.position.copyFrom(n[o].position), s.parents = [r], r.points = [this.getPoints(0), s], r.getPoints(0).replaceParent(this, r), r.thickness = this.thickness, r.type = this.type, r.height = this.height, n[o].parents[1].attachedPoints.push(s), s.attachedTo = n[o].parents[1], n[o].parents[1].attachedPoints.push(n[o]), n[o].attachedTo = n[o].parents[1], this.points[0] = n[o], this.points[0].parents = [this], e.insertElement("walls", r), e.insertElement("points", n[o]), e.insertElement("points", s), i.push(r), r.needsUpdate = !0
        }
        this.needsUpdate = !0, t.prototype.reorganizeOnSplit(e, i)
    }, t.prototype.tryMerge = function(e) {
        for (var n = e.getElements("walls"), i = (e.getElements("points"), function(t, e, n, i) {
                return -1 != i.indexOf(t) && i.splice(i.indexOf(t), 1), -1 != i.indexOf(e) && i.splice(i.indexOf(e), 1), void 0 !== n && i.push(n), i
            }), o = 15, r = Math.PI / 18, s = 0, a = n.length; a > s; s++)
            if (n[s] != this) {
                var l, h, c, u, p = this,
                    d = n[s],
                    m = p.getPoints(),
                    g = d.getPoints();
                if (l = p.distanceFrom(g[0].position), h = p.distanceFrom(g[1].position), c = d.distanceFrom(m[0].position), u = d.distanceFrom(m[1].position), !(l > o && h > o && c > o && u > o) && p.thickness == d.thickness && p.type == d.type && p.height == d.height) {
                    var f, y = p.getWallVector(),
                        _ = d.getWallVector(),
                        v = new BABYLON.Vector2(y.x, y.y).normalize(),
                        b = new BABYLON.Vector2(_.x, _.y).normalize();
                    if (f = Math.abs(v.determinant(b)), !(f > r)) {
                        for (var w, x, C, M, D, B = -1 / 0, A = [m[0], m[1], g[0], g[1]], E = 0; 4 > E; E++)
                            for (var T = 0; 4 > T; T++)
                                if (E != T && (D = A[E].position.subtract(A[T].position).length(), D > B)) {
                                    w = A[E], x = A[T];
                                    for (var S = -1, L = -1, O = 0; 4 > O; O++)
                                        O != E && O != T && (-1 != S ? -1 == L && (L = O) : S = O);
                                    C = A[S], M = A[L], B = D
                                }
                        var P, I;
                        if (P = C.wallAttached(e), I = M.wallAttached(e), !P || P !== I) {
                            var N = new t;
                            N.points[0] = w, N.points[1] = x, N.attachedPoints = p.attachedPoints.concat(d.attachedPoints);
                            for (var R = 0; R < N.attachedPoints.length; R++)
                                N.attachedPoints[R].attachedTo = N;
                            N.thickness = p.thickness, N.type = p.type, N.height = p.height;
                            for (var E = p.overtures.length - 1; E >= 0; E--)
                                p.overtures[E].computePositionOnWallChange(N), p.overtures[E].setParentWall(N);
                            for (var E = d.overtures.length - 1; E >= 0; E--)
                                d.overtures[E].computePositionOnWallChange(N), d.overtures[E].setParentWall(N);
                            e.insertElement("walls", N), w.parents = i(p, d, N, w.parents), x.parents = i(p, d, N, x.parents), w.unAttach(e), x.unAttach(e), w.position = d.getLength() > 5 ? d.getNearestPointOnAxe(w.position) : p.getNearestPointOnAxe(w.position), x.position = d.getLength() > 5 ? d.getNearestPointOnAxe(x.position) : p.getNearestPointOnAxe(x.position);
                            for (var E = 0, a = N.attachedPoints.length; a > E; E++)
                                N.attachedPoints[E].position = N.getNearestPoint(N.attachedPoints[E].position);
                            for (var k = [C, M], E = 0; 2 > E; E++)
                                if (k[E] !== w && k[E] !== x)
                                    if (void 0 != k[E].parents[0] && void 0 != k[E].parents[1]) {
                                        if (k[E].parents[0] == p && k[E].parents[1] == d || k[E].parents[0] == d && k[E].parents[1] == p)
                                            k[E].unAttach(e), k[E].remove(e);
                                        else if (k[E].parents = i(p, d, void 0, k[E].parents), k[E].position = N.getNearestPoint(k[E].position), k[E].parents[0] !== N) {
                                            var V = k[E].tryMerge(e);
                                            V === k[E] && (N.attachedPoints.push(k[E]), k[E].attachedTo = N, k[E].position = N.getNearestPoint(k[E].position))
                                        }
                                    } else
                                        k[E].unAttach(e), k[E].remove(e);
                            return p.remove(e), d.remove(e), w.needsUpdate = !0, x.needsUpdate = !0, N.tryMerge(e)
                        }
                    }
                }
            }
        return this
    }, t.prototype.updateAttachedPoints = function(t) {
        for (var e = this.attachedPoints.length - 1; e >= 0; e--) {
            var n = this.attachedPoints[e].parents[0],
                i = this.getPoints(0).position,
                o = this.getPoints(1).position;
            if (n) {
                var r = BABYLON.Vector2.Intersect(i, o, n.getPoints(0).position, n.getPoints(1).position, Math.PI / 18),
                    s = this.attachedPoints[e];
                if (void 0 !== r) {
                    if (this.distanceFrom(r) > BABYLON.Vector2.Precision) {
                        this.attachedPoints[e].position.copyFrom(r);
                        var s = this.attachedPoints[e];
                        this.weakToStrong(this.attachedPoints[e], t)
                    } else
                        this.attachedPoints[e].position.copyFrom(r);
                    n.needsUpdate = !0, n.updateOvertures(t)
                } else
                    s.unAttach(t), s.needsUpdate = !0
            } else
                Logger.warning("Un point attach¨¦ n'a plus de parent !"), Logger.warning(this)
        }
    }, t.prototype.getNearestPointOnRect = function(t, e) {
        for (var e = e || 0, n = this.getPolygon(), i = [], o = this.getWallVector().normalize(), r = 0, s = n.length; s > r; r++)
            i.push(this.getNearestPointOnAxe(n[r]));
        for (var a, l = +1 / 0, h = -1 / 0, c = new BABYLON.Vector2, u = this.getPoints(0).position, r = 0, s = i.length; s > r; r++)
            a = c.copyFrom(i[r]).subtractInPlace(u).dot(o), l > a && (l = a), a > h && (h = a);
        var a, p = o.scale(l).addInPlace(u),
            d = o.scale(h).addInPlace(u),
            m = d.subtract(p),
            g = m.length(),
            f = t.subtract(p);
        return f.projectOnVector(m), a = f.dot(m), -e * g >= a ? p.subtract(m.normalize().scaleInPlace(e)) : a >= m.lengthSquared() + g * e ? d.add(m.normalize().scaleInPlace(e)) : p.add(f)
    }, t
}();