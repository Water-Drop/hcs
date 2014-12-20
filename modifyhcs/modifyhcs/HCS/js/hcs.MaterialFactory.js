/*
 * Author：虞思源
 * 
 * 用于创建基本材质
 * RepearTextureXY用于复制
 * MakeBasicMaterial是创建基础材质
 * MakeBasicColor是创建基本颜色为全黑
 * MakeDefaultMaterial是创建默认材质，带反光
 *
 */
var hcs = window.hcs || {};
hcs.MaterialFactory = function () {
    var materialFactory = function (configuration) {
        this.configuration = configuration
    };
    return materialFactory.prototype.mergeParams = function (material, params) {
        var material = material || {}, params = params || {}, n = material;
        for (var i in params)
            n[i] = params[i];
        return n
    }, materialFactory.RepeatTextureXY = function (material, params, n) {
        return material.uScale = params, material.vScale = n, material
    }, materialFactory.MakeBasicMaterial = function (material) {
        material.ambientColor.copyFromFloats(.6, .6, .6), 
		material.diffuseColor.copyFromFloats(0, 0, 0), 
		material.specularColor.copyFromFloats(0, 0, 0), 
		material.emissiveColor.copyFromFloats(.05, .05, .05)
    }, materialFactory.MakeBasicColor = function (material, params) {
        material.ambientColor.copyFromFloats(0, 0, 0), 
		material.specularColor.copyFromFloats(0, 0, 0), 
		material.diffuseColor.copyFromFloats(0, 0, 0), 
		material.emissiveColor.copyFrom(params)
    }, materialFactory.MakeDefaultMaterial = function (material) {
        material.ambientColor.copyFromFloats(.2, .2, .2),
		material.diffuseColor.copyFromFloats(0, 0, 0), 
		material.specularColor.copyFromFloats(.7, .7, .7), 
		material.specularPower = 10
    }, materialFactory.ImportWNPMaterial = function (params) {
        var n = params.materialType;
        if (params = params || {}, params.url && (params.diffuseTexture = params.url), params.maps)
            for (var i in params.maps)
                "normal" == i ? params.bumpTexture = params.url.replace(".jpg", params.maps[i] + ".jpg") : params[i + "Texture"] = params.url.replace(".jpg", params.maps[i] + ".jpg");
        n = -1 !== n.indexOf("hcs.") ? n : "hcs." + (n.charAt("0").toUpperCase() + n.slice(1)) + "Material";
        var o = ujs.getProperty(window, n);
        o ? o = new o(params.name || "ImportedMaterial", hcsdesign.engine3D.scene) : (o = new BABYLON.StandardMaterial(params.name || "ImportedMaterial", hcsdesign.engine3D.scene), this.MakeDefaultMaterial(o)), params.color && (o.diffuseColor.copyFrom(params.color), o.params.baseColor = params.color);
        for (var r in params)
            void 0 !== o[r] && null !== o[r] ? params[r] instanceof Array && o[r].fromArray ? o[r].fromArray(params[r]) : params[r] instanceof Object && o[r].copyFrom ? o[r].copyFrom(params[r]) : -1 !== r.indexOf("Texture") ? (o[r] = new BABYLON.Texture(params[r], hcsdesign.engine3D.scene), o[r].vScale = params.vScale || params.scale || 1, o[r].uScale = params.uScale || params.scale || 1, o[r].hasAlpha = params.hasAlpha || !1) : o[r] = params[r] : -1 !== r.indexOf("Texture") ? (o[r] = new BABYLON.Texture(params[r], hcsdesign.engine3D.scene), o[r].vScale = params.vScale || params.scale || 1, o[r].uScale = params.uScale || params.scale || 1) : o[r] = params[r];
        if ((-1 != n.indexOf("Glass") || -1 != n.indexOf("Transparent") || -1 != n.indexOf("Metal")) && params.addColor && params.addColor.color)
            o.setBaseColor(params.addColor.color);
        else if (params.addColor && params.addColor.color && o.diffuseTexture) {
            o.addColor = params.addColor, 
			params.addColor.size = params.addColor.size || { width: 512, height: 512 };
            var s = new Image, 
			a = params.addColor.color;
            s.crossOrigin = "Anonymous", 
			s.src = o.diffuseTexture.url;
            var l = new BABYLON.DynamicTexture("canvas", params.addColor.size.width, hcsdesign.engine3D.scene, !0);
            l.url = o.diffuseTexture.url, 
			o.diffuseTexture = l, 
			o.diffuseColor = new BABYLON.Color3(a.r, a.g, a.b).scale(.2), 
			s.onload = function () {
                var n = l.getContext();
                n.fillStyle = materialFactory.rgbToHex(a), 
				n.clearRect(0, 0, params.addColor.size.width, params.addColor.size.height), 
				n.drawImage(s, 0, 0, params.addColor.size.width, params.addColor.size.height),
				n.globalCompositeOperation = "soft-light", 
				n.globalCompositeOperation = "color-burn", 
				n.globalCompositeOperation = "multiply", 
				n.fillRect(0, 0, params.addColor.size.width, params.addColor.size.height), 
				l.wrapU = BABYLON.Texture.WRAP_ADDRESSMODE,
				l.wrapV = BABYLON.Texture.WRAP_ADDRESSMODE, 
				l.vScale = params.vScale || params.scale || 1, 
				l.uScale = params.uScale || params.scale || 1, 
				l.update()
            }
        }
        return o
    }, materialFactory.rgbToHex = function (params, n) {
        var i, o, r, n = n || !1, params = params || { r: 1, g: 1, b: 1 };
        return n ? (i = params.r, o = params.g, r = params.b) : (i = Math.round(255 * params.r), o = Math.round(255 * params.g), r = Math.round(255 * params.b)), "#" + materialFactory.decToHex(i, 2) + materialFactory.decToHex(o, 2) + materialFactory.decToHex(r, 2)
    }, materialFactory.decToHex = function (material, params) {
        for (var params = params || 0, n = material.toString(16), i = n.length; params > i; i++)
            n = "0" + n;
        return n
    }, materialFactory
} ();
