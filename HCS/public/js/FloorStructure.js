FloorStructure = function() {
    var t = function() {
        BaseStructure.call(this, "FloorStructure"), this.label = "", this.points = [], this.walls = [], this.overtures = [], this.internalRooms = [], this.externalRooms = [], this.objects = [], this.stairways = [], this.hoppers = [], this.subslopes = [], this.SubSlopeOverture = [], this.elevation = 0, this.height = 250, this.needsUpdate = !0, this.dirtyGeometry = !0
    };
    return t.prototype = new BaseStructure, t.prototype.dirty = function() {
        this.dirtyGeometry = !0
    }, t.prototype.tidy = function() {
        this.dirtyGeometry = !1
    }, t.prototype.isDirty = function() {
        return this.dirtyGeometry
    }, t.prototype.serialize = function() {
        var t = {
            "class": {
                name: "FloorStructure"
            }
        };
        return ujs.serializeObject(this, t, ["id", "name", "label", "elevation", "height", "internalRooms", "externalRooms", "points", "walls", "overtures", "objects", "stairways", "hoppers"]), t
    }, t.prototype.deserialize = function(t) {
        return ujs.deserializeObject(t, this, ["id", "name", "label", "elevation", "height", "internalRooms", "externalRooms", "points", "walls", "overtures", "objects", "stairways", "hoppers"]), this
    }, t.prototype.updateReferences = function() {
        for (var t = this, e = [this.points, this.walls, this.overtures, this.internalRooms, this.externalRooms, this.objects], n = function(e) {
                for (var n = 0, i = e.length; i > n; n++)
                    e[n].updateReferences(t)
            }, i = function(e) {
                for (var n = e.length - 1; n >= 0; n--)
                    e[n].checkCoherence && e[n].checkCoherence(t)
            }, o = 0, r = e.length; r > o; o++)
            n(e[o]), i(e[o]);
        for (var o = 0, r = this.walls.length; r > o; o++)
            this.walls[o].getPolygon(this), this.walls[o].update(this)
    }, t.prototype.insertElement = function(t, e) {
        this[t] || (this[t] = []);
        var n = !1;
        for (var i in this[t])
            if (this[t][i] == e) {
                n = !0;
                break
            }
        n || (e.id = this[t].length, this[t].push(e))
    }, t.prototype.getElements = function(t) {
        return this[t] ? this[t] : []
    }, t.prototype.getElementByIdentifier = function(t, e, n) {
        for (var i = this.getElements(e), n = n || "id", o = 0; o < i.length; o++)
            if (i[o][n] == t)
                return i[o];
        return null
    }, t.prototype.removeElement = function(t, e) {
        if (this[t]) {
            var n = 0;
            for (var i in this[t])
                if (this[t][i] == e) {
                    this[t].splice(i, 1), n = i;
                    break
                }
            this.reindexElements(this[t], n)
        }
    }, t.prototype.replaceElements = function(t, e) {
        this[t] = [].concat(e), this.reindexElements(this[t], 0)
    }, t.prototype.clone = function() {
        var e = this.serialize(),
            n = new t;
        return n.deserialize(e), n.label = "", n
    }, t.prototype.reindexElements = function(t, e) {
        for (var e = e || 0, n = e; n < t.length; n++)
            t[n].id = n
    }, t
}();