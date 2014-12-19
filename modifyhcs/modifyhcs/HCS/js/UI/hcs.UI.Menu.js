/*
 * Author: Zhou Jun
 * Function: 控制创建menu控件，包括初始化、创建、选择、删除不同颜色的item
 */
var hcs = window.hcs || {};
hcs.UI = hcs.UI || {}, hcs.UI.Menu = function() {
    function t(t) {
        var e = [];
        return e.push("background-color:rgb("), e.push(Math.floor(255 * t.r)), e.push(", "), e.push(Math.floor(255 * t.g)), e.push(", "), e.push(Math.floor(255 * t.b)), e.push(")"), e.join("")
    }
    var e = 0, n = function(t, e, n) {
        this.json = t || [], this.domElement = document.getElementById(e), this.params = n || {}, this.selected = this.params.selected || !1, this.inception = this.params.inception === !1 ? !1 : !0, this.oneClick = this.params.oneClick === !0 ? !0 : !1, this.initialize()
    };
    return n.prototype.initialize = function() {
        this.updateHtml()
    }, n.prototype.getWidth = function() {
        return this.domElement.offsetWidth || 0
    }, n.prototype.updateHtml = function(t) {
        if (t && t.id) {
            var e = this.domElement.querySelector("#" + t.id), n = this.buildItem(t, e.nodeName);
            e.parentNode.replaceChild(n, e)
        } else {
            this.domElement.innerHTML = "";
            for (var n, i = 0; i < this.json.length; i++)
                n = this.buildItem(this.json[i], "li"), this.domElement.appendChild(n)
                }
    }, n.prototype.buildItem = function(n, i) {
        var o = document.createElement(i);
        if (n.id = "undefined" != typeof n.id ? n.id : "item" + e++, o.id = n.id, n.noTitle = !1, 1 == n.texture) {
            var r = document.createElement("span");
            r.setAttribute("class", "menu-icon");
            var s = n.translations ? _(n.title, n.translations) : _(n.title);
            if (n.params.url) {
                n.noTitle = !0;
                var a = document.createElement("img"), l = n.icon || n.params.url;
                a.setAttribute("src", l), a.setAttribute("title", s), r.appendChild(a), o.appendChild(r)
            } else
                n.params.color && (n.noTitle = !0, r.setAttribute("style", t(n.params.color)), r.setAttribute("title", s), o.appendChild(r));
            if (n.colorable) {
                var h = document.createElement("div");
                h.setAttribute("class", "colorChooser");
                var c = t(n.params.addColor && n.params.addColor.color ? n.params.addColor.color : {r: 137 / 255,g: 184 / 255,b: 8 / 255});
                h.setAttribute("style", c), r.appendChild(h), r.classList.add("colorable"), h.item = n, h.addEventListener("click", this.onColorChooserClick.bind(this), !1)
            }
        } else if (n.icon) {
            var r = document.createElement("span");
            r.setAttribute("class", "menu-icon"), r.innerHTML = -1 == n.icon.indexOf(".") ? "<i class='" + n.icon + "'></i>" : "<img src='" + n.icon + "' />", o.appendChild(r)
        }
        if (n.title && n.noTitle === !1) {
            var s = n.translations ? _(n.title, n.translations) : _(n.title), u = document.createElement("span");
            u.setAttribute("class", "menu-title"), u.innerHTML = s, o.appendChild(u)
        }
        if (o.classList.add("menu-item"), n.context && o.classList.add("label-" + n.context), n == this.selected && o.classList.add("selected"), n.addClass)
            for (var p = n.addClass.split(" "), d = 0; d < p.length; d++)
                o.classList.add(p[d]);
        if (n.items && n.items.length > 0 && this.inception) {
            var m, g = document.createElement("ul");
            g.classList.add(n.layout), o.classList.add("menu-subitem"), n == this.selected && o.classList.add("opened");
            for (var f = 0; f < n.items.length; f++)
                n.items[f] == this.selected && o.classList.add("opened"), m = this.buildItem(n.items[f], "li"), g.appendChild(m);
            o.appendChild(g)
        }
        return o.addEventListener("click", function(t) {
                                  "UL" != t.target.tagName && (this.selected == n || o.classList.contains("opened") ? (this.deselect(), this.deselectElement(o)) : (ujs.notify("hcs.menu.click", this.buildEventItem(n)), (this.oneClick === !1 || n.selectionnable === !0) && (this.selected = n, this.selectElement(o)), n.action && ujs.notify(n.action, this.buildEventItem(n))), t.stopPropagation())
                                  }.bind(this), !1), o
    }, n.prototype.selectElement = function(t) {
        for (var e = this.domElement.querySelectorAll(".selected"), n = 0; n < e.length; n++)
            e[n].classList.remove("selected");
        t.classList.add("selected"), t.classList.contains("menu-subitem") && t.classList.add("opened")
    }, n.prototype.deselectElement = function(t) {
        t.classList.remove("selected"), t.classList.contains("menu-subitem") && t.classList.remove("opened")
    }, n.prototype.onColorChooserClick = function(t) {
        var e = t.target, n = e.item, i = function(t, i) {
            e.style.backgroundColor = "rgb(" + Math.round(255 * i.r) + "," + Math.round(255 * i.g) + "," + Math.round(255 * i.b) + ")";
            var o = n.params;
            o.addColor = {color: i}, n.colorId = t, this.selected = n, n.action && ujs.notify(n.action, this.buildEventItem(n))
        };
        hcs.UI.ColorPopup.show(i.bind(this), n.colorId), t.stopPropagation()
    }, n.prototype.buildEventItem = function(t) {
        var e = {};
        for (var n in t)
            e[n] = t[n];
        for (var n in t.params)
            e[n] = t.params[n];
        return delete e.items, e
    }, n.prototype.deselect = function(t, e) {
        var t = t || !1, e = e || !1;
        if (!this.selected || !e || this.selected.id === e) {
            if (this.selected.cancelAction) {
                var n = this.buildEventItem(this.selected);
                n.from = "deselect", ujs.notify(this.selected.cancelAction, n)
            }
            this.getDomItemById(this.selected.id) && this.deselectElement(this.getDomItemById(this.selected.id)), this.selected = t ? !1 : this.getParent(this.selected)
        }
    }, n.prototype.getParent = function(t) {
        for (var e = 0; e < this.json.length; e++)
            for (var n in this.json[e].items)
                if (this.json[e].items[n] == t)
                    return this.json[e];
        return !1
    }, n.prototype.deleteMenuItem = function(t) {
        var e = function(e, n) {
            return e.id == t ? n : !1
        }, n = this.traverse(this.json, void 0, e);
        if (n) {
            for (var i = this.json; n.length > 1; )
                i = i[n.shift()].items;
            i.splice(n[0], 1)
        }
    }, n.prototype.replaceMenuItem = function(t, e, n) {
        var i = this, n = n || !1, e = e || {}, o = function(o, r) {
            if (o.id == t) {
                var s = e;
                n === !0 && (s = ujs.mergeObjects(o, e, !0)), o == this.selected && (this.selected = s);
                var a = r.join(".items.");
                ujs.setProperty(i.json, a, s);
                for (var l in s)
                    e[l] = s[l];
                return !0
            }
            return !1
        };
        this.traverse(this.json, o)
    }, n.prototype.addMenuItem = function(t, e) {
        if (e.items || (e.items = []), "." !== t) {
            t = this.cleanPath(t);
            var n = ujs.getProperty(this.json, t);
            if (n !== !1 && "undefined" != typeof n) {
                if (e instanceof Array)
                    for (var i = 0; i < e.length; i++)
                        n.push(e[i]);
                else
                    n.push(e);
                this.sortJson(n)
            } else
                ujs.setProperty(this.json, t, e)
                } else
                    this.json.push(e), this.sortJson(this.json);
        this.updateHtml()
    }, n.prototype.getDomItemById = function(t) {
        if (t) {
            t = t.id || t;
            for (var e = this.domElement.getElementsByClassName("menu-item"), n = e.length; n--; )
                if (e[n].id == t)
                    return e[n]
                    }
    }, n.prototype.searchItem = function(t) {
        var e = function(e) {
            return e.id == t ? e : !1
        }, n = this.traverse(this.json, void 0, e);
        return n ? n : !1
    }, n.prototype.sortJson = function(t) {
        t && t.length > 0 && t.sort(function(t, e) {
                                    return t.index - e.index
                                    })
    }, n.prototype.traverse = function(t, e, n, i) {
        for (var e = e || function() {
             }, n = n || function() {
             return !1
             }, i = i || [], o = 0; o < t.length; o++) {
            if (e(t[o], i.concat(o)), n(t[o], i) !== !1)
                return i.push(o), n(t[o], i);
            if (t[o].items && t[o].items.length > 0) {
                var r = ujs.cloneArray(i);
                r.push(o);
                var s = this.traverse(t[o].items, e, n, r);
                if (s)
                    return s
                    }
        }
    }, n.prototype.getIdFromIdentifier = function(t) {
        var e = function(e, n) {
            return e.id == t ? n[n.length - 1] : !1
        }, n = this.traverse(this.json, void 0, e);
        return n ? n : 0
    }, n.prototype.cleanPath = function(t) {
        for (var t = t || "", e = t.split("."), n = 0; n < e.length; n++)
            isNaN(+e[n]) && (e[n] = this.getIdFromIdentifier(e[n]));
        return t = e.join(".items.") + ".items"
    }, n
}();
