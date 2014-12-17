var BoundingLimitDisplayerForDimensionReshaperFactoryComponent3D = function() {
    var t = function(t) {
        BaseComponent3D.call(this, t, "BoundingLimitDisplayerForDimensionReshaperFactoryComponent3D")
    };
    t.prototype = new BaseComponent3D, t.prototype.create = function(t, n, i) {
        var o = new e;
        return o.initialize(t, n, i), o
    };
    var e = function() {};
    return e.prototype.initialize = function(t, e, n) {
        if (this.scene = e, this.camera = t, this.dimensionConfigurator = hcsdesign.getComponentByName("DimensionReshaperComponent3D"), "undefined" == typeof n && (n = "green"), "string" == typeof n) {
            var i, o = new BABYLON.StandardMaterial("texture_dimension_configurator_placeholder", e);
            switch (n) {
                case "yellow":
                    i = (new BABYLON.Color3).fromHex(hcs.Assets.complementaryUIColor);
                    break;
                default:
                    i = (new BABYLON.Color3).fromHex(hcs.Assets.mainUIColor)
            }
            hcs.MaterialFactory.MakeBasicColor(o, i), o.backFaceCulling = !1, o.alpha = .6, n = o
        }
        return this.mat = n, this
    }, e.prototype._getBoundingLimitGhost = function() {
        if (this._boundingLimitGhost)
            return this._boundingLimitGhost;
        var t = this.scene;
        return this._boundingLimitGhost = BABYLON.Mesh.CreateBox("boundingboxConfigurator.boundingLimitGhost", 1, t), this._boundingLimitGhost.material = this.mat, this._boundingLimitGhost
    }, e.prototype.display = function(t, e, n) {
        n = n || 0;
        var i = this._getBoundingLimitGhost();
        i.isVisible = !0;
        var o = this.dimensionConfigurator.computeDimension(t);
        o.dimension.scaleInPlace(1.01), i.position = o.position, i.rotationQuaternion = o.rotationQuat, i.scaling = o.dimension;
        var r = .5,
            s = new BABYLON.Vector3(.5 * r + .5 * o.dimension.x + n, .5 * r + .5 * o.dimension.y + n, .5 * r + .5 * o.dimension.z + n);
        s.multiplyInPlace(e), BABYLON.Vector3.TransformCoordinatesToRef(s, o.rotationMatrix, s), i.position.addInPlace(s);
        var a = new BABYLON.Vector3(r - o.dimension.x, r - o.dimension.y, r - o.dimension.z);
        a.multiplyInPlace(e), a.multiplyInPlace(e), i.scaling.addInPlace(a), i.markAsDirty()
    }, e.prototype.hide = function() {
        var t = this._getBoundingLimitGhost();
        t.isVisible = !1
    }, e.prototype.dispose = function() {
        this._boundingLimitGhost.remove(), this._boundingLimitGhost = null
    }, t
}();