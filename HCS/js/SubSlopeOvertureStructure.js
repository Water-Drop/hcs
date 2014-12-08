SubSlopeOvertureStructure = function() {
    var t = function() {
        BaseStructure.call(this, "SubSlopeOvertureStructure"), this.type = "Velux", this.width = 100, this.height = 150, this.thickness = 5, this.nbCasement = 1, this.sliding = 0, this.dormerRoof = {}, this.wallThickness = 10, this.parent = null, this.position = new BABYLON.Vector2, this.polygon = []
    };
    return t.prototype = new BaseStructure, t.prototype.serialize = function() {
        var t = {
            "class": {
                name: "SubSlopeOvertureStructure"
            }
        };
        return ujs.serializeObject(this, t, null, ["parent", "wall"]), t
    }, t.Deserialize = function(t) {
        var e = new SubSlopeOvertureStructure;
        return ujs.deserializeObject(t, e), e
    }, t.prototype.getParent = function() {
        return this.parent
    }, t.prototype.setParent = function(t) {
        if (t != this.parent) {
            null != this.parent && this.parent.overtures.splice(this.parent.overtures.indexOf(this), 1), this.parent = t;
            for (var e = 0; e < this.parent.overtures.length; e++) {
                var n = this.parent.overtures[e];
                if (this.id == n.id)
                    return
            }
            this.parent.overtures.push(this)
        }
    }, t.prototype.isTargeted = function(t) {
        return t.isPointInPolygon(this.polygon)
    }, t.prototype.remove = function() {
        this.parent.overtures.splice(this.parent.overtures.indexOf(this), 1)
    }, t.prototype.remove = function() {
        this.parent.overtures.splice(this.parent.overtures.indexOf(this), 1)
    }, t.prototype.getAbsolutePosition = function() {
        var t = new BABYLON.Vector2;
        return t = this.parent.wall.points[0].position.clone().lerp(this.parent.wall.points[1].position, .5).add(this.position), {
            position: t,
            vector: null
        }
    }, t.prototype.to3D = function() {}, t
}();