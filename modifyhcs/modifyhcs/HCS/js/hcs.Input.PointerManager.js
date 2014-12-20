/*
 * Author：虞思源
 * 
 * 响应鼠标操作，单击，双击，拖动，滚轴
 * 返回事件值列表在下方
 * 
 */
var hcs = window.hcs || {};
hcs.PointerManager = function () {
    var pointerManager = function (pointerManager, callback, element, point) {
        var point = point || {};
        this.BUTTON_LEFT = 1, 
		this.BUTTON_MIDDLE = 2, 
		this.BUTTON_RIGHT = 4, 
		this.ACTION_CLICK = 1, 
		this.ACTION_DBLCLICK = 2, 
		this.ACTION_DRAGSTART = 4,
		this.ACTION_DRAGGING = 8,
		this.ACTION_DRAGEND = 16, 
		this.ACTION_SCROLLUP = 32, 
		this.ACTION_SCROLLDOWN = 64, 
		this.MODIFIER_ALT = 1, 
		this.MODIFIER_CTRL = 2, 
		this.MODIFIER_SHIFT = 4,
		//事件值
		this.pos = new BABYLON.Vector2,
		this.posDelta = new BABYLON.Vector2, 
		this.buttons = 0, this.actions = 0, 
		this.modifiers = 0, 
		this._core = pointerManager || hcsdesign, 
		this._callback = callback || null, 
		this._domElement = element || document.body, 
		this._offsets = point.offsets || new BABYLON.Vector2, 
		this._width = point.width || this._domElement.clientWidth, 
		this._height = point.height || this._domElement.clientHeight, 
		this._lastState = this.getStatus(), 
		this._initialised = !1, 
		this.touchManager = new hcs.Input.TouchManager(this._domElement), 
		this.setDomElement(this._domElement), this.mode = 0
    };
    return pointerManager.prototype.setDomElement = function (pointerManager) {
        this._domElement = pointerManager, 
		this.onMouseDown = this.onMouseDown.bind(this), 
		this.onMouseMove = this.onMouseMove.bind(this), 
		this.onMouseUp = this.onMouseUp.bind(this), 
		this.onMouseDoubleClick = this.onMouseDoubleClick.bind(this), 
		this.onMouseWheel = this.onMouseWheel.bind(this), 
		this.addTouchSupport(),
		this.addMouseSupport()
    }, pointerManager.prototype.addMouseSupport = function () {
        window.PointerEvent ? (this._domElement.addEventListener("pointerdown", this.onMouseDown, !1), 
		this._domElement.addEventListener("pointermove", this.onMouseMove, !1), 
		this._domElement.addEventListener("pointerup", this.onMouseUp, !1), 
		document.addEventListener("pointerup", this.onMouseUp, !1)) : 
		(this._domElement.addEventListener("mousedown", this.onMouseDown, !1),
		this._domElement.addEventListener("mousemove", this.onMouseMove, !1), 
		this._domElement.addEventListener("mouseup", this.onMouseUp, !1), 
		document.addEventListener("mouseup", this.onMouseUp, !1)), 
		this._domElement.addEventListener("dblclick", this.onMouseDoubleClick, !1), 
		this._domElement.addEventListener("mousewheel", this.onMouseWheel, !1),
		this._domElement.addEventListener("DOMMouseScroll", this.onMouseWheel, !1)
    }, pointerManager.prototype.removeMouseSupport = function () {
        window.PointerEvent ? (this._domElement.removeEventListener("pointerdown", this.onMouseDown),
		this._domElement.removeEventListener("pointermove", this.onMouseMove), 
		this._domElement.removeEventListener("pointerup", this.onMouseUp), 
		document.removeEventListener("pointerup", this.onMouseUp)) : 
		(this._domElement.removeEventListener("mousedown", this.onMouseDown), 
		this._domElement.removeEventListener("mousemove", this.onMouseMove), 
		this._domElement.removeEventListener("mouseup", this.onMouseUp), 
		document.removeEventListener("mouseup", this.onMouseUp)), 
		this._domElement.removeEventListener("dblclick", this.onMouseDoubleClick),
		this._domElement.removeEventListener("mousewheel", this.onMouseWheel), 
		this._domElement.removeEventListener("DOMMouseScroll", this.onMouseWheel), 
		this.mode = 1
    }, pointerManager.prototype.addTouchSupport = function () {
        this.touchManager.start(), 
		this.touchManager.on("tap", this.onMouseDown), 
		this.touchManager.on("touchMove", this.onMouseMove), 
		this.touchManager.on("touchUp", this.onMouseUp), 
		this.touchManager.on("longPress", this.onMouseDoubleClick),
		this.touchManager.on("swipe", this.onMouseWheel)
    }, pointerManager.prototype.removeTouchSupport = function () {
        this.touchManager.stop(), 
		this.touchManager.off("tap", this.onMouseDown), 
		this.touchManager.off("touchMove", this.onMouseMove), 
		this.touchManager.off("touchUp", this.onMouseUp), 
		this.touchManager.off("longPress", this.onMouseDoubleClick), 
		this.touchManager.off("swipe", this.onMouseWheel), this.mode = 2
    }, pointerManager.prototype.getStatus = function () {
        var pointerManager = {};
        return pointerManager.BUTTON_LEFT = this.BUTTON_LEFT, 
		pointerManager.BUTTON_MIDDLE = this.BUTTON_MIDDLE, 
		pointerManager.BUTTON_RIGHT = this.BUTTON_RIGHT, 
		pointerManager.ACTION_CLICK = this.ACTION_CLICK, 
		pointerManager.ACTION_DBLCLICK = this.ACTION_DBLCLICK,
		pointerManager.ACTION_DRAGSTART = this.ACTION_DRAGSTART,
		pointerManager.ACTION_DRAGGING = this.ACTION_DRAGGING, 
		pointerManager.ACTION_DRAGEND = this.ACTION_DRAGEND, 
		pointerManager.ACTION_SCROLLUP = this.ACTION_SCROLLUP,
		pointerManager.ACTION_SCROLLDOWN = this.ACTION_SCROLLDOWN, 
		pointerManager.MODIFIER_ALT = this.MODIFIER_ALT, 
		pointerManager.MODIFIER_CTRL = this.MODIFIER_CTRL, 
		pointerManager.MODIFIER_SHIFT = this.MODIFIER_SHIFT, 
		pointerManager.pos = this.pos.clone(), 
		pointerManager.posDelta = this.posDelta.clone(),
		pointerManager.buttons = this.buttons,
		pointerManager.prevButtons = this._lastState ? this._lastState.buttons : 0, pointerManager.actions = this.actions, 
		pointerManager.modifiers = this.modifiers, pointerManager.planPos = this.pos.clone(),
		pointerManager.planPos.subtractInPlace(this._core.engine2D.getTranslation()), 
		pointerManager.planPos.scaleInPlace(1 / this._core.engine2D.getZoom()), 
		pointerManager.plan3DPos = new BABYLON.Vector2(this.pos.x / this._core.getWidth() * 2 - 1, 2 * -(this.pos.y / this._core.getHeight()) + 1), pointerManager
    }, pointerManager.prototype.reset = function () {
        this.buttons = 0, this.actions = 0, this.posDelta = new BABYLON.Vector2(0, 0)
    }, pointerManager.prototype.resize = function (pointerManager, callback) {
        this._width = pointerManager || this._domElement.clientWidth || this._domElement.innerWidth, 
		this._height = callback || this._domElement.clientHeight || this._domElement.innerHeight
    }, pointerManager.prototype._getX = function (pointerManager) {
        var callback = 0;
        return pointerManager.pageX ? callback = pointerManager.pageX : pointerManager.clientX && 
		(callback = pointerManager.clientX + (document.documentElement.scrollLeft ?
		document.documentElement.scrollLeft : document.body.scrollLeft)), callback
    }, pointerManager.prototype._getY = function (pointerManager) {
        var callback = 0;
        return pointerManager.pageY ? callback = pointerManager.pageY : pointerManager.clientY && (
		callback = pointerManager.clientY + (document.documentElement.scrollTop ?
		document.documentElement.scrollTop : document.body.scrollTop)), callback
    }, pointerManager.prototype._getButton = function (pointerManager) {
        if (pointerManager.touches && pointerManager.touches.length > 0)
            return this.BUTTON_LEFT;
        switch (pointerManager.button) {
            case 0:
                return this.BUTTON_LEFT;
            case 1:
                return this.BUTTON_MIDDLE;
            case 2:
                return this.BUTTON_RIGHT
        }
        return 0
    }, pointerManager.prototype._updateMouseState = function (pointerManager, callback) {
        var element = pointerManager;
        (GlobalHelper.isMobileDevice() || element.target && "canvas" == element.target.tagName.toLowerCase() || this.preventDefault) 
		&& element.preventDefault(), "undefined" != typeof pointerManager.touches && pointerManager.touches.length > 0 && 
		(element = pointerManager.touches[0]);
        var callback = callback || 0, point = this._getX(element), o = this._getY(element);
        point + o > 0 && this.pos.copyFromFloats(point, o), this._initialised || 
		(this._initialised = !0, this._lastState.pos.copyFrom(this.pos)), 
		this.posDelta = this.pos.subtract(this._lastState.pos), "tap" == element.type && 
		(this.posDelta = new BABYLON.Vector2(0, 0)), 
		this.actions = 0,
		this.actions |= callback, 
		0 == this.buttons && this._lastState.buttons > 0 && 
		0 == (this._lastState.actions & this.ACTION_DRAGGING) && 
		0 == (this._lastState.actions & this.ACTION_DBLCLICK) ? 
		this.actions |= this.ACTION_CLICK : this.buttons > 0 && 0 == this._lastState.actions
		&& (0 != this.posDelta.x || 0 != this.posDelta.y) ? 
		(this.actions |= this.ACTION_DRAGSTART, this.pos.x = this._lastState.pos.x, this.pos.y = this._lastState.pos.y) :
		this.buttons > 0 && ((this._lastState.actions & this.ACTION_DRAGSTART) > 0 || 
		(this._lastState.actions & this.ACTION_DRAGGING) > 0) ? this.actions |= this.ACTION_DRAGGING : 0 == this.buttons && 
		((this._lastState.actions & this.ACTION_DRAGSTART) > 0 || (this._lastState.actions & this.ACTION_DRAGGING) > 0) && 
		(this.actions |= this.ACTION_DRAGEND), this.modifiers = 0, element.altKey && (this.modifiers |= this.MODIFIER_ALT),
		element.ctrlKey && (this.modifiers |= this.MODIFIER_CTRL), element.shiftKey && (this.modifiers |= this.MODIFIER_SHIFT), 
		this._notifyCb(element), this._lastState = this.getStatus()
    }, pointerManager.prototype._notifyCb = function (pointerManager) {
        null != this._callback && (this._callback(pointerManager, this.getStatus()), 
		ujs.notify("hcs.input.pointerchanged", { inputStatus: this.getStatus() }))
    }, pointerManager.prototype.onMouseDown = function (pointerManager) {
        this.buttons |= this._getButton(pointerManager), this._updateMouseState(pointerManager)
    }, pointerManager.prototype.onMouseMove = function (pointerManager) {
        this._updateMouseState(pointerManager), pointerManager.preventDefault()
    }, pointerManager.prototype.onMouseUp = function (pointerManager) {
        this.buttons &= !this._getButton(pointerManager), 
		this._updateMouseState(pointerManager)
    }, pointerManager.prototype.onMouseDoubleClick = function (pointerManager) {
        this._updateMouseState(pointerManager, this.ACTION_DBLCLICK)
    }, pointerManager.prototype.onMouseWheel = function (pointerManager) {
        var callback = 0;
        pointerManager.wheelDeltaY ? callback = pointerManager.wheelDeltaY :
		pointerManager.wheelDelta ? callback = pointerManager.wheelDelta :
		pointerManager.detail && (callback = -pointerManager.detail), 
		0 != callback && (callback > 0 ? this._updateMouseState(pointerManager, this.ACTION_SCROLLUP) : 
		this._updateMouseState(pointerManager, this.ACTION_SCROLLDOWN), pointerManager.preventDefault())
    }, pointerManager
} ();
