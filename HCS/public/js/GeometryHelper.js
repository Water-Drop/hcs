var GeometryHelper = new function() {
    this.createHandle = function(t, e, n, i, o) {
        {
            var r, i = i || {};
            i.hinge || 1
        }
        if (1 == t) {
            var s = e, a = n, l = BABYLON.Mesh.CreateBloc("handle", a, a, 4, o);
            l.position.y = s / 2 - (i.offset >= 0 ? i.offset : 2);
            var h = BABYLON.Mesh.CreateBloc("handle", a, s, a, o);
            h.position.z = 2;
            var c = BABYLON.Mesh.CreateBloc("handle", a, a, 4, o);
            c.position.y = -s / 2 + (i.offset >= 0 ? i.offset : 2), r = BABYLON.Mesh.mergeMeshesRec("handle", [l, h, c], o), r.position.z = 0, r.rotation.z = Math.PI / 2
        } else if (2 == t)
            r = BABYLON.Mesh.CreateBloc("handle", e, n, 3, o);
        else if (3 == t)
            r = BABYLON.Mesh.CreateBloc("handle", e, 1, n, o), r.rotation.x = Math.PI / 8;
        else if (4 == t)
            r = BABYLON.Mesh.CreateCylinder("handle", e, n, 3, 6, 1, !0, o), r.rotation.x = Math.PI / 2;
        else if (5 == t)
            r = this.createCurvedBarGeometry("handle", e, n, 1, 5, 10, o);
        else if (6 == t)
            i.offset = n / 2, r = this.createHandle(1, e, n, i, o);
        else if (7 == t) {
            i.offset = n / 2, r = this.createHandle(1, e, n, i, o);
            var u = BABYLON.Mesh.CreateBloc("handle_deco", n, e + 3, .3, o), p = BABYLON.Mesh.CreateBloc("handle_deco", n, e + 3, .3, o);
            u.position.x += n / 2, p.position.x -= n / 2, u.position.z = 2, u.rotation.y = -Math.PI / 10, p.rotation.y = Math.PI / 10, p.position.z = 2, u.parent = p.parent = r
        } else if (8 == t) {
            var s = e, a = n, l = BABYLON.Mesh.CreateBloc("handle", a, a, 4, o);
            l.position.y = s / 2 - (i.offset >= 0 ? i.offset : 2);
            var h = BABYLON.Mesh.CreateCylinder("handle", s, 2 * a, 2 * a, 10, 1, !0, o);
            h.position.z = 2;
            var c = BABYLON.Mesh.CreateCylinder("handle", a, a, 4, 6, 1, !0, o);
            c.position.y = -s / 2 + (i.offset >= 0 ? i.offset : 2);
            var c = BABYLON.Mesh.CreateBloc("handle", a, a, 4, o);
            c.position.y = -s / 2 + (i.offset >= 0 ? i.offset : 2), r = BABYLON.Mesh.mergeMeshesRec("handle", [l, h, c], o), r.position.z = 0, r.rotation.z = Math.PI / 2
        } else
            r = BABYLON.Mesh.CreateBloc("handle", 3, 3, 3, o);
        return r
    }, this.createPoignee = function(t, e, n, i, o) {
        var i = i || {}, r = (i.hinge || 1, null);
        if (1 == t) {
            var s = e - 10, a = 1, l = BABYLON.Mesh.CreateBloc("handle", a, a, 4, o);
            l.position.y = s / 2 - 2;
            var h = BABYLON.Mesh.CreateBloc("handle", a, s, a, o);
            h.position.z = 3;
            var c = BABYLON.Mesh.CreateBloc("handle", a, a, 4, o);
            c.position.y = -s / 2 + 2, r = BABYLON.Mesh.mergeMeshesRec("handle", [l, h, c], o), r.position.z = 0, r.rotation.z = Math.PI / 2
        } else
            2 == t ? r = BABYLON.Mesh.CreateBloc("handle", 3, 3, 3, o) : 3 == t ? r = BABYLON.Mesh.CreateBloc("handle", e - 10, 1, 5, o) : 4 == t ? (r = BABYLON.Mesh.CreateCylinder("handle", 3, 3, 3, 8, 1, !0, o), r.rotation.x = Math.PI / 2) : 5 == t ? (r = this.createPoignee(1, 25, null, null, o), r.position.y += n / 2 - 10) : 6 == t && (r = this.createPoignee(1, 25, null, null, o), r.position.y += n / 2 - 10);
        return r
    }, this.createTiroir = function(t, e, n, i, o, r, s) {
        var r = r || {};
        r.stretched_texture = r.stretched_texture || 0;
        var a = 3, l = r.rounded && (+r.configuration[3] || +r.configuration[0]) ? r.radius : a, h = [], c = BABYLON.Mesh.CreateBloc("back", t - a, n / 2, a, s);
        c.position.z = -e / 2, c.position.y = -n / 4 + l, h.push(c);
        var u = BABYLON.Mesh.CreateBloc("left", a, n / 2, e, s);
        u.position.x = -t / 2 + a, u.position.y = -n / 4 + l, h.push(u);
        var p = BABYLON.Mesh.CreateBloc("right", a, n / 2, e, s);
        if (p.position.x = t / 2 - a, p.position.y = -n / 4 + l, h.push(p), r.rounded) {
            var d = this.createRoundedPane(t, n, i, r.radius, null, r.configuration, s);
            d.name = "front", d.position.z = i / 2
        } else {
            var d = BABYLON.Mesh.CreateBloc("front", t, n, i, s);
            0 !== r.stretched_texture && this.setStretchUV(d)
        }
        d.position.z += e / 2, h.push(d);
        var m = BABYLON.Mesh.CreateBloc("bottom", t - 2 * a, a, e, s);
        m.position.y -= n / 2 - l, h.push(m);
        var g = BABYLON.Mesh.mergeMeshesRec("tiroir", h, s);
        if (-1 !== +r.handle_position) {
            var o = o.toString(), f = r.handle_position.split(",")[0] || 0, y = r.handle_position.split(",")[1] || 0, _ = r.handle_position.split(",")[2] || 0;
            _ = _ / 180 * Math.PI;
            var o = o.toString() || o, v = o.split(",")[0] || 0, b = o.split(",")[1] || t - 10, w = o.split(",")[2] || 1;
            b = this.calcMeasure(b, t, n), w = this.calcMeasure(w, t, n), f = this.calcMeasure(f, t, n), y = this.calcMeasure(y, t, n);
            var x = this.createHandle(v, b, w, {hinge: 1}, s);
            x.position.x = f, x.position.y = y, x.position.z += e / 2 + i / 2, x.rotation.z += _, x.parent = g
        } else {
            var x = this.createPoignee(o, t, n, {hinge: -1}, s);
            x && (x.position.z += e / 2 + i / 2, x.position.y = n / 2 - 5, 3 == o && (x.rotation.x = Math.PI / 8), 5 == o && (x.rotation.z = Math.PI / 2), x.parent = g)
        }
        return 0 == r.stretched_texture && GeometryHelper.giftWraper(g), g
    }, this.calcMeasure = function(measure, w, h) {
        var reg = new RegExp("[^wh0-9?:<>()\\-\\+*/]");
        return reg.test(measure) === !1 ? eval(measure) : measure
    }, this.setStretchUV = function(t) {
        var e = [];
        e.push(1, 0), e.push(0, 0), e.push(0, 1), e.push(1, 1), e.push(1, 1), e.push(0, 1), e.push(0, 0), e.push(1, 0), e.push(1, 0), e.push(0, 0), e.push(0, 0), e.push(1, 0), e.push(1, 0), e.push(0, 0), e.push(0, 0), e.push(1, 0), e.push(1, 0), e.push(0, 0), e.push(0, 0), e.push(1, 0), e.push(1, 0), e.push(0, 0), e.push(0, 0), e.push(1, 0), t.setVerticesData(BABYLON.VertexBuffer.UVKind, e)
    }, this.createSimplePorte = function(t, e, n, i, o, r, s) {
        var n = n || 3, a = new BABYLON.Mesh("door", s);
        a.isVisible = !1;
        var r = r || {};
        if (r.stretched_texture = r.stretched_texture || 0, r.handle_position = r.handle_position || -1, r.rounded) {
            var l = this.createRoundedPane(t, e, n, r.radius, null, r.configuration, s);
            l.name = "casement", l.position.z = n / 2
        } else {
            var l = BABYLON.Mesh.CreateBloc("casement", t, e, n, s);
            0 !== r.stretched_texture && this.setStretchUV(l)
        }
        if (l.parent = a, 1 == i || -1 == i)
            a.setPivotMatrix(BABYLON.Matrix.Translation(i * t / 2, 0, n / 2)), a.position.x = -i * t / 2;
        else {
            var h = -2 * -i + 5;
            a.setPivotMatrix(BABYLON.Matrix.Translation(0, h * e / 2, n / 2)), a.position.y = -h * e / 2
        }
        if (a.hinge = i, -1 !== +r.handle_position) {
            var c = r.handle_position.split(",")[0] || 0, u = r.handle_position.split(",")[1] || 0, p = r.handle_position.split(",")[2] || 0;
            p = p / 180 * Math.PI;
            var o = o.toString() || o, d = o.split(",")[0] || 0, m = o.split(",")[1] || t - 10, g = o.split(",")[2] || 1;
            m = this.calcMeasure(m, t, e), g = this.calcMeasure(g, t, e), c = this.calcMeasure(c, t, e), u = this.calcMeasure(u, t, e), c = -1 == i ? -c : c;
            var f = this.createHandle(d, m, g, {hinge: i}, s);
            f.position.x = c, f.position.y = u, f.position.z += n / 2, f.rotation.z += p, f.parent = a
        } else if (1 != i && -1 != i || 6 == o) {
            if (6 != o) {
                var h = -2 * -i + 5, f = this.createPoignee(o, t, t, {hinge: i}, s);
                f && (f.position.y = h * e / 3, f.position.z += n / 2, 3 == o && (f.rotation.x = h * Math.PI / 8), f.parent = a)
            } else if (6 == o) {
                var f = this.createPoignee(o, t, t, {hinge: i}, s);
                f.position.y = e / 3, f && (f.position.z += n / 2, f.parent = a)
            }
        } else {
            var f = this.createPoignee(o, e, e, {hinge: i}, s);
            f && (f.rotation.z += Math.PI / 2, f.position.x = i * t / 3, f.position.z += n / 2, 3 == o && (f.rotation.y = -i * Math.PI / 8), 4 == o && (f.rotation.z = 0), f.parent = a)
        }
        return 0 == r.stretched_texture && this.giftWraper(l, 128), a
    }, this.createCurvedBarGeometry = function(t, e, n, i, o, r, s) {
        var a = [], l = l || !1, h = [], c = [], u = [], r = r || 10, o = o, p = -i / 2, d = +i / 2, m = new BABYLON.Vector3(-e / 2, 0, p), g = new BABYLON.Vector3(e / 2, 0, p), f = new BABYLON.Vector3(0, 0, p + o);
        a.push(m.x, m.y, m.z), GeometryHelper.generateArc(a, r, m, f, g), a.push(g.x, g.y, g.z);
        var y = new BABYLON.Vector3(-e / 2, n, p), _ = new BABYLON.Vector3(e / 2, n, p), v = new BABYLON.Vector3(0, n, p + o);
        a.push(y.x, y.y, y.z), GeometryHelper.generateArc(a, r, y, v, _), a.push(_.x, _.y, _.z);
        var y = new BABYLON.Vector3(-e / 2, n, d), _ = new BABYLON.Vector3(e / 2, n, d), v = new BABYLON.Vector3(0, n, d + o);
        a.push(y.x, y.y, y.z), GeometryHelper.generateArc(a, r, y, v, _), a.push(_.x, _.y, _.z);
        var m = new BABYLON.Vector3(-e / 2, 0, d), g = new BABYLON.Vector3(e / 2, 0, d), f = new BABYLON.Vector3(0, 0, d + o);
        a.push(m.x, m.y, m.z), GeometryHelper.generateArc(a, r, m, f, g), a.push(g.x, g.y, g.z);
        for (var b = r + 1, w = 0, x = 4, C = 0; x - 1 > C; C++) {
            w = C * b;
            for (var M = 0; b - 1 > M; M++)
                h.push(w + M, w + M + 1, w + b + M + 1), h.push(w + b + M + 1, w + b + M, w + M)
                }
        var D = new BABYLON.Mesh(t, s);
        return BABYLON.VertexData.ComputeNormals(a, h, c), u = BABYLON.Tools.PlaneUVProjection(a, new BABYLON.Vector3(1, 0, 0), new BABYLON.Vector3(0, 1, 0), 0), D.setVerticesData(BABYLON.VertexBuffer.PositionKind, a, l), D.setVerticesData(BABYLON.VertexBuffer.NormalKind, c, l), D.setVerticesData(BABYLON.VertexBuffer.UVKind, u, l), D.setIndices(h), D
    }, this.createDoublePorte = function(t, e, n, i, o, r) {
        var s = new BABYLON.Mesh("dblPorte", r);
        s.isVisible = !1;
        var n = n || 3, o = o || {};
        if (o.rounded) {
            var a = ujs.cloneObject(o), l = ujs.cloneObject(o);
            a.configuration[3] = 0, a.configuration[2] = 0, l.configuration[1] = 0, l.configuration[0] = 0;
            var h = this.createSimplePorte(t / 2, e, n, 1, i, a, r), c = this.createSimplePorte(t / 2, e, n, -1, i, l, r)
        } else
            var h = this.createSimplePorte(t / 2, e, n, 1, i, o, r), c = this.createSimplePorte(t / 2, e, n, -1, i, o, r);
        return h.position.x += -t / 4 - .1, h.hinge = 1, c.position.x += t / 4 + .1, c.hinge = -1, h.setPivotMatrix(BABYLON.Matrix.Translation(t / 4 + .1, 0, n / 2)), c.setPivotMatrix(BABYLON.Matrix.Translation(-t / 4 - .1, 0, n / 2)), h.parent = s, c.parent = s, s
    }, this.createRoundedCadreStrate = function(t, e, n, i, o, r, s) {
        var s = s || [1, 1, 1, 1], a = 1 == s[3] ? o : 1, l = 1 == s[2] ? o : 1, h = 1 == s[1] ? o : 1, c = 1 == s[0] ? o : 1, u = new BABYLON.Vector3(e / 2 - a, -n / 2, i), p = new BABYLON.Vector3(e / 2, -n / 2 + a, i), d = new BABYLON.Vector3(e / 2, n / 2 - l, i), m = new BABYLON.Vector3(e / 2 - l, n / 2, i), g = new BABYLON.Vector3(-e / 2 + h, n / 2, i), f = new BABYLON.Vector3(-e / 2, n / 2 - h, i), y = new BABYLON.Vector3(-e / 2, -n / 2 + c, i), _ = new BABYLON.Vector3(-e / 2 + c, -n / 2, i), v = new BABYLON.Vector3(e / 2, -n / 2, i), b = new BABYLON.Vector3(e / 2, n / 2, i), w = new BABYLON.Vector3(-e / 2, n / 2, i), x = new BABYLON.Vector3(-e / 2, -n / 2, i);
        return t.push(_.x, _.y, _.z), this.generateArc(t, r, _, x, y), t.push(y.x, y.y, y.z), t.push(f.x, f.y, f.z), this.generateArc(t, r, f, w, g), t.push(g.x, g.y, g.z), t.push(m.x, m.y, m.z), this.generateArc(t, r, m, b, d), t.push(d.x, d.y, d.z), t.push(p.x, p.y, p.z), this.generateArc(t, r, p, v, u), t.push(u.x, u.y, u.z), t
    }, this.triangulateStrate = function(t, e) {
        for (var n = [], i = t + 1; t + e - 1 > i; i++)
            n.push(i + 1, i, t);
        return n
    }, this.generateStrateFacesForGeometry = function(t, e, n, i, o, r, s, a) {
        for (var l = l || !1, h = [], c = [], u = [], s = s || [], i = i || !1, o = o || !1, p = e.length / (3 * n), d = 0, m = new BABYLON.Mesh(t, r), g = 0, f = e.slice(0, 3 * (n - 1)), y = this.triangulateStrate(0, n), _ = 0, v = 3; v < f.length; v += 3)
            _ += new BABYLON.Vector3(f[v], f[v + 1], f[v + 2]).distanceTo(new BABYLON.Vector3(f[v - 3], f[v - 2], f[v - 1]));
        _ += new BABYLON.Vector3(f[v - 3], f[v - 2], f[v - 1]).distanceTo(new BABYLON.Vector3(f[0], f[1], f[2]));
        {
            var b = BABYLON.BoundingBox.CreateFromData(e);
            b.maximum.z - b.minimum.z
        }
        if (i)
            for (var v = 0; v < y.length; v += 3)
                h.push(y[v], y[v + 1], y[v + 2]);
        for (var w, x, C, M, D, B, A = 0, E = [], T = !1, S = 0; p - 1 > S; S++) {
            d = S * n, g = h.length, A = 0, T = !1;
            for (var L = 0; L < s.length; L++)
                s[L] === S && (T = !0);
            for (var v = 0; n - 1 > v; v++) {
                w = d + v, x = d + 1 + v, C = d + n + v + 1, M = d + n + v + 1, D = d + n + v, B = d + v, h.push(w, x, C), h.push(M, D, B), T && E.push(w, x, C, M, D, B);
                var O = new BABYLON.Vector3(e[w], e[w + 1], e[w + 2]).distanceTo(new BABYLON.Vector3(e[x], e[x + 1], e[x + 2]));
                A += O
            }
            h.push(d + v, d, d + n), h.push(d + n, d + n + v, d + v), T && (E.push(d + v, d, d + n), E.push(d + n, d + n + v, d + v))
        }
        if (o)
            for (var P = e.length / 3 - n, I = (e.slice(3 * P, e.length), this.triangulateStrate(P, n)), v = 0; v < I.length; v += 3)
                a ? h.push(I[v + 2], I[v + 1], I[v]) : h.push(I[v], I[v + 1], I[v + 2]);
        return BABYLON.VertexData.ComputeNormals(e, h, c), i && BABYLON.Mesh.ComputeFaceNormal(e, c, y), o && !a && BABYLON.Mesh.ComputeFaceNormal(e, c, I), BABYLON.Mesh.ComputeFaceNormal(e, c, E), u = BABYLON.Tools.PlaneUVProjection(e, new BABYLON.Vector3(1, 0, 0), new BABYLON.Vector3(0, 0, 1)), m.setVerticesData(BABYLON.VertexBuffer.PositionKind, e, l), m.setVerticesData(BABYLON.VertexBuffer.NormalKind, c, l), m.setVerticesData(BABYLON.VertexBuffer.UVKind, u, l), m.setIndices(h), m
    }, this.createRoundedPane = function(t, e, n, i, o, r, s) {
        var a = [], o = o || 6, i = i || 20, r = r || [1, 1, 1, 1];
        this.createRoundedCadreStrate(a, t, e, -n, i, o, r), this.createRoundedCadreStrate(a, t, e, -n, i, o, r), this.createRoundedCadreStrate(a, t, e, 0, i, o, r), this.createRoundedCadreStrate(a, t, e, 0, i, o, r);
        var l = 8 + 4 * (o - 1);
        return this.generateStrateFacesForGeometry("pane", a, l, !0, !0, s, void 0, !0)
    }, this.createRoundedCadre = function(t, e, n, i, o, r, s) {
        var a = [], l = r.nbseg || 6, h = r.radius || 20, o = o || [1, 1, 1, 1];
        this.createRoundedCadreStrate(a, t, e, -i / 2, h, l, o), this.createRoundedCadreStrate(a, t, e, i / 2, h, l, o), this.createRoundedCadreStrate(a, t, e, i / 2, h, l, o), this.createRoundedCadreStrate(a, t - 2 * n, e - 2 * n, i / 2, h, l, o), this.createRoundedCadreStrate(a, t - 2 * n, e - 2 * n, i / 2, h, l, o), this.createRoundedCadreStrate(a, t - 2 * n, e - 2 * n, -i / 2, h, l, o);
        var c = 4 * (l + 1), u = this.generateStrateFacesForGeometry("cadre", a, c, !1, !1, s, [2]);
        return this.giftWraper(u, 128, !0), u
    }, this.giftWraper = function(t, e, n) {
        if (e = e || 128, t && t.getTotalVertices()) {
            for (var i, o, r, s, a = t.getIndices(), l = t.getVerticesData(BABYLON.VertexBuffer.PositionKind), h = t.getVerticesData(BABYLON.VertexBuffer.NormalKind), c = !1, u = new Array(l.length / 3), p = t.scaling.asArray(), d = new BABYLON.Vector3, m = new BABYLON.Vector3, g = new BABYLON.Vector3, f = new Array(l.length / 3 * 2), s = f.length; s--; )
                f[s] = 0;
            for (var y = 0; y < a.length; y += 3)
                if (BABYLON.Vector3.FromArrayToRef(l, 3 * a[y], d), BABYLON.Vector3.FromArrayToRef(l, 3 * a[y + 1], m), BABYLON.Vector3.FromArrayToRef(l, 3 * a[y + 2], g), m.subtractInPlace(d), g.subtractInPlace(d), m.multiplyInPlace(t.scaling), g.multiplyInPlace(t.scaling), BABYLON.Vector3.CrossToRef(m, g, d), d.multiplyInPlace(d), !(d.x < 1e-4 && d.y < 1e-4 && d.z < 1e-4))
                    for (d.x > d.y && d.x > d.z ? (i = 2, o = 1, r = 0) : d.y > d.x && d.y > d.z ? (i = 0, o = 2, r = 1) : (i = 0, o = 1, r = 2), s = 0; 3 > s; s++) {
                        if ("undefined" != typeof u[a[y + s]]) {
                            if (!n || u[a[y + s]] == r)
                                continue;
                            c = !0, l.push(l[3 * a[y + s]], l[3 * a[y + s] + 1], l[3 * a[y + s] + 2]), h.push(h[3 * a[y + s]], h[3 * a[y + s] + 1], h[3 * a[y + s] + 2]), a[y + s] = l.length / 3 - 1
                        }
                        u[a[y + s]] = r, f[2 * a[y + s]] = l[3 * a[y + s] + i] * p[i] / e, f[2 * a[y + s] + 1] = l[3 * a[y + s] + o] * p[o] / e
                    }
            return t.setVerticesData(BABYLON.VertexBuffer.UVKind, f), c && (t.setVerticesData(BABYLON.VertexBuffer.NormalKind, h), t.setVerticesData(BABYLON.VertexBuffer.PositionKind, l), t.setIndices(a)), t
        }
    }, this.createCadre = function(t, e, n, i, o, r, s) {
        var r = r || {}, o = o || [1, 1, 1, 1];
        if (r.rounded && r.radius > 0)
            return this.createRoundedCadre(t, e, n, i, o, r, s);
        var a = new BABYLON.Mesh("cadre", s);
        if (a.isVisible = !1, 0 == n) {
            var l = BABYLON.Mesh.CreateBloc("cadreHaut", t, .1, i, s), h = BABYLON.Mesh.CreateBloc("cadreGauche", .1, e, i, s);
            n = .1
        } else if (0 == i)
            var l = BABYLON.Mesh.CreatePlane("cadreHaut", t, n, s), h = BABYLON.Mesh.CreatePlane("cadreGauche", n, e - 2 * n, s);
        else
            var l = BABYLON.Mesh.CreateBloc("CadreHaut", t, n, i, s), h = BABYLON.Mesh.CreateBloc("CadreGauche", n, e - 2 * n, i, s);
        if (l.parent = a, h.parent = a, 1 == o[2]) {
            var c = h.duplicate("cadreDroit", a, !0);
            c.position.x = -t / 2 + n / 2, c.parent = a
        }
        if (1 == o[3]) {
            var u = l.duplicate("cadreBas", a, !0);
            u.position.y = -e / 2 + n / 2, u.parent = a
        }
        return 1 == o[0] ? l.position.y = e / 2 - n / 2 : l.dispose(), 1 == o[1] ? h.position.x = t / 2 - n / 2 : h.dispose(), a = BABYLON.Mesh.mergeMeshesRec("cadre", [a], s), this.giftWraper(a, 128), a
    }, this.generateArc = function(t, e, n, i, o) {
        for (var r = 1; e > r; r++) {
            var s = n.add(i.subtract(n).scale(r / e)), a = i.add(o.subtract(i).scale(r / e)), l = s.add(a.subtract(s).scale(r / e));
            t.push(l.x, l.y, l.z)
        }
    }, this.generateArcPoints = function(t, e, n, i, o) {
        for (var r = 1; e > r; r++) {
            var s = n.add(i.subtract(n).scale(r / e)), a = i.add(o.subtract(i).scale(r / e)), l = s.add(a.subtract(s).scale(r / e));
            t.push(l)
        }
    }, this.generateVasqueStrate = function(t, e, n, i, o, r, s, a, l) {
        var s = s || 3, a = a || r, l = l || r;
        t.push(-n / 2 + a, o, i / 2), t.push(n / 2 - a, o, i / 2), this.generateArc(t, s, new BABYLON.Vector3(n / 2 - a, o, i / 2), new BABYLON.Vector3(n / 2, o, i / 2), new BABYLON.Vector3(n / 2, o, i / 2 - l)), t.push(n / 2, o, i / 2 - l), t.push(n / 2, o, -i / 2 + l), this.generateArc(t, s, new BABYLON.Vector3(n / 2, o, -i / 2 + l), new BABYLON.Vector3(n / 2, o, -i / 2), new BABYLON.Vector3(n / 2 - a, o, -i / 2)), t.push(n / 2 - a, o, -i / 2), t.push(-n / 2 + a, o, -i / 2), this.generateArc(t, s, new BABYLON.Vector3(-n / 2 + a, o, -i / 2), new BABYLON.Vector3(-n / 2, o, -i / 2), new BABYLON.Vector3(-n / 2, o, -i / 2 + l)), t.push(-n / 2, o, -i / 2 + l), t.push(-n / 2, o, +i / 2 - l), this.generateArc(t, s, new BABYLON.Vector3(-n / 2, o, +i / 2 - l), new BABYLON.Vector3(-n / 2, o, i / 2), new BABYLON.Vector3(-n / 2 + a, o, i / 2))
    }, this.createVasqueGeometry = function(t, e, n) {
        for (var i = [], e = e || {}, o = e.height || 35, r = e.bottomL || 140, s = e.topL || 160, a = e.bottomW || 40, l = e.topW || 50, h = e.radius || 5, c = e.nbseg || 10, u = e.thickness || 10, p = e.thicknessL || u, d = e.thicknessW || u, m = 0, g = 0; o >= g; g++)
            f = r + (Math.asin(2 * g / o - 1) + Math.PI / 2) * (s - r) / Math.PI, y = a + (Math.asin(2 * g / o - 1) + Math.PI / 2) * (l - a) / Math.PI, (.3 * o > g || g > .9 * o) && this.generateVasqueStrate(i, ++m, f, y, g, h, c);
        this.generateVasqueStrate(i, ++m, s + 1, l + 1, g, h, c);
        var f = s + p, y = l + d, h = .1;
        return this.generateVasqueStrate(i, ++m, f, y, g, h, c, void 0, void 0, !0), this.generateVasqueStrate(i, ++m, f, y, g - 1, h, c, void 0, void 0, !0), GeometryHelper.generateStrateFacesForGeometry(t, i, 8 + 4 * (c - 1), !0, !1, n, [m - 3])
    }, this.createHeadLight = function(t, e, n, i, o, r, s, a, l) {
        var h = h || !1, c = [], u = [], p = [];
        e = e || 50, n = Math.max(3, Math.floor(n) || 8), i = Math.max(2, Math.floor(i) || 6), o = void 0 !== o ? o : 0, r = void 0 !== r ? r : 2 * Math.PI, s = void 0 !== s ? s : 0, a = void 0 !== a ? a : Math.PI;
        var d, m, g = [], f = [];
        for (m = 0; i >= m; m++) {
            var y = [], _ = [];
            for (d = 0; n >= d; d++) {
                var v = d / n, b = m / i, w = -e * Math.cos(o + v * r) * Math.sin(s + b * a), x = e * Math.cos(s + b * a), C = e * Math.sin(o + v * r) * Math.sin(s + b * a);
                c.push(w, x, C), y.push(c.length / 3 - 1), _.push(new BABYLON.Vector2(v, 1 - b))
            }
            g.push(y), f.push(_)
        }
        for (m = 0; i > m; m++)
            for (d = 0; n > d; d++) {
                var M = g[m][d + 1], D = g[m][d], B = g[m + 1][d], A = g[m + 1][d + 1], E = (new BABYLON.Vector3(c[M], c[M + 1], c[M + 2]).normalize(), new BABYLON.Vector3(c[D], c[D + 1], c[D + 2]).normalize(), new BABYLON.Vector3(c[B], c[B + 1], c[B + 2]).normalize(), new BABYLON.Vector3(c[A], c[A + 1], c[A + 2]).normalize(), f[m][d + 1].clone()), T = f[m][d].clone(), S = f[m + 1][d].clone(), L = f[m + 1][d + 1].clone();
                u.push(A, D, M), p.push(E.x, E.y, T.x, T.y, L.x, L.y), u.push(A, B, D), p.push(T.x, T.y, S.x, S.y, L.x, L.y)
            }
        var O = [], P = new BABYLON.Mesh(t, l);
        return BABYLON.VertexData.ComputeNormals(c, u, O), P.setVerticesData(BABYLON.VertexBuffer.PositionKind, c, h), P.setVerticesData(BABYLON.VertexBuffer.NormalKind, O, h), P.setVerticesData(BABYLON.VertexBuffer.UVKind, p, h), P.setIndices(u), P
    }, this.createPillow = function(t, e, n, i, o, r, s, a, l, h, c, u) {
        c || (c = 0), u || (u = 0);
        var p = i.clone(), d = new BABYLON.Vector3(p.x, p.y, p.z - s / 2), m = new BABYLON.Vector3(p.x, p.y, p.z + s / 2), g = new BABYLON.Vector3(p.x, p.y + r / 2 - l, p.z), f = new BABYLON.Vector3(p.x, p.y - r / 2 + l, p.z), y = new BABYLON.Vector3(p.x - o / 2 + a, p.y, p.z), _ = (new BABYLON.Vector3(d.x - o / 2, d.y + r / 2, d.z), new BABYLON.Vector3(p.x - o / 2, p.y + r / 2, p.z)), v = (new BABYLON.Vector3(m.x - o / 2, m.y + r / 2, m.z), new BABYLON.Vector3(d.x - o / 2, d.y - r / 2, d.z), new BABYLON.Vector3(p.x - o / 2, p.y - r / 2, p.z)), b = (new BABYLON.Vector3(m.x - o / 2, m.y - r / 2, m.z), new BABYLON.Vector3(p.x + o / 2 - a, p.y, p.z)), w = (new BABYLON.Vector3(d.x + o / 2, d.y + r / 2, d.z), new BABYLON.Vector3(p.x + o / 2, p.y + r / 2, p.z)), x = (new BABYLON.Vector3(m.x + o / 2, m.y + r / 2, m.z), new BABYLON.Vector3(d.x + o / 2, d.y - r / 2, d.z), new BABYLON.Vector3(p.x + o / 2, p.y - r / 2, p.z)), C = (new BABYLON.Vector3(m.x + o / 2, m.y - r / 2, m.z), C || !1), M = [], D = [], B = [], A = [], E = [], T = [_.x, _.y, _.z];
        this.generateArc(T, n, _, g, w);
        for (var S = 0; n > S; S++)
            M.push(m.x, m.y, m.z), M.push(m.x - c + 2 * S * c / n, m.y + u, m.z), this.generateArc(M, e, new BABYLON.Vector3(m.x - c + 2 * S * c / n, m.y + u, m.z), new BABYLON.Vector3(T[3 * S], T[3 * S + 1], T[3 * S + 2] + s / 2), new BABYLON.Vector3(T[3 * S], T[3 * S + 1], T[3 * S + 2])), M.push(T[3 * S], T[3 * S + 1], T[3 * S + 2]), this.generateArc(M, e, new BABYLON.Vector3(T[3 * S], T[3 * S + 1], T[3 * S + 2]), new BABYLON.Vector3(T[3 * S], T[3 * S + 1], T[3 * S + 2] - s / 2), new BABYLON.Vector3(d.x - c + 2 * S * c / n, d.y + u, d.z)), M.push(d.x - c + 2 * S * c / n, d.y + u, d.z), M.push(d.x, d.y, d.z);
        T = [w.x, w.y, w.z], this.generateArc(T, n, w, b, x);
        for (var S = 0; n > S; S++)
            M.push(m.x, m.y, m.z), M.push(m.x + c, m.y + u - 2 * S * u / n, m.z), this.generateArc(M, e, new BABYLON.Vector3(m.x + c, m.y + u - 2 * S * u / n, m.z), new BABYLON.Vector3(T[3 * S], T[3 * S + 1], T[3 * S + 2] + s / 2), new BABYLON.Vector3(T[3 * S], T[3 * S + 1], T[3 * S + 2])), M.push(T[3 * S], T[3 * S + 1], T[3 * S + 2]), this.generateArc(M, e, new BABYLON.Vector3(T[3 * S], T[3 * S + 1], T[3 * S + 2]), new BABYLON.Vector3(T[3 * S], T[3 * S + 1], T[3 * S + 2] - s / 2), new BABYLON.Vector3(d.x + c, d.y + u - 2 * S * u / n, d.z)), M.push(d.x + c, d.y + u - 2 * S * u / n, d.z), M.push(d.x, d.y, d.z);
        T = [x.x, x.y, x.z], this.generateArc(T, n, x, f, v);
        for (var S = 0; n > S; S++)
            M.push(m.x, m.y, m.z), M.push(m.x + c - 2 * S * c / n, m.y - u, m.z), this.generateArc(M, e, new BABYLON.Vector3(m.x + c - 2 * S * c / n, m.y - u, m.z), new BABYLON.Vector3(T[3 * S], T[3 * S + 1], T[3 * S + 2] + s / 2), new BABYLON.Vector3(T[3 * S], T[3 * S + 1], T[3 * S + 2])), M.push(T[3 * S], T[3 * S + 1], T[3 * S + 2]), this.generateArc(M, e, new BABYLON.Vector3(T[3 * S], T[3 * S + 1], T[3 * S + 2]), new BABYLON.Vector3(T[3 * S], T[3 * S + 1], T[3 * S + 2] - s / 2), new BABYLON.Vector3(d.x + c - 2 * S * c / n, d.y - u, d.z)), M.push(d.x + c - 2 * S * c / n, d.y - u, d.z), M.push(d.x, d.y, d.z);
        T = [v.x, v.y, v.z], this.generateArc(T, n, v, y, _);
        for (var S = 0; n > S; S++)
            M.push(m.x, m.y, m.z), M.push(m.x - c, m.y - u + 2 * S * u / n, m.z), this.generateArc(M, e, new BABYLON.Vector3(m.x - c, m.y - u + 2 * S * u / n, m.z), new BABYLON.Vector3(T[3 * S], T[3 * S + 1], T[3 * S + 2] + s / 2), new BABYLON.Vector3(T[3 * S], T[3 * S + 1], T[3 * S + 2])), M.push(T[3 * S], T[3 * S + 1], T[3 * S + 2]), this.generateArc(M, e, new BABYLON.Vector3(T[3 * S], T[3 * S + 1], T[3 * S + 2]), new BABYLON.Vector3(T[3 * S], T[3 * S + 1], T[3 * S + 2] - s / 2), new BABYLON.Vector3(d.x - c, d.y - u + 2 * S * u / n, d.z)), M.push(d.x - c, d.y - u + 2 * S * u / n, d.z), M.push(d.x, d.y, d.z);
        for (var L = 4 * n, O = 2 * e + 3, S = 0; L - 1 > S; S++)
            for (var P = 0; O - 2 > P; P++)
                D.push((S + 1) * O + P, S * O + P + 1, (S + 1) * O + P + 1), D.push(S * O + P + 1, S * O + P + 2, (S + 1) * O + P + 1), 0 == P && B.push((S + 1) * O + P, S * O + P + 1, (S + 1) * O + P + 1), P == O - 3 && B.push(S * O + P + 1, S * O + P + 2, (S + 1) * O + P + 1);
        for (var P = 0; O - 2 > P; P++)
            D.push((L - 1) * O + P + 1, P + 1, (L - 1) * O + P), D.push((L - 1) * O + P + 1, P + 2, P + 1);
        var I = new BABYLON.Mesh(t, h);
        return BABYLON.VertexData.ComputeNormals(M, D, A), (c || u) && BABYLON.Mesh.ComputeFlatNormal(M, A, B), E = BABYLON.Tools.PlaneUVProjection(M, new BABYLON.Vector3(1, 0, 0), new BABYLON.Vector3(0, 1, 0)), I.setVerticesData(BABYLON.VertexBuffer.PositionKind, M, C), I.setVerticesData(BABYLON.VertexBuffer.NormalKind, A, C), I.setVerticesData(BABYLON.VertexBuffer.UVKind, E, C), I.setIndices(D), I
    }, this.createRoundedAngle = function(t, e, n, i, o, r, s) {
        var a = [], n = n || 1, e = e || 10;
        return this.generateVasqueStrate(a, 0, i, r, o / 2, n, e), this.generateVasqueStrate(a, 0, i, r, o / 2, n, e), this.generateVasqueStrate(a, 0, i, r, -o / 2, n, e), this.generateVasqueStrate(a, 1, i, r, -o / 2, n, e), GeometryHelper.generateStrateFacesForGeometry(t, a, 8 + 4 * (e - 1), !0, !0, s, void 0, !0)
    }, this.createRoundedBloc = function(t, e, n, i, o, r, s, a) {
        var l = [], i = i || .1, e = e || 10, h = 0, c = i / n, u = o, p = s, d = r / 2 + i;
        this.generateVasqueStrate(l, ++h, u, p, d, .1, e);
        for (var m = c; i >= m; m += c) {
            var g = i * Math.sin(m / i * Math.PI / 2);
            this.generateVasqueStrate(l, ++h, u + 2 * g, p + 2 * g, d - i * (1 - Math.cos(m / i * Math.PI / 2)), g, e)
        }
        for (var m = i; m > 0; m -= c) {
            var g = i * Math.sin(m / i * Math.PI / 2);
            this.generateVasqueStrate(l, ++h, u + 2 * g, p + 2 * g, -d + i * (1 - Math.cos(m / i * Math.PI / 2)), g, e)
        }
        this.generateVasqueStrate(l, ++h, u, p, -d, .1, e);
        var l = GeometryHelper.generateStrateFacesForGeometry(t, l, 8 + 4 * (e - 1), !0, !0, a, void 0, !0);
        return this.giftWraper(l, 128, !0), l
    }, this.generateEllispeStrate = function(t, e, n, i, o, r) {
        var s = 2 * Math.PI / e;
        if (r) {
            for (var a = 0; a < Math.PI; a += s) {
                var l = n * Math.cos(a), h = n * Math.sin(a) + i - n;
                t.push(l, o, h)
            }
            for (var a = Math.PI; a < 2 * Math.PI; a += s) {
                var l = n * Math.cos(a), h = n * Math.sin(a) - i + n;
                t.push(l, o, h)
            }
        } else
            for (var a = 0; a < 2 * Math.PI; a += s) {
                var l = n * Math.cos(a), h = i * Math.sin(a);
                t.push(l, o, h)
            }
    }, this.createEllispeTable = function(t, e, n, i, o, r, s) {
        var a = [], e = e || 10;
        return this.generateEllispeStrate(a, e, n, i, -o / 2, s), this.generateEllispeStrate(a, e, n, i, -o / 2, s), this.generateEllispeStrate(a, e, n, i, o / 2, s), this.generateEllispeStrate(a, e, n, i, o / 2, s), GeometryHelper.generateStrateFacesForGeometry(t, a, e + 1, !0, !0, r, void 0, !0)
    }
};