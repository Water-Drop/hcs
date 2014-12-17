var hcsdesign = hcsdesign || {}, API = function() {
    var t = {};
    t.CONTEXT_2D = hcsdesign.ENGINE_2D || 1, t.CONTEXT_3D = hcsdesign.ENGINE_3D || 2, t.MODE_2D_NORMAL = 1, t.MODE_2D_DRAG = 2, t.MODE_2D_DRAW = 4, t.MODE_2D_CONTEXTMENU = 8, t.MODE_2D_SUBSLOPE = 16, t.ORBITCAMERA = 0, t.FPSCAMERA = 1, t.e2D = {}, t.e3D = {}, t.material = {}, t.UI = {}, t.HTML = {}, t.Utils = {}, t.setContext = function(t) {
        hcsdesign.setSelectedEngine(t)
    }, t.getContext = function() {
        hcsdesign.getSelectedEngine()
    }, t.getMode = function(e) {
        var n = e || hcsdesign.getSelectedEngine();
        return n == t.CONTEXT_2D ? hcsdesign.engine2D.getMode(name) : void (n == t.CONTEXT_3D)
    }, t.getComponent = function(t) {
        var e = hcsdesign.getComponentByName(t);
        return e || Logger.warning("[WnpAPI] getComponent : The component " + t + " has not been found."), e
    }, t.setMode = function(e, n) {
        var i = n || hcsdesign.getSelectedEngine();
        i == t.CONTEXT_2D ? (hcsdesign.engine2D.setMode(e), hcsdesign.engine2D.requestStaticDraw()) : i == t.CONTEXT_3D && hcsdesign.engine2D.setMode(e)
    }, t.setCameraById = function(t) {
        var e = hcsdesign.getComponentByName("CameraComponent");
        e && e.getActiveCameraId() !== t && this.e3D.switchCamera()
    }, t.getCameraId = function() {
        return hcsdesign.getComponentByName("CameraComponent").getActiveCameraId()
    }, t.getData = function(t) {
        return hcsdesign.structure.customData[t]
    }, t.setData = function(t, e) {
        hcsdesign.structure.customData[t] = e
    }, t.getCurrentFloor = function() {
        return hcsdesign.getSelectedStructure()
    }, t.getFloor = function(t) {
        var e = hcsdesign.structure.members[t];
        return e || Logger.warning("[WnpAPI] getFloor : Requested floor id was not found"), e
    }, t.getWalls = function(t) {
        var e = t || hcsdesign.getSelectedStructure();
        return e.walls
    }, t.getSubSlopes = function(t) {
        var e = t || hcsdesign.getSelectedStructure();
        return e.subslopes
    }, t.getRooms = function(t, e) {
        var n = e || hcsdesign.getSelectedStructure(), i = t || !0;
        return i ? n.internalRooms : n.externalRooms
    }, t.getObjects = function(t) {
        var e = t || hcsdesign.getSelectedStructure();
        return e.objects
    }, t.registerAction = function(t, e, n, i) {
        hcsdesign.getComponentByName("HistoryComponent").registerAction(t, e, n, i)
    }, t.addHistory = function(t, e, n, i) {
        hcsdesign.getComponentByName("HistoryComponent").actionDone(t, e, n, i)
    }, t.material.TexturedMaterial = function(t, e) {
        return new hcs.TexturedMaterial(t, hcsdesign.engine3D.scene, e)
    }, t.material.WhiteMaterial = function(t, e) {
        return new hcs.WhiteMaterial(t, hcsdesign.engine3D.scene, e)
    }, t.material.LeatherMaterial = function(t, e) {
        return new hcs.LeatherMaterial(t, hcsdesign.engine3D.scene, e)
    }, t.material.MetalMaterial = function(t, e) {
        return new hcs.MetalMaterial(t, hcsdesign.engine3D.scene, e)
    }, t.material.WoodMaterial = function(t, e) {
        return new hcs.WoodMaterial(t, hcsdesign.engine3D.scene, e)
    }, t.material.MattMaterial = function(t, e) {
        return new hcs.MattMaterial(t, hcsdesign.engine3D.scene, e)
    }, t.material.GlassMaterial = function(t, e) {
        return new hcs.GlassMaterial(t, hcsdesign.engine3D.scene, e)
    }, t.material.PlasticMaterial = function(t, e) {
        return new hcs.PlasticMaterial(t, hcsdesign.engine3D.scene, e)
    }, t.material.TileMaterial = function(t, e) {
        return new hcs.TileMaterial(t, hcsdesign.engine3D.scene, e)
    }, t.UI.getWidgetContainer = function() {
        return document.getElementById("modalWidgets")
    }, t.HTML.addHTML = function(t, e, n, i) {
        HTMLHelper.insertHTML(t, e || document.body, n, i)
    }, t.HTML.addScript = function(t, e, n) {
        HTMLHelper.addScript(t, void 0, e, n)
    }, t.HTML.addCSS = function(t, e, n) {
        HTMLHelper.addStylesheet(t, void 0, e, n)
    }, t.Utils.ajax = function(t) {
        var e = t || {};
        e.params = t.data, ujs.ajax(e)
    };
    var e = {};
    return t.listen = function(t, n) {
        return e[t] || (e[t] = []), -1 != e[t].indexOf(n) ? void Logger.warning("[WnpAPI] Event Already listened : cannot listen twice with the same function") : (document.addEventListener(t, n, !1), void e[t].push(n))
    }, t.unListen = function(t, n) {
        if (!e[t])
            return void Logger.warning("[WnpAPI] No such event is listened");
        var i = e[t].indexOf(n);
        return -1 == i ? void Logger.warning("[WnpAPI] No such function listens to this event") : (document.removeEventListener(t, n, !1), void e[t].splice(i, 1))
    }, t.getListeners = function(t) {
        return e[t]
    }, t.getFloorAsPolygon = function(t) {
        var e = hcsdesign.getComponentByName("FloorComponent3D");
        if (t = 0, !(t >= e.structure.members.length)) {
            for (var n = e.structure.members[t], i = [], o = n.points.length; o--; ) {
                var r = new BABYLON.Vector2;
                r.copyFrom(n.points[o].position), i.push(r)
            }
            return i
        }
    }, t.e2D.getMousePos = function() {
        return hcsdesign.engine2D._pointerManager.getStatus().planPos.clone()
    }, t.e2D.requestStaticDraw = function() {
        hcsdesign.engine2D.requestStaticDraw()
    }, t.e2D.requestDynamicDraw = function() {
        hcsdesign.engine2D.requestDynamicDraw()
    }, t.e3D.getCanvas = function() {
        return hcsdesign.engine3D.canvas
    }, t.e3D.getScene = function() {
        return hcsdesign.engine3D.scene
    }, t.e3D.getCamera = function() {
        return hcsdesign.engine3D.scene.activeCamera
    }, t.e3D.switchCamera = function() {
        ujs.notify("hcs.request.cameraChanged", {activeCameraId: this.cameraActiveId,activeCamera: this.cameraActiveId ? "fpsCamera" : "orbitCamera"})
    }, t.e3D.getCameraFeatures = function() {
        return hcsdesign.engine3D.cameraFeatures
    }, t.e3D.getMeshes = function() {
        return hcsdesign.engine3D.scene.meshes
    }, t.e3D.getRoomMesh = function() {
        return hcsdesign.engine3D.searchComponent("RoomComponent3D").mesh
    }, t.e3D.setRoomFloorMaterial = function(t) {
        t instanceof hcs.StandardMaterial && hcsdesign.engine3D.searchComponent("RoomComponent3D").setSideMaterial(t)
    }, t.e3D.setRoomCeilingMaterial = function(t) {
        t instanceof hcs.StandardMaterial && hcsdesign.engine3D.searchComponent("RoomComponent3D").setCeilingMaterial(t)
    }, t.e3D.getTopLevelMeshes = function() {
        for (var t = hcsdesign.engine3D.scene, e = [], n = null, i = 0, o = t.meshes.length; o > i; i++)
            n = t.meshes[i].getTopLevelObject(), n.parent && -1 === e.indexOf(n) && e.push(n);
        return e
    }, t.e3D.getObjects = function() {
        for (var t, e = hcsdesign.engine3D.scene, n = [], i = 0, o = e.meshes.length; o > i; i++)
            t = e.meshes[i], -1 !== t.name.indexOf("Object_") && n.push(t);
        return n
    }, t.e3D.getSunlight = function() {
        return hcsdesign.engine3D.scene.lights.dir
    }, t.e3D.getSkySphere = function() {
        return hcsdesign.engine3D.scene.getMeshByName("skysphere")
    }, t.e3D.getGround = function() {
        return hcsdesign.engine3D.scene.getMeshByName("ground")
    }, t.e3D.projectOnPlane = function(t, e, n) {
        return hcsdesign.engine3D.projectMouseOnPlane(t, e, n)
    }, t.e3D.castShadows = function(t) {
        hcsdesign.engine3D.castShadows(t)
    }, t.e3D.uncastShadows = function(t) {
        hcsdesign.engine3D.uncastShadows(t)
    }, t.e3D.getSelectedObject = function() {
        return hcsdesign.getComponentByName("EditionComponent3D").getSelectedObject()
    }, t.e3D.intersect = function(t, e, n) {
        var i = n || hcsdesign.engine3D.scene.meshes;
        return hcsdesign.engine3D.collideWithMeshes(t, e, i)
    }, t.e3D.addSelectedEvent = function(t) {
        hcsdesign.getComponentByName("EditionComponent3D").on("selectObject", t)
    }, t.e3D.addDeselectedEvent = function(t) {
        hcsdesign.getComponentByName("EditionComponent3D").on("deselectObject", t)
    }, t
}(), API = API || {};
API.Menu = function() {
    var t = {};
    return t.MENU_TOP = "hcs.menu.top", t.MENU_TOP_2 = "hcs.menu.top.sub", t.MENU_MAIN = "hcs.menu.main", t.add = function(t, e, n) {
        var i = n || ".";
        ujs.notify(t + ".add", {item: e,menuPath: i})
    }, t
}();