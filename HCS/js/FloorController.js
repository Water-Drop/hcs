var FloorController = function() {
    var t = null,
        e = function(e) {
            BaseComponent2D.call(this, e, "FloorController"), this._dragging = !1, this.core = e, t = this
        };
    return e.prototype = Object.create(BaseComponent2D.prototype), e.prototype.update = function() {
        wanaplan.getSelectedStructure().isDirty() && this.updateHTML()
    }, e.prototype.onContextChanged = function() {}, e.prototype.initialize = function() {
        this.updateHTML(), this.startListening();
        ({
            context: "2D",
            values: [{
                type: "checkbox",
                label: _("Display the lower floor"),
                eventParams: {
                    eventName: "wnp.request.object.seeBottomFloor",
                    cast: "int"
                }
            }]
        })
    }, e.prototype.startListening = function() {
        document.addEventListener("wnp.structure.locale.loaded", this.updateHTML)
    }, e.prototype.stopListening = function() {
        document.removeEventListener("wnp.structure.locale.loaded", this.updateHTML)
    }, e.prototype.updateHTML = function() {
        t.removeHTML();
        var e = t.buildHTML();
        document.getElementById("modalWidgets").appendChild(e)
    }, e.prototype.removeHTML = function() {
        (fcElement = document.getElementById("floor-controller")) && document.getElementById("modalWidgets").removeChild(fcElement)
    }, e.prototype.buildHTML = function() {
        var e = document.createElement("div");
        e.setAttribute("id", "floor-controller"), e.setAttribute("style", "top: 10px;left: 10px;position:absolute;");
        for (var n = this.core.structure.getCurrentStructure() ? this.core.structure.getCurrentStructure().id : 0, i = 0; i < this.core.structure.getLength(); i++) {
            var o = this.structure.getElement(i);
            if (o instanceof FloorStructure) {
                var r = document.createElement("a");
                if (r.setAttribute("rel", i), r.setAttribute("draggable", !0), r.setAttribute("class", "floor-item"), i == n && ujs.addClass(r, "selected"), r.innerHTML = o.label ? o.label : 0 == i ? _("GND") : _("Floor") + " " + i, r.setAttribute("title", r.innerHTML), r.addEventListener("click", this.onItemClick, !1), r.addEventListener("dragstart", function(e) {
                        e.dataTransfer.setData("Text", this.id), t._dragging = this.getAttribute("rel")
                    }, !0), r.addEventListener("dragover", function(t) {
                        this.classList.add("dragover"), t.preventDefault()
                    }), r.addEventListener("dragleave", function() {
                        this.classList.remove("dragover")
                    }), r.addEventListener("drop", function(e) {
                        var n = this.getAttribute("rel");
                        this.classList.remove("dragover"), t.insertFloorBefore(t._dragging, n), t.updateHTML(), e.preventDefault()
                    }), e.appendChild(r), !this.core.engine3D.isViewer) {
                    var s = document.createElement("div");
                    s.setAttribute("class", "settings"), s.setAttribute("title", _("Change settings")), s.setAttribute("rel", i), s.innerHTML = "i", s.addEventListener("click", this.onItemContextMenu, !0), r.appendChild(s);
                    var a = document.createElement("div");
                    a.setAttribute("class", "delete"), a.setAttribute("title", _("Remove this floor")), a.setAttribute("rel", i), a.innerHTML = "x", a.addEventListener("click", this.onItemDelete, !1), r.appendChild(a)
                }
            }
        }
        if (!this.core.engine3D.isViewer) {
            var l = document.createElement("div");
            l.setAttribute("class", "floor-item"), l.innerHTML = _("+ add"), l.addEventListener("click", this.onAddItemClick), e.appendChild(l)
        }
        return e
    }, e.prototype.insertFloorBefore = function(e, n) {
        var i = this.structure.getElement(e);
        this.structure.removeElement(i), this.structure.addMemberAtIndex(n, i);
        for (var o = 0, r = 0; r < wanaplan.structure.getLength(); r++) {
            var i = t.structure.getElement(r);
            i instanceof FloorStructure && (i.elevation = o, o += i.height)
        }
        this.selectFloor(n)
    }, e.prototype.onItemClick = function() {
        (id = this.getAttribute("rel")) && t.selectFloor(id)
    }, e.prototype.onItemContextMenu = function(e) {
        if (id = this.getAttribute("rel")) {
            var n = wanaplan.structure.getElement(id),
                i = [{
                    name: "label",
                    label: _("Name"),
                    type: "text",
                    cast: "string",
                    value: n.label
                }, {
                    name: "height",
                    label: _("Height"),
                    type: "number",
                    cast: "int",
                    unit: "cm",
                    value: {
                        min: 5,
                        max: 500,
                        step: 1,
                        value: n.height
                    }
                }];
            wanaplan.engine2D.displayContextMenu(i, n, t.onContextMenuPropertyChanged.bind(t))
        }
        e.stopPropagation()
    }, e.prototype.onContextMenuPropertyChanged = function(t, e, n) {
        if (t.hasOwnProperty(e)) {
            var i = t[e];
            if (t[e] = n, "height" == e) {
                for (var o = 0; o < t.walls.length; o++)
                    (t.walls[o].height > t.height || t.walls[o].height == i) && (t.walls[o].height = t.height);
                this.core.structure.updateFloorElevations(), ujs.notify("wnp.request.floorSelected", {
                    id: this.core.getSelectedStructure().id,
                    structure: this.core.getSelectedStructure()
                })
            }
        }
        this.updateHTML(), this.core.engine2D.requestStaticDraw()
    }, e.prototype.onItemDelete = function(e) {
        if (confirm(_("confirm the deletion")) && !(wanaplan.structure.getLength() <= 1)) {
            if (id = this.getAttribute("rel")) {
                var n = wanaplan.structure.getElement(id);
                wanaplan.structure.removeElement(n);
                for (var i = 0, o = 0; o < wanaplan.structure.getLength(); o++) {
                    var r = t.structure.getElement(o);
                    r instanceof FloorStructure && (r.elevation = i, i += r.height)
                }
                ujs.notify("wnp.request.floorDeleted", {
                    id: id
                }, !0), t.selectFloor(0 == id ? id : id - 1)
            }
            e.stopPropagation()
        }
    }, e.prototype.onAddItemClick = function() {
        var e = '<form id="addFloorOptions">' + _("The following items will be duplicated") + '<table style="width:100%;">';
        e += "<tr>", e += '<td><input type="checkbox" name="duplicateOptions[]" value="walls" checked="checked" /></td>', e += "<td>" + _("墙") + "</td>", e += "</tr>", e += "<tr>", e += '<td><input type="checkbox" name="duplicateOptions[]" value="overtures" checked="checked" /></td>', e += "<td>" + _("门") + " & " + _("窗") + "</td>", e += "</tr>", e += "<tr>", e += '<td><input type="checkbox" name="duplicateOptions[]" value="cloisons" /></td>', e += "<td>" + _("隔板") + "</td>", e += "</tr>", e += "<tr>", e += '<td><input type="checkbox" name="duplicateOptions[]" value="stairways" /></td>', e += "<td>" + _("Stairways") + "</td>", e += "</tr>", e += "<tr>", e += '<td><input type="checkbox" name="duplicateOptions[]" value="objects" /></td>', e += "<td>" + _("Objects") + "</td>", e += "</tr>", e += "</table></form>";
        var n = {title: _("Create a new floor"),message: e,y: 30,x: 10,buttonA: !0,buttonB: !0,buttonBText: _("Create"),buttonAText: _("Cancel"),onClickB: function(e) {
            for (var n = document.getElementsByName("duplicateOptions[]"), i = [], o = 0; o < n.length; o++)
                n[o].checked && i.push(n[o].value);
            return t.onAddItemConfirm(e, i), !0
        }};
        wnp.UI.MessageBox.show(n)
    }, e.prototype.onAddItemConfirm = function(e, n) {
        var i = t.duplicateForFloor(n);
        if (i.id > 0) {
            var o = wanaplan.structure.getElement(i.id - 1);
            i.elevation = o.elevation + o.height
        }
        var r = function() {
            t.selectFloor(i.id)
        };
        ujs.notify("wnp.request.floorAdded", {
            id: i.id,
            callback: r
        }, !0)
    }, e.prototype.duplicateForFloor = function(t) {
        var t = t || [],
            e = wanaplan.structure.getCurrentStructure(),
            n = e.clone();
        wanaplan.structure.addElement(n), n.updateReferences(wanaplan.structure), n.hoppers = [];
        for (var i = 0, o = n.walls.length; o > i; i++)
            n.walls[i].materials = {}, n.walls[i].subSlopes = [];
        for (var r = n.internalRooms.concat(n.externalRooms), i = 0, o = r.length; o > i; i++)
            r[i].panesMaterials = {}, r[i].materials = {};
        if (n.subslopes = [], -1 == t.indexOf("objects") && (n.objects = []), -1 == t.indexOf("stairways") && (n.stairways = []), -1 == t.indexOf("walls")) {
            for (var i = n.walls.length - 1; i >= 0; i--) {
                var s = n.walls[i];
                s.remove(n)
            }
            n.externalRooms.length = 0, n.internalRooms.length = 0
        } else if (-1 == t.indexOf("cloisons"))
            for (var i = n.walls.length - 1; i >= 0; i--) {
                var s = n.walls[i];
                (s.type != s.TYPE_NORMAL || s.thickness < 15) && s.remove(n)
            }
        if (-1 == t.indexOf("overtures")) {
            n.overtures = [];
            for (var i = n.walls.length - 1; i >= 0; i--) {
                var s = n.walls[i];
                s.overtures.length = 0
            }
        } else
            for (var i = n.overtures.length - 1; i >= 0; i--) {
                n.overtures[i]
            }
        return n
    }, e.prototype.onSelectFloor = function(e) {
        e.id > -1 && t.selectFloor(e.id)
    }, e.prototype.selectFloor = function(e) {
        wanaplan.structure.setCurrentStructureIndex(e), wanaplan.structure.members[e].dirty(), wanaplan.engine2D.update(!0), wanaplan.engine2D.requestStaticDraw(), t.updateHTML();
        var n = wanaplan.getComponentByName("HistoryComponent");
        n && n.reset(), ujs.notify("wnp.request.floorSelected", {
            id: e,
            structure: wanaplan.structure.getCurrentStructure()
        }, !0)
    }, e
}();