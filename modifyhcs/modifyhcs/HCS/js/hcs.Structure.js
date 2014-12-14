var hcs = window.hcs || {};
hcs.Structure = function () {
    function t(t) {
        var e = {};
        for (var n in t)
            e[n] = t[n].serialize();
        return e
    }
    function e(t, e) {
        e.length = 0;
        for (var n in t) {
            var i = new window[t[n].name];
            i.deserialize(t[n]), i.updateReferences(i), e.push(i)
        }
    }
    var n = function (t) {
        this.uuid = hcs.uuid.uuid4(), this.lastModified = (new Date).getTime(), this.name = "planStructure", this.members = [], this.currentStructureIndex = 0, this.version = t, this.lastMaterialsUsed = [], this.structureVersion = t, this.params = {}, this.customData = {}
    };
    return n.prototype.clear = function () {
        this.members.length = 0, this.currentStructureIndex = 0, this.uuid = hcs.uuid.uuid4(), this.lastModified = (new Date).getTime(), this.params = {}
    }, n.prototype.getVersion = function () {
        return this.version
    }, n.prototype.getLength = function () {
        return this.members.length
    }, n.prototype.addElement = function (t) {
        return -1 == this.members.indexOf(t) ? (t.id = this.members.push(t) - 1, !0) : !1
    }, n.prototype.addToCurrentStructure = function (t) {
        this.members[this.currentStructureIndex].add(t)
    }, n.prototype.getElement = function (t) {
        return t > -1 && t < this.members.length ? this.members[t] : null
    }, n.prototype.getElementByName = function (t) {
        for (var e = this.members.length, n = 0, i = null; e > n && null === i; )
            i = this.members[n].name == t ? this.members[n] : i, n++;
        return i
    }, n.prototype.removeElement = function (t) {
        var e = this.members.indexOf(t);
        return e > -1 ? (this.members.splice(e, 1), this.reindexMembers(), !0) : !1
    }, n.prototype.getCurrentStructure = function () {
        return this.members[this.currentStructureIndex]
    }, n.prototype.setCurrentStructureIndex = function (t) {
        t > -1 && t < this.members.length && (this.currentStructureIndex = t)
    }, n.prototype.serialize = function () {
        function e(t) {
            for (var n in t)
                "object" == typeof t[n] ? e(t[n]) : "number" == typeof t[n] && (t[n] = Math.round(1e3 * t[n]) / 1e3)
        }
        var n = this;
        n.lastModified = (new Date).getTime();
        var i = { uuid: n.uuid, lastModified: n.lastModified, version: n.getVersion(), structureVersion: n.structureVersion, name: n.name, current: n.currentStructureIndex, members: t(n.members), lastMaterialsUsed: n.lastMaterialsUsed, params: n.params, customData: ujs.serializeObject(n.customData) };
        return e(i), JSON.stringify(i)
    }, n.prototype.deserialize = function (t) {
        var n = JSON.parse(t);
        return this.currentStructureIndex = 0 | +n.current, this.name = n.name, this.version = n.version, this.structureVersion = n.structureVersion, this.uuid = n.uuid || hcs.uuid.uuid4(), this.lastModified = n.lastModified || 0, this.lastMaterialsUsed = n.lastMaterialsUsed || [], this.params = n.params || {}, this.customData = ujs.deserializeObject(n.customData) || {}, e(n.members, this.members), this.reindexMembers(), !0
    }, n.prototype.addMemberAtIndex = function (t, e) {
        this.members.splice(t, 0, e), this.reindexMembers()
    }, n.prototype.reindexMembers = function () {
        for (var t = 0; t < this.members.length; t++)
            this.members[t].id = t
    }, n.prototype.updateFloorElevations = function () {
        for (var t = 0, e = 0; e < this.members.length; e++) {
            var n = this.getElement(e);
            n instanceof FloorStructure && (n.elevation = t, t += n.height)
        }
    }, n
} ();
