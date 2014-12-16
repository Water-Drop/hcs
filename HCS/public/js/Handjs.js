var HANDJS = HANDJS || {};
!function() {
    function t() {
        D = !0, clearTimeout(B), B = setTimeout(function() {
                                                D = !1
                                                }, 700)
    }
    function e(t) {
        var e = [];
        if (t)
            for (e.unshift(t); t.parentNode; )
                e.unshift(t.parentNode), t = t.parentNode;
        return e
    }
    function n(t, n) {
        for (var i = e(t), o = e(n), r = null; i.length > 0 && i[0] == o.shift(); )
            r = i.shift();
        return r
    }
    function i(t, e, i) {
        for (var o = n(t, e), r = t, s = []; r && r != o; )
            f(r, "pointerenter") && s.push(r), r = r.parentNode;
        for (; s.length > 0; )
            i(s.pop())
            }
    function o(t, e, i) {
        for (var o = n(t, e), r = t; r && r != o; )
            f(r, "pointerleave") && i(r), r = r.parentNode
            }
    function r(t, e) {
        ["pointerdown", "pointermove", "pointerup", "pointerover", "pointerout"].forEach(function(n) {
                                                                                         window.addEventListener(t(n), function(t) {
                                                                                                                 !D && y(t.target, n) && e(t, n, !0)
                                                                                                                 })
                                                                                         }), void 0 === window["on" + t("pointerenter").toLowerCase()] && window.addEventListener(t("pointerover"), function(t) {
                                                                                                                                                                                  if (!D) {
                                                                                                                                                                                  var n = y(t.target, "pointerenter");
                                                                                                                                                                                  n && n !== window && (n.contains(t.relatedTarget) || i(n, t.relatedTarget, function(n) {
                                                                                                                                                                                                                                         e(t, "pointerenter", !1, n, t.relatedTarget)
                                                                                                                                                                                                                                         }))
                                                                                                                                                                                  }
                                                                                                                                                                                  }), void 0 === window["on" + t("pointerleave").toLowerCase()] && window.addEventListener(t("pointerout"), function(t) {
                                                                                                                                                                                                                                                                           if (!D) {
                                                                                                                                                                                                                                                                           var n = y(t.target, "pointerleave");
                                                                                                                                                                                                                                                                           n && n !== window && (n.contains(t.relatedTarget) || o(n, t.relatedTarget, function(n) {
                                                                                                                                                                                                                                                                                                                                  e(t, "pointerleave", !1, n, t.relatedTarget)
                                                                                                                                                                                                                                                                                                                                  }))
                                                                                                                                                                                                                                                                           }
                                                                                                                                                                                                                                                                           })
    }
    if (!window.PointerEvent) {
        Array.prototype.indexOf || (Array.prototype.indexOf = function(t) {
                                    var e = Object(this), n = e.length >>> 0;
                                    if (0 === n)
                                    return -1;
                                    var i = 0;
                                    if (arguments.length > 0 && (i = Number(arguments[1]), i != i ? i = 0 : 0 != i && 1 / 0 != i && i != -1 / 0 && (i = (i > 0 || -1) * Math.floor(Math.abs(i)))), i >= n)
                                    return -1;
                                    for (var o = i >= 0 ? i : Math.max(n - Math.abs(i), 0); n > o; o++)
                                    if (o in e && e[o] === t)
                                    return o;
                                    return -1
                                    }), Array.prototype.forEach || (Array.prototype.forEach = function(t, e) {
                                                                    if (!(this && t instanceof Function))
                                                                    throw new TypeError;
                                                                    for (var n = 0; n < this.length; n++)
                                                                    t.call(e, this[n], n, this)
                                                                    }), String.prototype.trim || (String.prototype.trim = function() {
                                                                                                  return this.replace(/^\s+|\s+$/, "")
                                                                                                  });
        var s = ["pointerdown", "pointerup", "pointermove", "pointerover", "pointerout", "pointercancel", "pointerenter", "pointerleave"], a = ["PointerDown", "PointerUp", "PointerMove", "PointerOver", "PointerOut", "PointerCancel", "PointerEnter", "PointerLeave"], l = "touch", h = "pen", c = "mouse", u = {}, p = function(t) {
            for (; t && !t.handjs_forcePreventDefault; )
                t = t.parentNode;
            return !!t || window.handjs_forcePreventDefault
        }, d = function(t, e, n, i, o) {
            var r;
            if (document.createEvent ? (r = document.createEvent("MouseEvents"), r.initMouseEvent(e, n, !0, window, 1, t.screenX, t.screenY, t.clientX, t.clientY, t.ctrlKey, t.altKey, t.shiftKey, t.metaKey, t.button, o || t.relatedTarget)) : (r = document.createEventObject(), r.screenX = t.screenX, r.screenY = t.screenY, r.clientX = t.clientX, r.clientY = t.clientY, r.ctrlKey = t.ctrlKey, r.altKey = t.altKey, r.shiftKey = t.shiftKey, r.metaKey = t.metaKey, r.button = t.button, r.relatedTarget = o || t.relatedTarget), void 0 === r.offsetX && (void 0 !== t.offsetX ? (Object && void 0 !== Object.defineProperty && (Object.defineProperty(r, "offsetX", {writable: !0}), Object.defineProperty(r, "offsetY", {writable: !0})), r.offsetX = t.offsetX, r.offsetY = t.offsetY) : Object && void 0 !== Object.defineProperty ? (Object.defineProperty(r, "offsetX", {get: function() {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          return this.currentTarget && this.currentTarget.offsetLeft ? t.clientX - this.currentTarget.offsetLeft : t.clientX
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          }}), Object.defineProperty(r, "offsetY", {get: function() {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     return this.currentTarget && this.currentTarget.offsetTop ? t.clientY - this.currentTarget.offsetTop : t.clientY
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     }})) : void 0 !== t.layerX && (r.offsetX = t.layerX - t.currentTarget.offsetLeft, r.offsetY = t.layerY - t.currentTarget.offsetTop)), r.isPrimary = void 0 !== t.isPrimary ? t.isPrimary : !0, t.pressure)
                r.pressure = t.pressure;
            else {
                var s = 0;
                void 0 !== t.which ? s = t.which : void 0 !== t.button && (s = t.button), r.pressure = 0 == s ? 0 : .5
            }
            if (r.rotation = t.rotation ? t.rotation : 0, r.hwTimestamp = t.hwTimestamp ? t.hwTimestamp : 0, r.tiltX = t.tiltX ? t.tiltX : 0, r.tiltY = t.tiltY ? t.tiltY : 0, r.height = t.height ? t.height : 0, r.width = t.width ? t.width : 0, r.preventDefault = function() {
                void 0 !== t.preventDefault && t.preventDefault()
                }, void 0 !== r.stopPropagation) {
                var a = r.stopPropagation;
                r.stopPropagation = function() {
                    void 0 !== t.stopPropagation && t.stopPropagation(), a.call(this)
                }
            }
            switch (r.pointerId = t.pointerId, r.pointerType = t.pointerType, r.pointerType) {
                case 2:
                    r.pointerType = l;
                    break;
                case 3:
                    r.pointerType = h;
                    break;
                case 4:
                    r.pointerType = c
            }
            i ? i.dispatchEvent(r) : t.target ? t.target.dispatchEvent(r) : t.srcElement.fireEvent("on" + v(e), r)
        }, m = function(t, e, n, i, o) {
            t.pointerId = 1, t.pointerType = c, d(t, e, n, i, o)
        }, g = function(t, e, n, i, o, r) {
            var s = e.identifier + 2;
            e.pointerId = s, e.pointerType = l, e.currentTarget = n, void 0 !== i.preventDefault && (e.preventDefault = function() {
                                                                                                     i.preventDefault()
                                                                                                     }), d(e, t, o, n, r)
        }, f = function(t, e) {
            return t.__handjsGlobalRegisteredEvents && t.__handjsGlobalRegisteredEvents[e]
        }, y = function(t, e) {
            for (; t && !f(t, e); )
                t = t.parentNode;
            return t ? t : f(window, e) ? window : void 0
        }, _ = function(t, e, n, i, o, r) {
            y(n, t) && g(t, e, n, i, o, r)
        }, v = function(t) {
            return t.toLowerCase().replace("pointer", "mouse")
        }, b = function(t, e) {
            var n = s.indexOf(e), i = t + a[n];
            return i
        }, w = function(t, e, n, i) {
            if (void 0 === t.__handjsRegisteredEvents && (t.__handjsRegisteredEvents = []), i) {
                if (void 0 !== t.__handjsRegisteredEvents[e])
                    return void t.__handjsRegisteredEvents[e]++;
                t.__handjsRegisteredEvents[e] = 1, t.addEventListener(e, n, !1)
            } else {
                if (-1 !== t.__handjsRegisteredEvents.indexOf(e) && (t.__handjsRegisteredEvents[e]--, 0 != t.__handjsRegisteredEvents[e]))
                    return;
                t.removeEventListener(e, n), t.__handjsRegisteredEvents[e] = 0
            }
        }, x = function(t, e, n) {
            if (t.__handjsGlobalRegisteredEvents || (t.__handjsGlobalRegisteredEvents = []), n) {
                if (void 0 !== t.__handjsGlobalRegisteredEvents[e])
                    return void t.__handjsGlobalRegisteredEvents[e]++;
                t.__handjsGlobalRegisteredEvents[e] = 1
            } else
                void 0 !== t.__handjsGlobalRegisteredEvents[e] && (t.__handjsGlobalRegisteredEvents[e]--, t.__handjsGlobalRegisteredEvents[e] < 0 && (t.__handjsGlobalRegisteredEvents[e] = 0));
            var i, o;
            switch (window.MSPointerEvent ? (i = function(t) {
                                             return b("MS", t)
                                             }, o = d) : (i = v, o = m), e) {
                case "pointerenter":
                case "pointerleave":
                    var r = i(e);
                    void 0 !== t["on" + r.toLowerCase()] && w(t, r, function(t) {
                                                              o(t, e)
                                                              }, n)
            }
        }, C = function(t) {
            var e = t.prototype ? t.prototype.addEventListener : t.addEventListener, n = function(t, n, i) {
                -1 != s.indexOf(t) && x(this, t, !0), void 0 === e ? this.attachEvent("on" + v(t), n) : e.call(this, t, n, i)
            };
            t.prototype ? t.prototype.addEventListener = n : t.addEventListener = n
        }, M = function(t) {
            var e = t.prototype ? t.prototype.removeEventListener : t.removeEventListener, n = function(t, n, i) {
                -1 != s.indexOf(t) && x(this, t, !1), void 0 === e ? this.detachEvent(v(t), n) : e.call(this, t, n, i)
            };
            t.prototype ? t.prototype.removeEventListener = n : t.removeEventListener = n
        };
        C(window), C(window.HTMLElement || window.Element), C(document), C(HTMLBodyElement), C(HTMLDivElement), C(HTMLImageElement), C(HTMLUListElement), C(HTMLAnchorElement), C(HTMLLIElement), C(HTMLTableElement), window.HTMLSpanElement && C(HTMLSpanElement), window.HTMLCanvasElement && C(HTMLCanvasElement), window.SVGElement && C(SVGElement), M(window), M(window.HTMLElement || window.Element), M(document), M(HTMLBodyElement), M(HTMLDivElement), M(HTMLImageElement), M(HTMLUListElement), M(HTMLAnchorElement), M(HTMLLIElement), M(HTMLTableElement), window.HTMLSpanElement && M(HTMLSpanElement), window.HTMLCanvasElement && M(HTMLCanvasElement), window.SVGElement && M(SVGElement);
        var D = !1, B = -1;
        !function() {
            window.MSPointerEvent ? r(function(t) {
                                      return b("MS", t)
                                      }, d) : (r(v, m), void 0 !== window.ontouchstart && (window.addEventListener("touchstart", function(e) {
                                                                                                                   for (var n = 0; n < e.changedTouches.length; ++n) {
                                                                                                                   var o = e.changedTouches[n];
                                                                                                                   u[o.identifier] = o.target, _("pointerover", o, o.target, e, !0), i(o.target, null, function(t) {
                                                                                                                                                                                       g("pointerenter", o, t, e, !1)
                                                                                                                                                                                       }), _("pointerdown", o, o.target, e, !0)
                                                                                                                   }
                                                                                                                   t()
                                                                                                                   }), window.addEventListener("touchend", function(e) {
                                                                                                                                               for (var n = 0; n < e.changedTouches.length; ++n) {
                                                                                                                                               var i = e.changedTouches[n], r = u[i.identifier];
                                                                                                                                               _("pointerup", i, r, e, !0), _("pointerout", i, r, e, !0), o(r, null, function(t) {
                                                                                                                                                                                                            g("pointerleave", i, t, e, !1)
                                                                                                                                                                                                            })
                                                                                                                                               }
                                                                                                                                               t()
                                                                                                                                               }), window.addEventListener("touchmove", function(e) {
                                                                                                                                                                           for (var n = 0; n < e.changedTouches.length; ++n) {
                                                                                                                                                                           var r = e.changedTouches[n], s = document.elementFromPoint(r.clientX, r.clientY), a = u[r.identifier];
                                                                                                                                                                           a && p(a) === !0 && e.preventDefault(), _("pointermove", r, a, e, !0), a !== s && (a && (_("pointerout", r, a, e, !0, s), a.contains(s) || o(a, s, function(t) {
                                                                                                                                                                                                                                                                                                                        g("pointerleave", r, t, e, !1, s)
                                                                                                                                                                                                                                                                                                                        })), s && (_("pointerover", r, s, e, !0, a), s.contains(a) || i(s, a, function(t) {
                                                                                                                                                                                                                                                                                                                                                                                        g("pointerenter", r, t, e, !1, a)
                                                                                                                                                                                                                                                                                                                                                                                        })), u[r.identifier] = s)
                                                                                                                                                                           }
                                                                                                                                                                           t()
                                                                                                                                                                           }), window.addEventListener("touchcancel", function(t) {
                                                                                                                                                                                                       for (var e = 0; e < t.changedTouches.length; ++e) {
                                                                                                                                                                                                       var n = t.changedTouches[e];
                                                                                                                                                                                                       _("pointercancel", n, u[n.identifier], t, !0)
                                                                                                                                                                                                       }
                                                                                                                                                                                                       })))
        }(), void 0 === navigator.pointerEnabled && (navigator.pointerEnabled = !0, navigator.msPointerEnabled && (navigator.maxTouchPoints = navigator.msMaxTouchPoints)), document.styleSheets && document.addEventListener && document.addEventListener("DOMContentLoaded", function() {
                                                                                                                                                                                                                                                           if (!HANDJS.doNotProcessCSS && void 0 === document.body.style.touchAction) {
                                                                                                                                                                                                                                                           var t = new RegExp(".+?{.*?}", "m"), e = new RegExp(".+?{", "m"), n = function(n) {
                                                                                                                                                                                                                                                           var i = t.exec(n);
                                                                                                                                                                                                                                                           if (i) {
                                                                                                                                                                                                                                                           var o = i[0];
                                                                                                                                                                                                                                                           n = n.replace(o, "").trim();
                                                                                                                                                                                                                                                           var r = e.exec(o)[0].replace("{", "").trim();
                                                                                                                                                                                                                                                           if (-1 != o.replace(/\s/g, "").indexOf("touch-action:none"))
                                                                                                                                                                                                                                                           for (var s = document.querySelectorAll(r), a = 0; a < s.length; a++) {
                                                                                                                                                                                                                                                           var l = s[a];
                                                                                                                                                                                                                                                           void 0 !== l.style.msTouchAction ? l.style.msTouchAction = "none" : l.handjs_forcePreventDefault = !0
                                                                                                                                                                                                                                                           }
                                                                                                                                                                                                                                                           return n
                                                                                                                                                                                                                                                           }
                                                                                                                                                                                                                                                           }, i = function(t) {
                                                                                                                                                                                                                                                           if (window.setImmediate)
                                                                                                                                                                                                                                                           t && setImmediate(i, n(t));
                                                                                                                                                                                                                                                           else
                                                                                                                                                                                                                                                           for (; t; )
                                                                                                                                                                                                                                                           t = n(t)
                                                                                                                                                                                                                                                           };
                                                                                                                                                                                                                                                           try {
                                                                                                                                                                                                                                                           for (var o = 0; o < document.styleSheets.length; o++) {
                                                                                                                                                                                                                                                           var r = document.styleSheets[o];
                                                                                                                                                                                                                                                           if (void 0 != r.href) {
                                                                                                                                                                                                                                                           var s = new XMLHttpRequest;
                                                                                                                                                                                                                                                           s.open("get", r.href), s.send();
                                                                                                                                                                                                                                                           var a = s.responseText.replace(/(\n|\r)/g, "");
                                                                                                                                                                                                                                                           i(a)
                                                                                                                                                                                                                                                           }
                                                                                                                                                                                                                                                           }
                                                                                                                                                                                                                                                           } catch (l) {
                                                                                                                                                                                                                                                           }
                                                                                                                                                                                                                                                           for (var h = document.getElementsByTagName("style"), o = 0; o < h.length; o++) {
                                                                                                                                                                                                                                                           var c = h[o], u = c.innerHTML.replace(/(\n|\r)/g, "").trim();
                                                                                                                                                                                                                                                           i(u)
                                                                                                                                                                                                                                                           }
                                                                                                                                                                                                                                                           }
                                                                                                                                                                                                                                                           }, !1)
    }
}();
