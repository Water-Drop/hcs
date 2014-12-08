var concatgeom = concatgeom || function() {
        var t = wanaplan.getComponentByName("DebugComponent3D");
        return DEBUG ? t.concatGeom(wanaplan.engine3D.scene) : (Logger.warning("debug is disabled !"), !1)
    },
    mark = mark || function(t, e, n, i, o) {
        var r = wanaplan.getComponentByName("DebugComponent3D");
        return DEBUG ? r.mark(t, e, n, i, o) : (Logger.warning("debug is disabled !"), !1)
    },
    marklights = marklights || function() {
        var t = wanaplan.getComponentByName("DebugComponent3D");
        return DEBUG ? t.marklights() : (Logger.warning("debug is disabled !"), !1)
    },
    removemark = removemark || function(t) {
        var e = wanaplan.getComponentByName("DebugComponent3D");
        return DEBUG ? e.removemark(t) : (Logger.warning("debug is disabled !"), !1)
    },
    removemarks = removemarks || function() {
        var t = wanaplan.getComponentByName("DebugComponent3D");
        return DEBUG ? t.removemarks() : (Logger.warning("debug is disabled !"), !1)
    },
    drawWalls = drawWalls || function() {
        var t = wanaplan.getComponentByName("WallComponent3D");
        return DEBUG ? t.drawWalls() : (Logger.warning("debug is disabled !"), !1)
    },
    debugCSG = debugCSG || function() {
        var t = wanaplan.getComponentByName("WallComponent3D");
        return DEBUG ? t.debugCSG() : (Logger.warning("debug is disabled !"), !1)
    },
    debugSS = debugSS || function() {
        var t = wanaplan.getComponentByName("SubSlopeComponent3D");
        return DEBUG ? t.debug() : (Logger.warning("debug is disabled !"), !1)
    };