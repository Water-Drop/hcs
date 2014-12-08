var wnp = window.wnp || {};
wnp.Engine3D = function() {
    var t, e = function(e, n, i) {
        this._initialized = !1, this._components = new wnp.ComponentCollection(wanaplan), this.hardwareScaling = 1, this.contextLostCount = 0, this.MAX_CONTEXT_LOST = 5, this.MODE_NORMAL = 1, this.MODE_DRAG = 2, this.MODE_PAINT = 4, this.MODE_CONTEXTMENU = 8, this.mode = this.MODE_NORMAL, this.container = e, this.canvas = document.createElement("canvas"), e.appendChild(this.canvas), this.canvas.width = wanaplan.getWidth(), this.canvas.height = wanaplan.getHeight();
        var o = wanaplan.configuration && wanaplan.configuration.useAntialiasing === !1 ? !1 : !0;
        this.engine = new BABYLON.Engine(this.canvas, o), this.scene = new BABYLON.Scene(this.engine), this.scene.ambientColor = new BABYLON.Color3(1, 1, 1), this.scene.clearColor.copyFromFloats(.96, .96, .96), this.shadowGenerator = null, this.worldPlane = new BABYLON.Plane(0, 1, 0, 0), this.enabled = !1, this.viewInitialized = !1, this.isViewer = "undefined" != typeof i ? i : !1, this.canvas.addEventListener("webglcontextlost", this.onContextLost.bind(this), !1), this.canvas.addEventListener("webglcontextrestored", this.onContextRestored.bind(this), !1), this.canDraw = !0, t = this, n || (this.structure = wanaplan.structure, this.materialFactory = new wnp.MaterialFactory(wanaplan.configuration), this.cameraFeatures = new wnp.CameraFeatures, this.pointerManager = new wnp.PointerManager(wanaplan, this.onMouseEvent.bind(this), this.canvas), this.pointerManager.touchManager.setDeadZone(1), this.keyboardManager = wanaplan.keyboardManager, this.stats = new Stats, this.stats.domElement.style.position = "absolute", this.stats.domElement.style.bottom = "28px", this.stats.domElement.style.left = "0px", this.stats.domElement.style.zIndex = "99999", this.stats.domElement.style.display = "none", wanaplan.configuration.useStats && (this.stats.active = !0), document.body.appendChild(this.stats.domElement), document.addEventListener("wnp.engine3D.stats.activeChanged", function(e) {
            t.stats.active = e.value, t.stats.domElement.style.display = e.value ? "block" : "none", wanaplan.configuration.useStats = e.value ? !0 : !1, wanaplan.configuration.saveConfiguration()
        }, !1), document.addEventListener("wnp.engine3D.refreshGL", function() {
            var t = location.hash.replace("#", ""),
                e = atob(t),
                n = btoa(e.replace("&planUrl=:new", "&planUrl"));
            location.hash = n, window.location.reload(!0)
        }, !1), document.addEventListener("wnp.engine3D.showProducts", function(t) {
            var e = t.translations ? _(t.categoryName, t.translations) : _(t.categoryName);
            wnp.UI.ProductList.show(wanaplan, wanaplan.version, {
                id: t.categoryId,
                filter: t.categoryFilter,
                name: e
            })
        }, !1), this.isViewer || (document.addEventListener("wnp.engine3D.click", t.onClick, !1), document.addEventListener("wnp.engine3D.double-click", t.onDoubleClick, !1), document.addEventListener("pointerdown", t.onMouseDown, !1)), document.addEventListener("wnp.engine3d.wallsReady", this.onWallsReady, !1)), this.getContainer = function() {
            return this.container
        }
    };
    return e.prototype.collideWithMeshes = function(e, n, i) {
        var o = t.scene.createPickingRay(e, n),
            r = o.intersectMeshes(i, !0, !0);
        return r
    }, e.prototype.castShadows = function(t) {
        var e = this.shadowGenerator ? this.shadowGenerator.getShadowMap() : null;
        if (e) {
            e.renderList.push(t);
            var n = t.onDispose;
            t.onDispose = n ? function() {
                n(), wanaplan.engine3D.unCastShadows(t)
            } : function() {
                wanaplan.engine3D.unCastShadows(t)
            }
        }
    }, e.prototype.unCastShadows = function(t) {
        this.shadowGenerator.getShadowMap().renderList.splice(this.shadowGenerator.getShadowMap().renderList.indexOf(t), 1)
    }, e.prototype.reinitializeEngine = function() {
        if (!GlobalHelper.isMobileDevice() || "Firefox" !== BrowserDetect.browser)
            if (this.contextLostCount < this.MAX_CONTEXT_LOST)
                this.contextLostCount++;
            else {
                var t = wanaplan.engine2D.searchComponent("PedagoComponent"),
                    e = GlobalHelper.isMobileDevice() ? "mobile" : "no-webgl";
                t ? t.redirectToPage(e) : window.location.href = ["js/Components/PedagoComponent/pedago/pages/", e, ".php"].join("")
            }
    }, e.prototype.setEnabled = function(t) {
        this.enabled = t;
        var e = this.enabled ? "block" : "none";
        this.container.setAttribute("style", "display:" + e), this.isViewer || (this.stats.domElement.style.display = this.stats.active && this.enabled ? "block" : "none")
    }, e.prototype.setInitialView = function() {
        if (!this.viewInitialized) {
            var t, e = this.scene.getMeshByName("WallMesh_0");
            t = e ? this.cameraFeatures.getBestFocusRadius(e, wanaplan.engine3D.camera, wanaplan.engine3D.scene) : 500, wanaplan.engine3D.camera.radius = t, wanaplan.engine3D.camera.alpha = -120 / 180 * Math.PI, wanaplan.engine3D.camera.beta = 60 / 180 * Math.PI, this.viewInitialized = !0
        }
    }, e.prototype.requestCompute = function() {
        for (var t = 0; t < this._components.size(); t++)
            this._components[t].compute()
    }, e.prototype.addComponent = function(t) {
        return this._components.addComponent(t)
    }, e.prototype.addInstancedComponent = function(t) {
        return this._components.addInstancedComponent(t)
    }, e.prototype.getComponent = function(t) {
        return this._components.getComponent(t)
    }, e.prototype.searchComponent = function(t) {
        return this._components.getComponent(t)
    }, e.prototype.removeComponent = function(t, e) {
        this._components.removeComponent(t, e)
    }, e.prototype.removeComponentByName = function(t) {
        return this._components.removeComponent(t, !0)
    }, e.prototype.clearComponents = function() {
        this._components.clear()
    }, e.prototype.collideWithScene = function(e, n) {
        var i = t.scene.createPickingRay(e, n),
            o = i.intersectMeshes(t.scene.meshes, !0, !0);
        return o
    }, e.prototype.projectMouseOnGround = function(e, n) {
        var i, o;
        if (void 0 === e) {
            var r = this.pointerManager.getStatus();
            i = r.pos.x, o = r.pos.y
        } else
            i = e, o = n;
        var s = t.scene.createPickingRay(i, o);
        return s.intersectPlane(this.worldPlane)
    }, e.prototype.projectMouseOnPlane = function(e, n, i) {
        var o = this.pointerManager.getStatus(),
            n = void 0 !== n ? n : o.pos.x,
            i = void 0 !== i ? i : o.pos.y,
            r = t.scene.createPickingRay(n, i);
        return r.intersectPlane(e)
    }, e.prototype.onClick = function(e) {
        e.collided = t.collideWithScene(e.mstate.pos.x, e.mstate.pos.y), ujs.notify("wnp.engine3D.click.collided", e)
    }, e.prototype.onDoubleClick = function(e) {
        e.collided = t.collideWithScene(e.mstate.pos.x, e.mstate.pos.y), ujs.notify("wnp.engine3D.dblclick.collided", e)
    }, e.prototype.onMouseEvent = function(t, e) {
        var n = !1;
        1 != this.hardwareScaling && (e.pos.scaleInPlace(this.hardwareScaling), e.posDelta.scaleInPlace(this.hardwareScaling), e.planPos.scaleInPlace(this.hardwareScaling), e.plan3DPos.scaleInPlace(this.hardwareScaling)), e.actions > 0 ? (e.actions & e.ACTION_CLICK) > 0 ? n = "click" : (e.actions & e.ACTION_DBLCLICK) > 0 ? n = "double-click" : (e.actions & e.ACTION_DRAGSTART) > 0 && this._mode != this.MODE_DRAG ? n = "drag-start" : (e.actions & e.ACTION_DRAGGING) > 0 ? n = "dragging" : (e.actions & e.ACTION_DRAGEND) > 0 ? n = "drag-end" : (e.actions & e.ACTION_SCROLLUP) > 0 ? n = "zoom-in" : (e.actions & e.ACTION_SCROLLDOWN) > 0 && (n = "zoom-out") : (0 != e.posDelta.x || 0 != e.posDelta.y) && (n = "mouse-move"), n && (t.mstate = e, ujs.notify("wnp.engine3D." + n, t))
    }, e.prototype.resize = function() {
        this.canvas.width = wanaplan.getWidth() * this.hardwareScaling, this.canvas.height = wanaplan.getHeight() * this.hardwareScaling, this.engine.setViewport(this.camera.viewport, wanaplan.getWidth(), wanaplan.getHeight())
    }, e.prototype.onContextLost = function(t) {
        t.preventDefault(), wanaplan.setSelectedEngine(wanaplan.ENGINE_2D)
    }, e.prototype.onContextRestored = function(t) {
        t.preventDefault(), this.reinitializeEngine()
    }, e.prototype.onWallsReady = function() {
        t.setInitialView()
    }, e.prototype.initialize = function() {
        wanaplan.configuration.useMultiTexturing || (BABYLON.StandardMaterial.SpecularTextureEnabled = !1, BABYLON.StandardMaterial.BumpTextureEnabled = !1, BABYLON.StandardMaterial.ReflectionTextureEnabled = !1), this._components.initialize(), this._initialized = !0
    }, e.prototype.update = function(t) {
        this._components.checkDirtyComponents(), this._components.checkDirtyComponents();
        for (var e = 0; e < this._components.size(); e++)
            this._components[e].enabled && this._components[e].update(t);
        this.stats.active && this.stats.update(), this.keyboardManager.isPressed("27") && (this.mode = this.MODE_NORMAL)
    }, e.prototype.draw = function() {
        this.canDraw && (this.engine.beginFrame(), this.scene.render(), this.engine.endFrame())
    }, e
}();