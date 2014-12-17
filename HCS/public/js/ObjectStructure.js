ObjectStructure = function() {
    var t = 0,
        e = function(e, n) {
            BaseStructure.call(this, "Object_" + t++), Logger.warning("TODO : retravailler constructeur de objectStructure");
            var n = n || {};
            this.objectId = e || 0, this.position = n.position || new BABYLON.Vector3(0, 0, 0), this.rotation = n.rotation || new BABYLON.Vector3(0, 0, 0), this.scaling = n.scaling || new BABYLON.Vector3(1, 1, 1), this.modelRotation = n.modelRotation || new BABYLON.Vector3(0, 0, 0), this.preferredYAngle = n.preferredYAngle, this.objectInstance = null, this.programmableInstance = null, this.filename = null, this.builderId = null, this.customData = {}
        };
    return e.prototype = new BaseStructure, e.prototype.serialize = function() {
        if (!this.isDeleted) {
            var t, e = {
                "class": {
                    name: "ObjectStructure"
                }
            };
            return this.objectInstance && (t = this.objectInstance.parent, this.objectInstance.changeFrame(this.objectInstance.getFloor())), ujs.serializeObject(this, e, ["objectId", "customData", "builderId", "filename", "baseUrl", "position", "rotation", "scaling", "programmableInstance"], ["group"]), t && (this.objectInstance.changeFrame(t), this.objectInstance.getFloor().markAsDirty()), e
        }
    }, e.prototype.deserialize = function(t) {
        return ujs.deserializeObject(t, this, ["objectId", "customData", "builderId", "filename", "baseUrl", "position", "rotation", "scaling", "programmableInstance"]), this
    }, e.Deserialize = function(t) {
        var n = new e;
        return n.deserialize(t), n
    }, e.prototype.checkCoherence = function(t) {
        (Math.abs(this.position.x) > 5e3 || Math.abs(this.position.z) > 5e3) && t.removeElement("objects", this), this.programmableInstance || t.removeElement("objects", this)
    }, e.prototype.clone = function() {
        var t = this.serialize();
        return e.Deserialize(t)
    }, e.prototype.getAvailableProperties = function() {
        var t = [];
        return null !== this.programmableInstance && (t = this.programmableInstance.getAvailableProperties(this)), t
    }, e.prototype.getMagnetismCollider = function() {
        return void 0 !== this.magnetismCollider ? this.magnetismCollider : void 0 !== this.params.magnetismCollider ? this.params.magnetismCollider : hcs.Constants.MAGNETISM.DEFAULT
    }, e.prototype.animate = function(t, e) {
        null !== this.programmableInstance && this.programmableInstance.animate && this.programmableInstance.animate(t, e)
    }, e.prototype.getProperty = function(t) {
        if (this.programmableInstance) {
            var e = "get" + t + "Param";
            if (this.programmableInstance[e]) {
                var n = this.programmableInstance[e].call(this);
                if (n)
                    return ujs.getProperty(this.programmableInstance, n)
            }
        }
        return 0
    }, e.prototype.changeProperty = function(t, e) {
        if (this.programmableInstance) {
            var n = "get" + t + "Param";
            if (this.programmableInstance[n]) {
                var i = this.programmableInstance[n].call(this);
                i && (ujs.setProperty(this, i, e), ujs.setProperty(this.programmableInstance, i, e))
            }
        }
    }, e
}();