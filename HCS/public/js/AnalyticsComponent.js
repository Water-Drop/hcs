var AnalyticsComponent = function() {
    var t, e = {
            "hcs.contextChanged": {
                action: "contextChanged",
                label: "fromContext",
                value: "{previousContext}"
            },
            "hcs.request.toggleFullscreen": {
                action: "toggleFullscreen"
            },
            "hcs.request.print": {
                action: "requestPrint"
            },
            "hcs.engine2d.onAddBackground": {
                action: "addBackgroundClick"
            },
            "hcs.component.lock": {
                action: "onLockObject"
            },
            "hcs.request.undo": {
                action: "history",
                label: "undo"
            },
            "hcs.request.redo": {
                action: "history",
                label: "redo"
            },
            "hcs.request.switch-transparency": {
                action: "switchTransparency"
            },
            "hcs.engine3D.addObject": {
                action: "addObject"
            },
            "hcs.engine3D.addProgrammable": {
                action: "addObject"
            },
            "hcs.engine3D.addGroup": {
                action: "addObject"
            },
            "hcs.request.object.remove": {
                action: "removeObject"
            },
            "hcs.engine3D.info": {
                action: "infoObject"
            },
            "hcs.contextMenu.propertyChanged": {
                action: "objectParamsModified",
                label: "{property}",
                value: "{value}"
            },
            "hcs.engine3D.decorate": {
                action: "decorate"
            }
        },
        n = function(e) {
            BaseComponent2D.call(this, e, "AnalyticsComponent"), t = this
        };
    return n.prototype = Object.create(BaseComponent2D.prototype), n.prototype.initialize = function() {
        ga("send", "pageview", {
            dimension1: hcsdesign.api.apiKey,
            dimension2: hcsdesign.mode
        });
        for (var i in e)
            ! function(e, i) {
                var o = e.split(".").join("_");
                n.prototype[o] = function(e) {
                    var n = hcsdesign.getSelectedEngine() == hcsdesign.ENGINE_2D ? "2D" : "3D",
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