var hcs = window.hcs || {};
hcs.uuid = function() {
    function t() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
                                                              var e = 16 * Math.random() | 0, n = "x" == t ? e : 3 & e | 8;
                                                              return n.toString(16)
                                                              })
    }
    return {uuid4: t}
}();