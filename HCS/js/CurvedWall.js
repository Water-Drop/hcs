CurvedWall = function() {
    var t = function() {
        PolygonWall.call(this, "CurvedWall"), this.TYPE_NORMAL = 1, this.TYPE_SEPARATOR = 2, this.type = this.TYPE_NORMAL, this.polygonPoints = [], this.instance = "curved", this.cp = null
    };
    return t.prototype = new PolygonWall, t.prototype.serialize = function() {
        var t = PolygonWall.prototype.serialize.call(this);
        return t.type = this.type, t.cp = {
            x: this.cp.x,
            y: this.cp.y,
            z: this.cp.z
        }, t
    }, t.prototype.isTargeted = function(t) {
        var e = document.createElement("canvas"),
            n = e.getContext("2d");
        if (this.draw(n), n.isPointInPath(t.x, t.y))
            return delete e, !0;
        var i = this.getCp();
        return t.distanceTo(i) < 10 ? (delete e, i) : (n.beginPath(), n.moveTo(this.getPoints(0).position.x, this.getPoints(0).position.y), n.quadraticCurveTo(i.x, i.y, this.getPoints(1).position.x, this.getPoints(1).position.y), n.lineTo(i.x, i.y), n.closePath(), n.isPointInPath(t.x, t.y) ? (delete e, !0) : (delete e, !1))
    }, t.prototype.computeDefault = function(t) {
        this.computeCp();
        var e = this.getCp(),
            n = this.getPoints(t).position.clone().subtractInPlace(e).normalize().scaleInPlace(this.thickness / 2),
            i = new BABYLON.Vector3(n.y, -n.x, 0),
            o = this.getPoints(t).position,
            r = o.clone().subtractInPlace(i),
            s = o.clone(),
            a = o.clone().add(i);
        this._edgePolygons[t] = [a, s, r]
    }, t.prototype.translate = function(t, e) {
        PolygonWall.prototype.translate.call(this, t, e), this.getCp().add(t)
    }, t.prototype.computeCp = function(t) {
        var t = t || !1;
        if (this.cp && !t)
            var e = this.cp;
        else {
            var e = this.getPoints(0).position.clone().lerp(this.getPoints(1).position, .5);
            e.add(this.getNormalVector(this.getLength() / 2))
        }
        var n = this.getNormalVector(this.thickness / 2),
            i = e.clone().subtractInPlace(n),
            o = e.clone().add(n);
        this.cp = e, this._edgePolygons[2] = [i, o]
    }, t.prototype.deserialize = function(t) {
        PolygonWall.prototype.deserialize.call(this, t), this.type = t.type, this.cp = new BABYLON.Vector3(t.cp.x, t.cp.y, t.cp.z)
    }, t.prototype.getAxis = function(t) {
        var e = this.getCp(),
            n = this.getPoints(t).position.clone().subtractInPlace(e).normalize().scaleInPlace(this.thickness / 2),
            i = new BABYLON.Vector3(n.y, -n.x, 0),
            o = this.getPoints(t).position,
            r = e,
            s = o.clone().add(i),
            a = r.clone().add(i),
            l = o.clone().subtractInPlace(i),
            h = r.clone().subtractInPlace(i);
        return 1 == t ? [
            [h, l],
            [a, s]
        ] : [
            [s, a],
            [l, h]
        ]
    }, t.prototype.getCp = function() {
        return this.cp || this.computeCp(), this.cp
    }, t.prototype.draw = function(t) {
        var e = this._edgePolygons[0],
            n = this._edgePolygons[1];
        "undefined" == typeof this._edgePolygons[2] && this.computeCp();
        var i = this._edgePolygons[2];
        t.beginPath(), t.moveTo(e[2].x, e[2].y), t.quadraticCurveTo(i[0].x, i[0].y, n[0].x, n[0].y), t.lineTo(n[1].x, n[1].y), t.lineTo(n[2].x, n[2].y), t.quadraticCurveTo(i[1].x, i[1].y, e[0].x, e[0].y), t.lineTo(e[1].x, e[1].y), t.fill()
    }, t
}();