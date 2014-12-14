var ExitComponent = function() {
    var t, e = function(e) {
        BaseTopMenuComponent2D.call(this, e, "ExitComponent"), this._item = {
            title: "Exit",
            icon: "fa fa-sign-out",
            action: "hcs.request.exit",
            id: "toolbarExit",
            items: []
        }, t = this, document.addEventListener("hcs.request.exit", function() {
            t.exit()
        }, !1)
    };
    return e.prototype = Object.create(BaseTopMenuComponent2D.prototype), e.prototype.doExit = function() {
        if (hcsdesign.api.params.exitUrl) {
            var e = t.core.getOrigin();
            parent.postMessage({
                type: "refresh",
                url: hcsdesign.api.params.exitUrl
            }, e)
        }
        parent.postMessage({
            type: "planExit"
        }, t.core.getOrigin()), ujs.notify("hcs.request.exited")
    }, e.prototype.exit = function() {
        var e = {
            title: _("Exit"),
            message: _("Are you sure you want to leave this page"),
            buttonA: !0,
            buttonB: !0,
            buttonBText: _("Exit"),
            buttonAText: _("Cancel"),
            onClickB: function(e) {
                return t.doExit(e), !0
            }
        };
        hcs.UI.MessageBox.show(e)
    }, e
}();