var Logger = function(){
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

var hcs = null, hcsLocalStorage;
try {
    hcsLocalStorage = localStorage;
} catch (e) {
    hcsLocalStorage = {
        fallback: true,
        item: {},
        setItem: function(t, e) {
            this.item[t] = e;
        },
        getItem: function(t) {
            return this.item[t] || null;
        },
        removeItem: function(t) {
            delete this.item[t];
        }
    };
}

!function() {
    window.WNP_DEBUG = true, Logger.setDebugMode(window.WNP_DEBUG);
    window.onload = function() {
        //add initial code here;
        Logger.message("Hcs has initialized!");
    };
}();