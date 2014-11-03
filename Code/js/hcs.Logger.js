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
