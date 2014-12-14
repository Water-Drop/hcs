var DebugComponent2D = function(t) {
    BaseComponent2D.call(this, t, "DebugComponent2D")
};
DebugComponent2D.prototype = Object.create(BaseComponent2D.prototype), DebugComponent2D.prototype.dumpStructureToFile = function() {
    var t = hcsdesign.structure.serialize(),
        e = new Blob([t], {
            type: "text/plain;charset=utf-8"
        });
    saveAs(e, "structure.json")
}, DebugComponent2D.prototype.wallState = function() {
    Logger.message("ETAT DES MURS :");
    var t = this.structure.getCurrentStructure(),
        e = t.getElements("walls"),
        n = t.getElements("points");
    for (var i in e) {
        Logger.message("Mur " + i + " :"), Logger.message("	" + e[i].points[0].position.x + "," + e[i].points[0].position.y + " ->" + e[i].points[1].position.x + "," + e[i].points[1].position.y), Logger.message("	Points rattach��s : ");
        for (var o in e[i].attachedPoints)
            Logger.message("		Point " + n.indexOf(e[i].attachedPoints[o]) + " : " + e[i].attachedPoints[o].position.x + "," + e[i].attachedPoints[o].position.y)
    }
}, DebugComponent2D.prototype.pointState = function() {
    Logger.message("ETAT DES POINTS :");
    var t = this.structure.getCurrentStructure(),
        e = t.getElements("points"),
        n = t.getElements("walls");
    for (var i in e)
        Logger.message("Point " + i + " :"), Logger.message("	" + e[i].position.x + "," + e[i].position.y), Logger.message("	Murs parents : ", n.indexOf(e[i].parents[0]), n.indexOf(e[i].parents[1]))
}, DebugComponent2D.prototype.roomState = function(t) {
    Logger.message("ETAT DES PIECES :");
    for (var e in t.rooms)
        Logger.message("Pi��ce " + e + " :"), Logger.message("	Aire : " + t.rooms[e].area), t.rooms[e].path.debug()
}, DebugComponent2D.prototype.ints = function(t) {
    Logger.message("Intersections :");
    var e = this.structure.getCurrentStructure(),
        n = (e.getElements("points"), e.getElements("walls"));
    for (var i in n) {
        Logger.message("Mur " + i + " :");
        for (var o = t._extractWallIntersections(n[i]), r = 0; r < o.a.length; r++)
            Logger.message("	a :" + o.a[r].x + "," + o.a[r].y);
        for (var r = 0; r < o.b.length; r++)
            Logger.message("	b :" + o.b[r].x + "," + o.b[r].y)
    }
};