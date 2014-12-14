var OptionsComponent = function() {
    var t = function(t) {
        BaseTopMenuComponent2D.call(this, t, "OptionsComponent"), this._item = {
            title: "Options",
            icon: "fa fa-cog",
            action: "optionMenu",
            id: "toolbarOption",
            selectionnable: !0,
            index: "3",
            items: [{
                title: "Change language",
                action: "hcs.request.changeLang",
                id: "toolbarChangeLanguage",
                index: 100
            }, {
                title: "<hr />",
                index: 1e5
            }, {
                title: "About Wanaplan",
                action: "hcs.ui.showAboutWindow",
                id: "toolbarAbout",
                index: 100001
            }]
        }
    };
    return t.prototype = Object.create(BaseTopMenuComponent2D.prototype), t
}();