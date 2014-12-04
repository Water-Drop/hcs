var saveAs = saveAs || navigator.msSaveOrOpenBlob && navigator.msSaveOrOpenBlob.bind(navigator) || function(t) {
    "use strict";
    var e = t.document, n = function() {
        return t.URL || t.webkitURL || t
    }, i = t.URL || t.webkitURL || t, o = e.createElementNS("http://www.w3.org/1999/xhtml", "a"), r = !t.externalHost && "download" in o, s = function(n) {
        var i = e.createEvent("MouseEvents");
        i.initMouseEvent("click", !0, !1, t, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), n.dispatchEvent(i)
    }, a = t.webkitRequestFileSystem, l = t.requestFileSystem || a || t.mozRequestFileSystem, h = function(e) {
        (t.setImmediate || t.setTimeout)(function() {
                                         throw e
                                         }, 0)
    }, c = "application/octet-stream", u = 0, p = [], d = function() {
        for (var t = p.length; t--; ) {
            var e = p[t];
            "string" == typeof e ? i.revokeObjectURL(e) : e.remove()
        }
        p.length = 0
    }, m = function(t, e, n) {
        e = [].concat(e);
        for (var i = e.length; i--; ) {
            var o = t["on" + e[i]];
            if ("function" == typeof o)
                try {
                    o.call(t, n || t)
                } catch (r) {
                    h(r)
                }
        }
    }, g = function(e, i) {
        var h, d, g, f = this, y = e.type, _ = !1, v = function() {
            var t = n().createObjectURL(e);
            return p.push(t), t
        }, b = function() {
            m(f, "writestart progress write writeend".split(" "))
        }, w = function() {
            (_ || !h) && (h = v(e)), d ? d.location.href = h : window.open(h, "_blank"), f.readyState = f.DONE, b()
        }, x = function(t) {
            return function() {
                return f.readyState !== f.DONE ? t.apply(this, arguments) : void 0
            }
        }, C = {create: !0,exclusive: !1};
        return f.readyState = f.INIT, i || (i = "download"), r ? (h = v(e), o.href = h, o.download = i, s(o), f.readyState = f.DONE, void b()) : (t.chrome && y && y !== c && (g = e.slice || e.webkitSlice, e = g.call(e, 0, e.size, c), _ = !0), a && "download" !== i && (i += ".download"), (y === c || a) && (d = t), l ? (u += e.size, void l(t.TEMPORARY, u, x(function(t) {
                                                                                                                                                                                                                                                                                                                                                                      t.root.getDirectory("saved", C, x(function(t) {
                                                                                                                                                                                                                                                                                                                                                                                                        var n = function() {
                                                                                                                                                                                                                                                                                                                                                                                                        t.getFile(i, C, x(function(t) {
                                                                                                                                                                                                                                                                                                                                                                                                                          t.createWriter(x(function(n) {
                                                                                                                                                                                                                                                                                                                                                                                                                                           n.onwriteend = function(e) {
                                                                                                                                                                                                                                                                                                                                                                                                                                           d.location.href = t.toURL(), p.push(t), f.readyState = f.DONE, m(f, "writeend", e)
                                                                                                                                                                                                                                                                                                                                                                                                                                           }, n.onerror = function() {
                                                                                                                                                                                                                                                                                                                                                                                                                                           var t = n.error;
                                                                                                                                                                                                                                                                                                                                                                                                                                           t.code !== t.ABORT_ERR && w()
                                                                                                                                                                                                                                                                                                                                                                                                                                           }, "writestart progress write abort".split(" ").forEach(function(t) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   n["on" + t] = f["on" + t]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   }), n.write(e), f.abort = function() {
                                                                                                                                                                                                                                                                                                                                                                                                                                           n.abort(), f.readyState = f.DONE
                                                                                                                                                                                                                                                                                                                                                                                                                                           }, f.readyState = f.WRITING
                                                                                                                                                                                                                                                                                                                                                                                                                                           }), w)
                                                                                                                                                                                                                                                                                                                                                                                                                          }), w)
                                                                                                                                                                                                                                                                                                                                                                                                        };
                                                                                                                                                                                                                                                                                                                                                                                                        t.getFile(i, {create: !1}, x(function(t) {
                                                                                                                                                                                                                                                                                                                                                                                                                                     t.remove(), n()
                                                                                                                                                                                                                                                                                                                                                                                                                                     }), x(function(t) {
                                                                                                                                                                                                                                                                                                                                                                                                                                           t.code === t.NOT_FOUND_ERR ? n() : w()
                                                                                                                                                                                                                                                                                                                                                                                                                                           }))
                                                                                                                                                                                                                                                                                                                                                                                                        }), w)
                                                                                                                                                                                                                                                                                                                                                                      }), w)) : void w())
    }, f = g.prototype, y = function(t, e) {
        return new g(t, e)
    };
    return f.abort = function() {
        var t = this;
        t.readyState = t.DONE, m(t, "abort")
    }, f.readyState = f.INIT = 0, f.WRITING = 1, f.DONE = 2, f.error = f.onwritestart = f.onprogress = f.onwrite = f.onabort = f.onerror = f.onwriteend = null, t.addEventListener("unload", d, !1), y
}(self);