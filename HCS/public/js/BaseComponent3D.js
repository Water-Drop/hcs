var BaseComponent3D = function() {
    var t = function(t, e) {
        if (this.core = t, this.engine3D = null, this.name = e || "Component3D", this.structure = null, this.keyboardManager = null, this.materialFactory = null, this.scene = null, this.draggableObjects = null, this.cameraController = null, this.cubeCameras = null, this.configuration = null, this.camera = null, this.enabled = !0, this.initialized = !1, "undefined" != typeof t) {
            this.name = e, this.engine3D = this.core.engine3D, this.structure = this.core.structure, this.keyboardManager = this.core.keyboardManager, this.configuration = this.core.configuration, this.scene = this.core.engine3D.scene, this.camera = this.core.engine3D.camera, this.cubeCameras = this.core.engine3D.cubeCameras, this.cameraController = this.core.engine3D.cameraController, this.materialFactory = this.core.engine3D.materialFactory;
            var n = this;
            document.addEventListener("wnp.contextChanged", function(t) {
                n.enabled && t.context != t.previousContext && n.onContextChanged(t.context)
            }, !1), document.addEventListener("wnp.engine3D.forceReload", this.reloadConfiguration, !1)
        }
    };
    return t.prototype.initialize = function() {}, t.prototype.startListening = function() {}, t.prototype.stopListening = function() {}, t.prototype.onContextChanged = function(t) {
        "3D" == t ? this.startListening() : this.stopListening()
    }, t.prototype.disable = function() {
        this.enabled = !1, this.stopListening()
    }, t.prototype.enable = function() {
        this.enabled = !0
    }, t.prototype.update = function() {}, t.prototype.compute = function() {}, t.prototype.reloadConfiguration = function() {}, t.prototype.getFloor = function(t) {
        var e = this.core.getComponentByName("FloorComponent3D"),
            t = t || wanaplan.getSelectedStructure();
        return e.getFloor(t)
    }, t.prototype.getObjectStructure = function(t) {
        return Logger.warning("[BaseComponent3D] getObjectStructure - Fonction d¨¦preci¨¦e"), t.structure
    }, t.prototype.getParentRelativeToScene = function(t) {
        var e = t.parent;
        if ("structure" != e.name && "undefined" != typeof e.parent) {
            for (;
                "undefined" != typeof e.parent && "structure" != e.parent.name;)
                e = e.parent;
            t = e
        }
        return t
    }, t.prototype.getParentRelativeToGroup = function(t) {
        var e = t.parent;
        if ("structure" != e.name && -1 == e.name.indexOf("group_") && "undefined" != typeof e.parent) {
            for (;
                "undefined" != typeof e.parent && -1 == e.parent.name.indexOf("group_") && "structure" != e.parent.name;)
                e = e.parent;
            t = e
        }
        return t
    }, t.prototype.getObjectByName = function(t, e) {
        return this.core.getSelectedStructure().getElementByName(t, e)
    }, t.prototype.destroy = function() {}, t
}();