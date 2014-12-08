var wnp = window.wnp || {};
wnp.Dummy = {Engine3D: function(t) {
    var e = function() {
        return null
    };
    this.dummy = !0, this._components = [], this.removeComponent = e, this.searchComponent = e, this.initialize = e, this.update = e, this.draw = e, this.resize = e, this.setEnabled = e, this.canvas = document.createElement("canvas"), this.castShadows = e, this.uncastShadows = e;
    var n = this;
    this.engine = {_caps: {},_gl: null,_renderingCanvas: n.canvas,getRenderingCanvas: function() {
        return n.canvas
    },createRenderTargetTexture: function() {
    },getLoadedTexturesCache: function() {
        return []
    },createVertexBuffer: e,createIndexBuffer: e,createTexture: e,createCubeTexture: e,createDynamicVertexBuffer: e,createEffect: e,scenes: []}, this.addComponent = function() {
        return {}
    }, this.scene = {materials: [],textures: [],meshes: [],cameras: [],spriteManagers: [],getMeshByName: e,getRenderId: function() {
        return 0
    },getEngine: function() {
        return n.engine
    }}, this.scenes = [this.scene], this.getContainer = function() {
        return t
    }
}};