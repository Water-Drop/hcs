var Stats = function() {
    var t = Date.now(), e = t, n = 0, i = 1 / 0, o = 0, r = 0, s = 1 / 0, a = 0, l = 0, h = 0, c = document.createElement("div");
    c.id = "stats", c.addEventListener("mousedown", function(t) {
                                       t.preventDefault(), _(++h % 2)
                                       }, !1), c.style.cssText = "width:80px;opacity:0.9;cursor:pointer";
    var u = document.createElement("div");
    u.id = "fps", u.style.cssText = "padding:0 0 3px 3px;text-align:left;background-color:#002", c.appendChild(u);
    var p = document.createElement("div");
    p.id = "fpsText", p.style.cssText = "color:#0ff;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px", p.innerHTML = "FPS", u.appendChild(p);
    var d = document.createElement("div");
    for (d.id = "fpsGraph", d.style.cssText = "position:relative;width:74px;height:30px;background-color:#0ff", u.appendChild(d); 74 > d.children.length; ) {
        var m = document.createElement("span");
        m.style.cssText = "width:1px;height:30px;float:left;background-color:#113", d.appendChild(m)
    }
    var g = document.createElement("div");
    g.id = "ms", g.style.cssText = "padding:0 0 3px 3px;text-align:left;background-color:#020;display:none", c.appendChild(g);
    var f = document.createElement("div");
    f.id = "msText", f.style.cssText = "color:#897364;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px", f.innerHTML = "MS", g.appendChild(f);
    var y = document.createElement("div");
    for (y.id = "msGraph", y.style.cssText = "position:relative;width:74px;height:30px;background-color:#897364", g.appendChild(y); 74 > y.children.length; )
        m = document.createElement("span"), m.style.cssText = "width:1px;height:30px;float:left;background-color:#131", y.appendChild(m);
    var _ = function(t) {
        switch (h = t) {
            case 0:
                u.style.display = "block", g.style.display = "none";
                break;
            case 1:
                u.style.display = "none", g.style.display = "block"
        }
    };
    return {REVISION: 11,domElement: c,setMode: _,getFps: function() {
        return r
    },begin: function() {
        t = Date.now()
    },end: function() {
        var h = Date.now();
        n = h - t, i = Math.min(i, n), o = Math.max(o, n), f.textContent = n + " MS (" + i + "-" + o + ")";
        var c = Math.min(30, 30 - 30 * (n / 200));
        return y.appendChild(y.firstChild).style.height = c + "px", l++, h > e + 1e3 && (r = Math.round(1e3 * l / (h - e)), s = Math.min(s, r), a = Math.max(a, r), p.textContent = r + " FPS (" + s + "-" + a + ")", c = Math.min(30, 30 - 30 * (r / 100)), d.appendChild(d.firstChild).style.height = c + "px", e = h, l = 0), h
    },update: function() {
        t = this.end()
    }}
};
"undefined" == typeof document || "classList" in document.createElement("a") || !function(t) {
    if ("HTMLElement" in t || "Element" in t) {
        var e = "classList", n = "prototype", i = (t.HTMLElement || t.Element)[n], o = Object, r = String[n].trim || function() {
            return this.replace(/^\s+|\s+$/g, "")
        }, s = Array[n].indexOf || function(t) {
            for (var e = 0, n = this.length; n > e; e++)
                if (e in this && this[e] === t)
                    return e;
            return -1
        }, a = function(t, e) {
            this.name = t, this.code = DOMException[t], this.message = e
        }, l = function(t, e) {
            if ("" === e)
                throw new a("SYNTAX_ERR", "An invalid or illegal string was specified");
            if (/\s/.test(e))
                throw new a("INVALID_CHARACTER_ERR", "String contains an invalid character");
            return s.call(t, e)
        }, h = function(t) {
            for (var e = r.call(t.className), n = e ? e.split(/\s+/) : [], i = 0, o = n.length; o > i; i++)
                this.push(n[i]);
            this._updateClassName = function() {
                t.className = this.toString()
            }
        }, c = h[n] = [], u = function() {
            return new h(this)
        };
        if (a[n] = Error[n], c.item = function(t) {
            return this[t] || null
            }, c.contains = function(t) {
            return t += "", -1 !== l(this, t)
            }, c.add = function() {
            var t, e = arguments, n = 0, i = e.length, o = !1;
            do
            t = e[n] + "", -1 === l(this, t) && (this.push(t), o = !0);
            while (++n < i);
            o && this._updateClassName()
            }, c.remove = function() {
            var t, e = arguments, n = 0, i = e.length, o = !1;
            do {
            t = e[n] + "";
            var r = l(this, t);
            -1 !== r && (this.splice(r, 1), o = !0)
            } while (++n < i);
            o && this._updateClassName()
            }, c.toggle = function(t, e) {
            t += "";
            var n = this.contains(t), i = n ? e !== !0 && "remove" : e !== !1 && "add";
            return i && this[i](t), !n
            }, c.toString = function() {
            return this.join(" ")
            }, o.defineProperty) {
            var p = {get: u,enumerable: !0,configurable: !0};
            try {
                o.defineProperty(i, e, p)
            } catch (d) {
                -2146823252 === d.number && (p.enumerable = !1, o.defineProperty(i, e, p))
            }
        } else
            o[n].__defineGetter__ && i.__defineGetter__(e, u)
            }
}(self), function() {
    function t() {
        e(), new MutationObserver(function(t) {
                                  t.forEach(function(t) {
                                            t.addedNodes && Array.forEach(t.addedNodes, function(t) {
                                                                          t instanceof Element && (t.childElementCount ? Array.forEach(t.querySelectorAll("input[type=range]"), n) : t.mozMatchesSelector("input[type=range]") && n(t))
                                                                          })
                                            })
                                  }).observe(document, {childList: !0,subtree: !0})
    }
    function e() {
        Array.forEach(document.querySelectorAll("input[type=range]"), n)
    }
    function n(t) {
        "range" != t.type && i(t)
    }
    function i(t) {
        function e(t) {
            if (C = !0, setTimeout(function() {
                                   C = !1
                                   }, 0), !t.button && S) {
                var e = parseFloat(getComputedStyle(this).width), o = (e - h.width) / S;
                if (o) {
                    var r = t.clientX - this.getBoundingClientRect().left - h.width / 2 - (L - A) * o;
                    Math.abs(r) > h.radius && (x = !0, this.value -= -r / o), D = L, B = t.clientX, this.addEventListener("mousemove", n, !0), this.addEventListener("mouseup", i, !0)
                }
            }
        }
        function n(e) {
            var n = parseFloat(getComputedStyle(this).width), i = (n - h.width) / S;
            if (i) {
                D += (e.clientX - B) / i, B = e.clientX, x = !0;
                var o = this.value;
                this.value = D, o != D && t.dispatchEvent(m)
            }
        }
        function i() {
            this.removeEventListener("mousemove", n, !0), this.removeEventListener("mouseup", i, !0), t.dispatchEvent(d), t.dispatchEvent(m)
        }
        function r(t) {
            t.keyCode > 36 && t.keyCode < 41 && (s.call(this), x = !0, this.value = L + (38 == t.keyCode || 39 == t.keyCode ? T : -T))
        }
        function s() {
            C || (this.style.boxShadow = l ? "inset 0 0 20px rgba(137,115,100,.1), 0 0 1px rgba(137,115,100,.4)" : "0 0 0 2px #DDD")
        }
        function g() {
            this.style.boxShadow = ""
        }
        function f(t) {
            return !isNaN(t) && +t == parseFloat(t)
        }
        function y() {
            A = f(t.min) ? +t.min : 0, E = f(t.max) ? +t.max : 100, A > E && (E = A > 100 ? A : 100), T = f(t.step) && t.step > 0 ? +t.step : 1, S = E - A, v(!0)
        }
        function _() {
            b || w || (L = t.getAttribute("value")), f(L) || (L = (A + E) / 2), L = Math.round((L - A) / T) * T + A, A > L ? L = A : L > E && (L = A + ~~(S / T) * T)
        }
        function v(e) {
            _();
            var n = x;
            if (x = !1, n && L != M && t.dispatchEvent(d), e || L != M) {
                M = L;
                var i = S ? (L - A) / S * 100 : 0, r = "-moz-element(#__sliderthumb__) " + i + "% no-repeat, ";
                o(t, {background: r + c})
            }
        }
        var b, w, x, C, M, D, B, A, E, T, S, L = t.value;
        a || (a = document.body.appendChild(document.createElement("hr")), o(a, {"-moz-appearance": l ? "scale-horizontal" : "scalethumb-horizontal",display: "block",visibility: "visible",opacity: 1,position: "fixed",top: "-999999px"}), document.mozSetImageElement("__sliderthumb__", a));
        var O = function() {
            return "" + L
        }, P = function I(e) {
            L = "" + e, b = !0, v(), delete t.value, t.value = L, t.__defineGetter__("value", O), t.__defineSetter__("value", I)
        };
        t.__defineGetter__("value", O), t.__defineSetter__("value", P), Object.defineProperty(t, "type", {get: function() {
                                                                                              return "range"
                                                                                              }}), ["min", "max", "step"].forEach(function(e) {
                                                                                                                                  t.hasAttribute(e) && (w = !0), Object.defineProperty(t, e, {get: function() {
                                                                                                                                                                                       return this.hasAttribute(e) ? this.getAttribute(e) : ""
                                                                                                                                                                                       },set: function(t) {
                                                                                                                                                                                       null === t ? this.removeAttribute(e) : this.setAttribute(e, t)
                                                                                                                                                                                       }})
                                                                                                                                  }), t.readOnly = !0, o(t, u), y(), new MutationObserver(function(e) {
                                                                                                                                                                                          e.forEach(function(e) {
                                                                                                                                                                                                    "value" != e.attributeName ? (y(), w = !0) : b || (L = t.getAttribute("value"), v())
                                                                                                                                                                                                    })
                                                                                                                                                                                          }).observe(t, p), t.addEventListener("mousedown", e, !0), t.addEventListener("keydown", r, !0), t.addEventListener("focus", s, !0), t.addEventListener("blur", g, !0)
    }
    function o(t, e) {
        for (var n in e)
            t.style.setProperty(n, e[n], "important")
            }
    var r = document.createElement("input");
    try {
        if (r.type = "range", "range" == r.type)
            return
            } catch (s) {
                return
            }
    if (r.style.background = "linear-gradient(red, red)", r.style.backgroundImage && "MozAppearance" in r.style) {
        var a, l = "MacIntel" == navigator.platform, h = {radius: l ? 9 : 6,width: l ? 22 : 12,height: l ? 16 : 20}, c = "linear-gradient(transparent " + (l ? "6px, #999 6px, #999 7px, #ccc 8px, #bbb 9px, #bbb 10px, transparent 10px" : "9px, #999 9px, #bbb 10px, #fff 11px, transparent 11px") + ", transparent)", u = {"min-width": h.width + "px","min-height": h.height + "px","max-height": h.height + "px",padding: "0 0 " + (l ? "2px" : "1px"),border: 0,"border-radius": 0,cursor: "default","text-indent": "-999999px"}, p = {attributes: !0,attributeFilter: ["min", "max", "step", "value"]}, d = document.createEvent("HTMLEvents");
        d.initEvent("input", !0, !1);
        var m = document.createEvent("HTMLEvents");
        m.initEvent("change", !0, !1), "loading" == document.readyState ? document.addEventListener("DOMContentLoaded", t, !0) : t(), addEventListener("pageshow", e, !0)
    }
}();