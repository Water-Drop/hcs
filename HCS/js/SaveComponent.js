var SaveComponent = function() {
    var t, e = !1,
        n = function(e) {
            BaseTopMenuComponent2D.call(this, e, "SaveComponent"), this._item = {
                title: "Save",
                icon: "images/save_icon.png",
                action: "wnp.request.saveStructure",
                id: "toolbarSave",
                items: [],
                index: "2"
            }, document.addEventListener("wnp.request.saveStructure", this.saveStructure.bind(this), !1), window.addEventListener("message", function(e) {
                var n = JSON.parse(e.data);
                "save-plan" == n.action ? t.saveStructure(e) : "update-urls" == n.action && (n.planUrl && (t.core.api.planUrl = n.planUrl), n.newUrl && (t.core.api.newUrl = n.newUrl), n.screenshotUrl && (t.core.api.screenshotUrl = n.screenshotUrl), n.saveUrl && (t.core.api.saveUrl = n.saveUrl))
            }), t = this
        };
    return n.prototype = Object.create(BaseTopMenuComponent2D.prototype), n.prototype.startProcess = function() {
        e = !0
    }, n.prototype.endProcess = function() {
        e = !1
    }, n.prototype.saveStructure = function(n, i, o) {
        if (e !== !0) {
            this.startProcess();
            var i = i || n.callback || function() {};
            if (n.callback = !1, "planStructure" !== this.structure.name)
                t.sendToServer(t.core.structure.name, void 0, i, o);
            else {
                var r = new Date,
                    s = this.core.api.title || [_("My plan") + " ", r.getDay(), "/", r.getMonth(), "/", r.getFullYear(), " - ", Math.floor(100 * Math.random())].join(""),
                    a = "",
                    l = function(e) {
                        s = "" !== e.textInput ? e.textInput : s, a = "" !== e.textAreaInput ? e.textAreaInput : a, t.sendToServer(s, a, i, o)
                    },
                    h = {
                        title: _("Save a Plan"),
                        message: _("Choose a name for your plan"),
                        buttonBText: _("Save"),
                        buttonAText: _("Cancel"),
                        buttonA: !0,
                        buttonB: !0,
                        input: !0,
                        inputValue: s,
                        textArea: !0,
                        textAreaPlaceHolder: _("Enter a description"),
                        onClose: t.endProcess,
                        onClickB: l,
                        onClickA: function() {}
                    };
                wnp.UI.MessageBox.close(), wnp.UI.MessageBox.show(h)
            }
        }
    }, n.prototype.onError = function() {
        var e = t.core.saveLocalStructure(!1, !0),
            n = {
                title: _("Save a Plan"),
                message: _("An error occured during save, please try later."),
                buttonA: !0,
                buttonAText: _("Download a backup"),
                onClose: t.endProcess,
                onClickA: function() {
                    var n = t.core.getOrigin();
                    parent.postMessage({
                        type: "downloadFile",
                        name: "plan",
                        content: "data:text/html;base64," + btoa(e)
                    }, n), wnp.UI.MessageBox.close(), t.endProcess()
                }
            };
        wnp.UI.MessageBox.show(n)
    }, n.prototype.sendToServer = function(e, n, i, o) {
        var r = this.core.getPreviewImage(320, 240),
            s = this.core.engine2D.isEnabled() ? "2D" : "3D";
        t.core.structure.name = e;
        var a = t.core.saveLocalStructure(!1, !0),
            l = ["title=", encodeURIComponent(e), "&plan=", encodeURIComponent(a), "&preview=", r, "&previewMode=", s];
        if (t.core.api.params) {
            var h = t.core.api.params;
            "object" == typeof h && (h = JSON.stringify(h)), "string" == typeof h && l.push("&params=" + h)
        }
        t.core.api.id && l.push("&id=" + t.core.api.id), t.core.api.apiKey && l.push("&apikey=" + t.core.api.apiKey), n && l.push("&description=" + encodeURIComponent(n)), ujs.ajax({
            method: "POST",
            url: t.core.api.saveUrl,
            withCredentials: !0,
            params: l.join(""),
            onerror: function(e) {
                t.onError(e), o && o()
            },
            success: function(e) {
                var n = JSON.parse(e),
                    r = _("An error occured during save, please try later.");
                if ("ok" === n.status) {
                    t.core.saveStackToLocal(), r = _("Your plan has been saved."), t.core.structure.planId = !0;
                    var s = function() {};
                    if (n["refresh-url"]) {
                        var a = t.core.getOrigin();
                        r += "<br />" + _("you will be redirected ..."), s = function() {
                            parent.postMessage({
                                type: "refresh",
                                url: n["refresh-url"]
                            }, a)
                        }
                    }
                    parent.postMessage({
                        type: "planSaved"
                    }, t.core.getOrigin()), wnp.UI.MessageBox.show({
                        title: _("Save a Plan"),
                        message: r,
                        buttonAText: _("Close"),
                        buttonA: !0,
                        autoHide: !0,
                        onClose: s,
                        force: !0
                    }), n.params && (t.core.api.params = n.params), i(!0)
                } else
                    n.connectionUrl ? t.core._loginIframe(n.connectionUrl, n.frameWidth || Math.round(window.innerWidth / 2), n.frameHeight || Math.round(window.innerHeight / 2)) : t.onError(), o && o();
                t.endProcess()
            }
        })
    }, n
}();