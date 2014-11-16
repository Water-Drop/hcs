var ujs = function() {
    var t = {};
    return t.triggerEvent = function(e, n) {
        if (n instanceof Array)
            for (var i = 0, o = n.length; o > i; i++)
                t.triggerEvent(e, n[i]);
        else
            e[n] && "function" == typeof e[n] && e[n](e)
        }, t.notify = function(t, e) {
            var n = document.createEvent("HTMLEvents");
            if (n.initEvent(t, !0, !1), "object" == typeof e)
                for (var i in e)
                    n[i] = e[i];
            try {
                document.dispatchEvent(n)
            } catch (o) {
                Logger.warning("[ujs.notify]", o)
            }
        }, t.getURLParameter = function(t) {
            for (var e = document.location.href.split("?"), n = e[1], i = n.split("&"), o = 0, r = i.length, s = null; r > o && null == s; ) {
                var a = i[o].split("=");
                a[0] == t && (s = a[1]), o++
            }
            return s
        }, t.addOnAttribute = function(t, e, n) {
            var i = "style" == t ? ";" : " ", o = e.getAttribute(t), r = !1, s = [];
            if (null != o && "" != o) {
                s = o.split(i);
                for (var a = s.length, l = 0; a > l && !r; )
                    s[l] == n && (r = !0), l++
            }
            r || s.push(n), e.setAttribute(t, s.join(" "))
        }, t.removeOnAttribute = function(t, e, n) {
            if ("object" == typeof e) {
            var i = "style" == t ? ";" : " ", o = e.getAttribute(t);
            if (null != o && "" != o) {
                for (var r = o.split(i), s = (r.length, []), a = 0, l = r.length; l > a; a++)
                    r[a] != n && s.push(r[a]);
                e.setAttribute(t, s.join(i))
                }
            }
        }, t.addClass = function(e, n) {
            if (n instanceof Array)
                for (var i = 0, o = n.length; o > i; i++)
                    t.addOnAttribute("class", e, n[i]);
            else
                t.addOnAttribute("class", e, n)
        }, t.removeClass = function(e, n) {
            if (n instanceof Array)
                for (var i = 0, o = n.length; o > i; i++)
                    t.removeOnAttribute("class", e, n[i]);
            else
                t.removeOnAttribute("class", e, n)
        }, t.replaceClass = function(e, n, i) {
            if (e instanceof Array)
                for (var o = 0, r = e.length; r > o; o++)
                    t.removeClass(e[o], n), t.addClass(e[o], i);
            else
                t.removeClass(e, n), t.addClass(e, i)
            }, t.removeClasses = function(t) {
                t.setAttribute("class", "")
            }, t.addStyle = function(e, n) {
                if (n instanceof Array)
                    for (var i = 0, o = n.length; o > i; i++)
                        t.addOnAttribute("style", e, n[i]);
                else
                    t.addOnAttribute("style", e, n)
            }, t.removeStyle = function(e, n) {
                if (n instanceof Array)
                    for (var i = 0, o = n.length; o > i; i++)
                        t.removeOnAttribute("style", e, n[i]);
                t.removeOnAttribute("style", e, n)
            }, t.hasClass = function(t, e) {
                var n = t.getAttribute("class"), i = !1;
                if (null != n)
                    for (var o = n.split(" "), r = 0, s = o.length; s > r && !i; )
                        o[r] == e && (i = !0), r++;
                return i
            }, t.mergeObjects = function(e, n, i, o) {
                var i = i === !0 ? !0 : !1, r = "array" == o ? [] : {};
                for (var s in e)
                    e.hasOwnProperty(s) && (r[s] = e[s]);
                for (var s in n)
                    n.hasOwnProperty(s) && "undefined" != typeof n[s] && (r[s] = n[s] instanceof Array && i ? t.mergeObjects(r[s], n[s], i, "array") : n[s] instanceof Object && i ? t.mergeObjects(r[s], n[s]) : n[s]);
                return r
            }, t.getProperty = function(t, e) {
                var n, i, o = e.split(".");
                for (n = 0; n < o.length; n++) {
                    if (i = t[o[n]], n == o.length - 1)
                        return t[o[n]];
                    void 0 === i && (i = t[o[n]] = {}), t = i
                }
                return !1
            }, t.setProperty = function(t, e, n) {
                var i, o, r = e.split(".");
                for (i = 0; i < r.length; i++)
                    o = t[r[i]], void 0 !== n && i == r.length - 1 ? o = t[r[i]] = n : void 0 === o && (o = t[r[i]] = {}), t = o;
                return t
            }, t.ajax = function(t) {
                var e, n = t.url, i = t.method || "GET", o = t.params || "", r = t.success || null, s = t.onerror || null, a = "undefined" != typeof t.async ? t.async : !0, l = "undefined" != typeof t.withCredentials ? t.withCredentials : !1;
                if (e = "undefined" != typeof window ? window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest, t.mimeType && e.overrideMimeType(t.mimeType), "POST" == i)
                    e.open("POST", n, a), l && (e.withCredentials = !0), e.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), e.onreadystatechange = function() {
                        4 == e.readyState && 200 == e.status ? null != r && r(e.responseText) : 4 == e.readyState && 200 != e.status && null != s && s()
                    }, e.send(o);
                else {
                    var h = "" != o ? n + "?" + o : n;
                    e.open("GET", h, a), l && (e.withCredentials = !0), e.onreadystatechange = function() {
                        4 == e.readyState && 200 == e.status ? null != r && r(e.responseText) : 4 == e.readyState && 200 != e.status && null != s && s()
                    }, e.send(null)
                }
            }, t.post = function(e, n) {
                var n = n || {};
                return n.method = "POST", n.url = e, t.ajax(n)
            }, t.loadCSS = function(t, e) {
                var n = document.createElement("link");
                if (n.setAttribute("rel", "stylesheet"), n.setAttribute("type", "text/css"), n.setAttribute("href", t), "object" == typeof e)
                    for (var i in e)
                        n.setAttribute(i, e[i]);
                document.getElementsByTagName("head")[0].appendChild(n)
            }, t.loadJavaScript = function(t, e) {
                var n = document.createElement("script");
                if (n.setAttribute("src", t), "object" == typeof e)
                    for (var i in e)
                        n.setAttribute(i, e[i]);
                document.getElementsByTagName("body")[0].appendChild(n)
            }, t.inArray = function(t, e) {
                return e.indexOf(t) > -1
            }, t.cloneArray = function(e, n) {
                for (var i = [], n = n || !1, o = 0, r = e.length; r > o; o++)
                    i[o] = n ? object[o] instanceof Array ? t.cloneArray(e[o]) : e[o] instanceof Object ? t.cloneObject(e[o]) : e[o] : e[o];
                return i
            }, t.cloneObject = function(e) {
                var n = {};
                for (var i in e)
                    e.hasOwnProperty(i) && (n[i] = e[i] instanceof Array ? t.cloneArray(e[i]) : e[i] instanceof Object ? t.cloneObject(e[i]) : e[i]);
                return n
            }, t.insertSorted = function(t, e, n) {
                var i = 0;
                if (0 == n.length)
                    n.push(t);
                else {
                    for (; i < n.length && e(t, n[i]) > 0; )
                        i++;
                    n.splice(i, 0, t)
                }
                return n
            }, t.getByClass = function(t) {
                return document.getElementsByClassName(t)
            }, t.getByTag = function(t) {
                return document.getElementsByTagName(t)
            }, t.getById = function(t) {
                return document.getElementById(t)
            }, t.isDef = function(t) {
                return "undefined" != typeof t
            }, t.removeSpaces = function(t) {
                var e = new RegExp("[ ]+", "g");
                return t.replace(e, "")
            }, t.stringToFunction = function(t) {
                for (var e = t.split("."), n = window || this, i = 0, o = e.length; o > i; i++)
                    n = n[e[i]];
                if ("function" != typeof n)
                    throw new Error("function not found");
                return n
            }, t.deserializeObject = function(e, n, i, o) {
                var r, s = null;
                if (e && e.class && e.class.name && !n) {
                    var a = t.stringToFunction(e.class.name);
                    s = a.Deserialize(e)
                } else if (e instanceof Array) {
                    if (0 == e.length)
                        return s;
                    s = n || [];
                    for (var l = 0; l < e.length; l++)
                        r = t.deserializeObject(e[l]), null !== r && s.push(r)
                } else if (e instanceof Object) {
                    s = n || {};
                    for (var h in e)
                        (!i || i && -1 != i.indexOf(h)) && (!o || o && -1 == o.indexOf(h)) && (r = t.deserializeObject(e[h]), null !== r && (s[h] = r))
                } else
                    void 0 !== s && (s = e);
                return s
            }, t.serializeObject = function(e, n, i, o) {
                var r, s;
                if (e && e.serialize && !n)
                    r = e.serialize();
                else if (e instanceof Array) {
                    r = [];
                    for (var a = 0; a < e.length; a++)
                        r.push(t.serializeObject(e[a]));
                    if (0 == r.length)
                        return null
                } else if (e instanceof Object) {
                    if (!(e instanceof Function)) {
                        r = n || {};
                        for (var l in e)
                            e.hasOwnProperty(l) && (!i || i && -1 != i.indexOf(l)) && (!o || o && -1 == o.indexOf(l)) && (s = t.serializeObject(e[l]), void 0 !== s && null !== s && (r[l] = s))
                    }
                } else
                    r = e;
                return r
            }, t
}(), ujs = window.ujs || {};
ujs.Math = ujs.Math || {}, function() {
    ujs.Math.getRandomInt = function(t, e) {
        return Math.floor(Math.random() * (e - t + 1)) + t
    }, ujs.Math.clamp = function(t, e, n) {
        return e > t ? e : t > n ? n : t
    }, ujs.Math.lerp = function(t, e, n) {
        return n = 0 > n ? 0 : n, n = n > 1 ? 1 : n, t + (e - t) * n
    }, ujs.Math.sign = function(t) {
        return 0 > t ? -1 : 1
    }
}();
