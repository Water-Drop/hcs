var MobileComponent = function() {
    function t() {
        var t = window.innerWidth;
        640 > t ? WallComponent2D.WALL_OFFSET = 75 : t >= 640 && 800 > t ? WallComponent2D.WALL_OFFSET = 50 : t >= 800 && 1280 > t && (WallComponent2D.WALL_OFFSET = 35)
    }
    var e = function(t, e) {
        if (BaseComponent2D.call(this, t, "MobileComponent"), this.dirty = !GlobalHelper.isMobileDevice(), this._isMenuVisible = !0, this._menuModified = !1, this._subMenuContainer = document.getElementById("subMenuContainer"), this._toggleIcon = null, this._mainUI = document.getElementById("main-ui"), this._drawableSurfaces = document.getElementsByClassName("drawableSurface"), "boolean" == typeof e && e === !0 && (this.dirty = !1), !this.dirty) {
            var n = GlobalHelper.getCapabilities();
            HTMLHelper.addStylesheet("css/mobile.css"), wanaplan.configuration.loadConfiguration(), wanaplan.configuration.hasMobileConfig || (n.extensions.elementIndexUint ? (wanaplan.configuration.useMultiTexturing = !0, wanaplan.configuration.useMultiLights = !0) : (wanaplan.configuration.useMultiTexturing = !1, wanaplan.configuration.useMultiLights = !1), wanaplan.configuration.useShadow = !1, wanaplan.configuration.hasMobileConfig = !0, wanaplan.configuration.saveConfiguration()), this._toggleMenu = this._toggleMenu.bind(this), this.onCoreInitialized = this.onCoreInitialized.bind(this), this.onContextChanged = this.onContextChanged.bind(this), document.addEventListener("wnp.core.initialized", this.onCoreInitialized, !1), document.addEventListener("wnp.mobile.toggleMenu", this._toggleMenu, !1)
        }
    };
    return e.prototype = Object.create(BaseComponent2D.prototype), e.prototype.initialize = function() {
        var e = wanaplan.engine2D.searchComponent("PointComponent2D");
        e && (e._SIZE = 45);
        var n = wanaplan.engine3D.searchComponent("CameraComponent");
        n && (GlobalHelper.isAppleDevice() && (n.camera[0].minZ = 250, n.camera[0].maxZ = 45e3), window.PointerEvent || (n.camera[0].detachControl(wanaplan.engine3D.canvas), n.camera[0].attachControlForMobile(wanaplan.engine3D.canvas))), window.addEventListener("resize", t, !1), t(), this._editionController = document.getElementById("edition-controller")
    }, e.prototype.onCoreInitialized = function() {
        document.removeEventListener("wnp.core.initialized", this.onCoreInitialized), GlobalHelper.hasWebGL() && (wanaplan.configuration.useMultiLights || (wanaplan.engine3D.scene.lights[1].dispose(), wanaplan.engine3D.scene.lights[0].intensity = .8, wanaplan.engine3D.scene.lights[0].setDirectionToTarget(new BABYLON.Vector3(0, -1, 0))), wanaplan.configuration.useMultiTexturing || (BABYLON.StandardMaterial.reflectionTextureEnabled = !1, BABYLON.StandardMaterial.SpecularTextureEnabled = !1, BABYLON.StandardMaterial.BumpTextureEnabled = !1), wanaplan.configuration.useShadow || wanaplan.engine3D.shadowGenerator.dispose(), wanaplan.engine3D.scene.lights[0].intensity = .45, wanaplan.engine3D.scene.lights[1].intensity = .05), PerformanceComponent3D.prototype.update = function() {}, wanaplan.engine2D.removeComponentByName("PrintComponent2D"), wanaplan.engine3D.removeComponentByName("PrintComponent3D"), wanaplan.engine3D.removeComponentByName("RemoteControlComponent3D"), ujs.notify("wnp.menu.top.sub.replace", {
            item: {
                id: "item1",
                addClass: "hidden"
            },
            merge: !0
        }, !0);
        var t = {
            title: _("Toggle"),
            icon: "fa fa-chevron-circle-right",
            action: "wnp.mobile.toggleMenu",
            id: "toggle-mobile-button",
            items: [],
            index: "0"
        };
        ujs.notify("wnp.menu.top.sub.add", {
            item: t,
            menuPath: "."
        }), window.innerWidth < 800 && (this._toggleMenu(), wanaplan.engine2D.removeComponentByName("ScreenshotMenuComponent"), wanaplan.engine2D.removeComponentByName("FullscreenComponent"), wanaplan.engine3D.removeComponentByName("HistoryEditionComponent"))
    }, e.prototype.addPointerCallback = function() {
        document.addEventListener("wnp.input.pointerchanged", function(t) {
            wanaplan.engine3D.onMouseEvent(t, t.inputStatus)
        }, !1)
    }, e.prototype._toggleMenu = function() {
        this._toggleIcon = document.getElementById("toggle-mobile-button").getElementsByTagName("i")[0], wanaplan.setMenuWidth(this._isMenuVisible ? 0 : void 0), this._isMenuVisible ? (this._mainUI.style.display = "none", this._subMenuContainer.style.right = "0px", this._toggleIcon.setAttribute("class", "fa fa-chevron-circle-left"), this._editionController && (this._editionController.style.right = "40px"), this._drawableSurfaces[0].classList.remove("with-menu"), this._drawableSurfaces[1].classList.remove("with-menu"), wanaplan.setSize(window.innerWidth, window.innerHeight)) : (this._mainUI.style.display = "block", this._subMenuContainer.style.right = wanaplan.getMenuWidth() + "px", this._toggleIcon.setAttribute("class", "fa fa-chevron-circle-right"), this._editionController && (this._editionController.style.right = window.innerWidth - 320 + "px"), this._drawableSurfaces[0].classList.add("with-menu"), this._drawableSurfaces[1].classList.add("with-menu"), wanaplan.setSize(window.innerWidth - wanaplan.getMenuWidth(), window.innerHeight)), this._isMenuVisible = !this._isMenuVisible
    }, e
}();