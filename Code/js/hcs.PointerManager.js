/*
 * Author：吴疆
 * Date：2014年11月3日
 * Email：me@wujiang.name
 * 
 * 包含指针和鼠标操作控制
 */
var hcs = window.hcs || {};

hcs.PointerManager = function() {
    var PointerManager = function(core, e, n, i) {
        var i = i || {};
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
        this.pos = new BABYLON.Vector2, 
        this.posDelta = new BABYLON.Vector2, 
        this.buttons = 0, 
        this.actions = 0, 
        this.modifiers = 0, 
        this._core = core || wanaplan, 
        this._callback = e || null, 
        this._domElement = n || document.body, 
        this._offsets = i.offsets || new BABYLON.Vector2, 
        this._width = i.width || this._domElement.clientWidth, 
        this._height = i.height || this._domElement.clientHeight, 
        this._lastState = this.getStatus(), 
        this._initialised = false, 
        this.touchManager = new wnp.Input.TouchManager(this._domElement), 
        this.setDomElement(this._domElement), 
        this.mode = 0;
    };
    return PointerManager.prototype.setDomElement = function(PointerManager) {
        this._domElement = PointerManager, 
        this.onMouseDown = this.onMouseDown.bind(this), 
        this.onMouseMove = this.onMouseMove.bind(this), 
        this.onMouseUp = this.onMouseUp.bind(this), 
        this.onMouseDoubleClick = this.onMouseDoubleClick.bind(this), 
        this.onMouseWheel = this.onMouseWheel.bind(this), 
        this.addTouchSupport(), 
        this.addMouseSupport();
    }, PointerManager.prototype.addMouseSupport = function() {
        window.PointerEvent ? (this._domElement.addEventListener("pointerdown", this.onMouseDown, false), 
        this._domElement.addEventListener("pointermove", this.onMouseMove, false), 
        this._domElement.addEventListener("pointerup", this.onMouseUp, false), 
        document.addEventListener("pointerup", this.onMouseUp, false)) : 
        (
            this._domElement.addEventListener("mousedown", this.onMouseDown, false), 
            this._domElement.addEventListener("mousemove", this.onMouseMove, false), 
            this._domElement.addEventListener("mouseup", this.onMouseUp, false), 
            document.addEventListener("mouseup", this.onMouseUp, false)
        ), 
        this._domElement.addEventListener("dblclick", this.onMouseDoubleClick, false), 
        this._domElement.addEventListener("mousewheel", this.onMouseWheel, false), 
        this._domElement.addEventListener("DOMMouseScroll", this.onMouseWheel, false);
    }, PointerManager.prototype.removeMouseSupport = function() {
        window.PointerEvent ?
                (this._domElement.removeEventListener("pointerdown", this.onMouseDown), this._domElement.removeEventListener("pointermove", this.onMouseMove), this._domElement.removeEventListener("pointerup", this.onMouseUp), document.removeEventListener("pointerup", this.onMouseUp)) :
                (this._domElement.removeEventListener("mousedown", this.onMouseDown), this._domElement.removeEventListener("mousemove", this.onMouseMove), this._domElement.removeEventListener("mouseup", this.onMouseUp), document.removeEventListener("mouseup", this.onMouseUp)), this._domElement.removeEventListener("dblclick", this.onMouseDoubleClick), this._domElement.removeEventListener("mousewheel", this.onMouseWheel), this._domElement.removeEventListener("DOMMouseScroll", this.onMouseWheel), this.mode = 1;
    }, PointerManager.prototype.addTouchSupport = function() {
        this.touchManager.start(), 
        this.touchManager.on("tap", this.onMouseDown), 
        this.touchManager.on("touchMove", this.onMouseMove), 
        this.touchManager.on("touchUp", this.onMouseUp), 
        this.touchManager.on("longPress", this.onMouseDoubleClick), 
        this.touchManager.on("swipe", this.onMouseWheel);
    }, PointerManager.prototype.removeTouchSupport = function() {
        this.touchManager.stop(), 
        this.touchManager.off("tap", this.onMouseDown), 
        this.touchManager.off("touchMove", this.onMouseMove), 
        this.touchManager.off("touchUp", this.onMouseUp), 
        this.touchManager.off("longPress", this.onMouseDoubleClick), 
        this.touchManager.off("swipe", this.onMouseWheel), 
        this.mode = 2;
    }, PointerManager.prototype.getStatus = function() {
        var PointerManager = {};
        return PointerManager.BUTTON_LEFT = this.BUTTON_LEFT, 
            PointerManager.BUTTON_MIDDLE = this.BUTTON_MIDDLE, 
            PointerManager.BUTTON_RIGHT = this.BUTTON_RIGHT, 
            PointerManager.ACTION_CLICK = this.ACTION_CLICK, 
            PointerManager.ACTION_DBLCLICK = this.ACTION_DBLCLICK, 
            PointerManager.ACTION_DRAGSTART = this.ACTION_DRAGSTART, 
            PointerManager.ACTION_DRAGGING = this.ACTION_DRAGGING, 
            PointerManager.ACTION_DRAGEND = this.ACTION_DRAGEND, 
            PointerManager.ACTION_SCROLLUP = this.ACTION_SCROLLUP, 
            PointerManager.ACTION_SCROLLDOWN = this.ACTION_SCROLLDOWN, 
            PointerManager.MODIFIER_ALT = this.MODIFIER_ALT, 
            PointerManager.MODIFIER_CTRL = this.MODIFIER_CTRL, 
            PointerManager.MODIFIER_SHIFT = this.MODIFIER_SHIFT, 
            PointerManager.pos = this.pos.clone(), 
            PointerManager.posDelta = this.posDelta.clone(), 
            PointerManager.buttons = this.buttons, 
            PointerManager.prevButtons = this._lastState ? this._lastState.buttons : 0, 
            PointerManager.actions = this.actions, 
            PointerManager.modifiers = this.modifiers, 
            PointerManager.planPos = this.pos.clone(), 
            PointerManager.planPos.subtractInPlace(this._core.engine2D.getTranslation()), 
            PointerManager.planPos.scaleInPlace(1 / this._core.engine2D.getZoom()), 
            PointerManager.plan3DPos = new BABYLON.Vector2(this.pos.x / this._core.getWidth() * 2 - 1, 2 * -(this.pos.y / this._core.getHeight()) + 1), 
            PointerManager;
    }, PointerManager.prototype.reset = function() {
        this.buttons = 0, this.actions = 0, this.posDelta = new BABYLON.Vector2(0, 0);
    }, PointerManager.prototype.resize = function(PointerManager, e) {
        this._width = PointerManager || this._domElement.clientWidth || this._domElement.innerWidth, this._height = e || this._domElement.clientHeight || this._domElement.innerHeight;
    }, PointerManager.prototype._getX = function(PointerManager) {
        var e = 0;
        return PointerManager.pageX ?
                e = PointerManager.pageX :
                PointerManager.clientX && (e = PointerManager.clientX + (document.documentElement.scrollLeft ?
                        document.documentElement.scrollLeft :
                        document.body.scrollLeft)), e;
    }, PointerManager.prototype._getY = function(PointerManager) {
        var e = 0;
        return PointerManager.pageY ?
                e = PointerManager.pageY :
                PointerManager.clientY && (e = PointerManager.clientY + (document.documentElement.scrollTop ?
                        document.documentElement.scrollTop :
                        document.body.scrollTop)), e;
    }, PointerManager.prototype._getButton = function(PointerManager) {
        if (PointerManager.touches && PointerManager.touches.length > 0)
            return this.BUTTON_LEFT;
        switch (PointerManager.button) {
            case 0:
                return this.BUTTON_LEFT;
            case 1:
                return this.BUTTON_MIDDLE;
            case 2:
                return this.BUTTON_RIGHT;
        }
        return 0;
    }, PointerManager.prototype._updateMouseState = function(PointerManager, e) {
        var n = PointerManager;
        (GlobalHelper.isMobileDevice() || n.target && "canvas" == n.target.tagName.toLowerCase() || this.preventDefault) && n.preventDefault(), "undefined" != typeof PointerManager.touches && PointerManager.touches.length > 0 && (n = PointerManager.touches[0]);
        var e = e || 0, i = this._getX(n), o = this._getY(n);
        i + o > 0 && this.pos.copyFromFloats(i, o), this._initialised || (this._initialised = true, this._lastState.pos.copyFrom(this.pos)), this.posDelta = this.pos.subtract(this._lastState.pos), "tap" == n.type && (this.posDelta = new BABYLON.Vector2(0, 0)), this.actions = 0, this.actions |= e, 0 == this.buttons && this._lastState.buttons > 0 && 0 == (this._lastState.actions & this.ACTION_DRAGGING) && 0 == (this._lastState.actions & this.ACTION_DBLCLICK) ?
                this.actions |= this.ACTION_CLICK :
                this.buttons > 0 && 0 == this._lastState.actions && (0 != this.posDelta.x || 0 != this.posDelta.y) ?
                (this.actions |= this.ACTION_DRAGSTART, this.pos.x = this._lastState.pos.x, this.pos.y = this._lastState.pos.y) :
                this.buttons > 0 && ((this._lastState.actions & this.ACTION_DRAGSTART) > 0 || (this._lastState.actions & this.ACTION_DRAGGING) > 0) ?
                this.actions |= this.ACTION_DRAGGING :
                0 == this.buttons && ((this._lastState.actions & this.ACTION_DRAGSTART) > 0 || (this._lastState.actions & this.ACTION_DRAGGING) > 0) && (this.actions |= this.ACTION_DRAGEND), this.modifiers = 0, n.altKey && (this.modifiers |= this.MODIFIER_ALT), n.ctrlKey && (this.modifiers |= this.MODIFIER_CTRL), n.shiftKey && (this.modifiers |= this.MODIFIER_SHIFT), this._notifyCb(n), this._lastState = this.getStatus();
    }, PointerManager.prototype._notifyCb = function(PointerManager) {
        null != this._callback && (this._callback(PointerManager, this.getStatus()), ujs.notify("wnp.input.pointerchanged", {inputStatus: this.getStatus()}));
    }, PointerManager.prototype.onMouseDown = function(PointerManager) {
        this.buttons |= this._getButton(PointerManager), this._updateMouseState(PointerManager);
    }, PointerManager.prototype.onMouseMove = function(PointerManager) {
        this._updateMouseState(PointerManager), PointerManager.preventDefault();
    }, PointerManager.prototype.onMouseUp = function(PointerManager) {
        this.buttons &= !this._getButton(PointerManager), 
        this._updateMouseState(PointerManager);
    }, PointerManager.prototype.onMouseDoubleClick = function(PointerManager) {
        this._updateMouseState(PointerManager, this.ACTION_DBLCLICK);
    }, PointerManager.prototype.onMouseWheel = function(PointerManager) {
        var e = 0;
        PointerManager.wheelDeltaY ?
                e = PointerManager.wheelDeltaY :
                PointerManager.wheelDelta ? e = PointerManager.wheelDelta :
                PointerManager.detail && (e = -PointerManager.detail), 0 !== e && (e > 0 ? this._updateMouseState(PointerManager, this.ACTION_SCROLLUP) :
                this._updateMouseState(PointerManager, this.ACTION_SCROLLDOWN), PointerManager.preventDefault());
    }, PointerManager;
}();