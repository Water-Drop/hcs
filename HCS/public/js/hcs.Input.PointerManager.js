var hcs = window.hcs || {};
hcs.PointerManager = function () {
    var t = function (t, e, n, i) {
        var i = i || {};
        this.BUTTON_LEFT = 1, this.BUTTON_MIDDLE = 2, this.BUTTON_RIGHT = 4, this.ACTION_CLICK = 1, this.ACTION_DBLCLICK = 2, this.ACTION_DRAGSTART = 4, this.ACTION_DRAGGING = 8, this.ACTION_DRAGEND = 16, this.ACTION_SCROLLUP = 32, this.ACTION_SCROLLDOWN = 64, this.MODIFIER_ALT = 1, this.MODIFIER_CTRL = 2, this.MODIFIER_SHIFT = 4, this.pos = new BABYLON.Vector2, this.posDelta = new BABYLON.Vector2, this.buttons = 0, this.actions = 0, this.modifiers = 0, this._core = t || hcsdesign, this._callback = e || null, this._domElement = n || document.body, this._offsets = i.offsets || new BABYLON.Vector2, this._width = i.width || this._domElement.clientWidth, this._height = i.height || this._domElement.clientHeight, this._lastState = this.getStatus(), this._initialised = !1, this.touchManager = new hcs.Input.TouchManager(this._domElement), this.setDomElement(this._domElement), this.mode = 0
    };
    return t.prototype.setDomElement = function (t) {
        this._domElement = t, this.onMouseDown = this.onMouseDown.bind(this), this.onMouseMove = this.onMouseMove.bind(this), this.onMouseUp = this.onMouseUp.bind(this), this.onMouseDoubleClick = this.onMouseDoubleClick.bind(this), this.onMouseWheel = this.onMouseWheel.bind(this), this.addTouchSupport(), this.addMouseSupport()
    }, t.prototype.addMouseSupport = function () {
        window.PointerEvent ? (this._domElement.addEventListener("pointerdown", this.onMouseDown, !1), this._domElement.addEventListener("pointermove", this.onMouseMove, !1), this._domElement.addEventListener("pointerup", this.onMouseUp, !1), document.addEventListener("pointerup", this.onMouseUp, !1)) : (this._domElement.addEventListener("mousedown", this.onMouseDown, !1), this._domElement.addEventListener("mousemove", this.onMouseMove, !1), this._domElement.addEventListener("mouseup", this.onMouseUp, !1), document.addEventListener("mouseup", this.onMouseUp, !1)), this._domElement.addEventListener("dblclick", this.onMouseDoubleClick, !1), this._domElement.addEventListener("mousewheel", this.onMouseWheel, !1), this._domElement.addEventListener("DOMMouseScroll", this.onMouseWheel, !1)
    }, t.prototype.removeMouseSupport = function () {
        window.PointerEvent ? (this._domElement.removeEventListener("pointerdown", this.onMouseDown), this._domElement.removeEventListener("pointermove", this.onMouseMove), this._domElement.removeEventListener("pointerup", this.onMouseUp), document.removeEventListener("pointerup", this.onMouseUp)) : (this._domElement.removeEventListener("mousedown", this.onMouseDown), this._domElement.removeEventListener("mousemove", this.onMouseMove), this._domElement.removeEventListener("mouseup", this.onMouseUp), document.removeEventListener("mouseup", this.onMouseUp)), this._domElement.removeEventListener("dblclick", this.onMouseDoubleClick), this._domElement.removeEventListener("mousewheel", this.onMouseWheel), this._domElement.removeEventListener("DOMMouseScroll", this.onMouseWheel), this.mode = 1
    }, t.prototype.addTouchSupport = function () {
        this.touchManager.start(), this.touchManager.on("tap", this.onMouseDown), this.touchManager.on("touchMove", this.onMouseMove), this.touchManager.on("touchUp", this.onMouseUp), this.touchManager.on("longPress", this.onMouseDoubleClick), this.touchManager.on("swipe", this.onMouseWheel)
    }, t.prototype.removeTouchSupport = function () {
        this.touchManager.stop(), this.touchManager.off("tap", this.onMouseDown), this.touchManager.off("touchMove", this.onMouseMove), this.touchManager.off("touchUp", this.onMouseUp), this.touchManager.off("longPress", this.onMouseDoubleClick), this.touchManager.off("swipe", this.onMouseWheel), this.mode = 2
    }, t.prototype.getStatus = function () {
        var t = {};
        return t.BUTTON_LEFT = this.BUTTON_LEFT, t.BUTTON_MIDDLE = this.BUTTON_MIDDLE, t.BUTTON_RIGHT = this.BUTTON_RIGHT, t.ACTION_CLICK = this.ACTION_CLICK, t.ACTION_DBLCLICK = this.ACTION_DBLCLICK, t.ACTION_DRAGSTART = this.ACTION_DRAGSTART, t.ACTION_DRAGGING = this.ACTION_DRAGGING, t.ACTION_DRAGEND = this.ACTION_DRAGEND, t.ACTION_SCROLLUP = this.ACTION_SCROLLUP, t.ACTION_SCROLLDOWN = this.ACTION_SCROLLDOWN, t.MODIFIER_ALT = this.MODIFIER_ALT, t.MODIFIER_CTRL = this.MODIFIER_CTRL, t.MODIFIER_SHIFT = this.MODIFIER_SHIFT, t.pos = this.pos.clone(), t.posDelta = this.posDelta.clone(), t.buttons = this.buttons, t.prevButtons = this._lastState ? this._lastState.buttons : 0, t.actions = this.actions, t.modifiers = this.modifiers, t.planPos = this.pos.clone(), t.planPos.subtractInPlace(this._core.engine2D.getTranslation()), t.planPos.scaleInPlace(1 / this._core.engine2D.getZoom()), t.plan3DPos = new BABYLON.Vector2(this.pos.x / this._core.getWidth() * 2 - 1, 2 * -(this.pos.y / this._core.getHeight()) + 1), t
    }, t.prototype.reset = function () {
        this.buttons = 0, this.actions = 0, this.posDelta = new BABYLON.Vector2(0, 0)
    }, t.prototype.resize = function (t, e) {
        this._width = t || this._domElement.clientWidth || this._domElement.innerWidth, this._height = e || this._domElement.clientHeight || this._domElement.innerHeight
    }, t.prototype._getX = function (t) {
        var e = 0;
        return t.pageX ? e = t.pageX : t.clientX && (e = t.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft)), e
    }, t.prototype._getY = function (t) {
        var e = 0;
        return t.pageY ? e = t.pageY : t.clientY && (e = t.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop)), e
    }, t.prototype._getButton = function (t) {
        if (t.touches && t.touches.length > 0)
            return this.BUTTON_LEFT;
        switch (t.button) {
            case 0:
                return this.BUTTON_LEFT;
            case 1:
                return this.BUTTON_MIDDLE;
            case 2:
                return this.BUTTON_RIGHT
        }
        return 0
    }, t.prototype._updateMouseState = function (t, e) {
        var n = t;
        (GlobalHelper.isMobileDevice() || n.target && "canvas" == n.target.tagName.toLowerCase() || this.preventDefault) && n.preventDefault(), "undefined" != typeof t.touches && t.touches.length > 0 && (n = t.touches[0]);
        var e = e || 0, i = this._getX(n), o = this._getY(n);
        i + o > 0 && this.pos.copyFromFloats(i, o), this._initialised || (this._initialised = !0, this._lastState.pos.copyFrom(this.pos)), this.posDelta = this.pos.subtract(this._lastState.pos), "tap" == n.type && (this.posDelta = new BABYLON.Vector2(0, 0)), this.actions = 0, this.actions |= e, 0 == this.buttons && this._lastState.buttons > 0 && 0 == (this._lastState.actions & this.ACTION_DRAGGING) && 0 == (this._lastState.actions & this.ACTION_DBLCLICK) ? this.actions |= this.ACTION_CLICK : this.buttons > 0 && 0 == this._lastState.actions && (0 != this.posDelta.x || 0 != this.posDelta.y) ? (this.actions |= this.ACTION_DRAGSTART, this.pos.x = this._lastState.pos.x, this.pos.y = this._lastState.pos.y) : this.buttons > 0 && ((this._lastState.actions & this.ACTION_DRAGSTART) > 0 || (this._lastState.actions & this.ACTION_DRAGGING) > 0) ? this.actions |= this.ACTION_DRAGGING : 0 == this.buttons && ((this._lastState.actions & this.ACTION_DRAGSTART) > 0 || (this._lastState.actions & this.ACTION_DRAGGING) > 0) && (this.actions |= this.ACTION_DRAGEND), this.modifiers = 0, n.altKey && (this.modifiers |= this.MODIFIER_ALT), n.ctrlKey && (this.modifiers |= this.MODIFIER_CTRL), n.shiftKey && (this.modifiers |= this.MODIFIER_SHIFT), this._notifyCb(n), this._lastState = this.getStatus()
    }, t.prototype._notifyCb = function (t) {
        null != this._callback && (this._callback(t, this.getStatus()), ujs.notify("hcs.input.pointerchanged", { inputStatus: this.getStatus() }))
    }, t.prototype.onMouseDown = function (t) {
        this.buttons |= this._getButton(t), this._updateMouseState(t)
    }, t.prototype.onMouseMove = function (t) {
        this._updateMouseState(t), t.preventDefault()
    }, t.prototype.onMouseUp = function (t) {
        this.buttons &= !this._getButton(t), this._updateMouseState(t)
    }, t.prototype.onMouseDoubleClick = function (t) {
        this._updateMouseState(t, this.ACTION_DBLCLICK)
    }, t.prototype.onMouseWheel = function (t) {
        var e = 0;
        t.wheelDeltaY ? e = t.wheelDeltaY : t.wheelDelta ? e = t.wheelDelta : t.detail && (e = -t.detail), 0 != e && (e > 0 ? this._updateMouseState(t, this.ACTION_SCROLLUP) : this._updateMouseState(t, this.ACTION_SCROLLDOWN), t.preventDefault())
    }, t
} ();
