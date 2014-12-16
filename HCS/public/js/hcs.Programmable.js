var wnp = window.wnp || {};
wnp.Programmable = function() {
    var t, e = function(e, n, i) {
        this.params = {}, this.mergeParams(i), this.materials = null, this.structure = n, n && (this.magnetismCollider = this.structure.magnetismCollider), this.id = 0, this.async = !1, this.objectName = "Programmable", t = this
    };
    return e.prototype.getDefaultMaterials = function() {
        return {}
    }, e.prototype.decorate = function(t, e) {
        var n = e.pickedMesh.material;
        return this.traverse(function(n) {
            n.name === e.pickedMesh.name && (t.backFaceCulling = n.material.backFaceCulling, n.material = t)
        }), this.structure.programmableInstance.materials[e.pickedMesh.name] = t, n
    }, e.prototype.animate = function() {
        Logger.message("No animation here :(")
    }, e.prototype.importDAE = function() {
        return console.warn("Can't use DAE with BABYLON"), null
    }, e.prototype.importBabylon = function(t, e) {
        var n = t.split("/"),
            i = n[n.length - 1],
            o = i.split(".")[0];
        delete n[n.length - 1], n = n.join("/"), -1 === n.indexOf("http://") && -1 == n.indexOf("https://") && (n = wnp.Assets.globalPath + n);
        var r = new BABYLON.Mesh(o, wanaplan.engine3D.scene);
        return r.isVisible = !1, BABYLON.SceneLoader.ImportMesh("", n, i, wanaplan.engine3D.scene, function(t) {
            for (var n = 0, i = t.length; i > n; n++)
                t[n].parent = r, t[n].receiveShadows = !0, wanaplan.engine3D.castShadows(t[n]);
            e && e(r)
        }), r
    }, e.prototype.importOBJ = function() {
        return console.warn("Can't load OBJ file with BABYLON"), null
    }, e.prototype.mergeParams = function(t) {
        var t = t || {};
        this.params = this.getDefaultParams(), this.params = ujs.mergeObjects(this.params, t, !0)
    }, e.prototype.getDefaultParams = function() {
        return {}
    }, e.prototype.getParamType = function(t) {
        var e = t.split(".").slice(-1)[0];
        switch (e) {
            case "stretched_texture":
            case "rounded":
            case "active":
                return "boolean"
        }
        var n = this.getDefaultParams(),
            i = typeof ujs.getProperty(n, t);
        switch (i) {
            case "boolean":
            case "string":
            case "number":
                return i;
            case "undefined":
            default:
                return console.warn('enable to determine the type of the param "' + t + '" in the programmable ' + this.objectName), "number"
        }
    }, e.prototype.validateParam = function() {
        var t = function(t, e) {
                if (e = e || {}, t = t.replace(/\s/g, ""), !/^-?\d*\.?\d*]*$/.exec(t) || !/\d/.exec(t)) {
                    if (!(t = /-?\d+\.?\d*]*/.exec(t)))
                        return e["default"] || null;
                    t = t[0]
                }
                var n = +t;
                if (e.round) {
                    var i = e.round === !0 ? 1 : e.round;
                    n = Math.round(n * i) / i
                }
                return "number" == typeof e.max && (n = Math.min(n, e.max)), "number" == typeof e.min && (n = Math.max(n, e.min)), n
            },
            e = function(t) {
                return !!+t << 0
            },
            n = function(e, n) {
                if (n = n || {}, n.intList = n.intList || n.intListSeparator || n.inListOptions, n.intList) {
                    for (var i = n.intListSeparator || ",", o = ("" + e).split(i), r = o.length; r--;)
                        if ("undefined" == typeof(o[r] = t(o[r], n.inListOptions)) || null == o[r])
                            return null;
                    e = o.join(i)
                }
                return e
            };
        return function(i, o) {
            var r = null,
                s = null;
            switch ("params" == i.split(".")[0] && (i = i.split(".").slice(1).join(".")), r = this.getParamType(i), "string" != typeof r && (s = r, r = r.type), r) {
                case "boolean":
                    return e(o, s);
                case "string":
                    return n(o, s);
                default:
                case "number":
                    return t(o, s)
            }
        }
    }(), e.prototype.prepareMaterials = function(t) {
        return this.materials = t, t
    }, e.prototype.applyShadow = function() {
        console.warn("Not used in BABYLON")
    }, e.createInstance = function(t, e, n, i, o, r, s) {
        var a = t.split(".");
        a.length = a.length - 1;
        var e = e || {},
            l = function() {
                var t = ujs.getProperty(wnp.Programmable, a.join(".")),
                    r = e.params || e,
                    l = new t(s, i, r);
                l.materials = n || l.getDefaultMaterials(wanaplan.engine3D.scene);
                e.id;
                o(l)
            },
            h = a.length,
            c = function(t, e, n) {
                if (t >= h)
                    return void l();
                var i = n || wnp.Constants.PROGRAMMABLE_PATH;
                HTMLHelper.addScript([i, "/", e, ".js"].join(""), void 0, function() {
                    var i = e + "/" + a[t + 1];
                    c(t + 1, i, n)
                })
            };
        c(0, a[0], r)
    }, e.prototype.serialize = function() {
        var t = {
            "class": {
                name: "wnp.Programmable"
            }
        };
        return ujs.serializeObject(this, t, ["objectName", "id", "params", "materials"]), t
    }, e.prototype.deserialize = function(t) {
        return ujs.deserializeObject(t, this, ["objectName", "id", "params", "materials"]), this
    }, e.Deserialize = function(t) {
        var n = new e(wanaplan.engine3D, null, t.params);
        return n.deserialize(t), n
    }, e.prototype.getAvailableProperties = function() {
        var t = this.generateFormForObject("params", this);
        if (this.localizeAndSortParams) {
            for (var e = this.localizeAndSortParams(), n = t.length - 1; n >= 0; n--) {
                var i = t[n].name ? t[n].name.replace("params.", "") : void 0,
                    o = i.split(".")[0];
                e.invisible && (e.invisible.hasOwnProperty(i) || e.invisible.hasOwnProperty(o)) ? delete t[n] : e.basic && e.basic.hasOwnProperty(i) ? t[n].label = t[n].label ? e.basic[i] : "" : e.advanced && e.advanced.hasOwnProperty(i) ? (t[n].label = t[n].label ? e.advanced[i] : "", t[n]["class"] = "hidden advancedParams") : delete t[n]
            }
//            Object.keys(e.advanced).length > 0 && t.push({
//                type: "html",
//                html: "<a href='' onclick='wnp.Programmable.toggleVisible();return false;' style='display:none'>" + _("show advanced params") + "</a>"
//            })
        }
        return t
    }, e.prototype.generateFormForObject = function(t, e, n, i, o) {
        var n = n || [],
            r = null,
            i = i || "",
            o = o || 0;
        if (e[t] instanceof Object) {
            i = i ? i + "." + t : t, "params" != t && (r = {
                name: i,
                label: t,
                type: "separator",
                html: t
            }, n.push(r)), o++;
            for (var s in e[t])
                this.generateFormForObject(s, e[t], n, i, o);
            n.push({
                type: "separator",
                name: i
            })
        } else {
            var a = i ? i + "." + t : t,
                l = this.getParamType(a.split(".").slice(1).join("."));
            l = l.type ? l : {
                type: l
            };
            var h, c;
            switch (l.type) {
                case "boolean":
                    h = "checkbox", c = !!e[t];
                    break;
                case "number":
                    h = "number", c = {
                        value: +e[t]
                    }, "undefined" != typeof l.max && (c.max = l.max), "undefined" != typeof l.min && (c.min = l.min), "undefined" != typeof l.round && (c.step = l.round);
                    break;
                default:
                    h = "text", c = e[t]
            }
            r = {
                name: a,
                label: new Array(2 * o).join("&nbsp") + t,
                type: h,
                value: c,
                eventParams: {
                    eventName: "wnp.contextMenu.propertyChanged",
                    property: a
                },
                id: a.split(".").join("-")
            }, n.push(r)
        }
        return n
    }, e.prototype.createPoignee = function() {
        return console.warn("Can't use it with BABYLON"), null
    }, e.prototype.getWidthParam = function() {
        return this.params.width ? "params.width" : !1
    }, e.prototype.getHeightParam = function() {
        return this.params.height ? "params.height" : !1
    }, e.prototype.getDepthParam = function() {
        return this.params.depth ? "params.depth" : !1
    }, e.prototype.generateMissingFacesUvs = function() {
        return console.warn("Can't use it with BABYLON"), null
    }, e
}(), wnp.Programmable.toggleVisible = function() {
    for (var t = document.querySelectorAll(".advancedParams"), e = 0; e < t.length; e++)
        t[e].classList.toggle("hidden")
};