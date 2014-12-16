var wnp = window.wnp || {};
wnp.MaterialFactory = function () {
    var t = function (t) {
        this.configuration = t
    };
    return t.prototype.mergeParams = function (t, e) {
        var t = t || {}, e = e || {}, n = t;
        for (var i in e)
            n[i] = e[i];
        return n
    }, t.RepeatTextureXY = function (t, e, n) {
        return t.uScale = e, t.vScale = n, t
    }, t.MakeBasicMaterial = function (t) {
        t.ambientColor.copyFromFloats(.6, .6, .6), t.diffuseColor.copyFromFloats(0, 0, 0), t.specularColor.copyFromFloats(0, 0, 0), t.emissiveColor.copyFromFloats(.05, .05, .05)
    }, t.MakeBasicColor = function (t, e) {
        t.ambientColor.copyFromFloats(0, 0, 0), t.specularColor.copyFromFloats(0, 0, 0), t.diffuseColor.copyFromFloats(0, 0, 0), t.emissiveColor.copyFrom(e)
    }, t.MakeDefaultMaterial = function (t) {
        t.ambientColor.copyFromFloats(.2, .2, .2), t.diffuseColor.copyFromFloats(0, 0, 0), t.specularColor.copyFromFloats(.7, .7, .7), t.specularPower = 10
    }, t.ImportWNPMaterial = function (e) {
        var n = e.materialType;
        if (e = e || {}, e.url && (e.diffuseTexture = e.url), e.maps)
            for (var i in e.maps)
                "normal" == i ? e.bumpTexture = e.url.replace(".jpg", e.maps[i] + ".jpg") : e[i + "Texture"] = e.url.replace(".jpg", e.maps[i] + ".jpg");
        n = -1 !== n.indexOf("wnp.") ? n : "wnp." + (n.charAt("0").toUpperCase() + n.slice(1)) + "Material";
        var o = ujs.getProperty(window, n);
        o ? o = new o(e.name || "ImportedMaterial", wanaplan.engine3D.scene) : (o = new BABYLON.StandardMaterial(e.name || "ImportedMaterial", wanaplan.engine3D.scene), this.MakeDefaultMaterial(o)), e.color && (o.diffuseColor.copyFrom(e.color), o.params.baseColor = e.color);
        for (var r in e)
            void 0 !== o[r] && null !== o[r] ? e[r] instanceof Array && o[r].fromArray ? o[r].fromArray(e[r]) : e[r] instanceof Object && o[r].copyFrom ? o[r].copyFrom(e[r]) : -1 !== r.indexOf("Texture") ? (o[r] = new BABYLON.Texture(e[r], wanaplan.engine3D.scene), o[r].vScale = e.vScale || e.scale || 1, o[r].uScale = e.uScale || e.scale || 1, o[r].hasAlpha = e.hasAlpha || !1) : o[r] = e[r] : -1 !== r.indexOf("Texture") ? (o[r] = new BABYLON.Texture(e[r], wanaplan.engine3D.scene), o[r].vScale = e.vScale || e.scale || 1, o[r].uScale = e.uScale || e.scale || 1) : o[r] = e[r];
        if ((-1 != n.indexOf("Glass") || -1 != n.indexOf("Transparent") || -1 != n.indexOf("Metal")) && e.addColor && e.addColor.color)
            o.setBaseColor(e.addColor.color);
        else if (e.addColor && e.addColor.color && o.diffuseTexture) {
            o.addColor = e.addColor, e.addColor.size = e.addColor.size || { width: 512, height: 512 };
            var s = new Image, a = e.addColor.color;
            s.crossOrigin = "Anonymous", s.src = o.diffuseTexture.url;
            var l = new BABYLON.DynamicTexture("canvas", e.addColor.size.width, wanaplan.engine3D.scene, !0);
            l.url = o.diffuseTexture.url, o.diffuseTexture = l, o.diffuseColor = new BABYLON.Color3(a.r, a.g, a.b).scale(.2), s.onload = function () {
                var n = l.getContext();
                n.fillStyle = t.rgbToHex(a), n.clearRect(0, 0, e.addColor.size.width, e.addColor.size.height), n.drawImage(s, 0, 0, e.addColor.size.width, e.addColor.size.height), n.globalCompositeOperation = "soft-light", n.globalCompositeOperation = "color-burn", n.globalCompositeOperation = "multiply", n.fillRect(0, 0, e.addColor.size.width, e.addColor.size.height), l.wrapU = BABYLON.Texture.WRAP_ADDRESSMODE, l.wrapV = BABYLON.Texture.WRAP_ADDRESSMODE, l.vScale = e.vScale || e.scale || 1, l.uScale = e.uScale || e.scale || 1, l.update()
            }
        }
        return o
    }, t.rgbToHex = function (e, n) {
        var i, o, r, n = n || !1, e = e || { r: 1, g: 1, b: 1 };
        return n ? (i = e.r, o = e.g, r = e.b) : (i = Math.round(255 * e.r), o = Math.round(255 * e.g), r = Math.round(255 * e.b)), "#" + t.decToHex(i, 2) + t.decToHex(o, 2) + t.decToHex(r, 2)
    }, t.decToHex = function (t, e) {
        for (var e = e || 0, n = t.toString(16), i = n.length; e > i; i++)
            n = "0" + n;
        return n
    }, t
} ();
