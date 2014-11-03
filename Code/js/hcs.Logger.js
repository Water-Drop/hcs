/*
 * Author：吴疆
 * Date：2014年11月2日
 * Email：me@wujiang.name
 * 
 * Logger模块提供调试信息
 * setDebugMode;true为开启，false为关闭，默认开启
 * message，warning,error：对应于控制台是输出
 * out和clear分别控制系统界面调试信息输出和清空
 * 
 */

var hcs = window.hcs || {};

hcs.Logger = function(){
    var __debugMode = false;
    return{
        message : function(msg) {
            __debugMode && console.log(msg);
        }, 
        warning : function(msg) {
            __debugMode && console.warn(msg);
        }, 
        error : function(msg) {
            __debugMode && console.error(msg);
        }, 
        out : function(msg) {
            if (__debugMode) {
                var obj = document.getElementById("debugArea");
                obj.innerHTML = "<div>" + msg + "</div>" + obj.innerHTML;
            }
        }, 
        clear : function() {
            if (__debugMode) {
                var msg = document.getElementById("debugArea");
                msg.innerHTML = "";
            }
        },
        setDebugMode : function(debugMode) {
            __debugMode = debugMode ? true : false;
        }
    };
}();
