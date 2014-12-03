var ConfiguratorPanelComponent3D = function() {
    var t = function(t) {
        BaseComponent3D.call(this, t, "ConfiguratorPanelComponent3D"), this.confm = wanaplan.getComponentByName("ConfiguratorModComponent3D"), this.hec = wanaplan.getComponentByName("HistoryEditionComponent"), this.edcmp = wanaplan.getComponentByName("EditionComponent3D"), this.camF = wanaplan.engine3D.cameraFeatures
    };
    t.prototype = new BaseComponent3D, t.prototype.initialize = function() {
        this._options || this.setOptions()
    };
    var e = {};
    t.prototype.setOptions = function(t) {
        this._options = this._options || {}, t = t || {};
        for (var n in e)
            this._options[n] = "undefined" == typeof t[n] ? e[n] : t[n];
        return this
    }, t.prototype.stopListening = function() {
        this.initBindForThisInstance(), document.removeEventListener("wnp.engine3d.configurator.start", this.myBind.onEditionStart, !1), document.removeEventListener("wnp.engine3d.configurator.stop", this.myBind.onEditionStop, !1), document.removeEventListener("wnp.engine3D.object.refresh", this.myBind.onRefresh, !1), document.removeEventListener("wnp.engine3D.object.rotate", this.myBind.onRefresh, !1), document.removeEventListener("wnp.engine3D.object.translate", this.myBind.onRefresh, !1), document.removeEventListener("wnp.contextMenu.transformChanged", this.myBind.onTransformPropertyChanged, !1), document.removeEventListener("wnp.contextMenu.propertyChanged", this.myBind.onParamPropertyChanged, !1), document.removeEventListener("wnp.widget.contextMenu.FurnitureEditor.closed", this.myBind.onEditBoxClosed, !1)
    }, t.prototype.startListening = function() {
        this.stopListening(), document.addEventListener("wnp.engine3d.configurator.start", this.myBind.onEditionStart, !1), document.addEventListener("wnp.engine3d.configurator.stop", this.myBind.onEditionStop, !1), document.addEventListener("wnp.contextMenu.transformChanged", this.myBind.onTransformPropertyChanged, !1), document.addEventListener("wnp.contextMenu.propertyChanged", this.myBind.onParamPropertyChanged, !1), document.addEventListener("wnp.widget.contextMenu.FurnitureEditor.closed", this.myBind.onEditBoxClosed, !1)
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
    }, t.prototype.closeEditBox = function() {
        wnp.UI.ContextMenu.close(), document.removeEventListener("wnp.engine3D.object.refresh", this.myBind.onRefresh, !1), document.removeEventListener("wnp.engine3D.object.rotate", this.myBind.onRefresh, !1), document.removeEventListener("wnp.engine3D.object.translate", this.myBind.onRefresh, !1)
    }, t.prototype.openEditBox = function(t) {
        if (t) {
            this._enabled = !0;
            var e = [{
                label: _("Remove"),
                action: "wnp.request.object.remove",
                "class": "remove"
            }, {
                label: _("Duplicate"),
                action: "wnp.request.object.clone"
            }, {
                label: _("Submit"),
                action: "wnp.widget.contextMenu.FurnitureEditor.closed"
            }];
            wanaplan.isPublisher() && e.push({
                label: _("Add to products"),
                action: "wnp.request.object.addToProducts"
            });
            var n = t.structure,
                i = n.getAvailableProperties(),
                o = [{
                    title: _("Settings"),
                    content: i
                }, {
                    title: _("Position & Rotation"),
                    content: this._getPositionAndRotationMenu(n)
                }];
            wnp.UI.ContextMenu.show({
                menuName: "FurnitureEditor",
                title: _("Product infos"),
                width: 500,
                maxHeight: window.innerHeight - 140,
                height: window.innerHeight - 140,
                autoSize: !1,
                x: window.innerWidth - 400,
                id: "configuratorWindow"
            }, o, e, !1, {
                furniture: t
            }), document.addEventListener("wnp.engine3D.object.refresh", this.myBind.onRefresh, !1), document.addEventListener("wnp.engine3D.object.rotate", this.myBind.onRefresh, !1), document.addEventListener("wnp.engine3D.object.translate", this.myBind.onRefresh, !1)
        }
    }, t.prototype.refreshEditBox = function(t) {
        if (t && this._enabled) {
            var e = t.structure,
                n = e.getAvailableProperties(),
                i = [{
                    title: _("Settings"),
                    content: n
                }, {
                    title: _("Position & Rotation"),
                    content: this._getPositionAndRotationMenu(e)
                }];
            wnp.UI.ContextMenu.update(i)
        }
    }, t.prototype._setTransformProperty = function(t, e, n) {
        if (!t)
            return !1;
        var i = e.indexOf("rotation") >= 0;
        i && (n = n / 180 * Math.PI);
        var o = t.rotation.clone(),
            r = t.position.clone();
        ujs.setProperty(t, e, +n), ujs.notify("wnp.request.historyAction", {
            component: this.edcmp,
            object: t,
            params: {
                oldPosition: r,
                newPosition: t.position.clone(),
                oldRotation: o,
                newRotation: t.rotation.clone()
            },
            action: i ? this.edcmp.ROTATEACTION : this.edcmp.MOVEACTION
        }), t.computeWorldMatrix(!0), t.parent.markAsDirty(), ujs.notify(i ? "wnp.engine3D.object.translate" : "wnp.engine3D.object.rotate", {
            object: t
        })
    }, t.prototype._setParamProperty = function(t, e, n) {
        if (!t)
            return !1;
        var i = t.structure.programmableInstance;
        n = i.validateParam(e, n), ("undefined" == typeof n || null === n) && (n = ujs.getProperty(i, e));
        var o = {};
        o["programmableInstance." + e] = {
            newValue: n,
            exValue: ujs.getProperty(i, e)
        }, ujs.setProperty(i, e, n), this.edcmp.refreshObject(t, {
            modifiedProperties: o
        }), ujs.notify("wnp.request.saveHistory")
    }, t.prototype._saveFrameState = function() {
        for (var t = wnp.UI.ContextMenu.getPosition() || {
                x: 100,
                y: 100
            }, e = document.querySelectorAll(".advancedParams"), n = !(!e.length || e[0].classList.contains("hidden")), o = document.querySelectorAll(".window .tabbed-tabcontent"), r = [], s = o.length; s--;)
            r[s] = i(o[s]);
        this._frameSavedState = {
            advancedVisible: n,
            x: t.x,
            y: t.y,
            scroll: r
        }
    }, t.prototype._restoreFrameState = function() {
        if (this._frameSavedState) {
            this._frameSavedState.advancedVisible && wnp.Programmable.toggleVisible(), wnp.UI.ContextMenu.setPosition(this._frameSavedState.x, this._frameSavedState.y);
            for (var t = document.querySelectorAll(".window .tabbed-tabcontent"), e = t.length; e--;)
                n(t[e], this._frameSavedState.scroll[e].x, this._frameSavedState.scroll[e].y)
        }
    }, t.prototype._getPositionAndRotationMenu = function(t) {
        var e = [],
            n = function(t) {
                var e = 2 * Math.PI;
                return Math.round((t % e + e) % e / Math.PI * 180)
            };
        return e.push({
            type: "separator",
            label: _("rotation")
        }), e.push({
            label: _("x (pivotement avant/arriere)"),
            type: "slider",
            unit: "бу",
            value: {
                step: 1,
                min: 0,
                max: 360,
                value: n(t.rotation.x)
            },
            eventParams: {
                eventName: "wnp.contextMenu.transformChanged",
                property: "rotation.x"
            },
            id: "rotation-x"
        }), e.push({
            label: _("y (standard rotation)"),
            type: "slider",
            unit: "бу",
            value: {
                step: 1,
                min: 0,
                max: 360,
                value: n(t.rotation.y)
            },
            eventParams: {
                eventName: "wnp.contextMenu.transformChanged",
                property: "rotation.y"
            },
            id: "rotation-y"
        }), e.push({
            label: _("z (pivot left/right)"),
            type: "slider",
            unit: "бу",
            value: {
                step: 1,
                min: 0,
                max: 360,
                value: n(t.rotation.z)
            },
            eventParams: {
                eventName: "wnp.contextMenu.transformChanged",
                property: "rotation.z"
            },
            id: "rotation-z"
        }), e.push({
            type: "separator",
            label: _("positioning")
        }), e.push({
            label: _("x (left/right)"),
            type: "number",
            unit: "cm",
            value: {
                step: 10,
                min: -1e4,
                max: 1e4,
                value: Math.round(t.position.x)
            },
            eventParams: {
                eventName: "wnp.contextMenu.transformChanged",
                property: "position.x"
            },
            id: "position-x"
        }), e.push({
            label: _("y (elevation)"),
            type: "number",
            unit: "cm",
            value: {
                step: 10,
                min: -1e4,
                max: 1e4,
                value: Math.round(t.position.y)
            },
            eventParams: {
                eventName: "wnp.contextMenu.transformChanged",
                property: "position.y"
            },
            id: "position-y"
        }), e.push({
            label: _("z (forward/backward)"),
            type: "number",
            unit: "cm",
            value: {
                step: 10,
                min: -1e4,
                max: 1e4,
                value: Math.round(t.position.z)
            },
            eventParams: {
                eventName: "wnp.contextMenu.transformChanged",
                property: "position.z"
            },
            id: "position-z"
        }), e
    }, t.prototype.handlers = {
        onEditionStart: function() {
            this.openEditBox(this.confm.getCurrentObject())
        },
        onEditionStop: function() {
            this.closeEditBox()
        },
        onRefresh: function(t) {
            "ready" == this.confm.getState() && t.object == this.confm.getCurrentObject() && this.refreshEditBox(this.confm.getCurrentObject())
        },
        onParamPropertyChanged: function(t) {
            this._setParamProperty(this.confm.getCurrentObject(), t.property, t.value)
        },
        onTransformPropertyChanged: function(t) {
            this._setTransformProperty(this.confm.getCurrentObject(), t.property, t.value)
        },
        onEditBoxClosed: function() {
            this._enabled = !1, ujs.notify("wnp.request.configurator.stop")
        }
    };
    var n = function(t, e, n) {
            if (t.scrollTo)
                return void t.scrollTo(e, n);
            if (null != t.scrollLeft && null != t.scrollTop)
                return t.scrollLeft = e, void(t.scrollTop = n);
            if (null != t.scrollX && null != t.scrollY)
                return t.scrollX = e, void(t.scrollY = n);
            throw "unable to scroll"
        },
        i = function(t) {
            if (null != t.scrollLeft && null != t.scrollTop)
                return {
                    x: t.scrollLeft,
                    y: t.scrollTop
                };
            if (null != t.scrollX && null != t.scrollY)
                return {
                    x: t.scrollX,
                    y: t.scrollY
                };
            throw "unable to scroll"
        };
    return t
}();