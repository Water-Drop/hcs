var I18njs = function(t, e, n) {
    this._baseURL = t || "/l10n/", this._locale = e || "C", this._strings = n || {}, window._ = this.translate.bind(this)
};
I18njs.prototype.getLocale = function() {
    return this._locale
}, I18njs.prototype.setLocale = function(t, e) {
    this._locale = t || "C", this._loadLocale(e)
}, I18njs.prototype.translate = function(t, e) {
    if (e) {
        var n = "C" == this._locale ? "en_EN" : this._locale;
        if (e[n] && e[n][t])
            return e[n][t]
            }
    return this._strings[t] || t
}, I18njs.prototype._loadLocale = function(t) {
    var t = t || 1;
    if (this._strings = {}, "C" != this._locale) {
        var e = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
        e.open("GET", this._baseURL + this._locale + ".json?version=" + t, !1), e.onreadystatechange = function() {
            4 == e.readyState && (this._strings = JSON.parse(e.responseText))
        }.bind(this), e.send(null)
    }
};