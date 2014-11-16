/*
 * Author：
 * Date：
 * Email：
 * 
 */
var hcs = window.hcs || {};
hcs.UI = hcs.UI || {}, hcs.UI.BackgroundPopup = function() {
    function t(t, e, n) {
        var i = document.createElement(t);
        return n && i.setAttribute("id", n), e && i.setAttribute("class", e), i
    }
    function e(t) {
        if (!t.hasOwnProperty("offsetX")) {
            var e = curtop = 0;
            if (t.currentTarget) {
                var n = t.currentTarget;
                do
                    e += n.offsetLeft, curtop += n.offsetTop;
                while (n = n.offsetParent)
                    }
            t.offsetX = t.clientX - e, t.offsetY = t.clientY - curtop
        }
        return t
    }
    var n, i = null, o = 100, r = !0, s = 560, a = 320, l = 1, h = new BABYLON.Vector2(0, 0), c = new BABYLON.Vector2(0, 0), u = !1, p = 1, d = [new BABYLON.Vector2(10, 10), new BABYLON.Vector2(100, 10)], m = function(t) {
        var t = t || {};
        t.autoSize = t.autoSize === !1 ? !1 : !0, t.width = 600, t.height = 540, hcs.UI.Frame.call(this, t)
    };
    return m.prototype = new hcs.UI.Frame, m.prototype.buildHTML = function() {
        this.config.layout || "horizontal";
        this.domElement = t("div", "window", "backgroundPopup"), this.header = t("header", "window-title"), this.closeWindow = t("span", "window-close"), this.config.showCloseButton === !1 && (this.closeWindow.style.display = "none"), this.header.appendChild(this.closeWindow), this.headerTitle = t("h1");
        var e = t("span", "window-title-text");
        e.innerHTML = this.content.title || _("Choose and set background"), this.headerTitle.appendChild(e), this.header.appendChild(this.headerTitle), this.domElement.appendChild(this.header), this.mainContent = t("div", "window-content window-content-background"), this.domElement.appendChild(this.mainContent), i.setPosition((window.innerWidth - this.windowSize.width) / 2, (window.innerHeight - this.windowSize.height) / 2), this.domElement.style.width = this.windowSize.width + "px", this.domElement.style.height = this.windowSize.height + "px";
        var n = wanaplan.structure.params.gridBackground || {};
        o = n.scale || o, n.translation && BABYLON.Vector2.FromArrayToRef(n.translation, 0, h), n.points && (BABYLON.Vector2.FromArrayToRef(n.points[0], 0, d[0]), BABYLON.Vector2.FromArrayToRef(n.points[1], 0, d[1])), (!d[1] || BABYLON.Vector2.Distance(d[0], d[1]) < 90) && (d[1] = d[0].add(new BABYLON.Vector2(100, 0))), this.mainCanvas = t("canvas", "window-canvas"), this.mainCanvas.style.background = "white", this.mainCanvas.width = s, this.mainCanvas.style.width = s + "px", this.mainCanvas.height = a, this.mainCanvas.style.height = a + "px", this.mainCtx = this.mainCanvas.getContext("2d");
        var r = function(t, e) {
            i.onMouseEvent(t, e)
        };
        this.pointerManager = new hcs.PointerManager(void 0, r, this.mainCanvas)
    }, m.prototype.onMouseEvent = function(t, e) {
        e.actions == e.ACTION_DRAGSTART ? i.onCanvasMouseDown(t) : e.actions == e.ACTION_DRAGGING ? i.onCanvasDrag(t, e) : e.actions == e.ACTION_SCROLLDOWN ? (l -= .04, l = .6 > l ? .6 : l) : e.actions == e.ACTION_SCROLLUP && (l += .04, l = l > 6 ? 6 : l), i.updateCtx()
    }, m.prototype.onCanvasDrag = function(t, e) {
        if (1 === u || 0 === u) {
            var n = e.posDelta.scaleInPlace(1 / l), o = d[u].add(n);
            BABYLON.Vector2.Distance(o, d[0 == u ? 1 : 0]) > 10 && (d[u] = o)
        } else
            2 === u ? (d[0].addInPlace(e.posDelta.clone().scaleInPlace(1 / l)), d[1].addInPlace(e.posDelta.clone().scaleInPlace(1 / l))) : h.addInPlace(e.posDelta);
        i.updateCtx(), i.updateGrid()
    }, m.prototype.onCanvasMouseDown = function(t) {
        e(t), c.x = t.offsetX, c.y = t.offsetY, c.subtractInPlace(h), c.scaleInPlace(1 / l), u = BABYLON.Vector2.Distance(c, d[0]) < 10 ? 0 : BABYLON.Vector2.Distance(c, d[1]) < 10 ? 1 : BABYLON.Vector2.Distance(c, d[1].clone().lerp(d[0], .5)) < 10 ? 2 : 3
    }, m.prototype.updateGrid = function() {
        var t = +o, e = 1 / p * BABYLON.Vector2.Distance(d[0], d[1]), i = t / e;
        ujs.notify("hcs.engine2d.backgroundChange", {scale: i,measure: t,visibility: r,img: n,translation: h,points: d})
    }, m.prototype.updateCtx = function() {
        var t = i.mainCtx;
        t.clearRect(0, 0, s, a), t.save(), p = Math.min(s / n.realWidth, a / n.realHeight), t.scale(p * l, p * l), t.translate(h.x / (p * l), h.y / (p * l)), t.drawImage(n, 0, 0);
        Math.round(BABYLON.Vector2.Distance(d[0], d[1]));
        t.restore(), t.save(), t.scale(l, l), t.translate(h.x / l, h.y / l), wanaplan.engine2D.symbols2D.drawMeasure(t, d[0], d[1], o + "cm", "#6E910F"), t.restore()
    }, m.close = function() {
        i && i.close()
    }, m.show = function() {
        if (null == i) {
            i = new hcs.UI.BackgroundPopup({}, {title: _("Choose Background")}), i.initialize();
            var e = t("input", "", "file");
            e.setAttribute("type", "file");
            var r = t("input", "", "scale");
            r.setAttribute("style", "width:100px"), cb = t("input"), cb.setAttribute("type", "checkbox"), cb.setAttribute("checked", "checked"), cb.addEventListener("click", i.handleVisibility, !1), r.addEventListener("change", i.handleScale, !1), r.setAttribute("value", o), e.addEventListener("change", i.handleFileSelect, !1);
            var l = t("div", "warning");
            l.innerHTML = _("Note: your jpg/png won't be saved, and won't be reloaded after use");
            var h = t("div");
            h.innerHTML = "<strong>" + _("Step") + " 1</strong>: " + _("Select your file (jpg, png)") + "  ", h.appendChild(e);
            var c = t("div");
            c.innerHTML = "<strong>" + _("Step") + " 2</strong>: " + _("Drag the arrow and enter the corresponding measure (in cm)") + " ", c.appendChild(r);
            var u = t("div");
            u.innerHTML = "<strong>" + _("Step") + " 3</strong>: " + _("Enable / Disable background"), u.appendChild(cb), i.mainContent.appendChild(l), i.mainContent.appendChild(h), i.mainContent.appendChild(c), n = new Image, n.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP7//wAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==", n.realWidth = s, n.realHeight = a, i.mainContent.appendChild(i.mainCanvas), i.mainContent.appendChild(u)
        }
        i.show()
    }, m.prototype.updateImgSize = function() {
        var t = new Image;
        t.src = n.src, t.setAttribute("style", "position:absolute;top:-1000000000px"), i.mainContent.appendChild(t), t.onload = function() {
            n.realWidth = t.width, n.realHeight = t.height, i.updateCtx(), i.updateGrid(), t.parentNode.removeChild(t), delete t
        }
    }, m.prototype.handleVisibility = function(t) {
        r = t.target.checked ? !0 : !1, i.updateGrid()
    }, m.prototype.handleScale = function(t) {
        o = t.target.value, i.updateGrid(), i.updateCtx()
    }, m.prototype.handleFileSelect = function(t) {
        var e = t.target.files, o = e[0], r = new FileReader;
        r.readAsDataURL(o), r.onloadend = function() {
            n.src = r.result, i.updateImgSize(), i.updateCtx()
        }
    }, m.prototype.show = function() {
        this.initialize(), this.domElement.style.display = "block"
    }, m.prototype.close = function() {
        ujs.notify("hcs.ui.frame.close"), this.domElement.style.display = "none", ujs.notify("hcs.menu.main.deselect")
    }, m
}();
