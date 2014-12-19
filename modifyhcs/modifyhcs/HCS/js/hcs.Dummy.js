/*
 * Author: Zhou Jun
 * Function: 控制Dummy组件，初始化3d canvas的相关组件
 */

var hcs = window.hcs || {};
hcs.Dummy = {Engine3D: function(temp) {
    var empty = function() {
        return null
    };
    this.dummy = !0, this._components = [], this.removeComponent = empty, this.searchComponent = empty, this.initialize = empty, this.update = empty, this.draw = empty, this.resize = empty, this.setEnabled = empty, this.canvas = document.createElement("canvas"), this.castShadows = empty, this.uncastShadows = empty;
    var dummy = this;
    this.engine = {_caps: {},_gl: null,_renderingCanvas: n.canvas,getRenderingCanvas: function() {
        return dummy.canvas
    },createRenderTargetTexture: function() {
    },getLoadedTexturesCache: function() {
        return []
    },createVertexBuffer: empty,createIndexBuffer: empty,createTexture: empty,createCubeTexture: empty,createDynamicVertexBuffer: empty,createEffect: empty,scenes: []}, this.addComponent = function() {
        return {}
    }, this.scene = {materials: [],textures: [],meshes: [],cameras: [],spriteManagers: [],getMeshByName: empty,getRenderId: function() {
        return 0
    },getEngine: function() {
        return dummy.engine
    }}, this.scenes = [this.scene], this.getContainer = function() {
        return temp
    }
}};