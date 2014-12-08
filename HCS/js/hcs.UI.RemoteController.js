var wnp = window.wnp || {};
wnp.UI = wnp.UI || {}, wnp.UI.RemoteController = function() {
    var t, e = document.getElementById("modalWidgets"), n = function(n, i) {
        function o() {
            if (++l > t.repeat) {
                if (l = 0, null != t.buttonState) {
                    var e = t.buttonState, n = e.target.getAttribute("class");
                    null == n && (n = e.target.parentNode.getAttribute("class"));
                    var i = n.split(" ")[1];
                    switch (i) {
                        case "up":
                            t.setDirection(i);
                            break;
                        case "down":
                            t.setDirection(i);
                            break;
                        case "left":
                            t.setDirection(i);
                            break;
                        case "right":
                            t.setDirection(i);
                            break;
                        case "zoomup":
                            t.addZoom(-1);
                            break;
                        case "zoomdown":
                            t.addZoom(1)
                    }
                }
                requestAnimationFrame(o)
            }
        }
        e = document.getElementById("modalWidgets");
        var n = n || {}, i = i || {};
        this.addedToDomElement = i.domElement || e, this.imagePath = i.imagePath || "../images/remote-controller/", this.domElement = this.buildHTML(), this.defaultDomStyle = "top: " + (i.y || 10) + "px;left: " + (i.x || 10) + "px;", this.domElement.setAttribute("style", this.defaultDomStyle), this.addedToDomElement.appendChild(this.domElement), this.buttons = document.getElementsByClassName("remote-button"), this.slider = document.getElementById("remote-slider"), this.sliderContainer = document.getElementById("remote-slider-content"), this.globalSliderContainer = document.getElementById("remote-slider-bar"), this.globalSliderContainerHeight = this.globalSliderContainer.scrollHeight, this.buttonHeight = this.buttons;
        var r = 35;
        this.zoom = {min: 21,max: 129,reference: r,value: r,lastValue: r,setValue: function(t) {
            this.lastValue = this.value, t > this.min && t < this.max && (this.value = t)
        },setRelativeValue: function(t) {
            this.lastValue = this.value, t >= 0 && 1 >= t && (this.value = t * (this.max - this.min) + this.min)
        },addValue: function(t) {
            this.setValue(this.value + t)
        },getValue: function() {
            return this.value
        },getRelativeValue: function() {
            return (this.value - this.min) / (this.max - this.min)
        },getRelativeDeltaValue: function() {
            return (this.value - this.lastValue) / (this.max - this.min)
        },getDelta: function() {
            return this.value - this.lastValue
        }}, this.callbacks = {zoom: n.zoomChanged || null,direction: n.directionChanged || null,camera: n.cameraChanged || null}, t = this;
        for (var s = 0, a = this.buttons.length; a > s; s++)
            this.buttons[s].addEventListener("mousedown", function(e) {
                                             t.onButtonMouseDown(e, t)
                                             }, !1), this.buttons[s].addEventListener("mouseup", function(e) {
                                                                                      t.onButtonMouseUp(e, t)
                                                                                      }, !1), this.buttons[s].addEventListener("click", function(e) {
                                                                                                                               t.onButtonClick(e, t)
                                                                                                                               }, !1);
        this.slider.addEventListener("mousedown", function(e) {
                                     t.onSliderMouseDown(e, t)
                                     }, !1), document.body.addEventListener("mousemove", function(e) {
                                                                            t.onSliderMouseMove(e, t)
                                                                            }, !1), document.body.addEventListener("mouseup", function(e) {
                                                                                                                   t.onMouseUp(e, t)
                                                                                                                   }, !1), document.addEventListener("wnp.keyboardManager.keyDown", t.onKeyDown, !0), this.sliderSelected = !1, this.updateSliderPos(), this.mouse = {y: 0,lastY: 0,getDelta: function() {
            return this.y - this.lastY
        }}, o(), this.buttonState = null, this.running = !0, this.repeat = 3;
        var l = 0;
        o()
    };
    return n.prototype.buildHTML = function() {
        var t = document.createElement("div");
        t.setAttribute("id", "remote-controller");
        var e = document.createElement("div");
        e.setAttribute("id", "remote-buttons");
        for (var n = ["up", "down", "left", "right"], i = 0; 4 > i; i++) {
            var o = document.createElement("a");
            o.setAttribute("href", "javascript:void(0);"), o.setAttribute("class", "remote-button " + n[i]);
            var r = document.createElement("img");
            r.setAttribute("src", this.imagePath + n[i] + ".png"), o.appendChild(r), e.appendChild(o)
        }
        t.appendChild(e);
        var s = document.createElement("a");
        s.setAttribute("href", "javascript:void(0);"), s.setAttribute("class", "remote-button camera");
        var a = document.createElement("img");
        a.setAttribute("src", this.imagePath + "camera.png"), s.appendChild(a), t.appendChild(s);
        var l = document.createElement("div");
        l.setAttribute("id", "remote-slider-bar");
        var h = document.createElement("a");
        h.setAttribute("href", "javascript:void(0);"), h.setAttribute("class", "remote-button zoomup");
        var c = document.createElement("img");
        c.setAttribute("src", this.imagePath + "zoom-up.png"), h.appendChild(c), l.appendChild(h);
        var u = document.createElement("div");
        u.setAttribute("id", "remote-slider-content");
        var p = document.createElement("img");
        p.setAttribute("id", "remote-slider"), p.setAttribute("src", this.imagePath + "zoom-cursor.png"), u.appendChild(p), l.appendChild(u);
        var d = document.createElement("a");
        d.setAttribute("href", "javascript:void(0);"), d.setAttribute("class", "remote-button zoomdown");
        var m = document.createElement("img");
        return m.setAttribute("src", this.imagePath + "zoom-down.png"), d.appendChild(m), l.appendChild(d), t.appendChild(l), t
    }, n.prototype.onKeyDown = function(e) {
        var n = e.keyCode;
        switch (n) {
            case 37:
                t.setDirection("left");
                break;
            case 38:
                t.setDirection("up");
                break;
            case 39:
                t.setDirection("right");
                break;
            case 40:
                t.setDirection("down")
        }
    }, n.prototype.updateDomPosition = function(t, e) {
        this.defaultDomStyle = "top: " + e + "px;left: " + t + "px;", this.domElement.setAttribute("style", this.defaultDomStyle)
    }, n.prototype.kill = function(t) {
        for (var t = "undefined" != typeof t ? t : !0, e = this, n = 0, i = this.buttons.length; i > n; n++)
            this.buttons[n].removeEventListener("mousedown", function(t) {
                                                e.onButtonMouseDown(t, e)
                                                }), this.buttons[n].removeEventListener("mouseup", function(t) {
                                                                                        e.onButtonMouseUp(t, e)
                                                                                        }), this.buttons[n].removeEventListener("click", function(t) {
                                                                                                                                e.onButtonClick(t, e)
                                                                                                                                });
        this.slider.removeEventListener("mousedown", function(t) {
                                        e.onSliderMouseDown(t, e)
                                        }), document.body.removeEventListener("mousemove", function(t) {
                                                                              e.onSliderMouseMove(t, e)
                                                                              }), document.body.removeEventListener("mouseup", function(t) {
                                                                                                                    e.onMouseUp(t, e)
                                                                                                                    }), this.running = !1, t && null !== this.domElement.parentNode && this.addedToDomElement.removeChild(this.domElement)
    }, n.prototype.onButtonMouseDown = function(t, e) {
        e.buttonState = t
    }, n.prototype.onButtonMouseUp = function(t, e) {
        e.buttonState = null
    }, n.prototype.onButtonClick = function(t, e) {
        var n = t.target.getAttribute("class");
        null == n && (n = t.target.parentNode.getAttribute("class"));
        var i = n.split(" ")[1];
        switch (i) {
            case "camera":
                e.changeCamera();
                break;
            case "up":
                e.setDirection(i);
                break;
            case "down":
                e.setDirection(i);
                break;
            case "left":
                e.setDirection(i);
                break;
            case "right":
                e.setDirection(i);
                break;
            case "zoomup":
                e.addZoom(-1);
                break;
            case "zoomdown":
                e.addZoom(1)
        }
    }, n.prototype.show = function() {
        this.domElement.setAttribute("style", this.defaultDomStyle)
    }, n.prototype.hide = function() {
        this.domElement.setAttribute("style", "display:none;")
    }, n.prototype.onSliderMouseDown = function(t, e) {
        t.preventDefault(), e.sliderSelected = !0
    }, n.prototype.onSliderMouseMove = function(t, e) {
        e.mouse.lastY = e.mouse.y, e.mouse.y = void 0 !== t.y ? t.y : t.clientY, e.sliderSelected && this.addZoom(e.mouse.getDelta())
    }, n.prototype.onMouseUp = function(t, e) {
        e.sliderSelected = !1
    }, n.prototype.reset = function() {
        this.zoom.value = this.zoom.reference, this.updateSliderPos()
    }, n.prototype.addZoom = function(t) {
        this.zoom.addValue(t), this.updateSliderPos(), null != this.callbacks.zoom && this.callbacks.zoom(this.zoom.getRelativeDeltaValue())
    }, n.prototype.setDirection = function(t) {
        null != this.callbacks.direction && this.callbacks.direction(t)
    }, n.prototype.changeCamera = function() {
        null != this.callbacks.camera && this.callbacks.camera()
    }, n.prototype.updateZoom = function(t) {
        this.zoom.setRelativeValue(t), this.updateSliderPos()
    }, n.prototype.updateSliderPos = function() {
        this.slider.style.top = this.zoom.getValue() + "px"
    }, n
}();