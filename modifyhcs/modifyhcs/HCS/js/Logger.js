var Logger = function() {
    var t = !1, e = function(e) {
        t && console.log(e)
    }, n = function(e) {
        t && console.warn(e)
    }, i = function(e) {
        t && console.error(e)
    }, o = function(e) {
        if (t) {
            var n = document.getElementById("debugArea");
            n.innerHTML = "<div>" + e + "</div>" + n.innerHTML
        }
    }, r = function() {
        if (t) {
            var e = document.getElementById("debugArea");
            e.innerHTML = ""
        }
    }, s = function(e) {
        t = e ? !0 : !1
    };
    return {message: e,warning: n,error: i,setDebugMode: s,out: o,clear: r}
}();