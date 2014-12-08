var EditMeasureComponent = function() {
    var t = function(t) {
        BaseComponent2D.call(this, t, "EditMeasureComponent")
    };
    return t.prototype = new BaseComponent2D, t.prototype.initialize = function() {}, t.prototype.startListening = function() {
        this.onClick = this.onClick.bind(this), this.onDblClick = this.onDblClick.bind(this), this.destroyDialog = this.destroyDialog.bind(this), document.addEventListener("click", this.onClick, !1), document.addEventListener("dblclick", this.onDblClick, !1), document.addEventListener("wnp.contextChanged", this.destroyDialog, !1)
    }, t.prototype.stopListening = function() {
        document.removeEventListener("click", this.onClick, !1), document.removeEventListener("dblclick", this.onDblClick, !1), this.destroyDialog()
    }, t.prototype.destroyDialog = function() {
        var t = photonui.getWidget("Dialog_measure");
        null != t && t.destroy()
    }, t.prototype.onClick = function(t) {
        var e = photonui.getWidget("Dialog_measure");
        null != e && (t.pageX < e.position.x || t.pageX > e.position.x + e.offsetWidth || t.pageY < e.position.y || t.pageY > e.position.y + e.offsetHeight) && e.destroy()
    }, t.prototype.getSideToMove = function(t, e) {
        var n;
        return n = t <= Math.PI / 4 && t >= -Math.PI / 4 ? e ? 0 : 1 : t >= .75 * Math.PI || t <= -3 / 4 * Math.PI ? e ? 1 : 0 : t > Math.PI / 4 && t < .75 * Math.PI ? e ? 0 : 1 : e ? 1 : 0
    }, t.prototype.displacePoint = function(t, e, n, i) {
        var o = this.getSideToMove(n, i),
            r = t.points,
            s = r[1].subtract(r[0]),
            a = this.getSideToMove(Math.atan2(s.y, s.x), i),
            l = t.parent,
            h = l.getWallVector();
        displacevector = 0 == o ? h.normalize().scale(e).negate() : h.normalize().scale(e);
        var c = l.getPoints(o),
            u = !1;
        if (-1 == l.getPolygon().indexOf(r[a]))
            for (var p, d = 150, m = 0; m < l.attachedPoints.length; m++)
                if (attachedPoint = l.attachedPoints[m], p = r[a].distanceTo(attachedPoint.position), d > p)
                    for (var g = 0; g < attachedPoint.parents.length; g++) {
                        var f = attachedPoint.parents[g].getPoints(),
                            y = f[(f.indexOf(attachedPoint) + 1) % 2].position.subtract(attachedPoint.position);
                        BABYLON.Vector2.Dot(t.normal(), y) > 0 && (d = p, c = l.attachedPoints[m], u = !0)
                    }
        if (u)
            for (var g = 0; g < c.parents.length; g++)
                c.parents[g].translate(displacevector);
        else {
            for (var _ = !1, g = 0; g < c.parents.length; g++)
                c.parents[g] != l && (c.parents[g].translate(displacevector), _ = !0);
            var v = c.wallAttached();
            _ || null == v || (v.translate(displacevector), _ = !0), _ || c.translate(displacevector)
        }
        for (var b = API.getWalls(), g = 0; g < b.length; g++)
            b[g].updateAttachedPoints(API.getCurrentFloor()), b[g].updateOvertures(API.getCurrentFloor()), b[g].needsUpdate = !0;
        API.e2D.requestStaticDraw()
    }, t.prototype.onDblClick = function(t) {
        var e = API.getComponent("MeasureComponent").getTargeted(API.e2D.getMousePos());
        if (null != e) {
            var n = photonui.getWidget("Dialog_measure");
            if (null != n) {
                if (t.pageX >= n.position.x || t.pageX <= n.position.x + n.offsetWidth || t.pageY >= n.position.y || t.pageY <= n.position.y + n.offsetHeight)
                    return;
                n.destroy()
            }
            n = new photonui.Window({
                name: "Dialog_measure",
                title: _("Settings"),
                x: t.pageX,
                y: t.pageY,
                visible: !0,
                padding: 10
            });
            var i = new photonui.GridLayout,
                o = e.points[e.points.length - 1].subtract(e.points[0]).length(),
                r = new photonui.NumericField({
                    name: "num_length",
                    value: Math.round(o)
                }),
                s = new photonui.Label({
                    text: _("Length") + " (cm) :",
                    forInput: r
                });
            i.addChild(s, {
                gridX: 0,
                gridY: 0
            }), i.addChild(r, {
                gridX: 1,
                gridY: 0,
                gridWidth: 2
            });
            var a, l, h = e.parent.getWallVector().normalize(),
                c = Math.atan2(h.y, h.x);
            c <= Math.PI / 4 && c >= -Math.PI / 4 || c >= .75 * Math.PI || c <= -3 / 4 * Math.PI ? (a = new photonui.Button({
                name: "btn-left",
                text: _("Left")
            }), l = new photonui.Button({
                name: "btn-right",
                text: _("Right")
            })) : (a = new photonui.Button({
                name: "btn-left",
                text: _("Top")
            }), l = new photonui.Button({
                name: "btn-right",
                text: _("Bottom")
            }));
            var u = new photonui.Label({
                text: _("Apply to") + " :"
            });
            i.addChild(u, {
                gridX: 0,
                gridY: 1
            }), i.addChild(a, {
                gridX: 1,
                gridY: 1
            }), i.addChild(l, {
                gridX: 2,
                gridY: 1
            }), n.child = i, photonui.getWidget("btn-left").registerCallback("clickleft", "click", function() {
                this.displacePoint(e, r.value - o, c, !0), n.destroy()
            }, this), photonui.getWidget("btn-right").registerCallback("clickright", "click", function() {
                this.displacePoint(e, r.value - o, c, !1), n.destroy()
            }, this), photonui.getWidget("num_length").registerCallback("keyup_num", "keyup", function(t, i) {
                13 == i.keyCode && (this.displacePoint(e, r.value - o, c, !1), n.destroy())
            }, this), n.registerCallback("close", "close-button-clicked", n.destroy, n)
        }
    }, t
}();