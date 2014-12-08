var wnp = window.wnp || {};
wnp.ComponentCollection = function () {
    var t = function (t) {
        Array.call(this), this._core = t, this._componentsToRemove = [], this._initialized = !1, this._size = 0
    };
    return t.prototype = Object.create(Array.prototype), t.prototype.addComponent = function (t) {
        var e = new t(this._core);
        return this.addInstancedComponent(e)
    }, t.prototype.addInstancedComponent = function (t) {
        return t.dirty || this.getComponentByName(t.name) ? null : (t.core || (t.core = this._core, t.structure = this._core.structure), this._initialized && !t.initialized && (t.initialize(), t.initialized = !0), this.push(t), this.sort(function (t, e) {
            return e.priority - t.priority
        }), this._size++, t)
    }, t.prototype.clear = function () {
        for (var t = 0; t < this._size; t++)
            this[t].destroy();
        this._size = 0, this.length = 0
    }, t.prototype.getComponent = function (t) {
        return "string" == typeof t ? this.getComponentByName(t) : this[t]
    }, t.prototype.removeComponent = function (t, e) {
        var e = "undefined" != typeof e ? e : !1, n = -1;
        if ("number" == typeof t)
            n = t;
        else if ("string" == typeof t) {
            var i = this.getComponentByName(t);
            i && (n = this.indexOf(i))
        } else
            n = this.indexOf(t);
        return 0 > n || n >= this._size ? null : e ? (this[n].destroy(), this._size--, this.splice(n, 1)) : (this._componentsToRemove.push(this[n].name), null)
    }, t.prototype.initialize = function () {
        if (!this._initialized) {
            this._initialized = !0, this.checkDirtyComponents();
            for (var t = 0; t < this._size; t++)
                this[t].initialize()
        }
    }, t.prototype.update = function (t) {
        for (var e = 0; e < this._size; e++)
            this[e].update(t)
    }, t.prototype.draw = function (t) {
        for (var e = 0; e < this._size; e++)
            this[e].draw(t)
    }, t.prototype.checkDirtyComponents = function () {
        if (this._componentsToRemove.length) {
            for (var t = 0, e = this._componentsToRemove.length; e > t; t++)
                this.removeComponent(this._componentsToRemove[t], !0);
            this._componentsToRemove.length = 0
        }
    }, t.prototype.getComponentByName = function (t) {
        for (var e = 0; e < this._size; e++)
            if (this[e].name == t)
                return this[e];
        return null
    }, t.prototype.size = function () {
        return this._size
    }, t
} ();