BABYLON.Engine.ShadersRepository = "js/Vendors/Babylon/Shaders/"
    //,  window.location.href.split("#").length < 2 && (window.location.href = "http://www.wanaplan.com")
;
var wanaplan = null,
    wnpLocalStorage;
try {
    wnpLocalStorage = localStorage
} catch (e) {
    wnpLocalStorage = {
        fallback: !0,
        item: {},
        setItem: function(t, e) {
            this.item[t] = e
        },
        getItem: function(t) {
            return this.item[t] || null
        },
        removeItem: function(t) {
            delete this.item[t]
        }
    }
}! function() {
    function t(t, e) {
        var e = e || 1;
        switch ("fr" == t.toLowerCase() && (l.Constants.LANG = "fr"), t.toLowerCase()) {
            case "es":
                c.setLocale("es_ES", e);
                break;
            case "de":
                c.setLocale("de_DE", e);
                break;
            case "fr":
                c.setLocale("fr_FR", e);
                break;
            case "it":
                c.setLocale("it_IT", e);
                break;
            case "pt":
                c.setLocale("pt_PT", e);
                break;
            case "pl":
                c.setLocale("pl_PL", e);
                break;
            case "jp":
                c.setLocale("jp_JP", e);
                break;
            default:
                c.setLocale("C", e)
        }
    }

    function e() {
        var loc = "http://v2.wanaplan.fr/#b3JpZ2luPWh0dHA6Ly93d3cud2FuYXBsYW4uY29tJmFwaUtleT1jZjk4NjZiNjQwZjZjNmMyNzEyMmM5Y2NjYThkOWRkNyZzYXZlVXJsPWh0dHA6Ly93d3cud2FuYXBsYW4uY29tL2FwaS9wbGFuL3NhdmUvJm5ld1VybD1odHRwOi8vd3d3LndhbmFwbGFuLmNvbS9hcGkvcGxhbi9uZXcvJmF1dG9SZXNpemU9dHJ1ZSZwYXJhbXM9W29iamVjdCBPYmplY3RdJndpZHRoPTEyNzcmaGVpZ2h0PTM4MSZpZD0xJnBhcmFtcz17fQ==";
        var e = wnpLocalStorage.getItem("wnp.core.force2D"),
            n = "",
            //        s = document.location.href.split("#");
            s = loc.split("#");
        // s[0] = "http://v2.wanaplan.fr/"
        // s[1] = apiKey
        // n = "origin=http://www.wanaplan.com&apiKey=cf9866b640f6c6c27122c9ccca8d9dd7&saveUrl=htt…ewUrl=http://www.wanaplan.com/api/plan/new/&autoResize=true&params=[object Object]&width=1277&height=146&id=1&params={}"
        s[1] && (n = a(s[1]));
        var p = function(t) {
                for (var e = {}, n = t.split("&"), i = 0; i < n.length; i++) {
                    var o = n[i].split("=");
                    e[o[0]] = o[1]
                }
                return e
            },
            d = p(n); // 将n装换成map（参数为key，值为value，例如{width=1277, height=146...}）
        if (!GlobalHelper.hasWebGL() && e && (d.allow3D = !1),
            d.apiKey /*|| (document.location.href = "http://www.wanaplan.com")*/ , u = d.lang ? d.lang : u, t(u),
            wanaplan = new l.Core(h, c, d), wanaplan.engine2D.addComponent(GridComponent2D), wanaplan.engine2D.addComponent(PointComponent2D), wanaplan.engine2D.addComponent(WallComponent2D), wanaplan.engine2D.addComponent(RoomComponent2D), /* wanaplan.engine2D.addComponent(StairwayComponent2D), wanaplan.engine2D.addComponent(HopperComponent2D),*/ wanaplan.engine2D.addComponent(SubSlopeComponent2D), wanaplan.engine2D.addComponent(SubSlopeOvertureComponent2D), wanaplan.engine2D.addComponent(OvertureComponent2D), wanaplan.engine2D.addComponent(MobileComponent), wanaplan.engine2D.addComponent(MobileInputComponent), /*wanaplan.engine2D.addComponent(AnalyticsComponent), wanaplan.engine2D.addComponent(FloorController),*/ wanaplan.engine2D.addComponent(MeasureComponent), wanaplan.engine3D.addComponent(CameraComponent), wanaplan.engine3D.addComponent(GridComponent3D), wanaplan.engine3D.addComponent(AvatarComponent3D), wanaplan.engine3D.addComponent(RoomComponent3D), wanaplan.engine3D.addComponent(OvertureComponent3D), wanaplan.engine3D.addComponent(SubSlopeComponent3D), wanaplan.engine3D.addComponent(WallComponent3D), wanaplan.engine3D.addComponent(StairwayComponent3D), wanaplan.engine3D.addComponent(HopperComponent3D), wanaplan.engine3D.addComponent(ObjectComponent3D), wanaplan.engine3D.addComponent(FloorComponent3D), wanaplan.engine3D.addComponent(RemoteControlComponent3D), wanaplan.engine3D.addComponent(TransparencyComponent), r(), o(d), i(d), wanaplan.setSelectedEngine(wanaplan.ENGINE_2D), wanaplan.mode == wanaplan.MODE_VIEWER) {
            var m = +d.startOn2D ? wanaplan.ENGINE_2D : wanaplan.ENGINE_3D;
            wanaplan.initialize(function() {
                wanaplan.engine2D.requestStaticDraw(), wanaplan.engine2D.update(!0), wanaplan.setSelectedEngine(m), wanaplan.hideSplashScreen()
            })
        } else
            wanaplan.initialize(); // wanaplan = new l.Core(h, c, d) == new wnp.Core(h, c, d) 因此wanaplan 是wnp.Core的函数对象
    }

    function n(t) {
        if (t.mode == wanaplan.mode || 0 == t.mode) {
            var e = t.configuration || {};
            if (1 != t.type)
                return;
            var i = wanaplan["engine" + (t.engine || "2D")];
            if (!i)
                return void Logger.message(t.name + " not loaded");
            var o = window[t.name];
            if (o) {
                var r = i.addComponent(o);
                if (r.configuration = e, r && e["extends"])
                    for (var s = 0; s < e["extends"].length; s++) {
                        var a = i.searchComponent(e["extends"][s]);
                        a && a.disable()
                    }
            } else {
                var l = t.url || !1;
                if (l) {
                    var h = function() {
                        n(t)
                    };
                    HTMLHelper.addScript(l, void 0, h)
                } else
                    Logger.message(t.name + " not loaded")
            }
        }
    }

    function i(t) {
        var e = t.params.env || "";
        ujs.ajax({
            method: "get",
            url: l.Constants.WNP_URL + "/data/api/" + t.apiKey + e + ".json",
            success: function(t) {
                var e = JSON.parse(t);
                if ("ok" == e.status)
                    for (var i = e.components, o = 0; o < i.length; o++)
                        n(i[o])
            }
        })
    }

    function o(t) {
        if (t.components)
            for (var e = 0; e < t.components.length; e++)
                n(t.components[e])
    }

    function r() {
        wanaplan.mode == wanaplan.MODE_EDITOR ? (wanaplan.engine2D.addComponent(MainMenuComponent), wanaplan.engine2D.addComponent(TopMenuComponent), wanaplan.engine2D.addComponent(SaveComponent), wanaplan.engine2D.addComponent(NewComponent), wanaplan.engine2D.addComponent(OptionsComponent), wanaplan.engine2D.addComponent(ExitComponent), wanaplan.engine2D.addComponent(ScreenshotMenuComponent), wanaplan.engine2D.addComponent(FullscreenComponent), wanaplan.engine3D.addComponent(HistoryComponent), wanaplan.engine3D.addComponent(HistoryEditionComponent), wanaplan.engine2D.addComponent(GeneralOptionComponent2D), /*wanaplan.engine2D.addComponent(GridBackgroundComponent2D), */wanaplan.engine2D.addComponent(MagnetismComponent2D), wanaplan.engine2D.addComponent(PrintComponent2D), wanaplan.engine2D.addComponent(DebugComponent2D), wanaplan.engine2D.addComponent(EditMeasureComponent), wanaplan.engine3D.addComponent(PrintComponent3D), wanaplan.engine3D.addComponent(EditionComponent3D), wanaplan.engine3D.addComponent(GroupConfiguratorModComponent3D), wanaplan.engine3D.addComponent(ConfiguratorModComponent3D), wanaplan.engine3D.addComponent(GroupConfiguratorPanelComponent3D), wanaplan.engine3D.addComponent(ConfiguratorPanelComponent3D), wanaplan.engine3D.addComponent(ConfiguratorInOutAnimationComponent3D), wanaplan.engine3D.addComponent(ConfiguratorXrayComponent3D), wanaplan.engine3D.addComponent(MesureDisplayerForDimensionReshaperFactoryComponent3D), wanaplan.engine3D.addComponent(HandlesDisplayerForDimensionReshaperFactoryComponent3D), wanaplan.engine3D.addComponent(BoundingLimitDisplayerForDimensionReshaperFactoryComponent3D), wanaplan.engine3D.addComponent(MasterReshaperComponent3D), wanaplan.engine3D.addComponent(DimensionReshaperComponent3D), wanaplan.engine3D.addComponent(MagnetismComponent3D), wanaplan.engine3D.addComponent(DecorationComponent3D), wanaplan.engine3D.addComponent(LuxensComponent3D), wanaplan.engine3D.addComponent(OutsideComponent3D), wanaplan.engine3D.addComponent(DebugComponent3D), wanaplan.engine3D.addComponent(LockComponent), wanaplan.engine3D.addComponent(PerformanceComponent3D), wanaplan.engine3D.addComponent(HardwareScalingComponent3D), wanaplan.engine3D.addComponent(HideAvatarComponent)) : wanaplan.mode == wanaplan.MODE_VIEWER
    }

    function s() {
        requestAnimationFrame(s), wanaplan.update(), wanaplan.draw()
    }
    var a = window.atob || function(t) {
        return t
    };
    window.WNP_DEBUG = !1, Logger.setDebugMode(window.WNP_DEBUG);
    var l = window.wnp || {},
        h = l.Constants.VERSION;
    window.WNP_DEBUG && (h += Math.round(100 * Math.random()));
    var c = new I18njs("./l10n/"),
        u = navigator.language || navigator.browserLanguage || "fr_FR",
        p = wnpLocalStorage.getItem(l.Constants.LC_LANG_KEY);
    if (null !== p)
        u = p;
    else {
        var d = u.split("-");
        u = d instanceof Array ? d[0] : d
    }
    t(u, h), window.onload = function() {
        var t = new PedagoComponent;
        if (t.checkBrowserCapability()) { // 检查浏览器兼容性
            if (!GlobalHelper.isMobileDevice() && "Windows" == BrowserDetect.OS)
            // 设置延迟加载函数
                var n = setTimeout(function() {
                // 由 setTimeout() 返回的 ID 值-n。该值标识要取消的延迟执行代码块。
                // 当wanaplan.isFullyInitialized为true时，跳转至http://v2.wanaplan.fr/b3JpZ2luPWh0dHA6Ly93d3cud2FuYXBsYW4uY29tJmFwaUtleT1jZjk4NjZiNjQwZjZjNmMyNzEyMmM5Y2NjYThkOWRkNyZzYXZlVXJsPWh0dHA6Ly93d3cud2FuYXBsYW4uY29tL2FwaS9wbGFuL3NhdmUvJm5ld1VybD1odHRwOi8vd3d3LndhbmFwbGFuLmNvbS9hcGkvcGxhbi9uZXcvJmF1dG9SZXNpemU9dHJ1ZSZwYXJhbXM9W29iamVjdCBPYmplY3RdJndpZHRoPTEyNzcmaGVpZ2h0PTM4MSZpZD0xJnBhcmFtcz17fQ==/js/Components/PedagoComponent/pedago/pages/grapics.php
                clearTimeout(n), wanaplan.isFullyInitialized || t.redirectToPage("graphics")
            }, 15e3);
            e(), wanaplan.engine2D.addInstancedComponent(t), s()
        }
    }
}();
/*,function(t, e, n, i, o, r, s) {
    t.GoogleAnalyticsObject = o, t[o] = t[o] || function() {
        (t[o].q = t[o].q || []).push(arguments)
    }, t[o].l = 1 * new Date, r = e.createElement(n), s = e.getElementsByTagName(n)[0], r.async = 1, r.src = i, s.parentNode.insertBefore(r, s)
}(window, document, "script", "http://www.google-analytics.com/analytics.js", "ga"), ga("create", "UA-43771230-1", "wanaplan.fr");*/