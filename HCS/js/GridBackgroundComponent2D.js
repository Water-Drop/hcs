var GridBackgroundComponent2D = function() {
    var t = function(t) {
        BaseComponent2D.call(this, t, "GridBackgroundComponent2D"), this.priority = 1e3, this.background = !1, this.visibility = !0, this.scale = 1, this.translation = new BABYLON.Vector3(0, 0, 0)
    };
    return t.prototype = new BaseComponent2D, t.prototype.startListening = function() {
        this.onBackgroundChange = this.onBackgroundChange.bind(this), this.onAddBackground = this.onAddBackground.bind(this), this.onEndBackground = this.onEndBackground.bind(this), document.addEventListener("wnp.engine2d.backgroundChange", this.onBackgroundChange), document.addEventListener("wnp.engine2d.onAddBackground", this.onAddBackground), document.addEventListener("wnp.engine2d.onEndBackground", this.onEndBackground), this.core.engine2D.registerEventCb("GridBackgroundComponent2D.static-draw", this.priority, "static-draw", null, null, this.onStaticDraw.bind(this), null)
    }, t.prototype.stopListening = function() {
        document.removeEventListener("wnp.engine2d.backgroundChange", this.onBackgroundChange), document.removeEventListener("wnp.engine2d.onAddBackground", this.onAddBackground), document.removeEventListener("wnp.engine2d.onEndBackground", this.onEndBackground), this.core.engine2D.unregisterEventCb("GridBackgroundComponent2D.static-draw")
    }, t.prototype.initialize = function() {
        var t = {
            id: "gridBackgroundMenu",
            title: _("Add Background"),
            action: "wnp.engine2d.onAddBackground",
            cancelAction: "wnp.engine2d.onEndBackground"
        };
        ujs.notify("wnp.menu.main.add", {
            item: t,
            menuPath: "draw2D",
            position: 0
        })
    }, t.prototype.onStaticDraw = function(t, e, n) {
        if (this.background && this.visibility === !0) {
            var i = this.background;
            t.save(), t.globalAlpha = .4, t.translate(e.x - this.background.realWidth * n * this.scale / 2 + this.translation.x * n, e.y - this.background.realHeight * n * this.scale / 2 + this.translation.y * n), t.scale(n * this.scale, n * this.scale), t.drawImage(i, 0, 0), t.restore
        }
    }, t.prototype.onBackgroundChange = function(t) {
        this.visibility = t.visibility, this.scale = t.scale, this.background = t.img, this.core.engine2D.requestStaticDraw(), this.translation = t.translation || new BABYLON.Vector3(0, 0, 0), this.core.engine2D.requestStaticDraw(), this.core.structure.params.gridBackground = {
            scale: t.measure,
            translation: this.translation.asArray(),
            points: [t.points[0].asArray(), t.points[1].asArray()]
        }, ujs.notify("wnp.request.saveHistory", {})
    }, t.prototype.onEndBackground = function() {
        wnp.UI.BackgroundPopup.close(void 0, void 0, !0)
    }, t.prototype.onAddBackground = function() {
        wnp.UI.BackgroundPopup.show()
    }, t
}();