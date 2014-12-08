var WallPane3D = function() {
    var t = function(t, e, n) {
        MeasureStructure.call(this, t, e, n), this.materialInfo = null, this.room = null, this.materialIndex = -1
    };
    return t.prototype = new MeasureStructure, t.prototype.setRoom = function(t) {
        this.room = t
    }, t.prototype.nearestPane = function(t) {
        for (var e, n = this.center(), i = null, o = +1 / 0, r = 0, s = t.length; s > r; r++)
            t[r] !== this && (e = t[r].center().distanceTo(n), o > e && (o = e, i = t[r]));
        return i
    }, t.prototype.nearestMaterial = function(t) {
        for (var e, n = this.center(), i = null, o = +1 / 0, r = 0, s = t.length; s > r; r++)
            e = t[r].center.distanceTo(n), o > e && (o = e, i = r);
        return i
    }, t.prototype.addMaterial = function(t) {
        this.materialInfo || (this.materialInfo = MaterialInfo.MakeFromPane(this));
        var e = this.materialInfo.material ? this.materialInfo.material.clone(this.materialInfo.material.name) : null;
        return this.materialInfo.material = t, this.room.panesMaterials[this.room.panes.indexOf(this)] = this.materialInfo, e
    }, t.prototype.serialize = function() {
        return this.materialInfo ? this.materialInfo.serialize() : null
    }, t.Deserialize = function(t) {
        var e = new MaterialInfo;
        return e.deserialize(t), e
    }, t
}();