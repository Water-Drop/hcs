/*
 * 2d引擎是对2d图形图形库的封装并完成鼠标操作事件的响应，让其他开发人员不用理会图形库的
 * 2d引擎功能有：
 * 添加组件
 * 删除组件
 * 显示右键菜单
 * 缩放
 * 响应右键菜单事件
 * 检索组件
 * 
 */
var hcs = window.hcs || {};

hcs.Engine2D = function() {
    var Engine2D = function(Engine2D, e, n) {
        this.MODE_NORMAL = 1, this.MODE_DRAG = 2, this.MODE_DRAW = 4, this.MODE_CONTEXTMENU = 8, this.MODE_SUBSLOPE = 16, this._container = Engine2D, this.isViewer = "undefined" != typeof n ? n : false, this.getContainer = function() {
            return this._container
        }, this.canvas = document.createElement("canvas"), this.canvas.id = "canvas2d", this._container.appendChild(this.canvas), this.dynamicCanvas = document.createElement("canvas"), this.dynamicCanvas.id = "dynamiccanvas2d", this._container.appendChild(this.dynamicCanvas), this.symbols2D = new wnp.Symbols2D, this._core = e, this._components = new wnp.ComponentCollection(wanaplan), this._initialized = false, this._enabled = false, this._zoom = 1, this._translation = new BABYLON.Vector2, this._cursorIconCb = null, this._pointerManager = null, this._mode = this.MODE_NORMAL, this._lastMode = this.MODE_NORMAL, this._enableAutoScroll = false, this._eventsCb = {click: [],"double-click": [],hover: [],leave: [],"mouse-move": [],"drag-start": [],dragging: [],"drag-end": [],"zoom-in": [],"zoom-out": [],"key-pressed": [],"key-released": [],"static-draw": [],"dynamic-draw": [],"draw-end": [],"subslope-end": [],"enter-draw-zone": [],"leave-draw-zone": []}, this._lastTargeted = null, this._isHover = false, this._needStaticDraw = true, this._needDynamicDraw = true, this._menuIsVisible = true, this._contextMenuCallback = null, this._contextMenuRmCallback = null, this._contextMenuTarget = null, document.addEventListener("wnp.engine2D.contextMenu.propertyChanged", this.onContextMenuPropertyChanged.bind(this), false), document.addEventListener("wnp.engine2D.contextMenu.close", this.onContextMenuClose.bind(this), false), document.addEventListener("wnp.ui.frame.close", this.onContextMenuClose.bind(this), false), document.addEventListener("wnp.engine2D.contextMenu.remove", this.onContextMenuRemove.bind(this), false), document.addEventListener("wnp.engine2D.contextMenu.debug", this.onContextMenuDebug.bind(this), false)
    };
    return Engine2D.prototype.isEnabled = function() {
        return this._enabled
    }, Engine2D.prototype.setEnabled = function(Engine2D) {
        this._enabled = Engine2D;
        var e = "none";
        Engine2D && (e = "block"), this.setMode(this.MODE_NORMAL), this._container.setAttribute("style", "display:" + e), this.requestStaticDraw(), ujs.notify("wnp.core.hideLoader")
    }, Engine2D.prototype.getZoom = function() {
        return this._zoom
    }, Engine2D.prototype.setZoom = function(Engine2D) {
        this._zoom = Engine2D, this._zoom = this._zoom < .1 ? .1 : this._zoom, this._zoom = this._zoom > 5 ? 5 : this._zoom, this.requestStaticDraw(), ujs.notify("wnp.request.zoomUpdated")
    }, Engine2D.prototype.getTranslation = function() {
        return this._translation.clone()
    }, Engine2D.prototype.setTranslation = function(Engine2D) {
        if (Engine2D instanceof BABYLON.Vector2) {
            var e = this._core.configuration.boundingSize, n = 100, i = this._core.getWidth() / 2 + (this.getZoom() * Math.abs(e.min.x) - this._core.getWidth() / 2) + n, o = this._core.getHeight() / 2 + (this.getZoom() * Math.abs(e.min.y) - this._core.getHeight() / 2) + n, r = this._core.getWidth() / 2 - (this.getZoom() * Math.abs(e.max.x) - this._core.getWidth() / 2) - n, s = this._core.getHeight() / 2 - (this.getZoom() * Math.abs(e.max.y) - this._core.getHeight() / 2) - n;
            Engine2D.x >= i && Engine2D.x <= r ? Engine2D.x = (i + r) / 2 : Engine2D.x > i ? Engine2D.x = i : Engine2D.x < r && (Engine2D.x = r), Engine2D.y >= o && Engine2D.y <= s ? Engine2D.y = (o + s) / 2 : Engine2D.y > o ? Engine2D.y = o : Engine2D.y < s && (Engine2D.y = s), this._translation.copyFrom(Engine2D), this._translation.x = Math.round(this._translation.x), this._translation.y = Math.round(this._translation.y), this.requestStaticDraw()
        }
    }, Engine2D.prototype.toRealCoord = function(Engine2D, e, n) {
        var i = Engine2D.scale(n || this.getZoom());
        return i.addInPlace(e || this.getTranslation()), i
    }, Engine2D.prototype.getMode = function() {
        return this._mode == this.MODE_DRAG || this._mode == this.MODE_CONTEXTMENU ? this._mode | this._lastMode : this._mode
    }, Engine2D.prototype.setMode = function(Engine2D) {
        if (Engine2D != this._mode) {
            var e = {mode: this._mode,lastMode: this._lastMode,newMode: Engine2D};
            this._lastMode = this._mode, this._mode = Engine2D, this._stateMachine(e)
        }
    }, Engine2D.prototype.setEnableAutoScroll = function(Engine2D) {
        this._enableAutoScroll = Engine2D
    }, Engine2D.prototype.getTarget = function(Engine2D) {
        if (!this.isViewer) {
            for (var Engine2D = Engine2D || this._pointerManager.getStatus(), e = 0; e < this._components.size(); e++) {
                var n = this._components[e].getTargeted(Engine2D.planPos);
                if (null != n)
                    return n
            }
            return null
        }
    }, Engine2D.prototype.getMouseState = function() {
        return this._pointerManager.getStatus()
    }, Engine2D.prototype.setCursorIcon = function(Engine2D) {
        this._cursorIconCb = Engine2D, this.requestDynamicDraw()
    }, Engine2D.prototype.initialize = function() {
        this._pointerManager = new wnp.PointerManager(this._core, this.onMouseEvent.bind(this), this.dynamicCanvas), this.dynamicCanvas.addEventListener("mouseout", function(Engine2D) {
            this._callInOutDrawZoneCb("leave-draw-zone", Engine2D)
        }.bind(this), false), this.dynamicCanvas.addEventListener("mousein", function(Engine2D) {
            this._callInOutDrawZoneCb("enter-draw-zone", Engine2D)
        }.bind(this), false), this.setTranslation(new BABYLON.Vector2((this._core.getWidth() - 260) / 2, this._core.getHeight() / 2)), this.resize(), this.initializeComponents(), this._initialized = true, document.addEventListener("wnp.engine2D.requestCompute", function() {
            this.requestCompute()
        }.bind(this), false), window.setTimeout(function() {
            this._core.helpBubbleManager.display("wnp.2d.wall-basics")
        }.bind(this), 2e3)
    }, Engine2D.prototype.bestZoom = function(Engine2D, e) {
        var n = this.getBestZoomAttributes(Engine2D, e);
        this.setZoom(n.zoom), this.setTranslation(n.translation), this.requestCompute()
    }, Engine2D.prototype.getBestZoomAttributes = function(Engine2D, e) {
        var n = Engine2D || this._core.getWidth(), i = e || this._core.getHeight(), o = this._core.getSelectedStructure().walls, r = {min: {x: 1 / 0,y: 1 / 0},max: {x: -1 / 0,y: -1 / 0}};
        for (var s in o) {
            var a = o[s].getBoundingBox();
            a.min.x < r.min.x && (r.min.x = a.min.x), a.min.y < r.min.y && (r.min.y = a.min.y), a.max.x > r.max.x && (r.max.x = a.max.x), a.max.y > r.max.y && (r.max.y = a.max.y)
        }
        var l = r.max.x - r.min.x + 100, h = r.max.y - r.min.y + 100, c = 1;
        (l > n || h > i) && (c = Math.min(i / h, n / l));
        var u = new BABYLON.Vector2(n / 2, i / 2);
        return u.x -= (r.max.x + r.min.x) / 2 * c, u.y -= (r.max.y + r.min.y) / 2 * c, {zoom: c,translation: u}
    }, Engine2D.prototype.reinitialize = function() {
        this.setMode(this.MODE_NORMAL), this.setTranslation(new BABYLON.Vector2((this._core.getWidth() - this._core.getMenuWidth()) / 2, this._core.getHeight() / 2)), this.resize(), this.requestCompute(), this.bestZoom()
    }, Engine2D.prototype.initializeComponents = function() {
        this._components.initialize()
    }, Engine2D.prototype.resize = function(Engine2D, e) {
        this.canvas.width = Engine2D || this._core.getWidth(), this.canvas.height = e || this._core.getHeight(), this.dynamicCanvas.width = Engine2D || this._core.getWidth(), this.dynamicCanvas.height = e || this._core.getHeight(), this._pointerManager && this._pointerManager.resize(), this.requestStaticDraw()
    }, Engine2D.prototype.update = function(Engine2D) {
        this._components.checkDirtyComponents();
        var Engine2D = Engine2D === true ? true : false;
        if (Engine2D)
            for (var e = 0; e < this._components.size(); e++)
                for (var n = 0; n < wanaplan.structure.members.length; n++) {
                    var i = wanaplan.structure.members[n];
                    this._components[e].update(i), i.tidy()
                }
        else
            this._components.update(), wanaplan.getSelectedStructure().tidy();
        this._autoScroll()
    }, Engine2D.prototype.draw = function() {
        this.update(), wnp.AnimationHandler.Process(), this._needStaticDraw && (this._needStaticDraw = false, this._callStaticDrawCb()), this._needDynamicDraw && (this._needDynamicDraw = false, this._callDynamicDrawCb())
    }, Engine2D.prototype.registerEventCb = function(Engine2D, e, n, i, o, r, s) {
        var s = s || null;
        this.unregisterEventCb(Engine2D), this._eventsCb[n].push({id: Engine2D,priority: e,mode: i,objType: o,callback: r,data: s}), this._eventsCb[n].sort("static-draw" != n && "dynamic-draw" != n ? function(Engine2D, e) {
            return e.priority - Engine2D.priority
        } : function(Engine2D, e) {
            return Engine2D.priority - e.priority
        })
    }, Engine2D.prototype.unregisterEventCb = function(Engine2D) {
        for (var e in this._eventsCb)
            if (this._eventsCb.hasOwnProperty(e))
                for (var n in this._eventsCb[e])
                    this._eventsCb[e][n].id == Engine2D && delete this._eventsCb[e][n]
    }, Engine2D.prototype.addComponent = function(Engine2D) {
        return this._components.addComponent(Engine2D)
    }, Engine2D.prototype.addInstancedComponent = function(Engine2D) {
        return this._components.addInstancedComponent(Engine2D)
    }, Engine2D.prototype.getComponent = function() {
        return this._components.getComponent(name)
    }, Engine2D.prototype.searchComponent = function(Engine2D) {
        return this._components.getComponent(Engine2D)
    }, Engine2D.prototype.removeComponent = function(Engine2D, e) {
        return this._components.removeComponent(Engine2D, e)
    }, Engine2D.prototype.removeComponentByName = function(Engine2D) {
        return this._components.removeComponent(Engine2D)
    }, Engine2D.prototype.clearComponents = function() {
        this._components.clear()
    }, Engine2D.prototype.requestStaticDraw = function() {
        this._needStaticDraw = true, this.requestDynamicDraw()
    }, Engine2D.prototype.requestDynamicDraw = function() {
        this._needDynamicDraw = true
    }, Engine2D.prototype.requestCompute = function() {
        for (var Engine2D = 0; Engine2D < this._components.size(); Engine2D++)
            this._components[Engine2D].compute();
        this.requestStaticDraw()
    }, Engine2D.prototype.setCursor = function(Engine2D) {
        var Engine2D = Engine2D || "default";
        this.dynamicCanvas.style.cursor = Engine2D
    }, Engine2D.prototype.displayContextMenu = function(Engine2D, e, n, i) {
        var o = this._pointerManager.getStatus(), r = [];
        this._contextMenuCallback = n, this._contextMenuRmCallback = i, this._contextMenuTarget = e;
        for (var s in Engine2D) {
            var a = Engine2D[s];
            a.eventParams = {cast: a.cast || a.type,property: a.name,eventName: "wnp.engine2D.contextMenu.propertyChanged"}, r.push(a)
        }
        var l = [{title: "Tab 1",content: r}], h = [];
        window.WNP_DEBUG && h.push({label: "Debug",action: "wnp.engine2D.contextMenu.debug"}), null != i && h.push({label: _("Remove"),action: "wnp.engine2D.contextMenu.remove","class": "remove"}), h.push({label: _("Ok"),action: "wnp.engine2D.contextMenu.close"}), this._callMouseEventCb("leave", e, {}, o), this.requestStaticDraw(), this.setMode(this.MODE_CONTEXTMENU);
        var c = (o.prevButtons & o.BUTTON_LEFT) > 0 ? 200 : 0, u = this._enabled ? o.pos.x + 2 : this._core.getWidth() / 2, p = this._enabled ? o.pos.y + 2 : 100;
        wnp.UI.ContextMenu.show({title: _("Settings"),x: u,y: p}, l, h, c)
    }, Engine2D.prototype._stateMachine = function(Engine2D) {
        var e = this._mode, n = this._lastMode, i = this._mode, o = null, r = null, s = {}, a = this._lastTargeted, l = this._lastTargeted;
        void 0 !== Engine2D.mode && (e = Engine2D.mode), void 0 !== Engine2D.lastMode && (n = Engine2D.lastMode), void 0 !== Engine2D.newMode && (i = Engine2D.newMode), o = void 0 !== Engine2D.mstate ? Engine2D.mstate : this._pointerManager.getStatus(), void 0 !== Engine2D.evName && (r = Engine2D.evName), void 0 !== Engine2D.ev && (s = Engine2D.ev), void 0 !== Engine2D.target && (a = Engine2D.target), void 0 !== Engine2D.lastTarget && (l = Engine2D.lastTarget);
        var h = false;
        e != i && (h = true);
        var c = false;
        if (null != r && (c = true), h)
            if ((e & this.MODE_DRAW) > 0 && 0 == (i & this.MODE_DRAG) ? this._callDrawEndCb() : (n & this.MODE_DRAW) > 0 && (e & this.MODE_DRAG) > 0 && 0 == (i & (this.MODE_DRAW | this.MODE_DRAG)) && this._callDrawEndCb(), (e & this.MODE_SUBSLOPE) > 0 && 0 == (i & this.MODE_DRAG) ? this._callSubslopeEndCb() : (n & this.MODE_SUBSLOPE) > 0 && (e & this.MODE_DRAG) > 0 && 0 == (i & (this.MODE_SUBSLOPE | this.MODE_DRAG | this.MODE_CONTEXTMENU)) && this._callSubslopeEndCb(), (e & this.MODE_CONTEXTMENU) > 0 && 0 == (i & this.MODE_CONTEXTMENU) ? (wnp.UI.ContextMenu.close(), this.requestCompute(), this._core.keyboardManager.preventDefault = true) : (i & this.MODE_CONTEXTMENU) > 0 && (this._core.keyboardManager.preventDefault = false), (e & this.MODE_DRAG) > 0 && 0 == (i & this.MODE_DRAG))
                (o.actions & o.ACTION_DRAGGING) > 0 && (this._pointerManager.reset(), this._callMouseEventCb("drag-end", a, s, o, this.MODE_DRAG)), this._eventsCb.dragging.length = 0, this._eventsCb["drag-end"].length = 0;
            else if ((e & this.MODE_DRAW) > 0 && 0 == (i & (this.MODE_DRAG | this.MODE_DRAW)))
                for (var u in this._eventsCb)
                    if (this._eventsCb.hasOwnProperty(u))
                        for (var p in this._eventsCb[u])
                            this._eventsCb[u][p].mode == this.MODE_DRAW && delete this._eventsCb[u][p];
        if (h)
            switch (i) {
                case this.MODE_DRAG:
                    this.setCursor(e == this.MODE_DRAW ? "crosshair" : "move");
                    break;
                case this.MODE_DRAW:
                    this.setCursor("crosshair");
                    break;
                default:
                    this.setCursor("default")
            }
        if (c && 0 == (e & this.MODE_CONTEXTMENU))
            switch (r) {
                case "drag-start":
                    this._callMouseEventCb("drag-start", a, s, o, e), i = this.MODE_DRAG, this.setMode(i);
                    break;
                case "drag-end":
                    this._callMouseEventCb("drag-end", a, s, o, e), this._mode == this.MODE_DRAG ? (i = n, this.setMode(i)) : i = this._mode, l = a, a = this.getTarget(o);
                    break;
                case "double-click":
                    this._callMouseEventCb("double-click", a, s, o, e), l = a, a = this.getTarget(o);
                    break;
                case "mouse-move":
                    (this.getMode() & this.MODE_DRAG) > 0 && (Engine2D.evName = "drag-end", this._stateMachine(Engine2D)), this._callMouseEventCb("mouse-move", a, s, o, e);
                    break;
                default:
                    this._callMouseEventCb(r, a, s, o, e)
            }
        (e & (this.MODE_NORMAL | this.MODE_CONTEXTMENU)) > 0 && this.setEnableAutoScroll(!1), c && (e & this.MODE_CONTEXTMENU) > 0 && ("click" == r || "double-click" == r ? (i = n, this.setMode(i)) : "drag-start" == r && (i = n, this.setMode(i), Engine2D.evName = "drag-start", Engine2D.target = this.getTarget(o), this._stateMachine(Engine2D))), a != l && 0 == (e & this.MODE_CONTEXTMENU) ? (null != l && this._callMouseEventCb("leave", l, s, o, e), null != a && this._callMouseEventCb("hover", a, s, o, i)) : e != i && 0 == (e & this.MODE_CONTEXTMENU) ? null != a && (this._callMouseEventCb("leave", a, s, o, e), this._callMouseEventCb("hover", a, s, o, i)) : e != i && 0 == (i & this.MODE_CONTEXTMENU) && null != a && (this._callMouseEventCb("leave", a, s, o, e), this._callMouseEventCb("hover", a, s, o, i)), e != i && 0 == (e & (this.MODE_DRAG | this.MODE_CONTEXTMENU)) && (i & this.MODE_SUBSLOPE) > 1 ? this._core.helpBubbleManager.display("wnp.2d.subslope") : e != i && 0 == (e & (this.MODE_DRAG | this.MODE_CONTEXTMENU)) && (i & this.MODE_DRAW) > 1 || e != i && 0 == (e & (this.MODE_DRAG | this.MODE_CONTEXTMENU)) && 0 == (i & (this.MODE_DRAG | this.MODE_CONTEXTMENU)) && this._core.helpBubbleManager.helpBubble.hide()
    }, Engine2D.prototype._callMouseEventCb = function(Engine2D, e, n, i, o) {
        if (void 0 != Engine2D) {
            var e = e;
            void 0 == e && (e = null);
            var n = n;
            void 0 == n && (n = {});
            var i = i;
            void 0 == i && (i = this._pointerManager.getStatus());
            var o = o;
            void 0 == o && (o = this.getMode());
            for (var r in this._eventsCb[Engine2D])
                if ((null == this._eventsCb[Engine2D][r].mode || (o & this._eventsCb[Engine2D][r].mode) > 0) && (null == this._eventsCb[Engine2D][r].objType || e instanceof this._eventsCb[Engine2D][r].objType)) {
                    var s = this._eventsCb[Engine2D][r].callback(n, e, i, this._eventsCb[Engine2D][r].data);
                    if (s === false)
                        break
                }
        }
    }, Engine2D.prototype._callStaticDrawCb = function() {
        var Engine2D = this.canvas.getContext("2d");
        Engine2D.clearRect(0, 0, this._core.getWidth(), this._core.getHeight());
        for (var e in this._eventsCb["static-draw"])
            this._eventsCb["static-draw"][e] && (null == this._eventsCb["static-draw"][e].mode || (this._eventsCb["static-draw"][e].mode & this.getMode()) > 0) && (Engine2D.save(), this._eventsCb["static-draw"][e].callback(Engine2D, this.getTranslation(), this.getZoom(), this._eventsCb["static-draw"][e].data), Engine2D.restore())
    }, Engine2D.prototype._callInOutDrawZoneCb = function(Engine2D, e) {
        for (var n in this._eventsCb[Engine2D])
            this._eventsCb[Engine2D][n] && (null == this._eventsCb[Engine2D][n].mode || (this._eventsCb[Engine2D][n].mode & this.getMode()) > 0) && this._eventsCb[Engine2D][n].callback(e, this._eventsCb[Engine2D][n].data)
    }, Engine2D.prototype._callDynamicDrawCb = function() {
        var Engine2D = this.dynamicCanvas.getContext("2d");
        Engine2D.clearRect(0, 0, this._core.getWidth(), this._core.getHeight());
        for (var e in this._eventsCb["dynamic-draw"])
            this._eventsCb["dynamic-draw"][e] && (null == this._eventsCb["dynamic-draw"][e].mode || (this._eventsCb["dynamic-draw"][e].mode & this.getMode()) > 0) && (Engine2D.save(), this._eventsCb["dynamic-draw"][e].callback(Engine2D, this.getTranslation(), this.getZoom(), this._eventsCb["dynamic-draw"][e].data), Engine2D.restore());
        this._cursorIconCb && (this._cursorIconCb(Engine2D, this.getMouseState().pos), this._cursorIconCb = null)
    }, Engine2D.prototype._callDrawEndCb = function() {
        for (var Engine2D in this._eventsCb["draw-end"])
            this._eventsCb["draw-end"][Engine2D] && this._eventsCb["draw-end"][Engine2D].callback(this._eventsCb["draw-end"][Engine2D].data)
    }, Engine2D.prototype._callSubslopeEndCb = function() {
        for (var Engine2D in this._eventsCb["subslope-end"])
            this._eventsCb["subslope-end"][Engine2D] && this._eventsCb["subslope-end"][Engine2D].callback(this._eventsCb["subslope-end"][Engine2D].data)
    }, Engine2D.prototype._autoScroll = function() {
        if (this._enableAutoScroll || (this.getMode() & this.MODE_DRAG) > 1 && this.getTarget()) {
            var Engine2D = 3, e = 35, n = false, i = this.getMouseState(), o = this.getTranslation();
            if (Math.abs(i.planPos.x) >= this._core.configuration.boundingSize.max.x || Math.abs(i.planPos.y) >= this._core.configuration.boundingSize.max.y)
                return;
            if (i.pos.y < e ? (o.y += Engine2D, i.posDelta.y = -Engine2D, n = true) : i.pos.y > this._core.getHeight() - e && (o.y -= Engine2D, i.posDelta.y = Engine2D, n = true), i.pos.x < e ? (o.x += Engine2D, i.posDelta.x = -Engine2D, n = true) : i.pos.x > this._core.getWidth() - e && (o.x -= Engine2D, i.posDelta.x = Engine2D, n = true), n) {
                this.setTranslation(o);
                var r = "mouse-move";
                (this.getMode() & this.MODE_DRAG) > 0 && (r = "dragging"), this._stateMachine({evName: r,ev: {},mstate: i})
            }
        }
    }, Engine2D.prototype.onMouseEvent = function(Engine2D, e) {
        if (this._enabled) {
            var n = this.getTarget(e), i = null;
            e.actions > 0 ? (e.actions & e.ACTION_CLICK) > 0 ? i = "click" : (e.actions & e.ACTION_DBLCLICK) > 0 ? i = "double-click" : (e.actions & e.ACTION_DRAGSTART) > 0 && this._mode != this.MODE_DRAG ? i = "drag-start" : (e.actions & e.ACTION_DRAGGING) > 0 ? i = "dragging" : (e.actions & e.ACTION_DRAGEND) > 0 ? i = "drag-end" : (e.actions & e.ACTION_SCROLLUP) > 0 ? i = "zoom-in" : (e.actions & e.ACTION_SCROLLDOWN) > 0 && (i = "zoom-out") : (0 != e.posDelta.x || 0 != e.posDelta.y) && (i = "mouse-move"), null != i && (Math.abs(e.planPos.x) > this._core.configuration.boundingSize.max.x || Math.abs(e.planPos.y) > this._core.configuration.boundingSize.max.y || (this._stateMachine({mstate: e,evName: i,ev: Engine2D,target: n}), this._lastTargeted = n))
        }
    }, Engine2D.prototype.onContextMenuPropertyChanged = function(Engine2D) {
        this._contextMenuCallback(this._contextMenuTarget, Engine2D.property, Engine2D.value)
    }, Engine2D.prototype.onContextMenuClose = function() {
        this._callMouseEventCb("leave", this._contextMenuTarget), (this.getMode() & this.MODE_CONTEXTMENU) > 0 && this.setMode(this._lastMode)
    }, Engine2D.prototype.onContextMenuRemove = function() {
        this._contextMenuRmCallback(this._contextMenuTarget), this.setMode(this._lastMode)
    }, Engine2D.prototype.onContextMenuDebug = function() {
        console.debug(this._contextMenuTarget)
    }, Engine2D
}();