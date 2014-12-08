var PerformanceComponent3D = function() {
    var t, e = 10,
        n = 1e4,
        i = 5e3,
        o = "wanadev.planner.performanceCheck",
        r = [],
        s = [],
        a = function(e) {
            BaseComponent3D.call(this, e, "PerformanceComponent3D"), this.waiter = document.getElementById("waiter"), this.waiter.innerHTML = _("正在计算中..."), this.waitSince = !1, this.stats = this.core.engine3D.stats, this.priority = 0, this.hasBeenAlreadyNotified = wnpLocalStorage.getItem(o), this.targetMaxLowFPSTime = n, this.hasFocus = !0, document.addEventListener("wnp.engine2D.contextMenuPerformance.close", this.onContextMenuPerformanceClose, !1), document.addEventListener("wnp.request.changePerformancesProperty", this.onContextMenuPropertyChanged, !1), document.addEventListener("wnp.request.changePerformances", this.onChangePerformance, !1), document.addEventListener("wnp.request.changeEngine", this.onChangeEngine, !1), t = this;
            var a = null,
                l = function(e) {
                    null !== a && (clearTimeout(a), a = null), "focus" === e.type ? a = setTimeout(function() {
                        clearTimeout(a), a = null, t.hasFocus = !0
                    }, i) : t.hasFocus = !1
                };
            r = [{
                content: [{
                    type: "html",
                    html: "<div class='warning'>" + _("Disable some of these functionnalities") + "<br />" + _("to get better performances in 3D mode.") + "</div>"
                }, {
                    type: "checkbox",
                    label: _("Antialiasing"),
                    value: t.configuration.useAntialiasing,
                    eventParams: {
                        cast: "bool",
                        property: "useAntialiasing",
                        eventName: "wnp.request.changePerformancesProperty"
                    }
                }, {
                    type: "checkbox",
                    label: _("Shadows"),
                    value: t.configuration.useShadow,
                    eventParams: {
                        cast: "bool",
                        property: "useShadow",
                        eventName: "wnp.request.changePerformancesProperty"
                    }
                }, {
                    type: "checkbox",
                    label: _("Enable detailled textures"),
                    value: t.configuration.useMultiTexturing,
                    eventParams: {
                        cast: "bool",
                        property: "useMultiTexturing",
                        eventName: "wnp.request.changePerformancesProperty"
                    }
                }]
            }], s = [{
                label: _("Apply and reload"),
                action: "wnp.engine2D.contextMenuPerformance.close"
            }], window.addEventListener("focus", l, !1), window.addEventListener("blur", l, !1)
        };
    return a.prototype = Object.create(BaseComponent3D.prototype), a.prototype.initialize = function() {
        var t = {
            title: _("Increase performances"),
            action: "wnp.request.changePerformances",
            index: 1
        };
        ujs.notify("wnp.menu.top.add", {
            item: t,
            menuPath: "toolbarOption"
        })
    }, a.prototype.addItem = function(t) {
        r[0].content.push(t)
    }, a.prototype.removeItem = function(t) {
        var e = "number" == typeof item ? t : r[0].content.indexOf(t);
        return e > -1 && r[0].content.splice(e, 1), e > -1
    }, a.prototype.onChangePerformance = function() {
        ujs.notify("wnp.menu.top.deselect");
        var t = {
            id: "performancesWindow",
            title: _("Settings"),
            x: wanaplan.getWidth() / 2 - 100,
            y: 100
        };
        wnp.UI.ContextMenu.show(t, r, s)
    }, a.prototype.onContextMenuPerformanceClose = function() {
        ujs.notify("wnp.engine2D.contextMenu.close"), ujs.notify("wnp.engine3D.refreshGL")
    }, a.prototype.onContextMenuPropertyChanged = function(e) {
        var n = e.property,
            i = e.value;
        t.core.configuration.hasOwnProperty(n) && (t.core.configuration[n] = i, t.core.configuration.saveConfiguration())
    }, a.prototype.onChangeEngine = function() {
        t.waiter.classList.remove("hidden"), t.core.getSelectedEngine() == t.core.ENGINE_2D && setTimeout(function() {
            t.waiter.classList.add("hidden")
        }, 1e3)
    }, a.prototype.onContextChanged = function(t) {
        "2D" === t && this.waiter.classList.add("hidden")
    }, a.prototype.update = function() {
        this.checkPerf()
    }, a.prototype.checkPerf = function() {
        if (this.hasFocus) {
            var t = BABYLON.Tools.GetFps();
            if (e > t) {
                var i = (new Date).getTime();
                if (this.waitSince === !1)
                    this.waitSince = i;
                else if (i - this.waitSince > n && !this.hasBeenAlreadyNotified) {
                    var r = wanaplan.engine2D.searchComponent("PedagoComponent");
                    this.hasBeenAlreadyNotified = !0, wnpLocalStorage.setItem(o, !0), wnp.UI.IFrame.show(document.body, {
                        width: 720,
                        height: 240,
                        src: r.getPageURL("graphics")
                    })
                }
                this.waiter.classList.remove("hidden")
            } else
                this.waitSince = !1, this.waiter.classList.add("hidden")
        }
    }, a
}();