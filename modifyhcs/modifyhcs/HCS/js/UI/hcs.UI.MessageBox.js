/*
 * Author: Zhou Jun
 * Function: 控制创建对话框，包括初始化、显示等函数
 */
var hcs = window.hcs || {};
hcs.UI = hcs.UI || {}, hcs.UI.MessageBox = function() {
    var t = document.getElementById("modalWidgets"), e = !1, n = null, i = function(e) {
        var e = e || {}, i = this;
        t = document.getElementById("modalWidgets"), e.buttonAText = e.buttonAText || _("Ok"), e.buttonBText = e.buttonBText || _("Cancel"), e.buttonCText = e.buttonCText || _("Cancel"), e.inputType = e.inputType || "text", e.inputValue = e.inputValue || "", e.inputPlaceHolder = e.inputPlaceHolder || "", e.textAreaValue = e.textAreaValue || "", e.textAreaPlaceHolder = e.textAreaPlaceHolder || "", this.showButtonA = "undefined" != typeof e.buttonA ? e.buttonA : !1, this.showButtonB = "undefined" != typeof e.buttonB ? e.buttonB : !1, this.showButtonC = "undefined" != typeof e.buttonC ? e.buttonC : !1, this.showInput = "undefined" != typeof e.input ? e.input : !1, this.showTextArea = "undefined" != typeof e.textArea ? e.textArea : !1, this.closeCallback = e.onClose || function() {
        }, this.button1Callback = e.onClickA || function() {
        }, this.button2Callback = e.onClickB || function() {
        }, this.button3Callback = e.onClickC || function() {
        }, this.destroyAfterClose = "undefined" != typeof e.destroyAfterClose ? e.destroyAfterClose : !1, this.overlay = "undefined" != typeof e.overlay ? e.overlay : !1, this.opacity = e.opacity || 0, this.messageBox = document.createElement("div"), this.messageBox.setAttribute("id", "messageBox"), this.messageBox.setAttribute("class", "window"), this.header = document.createElement("header"), this.header.setAttribute("class", "window-title"), this.closeHeader = document.createElement("span"), this.closeHeader.setAttribute("class", "window-close"), this.closeHeader.addEventListener("click", function() {
                hcs.UI.MessageBox.close(), i.closeCallback.call(i)}, !1), this.header.appendChild(this.closeHeader), this.headerContent = document.createElement("h1"), this.header.appendChild(this.headerContent), this.content = document.createElement("p"), this.content.setAttribute("class", "mb-content window-content"), this.input = document.createElement("input"), this.input.setAttribute("class", "mb-input"), this.input.setAttribute("type", e.inputText), this.input.setAttribute("value", e.inputValue), this.input.setAttribute("placeholder", e.inputPlaceHolder), this.input.addEventListener("click", this.onInputClick, !1), this.showInput || this.input.setAttribute("style", "display:none;"), this.textArea = document.createElement("textarea"), this.textArea.setAttribute("class", "mb-textarea"), this.textArea.setAttribute("placeholder", e.textAreaPlaceHolder), this.textArea.style.display = "block", this.textArea.style.margin = "5px auto", this.textArea.style.width = "90%", this.textArea.style.height = "60px", this.textArea.innerHTML = e.textAreaValue, this.showTextArea || (this.textArea.style.display = "none"), this.buttonA = document.createElement("button"), this.buttonA.setAttribute("id", "mb-button-a"), this.buttonA.addEventListener("click", function(t) {
                        i.onClick(t, i)
                    }, !1), this.buttonA.innerHTML = e.buttonAText, this.showButtonA || this.buttonA.setAttribute("style", "display:none;"), this.buttonB = document.createElement("button"), this.buttonB.setAttribute("id", "mb-button-b"), this.buttonB.addEventListener("click", function(t) {
                            i.onClick(t, i)
                        }, !1), this.buttonB.innerHTML = e.buttonBText, this.showButtonB || this.buttonB.setAttribute("style", "display:none;"), this.buttonC = document.createElement("button"), this.buttonC.setAttribute("id", "mb-button-c"), this.buttonC.addEventListener("click", function(t) {
                                i.onClick(t, i)
                            }, !1), this.buttonC.innerHTML = e.buttonCText, this.showButtonC || this.buttonC.setAttribute("style", "display:none;"), this.buttonsContainer = document.createElement("div"), this.buttonsContainer.setAttribute("class", "window-action-bar"), this.buttonsContainer.appendChild(this.buttonA), this.buttonsContainer.appendChild(this.buttonB), this.buttonsContainer.appendChild(this.buttonC), this.messageBox.appendChild(this.header), this.messageBox.appendChild(this.content), this.messageBox.appendChild(this.input), this.messageBox.appendChild(this.textArea), this.messageBox.appendChild(this.buttonsContainer), t.appendChild(this.messageBox), this.autoHideInterval = null, n = this;
        var i = this;
        document.addEventListener("hcs.request.closePopup", function() {
            n = n == this ? null : n, i.destroy()
        }, !1)
    };
    return i.prototype.destroy = function() {
        var n = this;
        this.buttonA.removeEventListener("click", function(t) {
            n.onClick(t, n)
        }), this.buttonB.removeEventListener("click", function(t) {
            n.onClick(t, n)
        }), this.buttonC.removeEventListener("click", function(t) {
            n.onClick(t, n)
        }), this.headerContent.innerHTML = "", this.content.innerHTML = "", this.messageBox.setAttribute("style", "display:none;"), e && ujs.notify("hcs.ui.messagebox.closed"), e = !1, null !== this.messageBox.parentNode && t.removeChild(this.messageBox)
    }, i.prototype.onClick = function(t, e) {
        if (e.messageBox.setAttribute("style", "display:none;"), "undefined" != typeof t.clearInterval && t.clearInterval && clearInterval(e.autoHideInterval), null != e.closeCallback && (params = {textInput: e.input.value}, e.closeCallback(params)), "undefined" != typeof t.target) {
            t.textInput = e.input.value, t.textAreaInput = e.textArea.value;
            var n = t.target.id;
            "mb-button-a" == n && null != e.button1Callback && e.button1Callback(t), "mb-button-b" == n && null != e.button2Callback && e.button2Callback(t), "mb-button-c" == n && null != e.button3Callback && e.button3Callback(t)
        }
        e.destroyAfterClose && e.destroy()
    }, i.prototype.onInputClick = function() {
        this.value = ""
    }, i.prototype.open = function(t) {
        var t = t || {}, n = "undefined" != typeof t.force ? t.force : !1;
        if (!e || n) {
            e = !0;
            var i = t.autoHide || !1, o = t.hideTime || 1500, r = t.width || 250, s = t.height || !1, a = t.x || window.innerWidth / 2 - r / 2, l = t.y || window.innerHeight / 2 - s / 2, h = t.title || "", c = t.message || "";
            this.headerContent.innerHTML = h, c instanceof HTMLElement ? (this.content.innerHTML = "", this.content.appendChild(c)) : this.content.innerHTML = c, this.showInput && (s += 30), (this.showButtonA || this.showButtonB) && (s += 30);
            var u = "display:block;width:" + r + "px;top:" + l + "px;left:" + a + "px;";
            if (s && (u += "width:" + r + "px;"), this.messageBox.setAttribute("style", u), !this.showInput && "string" == typeof c && GlobalHelper.isMobileDevice()) {
                this.content.classList.add(/<form|<ul|<table/.test(c) ? "message-incFontSize" : "message-center");
                var p = this.content.getBoundingClientRect();
                this.content.style.top = Math.floor(window.innerHeight / 2 - p.height / 2) + "px"
            }
            var d = this;
            i && (this.autoHideInterval = setInterval(function() {
                d.onClick({clearInterval: !0}, d)
            }, o)), ujs.notify("hcs.ui.messagebox.opened")
        }
    }, i.prototype.close = function() {
        var t = "";
        this.defaultStyles && this.defaultStyles.box && (t = this.defaultStyles.box), this.messageBox.setAttribute("style", t + "display:none"), e = !1, ujs.notify("hcs.ui.messagebox.closed")
    }, i.close = function() {
        null != n && (n.close(), n.destroy(), n = null)
    }, i.show = function(t) {
        var t = t || {}, n = "undefined" == typeof t.force ? !1 : t.force;
        if (!e || n) {
            var t = t || {};
            t.autoHide = t.autoHide || !1, t.hideTime = t.hideTime || 2500, t.width = t.width || null, t.height = t.height || null, t.x = t.x || null, t.y = t.y || null, t.title = t.title || "", t.message = t.message || "", t.inputValue = t.inputValue || "", t.openCallback = t.openCallback || function() {
            };
            var i = {destroyAfterClose: !0,onClose: t.onClose || null,onClickA: t.onClickA || null,onClickB: t.onClickB || null,onClickC: t.onClickC || null,buttonA: "undefined" != typeof t.buttonA ? t.buttonA : !1,buttonAText: t.buttonAText || null,buttonB: "undefined" != typeof t.buttonB ? t.buttonB : !1,buttonBText: t.buttonBText || null,buttonC: "undefined" != typeof t.buttonC ? t.buttonC : !1,buttonCText: t.buttonCText || null,input: "undefined" != typeof t.input ? t.input : !1,inputValue: t.inputValue,inputPlaceHolder: t.inputPlaceHolder,textArea: "undefined" != typeof t.textArea ? t.textArea : !1,textAreaValue: t.textAreaValue,textAreaPlaceHolder: t.textAreaPlaceHolder,opacity: t.opacity || 0,overlay: t.overlay || !1}, o = new hcs.UI.MessageBox(i);
            o.open(t), t.openCallback()
        }
    }, i
}();
