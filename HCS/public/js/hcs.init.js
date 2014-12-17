
var socket = io.connect();
var hcsdesign = null;

var hcsLocalStorage = {
    fallback: true,
    items : {},
    setItem: function(key, val) {
        socket.emit('set', { key: key, val: val });
        this.items[key] = val;
    },
    getItem: function(key) {
        return this.items[key] || null;
    },
    removeItem: function(key) {
        socket.emit('del', { key: key });
        delete this.items[key];
    }
}

socket.on('reconnect', function () {
    socket.emit('init', { uuid: 'bae9e1d5-47ca-4fc2-af27-0e27da13de65' }, function (data) { 
        wnpLocalStorage.items = data;
    });
});
socket.emit('init', { uuid: 'bae9e1d5-47ca-4fc2-af27-0e27da13de65' }, function (data) {
    
    hcsLocalStorage.items = data;

    BABYLON.Engine.ShadersRepository = "js/Vendors/Babylon/Shaders/";
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
        var loc = "http://v2.hcsdesign.fr/#b3JpZ2luPWh0dHA6Ly93d3cud2FuYXBsYW4uY29tJmFwaUtleT1jZjk4NjZiNjQwZjZjNmMyNzEyMmM5Y2NjYThkOWRkNyZzYXZlVXJsPWh0dHA6Ly93d3cud2FuYXBsYW4uY29tL2FwaS9wbGFuL3NhdmUvJm5ld1VybD1odHRwOi8vd3d3LndhbmFwbGFuLmNvbS9hcGkvcGxhbi9uZXcvJmF1dG9SZXNpemU9dHJ1ZSZwYXJhbXM9W29iamVjdCBPYmplY3RdJndpZHRoPTEyNzcmaGVpZ2h0PTM4MSZpZD0xJnBhcmFtcz17fQ==";
        var e = hcsLocalStorage.getItem("hcs.core.force2D"),
            n = "",
            //        s = document.location.href.split("#");
            s = loc.split("#");
        // s[0] = "http://v2.hcsdesign.fr/"
        // s[1] = apiKey
        // n = "origin=http://www.hcsdesign.com&apiKey=cf9866b640f6c6c27122c9ccca8d9dd7&saveUrl=htt…ewUrl=http://www.hcsdesign.com/api/plan/new/&autoResize=true&params=[object Object]&width=1277&height=146&id=1&params={}"
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
            d.apiKey /*|| (document.location.href = "http://www.hcsdesign.com")*/ , u = d.lang ? d.lang : u, t(u),
            hcsdesign = new l.Core(h, c, d), hcsdesign.engine2D.addComponent(GridComponent2D), hcsdesign.engine2D.addComponent(PointComponent2D), hcsdesign.engine2D.addComponent(WallComponent2D), hcsdesign.engine2D.addComponent(RoomComponent2D), /* hcsdesign.engine2D.addComponent(StairwayComponent2D), hcsdesign.engine2D.addComponent(HopperComponent2D),*/ hcsdesign.engine2D.addComponent(SubSlopeComponent2D), hcsdesign.engine2D.addComponent(SubSlopeOvertureComponent2D), hcsdesign.engine2D.addComponent(OvertureComponent2D), hcsdesign.engine2D.addComponent(MobileComponent), hcsdesign.engine2D.addComponent(MobileInputComponent), /*hcsdesign.engine2D.addComponent(AnalyticsComponent), hcsdesign.engine2D.addComponent(FloorController),*/ hcsdesign.engine2D.addComponent(MeasureComponent), hcsdesign.engine3D.addComponent(CameraComponent), hcsdesign.engine3D.addComponent(GridComponent3D), hcsdesign.engine3D.addComponent(AvatarComponent3D), hcsdesign.engine3D.addComponent(RoomComponent3D), hcsdesign.engine3D.addComponent(OvertureComponent3D), hcsdesign.engine3D.addComponent(SubSlopeComponent3D), hcsdesign.engine3D.addComponent(WallComponent3D), hcsdesign.engine3D.addComponent(StairwayComponent3D), hcsdesign.engine3D.addComponent(HopperComponent3D), hcsdesign.engine3D.addComponent(ObjectComponent3D), hcsdesign.engine3D.addComponent(FloorComponent3D), hcsdesign.engine3D.addComponent(RemoteControlComponent3D), hcsdesign.engine3D.addComponent(TransparencyComponent), r(), o(d), i(d), hcsdesign.setSelectedEngine(hcsdesign.ENGINE_2D), hcsdesign.mode == hcsdesign.MODE_VIEWER) {
            var m = +d.startOn2D ? hcsdesign.ENGINE_2D : hcsdesign.ENGINE_3D;
            hcsdesign.initialize(function() {
                hcsdesign.engine2D.requestStaticDraw(), hcsdesign.engine2D.update(!0), hcsdesign.setSelectedEngine(m), hcsdesign.hideSplashScreen()
            })
        } else
            hcsdesign.initialize(); // hcsdesign = new l.Core(h, c, d) == new hcs.Core(h, c, d) 因此hcsdesign 是hcs.Core的函数对象
    }

    function n(t) {
        if (t.mode == hcsdesign.mode || 0 == t.mode) {
            var e = t.configuration || {};
            if (1 != t.type)
                return;
            var i = hcsdesign["engine" + (t.engine || "2D")];
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
        hcsdesign.mode == hcsdesign.MODE_EDITOR ? (hcsdesign.engine2D.addComponent(MainMenuComponent), hcsdesign.engine2D.addComponent(TopMenuComponent), hcsdesign.engine2D.addComponent(SaveComponent), hcsdesign.engine2D.addComponent(NewComponent), hcsdesign.engine2D.addComponent(OptionsComponent), hcsdesign.engine2D.addComponent(ExitComponent), hcsdesign.engine2D.addComponent(ScreenshotMenuComponent), hcsdesign.engine2D.addComponent(FullscreenComponent), hcsdesign.engine3D.addComponent(HistoryComponent), hcsdesign.engine3D.addComponent(HistoryEditionComponent), hcsdesign.engine2D.addComponent(GeneralOptionComponent2D), /*hcsdesign.engine2D.addComponent(GridBackgroundComponent2D), */hcsdesign.engine2D.addComponent(MagnetismComponent2D), hcsdesign.engine2D.addComponent(PrintComponent2D), hcsdesign.engine2D.addComponent(DebugComponent2D), hcsdesign.engine2D.addComponent(EditMeasureComponent), hcsdesign.engine3D.addComponent(PrintComponent3D), hcsdesign.engine3D.addComponent(EditionComponent3D), hcsdesign.engine3D.addComponent(GroupConfiguratorModComponent3D), hcsdesign.engine3D.addComponent(ConfiguratorModComponent3D), hcsdesign.engine3D.addComponent(GroupConfiguratorPanelComponent3D), hcsdesign.engine3D.addComponent(ConfiguratorPanelComponent3D), hcsdesign.engine3D.addComponent(ConfiguratorInOutAnimationComponent3D), hcsdesign.engine3D.addComponent(ConfiguratorXrayComponent3D), hcsdesign.engine3D.addComponent(MesureDisplayerForDimensionReshaperFactoryComponent3D), hcsdesign.engine3D.addComponent(HandlesDisplayerForDimensionReshaperFactoryComponent3D), hcsdesign.engine3D.addComponent(BoundingLimitDisplayerForDimensionReshaperFactoryComponent3D), hcsdesign.engine3D.addComponent(MasterReshaperComponent3D), hcsdesign.engine3D.addComponent(DimensionReshaperComponent3D), hcsdesign.engine3D.addComponent(MagnetismComponent3D), hcsdesign.engine3D.addComponent(DecorationComponent3D), hcsdesign.engine3D.addComponent(LuxensComponent3D), hcsdesign.engine3D.addComponent(OutsideComponent3D), hcsdesign.engine3D.addComponent(DebugComponent3D), hcsdesign.engine3D.addComponent(LockComponent), hcsdesign.engine3D.addComponent(PerformanceComponent3D), hcsdesign.engine3D.addComponent(HardwareScalingComponent3D), hcsdesign.engine3D.addComponent(HideAvatarComponent)) : hcsdesign.mode == hcsdesign.MODE_VIEWER
    }

    function s() {
        requestAnimationFrame(s), hcsdesign.update(), hcsdesign.draw()
    }
    var a = window.atob || function(t) {
        return t
    };
    window.hcs_DEBUG = !1, Logger.setDebugMode(window.hcs_DEBUG);
    var l = window.hcs || {},
        h = l.Constants.VERSION;
    window.hcs_DEBUG && (h += Math.round(100 * Math.random()));
    var c = new I18njs("./l10n/"),
        u = navigator.language || navigator.browserLanguage || "fr_FR",
        p = hcsLocalStorage.getItem(l.Constants.LC_LANG_KEY);
    if (null !== p)
        u = p;
    else {
        var d = u.split("-");
        u = d instanceof Array ? d[0] : d
    }
    t(u, h);
        var com = new PedagoComponent;
        if (com.checkBrowserCapability()) { // 检查浏览器兼容性
            if (!GlobalHelper.isMobileDevice() && "Windows" == BrowserDetect.OS)
            // 设置延迟加载函数
                var n = setTimeout(function() {
                // 由 setTimeout() 返回的 ID 值-n。该值标识要取消的延迟执行代码块。
                // 当hcsdesign.isFullyInitialized为true时，跳转至http://v2.hcsdesign.fr/b3JpZ2luPWh0dHA6Ly93d3cud2FuYXBsYW4uY29tJmFwaUtleT1jZjk4NjZiNjQwZjZjNmMyNzEyMmM5Y2NjYThkOWRkNyZzYXZlVXJsPWh0dHA6Ly93d3cud2FuYXBsYW4uY29tL2FwaS9wbGFuL3NhdmUvJm5ld1VybD1odHRwOi8vd3d3LndhbmFwbGFuLmNvbS9hcGkvcGxhbi9uZXcvJmF1dG9SZXNpemU9dHJ1ZSZwYXJhbXM9W29iamVjdCBPYmplY3RdJndpZHRoPTEyNzcmaGVpZ2h0PTM4MSZpZD0xJnBhcmFtcz17fQ==/js/Components/PedagoComponent/pedago/pages/grapics.php
                clearTimeout(n), hcsdesign.isFullyInitialized || com.redirectToPage("graphics")
            }, 15e3);
            e(), hcsdesign.engine2D.addInstancedComponent(com), s()
        }
    
});