var DEBUG = DEBUG || !0,
    wallState = wallState || function() {
        if (DEBUG) {
            var t = PLANNER_DEBUGGER.getComponentByName("DebugComponent2D", 1);
            t.wallState()
        } else
            Logger.message("debug is disabled !")
    },
    pointState = pointState || function() {
        if (DEBUG) {
            var t = PLANNER_DEBUGGER.getComponentByName("DebugComponent2D", 1);
            t.pointState()
        } else
            Logger.message("debug is disabled !")
    },
    roomState = roomState || function() {
        if (DEBUG) {
            var t = PLANNER_DEBUGGER.getComponentByName("DebugComponent2D", 1),
                e = PLANNER_DEBUGGER.getComponentByName("RoomComponent2D");
            t.roomState(e)
        } else
            Logger.message("debug is disabled !")
    },
    ints = ints || function() {
        if (DEBUG) {
            var t = PLANNER_DEBUGGER.getComponentByName("DebugComponent2D", 1),
                e = PLANNER_DEBUGGER.getComponentByName("WallComponent2D", 1);
            t.ints(e)
        } else
            Logger.message("debug is disabled !")
    },
    getWalls = getWalls || function() {
        return DEBUG ? PLANNER_DEBUGGER.getSelectedStructure().getElements("walls") : void Logger.message("debug is disabled !")
    },
    getPoints = getPoints || function() {
        return DEBUG ? PLANNER_DEBUGGER.getSelectedStructure().getElements("points") : void Logger.message("debug is disabled !")
    },
    getRooms = getRooms || function() {
        return DEBUG ? PLANNER_DEBUGGER.getSelectedStructure().getElements("rooms") : void Logger.message("debug is disabled !")
    },
    compareRooms = compareRooms || function() {
        if (DEBUG) {
            for (var t = [], e = 0, n = PLANNER_DEBUGGER.structure.getLength(); n > e; e++) {
                var i = PLANNER_DEBUGGER.structure.getElement(e);
                if (i instanceof FloorStructure && (t.push(i.getElements("rooms")), 2 == t.length))
                    break
            }
            var o = PLANNER_DEBUGGER.getComponentByName("RoomComponent2D", 1);
            Logger.message(o.identifyRooms(t[0], t[1]))
        } else
            Logger.message("debug is disabled !")
    };