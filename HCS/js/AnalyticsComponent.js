var AnalyticsComponent = function() {
    var t, e = {
            "wnp.contextChanged": {
                action: "contextChanged",
                label: "fromContext",
                value: "{previousContext}"
            },
            "wnp.request.toggleFullscreen": {
                action: "toggleFullscreen"
            },
            "wnp.request.print": {
                action: "requestPrint"
            },
            "wnp.engine2d.onAddBackground": {
                action: "addBackgroundClick"
            },
            "wnp.component.lock": {
                action: "onLockObject"
            },
            "wnp.request.undo": {
                action: "history",
                label: "undo"
            },
            "wnp.request.redo": {
                action: "history",
                label: "redo"
            },
            "wnp.request.switch-transparency": {
                action: "switchTransparency"
            },
            "wnp.engine3D.addObject": {
                action: "addObject"
            },
            "wnp.engine3D.addProgrammable": {
                action: "addObject"
            },
            "wnp.engine3D.addGroup": {
                action: "addObject"
            },
            "wnp.request.object.remove": {
                action: "removeObject"
            },
            "wnp.engine3D.info": {
                action: "infoObject"
            },
            "wnp.contextMenu.propertyChanged": {
                action: "objectParamsModified",
                label: "{property}",
                value: "{value}"
            },
            "wnp.engine3D.decorate": {
                action: "decorate"
            }
        },
        n = function(e) {
            BaseComponent2D.call(this, e, "AnalyticsComponent"), t = this
        };
    return n.prototype = Object.create(BaseComponent2D.prototype), n.prototype.initialize = function() {
        ga("send", "pageview", {
            dimension1: wanaplan.api.apiKey,
            dimension2: wanaplan.mode
        });
        for (var i in e)
            ! function(e, i) {
                var o = e.split(".").join("_");
                n.prototype[o] = function(e) {
                    var n = wanaplan.getSelectedEngine() == wanaplan.ENGINE_2D ? "2D" : "3D",
                        o = t.cleanValue(i.action, e),
                        r = t.cleanValue(i.label, e),
                        s = t.cleanValue(i.value, e);
                    ga("send", "event", {
                        eventCategory: n,
                        eventAction: o,
                        eventLabel: r,
                        eventValue: s,
                        hitCallback: function() {},
                        hitCallbackFail: function() {}
                    })
                }, document.addEventListener(e, n.prototype[o])
            }(i, e[i])
    }, n.prototype.cleanValue = function(t, e) {
        if (!t)
            return null;
        var e = e || {};
        if (-1 == t.toString().indexOf("{"))
            return t;
        var n = t.replace("{", "").replace("}", ""),
            t = ujs.getProperty(e, n);
        return t ? t : null
    }, n
}();