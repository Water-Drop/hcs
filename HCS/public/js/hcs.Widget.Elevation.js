var wnp = window.wnp || {};
wnp.Widget = wnp.Widget || {}, wnp.Widget.Elevation = function() {
    var t, e, n, i = document.getElementById("modalWidgets"), o = !1, r = 38, s = 287, a = function(e) {
        i = document.getElementById("modalWidgets"), t = e, this.imagePath = "images/remote-controller/", this.domElement = this.buildHTML(), this.defaultDomStyle = "top: " + r + "px;right: " + s + "px;", this.domElement.setAttribute("style", this.defaultDomStyle), i.appendChild(this.domElement), this.slider = document.getElementById("edition-slider"), this.sliderContainer = document.getElementById("edition-slider-content"), this.globalSliderContainer = document.getElementById("edition-slider-bar"), this.globalSliderContainerHeight = this.globalSliderContainer.scrollHeight, this.sliderMin = 12, this.sliderMax = 114, this.sliderPos = this.sliderMin, this.sliderSelected = !1, n = this, this.buttonState = null, this.running = !0, this.updateSliderPos(0), this.hide(), e.on("selectObject", this.onSelectObject), e.on("deselectObject", this.onDeselectObject)
    };
    return a.prototype.buildHTML = function() {
        var t = document.createElement("div");
        t.setAttribute("id", "edition-controller");
        var e = document.createElement("ul");
        e.setAttribute("id", "edition-panel");
        var n = document.createElement("li");
        n.setAttribute("id", "edition-slider-bar"), n.setAttribute("title", _("距地面高度"));
        var i = document.createElement("div");
        i.setAttribute("id", "edition-slider-content");
        var o = document.createElement("img");
        return o.setAttribute("id", "edition-slider"), i.appendChild(o), n.appendChild(i), e.appendChild(n), t.appendChild(e), t
    }, a.prototype.updateDomPosition = function(t, e) {
        this.defaultDomStyle = "top: " + e + "px;right: " + t + "px;", this.domElement.setAttribute("style", this.defaultDomStyle)
    }, a.prototype.movePanel = function() {
        var t = wanaplan.engine3D.canvas.height, e = Math.round(r + (t - r) / 2 - document.getElementById("edition-panel").offsetHeight / 2);
        n.updateDomPosition(s, e)
    }, a.prototype.show = function() {
        document.getElementById("edition-panel").style.display = "block"
    }, a.prototype.hide = function() {
        document.getElementById("edition-panel").style.display = "none"
    }, a.prototype.onSelectObject = function() {
        n.show(), n.movePanel(), n.updateSliderPos(), n.slider.addEventListener("pointerdown", n.onSliderMouseDown, !1), document.addEventListener("pointermove", n.onSliderMouseMove, !1), document.addEventListener("pointerup", n.onMouseUp, !1), document.addEventListener("pointercancel", n.onMouseUp, !1), o = !0
    }, a.prototype.onDeselectObject = function() {
        n.hide(), n.slider.removeEventListener("pointerdown", n.onSliderMouseDown), document.removeEventListener("pointermove", n.onSliderMouseMove), document.removeEventListener("pointerup", n.onMouseUp), document.removeEventListener("pointercancel", n.onMouseUp), o = !1
    }, a.prototype.init = function(t) {
        this.updateSliderPos(this.sliderValue(this.sceneToRelativeValue(t)))
    }, a.prototype.onSliderMouseDown = function(i) {
        i.preventDefault(), n.sliderSelected = !0, e = t.getSelectedObject().position.y
    }, a.prototype.onSliderMouseMove = function(t) {
        if (n.sliderSelected) {
            var e = (t.touches && t.touches.length ? t.touches[0].clientY : t.clientY) || 0, i = n.getValueFromMouse(e), o = n.sceneToRelativeValue(), r = n.sceneValue(i - o);
            n.setElevationVelocity(r), n.updateSliderPos(), t.preventDefault()
        }
    }, a.prototype.onMouseUp = function() {
        if (n.sliderSelected) {
            n.sliderSelected = !1;
            var i = t.getSelectedObject().position.clone(), o = i.clone();
            i.y = e;
            var r = t.getSelectedObject().rotation;
            ujs.notify("wnp.request.historyAction", {component: t,object: t.getSelectedObject(),params: {oldPosition: i,newPosition: o,oldRotation: r,newRotation: r},action: t.MOVEACTION})
        }
    }, a.prototype.setElevationVelocity = function(e) {
        t.moveObject(t.getSelectedObject(), new BABYLON.Vector3(0, e, 0))
    }, a.prototype.updateSliderPos = function(t) {
        this.sliderPos = void 0 !== t ? t : this.sliderValue(this.sceneToRelativeValue()), this.slider.style.top = this.sliderPos + "px"
    }, a.prototype.sceneToRelativeValue = function() {
        var e = 0, n = t.getSelectedObject().getFloor().structure.height, i = t.getSelectedObject().position.y;
        return i = ujs.Math.clamp(i, e, n), (i - e) / (n - e)
    }, a.prototype.sliderToRelativeValue = function(t) {
        var e = t || this.sliderPos;
        return e = ujs.Math.clamp(e, this.sliderMin, this.sliderMax), 1 - (e - this.sliderMin) / (this.sliderMax - this.sliderMin)
    }, a.prototype.sliderValue = function(t) {
        return t * (-this.sliderMax + this.sliderMin) + this.sliderMax - n.slider.offsetHeight / 2
    }, a.prototype.sceneValue = function(e) {
        return e * t.getSelectedObject().getFloor().structure.height
    }, a.prototype.isActive = function() {
        return o
    }, a.prototype.getValueFromMouse = function(t) {
        for (var e = n.slider, i = e.parentNode, o = 0, r = i; r != document && r != window; )
            o += r.offsetTop || 0, r = r.parentNode;
        return 1 - ujs.Math.clamp((t - o - this.sliderMin) / (this.sliderMax - this.sliderMin), 0, 1)
    }, a
}();
