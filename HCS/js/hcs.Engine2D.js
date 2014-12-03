var wnp = window.wnp || {};
wnp.Engine2D = function() {
    var t = function(t, e, n) {
        this.MODE_NORMAL = 1, this.MODE_DRAG = 2, this.MODE_DRAW = 4, this.MODE_CONTEXTMENU = 8, this.MODE_SUBSLOPE = 16, this._container = t, this.isViewer = "undefined" != typeof n ? n : !1, this.getContainer = function() {
            return this._container
        }, this.canvas = document.createElement("canvas"), this.canvas.id = "canvas2d", this._container.appendChild(this.canvas), this.dynamicCanvas = document.createElement("canvas"), this.dynamicCanvas.id = "dynamiccanvas2d", this._container.appendChild(this.dynamicCanvas), this.symbols2D = new wnp.Symbols2D, this._core = e, this._components = new wnp.ComponentCollection(wanaplan), this._initialized = !1, this._enabled = !1, this._zoom = 1, this._translation = new BABYLON.Vector2, this._cursorIconCb = null, this._pointerManager = null, this._mode = this.MODE_NORMAL, this._lastMode = this.MODE_NORMAL, this._enableAutoScroll = !1, this._eventsCb = {
            click: [],
            "double-click": [],
            hover: [],
            leave: [],
            "mouse-move": [],
            "drag-start": [],
            dragging: [],
            "drag-end": [],
            "zoom-in": [],
            "zoom-out": [],
            "key-pressed": [],
            "key-released": [],
            "static-draw": [],
            "dynamic-draw": [],
            "draw-end": [],
            "subslope-end": [],
            "enter-draw-zone": [],
            "leave-draw-zone": []
        }, this._lastTargeted = null, this._isHover = !1, this._needStaticDraw = !0, this._needDynamicDraw = !0, this._menuIsVisible = !0, this._contextMenuCallback = null, this._contextMenuRmCallback = null, this._contextMenuTarget = null, document.addEventListener("wnp.engine2D.contextMenu.propertyChanged", this.onContextMenuPropertyChanged.bind(this), !1), document.addEventListener("wnp.engine2D.contextMenu.close", this.onContextMenuClose.bind(this), !1), document.addEventListener("wnp.ui.frame.close", this.onContextMenuClose.bind(this), !1), document.addEventListener("wnp.engine2D.contextMenu.remove", this.onContextMenuRemove.bind(this), !1), document.addEventListener("wnp.engine2D.contextMenu.debug", this.onContextMenuDebug.bind(this), !1)
    };
    return t.prototype.isEnabled = function() {
        return this._enabled
    }, t.prototype.setEnabled = function(t) {
        this._enabled = t;
        var e = "none";
        t && (e = "block"), this.setMode(this.MODE_NORMAL), this._container.setAttribute("style", "display:" + e), this.requestStaticDraw(), ujs.notify("wnp.core.hideLoader")
    }, t.prototype.getZoom = function() {
        return this._zoom
    }, t.prototype.setZoom = function(t) {
        this._zoom = t, this._zoom = this._zoom < .1 ? .1 : this._zoom, this._zoom = this._zoom > 5 ? 5 : this._zoom, this.requestStaticDraw(), ujs.notify("wnp.request.zoomUpdated")
    }, t.prototype.getTranslation = function() {
        return this._translation.clone()
    }, t.prototype.setTranslation = function(t) {
        if (t instanceof BABYLON.Vector2) {
            var e = this._core.configuration.boundingSize,
                n = 100,
                i = this._core.getWidth() / 2 + (this.getZoom() * Math.abs(e.min.x) - this._core.getWidth() / 2) + n,
                o = this._core.getHeight() / 2 + (this.getZoom() * Math.abs(e.min.y) - this._core.getHeight() / 2) + n,
                r = this._core.getWidth() / 2 - (this.getZoom() * Math.abs(e.max.x) - this._core.getWidth() / 2) - n,
                s = this._core.getHeight() / 2 - (this.getZoom() * Math.abs(e.max.y) - this._core.getHeight() / 2) - n;
            t.x >= i && t.x <= r ? t.x = (i + r) / 2 : t.x > i ? t.x = i : t.x < r && (t.x = r), t.y >= o && t.y <= s ? t.y = (o + s) / 2 : t.y > o ? t.y = o : t.y < s && (t.y = s), this._translation.copyFrom(t), this._translation.x = Math.round(this._translation.x), this._translation.y = Math.round(this._translation.y), this.requestStaticDraw()
        }
    }, t.prototype.toRealCoord = function(t, e, n) {
        var i = t.scale(n || this.getZoom());
        return i.addInPlace(e || this.getTranslation()), i
    }, t.prototype.getMode = function() {
        return this._mode == this.MODE_DRAG || this._mode == this.MODE_CONTEXTMENU ? this._mode | this._lastMode : this._mode
    }, t.prototype.setMode = function(t) {
        if (t != this._mode) {
            var e = {
                mode: this._mode,
                lastMode: this._lastMode,
                newMode: t
            };
            this._lastMode = this._mode, this._mode = t, this._stateMachine(e)
        }
    }, t.prototype.setEnableAutoScroll = function(t) {
        this._enableAutoScroll = t
    }, t.prototype.getTarget = function(t) {
        if (!this.isViewer) {
            for (var t = t || this._pointerManager.getStatus(), e = 0; e < this._components.size(); e++) {
                var n = this._components[e].getTargeted(t.planPos);
                if (null != n)
                    return n
            }
            return null
        }
    }, t.prototype.getMouseState = function() {
        return this._pointerManager.getStatus()
    }, t.prototype.setCursorIcon = function(t) {
        this._cursorIconCb = t, this.requestDynamicDraw()
    }, t.prototype.initialize = function() {
        this._pointerManager = new wnp.PointerManager(this._core, this.onMouseEvent.bind(this), this.dynamicCanvas), this.dynamicCanvas.addEventListener("mouseout", function(t) {
            this._callInOutDrawZoneCb("leave-draw-zone", t)
        }.bind(this), !1), this.dynamicCanvas.addEventListener("mousein", function(t) {
            this._callInOutDrawZoneCb("enter-draw-zone", t)
        }.bind(this), !1), this.setTranslation(new BABYLON.Vector2((this._core.getWidth() - 260) / 2, this._core.getHeight() / 2)), this.resize(), this.initializeComponents(), this._initialized = !0, document.addEventListener("wnp.engine2D.requestCompute", function() {
            this.requestCompute()
        }.bind(this), !1), window.setTimeout(function() {
            this._core.helpBubbleManager.display("wnp.2d.wall-basics")
        }.bind(this), 2e3)
    }, t.prototype.bestZoom = function(t, e) {
        var n = this.getBestZoomAttributes(t, e);
        this.setZoom(n.zoom), this.setTranslation(n.translation), this.requestCompute()
    }, t.prototype.getBestZoomAttributes = function(t, e) {
        var n = t || this._core.getWidth(),
            i = e || this._core.getHeight(),
            o = this._core.getSelectedStructure().walls,
            r = {
                min: {
                    x: 1 / 0,
                    y: 1 / 0
                },
                max: {
                    x: -1 / 0,
                    y: -1 / 0
                }
            };
        for (var s in o) {
            var a = o[s].getBoundingBox();
            a.min.x < r.min.x && (r.min.x = a.min.x), a.min.y < r.min.y && (r.min.y = a.min.y), a.max.x > r.max.x && (r.max.x = a.max.x), a.max.y > r.max.y && (r.max.y = a.max.y)
        }
        var l = r.max.x - r.min.x + 100,
            h = r.max.y - r.min.y + 100,
            c = 1;
        (l > n || h > i) && (c = Math.min(i / h, n / l));
        var u = new BABYLON.Vector2(n / 2, i / 2);
        return u.x -= (r.max.x + r.min.x) / 2 * c, u.y -= (r.max.y + r.min.y) / 2 * c, {
            zoom: c,
            translation: u
        }
    }, t.prototype.reinitialize = function() {
        this.setMode(this.MODE_NORMAL), this.setTranslation(new BABYLON.Vector2((this._core.getWidth() - this._core.getMenuWidth()) / 2, this._core.getHeight() / 2)), this.resize(), this.requestCompute(), this.bestZoom()
    }, t.prototype.initializeComponents = function() {
        this._components.initialize()
    }, t.prototype.resize = function(t, e) {
        this.canvas.width = t || this._core.getWidth(), this.canvas.height = e || this._core.getHeight(), this.dynamicCanvas.width = t || this._core.getWidth(), this.dynamicCanvas.height = e || this._core.getHeight(), this._pointerManager && this._pointerManager.resize(), this.requestStaticDraw()
    }, t.prototype.update = function(t) {
        this._components.checkDirtyComponents();
        var t = t === !0 ? !0 : !1;
        if (t)
            for (var e = 0; e < this._components.size(); e++)
                for (var n = 0; n < wanaplan.structure.members.length; n++) {
                    var i = wanaplan.structure.members[n];
                    this._components[e].update(i), i.tidy()
                } else
            this._components.update(), wanaplan.getSelectedStructure().tidy();
        this._autoScroll()
    }, t.prototype.draw = function() {
        this.update(), wnp.AnimationHandler.Process(), this._needStaticDraw && (this._needStaticDraw = !1, this._callStaticDrawCb()), this._needDynamicDraw && (this._needDynamicDraw = !1, this._callDynamicDrawCb())
    }, t.prototype.registerEventCb = function(t, e, n, i, o, r, s) {
        var s = s || null;
        this.unregisterEventCb(t), this._eventsCb[n].push({
            id: t,
            priority: e,
            mode: i,
            objType: o,
            callback: r,
            data: s
        }), this._eventsCb[n].sort("static-draw" != n && "dynamic-draw" != n ? function(t, e) {
            return e.priority - t.priority
        } : function(t, e) {
            return t.priority - e.priority
        })
    }, t.prototype.unregisterEventCb = function(t) {
        for (var e in this._eventsCb)
            if (this._eventsCb.hasOwnProperty(e))
                for (var n in this._eventsCb[e])
                    this._eventsCb[e][n].id == t && delete this._eventsCb[e][n]
    }, t.prototype.addComponent = function(t) {
        return this._components.addComponent(t)
    }, t.prototype.addInstancedComponent = function(t) {
        return this._components.addInstancedComponent(t)
    }, t.prototype.getComponent = function() {
        return this._components.getComponent(name)
    }, t.prototype.searchComponent = function(t) {
        return this._components.getComponent(t)
    }, t.prototype.removeComponent = function(t, e) {
        return this._components.removeComponent(t, e)
    }, t.prototype.removeComponentByName = function(t) {
        return this._components.removeComponent(t)
    }, t.prototype.clearComponents = function() {
        this._components.clear()
    }, t.prototype.requestStaticDraw = function() {
        this._needStaticDraw = !0, this.requestDynamicDraw()
    }, t.prototype.requestDynamicDraw = function() {
        this._needDynamicDraw = !0
    }, t.prototype.requestCompute = function() {
        for (var t = 0; t < this._components.size(); t++)
            this._components[t].compute();
        this.requestStaticDraw()
    }, t.prototype.setCursor = function(t) {
        var t = t || "default";
        this.dynamicCanvas.style.cursor = t
    }, t.prototype.displayContextMenu = function(t, e, n, i) {
        var o = this._pointerManager.getStatus(),
            r = [];
        this._contextMenuCallback = n, this._contextMenuRmCallback = i, this._contextMenuTarget = e;
        for (var s in t) {
            var a = t[s];
            a.eventParams = {
                cast: a.cast || a.type,
                property: a.name,
                eventName: "wnp.engine2D.contextMenu.propertyChanged"
            }, r.push(a)
        }
        var l = [{
                title: "Tab 1",
                content: r
            }],
            h = [];
        window.WNP_DEBUG && h.push({
            label: "Debug",
            action: "wnp.engine2D.contextMenu.debug"
        }), null != i && h.push({
            label: _("Remove"),
            action: "wnp.engine2D.contextMenu.remove",
            "class": "remove"
        }), h.push({
            label: _("Ok"),
            action: "wnp.engine2D.contextMenu.close"
        }), this._callMouseEventCb("leave", e, {}, o), this.requestStaticDraw(), this.setMode(this.MODE_CONTEXTMENU);
        var c = (o.prevButtons & o.BUTTON_LEFT) > 0 ? 200 : 0,
            u = this._enabled ? o.pos.x + 2 : this._core.getWidth() / 2,
            p = this._enabled ? o.pos.y + 2 : 100;
        wnp.UI.ContextMenu.show({
            title: _("Settings"),
            x: u,
            y: p
        }, l, h, c)
    }, t.prototype._stateMachine = function(t) {
        var e = this._mode,
            n = this._lastMode,
            i = this._mode,
            o = null,
            r = null,
            s = {},
            a = this._lastTargeted,
            l = this._lastTargeted;
        void 0 !== t.mode && (e = t.mode), void 0 !== t.lastMode && (n = t.lastMode), void 0 !== t.newMode && (i = t.newMode), o = void 0 !== t.mstate ? t.mstate : this._pointerManager.getStatus(), void 0 !== t.evName && (r = t.evName), void 0 !== t.ev && (s = t.ev), void 0 !== t.target && (a = t.target), void 0 !== t.lastTarget && (l = t.lastTarget);
        var h = !1;
        e != i && (h = !0);
        var c = !1;
        if (null != r && (c = !0), h)
            if ((e & this.MODE_DRAW) > 0 && 0 == (i & this.MODE_DRAG) ? this._callDrawEndCb() : (n & this.MODE_DRAW) > 0 && (e & this.MODE_DRAG) > 0 && 0 == (i & (this.MODE_DRAW | this.MODE_DRAG)) && this._callDrawEndCb(), (e & this.MODE_SUBSLOPE) > 0 && 0 == (i & this.MODE_DRAG) ? this._callSubslopeEndCb() : (n & this.MODE_SUBSLOPE) > 0 && (e & this.MODE_DRAG) > 0 && 0 == (i & (this.MODE_SUBSLOPE | this.MODE_DRAG | this.MODE_CONTEXTMENU)) && this._callSubslopeEndCb(), (e & this.MODE_CONTEXTMENU) > 0 && 0 == (i & this.MODE_CONTEXTMENU) ? (wnp.UI.ContextMenu.close(), this.requestCompute(), this._core.keyboardManager.preventDefault = !0) : (i & this.MODE_CONTEXTMENU) > 0 && (this._core.keyboardManager.preventDefault = !1), (e & this.MODE_DRAG) > 0 && 0 == (i & this.MODE_DRAG))
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
                    (this.getMode() & this.MODE_DRAG) > 0 && (t.evName = "drag-end", this._stateMachine(t)), this._callMouseEventCb("mouse-move", a, s, o, e);
                    break;
                default:
                    this._callMouseEventCb(r, a, s, o, e)
            }
            (e & (this.MODE_NORMAL | this.MODE_CONTEXTMENU)) > 0 && this.setEnableAutoScroll(!1), c && (e & this.MODE_CONTEXTMENU) > 0 && ("click" == r || "double-click" == r ? (i = n, this.setMode(i)) : "drag-start" == r && (i = n, this.setMode(i), t.evName = "drag-start", t.target = this.getTarget(o), this._stateMachine(t))), a != l && 0 == (e & this.MODE_CONTEXTMENU) ? (null != l && this._callMouseEventCb("leave", l, s, o, e), null != a && this._callMouseEventCb("hover", a, s, o, i)) : e != i && 0 == (e & this.MODE_CONTEXTMENU) ? null != a && (this._callMouseEventCb("leave", a, s, o, e), this._callMouseEventCb("hover", a, s, o, i)) : e != i && 0 == (i & this.MODE_CONTEXTMENU) && null != a && (this._callMouseEventCb("leave", a, s, o, e), this._callMouseEventCb("hover", a, s, o, i)), e != i && 0 == (e & (this.MODE_DRAG | this.MODE_CONTEXTMENU)) && (i & this.MODE_SUBSLOPE) > 1 ? this._core.helpBubbleManager.display("wnp.2d.subslope") : e != i && 0 == (e & (this.MODE_DRAG | this.MODE_CONTEXTMENU)) && (i & this.MODE_DRAW) > 1 || e != i && 0 == (e & (this.MODE_DRAG | this.MODE_CONTEXTMENU)) && 0 == (i & (this.MODE_DRAG | this.MODE_CONTEXTMENU)) && this._core.helpBubbleManager.helpBubble.hide()
    }, t.prototype._callMouseEventCb = function(t, e, n, i, o) {
        if (void 0 != t) {
            var e = e;
            void 0 == e && (e = null);
            var n = n;
            void 0 == n && (n = {});
            var i = i;
            void 0 == i && (i = this._pointerManager.getStatus());
            var o = o;
            void 0 == o && (o = this.getMode());
            for (var r in this._eventsCb[t])
                if ((null == this._eventsCb[t][r].mode || (o & this._eventsCb[t][r].mode) > 0) && (null == this._eventsCb[t][r].objType || e instanceof this._eventsCb[t][r].objType)) {
                    var s = this._eventsCb[t][r].callback(n, e, i, this._eventsCb[t][r].data);
                    if (s === !1)
                        break
                }
        }
    }, t.prototype._callStaticDrawCb = function() {
        var t = this.canvas.getContext("2d");
        t.clearRect(0, 0, this._core.getWidth(), this._core.getHeight());
        for (var e in this._eventsCb["static-draw"])
            this._eventsCb["static-draw"][e] && (null == this._eventsCb["static-draw"][e].mode || (this._eventsCb["static-draw"][e].mode & this.getMode()) > 0) && (t.save(), this._eventsCb["static-draw"][e].callback(t, this.getTranslation(), this.getZoom(), this._eventsCb["static-draw"][e].data), t.restore())
    }, t.prototype._callInOutDrawZoneCb = function(t, e) {
        for (var n in this._eventsCb[t])
            this._eventsCb[t][n] && (null == this._eventsCb[t][n].mode || (this._eventsCb[t][n].mode & this.getMode()) > 0) && this._eventsCb[t][n].callback(e, this._eventsCb[t][n].data)
    }, t.prototype._callDynamicDrawCb = function() {
        var t = this.dynamicCanvas.getContext("2d");
        t.clearRect(0, 0, this._core.getWidth(), this._core.getHeight());
        for (var e in this._eventsCb["dynamic-draw"])
            this._eventsCb["dynamic-draw"][e] && (null == this._eventsCb["dynamic-draw"][e].mode || (this._eventsCb["dynamic-draw"][e].mode & this.getMode()) > 0) && (t.save(), this._eventsCb["dynamic-draw"][e].callback(t, this.getTranslation(), this.getZoom(), this._eventsCb["dynamic-draw"][e].data), t.restore());
        this._cursorIconCb && (this._cursorIconCb(t, this.getMouseState().pos), this._cursorIconCb = null)
    }, t.prototype._callDrawEndCb = function() {
        for (var t in this._eventsCb["draw-end"])
            this._eventsCb["draw-end"][t] && this._eventsCb["draw-end"][t].callback(this._eventsCb["draw-end"][t].data)
    }, t.prototype._callSubslopeEndCb = function() {
        for (var t in this._eventsCb["subslope-end"])
            this._eventsCb["subslope-end"][t] && this._eventsCb["subslope-end"][t].callback(this._eventsCb["subslope-end"][t].data)
    }, t.prototype._autoScroll = function() {
        if (this._enableAutoScroll || (this.getMode() & this.MODE_DRAG) > 1 && this.getTarget()) {
            var t = 3,
                e = 35,
                n = !1,
                i = this.getMouseState(),
                o = this.getTranslation();
            if (Math.abs(i.planPos.x) >= this._core.configuration.boundingSize.max.x || Math.abs(i.planPos.y) >= this._core.configuration.boundingSize.max.y)
                return;
            if (i.pos.y < e ? (o.y += t, i.posDelta.y = -t, n = !0) : i.pos.y > this._core.getHeight() - e && (o.y -= t, i.posDelta.y = t, n = !0), i.pos.x < e ? (o.x += t, i.posDelta.x = -t, n = !0) : i.pos.x > this._core.getWidth() - e && (o.x -= t, i.posDelta.x = t, n = !0), n) {
                this.setTranslation(o);
                var r = "mouse-move";
                (this.getMode() & this.MODE_DRAG) > 0 && (r = "dragging"), this._stateMachine({
                    evName: r,
                    ev: {},
                    mstate: i
                })
            }
        }
    }, t.prototype.onMouseEvent = function(t, e) {
        if (this._enabled) {
            var n = this.getTarget(e),
                i = null;
            e.actions > 0 ? (e.actions & e.ACTION_CLICK) > 0 ? i = "click" : (e.actions & e.ACTION_DBLCLICK) > 0 ? i = "double-click" : (e.actions & e.ACTION_DRAGSTART) > 0 && this._mode != this.MODE_DRAG ? i = "drag-start" : (e.actions & e.ACTION_DRAGGING) > 0 ? i = "dragging" : (e.actions & e.ACTION_DRAGEND) > 0 ? i = "drag-end" : (e.actions & e.ACTION_SCROLLUP) > 0 ? i = "zoom-in" : (e.actions & e.ACTION_SCROLLDOWN) > 0 && (i = "zoom-out") : (0 != e.posDelta.x || 0 != e.posDelta.y) && (i = "mouse-move"), null != i && (Math.abs(e.planPos.x) > this._core.configuration.boundingSize.max.x || Math.abs(e.planPos.y) > this._core.configuration.boundingSize.max.y || (this._stateMachine({
                mstate: e,
                evName: i,
                ev: t,
                target: n
            }), this._lastTargeted = n))
        }
    }, t.prototype.onContextMenuPropertyChanged = function(t) {
        this._contextMenuCallback(this._contextMenuTarget, t.property, t.value)
    }, t.prototype.onContextMenuClose = function() {
        this._callMouseEventCb("leave", this._contextMenuTarget), (this.getMode() & this.MODE_CONTEXTMENU) > 0 && this.setMode(this._lastMode)
    }, t.prototype.onContextMenuRemove = function() {
        this._contextMenuRmCallback(this._contextMenuTarget), this.setMode(this._lastMode)
    }, t.prototype.onContextMenuDebug = function() {
        console.debug(this._contextMenuTarget)
    }, t
}();