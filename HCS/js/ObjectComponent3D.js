var ObjectComponent3D = function() {
    function t(t) {
        t.traverse(function(t) {
            wanaplan.engine3D.castShadows(t), t.receiveShadows = !0
        })
    }
    var e, n = (new BABYLON.Vector3(50, 50, 50), new BABYLON.Vector3(0, 0, 0), "js/Components/CoreComponents/Object/Programmable/"),
        i = null,
        o = -1,
        r = (ujs.getById("container3d"), function(t) {
            BaseComponent3D.call(this, t, "ObjectComponent3D"), i = t.version, e = this
        });
    return r.prototype = new BaseComponent3D, r.prototype.initialize = function() {
        /*wnp.Constants.PRODUCTS_CATEGORY_FILE && ujs.ajax({
            url: wnp.Constants.PRODUCTS_CATEGORY_FILE,
            method: "GET",
            params: ["t=", Math.round(100 * Math.random())].join(""),
            success: function(t) {
                try {
                    productsMenu = JSON.parse(t), ujs.notify("wnp.menu.main.add", {
                        item: productsMenu,
                        menuPath: "1",
                        position: 0
                    })
                } catch (e) {
                    Logger.message("BAD JSON FILE")
                }
            }.bind(this)
        })*/
		xmlHttp = new XMLHttpRequest();
		xmlHttp.open("GET", 'data/1/categories.json', false);
		xmlHttp.send(null);
		//console.warn(xmlHttp.responseText);
		productsMenu = JSON.parse(xmlHttp.responseText);
		ujs.notify("wnp.menu.main.add", {item: productsMenu,menuPath: "1",position: 0})
    }, r.prototype.onFloorReady = function(t) {
        for (var n = t.floor || e.getFloor(), i = t.structure || wanaplan.getSelectedStructure(), o = i.getElements("objects"), r = 0; r < o.length; r++)
            o[r].isRecentlyAdded = !1, e.buildObject(o[r], o[r].programmableInstance, n)
    }, r.prototype.loadProgrammableFile = function(t, e, o) {
        var r = e || t + ".js";
        "undefined" == typeof wnp.Programmable[t] ? HTMLHelper.addScript(n + r + "?t=" + i, void 0, o) : o(void 0)
    }, r.prototype.startListening = function() {
        document.addEventListener("wnp.request.floorSelected", this.onFloorChanged, !1), document.addEventListener("wnp.engine3d.floorReady", this.onFloorReady, !1), document.addEventListener("wnp.engine3D.addObject", this.onAddObject, !1), document.addEventListener("wnp.engine3D.addGroup", this.onAddGroup, !1), document.addEventListener("wnp.engine3D.addProgrammable", this.onAddObject, !1), document.addEventListener("wnp.engine3D.object.remove", this.onRemoveObject, !1)
    }, r.prototype.stopListening = function() {
        document.removeEventListener("wnp.request.floorSelected", this.onFloorChanged, !1), document.removeEventListener("wnp.engine3d.floorReady", this.onFloorReady, !1), document.removeEventListener("wnp.engine3D.addObject", this.onAddObject), document.removeEventListener("wnp.engine3D.addGroup", this.onAddGroup), document.removeEventListener("wnp.engine3D.addProgrammable", this.onAddObject, !1), document.removeEventListener("wnp.engine3D.object.remove", this.onRemoveObject, !1)
    }, r.prototype.onAddGroup = function(t) {
        var n = t.objectParams,
            i = JSON.parse(n.params),
            o = JSON.parse(n.materials),
            r = (new Date).getTime(),
            s = e.getFloor(),
            a = wanaplan.getComponentByName("AvatarComponent3D", this.engine3D),
            l = a.avatar.position.clone();
        l.y -= 5 + +s.position.y;
        for (var h in i)
            t.objectType = i[h].type || "programmable", i[h].position.z *= -1, t.position = l.add(i[h].position), t.rotation = i[h].rotation, t.objectParams = {
                params: i[h].params,
                builder_id: i[h].builder_id,
                path: i[h].filename,
                materials: JSON.stringify(o[h]),
                customData: {
                    groupId: r
                }
            }, e.onAddObject(t)
    }, r.prototype.onAddObject = function(t) {
        var n = wanaplan.getSelectedStructure(),
            i = e.getFloor(),
            o = t.objectParams,
            r = new ObjectStructure;
        if (r.builderId = o.builder_id, "string" == typeof o.params && "" !== o.params && (o.params = JSON.parse(o.params)), "string" == typeof o.materials && "" !== o.materials && (o.materials = "[]" === o.materials ? {} : ujs.deserializeObject(JSON.parse(o.materials))), o.customData && (r.customData = o.customData), r.filename = o.path, r.baseUrl = o.baseUrl || null, t.position)
            r.position.x = t.position.x, r.position.y = t.position.y, r.position.z = t.position.z;
        else {
            var s = wanaplan.getComponentByName("AvatarComponent3D", this.engine3D);
            avatarPosition = s.avatar.position, r.position.x = avatarPosition.x, r.position.z = avatarPosition.z, r.position.y += 5
        }
        t.rotation && (r.rotation.x = t.rotation.x, r.rotation.y = t.rotation.y, r.rotation.z = t.rotation.z), n.insertElement("objects", r), r.isRecentlyAdded = !0, e.buildObject(r, o, i)
    }, r.prototype.onRemoveObject = function(t) {
        for (var e, n = 0; n < wanaplan.structure.getLength(); n++)
            e = wanaplan.structure.getElement(n), e.removeElement("objects", t.structure)
    }, r.prototype.refreshObject = function(t, e) {
        for (var n = t.structure.programmableInstance, i = (t.getFloor(), t.getChildren()), o = i.length; o--;)
            i[o].dispose();
        this.buildObject(t.structure, n, t.parent, function(n) {
            t.position = n.position, t.rotation = n.rotation, t.parent = n.parent;
            for (var i = n.getVerticesDataKinds(), o = i.length; o--;)
                t.setVerticesData(i[o], n.getVerticesData(i[o]).slice());
            if (t.setIndices(n.getIndices().slice()), n._vertexBuffers) {
                var r = BABYLON.Tools.ExtractMinAndMax(n.getVerticesData(BABYLON.VertexBuffer.PositionKind), 0, n.getTotalVertices());
                t._boundingInfo = new BABYLON.BoundingInfo(r.minimum, r.maximum)
            }
            t.material = n.material;
            for (var s = n.getChildren(), o = s.length; o--;)
                s[o].parent = t;
            t.computeWorldMatrix(!0), t.getBoundingBox(!0), n.silentDispose = !0, n.dispose(), n.silentDispose = !1, ujs.notify("wnp.engine3D.object.refresh", {
                object: t
            }), e && e(t)
        }, !0)
    }, r.prototype.buildObject = function(t, n, i, o, r) {
        var s, o = o || function() {},
            i = i || e.getFloor();
        t.programmableInstance ? s = t.programmableInstance.materials : n.materials && (s = n.materials);
        var a, l = function(n) {
                return n ? (t.programmableInstance = a, t.objectInstance = n, void e.addObjectToScene(n, t, i, o, r)) : (Logger.warning("[ObjectComponent3D] onObject3dLoaded : unable to build the following object : "), void Logger.warning(a))
            },
            h = t.baseUrl || null;
        t.filename && wnp.Programmable.createInstance(t.filename, n, s, t, function(t) {
            if (a = t, a.async)
                a.getObject3D(wanaplan.engine3D.scene, l);
            else {
                var e = a.getObject3D(wanaplan.engine3D.scene);
                l(e)
            }
        }, h, e.engine3D)
    }, r.prototype.addObjectToScene = function(t, n, i, o, r) {
        var o = o || function() {};
        return e.prepareObject3D(t, n, i), o(t), r || ujs.notify("wnp.engine3D.object.create", {
            object: t,
            objectStructure: n
        }), t
    }, r.prototype.prepareObject3D = function(n, i, r) {
        n.structure = i, n.name = "Object_" + ++o, i.id = o, n.parent = r, n.position.copyFrom(i.position), n.rotation.copyFrom(i.rotation), n.scaling.copyFrom(i.scaling), i.position = n.position, i.rotation = n.rotation, i.scaling = n.scaling, i.position.x = +i.position.x, i.position.y = +i.position.y, i.position.z = +i.position.z, i.rotationQuaternion && (n.rotationQuaternion = i.rotationQuaternion), n.structure.group && (n.parent = n.structure.group, n.changeFrame(r)), n.computeWorldMatrix(!0), r.markAsDirty(), n.isDecorable = !0, n.decorate = i.programmableInstance.decorate.bind(n), n.animate = i.programmableInstance.animate.bind(i.programmableInstance);
        var s = i.programmableInstance.materials;
        if (i.programmableInstance.getDefaultMaterials) {
            var a = i.programmableInstance.getDefaultMaterials(wanaplan.engine3D.scene);
            s = ujs.mergeObjects(a, i.programmableInstance.materials)
        }
        n.initMaterials(s), n.onDispose = function() {
            n.silentDispose || ujs.notify("wnp.engine3D.object.dispose", {
                object: n
            })
        }, t(n);
        var l = wanaplan.getComponentByName("EditionComponent3D");
        return l && e.getFloor().structureId == r.structureId && l.addDraggable(n), n
    }, r
}();