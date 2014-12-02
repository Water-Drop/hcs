/*
 * Author：周珺
 * Date：2014/11/11
 * Email：kei0502@qq.com
 * 
 * 用于窗口显示
 * Modify
 * i -> frame
 */
var hcs = window.hcs || {};
hcs.UI = hcs.UI || {}, hcs.UI.Frame = function() {
    function mouseConfig(t) {
        if (t.touches && t.touches.length) {
            t.preventDefault();
            var e = t.touches[0];
            t.x = e.x || e.screenX || e.pageX || e.clientx, t.y = e.y || e.screenY || e.pageY || e.clientY
        }
        return t
    }
    function e(t) {
        var e = t.target.getAttribute("rel");
        "" != e && ujs.notify(e)
    }
    function createNewElement(type, classes, id) {
        /*
         * n() -> createNewElement
         * t -> type
         * i -> newElement
         * n -> id
         * e -> classes
         */
        var newElement = document.createElement(type);
        return id && newElement.setAttribute("id", id), classes && newElement.setAttribute("class", classes), newElement
    }
    var frame = function(t, e, n) {
        this.activeTab = 0, this.eventStarted = !1, this.config = t || {}, this.content = e || {}, this.parentNode = n || document.getElementById("modalWidgets") || document.body, this.domElement = null, this.mouseState = {x: 0,y: 0,prevX: 0,prevY: 0,deltaX: 0,deltaY: 0,click: !1}, this.windowPosition = {x: 0,y: 0}, this.menuDOM = document.getElementById("mainMenu"), this.windowSize = {width: this.config.width || 640,height: this.config.height || 480,maxWidth: this.config.maxWidth || 1980,maxHeight: this.config.maxHeight || 1080,minWidth: this.config.minWidth || 320,minHeight: this.config.minHeight || 240}, this.formBuilder = new hcs.UI.FormBuilder, this.initialized = !1
    };
    return frame.prototype.initialize = function() {
        this.initialized || (this.buildHTML(), this.adapteSize(), this.initializeEvents(), this.parentNode.appendChild(this.domElement), this.initialized = !0)
    }, frame.prototype.resetSize = function(t) {
        this.windowSize = {width: t.width || 640,height: t.height || 480}, t.autoSize ? (this.domElement.style.removeProperty("width"), this.domElement.style.removeProperty("height")) : (this.domElement.style.width = this.windowSize.width + "px", this.domElement.style.height = this.windowSize.height + "px")
    }, frame.prototype.adapteSize = function() {
        this.windowSize.width = Math.min(this.windowSize.width, this.windowSize.maxWidth), this.windowSize.height = Math.min(this.windowSize.height, this.windowSize.maxHeight), this.windowSize.width = Math.max(this.windowSize.width, this.windowSize.minWidth), this.windowSize.height = Math.max(this.windowSize.height, this.windowSize.minHeight), this.config.autoSize || (this.domElement.style.width = this.windowSize.width + "px", this.domElement.style.height = this.windowSize.height + "px")
    }, frame.prototype.buildHeaderTitle = function(title) {
        /*
         * t -> title
         */
        if (this.headerTitle.innerHTML = "", this.config.headerIcon) {
            var e = createNewElement("img", "window-title-icon");
            e.setAttribute("src", this.config.headerIcon), this.headerTitle.appendChild(e)
        }
        var i = createNewElement("span", "window-title-text");
        i.innerHTML = title || "Title", this.headerTitle.appendChild(i)
    }, frame.prototype.buildHTML = function() {
        /*
         * t -> layout
         */
        var layout = this.config.layout || "horizontal";
        this.domElement = createNewElement("div", "window"), this.header = createNewElement("header", "window-title"), this.closeWindow = createNewElement("span", "window-close"), this.config.showCloseButton === !1 && (this.closeWindow.style.display = "none"), this.header.appendChild(this.closeWindow), this.headerTitle = createNewElement("h1"), this.buildHeaderTitle(this.content.title), this.header.appendChild(this.headerTitle), this.domElement.appendChild(this.header), this.mainContent = createNewElement("div", "window-content"), this.domElement.appendChild(this.mainContent), this.tabsContainer = createNewElement("div", "tabbed " + layout), this.tabs = createNewElement("ul", "tabbed-tabs"), this.tabsContainer.appendChild(this.tabs), this.tabContent = createNewElement("div", "tabbed-tabcontent"), this.tabsContainer.appendChild(this.tabContent), this.mainContent.appendChild(this.tabsContainer), this.actionBar = createNewElement("div", "window-action-bar"), this.domElement.appendChild(this.actionBar)
    }, frame.prototype.setTitle = function(title) {
        /*
         * t -> title
         */
        this.headerTitle.innerHTML = title
    }, frame.prototype.setContent = function(config, e) {
        var e = "number" == typeof e ? e : 0;
        e = e >= this.tabs.children.length ? this.tabs.children.length - 1 : e, config instanceof HTMLElement ? (this.tabContent.children[e].innerHTML = "", this.tabContent.children[e].appendChild(config)) : this.tabContent.children[e].innerHTML = config
    }, frame.prototype.addTab = function(tabtitle, e, i, o) {
        /*
         * t -> tabtitle
         */
        var r = createNewElement("li");
        r.addEventListener("click", this.onTabClick.bind(this), !1), r.setAttribute("rel", "tab-" + this.tabs.children.length);
        var s = createNewElement("span", "tab-text");
        if (s.innerHTML = tabtitle, r.appendChild(s), e) {
            var a = createNewElement("span", "tab-icon"), e = createNewElement("img", "tab-icon");
            e.setAttribute("src", e), a.appendChild(e), r.appendChild(a)
        }
        this.tabs.appendChild(r);
        var l = createNewElement("section", "tab-content-" + (this.tabs.children.length - 1));
        i instanceof HTMLElement ? l.appendChild(i) : l.innerHTML = i, this.tabContent.appendChild(l)
    }, frame.prototype.setLayout = function(layout) {
        /*
         * t -> layout
         */
        this.domElement.classList.remove("horizontal", "vertical"), this.domElement.classList.add(layout)
    }, frame.prototype.clear = function(t) {
        var t = t || {tabs: !0,content: !0,actionBar: !0};
        t.tabs && (this.tabs.innerHTML = ""), t.content && (this.tabContent.innerHTML = ""), t.actionBar && (this.actionBar.innerHTML = "")
    }, frame.prototype.addForm = function(t, e, i) {
        if (!this.tabContent.children.length || this.tabContent.children.length <= t) {
            var i = i || "Tab " + this.tabContent.children.length;
            this.addTab(i, void 0, void 0, !0), t = this.tabs.children.length - 1
        }
        var o = this.tabContent.children[t];
        o.innerHTML = "";
        var r = createNewElement("ul");
        o.appendChild(r), this.formBuilder.itemsContainer = r, this.formBuilder.updateProperties(e)
    }, frame.prototype.setActionBar = function(t) {
        if (this.actionBar.children.length)
            for (var i = this.actionBar.children.length - 1; i > 0; i--)
                this.actionBar.children[i].removeEventListener("click", e), this.actionBar.removeChild(this.actionBar.children[i]);
        if ("string" == typeof element)
            this.actionBar.innerHTML = t;
        else
            for (var i = 0, o = t.length; o > i; i++) {
                var r = createNewElement("button");
                r.innerHTML = t[i].label, "function" != typeof t[i].action ? (r.setAttribute("rel", t[i].action), r.addEventListener("click", e, !1)) : (r.setAttribute("rel", ""), r.addEventListener("click", t[i].action, !1)), t[i].title && r.setAttribute("title", t[i].title), t[i]["class"] && r.setAttribute("class", t[i]["class"]), this.actionBar.appendChild(r)
            }
        this.domElement.classList.add("window-with-button")
    }, frame.prototype.showContent = function(t) {
        this.tabs.children[this.activeTab] && (this.tabs.children[this.activeTab].classList.remove("active"), this.tabContent.children[this.activeTab].classList.remove("active")), this.activeTab = t, this.activeTab = this.tabs.children[this.activeTab] ? this.activeTab : 0, this.tabs.children[this.activeTab].classList.add("active"), this.tabContent.children[this.activeTab].classList.add("active")
    }, frame.prototype.show = function(t, e) {
        this.initialize(), this.domElement.style.display = "block", this.tabs.children.length < 2 ? this.tabsContainer.classList.add("notab") : this.tabsContainer.classList.remove("notab"), this.showContent(this.activeTab), "undefined" != typeof t && "undefined" != typeof e ? (t + this.domElement.offsetWidth > window.innerWidth && (t = window.innerWidth - this.domElement.offsetWidth - 5, 0 > t && (t = 0)), e + this.domElement.offsetHeight > window.innerHeight && (e = window.innerHeight - this.domElement.offsetHeight - 5, 0 > e && (e = 0)), this.setPosition(t, e)) : this.centerWindow()
    }, frame.prototype.close = function() {
        ujs.notify("hcs.ui.frame.close"), this.domElement.style.display = "none"
    }, frame.prototype.centerWindow = function() {
        this.windowPosition.x = (window.innerWidth - this./*menuDom.*/offsetWidth) / 2 - this.windowSize.width / 2, this.windowPosition.y = window.innerHeight / 2 - this.windowSize.height / 2, this.domElement.style.position = "absolute", this.config.autoSize || (this.domElement.style.width = this.windowSize.width + "px", this.domElement.style.height = this.windowSize.height + "px"), this.domElement.style.top = this.windowPosition.y + "px", this.domElement.style.left = this.windowPosition.x + "px"
    }, frame.prototype.setPosition = function(x, y) {
        /*
         * t -> x
         * e -> y
         */
        this.windowPosition.x = x, this.windowPosition.y = y, this.domElement.style.top = this.windowPosition.y + "px", this.domElement.style.left = this.windowPosition.x + "px"
    }, frame.prototype.resetMouseState = function() {
        this.mouseState.click = !1, this.mouseState.prevX = 0, this.mouseState.prevY = 0, this.mouseState.x = 0, this.mouseState.y = 0, this.mouseState.deltaX = 0, this.mouseState.deltaY = 0
    }, frame.prototype.onHeaderMouseDown = function(e) {
        mouseConfig(e), this.mouseState.click = !0, this.mouseState.x = e.x || e.screenX, this.mouseState.y = e.y || e.screenY
    }, frame.prototype.onHeaderMouseUp = function() {
        this.resetMouseState()
    }, frame.prototype.onHeaderMouseMove = function(e) {
        this.mouseState.click && (mouseConfig(e), this.mouseState.prevX = this.mouseState.x, this.mouseState.prevY = this.mouseState.y, this.mouseState.x = e.x || e.screenX || this.mouseState.prevX, this.mouseState.y = e.y || e.screenY || this.mouseState.prevY, this.mouseState.deltaX = this.mouseState.x - this.mouseState.prevX, this.mouseState.deltaY = this.mouseState.y - this.mouseState.prevY, this.windowPosition.x += this.mouseState.deltaX, this.windowPosition.y += this.mouseState.deltaY, this.domElement.style.top = this.windowPosition.y + "px", this.domElement.style.left = this.windowPosition.x + "px")
    }, frame.prototype.initializeEvents = function() {
        this.eventStated || (this.closeWindow.addEventListener("click", this.close.bind(this), !1), this.closeWindow.addEventListener("touchstart", this.close.bind(this), !1), this.header.addEventListener("mousedown", this.onHeaderMouseDown.bind(this), !1), document.body.addEventListener("mouseup", this.onHeaderMouseUp.bind(this), !1), document.body.addEventListener("mousemove", this.onHeaderMouseMove.bind(this), !1), this.header.addEventListener("touchstart", this.onHeaderMouseDown.bind(this), !1), document.body.addEventListener("touchmove", this.onHeaderMouseMove.bind(this), !1), document.body.addEventListener("touchend", this.onHeaderMouseUp.bind(this), !1), document.body.addEventListener("touchcancel", this.onHeaderMouseUp.bind(this), !1), document.addEventListener("hcs.request.closePopup", this.close.bind(this), !1), this.eventStated = !0)
    }, frame.prototype.onTabClick = function(t) {
        var e = t.target.parentNode;
        t.target.classList.contains("counter") ? e = t.target.parentNode.parentNode : "LI" == t.target.nodeName && (e = t.target);
        var n = e.getAttribute("rel").split("-")[1];
        n != this.activeTab && this.showContent(n)
    }, frame.prototype.getDivNode = function(t) {
        var e = t;
        return "DIV" != e.nodeName && (e = this.getDivNode(t.parentNode)), e
    }, frame
}();
