var GroupConfiguratorPanelComponent3D = function() {
    var t = function(t) {
        BaseComponent3D.call(this, t, "GroupConfiguratorPanelComponent3D"), this.confm = wanaplan.getComponentByName("ConfiguratorModComponent3D"), this.hec = wanaplan.getComponentByName("HistoryEditionComponent"), this.edcmp = wanaplan.getComponentByName("EditionComponent3D"), this.camF = wanaplan.engine3D.cameraFeatures
    };
    t.prototype = new BaseComponent3D, t.prototype.initialize = function() {
        this._options || this.setOptions()
    };
    var e = {};
    return t.prototype.setOptions = function(t) {
        this._options = this._options || {}, t = t || {};
        for (var n in e)
            this._options[n] = "undefined" == typeof t[n] ? e[n] : t[n];
        return this
    }, t.prototype.stopListening = function() {
        this.initBindForThisInstance(), document.removeEventListener("wnp.engine3d.groupConfigurator.start", this.myBind.onEditionStart, !1), document.removeEventListener("wnp.engine3d.groupConfigurator.stop", this.myBind.onEditionStop, !1), document.removeEventListener("wnp.widget.contextMenu.FurnitureEditorForGroup.closed", this.myBind.onEditBoxClosed, !1)
    }, t.prototype.startListening = function() {
        this.stopListening(), document.addEventListener("wnp.engine3d.groupConfigurator.start", this.myBind.onEditionStart, !1), document.addEventListener("wnp.engine3d.groupConfigurator.stop", this.myBind.onEditionStop, !1), document.addEventListener("wnp.widget.contextMenu.FurnitureEditorForGroup.closed", this.myBind.onEditBoxClosed, !1)
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
        wnp.UI.ContextMenu.close()
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
                action: "wnp.widget.contextMenu.FurnitureEditorForGroup.closed"
            }];
            wanaplan.isPublisher() && e.push({
                label: _("Add to products"),
                action: "wnp.request.object.addToProducts"
            });
            var n = [{
                content: [{
                    label: _("Group"),
                    type: "checkbox",
                    value: -1 == t.name.indexOf("group_virtual") ? !0 : !1,
                    eventParams: {
                        eventName: "wnp.engine3D.contextMenu.group"
                    }
                }]
            }];
            wnp.UI.ContextMenu.show({
                menuName: "FurnitureEditorForGroup",
                title: _("Group info"),
                width: 450,
                maxHeight: 200,
                height: 200,
                autoSize: !1
            }, n, e, !1, {
                furniture: t
            })
        }
    }, t.prototype.handlers = {
        onEditionStart: function() {
            this.openEditBox(this.edcmp.getSelectedObject())
        },
        onEditionStop: function() {
            this.closeEditBox()
        },
        onEditBoxClosed: function() {
            this._enabled = !1, ujs.notify("wnp.request.groupConfigurator.stop")
        }
    }, t
}();