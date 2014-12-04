var PolygonMerger = function() {
    var t = 1e5, e = function(t, e) {
        var n;
        n = t, t = e, e = n
    }, n = function(e) {
        return Math.round(e * t) / t
    }, i = function(t) {
        this.position = new BABYLON.Vector2, this.position.copyFromFloats(n(t.x), n(t.y)), this.parents = []
    };
    i.prototype.replaceParent = function(t, e) {
        var n = this.parents.indexOf(t);
        -1 != n && (this.parents[n] = e)
    }, i.prototype.clone = function() {
        var t = new i(this.position);
        return t.parents = this.parents.slice(0), t
    }, i.prototype.removeParent = function(t) {
        var e = this.parents.indexOf(t);
        -1 != e && this.parents.splice(e, 1)
    };
    var o = function() {
        this.points = [], this.intersections = [], this.parent = null, this.parentWallSide = null
    };
    o.prototype.length = function() {
        return this.points[1].position.distanceTo(this.points[0].position)
    }, o.prototype.clone = function() {
        for (var t = new o, e = 0, n = this.points.length; n > e; e++)
            t.points.push(this.points[e].clone());
        return t.parent = this.parent, t.parentWallSide = this.parentWallSide, t
    };
    var r = function() {
        this.edges = []
    };
    r.prototype.fromWall = function(t) {
        var e = t.getPolygon();
        if (!(e.length < 1)) {
            for (var n, r, s = null, a = null, l = 0, h = e.length; h > l; l++)
                n = new i(e[l]), r = new o, r.parent = t, r.points.push(n), n.parents.push(r), a && (n.parents.push(a), a.points.push(n)), a = r, s = n, this.edges.push(r);
            this.edges[0].points[0].parents.push(r), r.points.push(this.edges[0].points[0]);
            for (var l = 0, h = this.edges.length; h > l; l++)
                this.edges[l].parentWallSide = this.getEdgeNormal(l).normalize();
            return this
        }
    };
    var s, a, l;
    o.prototype.debug = function() {
        s.save(), s.strokeStyle = "#FF0000", s.lineWidth = 3, s.translate(a.x, a.y), s.scale(l, l), s.beginPath(), s.moveTo(this.points[0].position.x, this.points[0].position.y), s.lineTo(this.points[1].position.x, this.points[1].position.y), s.stroke(), s.restore()
    }, r.prototype.debug = function(t, e, n) {
        t.save(), t.strokeStyle = "#FF0000", t.lineWidth = 6, t.translate(e.x, e.y), t.scale(n, n);
        for (var i = 0, o = this.edges.length; o > i; i++)
            t.beginPath(), t.moveTo(this.edges[i].points[0].position.x, this.edges[i].points[0].position.y), t.lineTo(this.edges[i].points[1].position.x, this.edges[i].points[1].position.y), t.stroke();
        t.restore()
    }, r.prototype.computeIntersections = function(t) {
        for (var e = [], n = 0, o = this.edges.length; o > n; n++)
            for (var r = 0, s = t.edges.length; s > r; r++) {
                var a = BABYLON.Vector2.SegmentIntersection(this.edges[n].points[0].position, this.edges[n].points[1].position, t.edges[r].points[0].position, t.edges[r].points[1].position, 0, Math.PI / 2e3);
                if (a) {
                    var l = new i(a);
                    l.parents.push(this.edges[n], t.edges[r]), this.edges[n].intersections.push(l), t.edges[r].intersections.push(l), e.push(l)
                }
            }
        this.mergeIntersections(e)
    }, r.prototype.smashEdge = function(t, e) {
        for (var n = new i(BABYLON.Vector2.Lerp(e.position, t.position, .5)), o = this.edges.length - 1; o >= 0; o--)
            for (var r = 0; 2 > r; r++)
                (this.edges[o].points[r] == t || this.edges[o].points[r] == e) && (this.edges[o].points[r] = n)
                }, r.prototype.splitAtIntersections = function(t) {
                    var e, n, i = 1e-5, r = [], s = null, a = function(t, n, i) {
                        return e = new o, e.parent = i.parent, e.parentWallSide = i.parentWallSide, e.points[0] = t, e.points[1] = n, t.replaceParent(i, e), n.replaceParent(i, e), e
                    }, l = function(t, e) {
                        t.intersections.sort(function(t, n) {
                                             return t.position.distanceTo(e) - n.position.distanceTo(e)
                                             })
                    }, h = (new BABYLON.Vector2, function(e, n) {
                            return this.edges[e].parentWallSide.dot(t.edges[n].parentWallSide) >= 0
                            }.bind(this)), c = new BABYLON.Vector2, u = function(e, o, r) {
                        return c.copyFrom(e.position).lerp(o.position, .5), n = t.edgeIndexVeryClose(c, i), -1 != n ? !h(r, n) : t.isPointIn(c)
                    }, p = function(t, e, n) {
                        return t.position.distanceTo(e.position) < i ? !0 : !u(t, e, n)
                    };
                    if (!(this.edges.length < 1)) {
                        for (var d = 0, m = this.edges.length; m > d; d++) {
                            s = this.edges[d].points[0], l(this.edges[d], s.position);
                            for (var g = 0, f = this.edges[d].intersections.length; f > g; g++)
                                p(this.edges[d].intersections[g], s, d) ? r.push(a(s, this.edges[d].intersections[g], this.edges[d])) : PolygonMerger.addDeletedEdge(a(s.clone(), this.edges[d].intersections[g].clone(), this.edges[d])), s = this.edges[d].intersections[g];
                            p(this.edges[d].points[1], s, d) ? r.push(a(s, this.edges[d].points[1], this.edges[d])) : PolygonMerger.addDeletedEdge(a(s.clone(), this.edges[d].points[1].clone(), this.edges[d]))
                        }
                        return r
                    }
                }, r.prototype.getInstancesOfPoint = function(t) {
                    for (var e = [], n = 0, i = this.edges.length; i > n; n++)
                        for (var o = 0; 2 > o; o++)
                            this.edges[n].points[o] === t && e.push({edgeIndex: n,pointIndex: o});
                    return e
                };
    var h = function(t, e) {
        var n = this.edges[t.edgeIndex], i = n.points[(t.pointIndex + 1) % 2];
        return i.position.subtract(e.position)
    };
    r.prototype.updateParents = function() {
        for (var t = this.edges.length - 1; t >= 0; t--)
            for (var e = 0; 2 > e; e++)
                if (this.edges[t].points[e].parents.length < 2)
                    this.edges[t].points[e].parents.push(this.edges[t]);
                else if (-1 == this.edges[t].points[e].parents.indexOf(this.edges[t])) {
                    var n = this.getInstancesOfPoint(this.edges[t].points[e]);
                    if (3 === n.length) {
                        for (var o, r, s, a, l = .01, c = +1 / 0, u = +1 / 0, p = 0; 3 > p; p++) {
                            a = this.edges[n[p].edgeIndex].length(), u > a && (u = a, s = n[p].edgeIndex);
                            for (var d = p + 1; 3 > d; d++)
                                o = Math.abs(a - this.edges[n[d].edgeIndex].length()), c > o && (r = n[p].edgeIndex, c = o)
                                }
                        l > c ? this.edges.splice(r, 1) : this.edges.splice(s, 1);
                        continue
                    }
                    if (4 !== n.length)
                        continue;
                    var m = this.edges[t].points[e];
                    m.parents.length = 0;
                    var g, f = new i(this.edges[t].points[e].position.clone()), y = n[0];
                    n.splice(0, 1);
                    for (var p = 0; 3 > p; p++)
                        if (this.edges[n[p].edgeIndex].parent === this.edges[y.edgeIndex].parent) {
                            g = n[p], n.splice(p, 1);
                            break
                        }
                    if (!g) {
                        Logger.warning("Erreur, instance jumelle du point multiple non trouvée");
                        continue
                    }
                    for (var _ = h.call(this, y, m), v = h.call(this, g, m), b = BABYLON.Math.NormalizeAngle(Math.atan2(v.y, v.x) - Math.atan2(_.y, _.x), !0), w = [], p = 0; 2 > p; p++)
                        w.push(h.call(this, n[p], m)), w[p].angle = BABYLON.Math.NormalizeAngle(Math.atan2(w[p].y, w[p].x) - Math.atan2(_.y, _.x), !0);
                    {
                        var x, C;
                        Math.PI / 40
                    }
                    x = w[0].angle > b ? w[0].angle > w[1].angle ? n[0] : n[1] : w[0].angle < w[1].angle ? n[0] : n[1], n.splice(n.indexOf(x), 1), C = n[0], f.parents.push(this.edges[y.edgeIndex], this.edges[x.edgeIndex]), this.edges[y.edgeIndex].points[this.edges[y.pointIndex]] = f, this.edges[x.edgeIndex].points[this.edges[x.pointIndex]] = f, f.parents.push(this.edges[C.edgeIndex], this.edges[g.edgeIndex])
                }
    }, r.prototype.mergeIntersections = function(t) {
        for (var e = 1e-5, n = 0, i = t.length; i > n; n++)
            for (var o = t.length - 1; o > n; o--)
                t[n].position.distanceTo(t[o].position) < e && (t[o].parents[0].intersections.splice(t[o].parents[0].intersections.indexOf(t[o]), 1), t[o].parents[1].intersections.splice(t[o].parents[1].intersections.indexOf(t[o]), 1), t.splice(o, 1))
                }, r.prototype.deleteSmallEdges = function() {
                    var t = 1e-5;
                    if (!(this.edges.length <= 3)) {
                        for (var e = 0, n = this.edges.length; n > e; e++)
                            this.edges[e].length() < t && (this.smashEdge(this.edges[e].points[0], this.edges[e].points[1], this.edges[e]), this.edges.splice(e, 1), e--, n--);
                        this.updateParents()
                    }
                }, r.prototype.normalizePolygon = function() {
                    for (var t, e = 1e-5, n = this.edges, r = 0, s = n.length; s > r; r++)
                        for (var a = r + 1; s > a; a++)
                            if (t = BABYLON.Vector2.SegmentIntersection(n[r].points[0].position, n[r].points[1].position, n[a].points[0].position, n[a].points[1].position, -e)) {
                                var l = new i(t), h = new i(t), c = new o;
                                c.parent = n[r].parent, c.parentWallSide = n[r].parentWallSide, c.points.push(n[r].points[0], l), n[r].points[0] = l, l.parents.push(c, n[r]);
                                var u = new o;
                                u.parent = n[a].parent, u.parentWallSide = n[a].parentWallSide, u.points.push(n[a].points[0], h), n[a].points[0] = h, h.parents.push(u, n[a]), n.push(c, u)
                            }
                }, r.prototype.distanceTo = function(t) {
                    for (var e, n = new BABYLON.Vector2, i = +1 / 0, o = 0, r = this.edges.length; r > o; o++)
                        n.copy(t), n = n.projectOnSegment(this.edges[o].points[0].position, this.edges[o].points[1].position), e = n.distanceTo(t), i = Math.min(i, e);
                    return i
                }, r.prototype.edgeIndexVeryClose = function(t, e) {
                    for (var n, i = new BABYLON.Vector2, o = 0, r = this.edges.length; r > o; o++)
                        if (i.copyFrom(t), i = i.projectOnSegment(this.edges[o].points[0].position, this.edges[o].points[1].position), n = i.distanceTo(t), e > n)
                            return o;
                    return -1
                }, r.prototype.isPointIn = function(t) {
                    var i, o, r, s, t = t.clone();
                    t.x = n(t.x), t.y = n(t.y);
                    for (var a = [], l = !1, h = 0, c = this.edges.length; c > h; h++)
                        i = this.edges[h].points[0].position.x, o = this.edges[h].points[0].position.y, r = this.edges[h].points[1].position.x, s = this.edges[h].points[1].position.y, (this.edges[h].points[0].alreadyVisited || this.edges[h].points[1].alreadyVisited) && (e(i, r), e(o, s)), this.edges[h].points[0].alreadyVisited = !0, this.edges[h].points[1].alreadyVisited = !0, a.push(this.edges[h].points[0], this.edges[h].points[1]), s === o && s === t.y ? (i <= t.x && t.x < r || r <= t.x && t.x < i) && (l = !l) : (o <= t.y && t.y < s || s <= t.y && t.y < o) && t.x <= n((r - i) * (t.y - o) / (s - o) + i) && (l = !l);
                    for (var h = 0, c = a.length; c > h; h++)
                        a[h].alreadyVisited = !1;
                    return l
                }, r.prototype.getEdgeNormal = function(t) {
                    var i, o, r, s, a = [], l = BABYLON.Vector2.Lerp(this.edges[t].points[0].position, this.edges[t].points[1].position, .5), h = "x", c = "y";
                    l.y === this.edges[t].points[0].position.y && (h = "y", c = "x");
                    for (var u = !1, p = 0, d = this.edges.length; d > p; p++)
                        t !== p && (i = this.edges[p].points[0].position[h], o = this.edges[p].points[0].position[c], r = this.edges[p].points[1].position[h], s = this.edges[p].points[1].position[c], (this.edges[p].points[0].alreadyVisited || this.edges[p].points[1].alreadyVisited) && (e(i, r), e(o, s)), this.edges[p].points[0].alreadyVisited = !0, this.edges[p].points[1].alreadyVisited = !0, a.push(this.edges[p].points[0], this.edges[p].points[1]), s === o && s === l[c] ? (i <= l[h] && l[h] < r || r <= l[h] && l[h] < i) && (u = !u) : (o <= l[c] && l[c] < s || s <= l[c] && l[c] < o) && l[h] <= n((r - i) * (l[c] - o) / (s - o) + i) && (u = !u));
                    for (var p = 0, d = a.length; d > p; p++)
                        a[p].alreadyVisited = !1;
                    var m = this.edges[t].points[1].position.subtract(this.edges[t].points[0].position);
                    return m.copyFromFloats(-m.y, m.x).normalize(), (!u && m[h] <= 0 || u && m[h] > 0) && m.scaleInPlace(-1), m
                }, r.prototype.mergeVertices = function() {
                    for (var t = [], e = 1e-5, n = 0, i = this.edges.length; i > n; n++)
                        -1 === t.indexOf(this.edges[n].points[0]) && t.push(this.edges[n].points[0]), -1 === t.indexOf(this.edges[n].points[1]) && t.push(this.edges[n].points[1]);
                    for (var n = 0, i = t.length; i > n; n++)
                        for (var o = n + 1; i > o; o++)
                            if (t[n].position.distanceTo(t[o].position) < e) {
                                for (var r = t[n].parents, s = t[o].parents, a = -1, l = -1, h = 0; 2 > h; h++)
                                    -1 === this.edges.indexOf(r[h]) && (a = (h + 1) % 2), -1 === this.edges.indexOf(s[h]) && (l = (h + 1) % 2);
                                -1 != a && -1 != l && (s[l].points.splice(s[l].points.indexOf(t[o]), 1), s[l].points.push(t[n]), t[n].parents[0] = r[a], t[n].parents[1] = s[l])
                            }
                }, r.prototype.processCycles = function() {
                    for (var t, e = 200, n = [], i = function(t, e) {
                         var n = (e.points.indexOf(t) + 1) % 2, i = e.points[n], o = (i.parents.indexOf(e) + 1) % 2;
                         return {edge: i.parents[o],point: i}
                         }, r = function(t) {
                         var n, r = [], s = t, a = t.points[0], l = a, h = 0;
                         a.parents.length = 0, a.parentWallSide = [];
                         do {
                         if (null == s || !(s instanceof o))
                         return null;
                         r.push(a), a.parents.push(s.parent), a.parentWallSide.push(s.parentWallSide), s.visited = !0, n = i(a, s), a = n.point, a.parents.length = 0, a.parentWallSide = [], a.parents.push(s.parent), a.parentWallSide.push(s.parentWallSide), s = n.edge
                         } while (++h < 3 || a !== l && e > h);
                         return a.parents.push(t.parent), a.parentWallSide.push(t.parentWallSide), h == e ? null : r
                         }, s = 0, a = this.edges.length; a > s; s++)
                        this.edges[s].visited || (t = r(this.edges[s]), t && n.push(t));
                    return n
                }, r.prototype.toShape = function() {
                    return void console.warn("NOT COMPATIBLE WITH BABYLON.JS")
                };
    var c, u, p = [], d = function() {
    };
    return d.addDeletedEdge = function(t) {
        p.push(t)
    }, d.merge = function(t, e, n, i, o) {
        var h = [];
        p.length = 0;
        for (var d = 0, m = t.length; m > d; d++)
            h.push((new r).fromWall(t[d]));
        if (h.length < 1)
            return null;
        for (var g, f, y = h[0], d = 1, m = h.length; m > d; d++)
            h[d].normalizePolygon(), y.computeIntersections(h[d]), g = h[d].splitAtIntersections(y), f = y.splitAtIntersections(h[d]), y.edges = g.concat(f), y.deleteSmallEdges();
        return y.mergeVertices(), n && (s = n, a = i, l = o), c = y, e ? y.edges : u = y.processCycles()
    }, d.reconstitutePolygon = function(t, e) {
        var n = [], i = [], s = [], a = new r;
        e || (e = this.getCachedPolygon());
        for (var l, h, c = function() {
             if (!(a.edges.length < 2))
             for (var e, n, r, l, h = 0, c = i.length; c > h; h++)
             if (2 !== i[h].parents.length) {
             e = +1 / 0, r = null;
             for (var u = h + 1; c > u; u++)
             1 === i[u].parents.length && (n = i[u].position.distanceTo(i[h].position), e > n && (e = n, r = i[u]));
             null !== r ? (l = new o, l.parent = t, l.points.push(i[h], r), i[h].parents.push(l), r.parents.push(l), s.push(l)) : Logger.warning("Warning : could not connect every point in reconstitutePolygon")
             }
             }, u = 0, p = e.edges.length; p > u; u++)
            if (e.edges[u].parent === t) {
                l = e.edges[u].clone();
                for (var d = 0; 2 > d; d++)
                    h = n.indexOf(e.edges[u].points[d]), -1 === h ? (n.push(e.edges[u].points[d]), i.push(l.points[d]), l.points[d].parents.length = 0) : l.points[d] = i[h], l.points[d].parents.push(l);
                a.edges.push(l)
            }
        return c(), a.edges = a.edges.concat(s), a.edges.length > 2 ? a : null
    }, d.simplifyCycles = function(t) {
        for (var e = 0, n = t.length; n > e; e++)
            this.simplifyCycle(t[e])
            }, d.simplifyCycle = function(t) {
                for (var e = function(t, e) {
                     return t.parents[0] == e.parents[0] || t.parents[0] == e.parents[1] ? t.parents[0] : t.parents[1]
                     }, n = function(t, e, n) {
                     var i, o = Math.PI / 80, r = 10, s = e.subtract(t), a = n.subtract(e);
                     return s.length() < r || a.length() < r ? !1 : (i = Math.abs(s.determinant(a)), o > i)
                     }, i = 0, o = t.length; o > i; i++)
                    n(t[i].position, t[(i + 1) % o].position, t[(i + 2) % o].position) && e(t[i], t[(i + 1) % o]).height === e(t[(i + 1) % o], t[(i + 2) % o]).height && (console.log("colinear ! "), t.splice((i + 1) % o, 1), i--, o--);
                return t
            }, d.getCachedCycles = function() {
                return u
            }, d.getCachedPolygon = function() {
                return c
            }, d.getCachedDeletedEdges = function() {
                return p
            }, d
}();