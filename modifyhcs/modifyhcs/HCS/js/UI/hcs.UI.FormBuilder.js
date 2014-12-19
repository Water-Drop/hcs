/*
 * Author: Zhou Jun
 * Function: 控制创建表格，包括初始化、创建按钮、按钮组、选择框、单选框、多选框等控件
 */
var hcs = window.hcs || {};
hcs.UI = hcs.UI || {}, hcs.UI.FormBuilder = function() {
    function t(t) {
        t.target.parentNode.children[1].value = this.value
    }
    function e(t) {
        var e = (t.target.parentNode.children[0], +this.min), n = +this.max;
        +this.value > n ? this.value = n : +this.value < e && (this.value = e), t.target.parentNode.children[0].value = this.value
    }
    var n = 0, i = function(t) {
        this.itemsContainer = "string" == typeof t ? document.getElementById(t) : t
    };
    return i.prototype.updateProperties = function(t) {
        this.itemsContainer.innerHTML = "";
        for (var e in t) {
            var n = null;
            switch (t[e].type) {
                case "button":
                    n = this.createButtonItem(t[e].label, t[e].value, t[e].eventParams, t[e].id);
                    break;
                case "buttons":
                    n = this.createButtonsItem(t[e].items, t[e].id);
                    break;
                case "checkbox":
                    n = this.createCheckboxItem(t[e].label, t[e].eventParams, t[e].value, t[e].unit, t[e].id);
                    break;
                case "html":
                    n = this.createHTMLItem(t[e].html);
                    break;
                case "number":
                    n = this.createSliderItem(t[e].label, t[e].eventParams, t[e].value, "number", t[e].unit, t[e].id);
                    break;
                case "radio":
                    n = this.createRadioItem(t[e].label, t[e].eventParams, t[e].groupName, t[e].isSelected, t[e].id);
                    break;
                case "separator":
                    n = this.createSeparatorItem(t[e].label);
                    break;
                case "select":
                    n = this.createSelectItem(t[e].label, t[e].eventParams, t[e].namesValues, t[e].selectedKey);
                    break;
                case "slider":
                    n = this.createSliderItem(t[e].label, t[e].eventParams, t[e].value, "range", t[e].unit, t[e].id);
                    break;
                case "spacer":
                    n = this.createSpacerItem();
                    break;
                case "text":
                case "password":
                    n = this.createInputTextItem(t[e].label, t[e].eventParams, t[e].value, t[e].unit, t[e].type, t[e].id)
            }
            if (null !== n) {
                if (t[e]["class"])
                    for (var i = t[e]["class"].split(" "), o = 0; o < i.length; o++)
                        n.classList.add(i[o]);
                n.setAttribute("id", t[e].id || "item-" + e), this.itemsContainer.appendChild(n)
            }
        }
    }, i.prototype.onItemAction = function() {
        var t = JSON.parse(this.getAttribute("event-params")), e = this.getAttribute("rel");
        this instanceof HTMLInputElement ? t.value = "checkbox" == this.type ? this.checked ? !0 : !1 : "int" == t.cast ? parseInt(this.value, 10) : "float" == t.cast ? parseFloat(this.value) : "bool" == t.cast || "boolean" == t.cast ? this.value ? !0 : !1 : this.value : this instanceof HTMLSelectElement && (t.value = "int" === t.cast ? +this.value : "float" === t.cast ? +this.value : this.value), ujs.notify(e, t)
    }, i.prototype.createSelectItem = function(t, e, i, o) {
        var r = document.createElement("li");
        r.setAttribute("class", "param-item");
        var s = document.createElement("label");
        s.innerHTML = " " + t, r.appendChild(s);
        var a = document.createElement("span");
        a.setAttribute("class", "field");
        var l = document.createElement("select");
        l.setAttribute("event-params", JSON.stringify(e)), l.setAttribute("rel", e.eventName);
        for (var h = null, c = 0, u = i.length; u > c; c++)
            h = document.createElement("option"), h.setAttribute("value", i[c].value), h.innerHTML = i[c].text, l.appendChild(h), i[c].value === o && h.setAttribute("selected", "selected");
        return l.addEventListener("change", this.onItemAction, !1), a.appendChild(l), r.appendChild(a), n++, r
    }, i.prototype.createSliderItem = function(n, i, o, r, s) {
        var r = r || "range";
        o.step = o.step || 1;
        var a = document.createElement("li");
        a.setAttribute("class", "param-item");
        var l = document.createElement("label");
        l.innerHTML = n;
        var h = document.createElement("span");
        h.setAttribute("class", "field");
        var c = document.createElement("input");
        c.setAttribute("type", r), c.setAttribute("min", o.min), c.setAttribute("max", o.max), c.setAttribute("value", o.value), c.setAttribute("step", o.step), c.setAttribute("event-params", JSON.stringify(i)), c.setAttribute("rel", i.eventName);
        var u = "";
        if ("range" == r && (u += " input-range"), s && (u += " unit"), "" != u && c.setAttribute("class", u), "range" == r && c.addEventListener("input", this.onItemAction, !1), c.addEventListener("change", this.onItemAction, !1), c.addEventListener("keydown", function(t) {
                                                                                                                                                                                                                                                           t.stopPropagation()
                                                                                                                                                                                                                                                           }, !1), h.appendChild(c), "range" == r) {
            var p = document.createElement("input");
            p.setAttribute("type", "number"), s && p.setAttribute("class", "unit"), p.setAttribute("min", o.min), p.setAttribute("max", o.max), p.setAttribute("value", o.value), p.setAttribute("step", o.step), p.setAttribute("event-params", JSON.stringify(i)), p.setAttribute("rel", i.eventName), p.addEventListener("change", this.onItemAction, !1), p.addEventListener("blur", e, !1), h.appendChild(p), c.addEventListener("input", t, !1), c.addEventListener("change", t, !1), p.addEventListener("keydown", function(t) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               t.stopPropagation()
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               }, !1)
        }
        var d = document.createElement("span");
        return s && (d.innerHTML = s, d.setAttribute("class", "unit")), h.appendChild(d), a.appendChild(l), a.appendChild(h), a
    }, i.prototype.createInputTextItem = function(t, e, i, o, r, s) {
        var a = document.createElement("li");
        a.setAttribute("class", "param-item");
        var l = document.createElement("label");
        l.setAttribute("for", s || "formBuilderCB_" + n), l.innerHTML = t, a.appendChild(l);
        var h = document.createElement("span");
        h.setAttribute("class", "field");
        var c = document.createElement("input");
        c.setAttribute("id", l.getAttribute("for"));
        var u = "string" == typeof r ? r : "text";
        c.setAttribute("type", u), c.setAttribute("value", i), "function" == typeof e ? c.addEventListener("change", e, !1) : e && (c.setAttribute("event-params", JSON.stringify(e)), c.setAttribute("rel", e.eventName), c.addEventListener("change", this.onItemAction, !1)), c.addEventListener("keydown", function(t) {
                                                                                                                                                                                                                                                                                                    t.stopPropagation()
                                                                                                                                                                                                                                                                                                    }, !1), h.appendChild(c);
        var p = document.createElement("span");
        return o && (p.innerHTML = o, p.setAttribute("class", "unit")), h.appendChild(p), a.appendChild(h), n++, a
    }, i.prototype.createCheckboxItem = function(t, e, i, o, r) {
        var s = document.createElement("li");
        s.setAttribute("class", "param-item");
        var a = document.createElement("label");
        a.setAttribute("for", r || "formBuilderCB_" + n), a.innerHTML = " " + t, s.appendChild(a);
        var l = document.createElement("span");
        l.setAttribute("class", "field");
        var h = document.createElement("input");
        h.setAttribute("type", "checkbox"), h.setAttribute("id", a.getAttribute("for")), h.setAttribute("class", "cb-switch"), i && h.setAttribute("checked", "checked"), "function" == typeof e ? h.addEventListener("click", e, !1) : e && (h.setAttribute("event-params", JSON.stringify(e)), h.setAttribute("rel", e.eventName), h.addEventListener("click", this.onItemAction, !1)), l.appendChild(h);
        var c = document.createElement("span");
        return o && (c.innerHTML = o, c.setAttribute("class", "unit")), l.appendChild(c), s.appendChild(l), n++, s
    }, i.prototype.createButtonItem = function(t, e, i, o, r) {
        var s = document.createElement("li");
        s.setAttribute("class", "param-item");
        var a = document.createElement("label");
        a.setAttribute("for", r || "formBuilderBT_" + n), a.innerHTML = t, s.appendChild(a);
        var l = document.createElement("span");
        l.setAttribute("class", "field");
        var h = document.createElement("button");
        h.innerHTML = e, h.setAttribute("id", a.getAttribute("for")), h.setAttribute("event-params", JSON.stringify(i)), h.setAttribute("rel", i.eventName), "function" == typeof i ? h.addEventListener("click", i, !1) : i && h.addEventListener("click", this.onItemAction, !1), l.appendChild(h);
        var c = document.createElement("span");
        return o && (c.innerHTML = o, c.setAttribute("class", "unit")), l.appendChild(c), s.appendChild(l), n++, s
    }, i.prototype.createButtonsItem = function(t) {
        var e = document.createElement("li");
        e.setAttribute("class", "param-item");
        var n = t.length, i = document.createElement("label");
        i.innerHTML = " " + labelParams, e.appendChild(i);
        var o = document.createElement("span");
        o.setAttribute("class", "field");
        var r = document.createElement("div");
        r.setAttribute("class", "stacked_" + n), o.appendChild(r);
        for (var s = 0, a = n; a > s; s++) {
            var l = document.createElement("button");
            l.innerHTML = t[s].value, l.setAttribute("event-params", JSON.stringify(t[s].eventParams)), l.setAttribute("rel", t[s].eventParams.eventName), l.addEventListener("click", this.onItemAction, !1), r.appendChild(l)
        }
        var h = document.createElement("span");
        return unit && (h.innerHTML = unit, h.setAttribute("class", "unit")), o.appendChild(h), e.appendChild(o), e
    }, i.prototype.createSpacerItem = function() {
        var t = this.createHTMLItem("");
        return t.children[0].setAttribute("class", "spacer"), t
    }, i.prototype.createHTMLItem = function(t) {
        var e = document.createElement("li");
        e.setAttribute("class", "param-item");
        var n = document.createElement("div");
        return n.innerHTML = t, e.appendChild(n), e
    }, i.prototype.createSeparatorItem = function(t) {
        var e = document.createElement("li");
        e.setAttribute("class", "separator");
        var n = document.createElement("label");
        n.innerHTML = "undefined" != typeof t ? t : "", e.appendChild(n);
        var i = document.createElement("span");
        i.setAttribute("class", "field"), e.appendChild(i);
        var o = document.createElement("hr");
        return i.appendChild(o), e
    }, i.prototype.createRadioItem = function(t, e, i, o, r) {
        var s = document.createElement("li");
        s.setAttribute("class", "param-item");
        var a = document.createElement("label");
        a.setAttribute("for", r || "formBuilderRD_" + n), a.innerHTML = t, s.appendChild(a);
        var l = document.createElement("span");
        l.setAttribute("class", "field");
        var h = document.createElement("input");
        return h.setAttribute("id", a.getAttribute("for")), h.setAttribute("name", i), h.setAttribute("type", "radio"), o && h.setAttribute("checked", "checked"), "function" == typeof e ? h.addEventListener("click", e, !1) : e && (h.addEventListener("click", this.onItemAction, !1), h.setAttribute("rel", e.eventName), h.setAttribute("event-params", JSON.stringify(e))), l.appendChild(h), s.appendChild(l), n++, s
    }, i
}();
