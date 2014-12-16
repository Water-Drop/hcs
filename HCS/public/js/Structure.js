var BaseStructure = function () {
    var t = 0,
            e = function (e) {
                this.id = t++, this.name = e || "Structure_" + t
            };
    return e.prototype.add = function (t, e) {
        if ("undefined" == typeof this[t] && (this[t] = []), this[t] instanceof Array) {
            var n = this[t].indexOf(e);
            if (-1 == n)
                return !1;
            this[t].push(e)
        } else
            this[t] = e;
        return !0
    }, e.prototype.initialize = function () { }, e.prototype.update = function () { }, e.prototype.serialize = function () { }, e.Deserialize = function () { }, e.prototype.updateReferences = function () { }, e.prototype.updateFieldArray = function (t, e, n) {
        n.length = 0;
        for (var i = 0, o = this.structureIds.length; o > i; i++)
            for (var r = 0, s = e.length; s > r; r++)
                e[r].id == this.structureIds[i] && n.push(e[r])
    }, e.prototype.getElementByName = function (t, e) {
        var n = function (t, e) {
            for (var n = 0, i = null, o = e.length; o > n && null === e; )
                e[n].name == t && (i = e[n]), n++;
            return i
        };
        if (this[e] instanceof Array)
            return n(t, this[e]);
        var i = null;
        for (var o in this)
            this[o] instanceof Array && (i = n(t, this[o]));
        return i
    }, e
} ();