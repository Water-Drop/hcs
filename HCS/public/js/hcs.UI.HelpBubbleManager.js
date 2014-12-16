var wnp = window.wnp || {};
wnp.UI = wnp.UI || {}, wnp.UI.HelpBubbleManager = function() {
    var t = function(t) {
        this.helpBubble = new wnp.UI.HelpBubble, this._enabled = "boolean" == typeof t ? t : !0, this._bubbles = {"wnp.2d.wall-basics": {image: "wnp.2d.wall-basics.gif",content: "<strong>" + _("Walls") + "</strong><ul><li>" + _("Move a wall with a drag &amp; drop.") + "</li><li>" + _("Cut a wall with a double-click.") + "</li></ul>",disp: !1},"wnp.2d.menu": {image: _("wnp.2d.menu-C.gif"),content: "",disp: !1},"wnp.2d.subslope": {image: "wnp.2d.subslope.gif",content: "<strong>" + _("Create Subslopes") + "</strong><ul><li>" + _("Pull the grips to create subslopes.") + "</li><li>" + _("Right-click on a grip to configure the subslope.") + "</li></ul>",disp: !1},"wnp.2d.draw-wall": {image: "wnp.2d.draw-wall.gif",content: "<strong>" + _("Draw Walls") + "</strong><ul><li>" + _("Click to add a point.") + "</li><li>" + _("Click again on your last point to terminate the wall.") + "</li></ul>",disp: !1},"wnp.2d.dup-overture": {image: "wnp.2d.dup-overture.gif",content: "<strong>" + _("Opening Duplication") + "</strong>" + _("Double-click on an opening to duplicate it."),disp: !1},"wnp.2d.draw-staires": {image: "wnp.2d.draw-staires.gif",content: "<strong>" + _("Draw Staireway") + "</strong><ul><li>" + _("Click to add a step.") + "</li><li>" + _("Double-click to terminate the stairway.") + "</li></ul>",disp: !1},"wnp.2d.properties": {image: "wnp.2d.properties.gif",content: "<strong>" + _("Items Settings") + "</strong><ul><li>" + _("You can configure any item of your plan (doors, windows, walls, etc.) by clicking on it.") + "</li><li>" + _("The setting window also allow you to remove any item from your plan.") + "</li></ul>",disp: !1},"wnp.2d.subslopeOverture-menu": {image: "wnp.2d.dormer.png",content: "<strong>" + _("Items Settings") + "</strong><ul><li>" + _("You can configure some parameters of your dormer (height, width, height of roof, etc.) by clicking on it.") + "</li><li>" + _("1: height, 2: height of roof, 3: length of the hole, 4: width") + "</li></ul>",disp: !1},"wnp.3d.paint": {image: "wnp.3d.paint.gif",content: "<strong>" + _("Decorate") + "</strong><ul><li>" + _("Click on a wall to paint it.") + "</li><li>" + _("You can paint objects too.") + "</li></ul>",disp: !1}}, this._load()
    };
    return t.prototype.setActive = function(t) {
        this._enabled = t
    }, t.prototype.display = function(t, e) {
//         !this._enabled || !e && this._bubbles[t].disp || (this._bubbles[t].disp = !0, this.helpBubble.newBubble("http://v2.wanaplan.fr/images/help/" + this._bubbles[t].image, this._bubbles[t].content, !0), this._save())
    }, t.prototype.alreadyDisplayed = function(t) {
        return this._bubbles[t].disp
    }, t.prototype._save = function() {
        var t = [];
        for (var e in this._bubbles)
            this._bubbles[e].disp && t.push(e);
        wnpLocalStorage["wanadev.planner.helpbubble"] = JSON.stringify(t)
    }, t.prototype._load = function() {
        if (wnpLocalStorage["wanadev.planner.helpbubble"]) {
            var t = JSON.parse(wnpLocalStorage["wanadev.planner.helpbubble"]);
            for (var e in t)
                this._bubbles[t[e]] && (this._bubbles[t[e]].disp = !0)
                }
    }, t
}();