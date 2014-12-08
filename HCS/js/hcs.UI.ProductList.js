var wnp = window.wnp || {};
wnp.UI = wnp.UI || {}, wnp.UI.ProductList = function() {
    function t(e) {
        var n = {};
        for (var i in e)
            n[i] = e[i] instanceof Object ? t(e[i]) : e[i];
        return n
    }
    var e = null, n = [], i = [], o = !1, r = function(t, n) {
        wnp.UI.Frame.call(this, {layout: "vertical",headerIcon: "images/productIconTitle.png"}, {title: _("物品列表")}), this.windowSize.maxWidth = window.innerWidth, this.windowSize.maxHeight = window.innerHeight, this.windowSize.width = (window.innerWidth - this.menuDOM.offsetWidth) / 1.5, this.windowSize.height = window.innerHeight / 1.5, _randomGET = n, this.core = t, null == e && (e = this, e.initProductList(function() {
                                                                                                                                                                                                                                                                                                                                                                                                                                      o = !0
                                                                                                                                                                                                                                                                                                                                                                                                                                      }), e.initialize())
    };
    return r.prototype = new wnp.UI.Frame, r.prototype.initialize = function() {
        wnp.UI.Frame.prototype.initialize.call(this), this.domElement.setAttribute("id", "productList")
    }, r.prototype.initProductList = function(t) {
        var t = t || function() {
        };
        /*ujs.ajax({method: "GET",url: [wnp.Constants.PRODUCTS_FILE].join(""),success: function(i) {
                 n = JSON.parse(i), t.call(e)
                 }})*/
		xmlHttp = new XMLHttpRequest();
		xmlHttp.open("GET", wnp.Constants.PRODUCTS_FILE, false);
		xmlHttp.send(null);
		n = JSON.parse(xmlHttp.responseText), t.call(e)
    }, r.prototype.addProduct = function(t, e) {
        var n = document.createElement("div");
        n.setAttribute("class", "product-item"), n.setAttribute("rel", t.id);
        var i = "models/previews/productsPlaceholder.png";
        t.preview && (i = wnp.Constants.PRODUCTS_PREVIEWS + t.preview);
        var o = document.createElement("span");
        o.setAttribute("class", "selected"), o.innerHTML = _("添加"), n.appendChild(o);
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
                                    n.innerHTML = _("正在加载 ..."), e.addTab("", null, "", !0), e.addTab(_("全部"), null, n, !0), e.loadProducts(t.id, n, t.filter), e.showContent(1)
                                }, r.show = function(t, n, i) {
                                    var i = i || {};
                                    null === e && (e = new wnp.UI.ProductList(t, n)), e.reinitContent(i), e.buildHeaderTitle(e.content.title + " > " + i.name), e.show()
                                }, r.close = function() {
                                    null !== e && e.close()
                                }, r.prototype.close = function() {
                                    ujs.notify("wnp.ui.frame.close"), this.domElement.style.display = "none", ujs.notify("wnp.menu.main.deselect")
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
