var ConfiguratorPanelComponent3D = function() {
    var t = function(t) {
        BaseComponent3D.call(this, t, "ConfiguratorPanelComponent3D"), this.confm = hcsdesign.getComponentByName("ConfiguratorModComponent3D"), this.hec = hcsdesign.getComponentByName("HistoryEditionComponent"), this.edcmp = hcsdesign.getComponentByName("EditionComponent3D"), this.camF = hcsdesign.engine3D.cameraFeatures
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
        this.initBindForThisInstance(), document.removeEventListener("hcs.engine3d.configurator.start", this.myBind.onEditionStart, !1), document.removeEventListener("hcs.engine3d.configurator.stop", this.myBind.onEditionStop, !1), document.removeEventListener("hcs.engine3D.object.refresh", this.myBind.onRefresh, !1), document.removeEventListener("hcs.engine3D.object.rotate", this.myBind.onRefresh, !1), document.removeEventListener("hcs.engine3D.object.translate", this.myBind.onRefresh, !1), document.removeEventListener("hcs.contextMenu.transformChanged", this.myBind.onTransformPropertyChanged, !1), document.removeEventListener("hcs.contextMenu.propertyChanged", this.myBind.onParamPropertyChanged, !1), document.removeEventListener("hcs.widget.contextMenu.FurnitureEditor.closed", this.myBind.onEditBoxClosed, !1)
    }, t.prototype.startListening = function() {
        this.stopListening(), document.addEventListener("hcs.engine3d.configurator.start", this.myBind.onEditionStart, !1), document.addEventListener("hcs.engine3d.configurator.stop", this.myBind.onEditionStop, !1), document.addEventListener("hcs.contextMenu.transformChanged", this.myBind.onTransformPropertyChanged, !1), document.addEventListener("hcs.contextMenu.propertyChanged", this.myBind.onParamPropertyChanged, !1), document.addEventListener("hcs.widget.contextMenu.FurnitureEditor.closed", this.myBind.onEditBoxClosed, !1)
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
        hcs.UI.ContextMenu.close(), document.removeEventListener("hcs.engine3D.object.refresh", this.myBind.onRefresh, !1), document.removeEventListener("hcs.engine3D.object.rotate", this.myBind.onRefresh, !1), document.removeEventListener("hcs.engine3D.object.translate", this.myBind.onRefresh, !1)
    }, t.prototype.openEditBox = function(t) {
        if (t) {
            this._enabled = !0;
            var e = [{
                label: _("删除"),
                action: "hcs.request.object.remove",
                "class": "remove"
            }, {
                label: _("复制"),
                action: "hcs.request.object.clone"
            }, {
                label: _("确定"),
                action: "hcs.widget.contextMenu.FurnitureEditor.closed"
            }];
            hcsdesign.isPublisher() && e.push({
                label: _("增加到物品列表"),
                action: "hcs.request.object.addToProducts"
            });
            var n = t.structure,
                i = n.getAvailableProperties(),
                o = [{
                    title: _("设置"),
                    content: i
                }, {
                    title: _("位置 和 旋转"),
                    content: this._getPositionAndRotationMenu(n)
                }];
            hcs.UI.ContextMenu.show({
                menuName: "FurnitureEditor",
                title: _("物品属性"),
                width: 500,
                maxHeight: window.innerHeight - 140,
                height: window.innerHeight - 140,
                autoSize: !1,
                x: window.innerWidth - 400,
                id: "configuratorWindow"
            }, o, e, !1, {
                furniture: t
            }), document.addEventListener("hcs.engine3D.object.refresh", this.myBind.onRefresh, !1), document.addEventListener("hcs.engine3D.object.rotate", this.myBind.onRefresh, !1), document.addEventListener("hcs.engine3D.object.translate", this.myBind.onRefresh, !1)
        }
    }, t.prototype.refreshEditBox = function(t) {
        if (t && this._enabled) {
            var e = t.structure,
                n = e.getAvailableProperties(),
                i = [{
                    title: _("设置"),
                    content: n
                }, {
                    title: _("位置 和 旋转"),
                    content: this._getPositionAndRotationMenu(e)
                }];
            hcs.UI.ContextMenu.update(i)
        }
    }, t.prototype._setTransformProperty = function(t, e, n) {
        if (!t)
            return !1;
        var i = e.indexOf("rotation") >= 0;
        i && (n = n / 180 * Math.PI);
        var o = t.rotation.clone(),
            r = t.position.clone();
        ujs.setProperty(t, e, +n), ujs.notify("hcs.request.historyAction", {
            component: this.edcmp,
            object: t,
            params: {
                oldPosition: r,
                newPosition: t.position.clone(),
                oldRotation: o,
                newRotation: t.rotation.clone()
            },
            action: i ? this.edcmp.ROTATEACTION : this.edcmp.MOVEACTION
        }), t.computeWorldMatrix(!0), t.parent.markAsDirty(), ujs.notify(i ? "hcs.engine3D.object.translate" : "hcs.engine3D.object.rotate", {
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
        }), ujs.notify("hcs.request.saveHistory")
    }, t.prototype._saveFrameState = function() {
        for (var t = hcs.UI.ContextMenu.getPosition() || {
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
            this._frameSavedState.advancedVisible && hcs.Programmable.toggleVisible(), hcs.UI.ContextMenu.setPosition(this._frameSavedState.x, this._frameSavedState.y);
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
            label: _("旋转")
        }), e.push({
            label: _("x 轴"),
            type: "slider",
            unit: "°",
            value: {
                step: 1,
                min: 0,
                max: 360,
                value: n(t.rotation.x)
            },
            eventParams: {
                eventName: "hcs.contextMenu.transformChanged",
                property: "rotation.x"
            },
            id: "rotation-x"
        }), e.push({
            label: _("y 轴"),
            type: "slider",
            unit: "°",
            value: {
                step: 1,
                min: 0,
                max: 360,
                value: n(t.rotation.y)
            },
            eventParams: {
                eventName: "hcs.contextMenu.transformChanged",
                property: "rotation.y"
            },
            id: "rotation-y"
        }), e.push({
            label: _("z 轴"),
            type: "slider",
            unit: "°",
            value: {
                step: 1,
                min: 0,
                max: 360,
                value: n(t.rotation.z)
            },
            eventParams: {
                eventName: "hcs.contextMenu.transformChanged",
                property: "rotation.z"
            },
            id: "rotation-z"
        }), e.push({
            type: "separator",
            label: _("位置")
        }), e.push({
            label: _("x 轴"),
            type: "number",
            unit: "cm",
            value: {
                step: 10,
                min: -1e4,
                max: 1e4,
                value: Math.round(t.position.x)
            },
            eventParams: {
                eventName: "hcs.contextMenu.transformChanged",
                property: "position.x"
            },
            id: "position-x"
        }), e.push({
            label: _("y 轴"),
            type: "number",
            unit: "cm",
            value: {
                step: 10,
                min: -1e4,
                max: 1e4,
                value: Math.round(t.position.y)
            },
            eventParams: {
                eventName: "hcs.contextMenu.transformChanged",
                property: "position.y"
            },
            id: "position-y"
        }), e.push({
            label: _("z 轴"),
            type: "number",
            unit: "cm",
            value: {
                step: 10,
                min: -1e4,
                max: 1e4,
                value: Math.round(t.position.z)
            },
            eventParams: {
                eventName: "hcs.contextMenu.transformChanged",
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
            this._enabled = !1, ujs.notify("hcs.request.configurator.stop")
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