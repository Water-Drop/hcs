/*
 * 组建管理模块为往场景中添加，删除，检测提供统一的管理接口。需要实现添加、删除组件，冲突检测，组件绘制，组件获取，组建更新。
 */
var hcs = window.hcs || {};

hcs.ComponentCollection = function() {
    var ComponentCollection = function(ComponentCollection) {
        Array.call(this), 
        this._core = ComponentCollection, 
        this._componentsToRemove = [], 
        this._initialized = false, 
        this._size = 0;
    };
    return ComponentCollection.prototype = Object.create(Array.prototype), 
        ComponentCollection.prototype.addComponent = function(ComponentCollection) {
            var e = new ComponentCollection(this._core);
            return this.addInstancedComponent(e);
        }, ComponentCollection.prototype.addInstancedComponent = function(ComponentCollection) {
            return ComponentCollection.dirty || this.getComponentByName(ComponentCollection.name) ?
                    null :
                    (ComponentCollection.core || (ComponentCollection.core = this._core, ComponentCollection.structure = this._core.structure), 
                    this._initialized && ComponentCollection.initialize(), 
                    this.push(ComponentCollection), 
                    this.sort(function(ComponentCollection, e) {
                        return e.priority - ComponentCollection.priority;
                    }), this._size++, ComponentCollection);
        }, ComponentCollection.prototype.clear = function() {
            for (var ComponentCollection = 0; ComponentCollection < this._size; ComponentCollection++)
                this[ComponentCollection].destroy();
            this._size = 0, this.length = 0;
        }, ComponentCollection.prototype.getComponent = function(ComponentCollection) {
            return "string" === typeof ComponentCollection ?
                    this.getComponentByName(ComponentCollection) :
                    this[ComponentCollection];
        }, ComponentCollection.prototype.removeComponent = function(ComponentCollection, e) {
            var e = "undefined" !== typeof e ?
                    e :
                    false, n = -1;
            if ("number" === typeof ComponentCollection)
                n = ComponentCollection;
            else if ("string" === typeof ComponentCollection) {
                var i = this.getComponentByName(ComponentCollection);
                i && (n = this.indexOf(i));
            } else
                n = this.indexOf(ComponentCollection);
            return 0 > n || n >= this._size ?
                    null :
                    e ?
                    (this[n].destroy(), this._size--, this.splice(n, 1)) :
                    (this._componentsToRemove.push(this[n].name), null);
        }, ComponentCollection.prototype.initialize = function() {
            if (!this._initialized) {
                this._initialized = true, this.checkDirtyComponents();
                for (var ComponentCollection = 0; ComponentCollection < this._size; ComponentCollection++)
                    this[ComponentCollection].initialize();
            }
        }, ComponentCollection.prototype.update = function(ComponentCollection) {
            for (var e = 0; e < this._size; e++)
                this[e].update(ComponentCollection);
        }, ComponentCollection.prototype.draw = function(ComponentCollection) {
            for (var e = 0; e < this._size; e++)
                this[e].draw(ComponentCollection);
        }, ComponentCollection.prototype.checkDirtyComponents = function() {
            if (this._componentsToRemove.length) {
                for (var ComponentCollection = 0, e = this._componentsToRemove.length; e > ComponentCollection; ComponentCollection++)
                    this.removeComponent(this._componentsToRemove[ComponentCollection], true);
                this._componentsToRemove.length = 0;
            }
        }, ComponentCollection.prototype.getComponentByName = function(ComponentCollection) {
            for (var e = 0; e < this._size; e++)
                if (this[e].name === ComponentCollection)
                    return this[e];
            return null;
        }, ComponentCollection.prototype.size = function() {
            return this._size;
        }, ComponentCollection;
}();