/*
 * Author：周珺
 * Date：2014/11/11
 * Email：kei0502@qq.com
 * 
 */
var hcs = window.hcs || {};
hcs.UI = hcs.UI || {}, hcs.UI.ProductList = function() {
    function t(e) {
        var n = {};
        for (var i in e)
            n[i] = e[i] instanceof Object ? t(e[i]) : e[i];
        return n
    }
    var e = null, n = [], i = [], o = !1, r = function(t, n) {
        hcs.UI.Frame.call(this, {layout: "vertical",headerIcon: "images/productIconTitle.png"}, {title: _("Products list")}), this.windowSize.maxWidth = window.innerWidth, this.windowSize.maxHeight = window.innerHeight, this.windowSize.width = (window.innerWidth - this.menuDOM.offsetWidth) / 1.5, this.windowSize.height = window.innerHeight / 1.5, _randomGET = n, this.core = t, null == e && (e = this, e.initProductList(function() {
            o = !0
        }), e.initialize())
    };
    return r.prototype = new hcs.UI.Frame, r.prototype.initialize = function() {
        hcs.UI.Frame.prototype.initialize.call(this), this.domElement.setAttribute("id", "productList")
    }, r.prototype.initProductList = function(t) {
        var t = t || function() {
        };
        ujs.ajax({method: "GET",url: [hcs.Constants.PRODUCTS_FILE, "?t=", _randomGET].join(""),success: function(i) {
                 n = JSON.parse(i), t.call(e)
            }})
    }, r.prototype.addProduct = function(t, e) {
        var n = document.createElement("div");
        n.setAttribute("class", "product-item"), n.setAttribute("rel", t.id);
        var i = "models/previews/productsPlaceholder.png";
        t.preview && (i = hcs.Constants.PRODUCTS_PREVIEWS + t.preview);
        var o = document.createElement("span");
        o.setAttribute("class", "selected"), o.innerHTML = _("Added"), n.appendChild(o);
        var r = document.createElement("span");
        r.setAttribute("class", "product-item-image");
        var s = document.createElement("img");
        s.setAttribute("src", i), r.addEventListener("click", this.onMenuItemButtonClick, !1), r.appendChild(s), n.appendChild(r);
        var a = document.createElement("span");
        a.setAttribute("class", "product-item-description"), a.setAttribute("rel", [t.action, "_", t.id].join(""));
        var l = t.translations ? _(t.title, t.translations) : _(t.title);
        a.innerHTML = l, n.appendChild(a), e.appendChild(n)
    }, r.prototype.loadProducts = function(t, r, s) {
        if (o === !0) {
            r.innerHTML = "";
            for (var a in n)
                if (n[a].id == t) {
                    i = n[a].items;
                    for (var l = 0; l < i.length; l++)
                        e.addProduct(i[l], r);
                    e.getTabsForFilters(s)
                }
        } else
            e.initProductList(function() {
                o = !0, e.loadProducts(t, r, s), e.show()
            })
    }, r.prototype.getTabsForFilter = function(t) {
        var n = t.split(":")[1] ? t.split(":")[1] : null, t = t.split(":")[0], o = {};
        n && (o[n] = document.createElement("div"));
        for (var r in i) {
            var s = i[r], a = s.params ? JSON.parse(s.params.params) || {} : {}, l = ujs.getProperty(a, t);
            l && -1 == Object.keys(o).indexOf(l.toString()) && (o[l] = document.createElement("div")), l ? e.addProduct(s, o[l]) : e.addProduct(s, o[n])
        }
        for (var h in o)
            e.addTab(_(t) + " " + h, null, o[h], !0)
    }, r.prototype.getTabsForFilters = function(t) {
        if (t)
            for (var e = t.split(","), n = 0; n < e.length; n++)
                this.getTabsForFilter(e[n])
    }, r.prototype.reinitContent = function(t) {
        e.tabs.innerHTML = "", e.tabContent.innerHTML = "";
        var n = document.createElement("div");
        n.innerHTML = _("Loading ..."), e.addTab("", null, "", !0), e.addTab(_("all"), null, n, !0), e.loadProducts(t.id, n, t.filter), e.showContent(1)
    }, r.show = function(t, n, i) {
        var i = i || {};
        null === e && (e = new hcs.UI.ProductList(t, n)), e.reinitContent(i), e.buildHeaderTitle(e.content.title + " > " + i.name), e.show()
    }, r.close = function() {
        null !== e && e.close()
    }, r.prototype.close = function() {
        ujs.notify("hcs.ui.frame.close"), this.domElement.style.display = "none", ujs.notify("hcs.menu.main.deselect")
    }, r.prototype.onMenuItemButtonClick = function(n) {
        var o = e.getDivNode(n.target), r = o.getAttribute("rel"), s = i[0], a = o.children[0];
        a.classList.add("show");
        for (var l = setInterval(function() {
            a.classList.remove("show"), clearInterval(l)
        }, 1500), h = 0; h < i.length; h++)
            r == i[h].id && (s = t(i[h]));
        var c = s.action, u = s.type, p = s.params, d = r;
        "" != c && "string" == typeof u && ujs.notify(c, {objectId: d,objectType: u,objectParams: p}, !0)
    }, r
}();
