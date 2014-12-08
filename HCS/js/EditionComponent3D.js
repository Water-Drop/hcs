var EditionComponent3D = function() {
    var t = null,
        e = !1,
        n = -1,
        i = null,
        o = !1,
        r = 1,
        s = 2,
        a = 4,
        l = 8,
        h = [],
        c = function(e) {
            BaseComponent3D.call(this, e, "EditionComponent3D"), t = this, this.scene = wanaplan.engine3D.scene, this.camera = wanaplan.engine3D.camera, this.rotatorWidget = new wnp.Widget.Rotator(this), this.infoWidget = new wnp.Widget.Info(this), this.infoWidget.setClickCallback(this.onIAction.bind(this)), this.elevationWidget = new wnp.Widget.Elevation(this), this.cloneWidget = new wnp.Widget.Clone(this), this.groupWidget = new wnp.Widget.Group(this), this.removeWidget = new wnp.Widget.Remove(this), this.widgets = [], this.widgets.push(this.rotatorWidget), this.widgets.push(this.infoWidget), this.widgets.push(this.elevationWidget), this.widgets.push(this.cloneWidget), this.widgets.push(this.removeWidget), this.widgets.push(this.groupWidget), this.dragControl = new wnp.DragControls(this.scene, wanaplan.engine3D.canvas), this.dragControl.constrains("xz"), this.addUnremovableDraggable = this.dragControl.addUnremovableDraggable, this.addDraggable = this.dragControl.addDraggable, this.removeDraggable = this.dragControl.removeDraggable, this.resetDraggable = this.dragControl.resetDraggable
        };
    c.prototype = new BaseComponent3D, c.prototype.addWidget = function(t) {
        return this.widgets.push(t), t
    }, c.prototype.on = function(e, n) {
        return h[e] || (h[e] = []), h[e].push(n), t
    }, c.prototype.off = function(e, n) {
        var i = h[e];
        return i ? (i.indexOf(n) > -1 && i.splice(n, 1), t) : t
    };
    var u = function(t, e) {
        var n = h[t];
        if (n)
            for (var i = 0; i < n.length; i++)
                n[i](e)
    };
    c.prototype.initialize = function() {
        this.ephemeralInfos = document.getElementById("ephemeralInfos"), this.historycmp = null, this.MOVEACTION = 0, this.ROTATEACTION = 1, this.GROUPACTION = 3, this.DELETEACTION = 4, this.ADDACTION = 5, this.isViewer || (this.dragControl.on("mousedown", function(e) {
            e.hit && (t.camera.enabled = !1, ujs.notify("wnp.engine3D.editorComponent.hideEditBox"))
        }, !1), this.dragControl.on("mouseup", function() {
            t.camera.enabled = !0
        }, !1)), this.setupHistory()
    }, c.prototype.startListening = function() {
        this.onMouseDown = this.onMouseDown.bind(this), this.onMouseMove = this.onMouseMove.bind(this), this.onMouseUp = this.onMouseUp.bind(this), this.onClick = this.onClick.bind(this), this.onDoubleClick = this.onDoubleClick.bind(this), this.onGroup = this.onGroup.bind(this), this.onKeyDown = this.onKeyDown.bind(this), this.onCloneObject = this.onCloneObject.bind(this), this.onAddToProducts = this.onAddToProducts.bind(this), this.onRemoveObject = this.onRemoveObject.bind(this), this.onCreateObject = this.onCreateObject.bind(this), this.onDisposeObject = this.onDisposeObject.bind(this), this.onFloorChanged = this.onFloorChanged.bind(this), this.onNewPlan = this.onNewPlan.bind(this), this.onDragEnd = this.onDragEnd.bind(this), this.onDragging = this.onDragging.bind(this), this.onDragStart = this.onDragStart.bind(this), wanaplan.engine3D.canvas.addEventListener("pointerdown", this.onMouseDown, !1), wanaplan.engine3D.canvas.addEventListener("pointermove", this.onMouseMove, !1), wanaplan.engine3D.canvas.addEventListener("pointerup", this.onMouseUp, !1), this.dragControl.on("dragstart", this.onDragStart), this.dragControl.on("drag", this.onDragging), this.dragControl.on("dragend", this.onDragEnd), document.addEventListener("wnp.engine3D.click.collided", this.onClick, !1), document.addEventListener("wnp.engine3D.dblclick.collided", this.onDoubleClick, !1), document.addEventListener("wnp.engine3D.contextMenu.group", this.onGroup, !1), document.addEventListener("wnp.keyboardManager.keyDown", this.onKeyDown, !0), document.addEventListener("wnp.request.object.clone", this.onCloneObject, !1), document.addEventListener("wnp.request.object.addToProducts", this.onAddToProducts, !1), document.addEventListener("wnp.request.object.remove", this.onRemoveObject, !1), document.addEventListener("wnp.engine3D.object.create", this.onCreateObject, !1), document.addEventListener("wnp.engine3D.object.refresh", this.onRefreshObject, !1), document.addEventListener("wnp.engine3D.object.dispose", this.onDisposeObject, !1), document.addEventListener("wnp.engine3d.globaleFloorReady", this.onFloorChanged, !1), document.addEventListener("wnp.request.newPlanReady", this.onNewPlan, !1)
    }, c.prototype.stopListening = function() {
        wanaplan.engine3D.canvas.removeEventListener("pointerdown", this.onMouseDown), wanaplan.engine3D.canvas.removeEventListener("pointermove", this.onMouseMove, !1), wanaplan.engine3D.canvas.removeEventListener("pointerup", this.onMouseUp, !1), this.dragControl.off("dragstart", this.onDragStart), this.dragControl.off("drag", this.onDragging), this.dragControl.off("dragend", this.onDragEnd), document.removeEventListener("wnp.engine3D.click.collided", this.onClick, !1), document.removeEventListener("wnp.engine3D.dblclick.collided", this.onDoubleClick, !1), document.removeEventListener("wnp.engine3D.contextMenu.group", this.onGroup, !1), document.removeEventListener("wnp.keyboardManager.keyDown", this.onKeyDown, !0), document.removeEventListener("wnp.request.object.clone", this.onCloneObject, !1), document.removeEventListener("wnp.request.object.addToProducts", this.onAddToProducts, !1), document.removeEventListener("wnp.request.object.remove", this.onRemoveObject, !1), document.removeEventListener("wnp.engine3D.object.create", this.onCreateObject, !1), document.removeEventListener("wnp.engine3D.object.dispose", this.onDisposeObject, !1), document.removeEventListener("wnp.engine3d.globaleFloorReady", this.onFloorChanged, !1), document.removeEventListener("wnp.request.newPlan", this.onNewPlan, !1), this.disableWidget()
    }, c.prototype.onIAction = function() {
        var t = this.getSelectedObject();
        ujs.notify(this.isGroup(t) ? "wnp.request.groupConfigurator.start" : "wnp.request.configurator.start")
    }, c.prototype.onMouseDown = function(t) {
        t.collided = wanaplan.engine3D.collideWithScene(t.clientX, t.clientY), u("mousedown", t);
        var e = wanaplan.engine3D.keyboardManager.isPressed([17, 91, 224]);
        this.dragControl.constrains(e ? "y" : "xz")
    }, c.prototype.onMouseUp = function(t) {
        u("mouseup", t)
    }, c.prototype.onMouseMove = function(t) {
        u("mousemove", t)
    }, c.prototype.onDragStart = function(t) {
        var e = t.pickedMesh;
        t.oldPosition = e.position.clone(), t.oldRotation = e.rotation.clone(), u("dragstart", {
            object: e
        })
    }, c.prototype.onDragEnd = function(e) {
        var n = e.pickedMesh;
        u("dragend", {
            object: n
        }), t.ephemeralInfos.classList.add("hidden");
        var i = n.getTopLevelObject(!0);
        ujs.notify("wnp.request.historyAction", {
            component: t,
            object: i,
            params: {
                oldPosition: e.oldPosition,
                newPosition: n.position.clone(),
                oldRotation: e.oldRotation,
                newRotation: n.rotation.clone()
            },
            action: t.MOVEACTION
        })
    }, c.prototype.onDragging = function(e) {
        var n = e.pickedMesh;
        u("dragging", {
            object: n
        });
        var i = n.position,
            o = "<table>";
        o += "<tr>", o += "<td>x: " + Math.round(i.x) + "</td>", o += "<td>z: " + Math.round(i.z) + "</td>", o += "<td>" + _("elevation:") + Math.round(i.y) + "</td>", o += "</tr>", t.ephemeralInfos.innerHTML = o, t.ephemeralInfos.classList.remove("hidden")
    }, c.prototype.onClick = function(n) {
        if (this.engine3D.mode == this.engine3D.MODE_NORMAL && (u("click", n), !o)) {
            var i = n.collided;
            if (i && i.hit) {
                t.dragControl.setDraggingMode(t.dragControl.GROUPS);
                var r = wanaplan.engine3D.keyboardManager.isPressed([17, 91, 224]),
                    s = i.pickedMesh.getTopLevelObject();
                if (this.isGroup(s) || this.isSelectableObject(s)) {
                    if (r)
                        this.addToGroup(s, this.getSelectedObject()), this.deselectObject(), s = i.pickedMesh.getTopLevelObject();
                    else {
                        var a = i.pickedMesh.getTopLevelObject(!0);
                        (a.parent === this.getSelectedObject() || a === this.getSelectedObject()) && (this.deselectObject(), s = a, t.dragControl.setDraggingMode(t.dragControl.OBJECTS))
                    }
                    this.centerGroup(s), this.selectObject(s), 2 == n.button && u("special")
                } else
                    this.deleteGroup(), this.deselectObject();
                s !== e && this.deleteGroup()
            }
        }
    }, c.prototype.onDoubleClick = function(t) {
        var e = t.collided ? t.collided.pickedMesh.getTopLevelObject(!0) : null,
            n = e ? e.animate : null;
        n && n(e, t.collided.pickedMesh)
    }, c.prototype.onKeyDown = function(e) {
        var n = wanaplan.engine3D.keyboardManager.isPressed([17, 91, 224]);
        n && i && 68 == e.keyCode && t.onCloneObject(), 46 == e.keyCode && t.getSelectedObject() && ujs.notify("wnp.request.object.remove", {
            object: t.getSelectedObject(),
            structure: t.getSelectedObject().structure
        })
    }, c.prototype.onRemoveObject = function(e) {
        t.removeObject(e.object || t.getSelectedObject())
    }, c.prototype.onNewPlan = function() {
        t.deselectObject()
    }, c.prototype.onCreateObject = function(e) {
        var n, i = e.objectStructure.customData.groupId,
            o = e.object.getFloor();
        void 0 !== i && null !== i ? (n = o.getChildByName("group_" + i), n || (n = t.createGroup(i, o), e.object.structure.isRecentlyAdded && this.addHistory(n, {
            floor: o,
            isGroup: !0
        }, t.ADDACTION)), t.addToGroup(e.object, n, !0), t.setGroupId(e.object, i)) : e.object.structure.isRecentlyAdded && this.addHistory(e.object, {
            floor: o
        }, t.ADDACTION), e.object.traverse(function(t) {
            t.isVisible && (t.wasVisible = !0)
        })
    }, c.prototype.onRefreshObject = function(t) {
        t.object === i && u("refresh", t)
    }, c.prototype.onDisposeObject = function(t) {
        u("dispose", t.object), t.object === i && this.deselectObject()
    }, c.prototype.onFloorChanged = function() {
        t.deselectObject(), t.resetDraggable()
    }, c.prototype.lock = function(e, n) {
        o && o !== e || (n = "undefined" != typeof n ? n : s + r + a + l, n & s && (this.dragControl.enabled = !1, this.dragControl.reset()), n & r && (this.camera.enabled = !1), n & l && (t.camera.cameraTranslationenabled = !1), wanaplan.keyboardManager && n & a && (wanaplan.keyboardManager.preventDefault = !1), o = e)
    }, c.prototype.unlock = function(e, n) {
        o && o !== e && e !== this || (n = "undefined" != typeof n ? n : s + r + a + l, n & s && (this.dragControl.enabled = !0, this.dragControl.reset()), n & r && (this.camera.enabled = !0), n & l && (t.camera.cameraTranslationenabled = !0), wanaplan.keyboardManager && n & a && (wanaplan.keyboardManager.preventDefault = !0), o = null)
    }, c.prototype.disableWidget = function() {
        u("deselectObject")
    }, c.prototype.enableWidget = function() {
        i && u("selectObject", {
            object: i
        })
    }, c.prototype.getLocker = function() {
        return o
    }, c.prototype.isGroup = function(t) {
        return -1 !== t.name.indexOf("group_")
    }, c.prototype.isVirtualGroup = function(t) {
        return t && t.name.indexOf("group_virtual") >= 0
    }, c.prototype.isSelectableObject = function(t) {
        return -1 !== t.name.indexOf("Object_")
    }, c.prototype.getSelectedObject = function() {
        return i
    }, c.prototype.selectObject = function(t) {
        i = t, u("selectObject", {
            object: t
        })
    }, c.prototype.deselectObject = function() {
        u("deselectObject"), i = null
    }, c.prototype.moveObject = function(e, n) {
        if (t.isSelectableObject(e) || t.isGroup(e)) {
            e.position.addInPlace(n);
            var i = e.getFloor();
            i && i.markAsDirty(), u("objectMoves", {
                object: e,
                delta: n
            }), ujs.notify("wnp.engine3D.object.translate", {
                object: e
            })
        }
    }, c.prototype.rotateObject = function(e, n) {
        (t.isSelectableObject(e) || t.isGroup(e)) && (e.rotation.addInPlace(n), u("objectRotates", {
            object: e,
            delta: n
        }), ujs.notify("wnp.engine3D.object.rotate", {
            object: e
        }))
    };
    var p = function(e, n) {
        var i = n.pickedMesh.material.subMaterials ? n.pickedMesh.material.subMaterials[n.pickedSubMeshIndex] : n.pickedMesh.material;
        if (t.isGroup(this))
            for (var o = this.getChildren(), r = 0, s = o.length; s > r; r++)
                o[r].decorate && o[r].decorate(e, n);
        return i
    };
    return c.prototype.createGroup = function(e, i) {
        var o;
        return null !== e && void 0 !== e ? (o = new BABYLON.Mesh("group_" + e, wanaplan.engine3D.scene), t.setGroupId(o, e), n = Math.max(n, e)) : o = new BABYLON.Mesh("group_virtual", wanaplan.engine3D.scene), o.isDecorable = !0, o.decorate = p.bind(o), o.isVisible = !1, o.parent = i, this.addDraggable(o), o
    }, c.prototype.mergeGroup = function(e, n) {
        var i = !!n && this.isGroup(n),
            o = !!e && this.isGroup(e);
        if (i && (!o || o && this.isVirtualGroup(e)))
            return this.mergeGroup(n, e);
        var r, s = o ? e.getChildren() : e ? [e] : [],
            a = i ? n.getChildren() : n ? [n] : [];
        r = o ? e : t.createGroup(null, e.parent), i && this.deleteGroup(n);
        for (var l = s.concat(a), h = l.length; h--;) {
            if (r.getChildByName(l[h].name))
                continue;
            l[h].changeFrame(l[h].parent), l[h].changeFrame(r), l[h].structure.group = r, this.isVirtualGroup(r) || this.setGroupId(l[h], r.groupId)
        }
        return r
    }, c.prototype.addToGroup = function(n, i, o) {
        n && (i = this.mergeGroup(n, i || e), e = this.isVirtualGroup(i) ? i : !1, o || this.addHistory(n, {
            wasAdd: 1,
            object: n,
            group: i
        }, t.GROUPACTION))
    }, c.prototype.removeFromGroup = function(n, i) {
        var i = i || e;
        if (i && n.parent === i) {
            var o = i.parent,
                r = i.getWorldMatrix().clone(),
                s = o.getWorldMatrix().clone();
            s.invert();
            var a = r.multiply(s);
            n.parent = o, n.position.copyFrom(BABYLON.Vector3.TransformCoordinates(n.position, a)), n.rotation.addInPlace(i.rotation), n.rotation.subtractInPlace(i.parent.rotation), t.removeGroupId(n), n.changeFrame(i.parent)
        }
    }, c.prototype.deleteGroup = function(n, i) {
        var n = n || e;
        if (n) {
            t.removeGroupId(n);
            var o = n.parent,
                r = n.getChildren().slice(),
                s = n.getWorldMatrix().clone(),
                a = o.getWorldMatrix().clone();
            a.invert();
            for (var l = s.multiply(a), h = 0, c = r.length; c > h; h++)
                r[h].parent = o, r[h].position.copyFrom(BABYLON.Vector3.TransformCoordinates(r[h].position, l)), r[h].rotation.addInPlace(n.rotation), r[h].rotation.subtractInPlace(n.parent.rotation);
            this.removeDraggable(n), n.dispose(), n === e && (e = null), i && this.addHistory(n, {
                component: t,
                params: {
                    wasAdd: 0,
                    object: r,
                    group: n
                },
                action: t.GROUPACTION
            }, t.GROUPACTION)
        }
    }, c.prototype.deleteSelectedGroup = function() {
        t.deleteGroup(i), t.deselectObject()
    }, c.prototype.centerGroup = function(t) {
        if (t && this.isGroup(t)) {
            var e = t.getBoundingBox(!0).center.clone();
            e.y = t.getBoundingBox().minimum.y;
            var n = t.getChildren(),
                i = t.getWorldMatrix().clone(),
                o = t.parent.getWorldMatrix().clone();
            o.invert();
            for (var r = i.multiply(o), s = BABYLON.Vector3.TransformNormal(e, r), a = n.length - 1; a >= 0; a--) {
                var l = n[a];
                l.position.subtractInPlace(e), l.computeWorldMatrix(!0)
            }
            t.position.addInPlace(s), t.computeWorldMatrix(!0), t.getFloor().markAsDirty()
        }
    }, c.prototype.refreshObject = function(t, e) {
        e = e || {};
        var n = wanaplan.getComponentByName("ObjectComponent3D");
        !e.noHistory && e.modifiedProperties && ujs.notify("wnp.request.historyAction", {
            component: this,
            object: t,
            params: e.modifiedProperties || {},
            action: this.REFRESHACTION
        }), n.refreshObject(t, e.callback)
    }, c.prototype.setGroupId = function(e, n) {
        if (t.isGroup(e)) {
            e.groupId = n;
            for (var i = e.getChildren(), o = 0, r = i.length; r > o; o++)
                t.setGroupId(i[o], n)
        } else
            t.isSelectableObject(e) && (e.structure.customData.groupId = n)
    }, c.prototype.removeGroupId = function(e) {
        if (t.isGroup(e))
            for (var n = e.getChildren(), i = 0, o = n.length; o > i; i++)
                t.removeGroupId(n[i]);
        else
            t.isSelectableObject(e) && (e.structure.customData.groupId = null, e.structure.group = null)
    }, c.prototype.virtualToRealGroup = function() {
        e && (e.name = "group_" + ++n, t.setGroupId(e, n), e = null)
    }, c.prototype.onGroup = function(e) {
        e.value ? t.virtualToRealGroup(e) : t.deleteSelectedGroup()
    }, c.prototype.onCloneGroup = function(e) {
        var i = e.getChildren(),
            o = wanaplan.getComponentByName("ObjectComponent3D");
        t.virtualToRealGroup(), t.deleteGroup(), t.deselectObject();
        var r = t.createGroup(++n, e.getFloor());
        r.computeWorldMatrix(!0);
        var s = e.getBoundingBox(),
            a = new BABYLON.Vector3(s.maximum.x - s.minimum.x, 0, 0);
        a = BABYLON.Vector3.TransformNormal(a, e.getWorldMatrix());
        for (var l = 0, h = i.length; h > l; l++) {
            var c = i[l];
            if (t.isSelectableObject(c)) {
                var u = c.structure.clone();
                wanaplan.getSelectedStructure().insertElement("objects", u);
                var p = function(e) {
                    t.deselectObject(), e.position.addInPlace(a), t.selectObject(e), ujs.notify("wnp.request.saveHistory")
                };
                u.customData.groupId = r.groupId, o.buildObject(u, u.programmableInstance, c.getFloor(), p)
            }
        }
    }, c.prototype.onCloneObject = function() {
        var e = wanaplan.getComponentByName("ObjectComponent3D"),
            n = i;
        if (null != n)
            if (t.isGroup(n))
                t.onCloneGroup(n);
            else if (t.isSelectableObject(n)) {
            var o = n.structure.clone();
            wanaplan.getSelectedStructure().insertElement("objects", o);
            var r = function(e) {
                t.deselectObject(), t.selectObject(e);
                var n = e.getBoundingBox(),
                    i = new BABYLON.Vector3(n.maximum.x - n.minimum.x, 0, 0);
                i = BABYLON.Vector3.TransformNormal(i, e.getWorldMatrix()), e.position.addInPlace(i), ujs.notify("wnp.request.saveHistory"), ujs.notify("wnp.engine3D.object.clone")
            };
            e.buildObject(o, o.programmableInstance, n.getFloor(), r)
        }
    }, c.prototype.removeObject = function(e, n) {
        if (e) {
            this.deselectObject();
            var i = e.getFloor();
            if (this.isGroup(e)) {
                var o = e.getChildren();
                e.isDeleted = !0, this.addHistory(e, {
                    floor: i,
                    isGroup: !0
                }, t.DELETEACTION);
                for (var r = 0, s = o.length; s > r; r++)
                    this.removeObject(o[r], !0)
            } else
                i.structure.removeElement("objects", e.structure), n || (this.addHistory(e, {
                    floor: i
                }, t.DELETEACTION), e.structure.isDeleted = !0), e.traverse(function(t) {
                    t.isVisible && (t.wasVisible = !0), t.isVisible = !1
                })
        }
    }, c.prototype.onAddToProducts = function() {
        var e = wnp.Constants.BACK_URL + "ws/add-model";
        if (i && i.structure && t.isSelectableObject(i)) {
            var n = i.structure,
                o = n.filename || "object";
            ujs.ajax({
                method: "POST",
                url: e,
                withCredentials: !0,
                params: "action=add&model=model&is_active=0&name=" + o + "&encoded=1&builder_id=" + n.builderId + "&params=" + JSON.stringify(n.programmableInstance.params) + "&materials=" + JSON.stringify(ujs.serializeObject(n.programmableInstance.materials)),
                success: function(t) {
                    Logger.message(t), wnp.UI.MessageBox.show({
                        title: _("Object added"),
                        message: _("Object is now available in the backoffice"),
                        buttonAText: _("Close"),
                        buttonA: !0
                    })
                }
            })
        } else if (i && t.isGroup(i)) {
            for (var r = i, s = {}, a = {}, o = "Group", l = 0; l < r.getChildren().length; l++) {
                var h = r.getChildren()[l];
                if (h.structure && -1 !== h.name.indexOf("Object_")) {
                    var c = h.position.clone();
                    s[l] = {
                        builder_id: h.structure.builderId,
                        type: h.structure.type,
                        filename: h.structure.filename,
                        params: h.structure.programmableInstance.params,
                        rotation: {
                            x: h.rotation.x,
                            y: h.rotation.y,
                            z: h.rotation.z
                        },
                        position: {
                            x: c.x,
                            y: c.y + r.position.y,
                            z: c.z
                        }
                    }, a[l] = ujs.serializeObject(h.structure.programmableInstance.materials)
                }
            }
            ujs.ajax({
                method: "POST",
                url: e,
                withCredentials: !0,
                params: "action=add&model=model&is_active=0&name=" + o + "&encoded=1&builder_id=0&params=" + JSON.stringify(s) + "&materials=" + JSON.stringify(a),
                success: function(t) {
                    Logger.message(t)
                }
            })
        }
    }, c.prototype.update = function() {}, c.prototype.addHistory = function(t, e, n) {
        if (this.historycmp)
            switch (n) {
                case this.MOVEACTION:
                case this.ROTATEACTION:
                case this.GROUPACTION:
                case this.DELETEACTION:
                case this.ADDACTION:
                case this.REFRESHACTION:
                default:
                    "avatar" !== t.id && this.historycmp.actionDone(t, e, n, this)
            }
    }, c.prototype.undoMove = function(e, n) {
        t.historyMove(e, n.oldPosition, n.oldRotation)
    }, c.prototype.redoMove = function(e, n) {
        t.historyMove(e, n.newPosition, n.newRotation)
    }, c.prototype.undoRotate = c.prototype.undoMove, c.prototype.redoRotate = c.prototype.redoMove, c.prototype.historyMove = function(t, e, n) {
        t.position.copyFromFloats(e.x, e.y, e.z), t.rotation.copyFromFloats(n.x, n.y, n.z), ujs.notify("wnp.request.saveHistory"), ujs.notify("wnp.engine3D.object.translate", {
            object: t
        }), ujs.notify("wnp.engine3D.object.rotate", {
            object: t
        })
    }, c.prototype.undoRefresh = function(e, n) {
        t.historyRefresh(e, n, "exValue")
    }, c.prototype.redoRefresh = function(e, n) {
        t.historyRefresh(e, n, "newValue")
    }, c.prototype.historyRefresh = function(t, e, n) {
        var i = wanaplan.getComponentByName("ObjectComponent3D");
        for (var o in e)
            "position" == o ? (t.position.copyFrom(e[o][n]), t.structure.position = t.position) : ujs.setProperty(t.structure, o, e[o][n]);
        i.refreshObject(t)
    }, c.prototype.undoGroup = function(e, n) {
        t.historyGroup(e, n)
    }, c.prototype.redoGroup = function(e, n) {
        t.historyGroup(e, n)
    }, c.prototype.historyGroup = function(e, n) {
        n.wasAdd ? (t.deselectObject(), 2 == n.group.getChildren().length ? t.deleteGroup(n.group, !0) : t.removeFromGroup(n.object, n.group, !0)) : t.addToGroup(n.object, n.group, !0)
    }, c.prototype.undoDelete = function(e, n) {
        t.historyDelete(e, n)
    }, c.prototype.redoDelete = function(e, n) {
        t.historyDelete(e, n)
    }, c.prototype.undoAdd = c.prototype.redoDelete, c.prototype.redoAdd = c.prototype.undoDelete, c.prototype.historyDelete = function(t, e) {
        e.isGroup ? t.isDeleted = !t.isDeleted : t.structure.isDeleted = !t.structure.isDeleted;
        var n = e.isGroup ? t.isDeleted : t.structure.isDeleted;
        if (t.traverse(function(t) {
                t.isVisible = !n && t.wasVisible
            }), e.isGroup)
            for (var i = t.getChildren(), o = 0; o < i.length; o++)
                n ? e.floor.structure.removeElement("objects", i[o].structure) : e.floor.structure.insertElement("objects", i[o].structure);
        else
            n ? e.floor.structure.removeElement("objects", t.structure) : e.floor.structure.insertElement("objects", t.structure)
    }, c.prototype.setupHistory = function() {
        this.historycmp = this.core.getComponentByName("HistoryComponent"), this.historycmp && (this.historycmp.registerAction(this.MOVEACTION, this.undoMove, this.redoMove, this), this.historycmp.registerAction(this.ROTATEACTION, this.undoRotate, this.redoRotate, this), this.historycmp.registerAction(this.REFRESHACTION, this.undoRefresh, this.redoRefresh, this), this.historycmp.registerAction(this.GROUPACTION, this.undoGroup, this.redoGroup, this), this.historycmp.registerAction(this.DELETEACTION, this.undoDelete, this.redoDelete, this), this.historycmp.registerAction(this.ADDACTION, this.undoAdd, this.redoAdd, this))
    }, c
}();