var RoomHierarchy = function() {
    var t = function() {
        this.room = null, this.center = null, this.parent = null, this.children = []
    };
    t.prototype.contains = function(t) {
        return t.center ? this.room.isPointIn(t.center) : !1
    }, t.prototype.insert = function(t) {
        if (this.contains(t)) {
            for (var e = 0, n = this.children.length; n > e; e++)
                if (this.children[e].insert(t))
                    return !0;
            for (var e = this.children.length - 1; e >= 0; e--)
                t.insert(this.children[e]) && this.children.splice(e, 1);
            return this.children.push(t), t.parent = this, !0
        }
        return !1
    }, t.fromRoom = function(e) {
        if (e.points.length < 3)
            return null;
        var n = new t;
        return n.room = e, n.center = e.points[0].clone().lerp(e.points[1], .5), n
    };
    var e = function() {
        t.call(this)
    };
    e.prototype = new t, e.prototype.contains = function() {
        return !0
    };
    var n = function(n) {
        this.tree = new e;
        for (var i = 0, o = n.length; o > i; i++)
            this.tree.insert(t.fromRoom(n[i]))
    };
    return n.prototype.discrimineRooms = function(t, e) {
        for (var n = function(i, o) {
                o ? e.push(i.room) : t.push(i.room);
                for (var r = 0, s = i.children.length; s > r; r++)
                    n(i.children[r], !o)
            }, i = 0, o = this.tree.children.length; o > i; i++)
            n(this.tree.children[i], !0)
    }, n.prototype.adjustRooms = function() {
        for (var t = null, e = function(n, i) {
                n.room.isExternal = i;
                for (var o = 0, r = n.children.length; r > o; o++)
                    i || (t = n.children[o], n.room.area -= t.room.area, n.room.holes.push(t.room.points.slice(0))), e(n.children[o], !i)
            }, n = 0, i = this.tree.children.length; i > n; n++)
            e(this.tree.children[n], !0)
    }, n
}();