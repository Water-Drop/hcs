if(typeof hcs === 'undefined'){
    hcs = function(){};
}

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
                n.innerHTML = "<div>" + msg + "</div>" + n.innerHTML;
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