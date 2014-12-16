var HTMLHelper = function() {
    var t = {};
    return t.insertHTML = function(t, e, n, i) {
        var o = e, n = "function" == typeof n ? n : function() {
        }, i = "function" == typeof i ? i : function() {
        };
        "string" == typeof e && (o = document.getElementById(e)), ujs.ajax({method: "GET",url: t + "?t=" + Math.round(100 * Math.random()),success: function(t) {
                                                                           o.innerHTML = t, n()
                                                                           },onerror: i})
    }, t.addScript = function(t, e, n, i) {
        var n = "function" == typeof n ? n : function() {
        }, i = "function" == typeof i ? i : function() {
        }, o = document.createElement("script");
        if (o.addEventListener("load", n, !1), o.addEventListener("error", i, !1), o.setAttribute("src", t), e)
            for (var r in e)
                o.setAttribute(r, e[r]);
        var s = document.getElementById("scripts");
        s.appendChild(o)
    }, t.addStylesheet = function(t, e, n, i) {
        var n = "function" == typeof n ? n : function() {
        }, i = "function" == typeof i ? i : function() {
        }, o = document.createElement("link");
        if (o.addEventListener("load", n, !1), o.addEventListener("error", i, !1), o.setAttribute("rel", "stylesheet"), o.setAttribute("href", t), e)
            for (var r in e)
                o.setAttribute(r, e[r]);
        var s = document.getElementsByTagName("head")[0];
        s.appendChild(o)
    }, t.hide3DMenus = function(t) {
        var t = t || "none", e = document.getElementById("decorate3D"), n = document.getElementById("furnishing3D");
        e && (e.style.display = t), n && (n.style.display = t)
    }, t.simulateKey = function(t, e, n) {
        var i = "string" == typeof e ? "key" + e : "keydown", n = n || {}, o = {keyCode: t};
        for (var r in n)
            o[r] = n[r];
        ujs.notify(i, o)
    }, t.simulateClick = function(t, e, n, i, o, r) {
        var s = document.createEvent("MouseEvent");
        s.initEvent(i || "mousedown"), s.clientX = s.layerX = s.pageX = s.screenX = s.x = 0 | +e, s.clientX = s.layerY = s.pageY = s.screenY = s.y = 0 | +n, s.button = 0 | +o, s.detail = s.wheelDeltaY = s.wheelDelta = 0 | +r, t.dispatchEvent(s)
    }, t
}();