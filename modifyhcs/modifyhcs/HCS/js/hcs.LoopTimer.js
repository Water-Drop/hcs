/*
 * Author: Zhou Jun
 * Function: LoopTime组件用来计时
 */
var hcs = window.hcs || {};
hcs.LoopTimer = function() {
    var looptimer = function() {
        var start = 0,
            end = 0;
        this.start = function() {
            start = (new Date).getTime()
        }, this.update = function() {
            var n = (new Date).getTime();
            end = n - start, start = n
        }, this.getElapsedTime = function() {
            return start
        }, this.getDeltaTime = function() {
            return end
        }
    };
    return looptimer
}();