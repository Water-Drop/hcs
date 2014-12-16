var NewComponent = function() {
    var t, e = function(e) {
        BaseTopMenuComponent2D.call(this, e, "NewComponent"), this._item = {
            title: _("New"),
            icon: "fa fa-file",
            action: "wnp.request.newPlan",
            id: "toolbarNew",
            items: [],
            index: "0"
        }, t = this, document.addEventListener("wnp.request.newPlan", function() {
            t.launchProcess(), t.core.engine2D.bestZoom()
        }, !1)
    };
    return e.prototype = Object.create(BaseTopMenuComponent2D.prototype), e.prototype.createNewPlan = function() {
        ujs.notify("wnp.request.closePopup"), t.core.structure.clear(), t.core._createDefaultStructure(), t.core.engine2D.reinitialize(), t.core.setSelectedEngine(t.core.ENGINE_2D), t.core.saveLocalStructure(!1), t.core.structure.planId = -1, t.core.structure.name = "planStructure", ujs.triggerEvent(document.getElementById("draw2D"), "click"), ujs.notify("wnp.request.newPlanReady"), t.core.engine2D.bestZoom()
    }, e.prototype.launchProcess = function() {
        if (!t.core.api.newUrl || !t.core.api.saveUrl)
            return void t.createNewPlan();
        var e = [t.core.api.newUrl];
        if (t.core.api.params) {
            var n = -1 !== t.core.api.newUrl.indexOf("?") ? "&" : "?";
            e.push([n, "params=", JSON.stringify(t.core.api.params)].join(""))
        }
        var i = function() {
                ujs.ajax({
                    method: "GET",
                    url: e.join(""),
                    withCredentials: !0,
                    success: function(e) {
                        var n = JSON.parse(e);
                        if ("ok" === n.status)
                            n.saveUrl && (t.core.api.saveUrl = n.saveUrl), n.title && (t.core.api.planTitle = n.title), n.params && (t.core.api.params = JSON.parse(n.params)), t.createNewPlan();
                        else if (n.connectionUrl)
                            t.core._loginIframe(n.connectionUrl, n.frameWidth || Math.round(window.innerWidth / 2), n.frameHeight || Math.round(window.innerHeight / 2));
                        else {
                            var i = {
                                title: _("Save a Plan"),
                                message: n.message || _("Error occured during save."),
                                buttonA: !0,
                                buttonAText: _("Ok"),
                                onClickA: function() {
                                    wnp.UI.MessageBox.close()
                                }
                            };
                            wnp.UI.MessageBox.show(i)
                        }
                    }
                })
            },
            o = function() {
                ujs.notify("wnp.request.saveStructure", {
                    callback: i
                })
            };
        wnp.UI.MessageBox.show({
            title: _("New Plan"),
            message: _("Do you want to save your current plan?"),
            buttonCText: _("Yes"),
            buttonBText: _("No"),
            buttonAText: _("Cancel"),
            buttonA: !0,
            buttonB: !0,
            buttonC: !0,
            onClickC: o,
            onClickB: i,
            onClickA: function() {
                wnp.UI.MessageBox.close()
            }
        })
    }, e
}();