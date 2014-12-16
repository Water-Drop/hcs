SpiralStairwayStructure = function() {
    var t = function() {
        StairwayStructure.call(this), this.type = "spiral"
    };
    return t.prototype = new StairwayStructure, t.prototype.serialize = function() {
        var t = {
            "class": {
                name: "SpiralStairwayStructure"
            }
        };
        return ujs.serializeObject(this, t, ["id", "type", "name", "width", "height", "stair_offset", "stair_thickness", "is_closed", "rail_b", "rail_a", "have_contremarche", "z", "area", "points", "bearing", "diameter", "limon", "orientation", "materials"]), t
    }, t.Deserialize = function(t) {
        var e = new SpiralStairwayStructure;
        return ujs.deserializeObject(t, e, ["id", "type", "name", "width", "height", "stair_offset", "stair_thickness", "is_closed", "rail_b", "rail_a", "have_contremarche", "z", "area", "points", "bearing", "diameter", "limon", "orientation", "materials"]), e
    }, t.prototype.computeSpiralPoints = function() {
        var t = 0,
            e = -Math.PI / 2,
            n = this.points[0],
            i = new BABYLON.Vector3(this.width * Math.cos(t), this.width * Math.sin(t), 0),
            o = new BABYLON.Vector3(this.width * Math.cos(e), this.width * Math.sin(e), 0);
        this.points[1] = n.clone().add(i), this.points[2] = n.clone().add(o)
    }, t.prototype.isTargeted = function(t) {
        var e = !1,
            n = 0;
        if (t.distanceTo(this.points[0]) < this.width && (e = !0), this.points[1] && this.points[0]) {
            var i = t.distanceTo(this.points[1]),
                o = t.distanceTo(this.points[2]);
            10 > i ? (n = 1, e = !0) : 10 > o && (e = !0, n = 2)
        }
        return e ? {
            point: n
        } : !1
    }, t.prototype.getHopperPoints = function() {
        var t = this.points[0].clone(),
            e = t.clone();
        e.y -= this.width;
        var n = e.clone();
        n.x -= this.width;
        var i = n.clone();
        i.y += 2 * this.width;
        var o = i.clone();
        o.x += 2 * this.width;
        var r = o.clone();
        return r.y -= this.width, [t, e, n, i, o, r]
    }, t.prototype.draw = function(t, e) {
        var n = this.points[0] || e,
            i = this.points[1] || e.clone().add(new BABYLON.Vector3(this.width, 0, 0)),
            o = this.points[2] || i.clone(),
            r = this.width,
            s = Math.atan2(i.y - n.y, i.x - n.x),
            a = Math.atan2(o.y - n.y, o.x - n.x);
        s == a && (a = 2 * Math.PI), t.beginPath();
        this.orientation ? 1 : -1;
        this.orientation ? t.arc(n.x, n.y, r, s, a, !1) : t.arc(n.x, n.y, r, a, s, !1), t.moveTo(n.x, n.y), t.lineTo(i.x, i.y), t.moveTo(n.x, n.y), t.lineTo(o.x, o.y), t.stroke();
        var l = [0, 0, 1, 0];
        this.orientation || (l = [1, 0, 0, 0]), wanaplan.engine2D.symbols2D.drawArrows(t, n.clone().lerp(i, .5), l, 0, s, !1, {
            size: 10
        }), wanaplan.engine2D.symbols2D.drawArrows(t, n.clone().lerp(o, .5), l, -10, a, !1, {
            size: 10
        }), t.save(), t.beginPath(), this.orientation ? t.arc(n.x, n.y, r, a, s, !1) : t.arc(n.x, n.y, r, s, a, !1), t.strokeStyle = "#eeeeee";
        for (var h, c = 0; 10 >= c; c++)
            h = 15 * c / 80 * Math.PI, t.moveTo(n.x, n.y), p2x = n.x + Math.cos(h) * r, p2y = n.y + Math.sin(h) * r, t.lineTo(p2x, p2y);
        t.stroke(), t.restore(), t.save(), t.fillStyle = "#ffffff", t.beginPath(), t.arc(n.x, n.y, this.diameter, 0, 2 * Math.PI, !1), t.stroke(), t.fill(), t.restore()
    }, t
}();