var wnp = window.wnp || {};
wnp.Symbols2D = function() {
    var t = function() {
        this.COLOR_ACTIVE_STROKE = "#89B808", this.COLOR_ACTIVE_STROKE_DARKER = "#6C9104", this.COLOR_ACTIVE_FILL = "rgba(137, 184, 8, 0.2)", this.COLOR_ACTIVE_LARGEZONE_FILL = "rgba(137, 137, 137, 0.5)", this.COLOR_INACTIVE_STROKE = "#777777", this.COLOR_INACTIVE_FILL = "rgba(90, 119, 119, 0.1)", this.COLOR_BACKGROUND = "#FAFAFA", this.COLOR_ANNOTATION = "#888"
    };
    return t.prototype.drawPoint = function(t, e) {
        t.save(), t.fillStyle = this.COLOR_ACTIVE_STROKE, t.beginPath(), t.arc(e.x, e.y, 6, 0, 2 * Math.PI, !1), t.fill(), t.restore()
    }, t.prototype.drawPointHover = function(t, e, n) {
        var n = n || 1;
        t.save(), this.drawPoint(t, e), t.strokeStyle = this.COLOR_ACTIVE_STROKE, t.lineWidth = 4, t.beginPath();
        var i = 12 * n;
        10 > i && (i = 10), t.arc(e.x, e.y, i, 0, 2 * Math.PI, !1), t.stroke(), t.restore()
    }, t.prototype.drawAngle = function(t, e, n, i, o, r, s) {
        t.save(), t.fillStyle = this.COLOR_ACTIVE_LARGEZONE_FILL, t.strokeStyle = this.COLOR_ACTIVE_STROKE, t.beginPath(), t.moveTo(e.x, e.y), t.arc(e.x, e.y, i, o, r, s), t.lineTo(e.x, e.y), t.fill(), t.stroke(), t.font = "normal 8pt sans-serif", t.textBaseline = "middle", t.textAlign = "center";
        var a = {x: e.x + i * Math.cos((r + o) / 2),y: e.y + i * Math.sin((r + o) / 2)}, l = Math.round(180 * Math.abs(r - o) / Math.PI) + " °";
        t.fillStyle = this.COLOR_BACKGROUND, t.beginPath(), t.arc(a.x, a.y, t.measureText(l).width / 2 + 2, 0, 2 * Math.PI), t.fill(), t.stroke(), t.fillStyle = this.COLOR_ANNOTATION, t.fillText(l, a.x, a.y), t.restore()
    }, t.prototype.drawSegment = function(t, e, n) {
        e.x = Math.round(e.x) + .5, e.y = Math.round(e.y) + .5, n.x = Math.round(n.x) + .5, n.y = Math.round(n.y) + .5, t.save(), t.strokeStyle = this.COLOR_ACTIVE_STROKE, t.fillStyle = this.COLOR_ACTIVE_STROKE, t.lineWidth = 5, this.drawPoint(t, e), this.drawPoint(t, n), t.beginPath(), t.moveTo(e.x, e.y), t.lineTo(n.x, n.y), t.stroke(), t.restore()
    }, t.prototype.drawArc = function(t, e, n, i) {
        e.x = Math.round(e.x) + .5, e.y = Math.round(e.y) + .5, i.x = Math.round(i.x) + .5, i.y = Math.round(i.y) + .5, n.x = Math.round(n.x) + .5, n.y = Math.round(n.y) + .5, t.save(), t.strokeStyle = this.COLOR_ACTIVE_STROKE, t.fillStyle = this.COLOR_ACTIVE_STROKE, t.lineWidth = 5, this.drawPoint(t, e), this.drawPoint(t, i), t.beginPath(), t.moveTo(e.x, e.y), t.quadraticCurveTo(n.x, n.y, i.x, i.y), t.stroke(), t.restore()
    }, t.prototype.drawGrip = function(t, e, n, i) {
        var i = i || 0;
        e.x = Math.round(e.x), e.y = Math.round(e.y), t.save(), t.strokeStyle = this.COLOR_ACTIVE_STROKE, t.fillStyle = this.COLOR_BACKGROUND, t.lineWidth = 2, t.translate(e.x, e.y), t.beginPath(), t.arc(0, 0, 9, 0, 2 * Math.PI, !1), t.fill(), t.stroke(), this.drawArrows(t, {x: 0,y: 0}, n, 12, i), t.restore()
    }, t.prototype.drawCheckGrip = function(t, e, n, i) {
        var i = i || 0;
        e.x = Math.round(e.x), e.y = Math.round(e.y), t.save(), t.translate(e.x, e.y), t.strokeStyle = this.COLOR_BACKGROUND, t.fillStyle = this.COLOR_INACTIVE_STROKE, t.lineWidth = 2, t.beginPath(), t.arc(0, 0, 11, 0, 2 * Math.PI, !1), t.fill(), t.stroke(), t.save(), t.fillStyle = this.COLOR_BACKGROUND, t.rotate(Math.PI / 4), t.fillRect(-5, 2, 5, 4), t.rotate(Math.PI / 2), t.fillRect(-7, -3, 13, 4), t.restore(), this.drawArrows(t, {x: 0,y: 0}, n, 12, i), t.restore()
    }, t.prototype.drawCancelGrip = function(t, e, n, i) {
        var i = i || 0;
        e.x = Math.round(e.x), e.y = Math.round(e.y), t.save(), t.translate(e.x, e.y), t.strokeStyle = this.COLOR_BACKGROUND, t.fillStyle = this.COLOR_INACTIVE_STROKE, t.lineWidth = 2, t.beginPath(), t.arc(0, 0, 11, 0, 2 * Math.PI, !1), t.fill(), t.stroke(), t.save(), t.fillStyle = this.COLOR_BACKGROUND, t.rotate(Math.PI / 4), t.fillRect(-7, -2, 14, 4), t.rotate(Math.PI / 2), t.fillRect(-7, -2, 14, 4), t.restore(), this.drawArrows(t, {x: 0,y: 0}, n, 12, i), t.restore()
    }, t.prototype.drawGripSegment = function(t, e, n, i, o, r) {
        var r = r || 0;
        e.x = Math.round(e.x) + .5, e.y = Math.round(e.y) + .5, n.x = Math.round(n.x) + .5, n.y = Math.round(n.y) + .5, t.save(), t.strokeStyle = this.COLOR_ACTIVE_STROKE, t.fillStyle = this.COLOR_ACTIVE_STROKE, t.lineWidth = 5, t.beginPath(), t.moveTo(e.x, e.y), t.lineTo(n.x, n.y), t.stroke(), this.drawGrip(t, e, i, r), this.drawGrip(t, n, o, r), t.restore()
    }, t.prototype.drawArrows = function(t, e, n, o, r, s, a) {
        var a = a || {}, l = a.size || 6, r = r || 0;
        for (t.save(), t.translate(e.x, e.y), t.rotate(r), t.fillStyle = this.COLOR_ACTIVE_STROKE, t.strokeStyle = this.COLOR_BACKGROUND, t.lineWidth = 2, i = 0; 4 > i; i++)
            n[i] && (t.beginPath(), t.moveTo(0, -o - l), t.lineTo(-l, -o), t.lineTo(l, -o), t.closePath(), s && t.stroke(), t.fill()), t.rotate(Math.PI / 2);
        t.restore()
    }, t.prototype.drawMeasure = function(t, e, n, i, o) {
        t.save(), t.strokeStyle = o || this.COLOR_ANNOTATION, t.fillStyle = o || this.COLOR_ANNOTATION, t.lineWidth = 1, t.font = "normal 8pt sans-serif", t.textBaseline = "middle", t.textAlign = "center";
        var r = n.x > e.x ? n.x - e.x : e.x - n.x, s = n.y > e.y ? n.y - e.y : e.y - n.y, a = Math.sqrt(Math.pow(r, 2) + Math.pow(s, 2)), l = Math.atan2(n.y - e.y, n.x - e.x), h = i ? t.measureText(i).width + 10 : 0;
        h > a - 2 || (t.translate(Math.round((e.x + n.x) / 2), Math.round((e.y + n.y) / 2)), t.rotate(l), t.beginPath(), (a - h) / 2 > 5 && (t.moveTo(-Math.round(a / 2), .5), t.lineTo(-Math.round(h / 2) + 1, .5), t.moveTo(Math.round(a / 2), .5), t.lineTo(Math.round(h / 2) - 1, .5)), t.save(), t.translate(-Math.round(a / 2), 0), t.moveTo(.5, .5), t.lineTo(5, 5), t.moveTo(.5, .5), t.lineTo(5, -4), t.stroke(), t.restore(), t.save(), t.translate(Math.round(a / 2), 0), t.moveTo(-.5, .5), t.lineTo(-5, 5), t.moveTo(-.5, .5), t.lineTo(-5, -4), t.restore(), t.stroke(), i && ((l >= Math.PI / 2 || l < -Math.PI / 2) && t.rotate(Math.PI), t.fillText(i, 0, -.5)), t.restore())
    }, t.prototype.drawCursorCheck = function(t, e) {
        var n = e.x + 20, i = e.y + 20;
        t.save(), t.translate(n, i), t.fillStyle = "rgba(0,0,0,.2)", t.rotate(Math.PI / 4), t.fillRect(-6, 2, 7, 6), t.rotate(Math.PI / 2), t.fillRect(-7, -5, 15, 6), t.restore(), t.save(), t.translate(n, i), t.fillStyle = this.COLOR_ACTIVE_STROKE_DARKER, t.fillStyle = "#000", t.rotate(Math.PI / 4), t.fillRect(-7, 1, 7, 6), t.rotate(Math.PI / 2), t.fillRect(-8, -4, 15, 6), t.restore(), t.save(), t.translate(n, i), t.fillStyle = this.COLOR_BACKGROUND, t.rotate(Math.PI / 4), t.fillRect(-6, 2, 6, 4), t.rotate(Math.PI / 2), t.fillRect(-7, -3, 13, 4), t.restore()
    }, t.prototype._drawAllSymbols = function(t) {
        this.drawPoint(t, {x: 100,y: 100}), this.drawPointHover(t, {x: 150,y: 100}), this.drawPointHover(t, {x: 200,y: 100}, 1.5), this.drawSegment(t, {x: 250,y: 90}, {x: 300,y: 110}), this.drawGrip(t, {x: 350,y: 100}, [!0, !0, !0, !0]), this.drawGrip(t, {x: 400,y: 100}, [!1, !0, !1, !0], Math.PI / 4), this.drawCheckGrip(t, {x: 450,y: 100}, [!0, !0, !0, !0]), this.drawCancelGrip(t, {x: 500,y: 100}, [!1, !0, !1, !0], 3 * Math.PI / 4), this.drawGripSegment(t, {x: 550,y: 90}, {x: 600,y: 110}, [!1, !1, !1, !0], [!1, !0, !1, !1], .4), this.drawMeasure(t, {x: 650,y: 80}, {x: 750,y: 80}, "measure"), this.drawMeasure(t, {x: 650,y: 100}, {x: 715,y: 100}, "measure"), this.drawMeasure(t, {x: 650,y: 120}, {x: 706,y: 120}, "measure"), this.drawCursorCheck(t, {x: 100,y: 150})
    }, t
}();