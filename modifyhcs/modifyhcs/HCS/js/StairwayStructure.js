StairwayStructure = function() {
    var t = function() {
        BaseStructure.call(this, "StairwayStructure"), this.points = [], this.type = "straight", this.width = 90, this.height = 250, this.stair_height = 20, this.stair_thickness = 3, this.stair_width = 25, this.rail_a = !0, this.rail_b = !0, this.limon = -1, this.stick_spacement = 20, this.have_contremarche = !0, this.elevation = 0, this.diameter = 6, this.bearing = !0, this.stair_offset = 3, this.materials = void 0, this.room = null, this.orientation = !0
    };
    return t.prototype = new BaseStructure, t.prototype.isTargeted = function() {
        return !1
    }, t.prototype.draw = function() {
        return !1
    }, t.prototype.isValid = function() {
        return !0
    }, t.serialize = function(t) {
        for (var e = [], n = 0, i = t.length; i > n; n++)
            e.push(t[n].serialize());
        return e
    }, t.deserialize = function(t) {
        for (var e = [], n = 0, i = t.length; i > n; n++) {
            if ("spiral" == t[n].type)
                var o = new SpiralStairwayStructure;
            else
                var o = new StraightStairwayStructure;
            o.deserialize(t[n]), o.isValid() !== !1 && e.push(o)
        }
        return e
    }, t.prototype.serialize = function() {
        var t = {
            "class": {
                name: "StraightStairwayStructure"
            }
        };
        return ujs.serializeObject(this, t, ["id", "type", "name", "width", "height", "stair_offset", "stair_thickness", "is_closed", "rail_b", "rail_a", "have_contremarche", "elevation", "z", "area", "points", "bearing", "diameter", "limon", "orientation", "materials"]), t
    }, t.prototype.deserialize = function(t) {
        this.id = t.id, this.type = t.type || "straight", this.name = t.name, this.width = t.width || 90, this.height = t.height || 250, this.z = t.z || 0, this.is_closed = t.is_closed, this.area = t.area, this.points.length = 0, this.have_contremarche = t.have_contremarche, this.elevation = t.elevation, this.rail_a = t.rail_a, this.rail_b = t.rail_b, this.stair_offset = "undefined" != typeof t.stair_offset ? t.stair_offset : 3, this.materials = t.materials || {}, this.bearing = "undefined" == typeof t.bearing ? !0 : t.bearing, this.diameter = "undefined" == typeof t.diameter ? 6 : t.diameter, this.stair_thickness = "undefined" == typeof t.stair_thickness ? 3 : t.stair_thickness, this.limon = "undefined" == typeof t.limon ? 10 : t.limon, this.orientation = "undefined" == typeof t.orientation ? !0 : t.orientation;
        for (var e = 0, n = t.points.length; n > e; e++)
            this.points.push(new BABYLON.Vector3(t.points[e].x, t.points[e].y, t.points[e].z))
    }, t.prototype.getHopperPoints = function() {
        for (var t = -1 / 0, e = -1 / 0, n = 1 / 0, i = 1 / 0, o = [], r = 0; r < this.points.length - 1; r++)
            o = o.concat(this.getStepBoundPoints(r));
        for (var r = 0; r < o.length; r++) {
            var s = o[r];
            s.x > t && (t = s.x), s.x < n && (n = s.x), s.y > e && (e = s.y), s.y < i && (i = s.y)
        }
        return [new BABYLON.Vector2(t, e), new BABYLON.Vector2(n, e), new BABYLON.Vector2(n, i), new BABYLON.Vector2(t, i)]
    }, t.prototype.getStepBoundPoints = function(t) {
        var e = this.points[t],
            n = this.points[t + 1];
        t + 2 < this.points.length && (n = n.clone().add(n.clone().subtractInPlace(e.clone()).normalize().scaleInPlace(this.width / 2))), t > 0 && (e = e.clone().add(n.clone().subtractInPlace(e.clone()).normalize().scaleInPlace(this.width / 2)));
        var i = new BABYLON.Vector3(e.y - n.y, n.x - e.x, 0).normalize(),
            o = e.clone().add(i.clone().scaleInPlace(this.width / 2)),
            r = e.clone().subtractInPlace(i.clone().scaleInPlace(this.width / 2)),
            s = n.clone().subtractInPlace(i.clone().scaleInPlace(this.width / 2)),
            a = n.clone().add(i.clone().scaleInPlace(this.width / 2));
        return [o, r, s, a]
    }, t.prototype.getNormalAtPoint = function(t) {
        var e = this.points[t - 1].clone(),
            n = this.points[t].clone(),
            i = new BABYLON.Vector3(e.y - n.y, n.x - e.x, 0);
        return i.normalize(), i
    }, t.prototype.remove = function(t) {
        t.removeElement("stairways", this)
    }, t.prototype.addMaterial = function(t, e, n) {
        this.materials[e.name] = n, t.traverse(function(t) {
            t.name == e.name && t != e && (t.material = e.material.clone())
        })
    }, t.prototype.getAvailableProperties = function() {
        var t = [];
        return t.push({
            name: "width",
            label: _("Width"),
            type: "number",
            cast: "int",
            unit: "cm",
            value: {
                min: 3,
                max: 100,
                step: 1,
                value: this.width
            }
        }), t.push({
            name: "rail_a",
            label: _("Right guard-rail"),
            type: "checkbox",
            value: this.rail_a
        }), t.push({
            name: "rail_b",
            label: _("Left guard-rail"),
            type: "checkbox",
            value: this.rail_b
        }), t.push({
            name: "have_contremarche",
            label: _("riser"),
            type: "checkbox",
            value: this.have_contremarche
        }), t
    }, t
}(), StraightStairwayStructure = function() {
    var t = function() {
        StairwayStructure.call(this), this.type = "straight", this._steps = []
    };
    return t.prototype = new StairwayStructure, t.prototype.isValid = function() {
        return this.points.length <= 1 ? !1 : !0
    }, t.prototype.isTargeted = function(t) {
        for (var e, n = !1, i = !1, o = !1, r = 0; r < this.points.length; r++)
            e = this.getBoundPoints(r), this.isInPoly(t, e) && (n = r, o = !0), this.points[r].distanceTo(t) < 10 && (i = r, o = !0);
        return o ? {
            point: i,
            step: n
        } : !1
    }, t.prototype.draw = function(t, e) {
        e && this.points.push(e), this.computeSteps(), e && this.points.pop(e);
        for (var n = 0; n < this._steps.length; n++)
            this.drawStep(t, this._steps[n])
    }, t.prototype.serialize = function() {
        var t = {
            "class": {
                name: "StraightStairwayStructure"
            }
        };
        return ujs.serializeObject(this, t, ["id", "type", "name", "width", "height", "stair_offset", "stair_thickness", "is_closed", "rail_b", "rail_a", "have_contremarche", "elevation", "z", "area", "points", "bearing", "diameter", "limon", "orientation", "materials"]), t
    }, t.Deserialize = function(t) {
        var e = new StraightStairwayStructure;
        return ujs.deserializeObject(t, e, ["id", "type", "name", "width", "height", "stair_offset", "stair_thickness", "is_closed", "rail_b", "rail_a", "have_contremarche", "elevation", "z", "area", "points", "bearing", "diameter", "limon", "orientation", "materials"]), e.computeSteps(), e
    }, t.prototype.computeSteps = function() {
        this._steps.length = 0;
        for (var t, e, n, i, o = 0; o < this.points.length - 1; o++) {
            e = this.getBoundPoints(o - 1), n = this.getBoundPoints(o), i = this.getBoundPoints(o + 1);
            var r = n[0].clone(),
                s = n[1].clone(),
                a = n[2].clone(),
                l = n[3].clone(),
                h = this.points[o].clone(),
                c = this.points[o + 1].clone(),
                u = null,
                p = null,
                d = null,
                m = null,
                g = null,
                f = null;
            i && (ia1 = BABYLON.Vector2.Intersect(n[0], n[3], i[0], i[3]), "undefined" != typeof ia1 && (l.x = ia1.x, l.y = ia1.y), ib1 = BABYLON.Vector2.Intersect(n[1], n[2], i[1], i[2]), "undefined" != typeof ib1 && (a.x = ib1.x, a.y = ib1.y), h.distanceTo(l) > h.distanceTo(a) ? (c = h.add(a.subtract(h).projectOnVector(c.subtract(h))), m = a.clone(), p = c.add(c.subtract(a)), g = l.clone()) : (c = h.add(l.subtract(h).projectOnVector(c.subtract(h))), m = l.clone(), p = c.add(c.subtract(l)), g = a.clone())), e && (ia0 = BABYLON.Vector2.Intersect(n[0], n[3], e[0], e[3]), "undefined" != typeof ia0 && (r.x = ia0.x, r.y = ia0.y), ib0 = BABYLON.Vector2.Intersect(n[1], n[2], e[1], e[2]), "undefined" != typeof ib0 && (s.x = ib0.x, s.y = ib0.y), c.distanceTo(r) > c.distanceTo(s) ? (h = c.add(s.subtract(c).projectOnVector(h.subtract(c))), d = s.clone(), u = h.add(h.subtract(s)), f = r.clone()) : (h = c.add(r.subtract(c).projectOnVector(h.subtract(c))), d = r.clone(), u = h.add(h.subtract(r)), f = s.clone())), t = {
                id: o,
                boundPolygon: n,
                areaPolygon: [r, s, a, l],
                stairsSegment: [h, c],
                bearingPolygon0: [d, u, f],
                bearingPolygon1: [m, p, g]
            }, this._steps.push(t)
        }
    }, t.prototype.getBoundPoints = function(t) {
        if (this.points[t] && this.points[t + 1]) {
            var e = this.points[t + 1].subtract(this.points[t]).normalize(),
                n = new BABYLON.Vector3(e.y, -e.x, 0).scaleInPlace(this.width / 2),
                i = this.points[t].add(n),
                o = this.points[t + 1].add(n),
                r = this.points[t + 1].subtract(n),
                s = this.points[t].subtract(n);
            return [i, s, r, o]
        }
        return !1
    }, t.prototype.drawStepBearing = function(t, e, n) {
        var n = n || 0;
        if (!this.bearing && e[0]) {
            var i, o = e[1].distanceTo(e[2]),
                r = 25,
                s = Math.floor(o / r);
            t.beginPath();
            for (var a = 1; s - n >= a; a++)
                i = e[1].clone().lerp(e[2], 1 / s * a), t.moveTo(e[0].x, e[0].y), t.lineTo(i.x, i.y);
            t.stroke()
        }
    }, t.prototype.drawStep = function(t, e) {
        var n = e.areaPolygon,
            i = n[3].subtract(n[0]).normalize(),
            o = new BABYLON.Vector3(i.y, -i.x, 0).scaleInPlace(10),
            r = n[0].add(o),
            s = n[3].add(o),
            a = Math.round(r.distanceTo(s)) / 100;
        if (a > .5 && hcsdesign.engine2D.symbols2D.drawMeasure(t, r, s, a + "m", "#cccccc"), this.points.length > 2) {
            var l = n[1].subtract(o),
                h = n[2].subtract(o),
                c = Math.round(l.distanceTo(h)) / 100;
            c > .5 && hcsdesign.engine2D.symbols2D.drawMeasure(t, l, h, c + "m", "#cccccc")
        }
        t.beginPath(), t.moveTo(n[0].x, n[0].y), t.lineTo(n[3].x, n[3].y), t.moveTo(n[1].x, n[1].y), t.lineTo(n[2].x, n[2].y), t.stroke(), this.drawStepStairs(t, e.stairsSegment), this.drawStepBearing(t, e.bearingPolygon0, 1), this.drawStepBearing(t, e.bearingPolygon1)
    }, t.prototype.drawStepStairs = function(t, e) {
        var n = e[0].clone(),
            i = e[1],
            o = i.subtract(n).normalize(),
            r = new BABYLON.Vector3(o.y, -o.x, 0).scaleInPlace(this.width / 2),
            s = n.distanceTo(i),
            a = 20,
            l = Math.floor(s / a),
            h = s / l,
            c = Math.atan2(o.y, o.x);
        hcsdesign.engine2D.symbols2D.drawArrows(t, n, [0, 1, 0, 0], 0, c, !1, {
            size: 10
        }), hcsdesign.engine2D.symbols2D.drawArrows(t, i, [0, 1, 0, 0], -10, c, !1, {
            size: 10
        });
        var u = o.scale(h);
        t.beginPath();
        for (var p, d, m = 0; l >= m; m++)
            p = n.add(r), d = n.subtract(r), t.moveTo(p.x, p.y), t.lineTo(d.x, d.y), n.addInPlace(u);
        t.stroke()
    }, t.prototype.isInPoly = function(t, e) {
        var n, i, o = 0;
        for (n = 0, i = e.length - 1; n < e.length; i = n++)
            e[n].y > t.y != e[i].y > t.y && t.x < (e[i].x - e[n].x) * (t.y - e[n].y) / (e[i].y - e[n].y) + e[n].x && (o = !o);
        return o
    }, t
}();