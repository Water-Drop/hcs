/*
 * Author：虞思源
 * 
 * 提供3D引擎接口
 * 参数container为html元素，会创建canvas
 * initialize后draw
 */
var hcs = window.hcs || {};
hcs.Engine3D = function() {
    var t, 
	engine = function(container, structure, viewer) {
		this._initialized = !1, 
		this._components = new hcs.ComponentCollection(hcsdesign), 
		this.hardwareScaling = 1, 
		this.contextLostCount = 0, 
		this.MAX_CONTEXT_LOST = 5, 
		this.MODE_NORMAL = 1, 
		this.MODE_DRAG = 2, 
		this.MODE_PAINT = 4, 
		this.MODE_CONTEXTMENU = 8, 
		this.mode = this.MODE_NORMAL, 
		this.container = container, 
		this.canvas = document.createElement("canvas"), 
		//创建canvas
		container.appendChild(this.canvas), 
		this.canvas.width = hcsdesign.getWidth(), 
		this.canvas.height = hcsdesign.getHeight();
		//设置长宽高
        var o = hcsdesign.configuration && hcsdesign.configuration.useAntialiasing === !1 ? !1 : !0;
        this.engine = new BABYLON.Engine(this.canvas, o), 
		this.scene = new BABYLON.Scene(this.engine), 
		this.scene.ambientColor = new BABYLON.Color3(1, 1, 1), 
		this.scene.clearColor.copyFromFloats(.96, .96, .96), 
		this.shadowGenerator = null, 
		this.worldPlane = new BABYLON.Plane(0, 1, 0, 0), 
		//调用babylon
		this.enabled = !1, this.viewInitialized = !1, 
		this.isViewer = "undefined" != typeof viewer ? viewer : !1, 
		this.canvas.addEventListener("webglcontextlost", this.onContextLost.bind(this), !1), 
		this.canvas.addEventListener("webglcontextrestored", this.onContextRestored.bind(this), !1), 
		this.canDraw = !0, 
		t = this, 
		structure || (this.structure = hcsdesign.structure, 
		this.materialFactory = new hcs.MaterialFactory(hcsdesign.configuration), 
		//新建材质工厂
		this.cameraFeatures = new hcs.CameraFeatures, 
		//新建摄像头
		this.pointerManager = new hcs.PointerManager(hcsdesign, this.onMouseEvent.bind(this), this.canvas), 
		//新建鼠标管理
		this.pointerManager.touchManager.setDeadZone(1), 
		this.keyboardManager = hcsdesign.keyboardManager, 
		this.stats = new Stats, 
		this.stats.domElement.style.position = "absolute", 
		this.stats.domElement.style.bottom = "28px", 
		this.stats.domElement.style.left = "0px", 
		this.stats.domElement.style.zIndex = "99999", 
		this.stats.domElement.style.display = "none", 
		hcsdesign.configuration.useStats && (this.stats.active = !0), 
		document.body.appendChild(this.stats.domElement), 
		document.addEventListener("hcs.engine3D.stats.activeChanged", function(container) {
            t.stats.active = container.value, t.stats.domElement.style.display = container.value ? "block" : "none", hcsdesign.configuration.useStats = container.value ? !0 : !1, hcsdesign.configuration.saveConfiguration()
        }, !1), 
		document.addEventListener("hcs.engine3D.refreshGL", function() {
            var t = location.hash.replace("#", ""),
                container = atob(t),
                structure = btoa(container.replace("&planUrl=:new", "&planUrl"));
            location.hash = structure, window.location.reload(!0)
        }, !1), 
		document.addEventListener("hcs.engine3D.showProducts", function(t) {
            var container = t.translations ? _(t.categoryName, t.translations) : _(t.categoryName);
            hcs.UI.ProductList.show(hcsdesign, hcsdesign.version, {
                id: t.categoryId,
                filter: t.categoryFilter,
                name: container
            })
        }, !1), 
		this.isViewer || (document.addEventListener("hcs.engine3D.click", t.onClick, !1), 
		document.addEventListener("hcs.engine3D.double-click", t.onDoubleClick, !1), 
		document.addEventListener("pointerdown", t.onMouseDown, !1)), 
		document.addEventListener("hcs.engine3d.wallsReady", this.onWallsReady, !1)), 
		//绑定事件
		this.getContainer = function() {
            return this.container
        }
    };
    return engine.prototype.collideWithMeshes = function(engine, n, i) {
        var o = t.scene.createPickingRay(engine, n),
            r = o.intersectMeshes(i, !0, !0);
        return r
    }, //碰撞检测
	engine.prototype.castShadows = function(t) {
        var engine = this.shadowGenerator ? this.shadowGenerator.getShadowMap() : null;
        if (engine) {
            engine.renderList.push(t);
            var n = t.onDispose;
            t.onDispose = n ? function() {
                n(), hcsdesign.engine3D.unCastShadows(t)
            } : function() {
                hcsdesign.engine3D.unCastShadows(t)
            }
        }
    }, //设置光影效果
	engine.prototype.unCastShadows = function(t) {
        this.shadowGenerator.getShadowMap().renderList.splice(this.shadowGenerator.getShadowMap().renderList.indexOf(t), 1)
    }, 
	engine.prototype.reinitializeEngine = function() {
        if (!GlobalHelper.isMobileDevice() || "Firefox" !== BrowserDetect.browser)
            if (this.contextLostCount < this.MAX_CONTEXT_LOST)
                this.contextLostCount++;
            else {
                var t = hcsdesign.engine2D.searchComponent("PedagoComponent"),
                    engine = GlobalHelper.isMobileDevice() ? "mobile" : "no-webgl";
                t ? t.redirectToPage(engine) : window.location.href = ["js/Components/PedagoComponent/pedago/pages/", engine, ".php"].join("")
            }
    }, 
	engine.prototype.setEnabled = function(t) {
        this.enabled = t;
        var engine = this.enabled ? "block" : "none";
        this.container.setAttribute("style", "display:" + engine), this.isViewer || (this.stats.domElement.style.display = this.stats.active && this.enabled ? "block" : "none")
    }, 
	engine.prototype.setInitialView = function() {
        if (!this.viewInitialized) {
            var t, engine = this.scene.getMeshByName("WallMesh_0");
            t = engine ? this.cameraFeatures.getBestFocusRadius(engine, hcsdesign.engine3D.camera, hcsdesign.engine3D.scene) : 500, hcsdesign.engine3D.camera.radius = t, hcsdesign.engine3D.camera.alpha = -120 / 180 * Math.PI, hcsdesign.engine3D.camera.beta = 60 / 180 * Math.PI, this.viewInitialized = !0
        }
    }, 
	engine.prototype.requestCompute = function() {
        for (var t = 0; t < this._components.size(); t++)
            this._components[t].compute()
    },//2D转3D
	engine.prototype.addComponent = function(t) {
        return this._components.addComponent(t)
    }, 
	engine.prototype.addInstancedComponent = function(t) {
        return this._components.addInstancedComponent(t)
    }, 
	engine.prototype.getComponent = function(t) {
        return this._components.getComponent(t)
    }, 
	engine.prototype.searchComponent = function(t) {
        return this._components.getComponent(t)
    },
	engine.prototype.removeComponent = function(t, engine) {
        this._components.removeComponent(t, engine)
    }, 
	engine.prototype.removeComponentByName = function(t) {
        return this._components.removeComponent(t, !0)
    }, 
	engine.prototype.clearComponents = function() {
        this._components.clear()
    }, 
	//组件的增删改查
	engine.prototype.collideWithScene = function(engine, n) {
        var i = t.scene.createPickingRay(engine, n),
            o = i.intersectMeshes(t.scene.meshes, !0, !0);
        return o
    }, 
	engine.prototype.projectMouseOnGround = function(engine, n) {
        var i, o;
        if (void 0 === engine) {
            var r = this.pointerManager.getStatus();
            i = r.pos.x, o = r.pos.y
        } else
            i = engine, o = n;
        var s = t.scene.createPickingRay(i, o);
        return s.intersectPlane(this.worldPlane)
    }, 
	engine.prototype.projectMouseOnPlane = function(engine, n, i) {
        var o = this.pointerManager.getStatus(),
            n = void 0 !== n ? n : o.pos.x,
            i = void 0 !== i ? i : o.pos.y,
            r = t.scene.createPickingRay(n, i);
        return r.intersectPlane(engine)
    }, 
	engine.prototype.onClick = function(engine) {
        engine.collided = t.collideWithScene(engine.mstate.pos.x, engine.mstate.pos.y), ujs.notify("hcs.engine3D.click.collided", engine)
    }, 
	engine.prototype.onDoubleClick = function(engine) {
        engine.collided = t.collideWithScene(engine.mstate.pos.x, engine.mstate.pos.y), ujs.notify("hcs.engine3D.dblclick.collided", engine)
    }, 
	engine.prototype.onMouseEvent = function(t, engine) {
        var n = !1;
        1 != this.hardwareScaling && (engine.pos.scaleInPlace(this.hardwareScaling), engine.posDelta.scaleInPlace(this.hardwareScaling), engine.planPos.scaleInPlace(this.hardwareScaling), engine.plan3DPos.scaleInPlace(this.hardwareScaling)), engine.actions > 0 ? (engine.actions & engine.ACTION_CLICK) > 0 ? n = "click" : (engine.actions & engine.ACTION_DBLCLICK) > 0 ? n = "double-click" : (engine.actions & engine.ACTION_DRAGSTART) > 0 && this._mode != this.MODE_DRAG ? n = "drag-start" : (engine.actions & engine.ACTION_DRAGGING) > 0 ? n = "dragging" : (engine.actions & engine.ACTION_DRAGEND) > 0 ? n = "drag-end" : (engine.actions & engine.ACTION_SCROLLUP) > 0 ? n = "zoom-in" : (engine.actions & engine.ACTION_SCROLLDOWN) > 0 && (n = "zoom-out") : (0 != engine.posDelta.x || 0 != engine.posDelta.y) && (n = "mouse-move"), n && (t.mstate = engine, ujs.notify("hcs.engine3D." + n, t))
    },
	engine.prototype.resize = function() {
        this.canvas.width = hcsdesign.getWidth() * this.hardwareScaling, this.canvas.height = hcsdesign.getHeight() * this.hardwareScaling, this.engine.setViewport(this.camera.viewport, hcsdesign.getWidth(), hcsdesign.getHeight())
    }, 
	engine.prototype.onContextLost = function(t) {
        t.preventDefault(), hcsdesign.setSelectedEngine(hcsdesign.ENGINE_2D)
    }, 
	engine.prototype.onContextRestored = function(t) {
        t.preventDefault(), this.reinitializeEngine()
    }, 
	engine.prototype.onWallsReady = function() {
        t.setInitialView()
    }, 
	//相关事件的响应
	engine.prototype.initialize = function() {
        hcsdesign.configuration.useMultiTexturing || (BABYLON.StandardMaterial.SpecularTextureEnabled = !1, BABYLON.StandardMaterial.BumpTextureEnabled = !1, BABYLON.StandardMaterial.ReflectionTextureEnabled = !1), this._components.initialize(), this._initialized = !0
    }, 
	engine.prototype.update = function(t) {
        this._components.checkDirtyComponents(), this._components.checkDirtyComponents();
        for (var engine = 0; engine < this._components.size(); engine++)
            this._components[engine].enabled && this._components[engine].update(t);
        this.stats.active && this.stats.update(), this.keyboardManager.isPressed("27") && (this.mode = this.MODE_NORMAL)
    }, 
	engine.prototype.draw = function() {
        this.canDraw && (this.engine.beginFrame(), this.scene.render(), this.engine.endFrame())
    }, 
	//绘制函数，要在主循环调用
	engine
}();