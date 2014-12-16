var MesureDisplayerForDimensionReshaperFactoryComponent3D = function() {
    var t = function(t) {
        BaseComponent3D.call(this, t, "MesureDisplayerForDimensionReshaperFactoryComponent3D")
    };
    t.prototype = new BaseComponent3D, t.prototype.create = function(t, n) {
        var i = new e;
        return i.initialize(t, n), i
    };
    var e = function() {};
    return e.prototype.initialize = function(t, e) {
        return this.camera = t, this.scene = e, this.dimensionConfigurator = wanaplan.getComponentByName("DimensionReshaperComponent3D"), this
    }, e.prototype.hide = function() {
        this._cote && (this._cote.plan.isVisible = !1)
    }, e.prototype.dispose = function() {
        this._cote.plan.dispose(), this._cote.texture.dispose(), this._cote = null
    }, e.prototype.display = function(t, e, n, i) {
        var o = this._getCote();
        o.plan.isVisible = !0;
        var r = this.dimensionConfigurator.computeDimension(t, e, i),
            s = this.dimensionConfigurator.getbestAxis(t, n, e),
            a = e.clone(),
            l = BABYLON.Vector3.Cross(s, a),
            h = wanaplan.engine3D,
            c = h.scene.activeCamera,
            u = c.target.subtract(c.position),
            p = BABYLON.Vector3.TransformCoordinates(l, r.rotationMatrix);
        BABYLON.Vector3.Dot(p, u) > 0 && l.scaleInPlace(-1), p = BABYLON.Vector3.TransformCoordinates(l, r.rotationMatrix);
        var d = (BABYLON.Vector3.TransformCoordinates(a, r.rotationMatrix), BABYLON.Quaternion.RotationFromXtoX_2(new BABYLON.Vector3(0, 1, 0), l, new BABYLON.Vector3(0, 0, 1), s)),
            m = r.rotationQuat,
            g = m.multiply(d);
        o.plan.rotationQuaternion = g;
        var f = c.getViewMatrix().clone();
        f.m[12] = f.m[13] = f.m[14] = 0;
        var y = BABYLON.Vector3.TransformCoordinates(p, f);
        Math.abs(y.x) > Math.abs(y.y) ? y.y = 0 : y.x = 0;
        var _ = (Math.floor(Math.atan2(y.y, y.x) / (Math.PI / 2)) + 3) % 4,
            v = Math.abs(r.newDimension.dot(a));
        v = this.dimensionConfigurator._roundL(v), this._writeCote(v, _, u.length()), o.plan.position = r.newPosition.clone();
        var b = new BABYLON.Vector3(.5 * r.newDimension.x + .5 * o.plan.scaling.y, .5 * r.newDimension.y + .5 * o.plan.scaling.y, .5 * r.newDimension.z + .5 * o.plan.scaling.y).multiply(l);
        BABYLON.Vector3.TransformCoordinatesToRef(b, r.rotationMatrix, b), o.plan.position.addInPlace(b);
        var w = r.rotationMatrix.clone();
        w.invert();
        var x = n.subtract(r.newPosition);
        BABYLON.Vector3.TransformCoordinatesToRef(x, w, x), x = x.multiply(s).multiply(s), BABYLON.Vector3.TransformCoordinatesToRef(x, r.rotationMatrix, x), o.plan.position.addInPlace(x)
    }, e.prototype._resizeAndComputeRatio = function(t, e) {
        var n = this._getCote(),
            i = n.texture.getSize(),
            o = Math.min(i.width / t, i.height / e);
        return n.plan.scaling.x = i.width / o, n.plan.scaling.y = n.plan.scaling.x * i.height / i.width, o
    }, e.prototype._getCote = function() {
        if (this._cote)
            return this._cote;
        var t = this.scene,
            e = BABYLON.Mesh.CreatePlane("cote_plan", 1, t);
        e.scaling.x = 1e3, e.scaling.y = 1e3;
        var n = new BABYLON.StandardMaterial("cote_texture", t);
        wanaplan.engine3D.scene.getEngine().getCaps().maxAnisotropy = 128;
        var i = new BABYLON.DynamicTexture("cote_texture", {
            width: 512,
            height: 256
        }, t, !0);
        return i.hasAlpha = !0, n.diffuseTexture = i, n.useAlphaFromDiffuseTexture = !0, e.material = n, this._cote = {
            texture: i,
            plan: e
        }
    }, e.prototype._writeCote = function(t, e, n) {
        var i = this._getCote(),
            o = i.texture.getContext();
        o.save();
        var r = .5,
            s = .08,
            a = 1.65,
            l = .3,
            h = 4 * (2 + n / 300),
            c = !1,
            u = i.texture.getSize(),
            p = (Math.round(t) + " cm").replace(/\d/g, "0");
        o.font = "normal " + 1e3 * r + "pt calibri";
        var d = o.measureText(p).width / 1e3;
        o.font = "normal " + 700 * r + "pt calibri", d += o.measureText(".00").width / 1e3, c = (e % 2 == 0 ? d : 2 * r) * h > t - 2 * l * h;
        var m = h * ((c ? 1.5 * r : 0) + (e % 2 == 1 ? d + a : a + 2 * r)),
            g = this._resizeAndComputeRatio(t, m);
        2 * l * h > .6 * t && (l *= .6 * t / (2 * l * h)), o.save(), o.clearRect(0, 0, u.width, u.height), o.lineWidth = s * h * g, o.strokeStyle = "#000000", o.fillStyle = "#000000", o.font = "normal " + r * h * g + "pt calibri", d *= g * h;
        var f = e % 2 == 1 ? r * h * g * 1.4 : 1.01 * d,
            y = u.height - a * h * g - r * g * h,
            _ = .5 * u.width - .5 * t * g + s * h * g,
            v = .5 * u.width + .5 * t * g - s * h * g;
        c ? (o.beginPath(), o.moveTo(_, y), o.lineTo(v, y), o.stroke()) : (o.beginPath(), o.moveTo(_, y), o.lineTo((_ + v) / 2 - f / 2, y), o.stroke(), o.beginPath(), o.moveTo(v, y), o.lineTo((_ + v) / 2 + f / 2, y), o.stroke()), o.beginPath(), o.moveTo(_ + l * g * h, y + l * g * h), o.lineTo(_, y), o.lineTo(_ + l * g * h, y - l * g * h), o.stroke(), o.beginPath(), o.moveTo(v - l * g * h, y + l * g * h), o.lineTo(v, y), o.lineTo(v - l * g * h, y - l * g * h), o.stroke(), o.globalAlpha = .7, o.lineWidth = .5 * s * h * g, o.beginPath(), o.moveTo(_ - .5 * s * h * g, y + .1 * (u.height - y)), o.lineTo(_ - .5 * s * h * g, y + .9 * (u.height - y)), o.stroke(), o.lineWidth = .5 * s * h * g, o.beginPath(), o.moveTo(v + .5 * s * h * g, y + .1 * (u.height - y)), o.lineTo(v + .5 * s * h * g, y + .9 * (u.height - y)), o.stroke(), o.globalAlpha = 1;
        var b = e * Math.PI / 2;
        o.translate((_ + v) / 2, y - (c ? r * h * g * 1.5 : 0)), o.rotate(b), 1 == e && o.translate(r * h * g - d / 2, 0), 3 == e && o.translate(-r * h * g + d / 2, 0), o.translate(-d / 2, r * h * g * .5);
        var w = (t >> 0) + "";
        o.fillText(w, 0, 0), o.translate(o.measureText(w).width, 0);
        var w = "." + Math.floor(t % 1 * 100);
        w = 2 == w.length ? w + "0" : w, o.font = "normal " + r * h * g * .7 + "pt calibri", o.fillText(w, 0, 0), o.translate(o.measureText(w).width, 0);
        var w = " cm";
        o.font = "normal " + r * h * g + "pt calibri", o.fillText(w, 0, 0), o.restore(), i.texture.update()
    }, t
}();