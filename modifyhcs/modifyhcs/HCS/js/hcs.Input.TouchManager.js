/*
 * Author：虞思源
 * 
 * 添加手势支持
 * 通过判断鼠标位置来决定接下去的操作是移动还是旋转。
 * 
 */
var hcs = window.hcs || {};
hcs.Input = hcs.Input || {}, 
hcs.Input.TouchManager = function (target) {
    var event = [{ x: 0, y: 0 }, { x: 0, y: 0}], n = [{ x: 0, y: 0 }, { x: 0, y: 0}], i = { x: 0, y: 0, reset: function () {
        this.x = 0, this.y = 0
    }, update: function () {
        this.x = event[0].x - n[0].x, this.y = event[0].y - n[0].y
    } 
    }, o = { timer: 0, duration: 200 }, r = { sx: 0, sy: 0, timer: null, duration: 900, deadZone: 5 }, 
	px = !1, py = 2, pz = !1, rx = 0, ry = 0, rz = 0, flag = !1, events = {}, wheel = null, id = -1;
    this.on = function (index, event) {
        events[index] = event
    }, this.off = function (target) {
        delete events[target]
    }, this.setDeadZone = function (target) {
        py = target
    };
    var createEvent = function (target, params) {
        var i = document.createEvent("HTMLEvents");
        i.initEvent(target, !0, !1), i.pageX = event[0].x, i.pageY = event[0].y, i.clientX = event[0].x, i.clientY = event[0].y, i.detail = -rx,
		i.distance = ry, i.wheelDeltaY = wheel ? rx : +(ry - rz) > 0 ? 2.5 : -2.5, i.button = 0;
        for (var o in params)
            i[o] = params[o];
        return i
    }, makeEvent = function (name, event) {
        events[name] && events[name](createEvent(name, event))
    },//通过名字创建事件 
	computeEvent = function (target, event) {
        var n = target.x - event.x, i = target.y - event.y;
        return Math.sqrt(n * n + i * i)
    }, validateEvent = function (target, i, o) {
        o || (n[i].x = event[i].x, n[i].y = event[i].y), window.PointerEvent && 
		target instanceof window.PointerEvent || window.MSPointerEvent && target instanceof MSPointerEvent ?
		(event[i].x = target.clientX || target.pageX, event[i].y = target.clientY || target.pageY) : target.touches && 
		(event[i].x = target.touches[i].clientX || target.touches[i].pageX, 
		event[i].y = target.touches[i].clientY || target.touches[i].pageY),
		o && (n[i].x = event[i].x, n[i].y = event[i].y)
    }, compareEvent = function (target, event) {
        validateEvent(target, 0, event), target.touches && target.touches.length > 1 && validateEvent(target, 1, event)
    }, touch = function (target) {
        if (target.preventDefault(), !("pointerdown" === target.type && id > -1)) {
            id = target.pointerId, px = !0, pz = !1, compareEvent(target, !0);
            var n = 0;
            target.touches && target.touches.length > 1 && (n = 1), makeEvent("touchDown", { button: n }),
			target.touches && 1 === target.touches.length || id ? (makeEvent("tap"), o.timer ? (clearTimeout(o.timer),
			o.timer = null, makeEvent("dblTap")) : o.timer = setTimeout(function () {
                clearTimeout(o.timer), o.timer = null
            }, o.duration), r.timer && clearTimeout(r.timer), r.sx = event[0].x, r.sy = event[0].y, r.timer = setTimeout(function () {
                clearTimeout(r.timer), r.timer = null;
                var target = event[0].x - r.sx, n = event[0].y - r.sy;
                Math.abs(target) < r.deadZone && Math.abs(n) < r.deadZone && makeEvent("longPress")
            }, r.duration)) : target.touches && target.touches.length > 1 && makeEvent("touchUp")
        }
    }, touchMove = function (target) {
        if (!(flag || "pointerdown" === target.type && target.pointerId !== id) && (target.preventDefault(), 
		compareEvent(target), i.update(), pz ||
		(pz = Math.abs(i.x) > py || Math.abs(i.y) > py)))
            if (target.touches && 2 == target.touches.length) {
                makeEvent("touchUp");
                var o = event[0].x - n[0].x, r = event[1].y - n[1].y;
                rz = ry, ry = computeEvent(event[0], event[1]), rx = Math.abs(o) > Math.abs(r) ? o : r, 
				makeEvent("swipe"), makeEvent("rotate")
            } else
                px && makeEvent("touchMove")
    }, touchDown = function (target) {
        rx = 0, ry = 0, rz = 0, px = !1, pz = !1, target.pointerId && id === target.pointerId && (id = -1), r.timer && 
		(clearTimeout(r.timer), r.timer = null), makeEvent("touchUp")
    }, wheelEvent = function (event) {
        void 0 !== window.MSGesture && (wheel || (wheel = new MSGesture, wheel.target = target), 
		wheel.addPointer(event.pointerId))
    }, scaleEvent = function (target) {
        1 !== target.scale ? (rx = 50 * target.scale * (target.expansion > 0 ? 1 : -1), flag = !0,
		makeEvent("touchUp"), makeEvent("swipe"), makeEvent("rotate"),
		target.stopPropagation(), target.preventDefault()) : flag = !1
    }, names = GlobalHelper.getWrappedMouseEventNames();
    this.start = function () {
        target.addEventListener(names.down, touch, !1), target.addEventListener(names.move, touchMove, !1), 
		target.addEventListener(names.up, touchDown, !1),
		target.addEventListener(names.cancel, touchDown, !1),
		names.out && target.addEventListener(names.out, touchDown, !1),
		target.addEventListener("MSPointerDown", wheelEvent, !1),
		target.addEventListener("MSGestureChange", scaleEvent, !1)
    }, this.stop = function () {
        target.removeEventListener(names.down, touch),
		target.removeEventListener(names.move, touchMove),
		target.removeEventListener(names.up, touchDown),
		target.removeEventListener(names.cancel, touchDown),
		names.out && target.removeEventListener(names.out, touchDown),
		target.removeEventListener("MSPointerDown", wheelEvent),
		target.removeEventListener("MSGestureChange", scaleEvent)
    }
};
