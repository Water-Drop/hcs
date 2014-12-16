var wnp = window.wnp || {};
wnp.AnimationHandler = function() {
    var t = function() {
    };
    t.LINEAR = 0, t.SMOOTH = 1;
    var e = -1, n = -1, i = [], o = 0, r = function(e, n, i, r) {
        this.running = !1, this.startTime = null, this.lastTime = null, this.endTime = null, this.duration = n || -1, this.speeds = null, this.target = e || null, this.properties = i || null, this.interpolationMethod = void 0 !== r && null !== r ? r : t.LINEAR, this.id = o++, this.computeSpeeds()
    };
    return r.prototype.computeSpeeds = function() {
        if (this.properties) {
            this.speeds = {};
            for (var t in this.properties)
                this.speeds[t] = (this.properties[t].end - this.properties[t].start) / this.duration
                }
    }, r.prototype.start = function() {
        this.running = !0, this.startTime = (new Date).getTime()
    }, r.prototype.stop = function() {
        this.running = !1, this.endTime = (new Date).getTime(), this.startTime = null
    }, t.Create = function(t, e, n, o) {
        var s = new r(t, e, n, o);
        return i.push(s), s
    }, t.GetAnimations = function() {
        return i
    }, t.GetAnimation = function(t) {
        for (var e = 0, n = i.length; n > e; e++)
            if (i[e].id === t)
                return i[e];
        return Logger.warning("No animation found with this id"), null
    }, t.Dispose = function(t) {
        for (var e = 0, n = i.length; n > e; e++)
            if (i[e].id === t)
                return void i.splice(e, 1)
                }, t.ClearAll = function() {
                    i.length = 0
                }, t.Process = function() {
                    e = (new Date).getTime();
                    for (var n = 0, o = i.length; o > n; n++)
                        t.ProcessAnimation(i[n])
                        }, t.ProcessAnimation = function(t) {
                            if (t.running) {
                                n = e - (t.lastTime || t.startTime), t.lastTime = e;
                                for (var i in t.properties)
                                    t.properties[i].callback ? t.properties[i].callback((e - t.startTime) * t.speeds[i] + t.properties[i].start) : t.target[i] += n * t.speeds[i];
                                e - t.startTime >= t.duration && t.stop()
                            }
                        }, t
}();
