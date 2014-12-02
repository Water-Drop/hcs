var MaterialInfo = function() {
    var t = function(t) {
        this.boundingBox = null, this.normal = null, this.center = null, this.material = t || null, this.customData = null
    };
    return t.prototype.serialize = function() {
        var t = {};
        return t.class = {name: "MaterialInfo"}, ujs.serializeObject(this, t), t
    }, t.prototype.deserialize = function(t) {
        return ujs.deserializeObject(t, this), this
    }, t.Deserialize = function(e) {
        var n = new t;
        return n.deserialize(e)
    }, t.MakeFromPane = function(e, n) {
        var i = new t(n);
        return i.normal = e.normal(), i.center = e.center(), i
    }, t.prototype.matchBestBoundingBox = function(t) {
        if (!this.boundingBox)
            return null;
        for (var e, n = +1 / 0, i = null, o = 0, r = t.length; r > o; o++)
            e = this.boundingBox.match(t[o]), n > e && (n = e, i = o);
        return i
    }, t
}();