var wnp = window.wnp || {};
wnp.LoopTimer = function() {
    var t = function() {
        var t = 0,
            e = 0;
        this.start = function() {
            t = (new Date).getTime()
        }, this.update = function() {
            var n = (new Date).getTime();
            e = n - t, t = n
        }, this.getElapsedTime = function() {
            return t
        }, this.getDeltaTime = function() {
            return e
        }
    };
    return t
}();