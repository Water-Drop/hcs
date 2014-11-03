var hcs = window.hcs || {};

//本地存储
var hcsLocalStorage;
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
    window.WNP_DEBUG = true, hcs.Logger.setDebugMode(window.WNP_DEBUG);
    window.onload = function() {
        //add initial code here;
        hcs.Logger.message("Hcs has initialized!");
    };
}();