/*
 * Author：周珺
 * Date：2014/11/14
 * Email：kei0502@qq.com
 * 
 */
/*
 * 显示关于界面，调用hcs.UI.Frame
 * Modify
 * t -> aboutwindow
 * e -> script
 * 已测试，页面正常
 */
var hcs = window.hcs || {};
hcs.UI = hcs.UI || {}, hcs.UI.AboutWindow = function() {
    var aboutwindow = function() {
        var aboutwindow = {minWidth: 500};
        aboutwindow.autoSize = aboutwindow.autoSize === !1 ? !1 : !0, hcs.UI.Frame.call(this, aboutwindow), this.initialize(), this.domElement.setAttribute("id", "aboutWindow"), this.setTitle("介绍"), this.close();
        var script = '<div class="scrollable-content" style="width: 410px; max-height: 300px; min-height: 100px; font-size: 9pt;"><ul>';
        script += '<li><strong>HCS 房产个性化定制系统:</strong><dl><dt>作者:</dt><dd>毕舰水、杜佳薇、周珺、虞思源</dd><dt>公司:</dt><dd>SJTU公司  IST实验室</dd></dl></li>', script += "</ul></div>", this.addTab("关于HCS", null, script, !0), script = '<div class="scrollable-content" style="width: 410px; max-height: 300px; min-height: 100px; font-size: 9pt;"><ul>', script += '<li><strong>Babylon.js 引擎:</strong><dl><dt>作者:</dt><dd>David Catuhe / David Rousset</dd><dt>主页:</dt><dd><a href="http://www.babylonjs.com">http://www.babylonjs.com</a></dd></dl></li>', script += "</ul></div>", this.addTab("相关技术", null, script, !0), this.setActionBar([{label: "关闭",action: function() {this.close()}.bind(this)}]),document.addEventListener("hcs.ui.showAboutWindow", function() {this.show(), ujs.notify("hcs.menu.top.deselect")}.bind(this), !1)
    };
    return aboutwindow.prototype = new hcs.UI.Frame, aboutwindow
}();
