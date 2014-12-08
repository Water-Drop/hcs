var GeneralOptionComponent2D = function() {
    var t = function(t) {
        BaseComponent2D.call(this, t, "GeneralOptionComponent2D")
    };
    return t.prototype = Object.create(BaseComponent2D.prototype), t.prototype.initialize = function() {
        this.priority = 0, this.startListening(), this.gridComp = wanaplan.getComponentByName("GridComponent2D"), this.roomComp = wanaplan.getComponentByName("RoomComponent2D"), this.wallComp = wanaplan.getComponentByName("WallComponent2D")
    }, t.prototype.startListening = function() {
        this.stopListening(), document.addEventListener("wnp.engine2D.contextMenu.generalOption.propertyChange", this.myBind.onPropertyChange, !1), document.addEventListener("wnp.request.2Doptions", this.myBind.onRequestPanel, !1), document.addEventListener("wnp.contextChanged", this.myBind.onContextChange, !1), this._listening = !0, this._injectMenu()
    }, t.prototype.stopListening = function() {
        this.initBindForThisInstance(), document.removeEventListener("wnp.engine2D.contextMenu.generalOption.propertyChange", this.myBind.onPropertyChange, !1), document.removeEventListener("wnp.request.2Doptions", this.myBind.onRequestPanel, !1), document.removeEventListener("wnp.contextChanged", this.myBind.onContextChange, !1), this._listening = !1, this._removeMenu()
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
    }, t.prototype.openGeneralOptionPanel = function() {
        var t = wanaplan.engine2D;
        t.setMode(t.MODE_CONTEXTMENU), wnp.UI.ContextMenu.show({
            title: _("General Settings")
        }, [{
            title: "Tab 1",
            content: this._getPanelParam()
        }], [{
            label: _("Ok"),
            action: "wnp.engine2D.contextMenu.close"
        }], 0)
    }, t.prototype._getPanelParam = function() {
        var t = [];
        return this.gridComp && t.push({
            label: _("display grid"),
            type: "checkbox",
            value: this.gridComp.displayGrid,
            eventParams: {
                cast: "boolean",
                property: "displayGrid",
                eventName: "wnp.engine2D.contextMenu.generalOption.propertyChange"
            }
        }), this.roomComp && t.push({
            label: _("display room name"),
            type: "checkbox",
            value: this.roomComp.displayRoomName,
            eventParams: {
                cast: "boolean",
                property: "displayRoomName",
                eventName: "wnp.engine2D.contextMenu.generalOption.propertyChange"
            }
        }), this.wallComp && t.push({
            label: _("display mesure"),
            type: "checkbox",
            value: this.wallComp.displayMesure,
            eventParams: {
                cast: "boolean",
                property: "displayMesure",
                eventName: "wnp.engine2D.contextMenu.generalOption.propertyChange"
            }
        }), t
    }, t.prototype._injectMenu = function() {
        wanaplan.getComponentByName("TopMenuComponent") && wanaplan.getComponentByName("TopMenuComponent").menu.json.length && (this._removeMenu(), setTimeout(function() {
            ujs.notify("wnp.menu.top.add", {
                item: {
                    id: "2D-options",
                    title: _("2D options"),
                    action: "wnp.request.2Doptions",
                    index: 2
                },
                menuPath: "toolbarOption"
            })
        }, 0))
    }, t.prototype._removeMenu = function() {
        ujs.notify("wnp.menu.top.delete", {
            id: "2D-options"
        })
    }, t.prototype.handlers = {
        onRequestPanel: function() {
            ujs.notify("wnp.menu.top.deselect"), this.openGeneralOptionPanel()
        },
        onPropertyChange: function(t) {
            var e = t.property,
                n = t.value;
            switch (e) {
                case "displayMesure":
                    this.wallComp && (this.wallComp.displayMesure = n);
                    break;
                case "displayRoomName":
                    this.roomComp && (this.roomComp.displayRoomName = n);
                    break;
                case "displayGrid":
                    this.gridComp && (this.gridComp.displayGrid = n)
            }
            wanaplan.engine2D.requestStaticDraw()
        }
    }, t
}();