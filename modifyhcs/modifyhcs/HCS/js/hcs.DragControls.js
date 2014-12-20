/*
 * Author：虞思源
 * 
 * 在场景,3D场景，模型上绑定拖动事件。
 * 在场景中每次创建模型，调用这里的addDraggable
 * 删除时调用removeDraggable
 * 2D场景生成3D时，注意不要为墙添加draggable
 * 
 */
var hcs = window.hcs || {};
hcs.DragControls = function(model, scene, position, mouse) {
    function move(event) {
        if (dragControl.enabled) {
            event.preventDefault();
            var position = model.createPickingRay(event.clientX, event.clientY);
            if (dragControl.enabled && selected) {
                var tmp, plane = position.distanceToPlane(distance);
                _xyz.length > 1 ? (tmp = position.direction.scale(plane), 
				tmp.addInPlace(position.origin), tmp.subtractInPlace(l)) : (tmp = position.direction.scale(selected.distance),
                    tmp.addInPlace(position.origin), tmp.subtractInPlace(l));
                var r = selected.pickedMesh.parent ? selected.pickedMesh.parent.getWorldMatrix().clone() : BABYLON.Matrix.Identity();
                r.invert(),
                tmp = BABYLON.Vector3.TransformCoordinates(tmp, r), 
				h.copyFrom(selected.pickedMesh.position), px && (selected.pickedMesh.position.x = tmp.x),
				py && (selected.pickedMesh.position.y = tmp.y), pz && (selected.pickedMesh.position.z = tmp.z),
				selected.pickedMesh.computeWorldMatrix(!0);
                var s = selected.pickedMesh.getFloor();
                return s && s.markAsDirty(), ujs.notify("hcs.engine3d.dragcontrols.start", {selected: selected}), M("drag", selected), void (u === !1 ? u = 0 : 0 === u && (u = !0))
            }
            ujs.notify("hcs.engine3d.dragcontrols.move"), u = !1
        }
    }
    function drag(mouse) {
        if (dragControl.enabled) {
            if (mouse.preventDefault(), 0 === mouse.button) {
                var o = model.createPickingRay(mouse.clientX, mouse.clientY), r = o.intersectMeshes(model.meshes, !0, !0);
                if (r && -1 == position.indexOf(r.pickedMesh.getTopLevelObject(d)) && (r = null), r && r.hit) {
                    if (flag && -1 === r.pickedMesh.name.indexOf("_girl"))
                        return;
                    console.warn("TODO : moveObject() de l'edition component pour avoir le magnetisme en event"), selected = r, selected.pickedMesh = selected.pickedMesh.getTopLevelObject(d), distance = new BABYLON.Plane(0, 1, 0, -selected.pickedPoint.y);
                    var s = selected.pickedMesh.parent ? selected.pickedMesh.parent.getWorldMatrix().clone() : BABYLON.Matrix.Identity(), h = s.clone();
                    return h.invert(), l.copyFrom(BABYLON.Vector3.TransformCoordinates(selected.pickedPoint, h)).subtractInPlace(selected.pickedMesh.position), l.copyFrom(BABYLON.Vector3.TransformNormal(l, s)), scene.style.cursor = "move", M("dragstart", selected), void M("mousedown", selected)
                }
            }
            M("mousedown", {hit: !1})
        }
    }//开始拖动
    function dragEnd(mouse) {
        if (dragControl.enabled) {
            mouse.preventDefault();
            var position = !1;
            ujs.notify("hcs.engine3d.dragcontrols.end", {selected: selected}), 
			selected && 1 == u ? (u = !1, position = !0, M("dragend", selected), selected = null) : selected && (selected = null), scene.style.cursor = "auto",
			M("mouseup", {dragged: position})
        }
    }//结束拖动
    var selected, position = position || [], l = new BABYLON.Vector3, h = new BABYLON.Vector3, c = (new BABYLON.Vector2, new BABYLON.Vector2), u = !1, p = 1;
    this.GROUPS = 0, this.OBJECTS = 1;
    var d = this.GROUPS, 
	dragControl = this, 
	mouse = mouse || {}, 
	flag = !1, 
	c = (mouse.offsets || {x: 0,y: 0}, 
	{width: mouse.width || scene.width,height: mouse.height || scene.height}), 
	distance = new BABYLON.Plane(0, 1, 0, 0), y = !1, start = function() {
        y || (scene.addEventListener("pointermove", move, !1),
		scene.addEventListener("pointerdown", drag, !1), 
		scene.addEventListener("pointerup", dragEnd, !1), y = !0)
    }, end = function() {
        y && (scene.removeEventListener("pointermove", move), 
		scene.removeEventListener("pointerdown", drag), 
		scene.removeEventListener("pointerup", dragEnd), y = !1)
    };
    this.enabled = !0;
    var b = {};
    start(), this.setHardwareScaling = function(model) {
        p = model
    }, this.setDomElement = function(model) {
        end(), scene = model, start()
    }, this.setDraggingMode = function(model) {
        d = model
    }, this.startEventsListening = function() {
        start()
    }, this.stopEventListening = function() {
        end()
    }, this.on = function(model, scene) {
        return b[model] || (b[model] = []), b[model].push(scene), dragControl
    }, this.off = function(model, scene) {
        var position = b[model];
        return position ? (position.indexOf(scene) > -1 && position.splice(scene, 1), dragControl) : dragControl
    }, this.lock = function() {
        flag = !0
    }, this.unlock = function() {
        flag = !1
    };
    var px, py, pz,
        M = function(model, scene, position) {
        var mouse = b[model];
        if (mouse && !position)
            for (var o = 0; o < mouse.length; o++)
                mouse[o](scene)
                };
    px = py = pz = !0, this.constrains = function(model) {
        return void 0 === model && (model = "xyz"),
		_xyz = model, px = py = pz = !1,
		model.indexOf("x") > -1 && (px = !0),
		model.indexOf("y") > -1 && (py = !0),
		model.indexOf("z") > -1 && (pz = !0),
		this
    }, this.addDraggable = function(model) {
        model.traverse(function(model) {
			position.push(model)
            })
    }, this.addUnremovableDraggable = function(model) {
        model.traverse(function(model) {
                   model._unremovableDraggable = !0, position.push(model)
                   })
    }, this.removeDraggable = function(model) {
        var scene = -1;
        model.traverse(function(model) {
                   model._unremovableDraggable || (scene = position.indexOf(model), position.splice(scene, 1))
                   })
    }, this.resetDraggable = function() {
        var model = this;
        position.forEach(function(scene) {
                  model.removeDraggable(scene)
                  })
    }, this.onDocumentResize = function() {
        c = {width: window.innerWidth,height: window.innerHeight}
    }, this.setScreenSize = function(model, scene) {
        c = {width: model,height: scene}
    }, this.setSelectedObject = function(model) {
        selected.pickedMesh = model, l.copyFrom(selected.pickedPoint).subtractInPlace(selected.pickedMesh.position)
    }, this.reset = function() {
        selected = !1
    }, this.refreshReferentPlane = function() {
        var model = 0;
        selected && (model = -selected.pickedPoint.y), distance = new BABYLON.Plane(0, 1, 0, model)
    }
};