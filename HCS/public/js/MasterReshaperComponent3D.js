var MasterReshaperComponent3D = function() {
    var t = function(t) {
        BaseComponent3D.call(this, t, "MasterReshaperComponent3D"), this.edcmp = wanaplan.getComponentByName("EditionComponent3D"), this.confm = wanaplan.getComponentByName("ConfiguratorModComponent3D"), this._listeners = []
    };
    return t.prototype = new BaseComponent3D, t.prototype.initialize = function() {}, t.prototype.startListening = function() {
        this.stopListening(), document.addEventListener("wnp.engine3d.configurator.cancel", this.myBind.onConfiguratorCancel, !1), document.addEventListener("wnp.engine3d.configurator.start", this.myBind.onConfiguratorStart, !1), document.addEventListener("wnp.engine3d.configurator.stop", this.myBind.onConfiguratorStop, !1)
    }, t.prototype.stopListening = function() {
        this.initBindForThisInstance(), document.removeEventListener("wnp.engine3d.configurator.cancel", this.myBind.onConfiguratorCancel, !1), document.removeEventListener("wnp.engine3d.configurator.start", this.myBind.onConfiguratorStart, !1), document.removeEventListener("wnp.engine3d.configurator.stop", this.myBind.onConfiguratorStop, !1), document.removeEventListener("wnp.engine3D.drag-start", this.myBind.onDragStart, !1), document.removeEventListener("wnp.engine3D.drag-end", this.myBind.onDragEnd, !1), document.removeEventListener("wnp.engine3D.dragging", this.myBind.onDragging, !1), document.removeEventListener("wnp.engine3D.mouse-move", this.myBind.onMouseMove, !1), document.removeEventListener("wnp.engine3D.object.refresh", this.myBind.onRefresh, !1), document.removeEventListener("wnp.engine3D.object.translate", this.myBind.onRefresh, !1), document.removeEventListener("wnp.engine3D.object.rotate", this.myBind.onRefresh, !1)
    }, t.prototype.initBindForThisInstance = function() {
        if (this.myBind)
            return this;
        var t = this;
        this.myBind = {};
        for (var e in this.handlers)
            (function() {
                var n = t.handlers[e];
                t.myBind[e] = function(e) {
                    n.call(t, e)
                }
            })();
        return this
    }, t.prototype.notify = function(t, e) {
        var n = this._listeners[t];
        if (n)
            for (var i = 0; i < n.length; i++)
                n[i](e)
    }, t.prototype.on = function(t, e) {
        return this._listeners[t] || (this._listeners[t] = []), this._listeners[t].push(e), this
    }, t.prototype.off = function(t, e) {
        var n = this._listeners[t];
        return n ? (n.indexOf(e) > -1 && n.splice(e, 1), this) : this
    }, t.prototype.requireHand = function(t) {
        return this._currentConfigurator == t ? !0 : (this._currentConfigurator && this._currentConfigurator.cancelHand(), this._currentConfigurator = t, !0)
    }, t.prototype.releaseHand = function(t) {
        this._currentConfigurator == t && (this._currentConfigurator = null, t.cancelHand());
        var e = this.edcmp,
            n = e.getLocker();
        e.unlock(n, 1), e.lock(n, 2)
    }, t.prototype.start = function(t) {
        this.furniture = t.furniture, this.notify("editionStart", t), document.removeEventListener("wnp.engine3D.drag-start", this.myBind.onDragStart, !1), document.removeEventListener("wnp.engine3D.mouse-move", this.myBind.onMouseMove, !1), document.removeEventListener("wnp.engine3D.object.refresh", this.myBind.onRefresh, !1), document.removeEventListener("wnp.engine3D.object.translate", this.myBind.onDragStart, !1), document.removeEventListener("wnp.engine3D.object.rotate", this.myBind.onMouseMove, !1), document.addEventListener("wnp.engine3D.drag-start", this.myBind.onDragStart, !1), document.addEventListener("wnp.engine3D.mouse-move", this.myBind.onMouseMove, !1), document.addEventListener("wnp.engine3D.object.refresh", this.myBind.onRefresh, !1), document.addEventListener("wnp.engine3D.object.translate", this.myBind.onRefresh, !1), document.addEventListener("wnp.engine3D.object.rotate", this.myBind.onRefresh, !1)
    }, t.prototype.cancel = t.prototype.stop = function(t) {
        this.notify("editionEnd", t), document.removeEventListener("wnp.engine3D.drag-start", this.myBind.onDragStart, !1), document.removeEventListener("wnp.engine3D.drag-end", this.myBind.onDragEnd, !1), document.removeEventListener("wnp.engine3D.dragging", this.myBind.nDragging, !1), document.removeEventListener("wnp.engine3D.mouse-move", this.myBind.onMouseMove, !1), document.removeEventListener("wnp.engine3D.object.refresh", this.myBind.onRefresh, !1), document.removeEventListener("wnp.engine3D.object.translate", this.myBind.onRefresh, !1), document.removeEventListener("wnp.engine3D.object.rotate", this.myBind.onRefresh, !1)
    }, t.prototype.handlers = {
        onConfiguratorStart: function(t) {
            this.start(t)
        },
        onConfiguratorStop: function(t) {
            this.stop(t)
        },
        onConfiguratorCancel: function(t) {
            this.cancel(t)
        },
        onDragStart: function(t) {
            t.furniture = this.furniture;
            var e = this.furniture;
            if (t.collided = this.scene.pick(t.mstate.pos.x, t.mstate.pos.y, function(t) {
                    return t.getTopLevelObject(!0) == e
                }), this.notify("dragStart", t), document.removeEventListener("wnp.engine3D.drag-end", this.myBind.onDragEnd, !1), document.removeEventListener("wnp.engine3D.dragging", this.myBind.onDragging, !1), this.dragging = !1, document.addEventListener("wnp.engine3D.drag-end", this.myBind.onDragEnd, !1), document.addEventListener("wnp.engine3D.dragging", this.myBind.onDragging, !1), this._currentConfigurator) {
                this.dragging = !0;
                var n = this.edcmp;
                n.lock(n.getLocker(), 1)
            }
        },
        onDragging: function(t) {
            if (this.notify("dragging", t), this._currentConfigurator) {
                this.dragging = !0;
                var e = this.edcmp;
                e.lock(e.getLocker(), 1)
            }
        },
        onDragEnd: function(t) {
            if (this.notify("dragEnd", t), this.dragging = !1, this._currentConfigurator) {
                var e = this.edcmp,
                    n = e.getLocker();
                e.unlock(n, 1), e.lock(n, 2), document.removeEventListener("wnp.engine3D.drag-end", this.myBind.onDragEnd, !1), document.removeEventListener("wnp.engine3D.dragging", this.myBind.nDragging, !1)
            }
        },
        onMouseMove: function(t) {
            if (!this.dragging && (this._listeners.leave && this._listeners.leave.length || this._listeners.hover && this._listeners.hover.length)) {
                t.furniture = this.furniture;
                var e = this.furniture;
                t.collided = this.scene.pick(t.mstate.pos.x, t.mstate.pos.y, function(t) {
                    return t.getTopLevelObject(!0) == e
                });
                var n = t.collided && t.collided.pickedMesh;
                !n && this._hover && this.notify("leave", t), n && this.notify("hover", t), this._hover = n
            }
        },
        onRefresh: function(t) {
            t.object == this.furniture && this.notify("refresh", t)
        }
    }, t
}();