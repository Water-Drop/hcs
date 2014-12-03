var TransparencyComponent = function() {
    var t = 0,
        e = t,
        n = function(t) {
            BaseComponent3D.call(this, t, "TransparencyComponent"), this._item = {
                title: _("Transparency"),
                id: "transparencyButton",
                icon: "http://v2.wanaplan.fr/images/icon-transparency.png",
                action: "wnp.request.switch-transparency",
                addClass: "hidden",
                index: 12
            }
        };
    return n.prototype = Object.create(BaseComponent3D.prototype), n.prototype.initialize = function() {
        BaseComponent3D.prototype.initialize.call(this), ujs.notify("wnp.menu.top.sub.add", {
            item: this._item,
            menuPath: "."
        })
    }, n.prototype.startListening = function() {
        if (this.switchTransparencyMode = this.switchTransparencyMode.bind(this), wanaplan.mode === wanaplan.MODE_VIEWER) {
            var t = document.getElementById("switch-transparency-btn");
            t.setAttribute("title", _("Toggle transparency")), t.addEventListener("click", this.switchTransparencyMode, !1)
        }
        document.addEventListener("wnp.request.switch-transparency", this.switchTransparencyMode, !1), document.addEventListener("wnp.engine3d.wallTransparency.on", this.onWallTransparencyOn, !1), document.addEventListener("wnp.engine3d.wallTransparency.off", this.onWallTransparencyOff, !1)
    }, n.prototype.stopListening = function() {
        document.removeEventListener("wnp.request.switch-transparency", this.switchTransparencyMode), document.removeEventListener("wnp.engine3d.wallTransparency.on", this.onWallTransparencyOn), document.removeEventListener("wnp.engine3d.wallTransparency.off", this.onWallTransparencyOff)
    }, n.prototype.switchTransparencyMode = function() {
        var n = wanaplan.getComponentByName("WallComponent3D"),
            i = wanaplan.engine3D.cameraFeatures;
        if (i.setCamera(wanaplan.engine3D.camera), e = (e + 1) % 2, e === t) {
            i && i.stopTransparency();
            for (var o in wanaplan.structure.members)
                n.switchTransparentStatusByStructure(wanaplan.structure.members[o]);
            ujs.notify("wnp.engine3d.wallTransparency.off")
        } else if ("Camera" == i.camera.name) {
            for (var o in wanaplan.structure.members)
                n.switchTransparentStatusByStructure(wanaplan.structure.members[o]);
            i && i.startTransparency(), ujs.notify("wnp.engine3d.wallTransparency.on")
        }
    }, n.prototype.setTransparencyMode = function(t) {
        e != t && this.switchTransparencyMode()
    }, n.prototype.onContextChanged = function(t) {
        BaseComponent3D.prototype.onContextChanged.call(this, t), "3D" == t ? ujs.notify("wnp.menu.top.sub.replace", {
            item: {
                id: "transparencyButton",
                addClass: ""
            },
            merge: !0
        }, !0) : ujs.notify("wnp.menu.top.sub.replace", {
            item: {
                id: "transparencyButton",
                addClass: "hidden"
            },
            merge: !0
        }, !0)
    }, n.prototype.onWallTransparencyOn = function() {
        var t = wanaplan.getComponentByName("TopMenuComponent");
        if (t) {
            var e = t.submenu;
            e.replaceMenuItem("transparencyButton", {
                icon: "http://v2.wanaplan.fr/images/icon-opacity.png"
            }, !0), e.updateHtml()
        }
    }, n.prototype.onWallTransparencyOff = function() {
        var t = wanaplan.getComponentByName("TopMenuComponent");
        if (t) {
            var e = t.submenu;
            e.replaceMenuItem("transparencyButton", {
                icon: "http://v2.wanaplan.fr/images/icon-transparency.png"
            }, !0), e.updateHtml()
        }
    }, n.prototype.onEngineSwitched = function() {
        e !== t && this.switchTransparencyMode()
    }, n
}();