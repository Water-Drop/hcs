/*
 * Author：虞思源
 * 
 * 用于导入下载的babylon模型
 * importBabylon
 * 导入OBJ格式的模型待实现
 */
var hcs = window.hcs || {};
hcs.Programmable = function() {
    var model, 
	programmable = function(programmable, structure, params) {
        this.params = {}, 
		this.mergeParams(params), 
		this.materials = null, 
		this.structure = structure, 
		structure && (this.magnetismCollider = this.structure.magnetismCollider), 
		this.id = 0, 
		this.async = !1, 
		this.objectName = "Programmable",
		model = this
    };
    return programmable.prototype.getDefaultMaterials = function() {
        return {}
    }, programmable.prototype.decorate = function(model, programmable) {
        var structure = programmable.pickedMesh.material;
        return this.traverse(function(structure) {
            structure.name === programmable.pickedMesh.name && (model.backFaceCulling = structure.material.backFaceCulling, structure.material = model)
        }), 
		this.structure.programmableInstance.materials[programmable.pickedMesh.name] = model, 
		structure
    }, //获得默认材质
	programmable.prototype.animate = function() {
        Logger.message("No animation here :(")
    }, programmable.prototype.importDAE = function() {
        return console.warn("Can't use DAE with BABYLON"), null
    }, programmable.prototype.importBabylon = function(model, programmable) {
        var structure = model.split("/"),
            params = structure[structure.length - 1],
            o = params.split(".")[0];
        delete structure[structure.length - 1], structure = structure.join("/"), -1 === structure.indexOf("http://") && -1 == structure.indexOf("https://") && (structure = hcs.Assets.globalPath + structure);
        var r = new BABYLON.Mesh(o, hcsdesign.engine3D.scene);
        return r.isVisible = !1, BABYLON.SceneLoader.ImportMesh("", structure, params, hcsdesign.engine3D.scene, function(model) {
            for (var structure = 0, params = model.length; params > structure; structure++)
                model[structure].parent = r, model[structure].receiveShadows = !0, hcsdesign.engine3D.castShadows(model[structure]);
            programmable && programmable(r)
        }), r
    }, programmable.prototype.importOBJ = function() {
        return console.warn("Can't load OBJ file with BABYLON"), null
    }, programmable.prototype.mergeParams = function(model) {
        var model = model || {};
        this.params = this.getDefaultParams(), this.params = ujs.mergeObjects(this.params, model, !0)
    }, programmable.prototype.getDefaultParams = function() {
        return {}
    }, programmable.prototype.getParamType = function(model) {
        var programmable = model.split(".").slice(-1)[0];
        switch (programmable) {
            case "stretched_texture":
            case "rounded":
            case "active":
                return "boolean"
        }
        var structure = this.getDefaultParams(),
            params = typeof ujs.getProperty(structure, model);
        switch (params) {
            case "boolean":
            case "string":
            case "number":
                return params;
            case "undefined":
            default:
                return console.warn('enable to determine the type of the param "' + model + '" in the programmable ' + this.objectName), "number"
        }
    }, programmable.prototype.validateParam = function() {
        var model = function(model, programmable) {
                if (programmable = programmable || {}, model = model.replace(/\s/g, ""), !/^-?\d*\.?\d*]*$/.exec(model) || !/\d/.exec(model)) {
                    if (!(model = /-?\d+\.?\d*]*/.exec(model)))
                        return programmable["default"] || null;
                    model = model[0]
                }
                var structure = +model;
                if (programmable.round) {
                    var params = programmable.round === !0 ? 1 : programmable.round;
                    structure = Math.round(structure * params) / params
                }
                return "number" == typeof programmable.max && (structure = Math.min(structure, programmable.max)), "number" == typeof programmable.min && (structure = Math.max(structure, programmable.min)), structure
            },
            programmable = function(model) {
                return !!+model << 0
            },
            structure = function(programmable, structure) {
                if (structure = structure || {}, structure.intList = structure.intList || structure.intListSeparator || structure.inListOptions, structure.intList) {
                    for (var params = structure.intListSeparator || ",", o = ("" + programmable).split(params), r = o.length; r--;)
                        if ("undefined" == typeof(o[r] = model(o[r], structure.inListOptions)) || null == o[r])
                            return null;
                    programmable = o.join(params)
                }
                return programmable
            };//将模型文件标准化
        return function(params, o) {
            var r = null,
                s = null;
            switch ("params" == params.split(".")[0] && (params = params.split(".").slice(1).join(".")), r = this.getParamType(params), "string" != typeof r && (s = r, r = r.type), r) {
                case "boolean":
                    return programmable(o, s);
                case "string":
                    return structure(o, s);
                default:
                case "number":
                    return model(o, s)
            }
        }
    }(), programmable.prototype.prepareMaterials = function(model) {
        return this.materials = model, model
    }, programmable.prototype.applyShadow = function() {
        console.warn("Not used in BABYLON")
    }, programmable.createInstance = function(model, programmable, structure, params, o, r, s) {
        var a = model.split(".");
        a.length = a.length - 1;
        var programmable = programmable || {},
            l = function() {
                var model = ujs.getProperty(hcs.Programmable, a.join(".")),
                    r = programmable.params || programmable,
                    l = new model(s, params, r);
                l.materials = structure || l.getDefaultMaterials(hcsdesign.engine3D.scene);
                programmable.id;
                o(l)
            },
            h = a.length,
            c = function(model, programmable, structure) {
                if (model >= h)
                    return void l();
                var params = structure || hcs.Constants.PROGRAMMABLE_PATH;
                HTMLHelper.addScript([params, "/", programmable, ".js"].join(""), void 0, function() {
                    var params = programmable + "/" + a[model + 1];
                    c(model + 1, params, structure)
                })
            };
        c(0, a[0], r)
    }, programmable.prototype.serialize = function() {
        var model = {
            "class": {
                name: "hcs.Programmable"
            }
        };
        return ujs.serializeObject(this, model, ["objectName", "id", "params", "materials"]), model
    }, programmable.prototype.deserialize = function(model) {
        return ujs.deserializeObject(model, this, ["objectName", "id", "params", "materials"]), this
    }, programmable.Deserialize = function(model) {
        var structure = new programmable(hcsdesign.engine3D, null, model.params);
        return structure.deserialize(model), structure
    }, programmable.prototype.getAvailableProperties = function() {
        var model = this.generateFormForObject("params", this);
        if (this.localizeAndSortParams) {
            for (var programmable = this.localizeAndSortParams(), structure = model.length - 1; structure >= 0; structure--) {
                var params = model[structure].name ? model[structure].name.replace("params.", "") : void 0,
                    o = params.split(".")[0];
                programmable.invisible && (programmable.invisible.hasOwnProperty(params) || programmable.invisible.hasOwnProperty(o)) ? delete model[structure] : programmable.basic && programmable.basic.hasOwnProperty(params) ? model[structure].label = model[structure].label ? programmable.basic[params] : "" : programmable.advanced && programmable.advanced.hasOwnProperty(params) ? (model[structure].label = model[structure].label ? programmable.advanced[params] : "", model[structure]["class"] = "hidden advancedParams") : delete model[structure]
            }
//            Object.keys(programmable.advanced).length > 0 && model.push({
//                type: "html",
//                html: "<a href='' onclick='hcs.Programmable.toggleVisible();return false;' style='display:none'>" + _("show advanced params") + "</a>"
//            })
        }
        return model
    }, programmable.prototype.generateFormForObject = function(model, programmable, structure, params, o) {
        var structure = structure || [],
            r = null,
            params = params || "",
            o = o || 0;
        if (programmable[model] instanceof Object) {
            params = params ? params + "." + model : model, "params" != model && (r = {
                name: params,
                label: model,
                type: "separator",
                html: model
            }, structure.push(r)), o++;
            for (var s in programmable[model])
                this.generateFormForObject(s, programmable[model], structure, params, o);
            structure.push({
                type: "separator",
                name: params
            })
        } else {
            var a = params ? params + "." + model : model,
                l = this.getParamType(a.split(".").slice(1).join("."));
            l = l.type ? l : {
                type: l
            };
            var h, c;
            switch (l.type) {
                case "boolean":
                    h = "checkbox", c = !!programmable[model];
                    break;
                case "number":
                    h = "number", c = {
                        value: +programmable[model]
                    }, "undefined" != typeof l.max && (c.max = l.max), "undefined" != typeof l.min && (c.min = l.min), "undefined" != typeof l.round && (c.step = l.round);
                    break;
                default:
                    h = "text", c = programmable[model]
            }
            r = {
                name: a,
                label: new Array(2 * o).join("&nbsp") + model,
                type: h,
                value: c,
                eventParams: {
                    eventName: "hcs.contextMenu.propertyChanged",
                    property: a
                },
                id: a.split(".").join("-")
            }, structure.push(r)
        }
        return structure
    }, programmable.prototype.createPoignee = function() {
        return console.warn("Can't use it with BABYLON"), null
    }, programmable.prototype.getWidthParam = function() {
        return this.params.width ? "params.width" : !1
    }, programmable.prototype.getHeightParam = function() {
        return this.params.height ? "params.height" : !1
    }, programmable.prototype.getDepthParam = function() {
        return this.params.depth ? "params.depth" : !1
    }, programmable.prototype.generateMissingFacesUvs = function() {
        return console.warn("Can't use it with BABYLON"), null
    }, programmable
}(), hcs.Programmable.toggleVisible = function() {
    for (var model = document.querySelectorAll(".advancedParams"), programmable = 0; programmable < model.length; programmable++)
        model[programmable].classList.toggle("hidden")
};