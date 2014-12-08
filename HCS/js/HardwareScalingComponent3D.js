var HardwareScalingComponent3D = function() {
    var t = function(t) {
        BaseComponent3D.call(this, t, "HardwareScalingComponent3D"), this.hardwareScalingLevel = 1, this.hardwareScaling = 1, this._e3d = wanaplan.engine3D, this._camComponent = null, this._edtComponent = null, this._perfComponent = null, this._performanceItem = {}, this._initialized = !1
    };
    return t.prototype = Object.create(BaseComponent3D.prototype), t.prototype.initialize = function() {
        this._initialized || (this._onResize = this._onResize.bind(this), this.hardwareScalingLevel = wanaplan.configuration.hardwareScalingLevel || 1, this.hardwareScaling = 1 / this.hardwareScalingLevel, this._camComponent = this._e3d.searchComponent("CameraComponent"), this._edtComponent = this._e3d.searchComponent("EditionComponent3D"), this._perfComponent = this._e3d.searchComponent("PerformanceComponent3D"), this.hardwareScalingLevel > 1 && (window.addEventListener("resize", this._onResize, !1), this.setHardwareScalingLevel(this.hardwareScalingLevel)), this._perfComponent && (this._performanceItem = {
            type: "select",
            label: _("Quality"),
            namesValues: [{
                text: _("Low"),
                value: 2
            }, {
                text: _("Simple"),
                value: 1.5
            }, {
                text: _("Good"),
                value: 1
            }],
            selectedKey: wanaplan.configuration.hardwareScalingLevel,
            eventParams: {
                cast: "float",
                property: "hardwareScalingLevel",
                eventName: "wnp.request.changePerformancesProperty"
            }
        }, this._perfComponent.addItem(this._performanceItem)), this._initialized = !0)
    }, t.prototype.destroy = function() {
        this.setHardwareScalingLevel(1), wanaplan.configuration.hardwareScalingLevel = 1, wanaplan.configuration.saveConfiguration(), this._perfComponent && this._perfComponent.removeItem(this._performanceItem), this._camComponent && this._camComponent.disableAllPostProcess(), this._edtComponent && (this._edtComponent.dragControl.hardwareScaling = 1), window.removeEventListener("resize", this._onResize)
    }, t.prototype.setHardwareScalingLevel = function(t) {
        this.hardwareScaling = 1 / t, this.hardwareScalingLevel = t, this._e3d.engine.setHardwareScalingLevel(t), this._e3d.hardwareScaling = this.hardwareScaling, this._e3d.canvas.width = wanaplan.getWidth() * this.hardwareScaling, this._e3d.canvas.height = wanaplan.getHeight() * this.hardwareScaling, this.hardwareScalingLevel > 2 && this._camComponent && this._camComponent.toggleFSAA(), this._edtComponent && this._edtComponent.dragControl.setHardwareScaling(this.hardwareScaling)
    }, t.prototype._onResize = function() {
        this.hardwareScalingLevel > 1 && this.setHardwareScalingLevel(this.hardwareScalingLevel)
    }, t
}();