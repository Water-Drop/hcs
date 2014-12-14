var hcs = window.hcs || {};
hcs.Box3 = function() {
    var t = function() {
        this.min = null, this.max = null, this.angle = 0, this.customData = {}
    };
    return t.prototype.center = function() {
        return BABYLON.Vector3.Lerp(this.min, this.max, .5)
    }, t.prototype.serialize = function() {
        var t = ujs.serializeObject(this, !0);
        return t.class = {name: "hcs.Box3"}, t
    }, t.prototype.deserialize = function(t) {
        return this.min = new BABYLON.Vector3(t.min.x, t.min.y, t.min.z), this.max = new BABYLON.Vector3(t.max.x, t.max.y, t.max.z), this.angle = t.angle, this.customData = ujs.deserializeObject(t.customData), this
    }, t.Deserialize = function(e) {
        if (!e)
            return null;
        var n = new t;
        return ujs.deserializeObject(e, this), n
    }, t
}();