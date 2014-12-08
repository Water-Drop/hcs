HopperStructure = function() {
    var t = function(t) {
        BaseStructure.call(this, "HopperStructure"), this.points = t || [new BABYLON.Vector2(0, 0), new BABYLON.Vector2(100, 0), new BABYLON.Vector2(100, 100), new BABYLON.Vector2(0, 100)], this.materials = {}, this.sticks = {}, this.stairwayId = null, this.modified = !1
    };
    return t.prototype = new BaseStructure, t.prototype.serialize = function() {
        var t = {
            "class": {
                name: "HopperStructure"
            }
        };
        return ujs.serializeObject(this, t, ["points", "materials", "sticks", "stairwayId"]), t
    }, t.Deserialize = function(e) {
        var n = new t;
        return ujs.deserializeObject(e, n, ["points", "materials", "sticks", "stairwayId"]), n.isValid() ? n : null
    }, t.prototype.isValid = function() {
        if (this.points.length < 2)
            return Logger.warning("Invalid Hopper"), !1;
        for (var t, e = 0, n = this.points.length; n > e; e++)
            if (t = this.points[e].distanceTo(this.points[(e + 1) % n]), 1 / 0 == t || isNaN(t) || 0 === t)
                return Logger.warning("Invalid Hopper"), !1;
        return !0
    }, t.prototype.remove = function(t) {
        t.removeElement("hoppers", this)
    }, t.prototype.insertPointAt = function(t, e) {
        this.points.splice(t, 0, e)
    }, t.prototype.move = function(t) {
        for (var e = 0; e < this.points.length; e++)
            this.points[e].addInPlace(t)
    }, t
}();