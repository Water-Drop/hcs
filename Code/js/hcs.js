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


(function(){
    var scripts = [
        "hcs.AnimationHandler",
        "hcs.API",
        "hcs.API.Menu",
        "hcs.Assets",
        "hcs.Box3",
        "hcs.BrowserDetector",
        "hcs.CameraFeatures",
        "hcs.ComponentCollection",
        "hcs.Configuration",
        "hcs.Constants",
        "hcs.Core",
        "hcs.Engine2D",
        "hcs.Engine3D",
        "hcs.Handle",
        "hcs.Input.FirstPersonCamera",
        "hcs.Input.OrbitCamera",
        "hcs.Input.TouchManager",
        "hcs.KeyboardManager",
        "hcs.Logger",
        "hcs.LoopTimer",
        "hcs.Material",
        "hcs.MaterialFactory",
        "hcs.MaterialInfo",
        "hcs.PointerManager",
        "hcs.Structure",
        "hcs.Symbols2D",
        "hcs.UI.FormBuilder",
        "hcs.UI.Frame",
        "hcs.UI.ProductList",
        "hcs.UI.ContextMenu",
        "hcs.UI.AboutWindow",
        "hcs.UI.BackgroundPopup",
        "hcs.UI.ColorPopup",
        "hcs.UI.HelpBubble",
        "hcs.UI.HelpBubbleManager",
        "hcs.UI.RemoteController",
        "hcs.UI.MessageBox",
        "hcs.UI.Menu",
        "hcs.UI.IFrame",
        "hcs.UI",
        "hcs.Widget.Elevation",
        "hcs.Widget.Info",
        "hcs.Widget.Rotator"
    ];
    for(var i in scripts){
        var ele=document.createElement("script"); 
        ele.setAttribute("src","js/"+scripts[i] + ".js");
        var obj = document.getElementById('scripts');
        obj.appendChild(ele);
    }
})();

!function() {
    window.onload = function() {
        //add initial code here;
        window.WNP_DEBUG = true, hcs.Logger.setDebugMode(window.WNP_DEBUG);
        hcs.Logger.message("Hcs has initialized!");
    };
}();