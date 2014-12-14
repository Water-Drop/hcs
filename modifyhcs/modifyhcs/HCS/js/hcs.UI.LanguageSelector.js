var hcs = window.hcs || {};
hcs.UI = hcs.UI || {}, hcs.UI.LanguageSelector = function() {
    var t = null, e = "en", n = "", i = [{id: "en",label: "English (English)"}, {id: "es",label: "Spain (España)"}, {id: "fr",label: "French (Français)"}, {id: "pl",label: "Polish (Poland)"}, {id: "jp",label: "Japanese (Japan)"}], o = function() {
        hcs.UI.Frame.call(this, {maxWidth: 200,maxHeight: 220}, {title: _("Available languages")}), this.init = !1
    };
    return o.prototype = new hcs.UI.Frame, o.prototype.initialize = function() {
        if (hcs.UI.Frame.prototype.initialize.call(this), !this.init) {
            var t = [{title: _("Ok"),action: this.close.bind(this),label: _("Ok")}];
            this.setActionBar(t), this.init = !0, this.domElement.setAttribute("id", "languageSelector"), this.domElement.classList.add("language-selector");
            for (var n = document.getElementsByClassName("drawableSurface"), o = 0, r = n.length; r > o; o++)
                n[o].addEventListener("click", this.close, !1);
            var s = document.createElement("ul");
            s.setAttribute("class", "layout-list");
            var a = [];
            for (var o in i)
                a.push({label: i[o].label,groupName: "languages",isSelected: i[o].id == e ? !0 : !1,id: "lang_" + i[o].id,type: "radio",eventParams: this.onSelected});
            this.addForm(0, a, "Languages"), this.setLayout("vertical")
        }
    }, o.prototype.onSelected = function() {
        n = this.id.split("_")[1]
    }, o.show = function() {
        null == t && (t = new hcs.UI.LanguageSelector, t.initialize()), t._selectedLang = "", t.show()
    }, o.setLocal = function(t) {
        e = "C" == t ? "en" : t
    }, o.prototype.close = function() {
        t.domElement.style.display = "none", "" !== n && (hcsLocalStorage.setItem(hcs.Constants.LC_LANG_KEY, n), window.location.reload())
    }, o
}();