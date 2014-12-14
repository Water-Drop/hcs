var GridComponent3D = function() {
    var t, e = function(e) {
        BaseComponent3D.call(this, e, "GridComponent3D"), this.structure = new GridStructure, t = this, this.setupLights(), this.createGround(), this.createSky(), this.lights = [], document.addEventListener("hcs.core.structure.loaded", this.onStructureLoaded.bind(this), !1)
    };
    return e.prototype = new BaseComponent3D, e.prototype.initialize = function() {}, e.prototype.onStructureLoaded = function() {
        var t = {},
            e = {};
        this.core.structure.params.grid && (t = this.core.structure.params.grid, this.createGround(t)), this.core.structure.params.sky && (e = this.core.structure.params.sky, this.createSky(e))
    }, e.prototype.startListening = function() {
        document.addEventListener("hcs.engine3D.changeGround", this.onChangeGround, !1), document.addEventListener("hcs.engine3D.changeSky", this.onChangeSky, !1)
    }, e.prototype.stopListening = function() {
        document.removeEventListener("hcs.engine3D.changeGround", this.onChangeGround, !1), document.removeEventListener("hcs.engine3D.changeSky", this.onChangeSky, !1)
    }, e.prototype.createGround = function(e) {
        var e = e || {},
            n = (e.name || "ground", e.url || hcs.Assets.globalPath + "js/Components/GridComponent/Images/grid2.jpg"),
            i = function(e) {
                var n = hcsdesign.engine3D.scene.getMeshByName("ground");
                if (!n) {
                    var i = t.core.configuration.boundingSize.getSize();
                    n = BABYLON.Mesh.CreateBloc("ground", i.x, 1, i.z, hcsdesign.engine3D.scene), n.position.copyFromFloats(0, -1, 0), (window.ejecta || GlobalHelper.isMobileDevice()) && (n.position.y = -10), n.isDecorable = !1, n.receiveShadows = !0
                }
                hcs.MaterialFactory.RepeatTextureXY(e, 16, 16), n.material = new BABYLON.StandardMaterial("ground", hcsdesign.engine3D.scene), n.material.diffuseTexture = e, n.material.ambientColor = new BABYLON.Color3(.9, .9, .9), n.material.diffuseColor = new BABYLON.Color3(1, 1, 1), n.material.specularColor = new BABYLON.Color3(.01, .01, .01), hcsdesign.engine3D.scene.lights.point.excludedMeshes.push(n)
            };
        i(new BABYLON.Texture(n, hcsdesign.engine3D.scene))
    }, e.prototype.createSky = function(e) {
        var e = e || {},
            n = e.url || hcs.Assets.globalPath + "js/Components/GridComponent/Images/background2.jpg",
            i = function(e) {
                var n = t.scene.getMeshByName("skysphere");
                n || (n = BABYLON.Mesh.CreateSphere("skysphere", 16, 3e4, hcsdesign.engine3D.scene), n.scaling.x *= -1, n.isDecorable = !1), n.material = new BABYLON.StandardMaterial("skysphere", hcsdesign.engine3D.scene), n.material.ambientTexture = e, hcs.MaterialFactory.MakeBasicMaterial(n.material), n.material.ambientColor.copyFromFloats(1, 1, 1)
            };
        i(new BABYLON.Texture(n, hcsdesign.engine3D.scene))
    }, e.prototype.setupLights = function() {
        hcsdesign.engine3D.scene.lights = [];
        var t = new BABYLON.DirectionalLight("Dir0", new BABYLON.Vector3(-1, -2, -1), hcsdesign.engine3D.scene);
        t.specular = new BABYLON.Color3(.15, .15, .15), t.diffuse = new BABYLON.Color3(.55, .55, .55), t.intensity = 1, t.position = new BABYLON.Vector3(1e3, 2e3, 1e3);
        var e = new BABYLON.PointLight("Point0", hcsdesign.engine3D.camera.position, hcsdesign.engine3D.scene);
        e.diffuse = new BABYLON.Color3(.65, .65, .65), e.specular = new BABYLON.Color3(1, 1, 1), e.intensity = .45, hcsdesign.engine3D.scene.lights.point = e, hcsdesign.engine3D.shadowGenerator = new BABYLON.ShadowGenerator(2048, t), hcsdesign.configuration.useShadow ? (hcsdesign.engine3D.shadowGenerator.useVarianceShadowMap = !1, hcsdesign.engine3D.shadowGenerator.usePoissonSampling = !0, hcsdesign.engine3D.shadowGenerator.setDarkness(.8), hcsdesign.engine3D.shadowGenerator.setTransparencyShadow(!0)) : hcsdesign.engine3D.shadowGenerator.dispose()
    }, e.prototype.reloadConfiguration = function() {}, e.prototype.onChangeGround = function(e) {
        t.createGround({
            name: e.name,
            url: e.url
        }), t.core.structure.params.grid = {
            name: e.name,
            url: e.url
        }, ujs.notify("hcs.request.saveHistory")
    }, e.prototype.onChangeSky = function(e) {
        t.createSky({
            name: e.name,
            url: e.url
        }), t.core.structure.params.sky = {
            name: e.name,
            url: e.url
        }, ujs.notify("hcs.request.saveHistory")
    }, e
}();