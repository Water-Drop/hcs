var wnp = window.wnp || {};
wnp.UI = wnp.UI || {}, wnp.UI.ContextMenu = function() {
    var t = null, e = !1, n = null, i = {x: !1,y: !1}, o = function(e) {
        var e = e || {};
        e.autoSize = e.autoSize === !1 ? !1 : !0, wnp.UI.Frame.call(this, e), null == t && (t = this)
    };
    return o.prototype = new wnp.UI.Frame, o.prototype.initialize = function() {
        wnp.UI.Frame.prototype.initialize.call(this), this.domElement.id = "contextMenu"
    }, o.prototype.show = function(t, n, i, o) {
        wnp.UI.Frame.prototype.show.call(this, t, n), this.menuName = i, e = !0, ujs.notify("wnp.widget.contextMenu.opened"), ujs.notify("wnp.widget.contextMenu." + this.menuName + ".opened", o)
    }, o.prototype.close = function() {
        e && (wnp.UI.Frame.prototype.close.call(this), e = !1, null !== n && (clearInterval(n), n = null), i = {x: this.windowPosition.x,y: this.windowPosition.y}, ujs.notify("wnp.widget.contextMenu.closed"), ujs.notify("wnp.widget.contextMenu." + this.menuName + ".closed"))
    }, o.isOpen = function() {
        return e
    }, o.show = function(o, r, s, a, l) {
        var o = o || {};
        o.width = o.width || 250, o.height = o.height || !1, o.x = o.x || i.x || window.innerWidth / 2 - o.width / 2, o.y = o.y || i.y || window.innerHeight / 2 - o.height / 2, o.title = o.title || "Paramètres", o.layout = o.layout || "horizontal", o.autoSize = o.autoSize === !1 ? !1 : !0;
        var h = o.menuName || o.title.replace(/ /g, "_");
        null == t && (t = new wnp.UI.ContextMenu(o, {title: o.title}), t.initialize()), o.id && t.domElement.setAttribute("id", o.id);
        var c = function() {
            t.clear(), t.setTitle(o.title);
            for (var e = 0, n = r.length; n > e; e++)
                t.addForm(e, r[e].content, r[e].title);
            s && t.setActionBar(s), o.showIndex > -1 && t.showContent(o.showIndex), t.setLayout(o.layout || "horizontal"), t.resetSize(o), t.show(o.x, o.y, h, l)
        };
        "number" == typeof a ? n = setTimeout(function() {
                                              c(), clearTimeout(n), n = null
                                              }, a) : c(), e = !0
    }, o.close = function() {
        null !== t && (i = {x: t.windowPosition.x,y: t.windowPosition.y}, t.close(), e = !1)
    }, o.setPosition = function(e, n) {
        null !== t && t.setPosition(e, n)
    }, o.getPosition = function() {
        return null === t ? null : {x: t.windowPosition.x,y: t.windowPosition.y}
    }, o.update = function(e) {
        if (null === t)
            return null;
        for (var n = e.length; n--; )
            for (var i = e[n].content.length; i--; ) {
                var o = e[n].content[i];
                if (o)
                    switch (o.type) {
                        case "number":
                        case "text":
                        case "checkbox":
                        case "slider":
                            var r = t.domElement.querySelectorAll("li#" + o.id + ".param-item");
                            if (!r || 1 != r.length)
                                continue;
                            r = r[0];
                            for (var s = r.querySelectorAll("input"), a = "object" == typeof o.value ? o.value.value : o.value, l = s.length; l--; )
                                s[l].value = a
                                }
            }
    }, o
}();
