var wnp = window.wnp || {};
wnp.Configuration = function () {
    var t = null;
    LOCAL_STORAGE_CONFIGURATION_KEY = "wnp.configuration";
    var e = function () {
        this.boundingSize = { min: { x: -5e3, y: -5e3, z: -5e3 }, max: { x: 5e3, y: 5e3, z: 5e3 }, getSize: function () {
            return { x: this.max.x - this.min.x, y: this.max.y - this.min.y, z: this.max.z - this.min.z }
        } 
        }, this.hardwareScalingLevel = 1, this.hasMobileConfig = !1, this.maxTextureSize = 1024, this.useAntialiasing = !0, this.useEnvMap = !0, this.useMultiLights = !0, this.useMultiTexturing = !0, this.useShadow = !0, this.useStats = !0, this.useAreaProcessing = !0, this.useRealtimeMeasure = !0, this.loadConfiguration(), t = this
    };
    return e.prototype.loadConfiguration = function () {
        var t = wnpLocalStorage.getItem(LOCAL_STORAGE_CONFIGURATION_KEY);
        if (null != t) {
            var e = JSON.parse(t);
            this.useAntialiasing = e.useAntialiasing, this.useAreaProcessing = e.useAreaProcessing, this.useRealtimeMeasure = e.useRealtimeMeasure, this.useShadow = e.useShadow, this.useEnvMap = e.useEnvMap, this.useMultiTexturing = e.useMultiTexturing, this.maxTextureSize = e.maxTextureSize, this.useMultiLights = e.useMultiLights, this.useStats = e.useStats, this.hasMobileConfig = e.hasMobileConfig, this.hardwareScalingLevel = e.hardwareScalingLevel ? e.hardwareScalingLevel : 1
        }
        return t ? !0 : !1
    }, e.prototype.saveConfiguration = function () {
        var t = this.serialize();
        wnpLocalStorage.setItem(LOCAL_STORAGE_CONFIGURATION_KEY, t)
    }, e.prototype.serialize = function () {
        var t = { useAntialiasing: this.useAntialiasing, useAreaProcessing: this.useAreaProcessing, useRealtimeMeasure: this.useRealtimeMeasure, useShadow: this.useShadow, useEnvMap: this.useEnvMap, useMultiTexturing: this.useMultiTexturing, maxTextureSize: this.maxTextureSize, useMultiLights: this.useMultiLights, useStats: this.useStats, hasMobileConfig: this.hasMobileConfig, hardwareScalingLevel: this.hardwareScalingLevel };
        return JSON.stringify(t)
    }, e.prototype.setQuality = function (t) {
        t === wnp.Constants.GRAPHICS_FAST ? (this.useAntialiasing = !1, this.useShadow = !1, this.useEnvMap = !1, this.useMultiTexturing = !1, this.useMultiLights = !1, this.hardwareScalingLevel = 1.5) : t === wnp.Constants.GRAPHICS_GOOD ? (this.useAntialiasing = !0, this.useShadow = !1, this.useEnvMap = !1, this.useMultiTexturing = !0, this.useMultiLights = !0, this.hardwareScalingLevel = 1) : (this.useAntialiasing = !0, this.useShadow = !0, this.useEnvMap = !0, this.useMultiTexturing = !0, this.useMultiLights = !0, this.hardwareScalingLevel = 1), this.saveConfiguration()
    }, e
} ();
