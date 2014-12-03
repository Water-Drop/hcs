var wnp = window.wnp || {};
wnp.Core = function () {
    function t() {
        var t = n.mode == n.MODE_EDITOR ? r : 0;
        n.setSize(window.innerWidth - t, window.innerHeight)
    }
    function e(t, e) {
        return t.uuid || (t.uuid = wnp.uuid.uuid4()), t.lastModified || "wnpLocalStorage" == e ? t.lastModified || (t.lastModified = 0) : t.lastModified = (new Date).getTime(), t
    }
    var n = null, i = 640, o = 480, r = 260, s = 260, a = 1, l = null, h = null, c = {}, u = wnp.Constants.MODE_STANDALONE, p = null, d = null, m = null, g = null, f = !1, y = null, v = !1, b = null, w = "2D", x = null, C = function (e, _, v) {
        if (this.version = e, this.isFullyInitialized = !1, window.wanaplan = this, this.ENGINE_2D = 1, this.ENGINE_3D = 2, this.MODE_EDITOR = 1, this.MODE_VIEWER = 2, this.LOCAL_STORAGE_STRUCTURE_KEY = "wanadev.planner.structure", this.i18n = _, wnp.UI.LanguageSelector.setLocal(_.getLocale().split("_")[0]), l = document.getElementById("container2d"), h = document.getElementById("container3d"), a = this.ENGINE_2D, c = { structure: [], limit: 50, cursor: 0, getLatest: function () {
            return this.structure[this.cursor]
        } 
        }, v.css && HTMLHelper.addStylesheet(v.css), this.allow3D = "undefined" != typeof v.allow3D ? v.allow3D : !0, this.api = v || {}, d = this.api.saveUrl || null, m = this.api.newUrl || null, g = this.api.planUrl || null, y = this.api.screenshotUrl || null, f = this.api.publisher || !1, _origin = this.api.origin || !1, this.mode = "true" === this.api.isViewer ? this.MODE_VIEWER : this.MODE_EDITOR, this.api.params = this.api.params ? JSON.parse(this.api.params) : {}, this.api.components && (this.api.components = JSON.parse(this.api.components)), this.api.id > 0) {
            p = this.api.id, u = wnp.Constants.MODE_CUSTOMER, b = this.api.params, w = this.api.screenshotMode || "2D", x = this.api.title || null;
            var C = b.env || "";
            wnp.Constants.PRODUCTS_CATEGORY_FILE = [wnp.Constants.WNP_URL, "/data/", p, "/categories" + C + ".json"].join(""), wnp.Constants.TEXTURES_FILE = [wnp.Constants.WNP_URL, "/data/", p, "/textures" + C + ".json"].join(""), wnp.Constants.PRODUCTS_FILE = [wnp.Constants.WNP_URL, "/data/", p, "/products" + C + ".json"].join(""), wnp.Constants.PRODUCTS_PREVIEWS = [wnp.Constants.WNP_URL, "/data/previews/"].join("")
        }
        i = window.innerWidth, o = window.innerHeight, this.needPageRefresh = !1, this.loopTimer = new wnp.LoopTimer, this.structure = new wnp.Structure(e), this.keyboardManager = new wnp.KeyboardManager, this.configuration = new wnp.Configuration, this.engine2D = new wnp.Engine2D(l, this), this.engine3D = null, this.engine3D = GlobalHelper.hasWebGL() ? new wnp.Engine3D(h) : new wnp.Dummy.Engine3D(h), this.aboutWindow = null;
        var M = this;
        n = this, window.addEventListener("resize", t, !1);
        var D = !1;
        if (document.addEventListener("keydown", function (t) {
            M.getSelectedEngine() === M.ENGINE_2D && ((t.ctrlKey || D) && 90 == t.keyCode ? n.backFromHistory() : (t.ctrlKey || n.pomme) && 89 == t.keyCode && n.nextFromHistory(), D = 91 == t.keyCode ? !0 : D)
        }, !1), document.addEventListener("keyup", function () {
            D = !1
        }, !1), document.addEventListener("contextmenu", function (t) {
            t.preventDefault()
        }, !1), window.addEventListener("message", function (t) {
            var e = JSON.parse(t.data);
            switch (e.action) {
                case "close-frame":
                    wnp.UI.IFrame.close();
                    break;
                case "resize-frame":
                    wnp.UI.IFrame.resize(e.width, e.height);
                    break;
                case "take-screenshot":
                    this.takeScreenshot({})
            }
        } .bind(this)), GlobalHelper.isIE() < 11) {
            var B = document.getElementById("screenshot-flash");
            B && (B.style.display = "none")
        }
        this.setMenuWidth = function (t) {
            r = "number" == typeof t ? t : s
        }, this.getMenuWidth = function () {
            return r
        }
    };
    return C.prototype.initialize = function (t) {
        // function() {this.engie2D.bestZoom()}.bind(this) this对?应?|的??实???例¤y对?象¨?传??入¨?
        this.mode == this.MODE_VIEWER ? this.initializeViewer(t) : this.initializeEditor(t), setTimeout(function () {
            this.engine2D.bestZoom()
        } .bind(this), 50), this.engine2D.bestZoom(), window.setTimeout(function () {
            this.hideSplashScreen()
        } .bind(this), 7e3), this.keyboardManager.startEventsListening(), GlobalHelper.hasWebGL() || HTMLHelper.hide3DMenus(), ujs.notify("wnp.core.initialized")
    }, C.prototype.initializeViewer = function (t) {
        var t = t || function () {
        }, e = this, n = document.getElementById("toggleEngine");
        this.changeToggleEngineLabel = function (t) {
            n.children[0].innerHTML = t
        }, GlobalHelper.hasWebGL() ? (n.setAttribute("title", _("Switch the view to 2D or 3D")), n.addEventListener("click", function () {
            e.switchEngine(), e.changeToggleEngineLabel("2D" == n.children[0].innerHTML ? "3D" : "2D")
        }, !1)) : n.style.display = "none", this.changeToggleEngineLabel(+this.api.startOn2D ? "3D" : "2D"), this._createDefaultStructure(), this.menu = { addMenuItem: function () {
        } 
        }, this.helpBubbleManager = { alreadyDisplayed: function () {
        }, display: function () {
        } 
        }, this.engine2D.isViewer = !0, this.engine3D.isViewer = !0, this.engine2D.initialize(), this.engine3D.initialize(), g ? this._getStructureFromUrl(g, function (e) {
            this._loadStructure(e), this.engine2D.bestZoom(), this.hideSplashScreen(), t.call(this), ujs.notify("wnp.structure.locale.loaded")
        } .bind(this)) : this._localStructureExists() ? this._loadStructure(this._getLocaleStorageStructure(), function (e) {
            t(e), ujs.notify("wnp.structure.locale.loaded")
        }) : t(this)
    }, C.prototype.initializeEditor = function () {
        var t = this;
        this.helpBubbleManager = new wnp.UI.HelpBubbleManager(!GlobalHelper.isMobileDevice()), document.addEventListener("wnp.request.takeScreenshot", this.takeScreenshot, !1), document.addEventListener("wnp.request.saveStructrure", this.saveStructure.bind(this), !1), document.addEventListener("wnp.request.loadStructure", this.loadStructure.bind(this), !1), this.engine2D.getContainer().addEventListener("touchend", this.saveHistory.bind(this), !1), this.engine2D.getContainer().addEventListener("touchcancel", this.saveHistory.bind(this), !1), this.engine3D.getContainer().addEventListener("touchend", this.saveHistory.bind(this), !1), this.engine3D.getContainer().addEventListener("touchcancel", this.saveHistory.bind(this), !1);
        var e = window.PointerEvent ? "pointerup" : "mouseup";
        if (e = window.MSPointerEvent ? "MSPointerUp" : e, this.engine2D.getContainer().addEventListener(e, this.saveHistory.bind(this), !1), this.engine3D.getContainer().addEventListener(e, this.saveHistory.bind(this), !1), document.addEventListener("wnp.request.saveHistory", this.saveHistory.bind(this), !1), document.addEventListener("wnp.request.switchEngine", this.switchEngine.bind(this), !1), document.addEventListener("wnp.request.changeEngine", function (e) {
            ujs.notify("wnp.request.closePopup"), "undefined" != typeof e.engine && setTimeout(function () {
                t.setSelectedEngine(e.engine)
            }, 10)
        }, !1), document.addEventListener("wnp.request.changeLang", function () {
            ujs.notify("wnp.menu.top.deselect"), wnp.UI.LanguageSelector.show()
        }, !1), this._createDefaultStructure(), this.engine2D.initialize(), this.engine3D.initialize(), v = !0, ":new" == g) {
            var n = !1;
            if (this._localStructureExists()) {
                var i = this._getLocaleStorageStructure(), o = wnpLocalStorage.getItem("wanadev.planner.stack");
                o != i.uuid && confirm(_("An unsaved plan exists, would you like to load it ?")) && (this._loadStructure(i), n = !0)
            }
            n === !1 && (this._clearLocaleStructure(), this._createDefaultStructure(), ujs.notify("wnp.core.structure.loaded")), this.engine2D.bestZoom(), this.hideSplashScreen()
        } else
            g ? this._getStructureFromUrl(g, function (t) {
                if (!t)
                    return this._localStructureExists() && this._loadStructure(this._getLocaleStorageStructure()), this.engine2D.bestZoom(), void this.hideSplashScreen();
                var e = this._getLocaleStorageStructure();
                this._loadStructure(e ? e.uuid == t.uuid ? e.lastModified >= t.lastModified ? e : t : t : t), this.structure.setCurrentStructureIndex(0), this.engine2D.bestZoom(), this.hideSplashScreen()
            } .bind(this)) : (this._localStructureExists() && this._loadStructure(this._getLocaleStorageStructure()), this.structure.setCurrentStructureIndex(0), this.engine2D.bestZoom(), this.hideSplashScreen());
        window.addEventListener("focus", function () {
            this.saveLocalStructure(!1, !0)
        } .bind(this), !1), this.aboutWindow = new wnp.UI.AboutWindow, this.setSize(window.innerWidth - 260, window.innerHeight)
    }, C.prototype.update = function () {
        this.loopTimer.update(), this.keyboardManager.isPressed(82) && (this.keyboardManager.isPressed(17) || this.keyboardManager.isPressed(91) || this.keyboardManager.isPressed(224)) && (this.needPageRefresh || (this.needPageRefresh = !0, location.href = location.href, this.needPageRefresh = !1)), this.engine2D.isEnabled() && this.keyboardManager.isPressed(Keys.escape) && (this.engine2D.setMode(this.engine2D.MODE_NORMAL), ujs.notify("wnp.menu.main.deselect"), this.engine2D.requestStaticDraw(), this.keyboardManager.keys[Keys.escape] = !1), this.engine2D.isEnabled() ? this.engine2D.update(this.loopTimer.getDeltaTime()) : this.engine3D.update(this.loopTimer.getDeltaTime())
    }, C.prototype.draw = function () {
        this.engine2D.isEnabled() ? this.engine2D.draw(this.loopTimer.getDeltaTime()) : this.engine3D.draw(this.loopTimer.getDeltaTime())
    }, C.prototype.compareVersion = function (t, e) {
        for (var n = t.split("."), i = e.split("."), o = 0, r = n.length, s = null; null === s && r > o; )
            void 0 !== n[o] && void 0 !== i[o] && (+n[o] < +i[o] ? s = -1 : +n[o] > +i[o] && (s = 1)), o++;
        return null !== s ? s : 0
    }, C.prototype.setSize = function (t, e) {
        i = t, o = e || t, n.engine2D.resize(), n.engine3D.resize()
    }, C.prototype.getWidth = function () {
        return i
    }, C.prototype.getHeight = function () {
        return o
    }, C.prototype.getContainer2D = function () {
        return l
    }, C.prototype.getContainer3D = function () {
        return h
    }, C.prototype.getSelectedEngine = function () {
        return a
    }, C.prototype.getPlanName = function () {
        return this.structure.uuid
    }, C.prototype.getPlanURL = function () {
        return g
    }, C.prototype.setSelectedEngine = function (t) {
        if (!this.allow3D && "2D" !== t && t !== this.ENGINE_2D) {
            var e = document.getElementById("toggleEngine");
            return void (e && e.parentNode.removeChild(e))
        }
        var n = t == this.ENGINE_3D || "3D" == t, i = this.engine2D.isEnabled() ? "2D" : "3D", o = n ? "3D" : "2D";
        this.engine2D.setEnabled(!n), this.engine3D.setEnabled(n), a = "3D" == t || t == this.ENGINE_3D ? this.ENGINE_3D : this.ENGINE_2D, ujs.notify("wnp.contextChanged", { context: o, previousContext: i }), this.helpBubbleManager && this.helpBubbleManager.helpBubble && this.helpBubbleManager.helpBubble.hide()
    }, C.prototype.getSelectedStructure = function () {
        return this.structure.getCurrentStructure()
    }, C.prototype.getHistory = function () {
        return c
    }, C.prototype.takeScreenshot = function (t, e, i) {
        var o, r = "undefined" != typeof t.selectedEngine ? t.selectedEngine : a, s = "undefined" != typeof t.sendBlob ? t.sendBlob : !1, e = e || function () {
        }, i = i || function () {
        };
        if (o = r == n.ENGINE_2D ? l.children[0] : h.children[0], u == wnp.Constants.MODE_STANDALONE || null === y) {
            if (e(), s)
                return o.toDataURL("image/png");
            r === n.ENGINE_2D ? o.toBlob(function (t) {
                saveAs(t, "plan.png")
            }) : GlobalHelper.createScreenshot3D(n.engine3D.engine, void 0, function (t) {
                t.toBlob(function (t) {
                    saveAs(t, "plan.png")
                })
            })
        } else {
            var c = [];
            if (b) {
                var p = b;
                "object" == typeof p && (p = JSON.stringify(p)), c.push("params=" + p + "&")
            }
            var d = function (t) {
                ujs.ajax({ method: "POST", withCredentials: !0, url: y, params: t.join(""), error: i, success: function (t) {
                    var o = JSON.parse(t), r = _("An error occured. Please try later.");
                    if ("ok" === o.status)
                        r = _("Your screenshot has been saved."), n.structure.planId = !0, wnp.UI.MessageBox.show({ title: _("Screenshot"), message: r, buttonAText: _("Close"), buttonA: !0, autoHide: !0, force: !0 }), o.params && (b = o.params), wnp.UI.MessageBox.show(s), e();
                    else {
                        if (o.connectionUrl)
                            n._loginIframe(o.connectionUrl, o.frameWidth || Math.round(window.innerWidth / 2), o.frameHeight || Math.round(window.innerHeight / 2));
                        else {
                            var s = { title: _("Screenshot"), message: o.message || _("Error occured during save."), buttonA: !0, buttonAText: _("Ok"), onClickA: function () {
                                wnp.UI.MessageBox.close()
                            } 
                            };
                            wnp.UI.MessageBox.show(s)
                        }
                        i()
                    }
                } 
                })
            };
            r === n.ENGINE_2D ? (c.push("screenshot=" + o.toDataURL("image/png")), d(c)) : GlobalHelper.createScreenshot3D(n.engine3D.engine, void 0, function (t) {
                c.push("screenshot=" + t.toDataURL("image/png")), d(c)
            })
        }
        if (!GlobalHelper.isIE10()) {
            var m = document.getElementById("screenshot-flash");
            m.style.opacity = 1;
            var g = setTimeout(function () {
                clearTimeout(g), m.style.opacity = 0
            }, 200)
        }
    }, C.prototype.switchEngine = function () {
        this.setSelectedEngine(a == this.ENGINE_2D ? this.ENGINE_3D : this.ENGINE_2D)
    }, C.prototype.getComponentByName = function (t, e) {
        var e = void 0 != typeof e ? e : 3;
        if (e == this.ENGINE_2D)
            return this.engine2D.searchComponent(t);
        if (e == this.ENGINE_3D)
            return this.engine3D.searchComponent(t);
        var n = this.engine2D.searchComponent(t);
        return n || (n = this.engine3D.searchComponent(t)), n
    }, C.prototype.addStrutureElement = function (t) {
        this.structure.addElement(t)
    }, C.prototype.updateDeserialisation = function (t) {
        this.engine2D.requestStaticDraw(), this.unlock(t), this.getComponentByName("RoomComponent2D", this.ENGINE_2D).needsUpdate = !0, this.engine2D.requestStaticDraw(), this.engine2D.requestCompute(), this.engine2D.update(), this.engine2D.draw()
    }, C.prototype.checkLocalPlan = function () {
        var t = wnpLocalStorage.getItem(this.LOCAL_STORAGE_STRUCTURE_KEY);
        null != t && this.loadLocalStructure(!1)
    }, C.prototype.saveLocalStructure = function (t, e) {
        if (this.mode == this.MODE_VIEWER)
            return null;
        var t = "undefined" != typeof t ? t : !1, i = n.structure.serialize(), o = wnpLocalStorage.getItem(n.LOCAL_STORAGE_STRUCTURE_KEY);
        return o !== i || e ? (n.removeLocalStructure(!1), wnpLocalStorage.setItem(n.LOCAL_STORAGE_STRUCTURE_KEY, i), t && wnp.UI.MessageBox.show({ title: _("Save a Plan"), message: _("Your plan has been saved."), buttonAText: _("Close"), button: !0 }), i) : null
    }, C.prototype.loadLocalStructure = function (t) {
        var t = "undefined" != typeof t ? t : !1, e = wnpLocalStorage.getItem(this.LOCAL_STORAGE_STRUCTURE_KEY), n = this;
        if (null != e) {
            var i = n.lock();
            return n.structure.deserialize(e) ? (n.structure.setCurrentStructureIndex(0), n.updateDeserialisation(i)) : (this.removeLocalStructure(!1), t && wnp.UI.MessageBox.show({ title: _("Load a Plan"), message: _("Unable to load your plan: its version is too old."), buttonAText: _("Close"), buttonA: !0 })), t && wnp.UI.MessageBox.show({ title: _("Load a Plan"), message: _("Your plan has been loaded."), buttonAText: _("Close"), buttonA: !0 }), ujs.notify("wnp.structure.locale.loaded"), !0
        }
        return t && wnp.UI.MessageBox.show({ title: _("Load a Plan"), message: _("You have no saved plan."), buttonAText: _("Close"), buttonA: !0 }), !1
    }, C.prototype.removeLocalStructure = function (t) {
        var t = "undefined" != typeof t ? t : !1, e = wnpLocalStorage.getItem(this.LOCAL_STORAGE_STRUCTURE_KEY);
        return null != e ? (wnpLocalStorage.removeItem(this.LOCAL_STORAGE_STRUCTURE_KEY), t && wnp.UI.MessageBox.show({ title: _("Remove a Plan"), message: _("Your plan has been removed."), buttonAText: _("Close"), button: !0 }), !0) : !1
    }, C.prototype.getPreviewImage = function (t, e) {
        var i = null, o = null, r = n.engine2D.getZoom(), s = n.engine2D.getTranslation();
        n.setSize(t, e), this.getSelectedEngine() == this.ENGINE_2D ? (n.engine2D.bestZoom(), n.engine2D.draw(), o = n.engine2D.canvas) : (o = n.getContainer3D().getElementsByTagName("canvas")[0], n.engine3D.draw()), i = o.toDataURL("image/png");
        var a = n.mode == n.MODE_EDITOR ? 260 : 0;
        return n.setSize(window.innerWidth - a, window.innerHeight), this.getSelectedEngine() == this.ENGINE_2D && (n.engine2D.setZoom(r), n.engine2D.setTranslation(s)), i
    }, C.prototype.saveStackToLocal = function () {
        wnpLocalStorage.setItem("wanadev.planner.stack", n.structure.uuid)
    }, C.prototype.saveStructure = function () {
    }, C.prototype.loadStructure = function (t, e) {
        var e = e || function () {
        }, i = function (t) {
            n.removeLocalStructure();
            var i = n.lock();
            n.structure.deserialize(t) && n.updateDeserialisation(i), n.saveLocalStructure(!1), e(1)
        }, o = function (t) {
            ujs.ajax({ url: wnp.Constants.BACK_URL + wnp.Constants.MIGRATION_PATH + t, withCredentials: !0, success: function (t) {
                t ? i(t) : e(-1)
            } 
            })
        };
        g ? (ujs.ajax({ url: g, withCredentials: !0, success: function (t) {
            if (t) {
                var n = JSON.parse(t);
                1 == wanaplan.compareVersion(wnp.Constants.VERSION, n.version) ? i(t) : (console.log("migration"), o(g))
            } else
                e(-1)
        } 
        }), g = null) : e(-2)
    }, C.prototype.saveHistory = function () {
        {
            var t = this.saveLocalStructure(!1), e = this.getHistory().structure.length;
            this.getHistory().getLatest()
        }
        null != t && (this.getHistory().cursor < e - 1 && this.getHistory().structure.splice(this.getHistory().cursor + 1, e - this.getHistory().cursor), e > this.getHistory().maxSize && this.getHistory().structure.splice(0, 1), this.getHistory().cursor = this.getHistory().structure.push(t) - 1)
    }, C.prototype.backFromHistory = function () {
        this.getHistory().cursor <= 0 ? this.getHistory().cursor = 0 : this.getHistory().cursor--;
        var t = this.getHistory().structure[this.getHistory().cursor];
        if (null != t) {
            var e = this.lock();
            this.structure.deserialize(t) && this.updateDeserialisation(e)
        }
        this.engine2D.requestCompute(), this.engine2D.requestStaticDraw(), this.engine2D.update()
    }, C.prototype.lock = function () {
        var t = { engine2D: n.engine2D.isEnabled(), engine3D: n.engine3D.enabled };
        return this.engine2D._enabled = !1, this.engine3D.enabled = !1, t
    }, C.prototype.unlock = function (t) {
        this.engine2D._enabled = t.engine2D, this.engine3D.enabled = t.engine3D
    }, C.prototype.nextFromHistory = function () {
        this.getHistory().cursor < this.getHistory().structure.length && this.getHistory().cursor++;
        var t = this.getHistory().structure[this.getHistory().cursor];
        null != t && this.structure.deserialize(t), this.engine2D.requestCompute()
    }, C.prototype.hideSplashScreen = function (t) {
        var t = t || 800;
        document.getElementById("splash-bar-inner").style.webkitAnimationDuration = "1s", document.getElementById("splash-bar-inner").style.animationDuration = "1s";
        window.setTimeout(function () {
            document.getElementById("splashscreen").style.display = "none", n.isFullyInitialized = !0
        }, t)
    }, C.prototype._localStructureExists = function () {
        return void 0 != wnpLocalStorage.getItem(this.LOCAL_STORAGE_STRUCTURE_KEY) ? !0 : !1
    }, C.prototype._getLocaleStorageStructure = function () {
        return this._localStructureExists() ? e(JSON.parse(wnpLocalStorage.getItem(this.LOCAL_STORAGE_STRUCTURE_KEY)), "wnpLocalStorage") : null
    }, C.prototype.isPublisher = function () {
        return f
    }, C.prototype.getOrigin = function () {
        return _origin
    }, C.prototype._getStructureFromUrl = function (t, n) {
        var i = function (i) {
            if (i) {
                var r = JSON.parse(i);
                1 == wanaplan.compareVersion(wnp.Constants.VERSION, r.version) ? o(t, n) : n(e(r))
            } else
                n(null)
        }, o = function (t, e) {
            var n = wnp.Constants.BACK_URL + wnp.Constants.MIGRATION_PATH + t;
            ujs.ajax({ url: n, success: i, onerror: function () {
                r(n, e)
            } 
            })
        }, r = function (t) {
            var e = "/php/retrieveJson.php?json=" + t;
            ujs.ajax({ url: e, withCredentials: !0, success: i })
        };
        ujs.ajax({ url: t, withCredentials: !0, success: i, onerror: function () {
            r(t, n)
        } 
        })
    }, C.prototype.coherenceControl = function (t) {
        for (var e in t.members)
            this.engine2D.coherenceControl(t.members[e])
    }, C.prototype._loadStructure = function (t, e) {
        this.structure.deserialize("string" == typeof t ? t : JSON.stringify(t)), ujs.notify("wnp.core.structure.loaded");
        var e = e || function () {
        };
        e.call(this), this.engine2D.requestCompute()
    }, C.prototype._clearLocaleStructure = function () {
        var t = wnpLocalStorage.getItem(this.LOCAL_STORAGE_STRUCTURE_KEY);
        null != t && wnpLocalStorage.removeItem(this.LOCAL_STORAGE_STRUCTURE_KEY), this.structure.clear()
    }, C.prototype._createDefaultStructure = function () {
        this.addStrutureElement(new FloorStructure);
        for (var t = this.structure.getCurrentStructure(), e = [new PolygonWall, new PolygonWall, new PolygonWall, new PolygonWall], n = [new BABYLON.Vector2(-515, 0), new BABYLON.Vector2(0, 415), new BABYLON.Vector2(515, 0), new BABYLON.Vector2(0, -415)], i = 0; i < e.length; i++) {
            var o = (i + 1) % e.length;
            e[i].setPoints(e[o].getPoints(0), 1)
        }
        for (var i = 0; i < e.length; i++)
            e[i].translate(n[i]), t.insertElement("walls", e[i]), t.insertElement("points", e[i].getPoints(1))
    }, C.prototype._loginIframe = function (t, e, n) {
        var e = e || window.innerWidth / 2, n = n || window.innerHeight / 2;
        wnp.UI.IFrame.show(document.body, { width: e, height: n, src: t }, { showClose: !0 })
    }, C
} ();
