var MeasureStructure = function() {
    var t = function(t, e, n) {
        BaseStructure.call(this, "MeasureStructure"), this.points = t || [], this.parent = e, this.offsetVector = n
    };
    return t.prototype = new BaseStructure, t.prototype.center = function() {
        return BABYLON.Vector2.Lerp(this.points[0], this.points[1], .5)
    }, t.prototype.normal = function() {
        return this.offsetVector.clone().normalize()
    }, t.prototype.tryMerge = function(t) {
        var e = function(t, e, n) {
                var i, o = Math.PI / 80,
                    r = 3,
                    s = e.subtract(t),
                    a = n.subtract(e);
                return s.length() < r || a.length() < r ? !1 : (i = Math.abs(s.determinant(a)), o > i)
            },
            n = 1,
            i = function() {
                var e = this.points.length - 1,
                    i = t.points.length - 1;
                if (this.points[e].distanceTo(t.points[0]) < n)
                    t.points.shift(), this.points.pop(), this.points = this.points.concat(t.points);
                else if (this.points[0].distanceTo(t.points[0]) < n)
                    t.points.reverse(), t.points.pop(), this.points.shift(), this.points = t.points.concat(this.points);
                else if (this.points[e].distanceTo(t.points[i]) < n)
                    t.points.reverse(), t.points.shift(), this.points.pop(), this.points = this.points.concat(t.points);
                else {
                    if (!(this.points[0].distanceTo(t.points[i]) < n))
                        return !1;
                    t.points.pop(), this.points.shift(), this.points = t.points.concat(this.points)
                }
                return !0
            }.bind(this);
        return e(this.points[0], this.points[this.points.length - 1], t.points[0]) && e(this.points[0], this.points[this.points.length - 1], t.points[t.points.length - 1]) && this.parent.height === t.parent.height ? i() : !1
    }, t.prototype.mergeMeasures = function(t) {
        for (var e, n = t.length, i = t.length - 1; i >= 0; i--) {
            e = t[i];
            for (var o = 0; n > o; o++)
                o !== i && e.tryMerge(t[o]) && (t.splice(o, 1), n--, i--, o = 0)
        }
    }, t
}();