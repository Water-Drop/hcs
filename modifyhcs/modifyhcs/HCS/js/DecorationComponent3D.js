var DecorationComponent3D = function() {
    function t(t) {
        "object" == typeof t && ("keydown" == t.type && 27 != t.keyCode || "mousedown" == t.type && 0 == t.button) || (n = null, ujs.notify("hcs.menu.main.deselect"), hcsdesign.engine3D.mode = hcsdesign.engine3D.MODE_NORMAL, hcsdesign.engine3D.canvas.classList.remove("brush"))
    }
    var e, n = null,
        i = 0,
        o = function(t) {
            BaseComponent3D.call(this, t, "DecorationComponent3D"), this.tabs = [], window.ejecta || (this.tabs = document.getElementsByClassName("menu-tab")), e = this, this.historycmp = null, this.PAINTACTION = 0, this.setupHistory(), this.standardMaps = ["map", "bumpMap", "normalMap", "specularMap"], document.addEventListener("hcs.core.structure.loaded", this.initializeLastColor.bind(this), !1)
        };
    return o.prototype = new BaseComponent3D, o.prototype.initializeLastColor = function() {
        var t = this.core.structure.lastMaterialsUsed.length > 0 ? "" : " hidden",
            e = this.core.structure.lastMaterialsUsed.length > 0 ? this.cleanJson(this.core.structure.lastMaterialsUsed) : [],
            n = {
                id: "last_colors",
                title: _("最近使用颜色"),
                index: 5,
                addClass: "last-color-item" + t,
                layout: "layout-table-60",
                items: e
            };
        ujs.notify("hcs.menu.main.add", {
            item: n,
            menuPath: /*"decorate3D",*/ "furnishing3D",
            position: 0
        })
    }, o.prototype.destroy = function() {
        ujs.notify("hcs.menu.main.remove", {
            item: "furnishing3D"
        }), ujs.notify("hcs.menu.main.remove", {
            item: "decorate3D"
        })
    }, o.prototype.cleanJson = function(t) {
        for (var e in t)
            t.hasOwnProperty(e) && (t[e] instanceof Object ? t[e] = this.cleanJson(t[e]) : "string" == typeof t[e] && -1 !== t[e].indexOf("http://") && (t[e] = GlobalHelper.stripDomainUrl(t[e], "hcsdesign.")));
        return t
    }, o.prototype.initialize = function() {
        var t = this,
            e = "http://v2.hcsdesign.fr/data/menu.content.compiled.json";
        window.ejecta && (e = "Wanaplan/" + e);
        var n = function() {
            ujs.ajax({
                url: e,
                method: "GET",
                params: ["t=", Math.round(100 * Math.random())].join(""),
                success: function(e) {
                    var n = JSON.parse(e);
                    n = t.cleanJson(n), ujs.notify("hcs.menu.main.add", {
                        item: n,
                        menuPath: "decorate3D",
                        position: 0
                    })
                }
            })
        };
        ujs.ajax({
            url: hcs.Constants.TEXTURES_FILE,
            method: "GET",
            params: ["t=", Math.round(100 * Math.random())].join(""),
            success: function(e) {
                try {
                    var i = JSON.parse(e);
                    i = t.cleanJson(i), ujs.notify("hcs.menu.main.add", {
                        item: i,
                        menuPath: "decorate3D",
                        position: 0
                    })
                } catch (o) {
                    Logger.message("BAD JSON FILE"), n()
                }
            },
            onerror: n
        })
    }, o.prototype.startListening = function() {
        document.addEventListener("hcs.request.changeEngine", this.onChangeEngine, !1), document.addEventListener("hcs.engine3D.paint", this.onPaintHandler, !1), document.addEventListener("hcs.engine3D.click.collided", this.onClick, !1), document.addEventListener("keydown", t, !1)
    }, o.prototype.stopListening = function() {
        document.removeEventListener("hcs.request.changeEngine", this.onChangeEngine, !1), document.removeEventListener("hcs.engine3D.paint", this.onPaintHandler), document.removeEventListener("hcs.engine3D.click.collided", this.onClick, !1), document.removeEventListener("keydown", t)
    }, o.prototype.onContextChanged = function(e) {
        if ("3D" == e) {
            if (!this.initialized) {
                this.startListening();
                for (var n = 0, i = this.tabs.length; i > n; n++)
                    this.tabs[n].addEventListener("click", t, !1);
                this.initialized = !0
            }
        } else if (this.initialized) {
            for (var n = 0, i = this.tabs.length; i > n; n++)
                this.tabs[n].removeEventListener("click", t, !1);
            this.initialized = !1
        }
    }, o.prototype.onPaintHandler = function(t) {
        e.core.helpBubbleManager.display("hcs.3d.paint");
        var i = t.params || {};
        n = {
            title: t.title,
            action: "hcs.engine3D.paint",
            params: i,
            texture: !0
        }, hcsdesign.engine3D.mode = e.engine3D.MODE_PAINT, hcsdesign.engine3D.canvas.classList.add("brush"), ujs.notify("hcs.engine3D.brushReady")
    }, o.prototype.updateLastItemMenu = function(t) {
        for (var e = !1, n = 0; n < hcsdesign.structure.lastMaterialsUsed.length; n++)
            t.title == hcsdesign.structure.lastMaterialsUsed[n].title && (e = !0);
        e === !1 && (hcsdesign.structure.lastMaterialsUsed.push(ujs.cloneObject(t)), ujs.notify("hcs.menu.main.replace", {
            item: {
                id: "last_colors",
                addClass: "last-color-item",
                items: hcsdesign.structure.lastMaterialsUsed
            },
            merge: !0
        }, !0)), this.core.structure.lastMaterialsUsed.length > 21 && this.core.structure.lastMaterialsUsed.splice(0, this.core.structure.lastMaterialsUsed.length - 21)
    }, o.prototype.onClick = function(o) {
        if (null != n) {
            var r = hcs.MaterialFactory.ImportWNPMaterial(n.params);
            r.isDefault = !1;
            var s = o.collided.pickedMesh.getTopLevelObject();
            if (s.isDecorable) {
                if (s.decorate)
                    var a = s.decorate(r, o.collided);
                else
                    var a = e.decorate(o.collided.pickedMesh, r, o.collided);
                r.backFaceCulling = a ? a.backFaceCulling : !1
            }
            e.updateLastItemMenu(n), ujs.notify("hcs.request.historyAction", {
                component: e,
                object: s,
                params: {
                    oldMaterial: a,
                    newMaterial: r,
                    collided: o.collided
                },
                action: e.PAINTACTION
            }), n && e.updateLastItemMenu(n), ujs.notify("hcs.engine3D.decorate", {
                material: r
            }), 1 >= i && t()
        }
    }, o.prototype.decorate = function(t, e) {
        t.material = e
    }, o.prototype.applyMaterial = function(t, n, i) {
        t.decorate ? t.decorate(n, i) : e.decorate(i.pickedMesh, n, i)
    }, o.prototype.getMaterial = function() {
        return material
    }, o.prototype.addHistory = function(t, e, n) {
        this.historycmp && this.historycmp.actionDone(t, e, n, this)
    }, o.prototype.undoPaint = function(t, n) {
        e.historyPaint(t, n, n.oldMaterial)
    }, o.prototype.redoPaint = function(t, n) {
        e.historyPaint(t, n, n.newMaterial)
    }, o.prototype.historyPaint = function(t, n, i) {
        e.applyMaterial(t, i, n.collided), ujs.notify("hcs.request.saveHistory")
    }, o.prototype.setupHistory = function() {
        this.historycmp = this.core.getComponentByName("HistoryComponent"), this.historycmp && this.historycmp.registerAction(this.PAINTACTION, this.undoPaint, this.redoPaint, this)
    }, o
}();