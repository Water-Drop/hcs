/*
 * Author：吴疆
 * Date：2014年11月3日
 * Email：me@wujiang.name
 * 
 */
var hcs = window.hcs || {};

hcs.LoopTimer = function() {
    var LoopTimer = function() {
        var _elapsedTime = 0, _deltaTime = 0;
        this.start = function() {
            _elapsedTime = (new Date).getTime();
        }, this.update = function() {
            var now = (new Date).getTime();
            _deltaTime = now - _elapsedTime, _elapsedTime = now;
        }, this.getElapsedTime = function() {
            return _elapsedTime;
        }, this.getDeltaTime = function() {
            return _deltaTime;
        };
    };
    return LoopTimer;
}();