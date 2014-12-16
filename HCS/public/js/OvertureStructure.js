OvertureStructure = function() {
    var t = function() {
        BaseStructure.call(this, "OvertureStructure");
        this.type = "Door", this.position = new BABYLON.Vector2, this.width = 73, this.height = 200, this.thickness = 7, this.elevation = 0, this.hinge = 0, this.side = -1, this.nbCasement = 1, this.parentWall = null, this.minsize = 15, this.sliding = !1, this.galandage = !1, this.batiThickness = 5, this.programmableInstance = null, this.plinte = 1
    };
    return t.prototype = new BaseStructure, t.prototype.serialize = function() {
        var t = {
            "class": {
                name: "OvertureStructure"
            }
        };
        return ujs.serializeObject(this, t, null, ["parentWall"]), t
    }, t.Deserialize = function(t) {
        var e = new OvertureStructure;
        return ujs.deserializeObject(t, e), e
    }, t.prototype.checkCoherence = function(t) {
        this.getParentWall() ? (this.width = Math.min(this.width, this.parentWall.getWallVector().length() - 24), this.width < 0 && this.remove(t)) : this.remove(t)
    }, t.prototype.getParentWall = function() {
        return this.parentWall
    }, t.prototype.setParentWall = function(t) {
        if (t != this.parentWall) {
            null != this.parentWall && this.parentWall.overtures.splice(this.parentWall.overtures.indexOf(this), 1), this.parentWall = t;
            for (var e = 0; e < this.parentWall.overtures.length; e++) {
                var n = this.parentWall.overtures[e];
                if (this.id == n.id)
                    return
            }
            this.parentWall.overtures.push(this)
        }
    }, t.prototype.computePositionOnWallChange = function(t) {
        var e = this.parentWall,
            n = this.position.x,
            i = e.getWallVector().normalize().scaleInPlace(n),
            o = t.getPoints(0).position.subtract(e.getPoints(0).position),
            r = i.subtract(o),
            s = r.length();
        return this.position.x = s, this.side *= Math.sign(e.getWallVector().dot(t.getWallVector())), s
    }, t.prototype.projectOnWall = function() {
        if (this.parentWall) {
            var t, e = this.parentWall,
                n = e.getLength();
            t = n < this.width ? .5 * this.width : ujs.Math.clamp(Math.abs(this.position.x), .5 * this.width, e.getLength() - .5 * this.width), this.position.x = t * Math.sign(this.position.x)
        }
    }, t.prototype.getAbsolutePos = function() {
        var t = this.parentWall.getWallVector().normalize(),
            e = t.scale(this.position.x).addInPlace(this.parentWall.getPoints(0).position);
        return {
            position: e,
            vector: t
        }
    }, t.prototype.getAngle = function() {
        var t = this.parentWall.getWallVector().normalize();
        return Math.atan2(t.y, t.x)
    }, t.prototype.getPolygon = function() {
        var t = new BABYLON.Vector2,
            e = new BABYLON.Vector2,
            n = this.getAbsolutePos(),
            i = this.parentWall.getNormalVector(this.parentWall.thickness / 2);
        return t = n.position.subtract(n.vector.scale(this.width / 2)), e = n.position.add(n.vector.scale(this.width / 2)), [t.add(i), e.add(i), e.subtract(i), t.subtract(i)]
    }, t.prototype.clampSize = function(t, e) {
        var t = t || !1;
        if (!this.parentWall || this.parentWall.getLength() < this.minsize && t)
            return void this.remove(e);
        var n = this.getAbsolutePos();
        this.width = BABYLON.Math.clamp(this.width, this.minsize, Math.min(2 * n.position.distanceTo(this.parentWall.getPoints(0).position), 2 * n.position.distanceTo(this.parentWall.getPoints(1).position)))
    }, t.prototype.remove = function(t) {
        this.parentWall && this.parentWall.overtures.splice(this.parentWall.overtures.indexOf(this), 1), this.parentWall = null, void 0 != t && t.removeElement("overtures", this)
    }, t
}();