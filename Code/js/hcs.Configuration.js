/*
 * Author：吴疆
 * Date：2014年11月3日
 * Email：me@wujiang.name
 * 该模块负责存储和读取系统配置
 */
var hcs = window.hcs || {};

hcs.Configuration = function() {
    var config = null;
    LOCAL_STORAGE_CONFIGURATION_KEY = "hcs.configuration";
    var Configuration = function() {
        this.boundingSize = {
            min: {x: -5e3,y: -5e3,z: -5e3},
            max: {x: 5e3,y: 5e3,z: 5e3},
            getSize: function() {
                return {
                    x: this.max.x - this.min.x,y: this.max.y - this.min.y,z: this.max.z - this.min.z
                };
            }
        }, 
        this.hardwareScalingLevel = 1, 
        this.hasMobileConfig = false, 
        this.maxTextureSize = 1024, 
        this.useAntialiasing = true, 
        this.useEnvMap = true, 
        this.useMultiLights = true, 
        this.useMultiTexturing = true, 
        this.useShadow = true, 
        this.useStats = true, 
        this.useAreaProcessing = true, 
        this.useRealtimeMeasure = true, 
        this.loadConfiguration(), 
        config = this;
    };
    return Configuration.prototype.loadConfiguration = function() {
        var config = hcsLocalStorage.getItem(LOCAL_STORAGE_CONFIGURATION_KEY);
        if (null != config) {
            var Configuration = JSON.parse(config);
            this.useAntialiasing = Configuration.useAntialiasing,
            this.useAreaProcessing = Configuration.useAreaProcessing,
            this.useRealtimeMeasure = Configuration.useRealtimeMeasure,
            this.useShadow = Configuration.useShadow, 
            this.useEnvMap = Configuration.useEnvMap, 
            this.useMultiTexturing = Configuration.useMultiTexturing, 
            this.maxTextureSize = Configuration.maxTextureSize, 
            this.useMultiLights = Configuration.useMultiLights, 
            this.useStats = Configuration.useStats, 
            this.hasMobileConfig = Configuration.hasMobileConfig, 
            this.hardwareScalingLevel = Configuration.hardwareScalingLevel ? Configuration.hardwareScalingLevel : 1;
        }
        return config ? true : false;
    }, Configuration.prototype.saveConfiguration = function() {
        var config = this.serialize();
        hcsLocalStorage.setItem(LOCAL_STORAGE_CONFIGURATION_KEY, config);
    }, Configuration.prototype.serialize = function() {
        var config = {
            useAntialiasing: this.useAntialiasing,
            useAreaProcessing: this.useAreaProcessing,
            useRealtimeMeasure: this.useRealtimeMeasure,
            useShadow: this.useShadow,
            useEnvMap: this.useEnvMap,
            useMultiTexturing: this.useMultiTexturing,
            maxTextureSize: this.maxTextureSize,
            useMultiLights: this.useMultiLights,
            useStats: this.useStats,
            hasMobileConfig: this.hasMobileConfig,
            hardwareScalingLevel: this.hardwareScalingLevel
        };
        return JSON.stringify(config);
    }, Configuration.prototype.setQuality = function(config) {
        config === hcs.Constants.GRAPHICS_FAST ? (
                this.useAntialiasing = false, 
                this.useShadow = false, 
                this.useEnvMap = false, 
                this.useMultiTexturing = false, 
                this.useMultiLights = false, 
                this.hardwareScalingLevel = 1.5
            ) : 
            config === hcs.Constants.GRAPHICS_GOOD ? (
                this.useAntialiasing = true, 
                this.useShadow = false, 
                this.useEnvMap = false, 
                this.useMultiTexturing = true, 
                this.useMultiLights = true, 
                this.hardwareScalingLevel = 1
            ) : (
                this.useAntialiasing = true, 
                this.useShadow = true, 
                this.useEnvMap = true, 
                this.useMultiTexturing = true, 
                this.useMultiLights = true, 
                this.hardwareScalingLevel = 1
                ), 
                this.saveConfiguration();
    }, Configuration;
}();