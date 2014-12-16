var MeasureComponent = function() {
    var t = [],
        e = [],
        n = function(t) {
            BaseComponent2D.call(this, t, "MeasureComponent")
        };
    return n.prototype = new BaseComponent2D, n.prototype.getTargeted = function(n) {
        for (var i, o, r = t.concat(e), s = 15, a = s, l = null, h = 0; h < r.length; h++)
            for (var c = 0; c < r[h].length; c++)
                o = r[h][c], i = n.distanceTo(o.center().add(o.offsetVector.scale(o.parent.measureDist))), a > i && (a = i, l = o);
        return l
    }, n.prototype.getInternalMeasures = function() {
        return t
    }, n.prototype.getExternalMeasures = function() {
        return e
    }, n.prototype.getAllMeasures = function() {
        return measures
    }, n.prototype.buildFromRooms = function(n, i) {
        n = n, i = i, t.length = 0, e.length = 0;
        for (var o = 0, r = n.length; r > o; o++)
            n[o].panes ? t.push(n[o].panes) : (n.splice(o, 1), o--);
        for (var o = 0, r = i.length; r > o; o++)
            i[o].panes ? e.push(i[o].panes) : (i.splice(o, 1), o--)
    }, n.prototype.mergeMeasures = function(t) {
        for (var e, n = t.length, i = t.length - 1; i >= 0; i--) {
            e = t[i];
            for (var o = 0; n > o; o++)
                o !== i && e.tryMerge(t[o]) && (t.splice(o, 1), n--, i--, o = 0)
        }
    }, n.prototype.drawTmpWallMesure = function(t, e, n) {
        var i = wanaplan.getComponentByName("WallComponent2D")._tmpWall;
        if (i) {
            var o = new BABYLON.Vector2(i.points[1].position.y - i.points[0].position.y, i.points[0].position.x - i.points[1].position.x).normalize().scaleInPlace(40);
            this._drawMeasureSlice(t, e, n, i.points[0].position.add(o), i.points[1].position.add(o))
        }
    }, n.prototype.draw = function(n, i, o) {
        for (var r, s, a = wanaplan.getComponentByName("OvertureComponent2D") && wanaplan.getComponentByName("OvertureComponent2D").overtureDragged, l = new BABYLON.Vector2, h = [], c = t.concat(e), u = 0, p = c.length; p > u; u++) {
            h.push([]);
            for (var d = 0, m = c[u].length; m > d; d++)
                c[u][d].parent.measureDisplayed && (r = [], l.copyFrom(c[u][d].offsetVector).normalize().scaleInPlace(c[u][d].parent.measureDist), r.push(c[u][d].points[0].clone(), c[u][d].points[1].clone()), a && this._addOvertureIntersections(c[u][d].parent, r), s = new MeasureStructure(r, c[u][d].parent, l.clone()), h[u].push(s));
            this.mergeMeasures(h[u])
        }
        for (var u = 0, p = h.length; p > u; u++)
            for (var d = 0, m = h[u].length; m > d; d++)
                for (var g = 0, f = h[u][d].points.length - 1; f > g; g++)
                    this._drawMeasureSlice(n, i, o, h[u][d].points[g].add(h[u][d].offsetVector), h[u][d].points[g + 1].add(h[u][d].offsetVector))
    }, n.prototype._drawMeasureSlice = function(t, e, n, i, o) {
        var r = wanaplan.engine2D.toRealCoord(i, e, n),
            s = wanaplan.engine2D.toRealCoord(o, e, n),
            a = i.distanceTo(o),
            l = Math.round(a) / 100;
        return wanaplan.engine2D.symbols2D.drawMeasure(t, r, s, l + "m"), l
    }, n.prototype._addOvertureIntersections = function(t, e) {
        for (var n = function(t, n) {
                return t.distanceToSquared(e[0]) - n.distanceToSquared(e[0])
            }, i = 0, o = t.overtures.length; o > i; i++)
            for (var r = t.overtures[i].getPolygon(), s = 0, a = r.length; a > s; s++)
                r[s].isOnSegment(e[0], e[e.length - 1]) && ujs.insertSorted(r[s], n, e)
    }, n
}();