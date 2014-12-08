var GridStructure = function() {
    var t = function() {
        BaseStructure.call(this, "GridStructure"), this.materials = {}
    };
    return t.prototype = new BaseStructure, t.prototype.serialize = function() {
        return this.materials
    }, t.prototype.deserialize = function(t) {
        for (var e in t)
            this.materials[e] = t[e]
    }, t
}();