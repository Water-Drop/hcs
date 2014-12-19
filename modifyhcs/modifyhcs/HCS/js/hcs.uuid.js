/*
 * Author: Zhou Jun
 * Function: 生成格式化的uuid
 */
var hcs = window.hcs || {};
hcs.uuid = function() {
    function uuid() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(uuid) {
                                                              var temp = 16 * Math.random() | 0, str = "x" == uuid ? temp : 3 & temp | 8;
                                                              return str.toString(16)
                                                              })
    }
    return {uuid4: uuid}
}();