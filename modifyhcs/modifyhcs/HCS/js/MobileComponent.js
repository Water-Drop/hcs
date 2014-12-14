var MobileComponent = function() {
    function t() {
        var t = window.innerWidth;
        640 > t ? WallComponent2D.WALL_OFFSET = 75 : t >= 640 && 800 > t ? WallComponent2D.WALL_OFFSET = 50 : t >= 800 && 1280 > t && (WallComponent2D.WALL_OFFSET = 35)
    }
    var e = function(t, e) {
        if (BaseComponent2D.call(this, t, "MobileComponent"), this.dirty = !GlobalHelper.isMobileDevice(), this._isMenuVisible = !0, this._menuModified = !1, this._subMenuContainer = document.getElementById("subMenuContainer"), this._toggleIcon = null, this._mainUI = document.getElementById("main-ui"), this._drawableSurfaces = document.getElementsByClassName("drawableSurface"), "boolean" == typeof e && e === !0 && (this.dirty = !1), !this.dirty) {
            var n = GlobalHelper.getCapabilities();
            HTMLHelper.addStylesheet("css/mobile.css"), hcsdesign.configuration.loadConfiguration(), hcsdesign.configuration.hasMobileConfig || (n.extensions.elementIndexUint ? (hcsdesign.configuration.useMultiTexturing = !0, hcsdesign.configuration.useMultiLights = !0) : (hcsdesign.configuration.useMultiTexturing = !1, hcsdesign.configuration.useMultiLights = !1), hcsdesign.configuration.useShadow = !1, hcsdesign.configuration.hasMobileConfig = !0, hcsdesign.configuration.saveConfiguration()), this._toggleMenu = this._toggleMenu.bind(this), this.onCoreInitialized = this.onCoreInitialized.bind(this), this.onContextChanged = this.onContextChanged.bind(this), document.addEventListener("hcs.core.initialized", this.onCoreInitialized, !1), document.addEventListener("hcs.mobile.toggleMenu", this._toggleMenu, !1)
        }
    };
    return e.prototype = Object.create(BaseComponent2D.prototype), e.prototype.initialize = function() {
        var e = hcsdesign.engine2D.searchComponent("PointComponent2D");
        e && (e._SIZE = 45);
        var n = hcsdesign.engine3D.searchComponent("CameraComponent");
        n && (GlobalHelper.isAppleDevice() && (n.camera[0].minZ = 250, n.camera[0].maxZ = 45e3), window.PointerEvent || (n.camera[0].detachControl(hcsdesign.engine3D.canvas), n.camera[0].attachControlForMobile(hcsdesign.engine3D.canvas))), window.addEventListener("resize", t, !1), t(), this._editionController = document.getElementById("edition-controller")
    }, e.prototype.onCoreInitialized = function() {
        document.removeEventListener("hcs.core.initialized", this.onCoreInitialized), GlobalHelper.hasWebGL() && (hcsdesign.configuration.useMultiLights || (hcsdesign.engine3D.scene.lights[1].dispose(), hcsdesign.engine3D.scene.lights[0].intensity = .8, hcsdesign.engine3D.scene.lights[0].setDirectionToTarget(new BABYLON.Vector3(0, -1, 0))), hcsdesign.configuration.useMultiTexturing || (BABYLON.StandardMaterial.reflectionTextureEnabled = !1, BABYLON.StandardMaterial.SpecularTextureEnabled = !1, BABYLON.StandardMaterial.BumpTextureEnabled = !1), hcsdesign.configuration.useShadow || hcsdesign.engine3D.shadowGenerator.dispose(), hcsdesign.engine3D.scene.lights[0].intensity = .45, hcsdesign.engine3D.scene.lights[1].intensity = .05), PerformanceComponent3D.prototype.update = function() {}, hcsdesign.engine2D.removeComponentByName("PrintComponent2D"), hcsdesign.engine3D.removeComponentByName("PrintComponent3D"), hcsdesign.engine3D.removeComponentByName("RemoteControlComponent3D"), ujs.notify("hcs.menu.top.sub.replace", {
            item: {
                id: "item1",
                addClass: "hidden"
            },
            merge: !0
        }, !0);
        var t = {
            title: _("Toggle"),
            icon: "fa fa-chevron-circle-right",
            action: "hcs.mobile.toggleMenu",
            id: "toggle-mobile-button",
            items: [],
            index: "0"
        };
        ujs.notify("hcs.menu.top.sub.add", {
            item: t,
            menuPath: "."
        }), window.innerWidth < 800 && (this._toggleMenu(), hcsdesign.engine2D.removeComponentByName("ScreenshotMenuComponent"), hcsdesign.engine2D.removeComponentByName("FullscreenComponent"), hcsdesign.engine3D.removeComponentByName("HistoryEditionComponent"))
    }, e.prototype.addPointerCallback = function() {
        document.addEventListener("hcs.input.pointerchanged", function(t) {
            hcsdesign.engine3D.onMouseEvent(t, t.inputStatus)
        }, !1)
    }, e.prototype._toggleMenu = function() {
        this._toggleIcon = document.getElementById("toggle-mobile-button").getElementsByTagName("i")[0], hcsdesign.setMenuWidth(this._isMenuVisible ? 0 : void 0), this._isMenuVisible ? (this._mainUI.style.display = "none", this._subMenuContainer.style.right = "0px", this._toggleIcon.setAttribute("class", "fa fa-chevron-circle-left"), this._editionController && (this._editionController.style.right = "40px"), this._drawableSurfaces[0].classList.remove("with-menu"), this._drawableSurfaces[1].classList.remove("with-menu"), hcsdesign.setSize(window.innerWidth, window.innerHeight)) : (this._mainUI.style.display = "block", this._subMenuContainer.style.right = hcsdesign.getMenuWidth() + "px", this._toggleIcon.setAttribute("class", "fa fa-chevron-circle-right"), this._editionController && (this._editionController.style.right = window.innerWidth - 320 + "px"), this._drawableSurfaces[0].classList.add("with-menu"), this._drawableSurfaces[1].classList.add("with-menu"), hcsdesign.setSize(window.innerWidth - hcsdesign.getMenuWidth(), window.innerHeight)), this._isMenuVisible = !this._isMenuVisible
    }, e
}();