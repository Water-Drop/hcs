var BrowserDetector = function() {
    var t = null, e = [{string: navigator.userAgent,subString: "Chrome",identity: "Chrome"}, {string: navigator.vendor,subString: "Apple",identity: "Safari",versionSearch: "Version"}, {string: navigator.userAgent,subString: "Firefox",identity: "Firefox"}, {string: navigator.userAgent,subString: "Netscape",identity: "Netscape"}, {string: navigator.userAgent,subString: "MSIE",identity: "Explorer",versionSearch: "MSIE"}, {string: navigator.userAgent,subString: "Gecko",identity: "Mozilla",versionSearch: "rv"}, {string: navigator.userAgent,subString: "Mozilla",identity: "Netscape",versionSearch: "Mozilla"}], n = [{string: navigator.platform,subString: "Win",identity: "Windows"}, {string: navigator.platform,subString: "Mac",identity: "Mac"}, {string: navigator.userAgent,subString: "iPhone",identity: "iOS"}, {string: navigator.userAgent,subString: "iPod",identity: "iOS"}, {string: navigator.userAgent,subString: "iPad",identity: "iOS"}, {string: navigator.platform,subString: "Linux",identity: "Linux"}, {string: navigator.plateform,subString: "Android",identity: "Android"}], i = function() {
        this.browser = this._searchString(e) || "An unknown browser", this.version = this._searchVersion(navigator.userAgent) || this._searchVersion(navigator.appVersion) || "an unknown version", this.OS = this._searchString(n) || "an unknown OS", t = this
    };
    return i.getInstance = function() {
        return null === t && (t = new BrowserDetector), t
    }, i.prototype.isMobile = function() {
        var t = !1;
        return function(e) {
            (/(android|bb\d+|meego).+mobile|android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|iphone|ipod|ipad|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0)
        }(navigator.userAgent || navigator.vendor || window.opera), t
    }, i.prototype._searchString = function(t) {
        for (var e = 0; e < t.length; e++) {
            var n = t[e].string, i = t[e].prop;
            if (this.version_searchString = t[e].versionSearch || t[e].identity, n) {
                if (-1 != n.indexOf(t[e].subString))
                    return t[e].identity
                    } else if (i)
                        return t[e].identity
                        }
    }, i.prototype._searchVersion = function(t) {
        var e = t.indexOf(this.version_searchString);
        if (-1 != e)
            return parseFloat(t.substring(e + this.version_searchString.length + 1))
            }, i
}(), BrowserDetect = new BrowserDetector, photonui = function(t, e) {
    !function(t) {
        "undefined" != typeof module && module.exports ? module.exports = t() : "function" == typeof define && "object" == typeof define.amd ? define(t) : this.Class = t()
    }(function(t) {
      function e(t) {
      return !h || /\B\$super\b/.test(t.toString())
      }
      function n(e, n, i) {
      i === t ? delete e[n] : e[n] = i
      }
      function i(e, n) {
      return Object.prototype.hasOwnProperty.call(e, n) ? e[n] : t
      }
      function o(t) {
      l = !0;
      var e = new t;
      return l = !1, e
      }
      var r = "1.4", s = this, a = s.Class, l = !1, h = function() {
      $super()
      }.toString().indexOf("$super") > 0, c = function() {
      };
      return c.$noConflict = function() {
      try {
      n(s, "Class", a)
      } catch (t) {
      s.Class = a
      }
      return c
      }, c.$classyVersion = r, c.$extend = function(r) {
      var a = this.prototype, h = o(this);
      if (r.__include__)
      for (var u = 0, p = r.__include__.length; u != p; ++u) {
      var d = r.__include__[u];
      for (var m in d) {
      var g = i(d, m);
      g !== t && (h[m] = d[m])
      }
      }
      if (r.__classvars__ = r.__classvars__ || {}, h.__classvars__)
      for (var f in h.__classvars__)
      if (!r.__classvars__[f]) {
      var g = i(h.__classvars__, f);
      r.__classvars__[f] = g
      }
      for (var m in r) {
      var g = i(r, m);
      "__include__" !== m && g !== t && (h[m] = "function" == typeof g && e(g) ? function(t, e) {
                                         return function() {
                                         var o = i(this, "$super");
                                         this.$super = a[e];
                                         try {
                                         return t.apply(this, arguments)
                                         }finally {
                                         n(this, "$super", o)
                                         }
                                         }
                                         }(g, m) : g)
      }
      var y = function() {
      if (!l) {
      var t = s === this ? o(arguments.callee) : this;
      return t.__init__ && t.__init__.apply(t, arguments), t.$class = y, t
      }
      };
      for (var f in r.__classvars__) {
      var g = i(r.__classvars__, f);
      g !== t && (y[f] = g)
      }
      return y.prototype = h, y.constructor = y, y.$extend = c.$extend, y.$withData = c.$withData, y
      }, c.$withData = function(e) {
      var n = o(this);
      for (var r in e) {
      var s = i(e, r);
      s !== t && (n[r] = s)
      }
      return n
      }, c
      });
    var n = n || {};
    n.e_parent = null, n.domInsert = function(t, e) {
        var e = e || n.e_parent || document.getElementsByTagName("body")[0];
        e.appendChild(t.html)
    }, t._ == e && (t._ = function(t, e) {
                    var n = t;
                    if (e)
                    for (var i in e)
                    n = n.replace(new RegExp("{" + i + "}", "g"), e[i]);
                    return n
                    });
    var n = n || {};
    n.Helpers = function() {
    }, n.Helpers.escapeHtml = function(t) {
        return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }, n.Helpers.uuid4 = function() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
                                                              var e = 16 * Math.random() | 0, n = "x" == t ? e : 3 & e | 8;
                                                              return n.toString(16)
                                                              })
    }, n.Helpers.cleanNode = function(t) {
        for (; t.hasChildNodes(); )
            t.removeChild(t.lastChild)
            }, n.Helpers.getAbsolutePosition = function(t) {
                if (!t instanceof Element)
                    return {x: 0,y: 0};
                try {
                    var e = getComputedStyle(t)
                } catch (n) {
                    return {x: 0,y: 0}
                }
                if (!e)
                    return {x: 0,y: 0};
                for (var i = -parseInt(e.borderLeftWidth), o = -parseInt(e.borderTopWidth); t.offsetParent; )
                    e = getComputedStyle(t), i += t.offsetLeft || 0, i += parseInt(e.borderLeftWidth), o += t.offsetTop || 0, o += parseInt(e.borderTopWidth), t = t.offsetParent;
                return {x: i,y: o}
            };
    var n = n || {};
    n.Base = Class.$extend({__init__: function(t) {
                           this.__events = {}, this._registerWEvents(["destroy"]);
                           for (var i in this)
                           if (0 == i.indexOf("get")) {
                           var o = i.slice(3, 4).toLowerCase() + i.slice(4, i.length);
                           Object.defineProperty(this, o, {get: this[i],enumerable: !0,configurable: !0})
                           } else if (0 == i.indexOf("set")) {
                           var o = i.slice(3, 4).toLowerCase() + i.slice(4, i.length);
                           Object.defineProperty(this, o, {set: this[i],enumerable: !0,configurable: !0})
                           } else if (0 == i.indexOf("is")) {
                           var o = i.slice(2, 3).toLowerCase() + i.slice(3, i.length);
                           Object.defineProperty(this, o, {get: this[i],enumerable: !0,configurable: !0})
                           }
                           var t = t || {};
                           for (param in t)
                           this[param] !== e && (this[param] = t[param]);
                           var r = null, s = 0, a = "";
                           if (t.callbacks)
                           for (var l in t.callbacks)
                           if (r = t.callbacks[l], "function" == typeof r)
                           this.registerCallback(n.Helpers.uuid4(), l, r);
                           else if (r instanceof Array)
                           for (s = 0; s < r.length; s++)
                           this.registerCallback(n.Helpers.uuid4(), l, r[s]);
                           else
                           for (a in r)
                           this.registerCallback(a, l, r[a])
                           },__events: null,__callbacks: null,destroy: function() {
                           this._callCallbacks("destroy");
                           for (var t in this.__events)
                           this._unbindEvent(t)
                           },registerCallback: function(t, e, n, i) {
                           return this.__callbacks[e] ? void (this.__callbacks[e][t] = {callback: n,thisArg: i || null}) : void console.error("This widget have no '" + e + "' event.")
                           },removeCallback: function(t) {
                           for (var e in this.__callbacks)
                           this.__callbacks[e][t] && delete this.__callbacks[e][t]
                           },_updateProperties: function(t) {
                           for (var e = 0; e < t.length; e++)
                           this[t[e]] = this[t[e]]
                           },_bindEvent: function(t, e, n, i) {
                           this.__events[t] = {evName: n,element: e,callback: i}, this.__events[t].element.addEventListener(this.__events[t].evName, this.__events[t].callback, !1)
                           },_unbindEvent: function(t) {
                           this.__events[t].element.removeEventListener(this.__events[t].evName, this.__events[t].callback, !1), delete this.__events[t]
                           },_registerWEvents: function(t) {
                           null == this.__callbacks && (this.__callbacks = {});
                           for (var e in t)
                           this.__callbacks[t[e]] = {}
                           },_callCallbacks: function(t, e) {
                           var e = e || [];
                           for (var n in this.__callbacks[t])
                           this.__callbacks[t][n].callback.apply(this.__callbacks[t][n].thisArg || this, [this].concat(e))
                           }});
    var n = n || {}, i = {};
    n.getWidget = function(t) {
        return i[t] !== e ? i[t] : null
    }, n.Widget = n.Base.$extend({__init__: function(t) {
                                 this.__html = {}, this._layoutOptions = {}, this._buildHtml(), this._registerWEvents(["show", "hide"]), this.$super(t), this._updateProperties(["visible"]), this.name || (this.name = "widget-" + n.Helpers.uuid4()), t && t.className && this.addClass(t.className), this.html && this._bindEvent("pop-contextmenu", this.html, "contextmenu", this.__onContextMenu.bind(this)), this._bindEvent("locale-changed", document, "stonejs-locale-changed", this.__onLocaleChanged.bind(this)), i[this.name] = this
                                 },_name: null,getName: function() {
                                 return this._name
                                 },setName: function(t) {
                                 delete i[this.name], this._name = t, i[t] = this, this.html && (this.html.id = this.name)
                                 },_visible: !0,isVisible: function() {
                                 return this._visible
                                 },setVisible: function(t) {
                                 this._visible = t, this.html && (this.visible ? (this.html.style.display = "", this._callCallbacks("show")) : (this.html.style.display = "none", this._callCallbacks("hide")))
                                 },_tooltip: null,getTooltip: function() {
                                 return this._tooltip
                                 },setTooltip: function(t) {
                                 this._tooltip = t, t ? this.html.title = t : delete this.html.removeAttribute("title")
                                 },_contextMenuName: null,getContextMenuName: function() {
                                 return this._contextMenuName
                                 },setContextMenuName: function(t) {
                                 this._contextMenuName = t
                                 },getContextMenu: function() {
                                 return n.getWidget(this.contextMenuName)
                                 },setContextMenu: function(t) {
                                 this.contextMenuName = t instanceof n.PopupWindow ? t.name : null
                                 },_layoutOptions: {},getLayoutOptions: function() {
                                 return this._layoutOptions
                                 },setLayoutOptions: function(t) {
                                 for (option in t)
                                 this._layoutOptions[option] = t[option]
                                 },getHtml: function() {
                                 return console.warn("getHtml() method not implemented for this widget."), null
                                 },getAbsolutePosition: function() {
                                 return this.html ? n.Helpers.getAbsolutePosition(this.html) : {x: 0,y: 0}
                                 },getOffsetWidth: function() {
                                 return this.html ? this.html.offsetWidth : 0
                                 },getOffsetHeight: function() {
                                 return this.html ? this.html.offsetHeight : 0
                                 },__html: {},show: function() {
                                 this.visible = !0
                                 },hide: function() {
                                 this.visible = !1
                                 },destroy: function() {
                                 this.$super(), delete i[this.name], this.html && this.html.parentNode && this.html.parentNode.removeChild(this.html)
                                 },addClass: function(t) {
                                 if (this.html) {
                                 var e = this.html.className.split(" ");
                                 e.indexOf(t) < 0 && e.push(t), this.html.className = e.join(" ")
                                 }
                                 },removeClass: function(t) {
                                 if (this.html) {
                                 var e = this.html.className.split(" "), n = e.indexOf(t);
                                 n >= 0 && e.splice(n, 1), this.html.className = e.join(" ")
                                 }
                                 },_buildHtml: function() {
                                 console.warn("_buildHtml() method not implemented for this widget.")
                                 },__onContextMenu: function(t) {
                                 t.stopPropagation(), t.preventDefault(), this.contextMenuName && this.contextMenu.popupXY(t.pageX, t.pageY)
                                 },__onLocaleChanged: function() {
                                 if (t.Stone)
                                 for (var e in this)
                                 this[e] instanceof Stone.LazyString && (this[e] = this[e])
                                 }});
    var n = n || {};
    n.Canvas = n.Widget.$extend({__init__: function(t) {
                                this.$super(t), this._updateProperties(["width", "height"]), this.getContext = this.__html.canvas.getContext.bind(this.__html.canvas), this.__html.canvas.supportsContext && (this.supportsContext = this.__html.canvas.supportsContext.bind(this.__html.canvas)), this.__html.canvas.setContext && (this.setContext = this.__html.canvas.setContext.bind(this.__html.canvas)), this.__html.canvas.transferControlToProxy && (this.transferControlToProxy = this.__html.canvas.transferControlToProxy.bind(this.__html.canvas)), this.toDataURL = this.__html.canvas.toDataURL.bind(this.__html.canvas), this.__html.canvas.toDataURLHD && (this.toDataURLHD = this.__html.canvas.toDataURLHD.bind(this.__html.canvas)), this.__html.canvas.toBlob && (this.toBlob = this.__html.canvas.toBlob.bind(this.__html.canvas)), this.__html.canvas.toBlobHD && (this.toBlobHD = this.__html.canvas.toBlobHD.bind(this.__html.canvas))
                                },getWidth: function() {
                                return this.__html.canvas.width
                                },setWidth: function(t) {
                                this.__html.canvas.width = t || 300
                                },getHeight: function() {
                                return this.__html.canvas.height
                                },setHeight: function(t) {
                                this.__html.canvas.height = t || 150
                                },getCanvas: function() {
                                return this.__html.canvas
                                },getHtml: function() {
                                return this.__html.outer
                                },getInteractiveNode: function() {
                                return this.__html.canvas
                                },_buildHtml: function() {
                                this.__html.outer = document.createElement("div"), this.__html.outer.className = "photonui-widget photonui-canvas", this.__html.canvas = document.createElement("canvas"), this.__html.outer.appendChild(this.__html.canvas)
                                },__onLocaleChanged: function() {
                                }});
    var n = n || {};
    n.CheckBox = n.Widget.$extend({__init__: function(t) {
                                  this._registerWEvents(["value-changed", "click"]), this.$super(t), this.inputId = this.name + "-input", this._bindEvent("value-changed", this.__html.checkbox, "change", this.__onChange.bind(this)), this._bindEvent("span-click", this.__html.span, "click", this.__onSpanClick.bind(this)), this._bindEvent("checkbox-click", this.__html.checkbox, "click", this.__onCheckboxClick.bind(this)), this._bindEvent("span-keypress", this.__html.span, "keypress", this.__onSpanKeypress.bind(this)), this.__html.checkbox.name = this.name, this.__html.checkbox.id = this.inputId
                                  },getValue: function() {
                                  return this.__html.checkbox.checked
                                  },setValue: function(t) {
                                  this.__html.checkbox.checked = t
                                  },getHtml: function() {
                                  return this.__html.outer
                                  },_buildHtml: function() {
                                  this.__html.outer = document.createElement("div"), this.__html.outer.className = "photonui-widget photonui-checkbox", this.__html.checkbox = document.createElement("input"), this.__html.checkbox.type = "checkbox", this.__html.outer.appendChild(this.__html.checkbox), this.__html.span = document.createElement("span"), this.__html.span.tabIndex = "0", this.__html.outer.appendChild(this.__html.span)
                                  },__onChange: function() {
                                  this._callCallbacks("value-changed", [this.value]), "none" == t.getComputedStyle(this.__html.checkbox).display && this.__html.span.focus()
                                  },__onSpanClick: function(t) {
                                  this.value = !this.value, this._callCallbacks("value-changed", [this.value]), this._callCallbacks("click", [t])
                                  },__onCheckboxClick: function(t) {
                                  this._callCallbacks("click", [t])
                                  },__onSpanKeypress: function(t) {
                                  (32 == t.charCode || 13 == t.keyCode) && (this.value = !this.value, this._callCallbacks("value-changed", [this.value]))
                                  }});
    var n = n || {};
    n.Container = n.Widget.$extend({_childName: null,getChildName: function() {
                                   return this._childName
                                   },setChildName: function(t) {
                                   this.childName && this.containerNode && this.child && this.child.html && this.containerNode.removeChild(this.child.html), this._childName = t, this.childName && this.containerNode && this.child && this.child.html && this.containerNode.appendChild(this.child.html)
                                   },getChild: function() {
                                   return n.getWidget(this.childName)
                                   },setChild: function(t) {
                                   return !t instanceof n.Widget ? void (this.childName = null) : void (this.childName = t.name)
                                   },getContainerNode: function() {
                                   return console.warn("getContainerNode() method not implemented for this widget."), null
                                   },destroy: function() {
                                   this.childName && this.child.destroy(), this.$super()
                                   }});
    var n = n || {};
    n.Label = n.Widget.$extend({__init__: function(t) {
                               var t = t || {};
                               t.layoutOptions = t.layoutOptions || {}, t.layoutOptions.verticalExpansion === e && (t.layoutOptions.verticalExpansion = !1), this.$super(t), this._updateProperties(["text", "textAlign", "forInputName"])
                               },_text: "Label",getText: function() {
                               return this._text
                               },setText: function(t) {
                               this._text = t, n.Helpers.cleanNode(this.__html.label), this.__html.label.appendChild(document.createTextNode(t))
                               },_textAlign: "left",getTextAlign: function() {
                               return this._textAlign
                               },setTextAlign: function(t) {
                               if ("left" != t && "center" != t && "right" != t)
                               throw "Text alignement sould be 'left', 'center' or 'right'.";
                               this._textAlign = t, this.__html.label.style.textAlign = t
                               },_forInputName: null,getForInputName: function() {
                               return this._forInputName
                               },setForInputName: function(t) {
                               this._forInputName = t, this._forInputName && this.__html.label.setAttribute("for", n.Helpers.escapeHtml(this.forInput.inputId || this.forInput.name))
                               },getForInput: function() {
                               return n.getWidget(this.forInputName)
                               },setForInput: function(t) {
                               this.forInputName = t.name
                               },getHtml: function() {
                               return this.__html.label
                               },_buildHtml: function() {
                               this.__html.label = document.createElement("label"), this.__html.label.className = "photonui-widget photonui-label"
                               }});
    var n = n || {};
    n.Field = n.Widget.$extend({__init__: function(t) {
                               this._registerWEvents(["value-changed", "keydown", "keyup", "keypress", "selection-changed"]), this.$super(t), this._updateProperties(["value", "placeholder"]), this.__html.field.name = this.name
                               },getValue: function() {
                               return this.__html.field.value
                               },setValue: function(t) {
                               this.__html.field.value = t
                               },_placeholder: "",getPlaceholder: function() {
                               return this._placeholder
                               },setPlaceholder: function(t) {
                               this._placeholder = t, this.__html.field.placeholder = t
                               },getHtml: function() {
                               return this.__html.field
                               },_bindFieldEvents: function() {
                               this._bindEvent("value-changed", this.__html.field, "change", function() {
                                               this._callCallbacks("value-changed", [this.getValue()])
                                               }.bind(this)), this._bindEvent("keydown", this.__html.field, "keydown", function(t) {
                                                                              this._callCallbacks("keydown", [t])
                                                                              }.bind(this)), this._bindEvent("keyup", this.__html.field, "keyup", function(t) {
                                                                                                             this._callCallbacks("keyup", [t])
                                                                                                             }.bind(this)), this._bindEvent("keypress", this.__html.field, "keypress", function(t) {
                                                                                                                                            this._callCallbacks("keypress", [t])
                                                                                                                                            }.bind(this)), this._bindEvent("selection-changed", this.__html.field, "select", function(t) {
                                                                                                                                                                           this._callCallbacks("selection-changed", [this.__html.field.selectionStart, this.__html.field.selectionEnd, ("" + this.getValue()).substring(this.__html.field.selectionStart, this.__html.field.selectionEnd), t])
                                                                                                                                                                           }.bind(this))
                               },__onContextMenu: function(t) {
                               t.stopPropagation()
                               }});
    var n = n || {};
    n.BaseIcon = n.Widget.$extend({__onLocaleChanged: function() {
                                  }}), t.Stone = function() {
        function t(t, n) {
            this.toString = e.bind(this, t, n)
        }
        function e(t, e) {
            var n = t;
            if (l && a[l] && a[l][t] && (n = a[l][t]), e)
                for (var i in e)
                    n = n.replace(new RegExp("{" + i + "}", "g"), e[i]);
            return n
        }
        function n(e, n) {
            return new t(e, n)
        }
        function i(t) {
            for (var e in t)
                a[e] = t[e]
                }
        function o() {
            return l
        }
        function r(t) {
            l = t;
            var e = null;
            try {
                e = new Event("stonejs-locale-changed")
            } catch (n) {
                e = document.createEvent("Event"), e.initEvent("stonejs-locale-changed", !0, !1)
            }
            document.dispatchEvent(e)
        }
        function s() {
            var t = navigator.language || navigator.userLanguage || navigator.systemLanguage || navigator.browserLanguage || null;
            return t && (t = t.toLowerCase()), t && t.length > 3 && (t = t.split(";")[0], t = t.split(",")[0], t = t.split("-")[0], t = t.split("_")[0], t.length > 3 && (t = null)), t || "en"
        }
        var a = {}, l = null;
        return {LazyString: t,gettext: e,lazyGettext: n,addCatalogs: i,getLocale: o,setLocale: r,guessUserLanguage: s}
    }(t);
    var n = n || {};
    n.Translation = n.Base.$extend({__init__: function(e) {
                                   this._registerWEvents(["locale-changed"]), this.$super(e), this._bindEvent("locale-changed", document, "stonejs-locale-changed", this.__onStonejsLocaleChanged.bind(this)), t._ = this.lazyGettext
                                   },getLocale: Stone.getLocale,setLocale: Stone.setLocale,addCatalogs: Stone.addCatalogs,guessUserLanguage: Stone.guessUserLanguage,gettext: Stone.gettext,lazyGettext: Stone.lazyGettext,__onStonejsLocaleChanged: function() {
                                   this._callCallbacks("locale-changed", [this.locale])
                                   }}), function(t, e) {
        function n() {
            function t() {
                var n;
                return n = e("amd"), n.fork = t, n
            }
            return t()
        }
        function i() {
            function t() {
                var n;
                return n = e("CommonJS"), n.fork = t, n
            }
            module.exports = t()
        }
        function o() {
            function n() {
                function i() {
                    var e, n;
                    for (n = Array.prototype.slice.apply(arguments), e = 0; e < r.length; e += 1)
                        "undefined" == typeof s[r[e]] ? delete t[r[e]] : t[r[e]] = s[r[e]];
                    for (s = {}, e = 0; e < n.length; e += 1) {
                        if ("string" != typeof n[e])
                            throw new Error("Cannot replace namespaces. All new namespaces must be strings.");
                        s[n[e]] = t[n[e]], t[n[e]] = o
                    }
                    return r = n
                }
                var o, r = [], s = {};
                return o = e("global"), o.fork = n, o.noConflict = i, o
            }
            var i;
            i = n(), i.noConflict("KeyboardJS", "k")
        }
        [].indexOf || (Array.prototype.indexOf = function(t, e, n) {
                       for (n = this.length, e = (n + ~~e) % n; n > e && (!(e in this) || this[e] !== t); e++)
                       ;
                       return e ^ n ? e : -1
                       }), "function" == typeof define && define.amd ? define(n) : "undefined" != typeof module ? i() : o()
    }(this, function() {
      function e() {
      t.addEventListener ? (document.addEventListener("keydown", o, !1), document.addEventListener("keyup", r, !1), t.addEventListener("blur", i, !1), t.addEventListener("webkitfullscreenchange", i, !1), t.addEventListener("mozfullscreenchange", i, !1)) : t.attachEvent && (document.attachEvent("onkeydown", o), document.attachEvent("onkeyup", r), t.attachEvent("onblur", i))
      }
      function n() {
      i(), t.removeEventListener ? (document.removeEventListener("keydown", o, !1), document.removeEventListener("keyup", r, !1), t.removeEventListener("blur", i, !1), t.removeEventListener("webkitfullscreenchange", i, !1), t.removeEventListener("mozfullscreenchange", i, !1)) : t.detachEvent && (document.detachEvent("onkeydown", o), document.detachEvent("onkeyup", r), t.detachEvent("onblur", i))
      }
      function i(t) {
      I = [], u(), f(t)
      }
      function o(t) {
      var e, n, i;
      if (e = s(t.keyCode), !(e.length < 1)) {
      for (t.isRepeat = !1, i = 0; i < e.length; i += 1)
      n = e[i], -1 != x().indexOf(n) && (t.isRepeat = !0), C(n);
      c(), g(t)
      }
      }
      function r(t) {
      var e, n;
      if (e = s(t.keyCode), !(e.length < 1)) {
      for (n = 0; n < e.length; n += 1)
      M(e[n]);
      u(), f(t)
      }
      }
      function s(t) {
      return E[t] || []
      }
      function a(t) {
      var e;
      for (e in E)
      if (E.hasOwnProperty(e) && E[e].indexOf(t) > -1)
      return e;
      return !1
      }
      function l(t, e) {
      if ("string" != typeof t && ("object" != typeof t || "function" != typeof t.push))
      throw new Error("Cannot create macro. The combo must be a string or array.");
      if ("object" != typeof e || "function" != typeof e.push)
      throw new Error("Cannot create macro. The injectedKeys must be an array.");
      T.push([t, e])
      }
      function h(t) {
      var e;
      if ("string" != typeof t && ("object" != typeof t || "function" != typeof t.push))
      throw new Error("Cannot remove macro. The combo must be a string or array.");
      for (mI = 0; mI < T.length; mI += 1)
      if (e = T[mI], y(t, e[0])) {
      M(e[1]), T.splice(mI, 1);
      break
      }
      }
      function c() {
      var t, e, n;
      for (t = 0; t < T.length; t += 1)
      if (e = b(T[t][0]), -1 === k.indexOf(T[t]) && _(e))
      for (k.push(T[t]), n = 0; n < T[t][1].length; n += 1)
      C(T[t][1][n])
      }
      function u() {
      var t, e, n;
      for (t = 0; t < k.length; t += 1)
      if (e = b(k[t][0]), _(e) === !1) {
      for (n = 0; n < k[t][1].length; n += 1)
      M(k[t][1][n]);
      k.splice(t, 1), t -= 1
      }
      }
      function p(t, e, n) {
      function i() {
      var t;
      for (t = 0; t < h.length; t += 1)
      N.splice(N.indexOf(h[t]), 1)
      }
      function o(t) {
      function e() {
      var e, i;
      for (e = 0; e < n.length; e += 1)
      if ("function" == typeof n[e])
      if ("keyup" === t)
      for (i = 0; i < h.length; i += 1)
      h[i].keyUpCallback.splice(h[i].keyUpCallback.indexOf(n[e]), 1);
      else
      for (i = 0; i < h.length; i += 1)
      h[i].keyDownCallback.splice(h[i].keyDownCallback.indexOf(n[e]), 1)
      }
      var n, i, o, r = {};
      if ("string" != typeof t)
      throw new Error("Cannot bind callback. The event name must be a string.");
      if ("keyup" !== t && "keydown" !== t)
      throw new Error('Cannot bind callback. The event name must be a "keyup" or "keydown".');
      for (n = Array.prototype.slice.apply(arguments, [1]), i = 0; i < n.length; i += 1)
      if ("function" == typeof n[i])
      if ("keyup" === t)
      for (o = 0; o < h.length; o += 1)
      h[o].keyUpCallback.push(n[i]);
      else if ("keydown" === t)
      for (o = 0; o < h.length; o += 1)
      h[o].keyDownCallback.push(n[i]);
      return r.clear = e, r
      }
      var r, s, a, l = {}, h = [];
      for ("string" == typeof t && (t = b(t)), s = 0; s < t.length; s += 1) {
      if (r = {}, a = w([t[s]]), "string" != typeof a)
      throw new Error("Failed to bind key combo. The key combo must be string.");
      r.keyCombo = a, r.keyDownCallback = [], r.keyUpCallback = [], e && r.keyDownCallback.push(e), n && r.keyUpCallback.push(n), N.push(r), h.push(r)
      }
      return l.clear = i, l.on = o, l
      }
      function d(t) {
      var e, n;
      for (e = 0; e < N.length; e += 1)
      n = N[e], y(t, n.keyCombo) && (N.splice(e, 1), e -= 1)
      }
      function m(t) {
      var e, n, i;
      if (t) {
      for (e = 0; e < N.length; e += 1)
      for (i = N[e], n = 0; n < i.keyCombo.length; n += 1)
      if (i.keyCombo[n].indexOf(t) > -1) {
      N.splice(e, 1), e -= 1;
      break
      }
      } else
      N = []
      }
      function g(t) {
      var e, n, i, o, r, s, a, l, h, c, u, p = [];
      for (r = [].concat(I), e = 0; e < N.length; e += 1)
      u = v(N[e].keyCombo).length, p[u] || (p[u] = []), p[u].push(N[e]);
      for (n = p.length - 1; n >= 0; n -= 1)
      if (p[n])
      for (e = 0; e < p[n].length; e += 1) {
      for (i = p[n][e], o = v(i.keyCombo), h = !0, l = 0; l < o.length; l += 1)
      if (-1 === r.indexOf(o[l])) {
      h = !1;
      break
      }
      if (h && _(i.keyCombo)) {
      for (R.push(i), l = 0; l < o.length; l += 1)
      c = r.indexOf(o[l]), c > -1 && (r.splice(c, 1), l -= 1);
      for (s = 0; s < i.keyDownCallback.length; s += 1)
      i.keyDownCallback[s](t, x(), i.keyCombo) === !1 && (a = !0);
      a === !0 && (t.preventDefault(), t.stopPropagation())
      }
      }
      }
      function f(t) {
      var e, n, i, o;
      for (e = 0; e < R.length; e += 1)
      if (i = R[e], _(i.keyCombo) === !1) {
      for (n = 0; n < i.keyUpCallback.length; n += 1)
      i.keyUpCallback[n](t, x(), i.keyCombo) === !1 && (o = !0);
      o === !0 && (t.preventDefault(), t.stopPropagation()), R.splice(e, 1), e -= 1
      }
      }
      function y(t, e) {
      var n, i, o;
      if (t = b(t), e = b(e), t.length !== e.length)
      return !1;
      for (n = 0; n < t.length; n += 1) {
      if (t[n].length !== e[n].length)
      return !1;
      for (i = 0; i < t[n].length; i += 1) {
      if (t[n][i].length !== e[n][i].length)
      return !1;
      for (o = 0; o < t[n][i].length; o += 1)
      if (-1 === e[n][i].indexOf(t[n][i][o]))
      return !1
      }
      }
      return !0
      }
      function _(t) {
      var e, n, i, o, r, s, a = 0;
      for (t = b(t), e = 0; e < t.length; e += 1) {
      for (s = !0, a = 0, n = 0; n < t[e].length; n += 1) {
      for (i = [].concat(t[e][n]), o = a; o < I.length; o += 1)
      r = i.indexOf(I[o]), r > -1 && (i.splice(r, 1), a = o);
      if (0 !== i.length) {
      s = !1;
      break
      }
      }
      if (s)
      return !0
      }
      return !1
      }
      function v(t) {
      var e, n, i = [];
      for (t = b(t), e = 0; e < t.length; e += 1)
      for (n = 0; n < t[e].length; n += 1)
      i = i.concat(t[e][n]);
      return i
      }
      function b(t) {
      var e = t, n = 0, i = 0, o = !1, r = !1, s = [], a = [], l = [], h = "";
      if ("object" == typeof t && "function" == typeof t.push)
      return t;
      if ("string" != typeof t)
      throw new Error('Cannot parse "keyCombo" because its type is "' + typeof t + '". It must be a "string".');
      for (; " " === e.charAt(n); )
      n += 1;
      for (; ; ) {
      if (" " === e.charAt(n)) {
      for (; " " === e.charAt(n); )
      n += 1;
      o = !0
      } else if ("," === e.charAt(n)) {
      if (i || r)
      throw new Error("Failed to parse key combo. Unexpected , at character index " + n + ".");
      r = !0, n += 1
      } else if ("+" === e.charAt(n)) {
      if (h.length && (l.push(h), h = ""), i || r)
      throw new Error("Failed to parse key combo. Unexpected + at character index " + n + ".");
      i = !0, n += 1
      } else if (">" === e.charAt(n)) {
      if (h.length && (l.push(h), h = ""), l.length && (a.push(l), l = []), i || r)
      throw new Error("Failed to parse key combo. Unexpected > at character index " + n + ".");
      i = !0, n += 1
      } else if (n < e.length - 1 && "!" === e.charAt(n) && (">" === e.charAt(n + 1) || "," === e.charAt(n + 1) || "+" === e.charAt(n + 1)))
      h += e.charAt(n + 1), i = !1, o = !1, r = !1, n += 2;
      else {
      if (!(n < e.length && "+" !== e.charAt(n) && ">" !== e.charAt(n) && "," !== e.charAt(n) && " " !== e.charAt(n))) {
      n += 1;
      continue
      }
      for ((i === !1 && o === !0 || r === !0) && (h.length && (l.push(h), h = ""), l.length && (a.push(l), l = []), a.length && (s.push(a), a = [])), i = !1, o = !1, r = !1; n < e.length && "+" !== e.charAt(n) && ">" !== e.charAt(n) && "," !== e.charAt(n) && " " !== e.charAt(n); )
      h += e.charAt(n), n += 1
      }
      if (n >= e.length) {
      h.length && (l.push(h), h = ""), l.length && (a.push(l), l = []), a.length && (s.push(a), a = []);
      break
      }
      }
      return s
      }
      function w(t) {
      var e, n, i = [];
      if ("string" == typeof t)
      return t;
      if ("object" != typeof t || "function" != typeof t.push)
      throw new Error("Cannot stringify key combo.");
      for (e = 0; e < t.length; e += 1) {
      for (i[e] = [], n = 0; n < t[e].length; n += 1)
      i[e][n] = t[e][n].join(" + ");
      i[e] = i[e].join(" > ")
      }
      return i.join(" ")
      }
      function x() {
      return [].concat(I)
      }
      function C(t) {
      if (t.match(/\s/))
      throw new Error("Cannot add key name " + t + " to active keys because it contains whitespace.");
      I.indexOf(t) > -1 || I.push(t)
      }
      function M(t) {
      var e = a(t);
      "91" === e || "92" === e ? I = [] : I.splice(I.indexOf(t), 1)
      }
      function D(t, e) {
      if ("string" != typeof t)
      throw new Error("Cannot register new locale. The locale name must be a string.");
      if ("object" != typeof e)
      throw new Error("Cannot register " + t + " locale. The locale map must be an object.");
      if ("object" != typeof e.map)
      throw new Error("Cannot register " + t + " locale. The locale map is invalid.");
      e.macros || (e.macros = []), P[t] = e
      }
      function B(t) {
      if (t) {
      if ("string" != typeof t)
      throw new Error("Cannot set locale. The locale name must be a string.");
      if (!P[t])
      throw new Error("Cannot set locale to " + t + " because it does not exist. If you would like to submit a " + t + " locale map for KeyboardJS please submit it at https://github.com/RobertWHurst/KeyboardJS/issues.");
      E = P[t].map, T = P[t].macros, A = t
      }
      return A
      }
      var A, E, T, S, L, O = {}, P = {}, I = [], N = [], R = [], k = [];
      for (L = {map: {3: ["cancel"],8: ["backspace"],9: ["tab"],12: ["clear"],13: ["enter"],16: ["shift"],17: ["ctrl"],18: ["alt", "menu"],19: ["pause", "break"],20: ["capslock"],27: ["escape", "esc"],32: ["space", "spacebar"],33: ["pageup"],34: ["pagedown"],35: ["end"],36: ["home"],37: ["left"],38: ["up"],39: ["right"],40: ["down"],41: ["select"],42: ["printscreen"],43: ["execute"],44: ["snapshot"],45: ["insert", "ins"],46: ["delete", "del"],47: ["help"],91: ["command", "windows", "win", "super", "leftcommand", "leftwindows", "leftwin", "leftsuper"],92: ["command", "windows", "win", "super", "rightcommand", "rightwindows", "rightwin", "rightsuper"],145: ["scrolllock", "scroll"],186: ["semicolon", ";"],187: ["equal", "equalsign", "="],188: ["comma", ","],189: ["dash", "-"],190: ["period", "."],191: ["slash", "forwardslash", "/"],192: ["graveaccent", "`"],219: ["openbracket", "["],220: ["backslash", "\\"],221: ["closebracket", "]"],222: ["apostrophe", "'"],48: ["zero", "0"],49: ["one", "1"],50: ["two", "2"],51: ["three", "3"],52: ["four", "4"],53: ["five", "5"],54: ["six", "6"],55: ["seven", "7"],56: ["eight", "8"],57: ["nine", "9"],96: ["numzero", "num0"],97: ["numone", "num1"],98: ["numtwo", "num2"],99: ["numthree", "num3"],100: ["numfour", "num4"],101: ["numfive", "num5"],102: ["numsix", "num6"],103: ["numseven", "num7"],104: ["numeight", "num8"],105: ["numnine", "num9"],106: ["nummultiply", "num*"],107: ["numadd", "num+"],108: ["numenter"],109: ["numsubtract", "num-"],110: ["numdecimal", "num."],111: ["numdevide", "num/"],144: ["numlock", "num"],112: ["f1"],113: ["f2"],114: ["f3"],115: ["f4"],116: ["f5"],117: ["f6"],118: ["f7"],119: ["f8"],120: ["f9"],121: ["f10"],122: ["f11"],123: ["f12"]},macros: [["shift + `", ["tilde", "~"]], ["shift + 1", ["exclamation", "exclamationpoint", "!"]], ["shift + 2", ["at", "@"]], ["shift + 3", ["number", "#"]], ["shift + 4", ["dollar", "dollars", "dollarsign", "$"]], ["shift + 5", ["percent", "%"]], ["shift + 6", ["caret", "^"]], ["shift + 7", ["ampersand", "and", "&"]], ["shift + 8", ["asterisk", "*"]], ["shift + 9", ["openparen", "("]], ["shift + 0", ["closeparen", ")"]], ["shift + -", ["underscore", "_"]], ["shift + =", ["plus", "+"]], ["shift + (", ["opencurlybrace", "opencurlybracket", "{"]], ["shift + )", ["closecurlybrace", "closecurlybracket", "}"]], ["shift + \\", ["verticalbar", "|"]], ["shift + ;", ["colon", ":"]], ["shift + '", ["quotationmark", '"']], ["shift + !,", ["openanglebracket", "<"]], ["shift + .", ["closeanglebracket", ">"]], ["shift + /", ["questionmark", "?"]]]}, S = 65; 90 >= S; S += 1)
      L.map[S] = String.fromCharCode(S + 32), L.macros.push(["shift + " + String.fromCharCode(S + 32) + ", capslock + " + String.fromCharCode(S + 32), [String.fromCharCode(S)]]);
      return D("us", L), B("us"), e(), O.enable = e, O.disable = n, O.activeKeys = x, O.on = p, O.clear = d, O.clear.key = m, O.locale = B, O.locale.register = D, O.macro = l, O.macro.remove = h, O.key = {}, O.key.name = s, O.key.code = a, O.combo = {}, O.combo.active = _, O.combo.parse = b, O.combo.stringify = w, O
      });
    var n = n || {};
    n.AccelManager = n.Base.$extend({__init__: function() {
                                    this.__kbd = {}, this.$super()
                                    },__kbd: null,addAccel: function(t, n, i, o) {
                                    var n = n.toLowerCase().replace(/ *\+ */, " + ").replace(/ *, */, ", ").replace(/ *> */, " > ");
                                    this.removeAccel(t), this.__kbd[t] = {keys: n,safe: o === e ? !0 : o,callback: i,binding: KeyboardJS.on(n, this.__onAccell.bind(this))}
                                    },removeAccel: function(t) {
                                    this.__kbd[t] && (this.__kbd[t].binding.clear(), delete this.__kbd[t])
                                    },destroy: function() {
                                    for (var t in this.__kbd)
                                    this.removeAccel(t);
                                    this.$super()
                                    },__onAccell: function(t, e, n) {
                                    for (var i in this.__kbd)
                                    this.__kbd[i].keys == n && (this.__kbd[i].safe && (document.activeElement instanceof HTMLInputElement || document.activeElement instanceof HTMLSelectElement || document.activeElement instanceof HTMLTextAreaElement) || (this.__kbd[i].callback(), t.stopPropagation(), t.preventDefault()))
                                    }});
    var n = n || {};
    n.Separator = n.Widget.$extend({__init__: function(t) {
                                   this.$super(t), this._updateProperties(["orientation"])
                                   },_orientation: "horizontal",getOrientation: function() {
                                   return this._orientation
                                   },setOrientation: function(t) {
                                   if ("vertical" != t && "horizontal" != t)
                                   throw 'Error: The orientation should be "vertical" or "horizontal".';
                                   this._orientation = t, this.removeClass("photonui-separator-vertical"), this.removeClass("photonui-separator-horizontal"), this.addClass("photonui-separator-" + this.orientation)
                                   },getHtml: function() {
                                   return this.__html.outer
                                   },_buildHtml: function() {
                                   this.__html.outer = document.createElement("div"), this.__html.outer.className = "photonui-widget photonui-separator", this.__html.hr = document.createElement("hr"), this.__html.outer.appendChild(this.__html.hr)
                                   },__onLocaleChanged: function() {
                                   }});
    var n = n || {};
    n.Color = n.Base.$extend({__init__: function(t) {
                             this._registerWEvents(["value-changed"]), "object" != typeof t || Array.isArray(t) ? (this.$super(), "string" == typeof t ? this.hexString = t : Array.isArray(t) ? this.setRGBA(t) : arguments.length >= 3 && this.setRGBA.apply(this, arguments)) : this.$super(t)
                             },getHexString: function() {
                             var t = this.red.toString(16).toUpperCase();
                             1 == t.length && (t = "0" + t);
                             var e = this.green.toString(16).toUpperCase();
                             1 == e.length && (e = "0" + e);
                             var n = this.blue.toString(16).toUpperCase();
                             return 1 == n.length && (n = "0" + n), "#" + t + e + n
                             },setHexString: function(t) {
                             var t = t.replace(" ", "");
                             if (t.match(/^#[0-9a-f]{6}$/i))
                             this._red = parseInt(t[1] + t[2], 16), this._green = parseInt(t[3] + t[4], 16), this._blue = parseInt(t[5] + t[6], 16), this._updateHSB();
                             else if (t.match(/^#[0-9a-f]{3}$/i))
                             this._red = parseInt(t[1] + t[1], 16), this._green = parseInt(t[2] + t[2], 16), this._blue = parseInt(t[3] + t[3], 16), this._updateHSB();
                             else {
                             var n = {white: [255, 255, 255],silver: [192, 192, 192],gray: [128, 128, 128],black: [0, 0, 0],red: [255, 0, 0],maroon: [128, 0, 0],yellow: [255, 255, 0],olive: [128, 128, 0],lime: [0, 255, 0],green: [0, 128, 0],aqua: [0, 255, 255],teal: [0, 128, 128],blue: [0, 0, 255],navy: [0, 0, 128],fuchsia: [255, 0, 255],purple: [128, 0, 128]};
                             n[t] != e && this.setRGB(n[t])
                             }
                             },getRgbString: function() {
                             return "rgb(" + this._red + ", " + this._green + ", " + this._blue + ")"
                             },getRgbaString: function() {
                             return "rgba(" + this._red + ", " + this._green + ", " + this._blue + ", " + this._alpha / 255 + ")"
                             },_red: 255,getRed: function() {
                             return this._red
                             },setRed: function(t) {
                             this._red = Math.max(0, Math.min(255, 0 | t)), this._updateHSB()
                             },_green: 0,getGreen: function() {
                             return this._green
                             },setGreen: function(t) {
                             this._green = Math.max(0, Math.min(255, 0 | t)), this._updateHSB()
                             },_blue: 0,getBlue: function() {
                             return this._blue
                             },setBlue: function(t) {
                             this._blue = Math.max(0, Math.min(255, 0 | t)), this._updateHSB()
                             },_alpha: 255,getAlpha: function() {
                             return this._alpha
                             },setAlpha: function(t) {
                             this._alpha = Math.max(0, Math.min(255, 0 | t)), this._callCallbacks("value-changed")
                             },_hue: 0,getHue: function() {
                             return this._hue
                             },setHue: function(t) {
                             this._hue = Math.max(0, Math.min(360, 0 | t)), this._updateRGB()
                             },_saturation: 100,getSaturation: function() {
                             return this._saturation
                             },setSaturation: function(t) {
                             this._saturation = Math.max(0, Math.min(100, 0 | t)), this._updateRGB()
                             },_brightness: 100,getBrightness: function() {
                             return this._brightness
                             },setBrightness: function(t) {
                             this._brightness = Math.max(0, Math.min(100, 0 | t)), this._updateRGB()
                             },setRGB: function() {
                             this.setRGBA.apply(this, arguments)
                             },setRGBA: function() {
                             var t = arguments;
                             1 == arguments.length && Array.isArray(arguments[0]) && (t = arguments[0]), t.length < 3 || (this._red = Math.max(0, Math.min(255, 0 | t[0])), this._green = Math.max(0, Math.min(255, 0 | t[1])), this._blue = Math.max(0, Math.min(255, 0 | t[2])), t[3] != e && (this._alpha = Math.max(0, Math.min(255, 0 | t[3]))), this._updateHSB())
                             },getRGB: function() {
                             return [this._red, this._green, this._blue]
                             },getRGBA: function() {
                             return [this._red, this._green, this._blue, this._alpha]
                             },setHSB: function() {
                             var t = arguments;
                             1 == arguments.length && Array.isArray(arguments[0]) && (t = arguments[0]), 3 == t.length && (this._hue = Math.max(0, Math.min(360, 0 | t[0])), this._saturation = Math.max(0, Math.min(100, 0 | t[1])), this._brightness = Math.max(0, Math.min(100, 0 | t[2])), this._updateRGB())
                             },toString: function() {
                             return this.hexString
                             },_updateHSB: function() {
                             var t = this._red / 255, e = this._green / 255, n = this._blue / 255, i = Math.min(t, e, n), o = Math.max(t, e, n);
                             o == i ? this._hue = 0 : o == t ? this._hue = Math.round((60 * (e - n) / (o - i) + 360) % 360) : o == e ? this._hue = Math.round(60 * (n - t) / (o - i) + 120) : o == n && (this._hue = Math.round(60 * (t - e) / (o - i) + 240)), this._saturation = 0 == o ? 0 : Math.round(100 * (1 - i / o)), this._brightness = Math.round(100 * o), this._callCallbacks("value-changed")
                             },_updateRGB: function() {
                             var t = this.hue % 360, e = this.saturation / 100, n = this.brightness / 100, i = (t / 60 | 0) % 6, o = t / 60 - i, r = n * (1 - e), s = n * (1 - o * e), a = n * (1 - (1 - o) * e);
                             switch (i) {
                             case 0:
                             this._red = 255 * n | 0, this._green = 255 * a | 0, this._blue = 255 * r | 0;
                             break;
                             case 1:
                             this._red = 255 * s | 0, this._green = 255 * n | 0, this._blue = 255 * r | 0;
                             break;
                             case 2:
                             this._red = 255 * r | 0, this._green = 255 * n | 0, this._blue = 255 * a | 0;
                             break;
                             case 3:
                             this._red = 255 * r | 0, this._green = 255 * s | 0, this._blue = 255 * n | 0;
                             break;
                             case 4:
                             this._red = 255 * a | 0, this._green = 255 * r | 0, this._blue = 255 * n | 0;
                             break;
                             case 5:
                             this._red = 255 * n | 0, this._green = 255 * r | 0, this._blue = 255 * s | 0
                             }
                             this._callCallbacks("value-changed")
                             }});
    var n = n || {};
    n.Text = n.Widget.$extend({_lastSet: "text",_raw: "",getText: function() {
                              return this.__html.outer.textContent
                              },setText: function(t) {
                              this._lastSet = "text", this._raw = t, n.Helpers.cleanNode(this.__html.outer), this.__html.outer.appendChild(document.createTextNode(t))
                              },getRawHtml: function() {
                              return this.__html.outer.innerHTML
                              },setRawHtml: function(t) {
                              this._lastSet = "rawHtml", this._raw = t, this.__html.outer.innerHTML = t
                              },getHtml: function() {
                              return this.__html.outer
                              },_buildHtml: function() {
                              this.__html.outer = document.createElement("div"), this.__html.outer.className = "photonui-widget photonui-text"
                              },__onLocaleChanged: function() {
                              t.Stone && (this.$super(), this._raw instanceof Stone.LazyString && (this[this._lastSet] = this._raw))
                              }});
    var n = n || {};
    n.FileManager = n.Base.$extend({__init__: function(t) {
                                   this.__fileField = document.createElement("input"), this.__fileField.type = "file", this.__fileField.addEventListener("change", this.__onFileSelected.bind(this), !1), this.__fileField.style.position = "fixed", this.__fileField.style.top = 0, this.__fileField.style.left = 0, this.__fileField.style.opacity = 0, this.__fileField.style.display = "none", document.getElementsByTagName("body")[0].appendChild(this.__fileField), this._acceptedMimes = [], this._acceptedExts = [], this._registerWEvents(["file-open"]), this.$super(t)
                                   },_acceptedMimes: [],getAcceptedMimes: function() {
                                   return this._acceptedMimes
                                   },setAcceptedMimes: function(t) {
                                   this._acceptedMimes = t, this._updateAccepted()
                                   },_acceptedExts: [],getAcceptedExts: function() {
                                   return this._acceptedExts
                                   },setAcceptedExts: function(t) {
                                   this._acceptedExts = t, this._updateAccepted()
                                   },_dropZone: null,getDropZone: function() {
                                   return this._dropZone
                                   },setDropZone: function(t) {
                                   this._dropZone && (this._unbindEvent("document-dragover"), this._unbindEvent("document-drop"), this._unbindEvent("element-dragover"), this._unbindEvent("element-drop")), this._dropZone = t, t && (this._bindEvent("document-dragover", document, "dragover", function(t) {
                                                                                                                                                                                                                                                       t.preventDefault()
                                                                                                                                                                                                                                                       }), this._bindEvent("document-drop", document, "drop", function(t) {
                                                                                                                                                                                                                                                                           t.preventDefault()
                                                                                                                                                                                                                                                                           }), this._bindEvent("element-dragover", document, "dragover", function() {
                                                                                                                                                                                                                                                                                               }), this._bindEvent("element-drop", document, "drop", this.__onFileDropped.bind(this)))
                                   },_multiselect: !1,getMultiselect: function() {
                                   return this._multiselect
                                   },setMultiselect: function(t) {
                                   this._multiselect = t, t ? this.__fileField.multiple = "true" : delete this.__fileField.multiple
                                   },__fileField: null,open: function() {
                                   this.__fileField.style.display = "inline-block", this.__fileField.focus(), this.__fileField.click(), this.__fileField.style.display = "none"
                                   },destroy: function() {
                                   document.getElementsByTagName("body")[0].removeChild(this.__fileField), this.$super()
                                   },_updateAccepted: function() {
                                   for (var t = [], e = 0; e < this.acceptedExts.length; e++)
                                   t.push("." + this.acceptedExts[e].toLocaleLowerCase());
                                   t = t.concat(this.acceptedMimes), this.__fileField.accept = t.join(",")
                                   },_openFile: function(t, e, n) {
                                   for (var i = !1, o = 0; o < this.acceptedMimes.length; o++)
                                   if (t.type == this.acceptedMimes[o]) {
                                   i = !0;
                                   break
                                   }
                                   if (!i)
                                   for (var r = t.name.split(".").splice(-1), s = 0; s < this.acceptedExts.length; s++)
                                   if (r == this.acceptedExts[s]) {
                                   i = !0;
                                   break
                                   }
                                   i && this._callCallbacks("file-open", [t, e, n])
                                   },__onFileDropped: function(t) {
                                   for (var e in t.dataTransfer.files) {
                                   var n = t.dataTransfer.files[e];
                                   n instanceof File && this._openFile(n, t.pageX, t.pageY)
                                   }
                                   },__onFileSelected: function() {
                                   for (var t in this.__fileField.files) {
                                   var e = this.__fileField.files[t];
                                   e instanceof File && this._openFile(e)
                                   }
                                   },__onLocaleChanged: function() {
                                   }});
    var n = n || {};
    n.ProgressBar = n.Widget.$extend({__init__: function(t) {
                                     this.$super(t), this._updateProperties(["orientation", "value", "pulsate"])
                                     },getHtml: function() {
                                     return this.__html.outer
                                     },_value: 0,getValue: function() {
                                     return this._value
                                     },setValue: function(t) {
                                     this._value = Math.min(Math.max(t, 0), 1), "horizontal" == this.orientation ? this.__html.bar.style.width = Math.floor(100 * this.value) + "%" : this.__html.bar.style.height = Math.floor(100 * this.value) + "%", this.__html.textContent.innerHTML = Math.floor(100 * this.value) + " %"
                                     },_orientation: "horizontal",getOrientation: function() {
                                     return this._orientation
                                     },setOrientation: function(t) {
                                     if ("vertical" != t && "horizontal" != t)
                                     throw 'Error: The orientation should be "vertical" or "horizontal".';
                                     this._orientation = t, this.removeClass("photonui-progressbar-vertical"), this.removeClass("photonui-progressbar-horizontal"), this.addClass("photonui-progressbar-" + this.orientation)
                                     },_pulsate: !1,isPulsate: function() {
                                     return this._pulsate
                                     },setPulsate: function(t) {
                                     this._pulsate = t, t ? (this.addClass("photonui-progressbar-pulsate"), "horizontal" == this.orientation ? this.__html.bar.style.width = "" : this.__html.bar.style.height = "") : (this.removeClass("photonui-progressbar-pulsate"), this.value = this.value)
                                     },_textVisible: !0,isTextVisible: function() {
                                     return this._textVisible
                                     },setTextVisible: function(t) {
                                     this._textVisible = t, this.__html.text.style.display = this.textVisible ? "" : "none"
                                     },_buildHtml: function() {
                                     this.__html.outer = document.createElement("div"), this.__html.outer.className = "photonui-widget photonui-progressbar", this.__html.text = document.createElement("div"), this.__html.text.className = "photonui-progressbar-text", this.__html.outer.appendChild(this.__html.text), this.__html.textContent = document.createElement("span"), this.__html.text.appendChild(this.__html.textContent), this.__html.bar = document.createElement("div"), this.__html.bar.className = "photonui-progressbar-bar", this.__html.outer.appendChild(this.__html.bar)
                                     },__onLocaleChanged: function() {
                                     }});
    var n = n || {};
    n.MouseManager = n.Base.$extend({__init__: function(t) {
                                    this._registerWEvents(["mouse-event", "mouse-down", "mouse-up", "click", "double-click", "drag-start", "dragging", "drag-end", "mouse-move", "scroll-up", "scroll-down"]), this.$super(), this.element = t
                                    },_element: null,getElement: function() {
                                    return this._element || document
                                    },setElement: function(t) {
                                    this._element = t instanceof n.Widget ? t.interactiveNode || t.html : t instanceof HTMLElement ? t : null, this._updateEvents()
                                    },_threshold: 5,getThreshold: function() {
                                    return this._threshold
                                    },setThreshold: function(t) {
                                    this._threshold = t
                                    },getPageX: function() {
                                    return this.__event.pageX || 0
                                    },getPageY: function() {
                                    return this.__event.pageY || 0
                                    },getX: function() {
                                    var t = n.Helpers.getAbsolutePosition(this.element).x;
                                    return this.pageX - t
                                    },getY: function() {
                                    var t = n.Helpers.getAbsolutePosition(this.element).y;
                                    return this.pageY - t
                                    },getDeltaX: function() {
                                    return this.pageX - (this.__prevState.pageX !== e ? this.__prevState.pageX : this.pageX)
                                    },getDeltaY: function() {
                                    return this.pageY - (this.__prevState.pageY !== e ? this.__prevState.pageY : this.pageY)
                                    },_action: "",getAction: function() {
                                    return this._action
                                    },_btnLeft: !1,getBtnLeft: function() {
                                    return this._btnLeft
                                    },_btnMiddle: !1,getBtnMiddle: function() {
                                    return this._btnMiddle
                                    },_btnRight: !1,getBtnRight: function() {
                                    return this._btnRight
                                    },_button: null,getButton: function() {
                                    return this._button
                                    },__prevState: {},__mouseDownEvent: {},__event: {},_updateEvents: function() {
                                    for (var t in this.__events)
                                    this._unbindEvent(t);
                                    this.element && (this._bindEvent("mouse-down", this.element, "mousedown", this.__onMouseDown.bind(this)), this._bindEvent("mouse-up", this.element, "mouseup", this.__onMouseUp.bind(this)), this._bindEvent("double-click", this.element, "dblclick", this.__onDoubleClick.bind(this)), this._bindEvent("mouse-move", this.element, "mousemove", this.__onMouseMove.bind(this)), this._bindEvent("mousewheel", this.element, "mousewheel", this.__onMouseWheel.bind(this)), this._bindEvent("mousewheel-firefox", this.element, "DOMMouseScroll", this.__onMouseWheel.bind(this)), this._bindEvent("document-mouse-up", document, "mouseup", this.__onDocumentMouseUp.bind(this)), this._bindEvent("document-mouse-move", document, "mousemove", this.__onDocumentMouseMove.bind(this)))
                                    },_dump: function() {
                                    return {event: this.__event,action: this.action,pageX: this.pageX,pageY: this.pageY,x: this.x,y: this.y,deltaX: this.deltaX,deltaY: this.deltaY,btnLeft: this.btnLeft,btnMiddle: this.btnMiddle,btnRight: this.btnRight,button: this.button}
                                    },_stateMachine: function(t, e) {
                                    this.__prevState = this._dump(), this._action = t, this.__event = e, this._button = null, 0 === e.button && (this._button = "left"), 1 === e.button && (this._button = "middle"), 2 === e.button && (this._button = "right"), "mouse-down" == t ? (this.__mouseDownEvent = e, 0 === e.button && (this._btnLeft = !0), 1 === e.button && (this._btnMiddle = !0), 2 === e.button && (this._btnRight = !0), this._callCallbacks("mouse-event", [this._dump()]), this._callCallbacks(this.action, [this._dump()])) : "mouse-up" == t ? (0 === e.button && (this._btnLeft = !1), 1 === e.button && (this._btnMiddle = !1), 2 === e.button && (this._btnRight = !1), this._callCallbacks("mouse-event", [this._dump()]), this._callCallbacks(this.action, [this._dump()])) : "drag-end" == t && (0 === e.button && (this._btnLeft = !1), 1 === e.button && (this._btnMiddle = !1), 2 === e.button && (this._btnRight = !1)), "mouse-up" == t && Math.abs(this.pageX - this.__mouseDownEvent.pageX) <= this._threshold && Math.abs(this.pageY - this.__mouseDownEvent.pageY) <= this._threshold && (this._action = "click", this._callCallbacks("mouse-event", [this._dump()]), this._callCallbacks("click", [this._dump()])), "double-click" == t && "click" == this.__prevState.action && (this._action = "double-click", this._callCallbacks("mouse-event", [this._dump()]), this._callCallbacks(this.action, [this._dump()])), "mouse-move" == t && (this._callCallbacks("mouse-event", [this._dump()]), this._callCallbacks(this.action, [this._dump()])), "mouse-move" == t && "drag-start" != this.__prevState.action && "dragging" != this.__prevState.action && (this.btnLeft || this.btnMiddle || this.btnRight) ? (Math.abs(this.pageX - this.__mouseDownEvent.pageX) > this._threshold || Math.abs(this.pageY - this.__mouseDownEvent.pageY) > this._threshold) && (this._action = "drag-start", this.__event = this.__mouseDownEvent, this._callCallbacks("mouse-event", [this._dump()]), this._callCallbacks(this.action, [this._dump()]), this._action = "dragging", this.__prevState.event = this.__mouseDownEvent, this.__event = e, this._callCallbacks("mouse-event", [this._dump()]), this._callCallbacks(this.action, [this._dump()])) : "dragging" == t || "mouse-move" == t && ("drag-start" == this.__prevState.action || "dragging" == this.__prevState.action) && (this.btnLeft || this.btnMiddle || this.btnRight) ? (this._action = "dragging", this._callCallbacks("mouse-event", [this._dump()]), this._callCallbacks(this.action, [this._dump()])) : "drag-end" != t && ("mouse-up" != t || "dragging" != this.__prevState.action && "drag-start" != this.__prevState.action || this.btnLeft || this.btnMiddle || this.btnRight) || (this._action = "drag-end", this._callCallbacks("mouse-event", [this._dump()]), this._callCallbacks(this.action, [this._dump()])), ("scroll-up" == t || "scroll-down" == t) && (this._callCallbacks("mouse-event", [this._dump()]), this._callCallbacks(this.action, [this._dump()]))
                                    },__onMouseDown: function(t) {
                                    this._stateMachine("mouse-down", t)
                                    },__onMouseUp: function(t) {
                                    this._stateMachine("mouse-up", t)
                                    },__onDoubleClick: function(t) {
                                    this._stateMachine("double-click", t)
                                    },__onMouseMove: function(t) {
                                    this._stateMachine("mouse-move", t)
                                    },__onDocumentMouseUp: function(t) {
                                    ("dragging" == this.action || "drag-start" == this.action) && this._stateMachine("drag-end", t)
                                    },__onDocumentMouseMove: function(t) {
                                    ("dragging" == this.action || "drag-start" == this.action) && this._stateMachine("dragging", t)
                                    },__onMouseWheel: function(t) {
                                    var n = null;
                                    t.wheelDeltaY != e && (n = t.wheelDeltaY), t.wheelDelta != e && (n = t.wheelDelta), t.axis != e && t.detail != e && 2 == t.axis && (n = -t.detail), null != n && (n >= 0 ? this._stateMachine("scroll-up", t) : this._stateMachine("scroll-down", t))
                                    }});
    var n = n || {};
    n.palette = [["#000000", "#424242", "#676767", "#989898", "#C5C5C5", "#FFFFFF"], ["#E52131", "#ED7130", "#F0902C", "#F0B922", "#EDE118", "#7DA638"], ["#EA4852", "#F08D52", "#F3A752", "#F9D246", "#F0EC51", "#A7CF41"], ["#F19096", "#F5BC93", "#F9CB94", "#F9E48A", "#F2F08E", "#C6DE84"], ["#F8D1D6", "#F9E2D2", "#F9E8D3", "#FDF8D2", "#F9F9CF", "#E7F1CD"], ["#1E9E85", "#2A7DB5", "#2751A1", "#6C3E98", "#A33E97", "#DF3795"], ["#2FB8A3", "#40A1D7", "#4072B5", "#8963AB", "#B462A7", "#E262A5"], ["#88CEC3", "#8CC9E9", "#87A8D3", "#D2A0C9", "#D2A0C9", "#EDA0C6"], ["#CEEAE7", "#CDE9F8", "#CFDEEF", "#EED9E9", "#EED9E9", "#F8D7E7"]], n.ColorPalette = n.Widget.$extend({__init__: function(t) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        this._color = new n.Color(n.palette[0][0]), this._registerWEvents(["value-changed"]), this.$super(t), this._updateProperties(["palette", "value"])
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        },getValue: function() {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        return this.color.hexString
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        },setValue: function(t) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        this.color.hexString = t
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        },_color: null,getColor: function() {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        return this._color
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        },setColor: function(t) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        t instanceof n.Color && (this._color = t)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        },_palette: null,getPalette: function() {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        return this._palette || n.palette
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        },setPalette: function(t) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        if (this._palette = t, !t)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        var t = n.palette;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        this.__html.palette.removeChild(this.__html.tbody), n.Helpers.cleanNode(this.__html.tbody);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        var e, i, o, r;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        for (r = 0; r < t.length; r++) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        var e = document.createElement("tr");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        for (o = 0; o < t[r].length; o++) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        var i = document.createElement("td");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        i.style.backgroundColor = t[r][o], i.onclick = this.__onColorClicked.bind(this, t[r][o]), e.appendChild(i)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        this.__html.tbody.appendChild(e)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        this.__html.palette.appendChild(this.__html.tbody)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        },getHtml: function() {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        return this.__html.palette
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        },_buildHtml: function() {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        this.__html.palette = document.createElement("table"), this.__html.palette.className = "photonui-widget photonui-colorpalette", this.__html.tbody = document.createElement("tbody"), this.__html.palette.appendChild(this.__html.tbody)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        },__onColorClicked: function(t) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        this.value = t, this._callCallbacks("value-changed", [this.color])
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }});
    var n = n || {};
    n.FAIcon = n.BaseIcon.$extend({__init__: function(t, e) {
                                  var n = {};
                                  if (t && "string" == typeof t) {
                                  if (n.iconName = t, e && "object" == typeof e)
                                  for (var i in e)
                                  n[i] = e[i]
                                  } else
                                  t && (n = t);
                                  this.$super(n), this._updateProperties(["iconName", "size", "color"])
                                  },_iconName: "",getIconName: function() {
                                  return this._iconName
                                  },setIconName: function(t) {
                                  this._iconName = t || "", this.__html.icon.className = "fa " + this.iconName + " " + this.size
                                  },_size: "",getSize: function() {
                                  return this._size
                                  },setSize: function(t) {
                                  this._size = t || "", this.__html.icon.className = "fa " + this.iconName + " " + this.size
                                  },_color: "inherit",getColor: function() {
                                  return this._color
                                  },setColor: function(t) {
                                  this._color = t || "inherit", this.__html.icon.style.color = this.color
                                  },getHtml: function() {
                                  return this.__html.outer
                                  },_buildHtml: function() {
                                  this.__html.outer = document.createElement("span"), this.__html.outer.className = "photonui-widget photonui-icon photonui-faicon", this.__html.icon = document.createElement("i"), this.__html.outer.appendChild(this.__html.icon)
                                  }});
    var n = n || {};
    n.Layout = n.Container.$extend({__init__: function(t) {
                                   this._childrenNames = [], this.$super(t)
                                   },_childrenNames: [],getChildrenNames: function() {
                                   return this._childrenNames
                                   },setChildrenNames: function(t) {
                                   this._childrenNames = t, this._updateLayout()
                                   },getChildren: function() {
                                   for (var t = [], e = 0; e < this._childrenNames.length; e++)
                                   t.push(n.getWidget(this._childrenNames[e]));
                                   return t
                                   },setChildren: function(t) {
                                   for (var e = [], i = 0; i < t.length; i++)
                                   t[i] instanceof n.Widget && e.push(t[i].name);
                                   this.childrenNames = e
                                   },getChildName: function() {
                                   return console.warn("Warning: You cannot use getChild() on layout widgets, please use getChildren() instead."), null
                                   },setChildName: function(t) {
                                   this.childrenNames = [t]
                                   },getChild: function() {
                                   return console.warn("Warning: You cannot use getChild() on layout widgets, please use getChildren() instead."), null
                                   },setChild: function(t) {
                                   this.children = [t]
                                   },addChild: function(t, e) {
                                   e && (t.layoutOptions = e), this._childrenNames.push(t.name), this._updateLayout()
                                   },removeChild: function(t) {
                                   var e = this._childrenNames.indexOf(t.name);
                                   e >= 0 && this._childrenNames.splice(e, 1), this._updateLayout()
                                   },destroy: function() {
                                   for (var t = this.children, e = 0; e < t.length; e++)
                                   t[e].destroy();
                                   this.$super()
                                   },_updateLayout: function() {
                                   throw "Error: you should define the _updateLayout() method when you extend a layout widget."
                                   },__onLocaleChanged: function() {
                                   }});
    var n = n || {};
    n.TextField = n.Field.$extend({__init__: function(t) {
                                  this.$super(t), this._bindFieldEvents()
                                  },getType: function() {
                                  return this.__html.field.type
                                  },setType: function(t) {
                                  if ("text" != t && "password" != t && "email" != t && "search" != t && "tel" != t && "url" != t)
                                  throw 'Error: The type should be "text", "password", "email", "search", "tel" or "url".';
                                  this.__html.field.type = t
                                  },_buildHtml: function() {
                                  this.__html.field = document.createElement("input"), this.__html.field.className = "photonui-widget photonui-field photonui-field-text", this.__html.field.type = "text"
                                  }});
    var n = n || {};
    n.NumericField = n.Field.$extend({__init__: function(t) {
                                     this.$super(t), this._updateProperties(["value"]), this._bindFieldEvents(), this._unbindEvent("value-changed"), this._bindEvent("keypress", this.__html.field, "keypress", this.__onKeypress.bind(this)), this._bindEvent("keyup", this.__html.field, "keyup", this.__onKeyup.bind(this)), this._bindEvent("keydown", this.__html.field, "keydown", this.__onKeydown.bind(this)), this._bindEvent("change", this.__html.field, "change", this.__onChange.bind(this)), this._bindEvent("mousewheel", this.__html.field, "mousewheel", this.__onMouseWheel.bind(this)), this._bindEvent("mousewheel-firefox", this.__html.field, "DOMMouseScroll", this.__onMouseWheel.bind(this))
                                     },_min: null,getMin: function() {
                                     return this._min
                                     },setMin: function(t) {
                                     this._min = t
                                     },_max: null,getMax: function() {
                                     return this._max
                                     },setMax: function(t) {
                                     this._max = t
                                     },_step: 1,getStep: function() {
                                     return this._step
                                     },setStep: function(t) {
                                     this._step = Math.abs(t)
                                     },_decimalDigits: null,getDecimalDigits: function() {
                                     return this._decimalDigits
                                     },setDecimalDigits: function(t) {
                                     this._decimalDigits = t
                                     },_decimalSymbol: ".",getDecimalSymbol: function() {
                                     return this._decimalSymbol
                                     },setDecimalSymbol: function(t) {
                                     this._decimalSymbol = t
                                     },_value: 0,getValue: function() {
                                     return parseFloat(this._value)
                                     },setValue: function(t) {
                                     this._updateValue(t), this._updateFieldValue()
                                     },_updateValue: function(t) {
                                     t = ("" + t).replace(",", "."), t = t.replace(/ /g, ""), t = parseFloat(t), isNaN(t) && (t = 0), null != this.min && (t = Math.max(this.min, t)), null != this.max && (t = Math.min(this.max, t)), null != this.decimalDigits && (t = t.toFixed(this.decimalDigits)), this._value = t
                                     },_updateFieldValue: function() {
                                     this.__html.field.value = ("" + this._value).replace(".", this.decimalSymbol)
                                     },_validateInput: function(t) {
                                     var t = "" + t;
                                     return t = t.replace(/ /g, ""), /^-?[0-9]*(\.|,)?[0-9]*$/.test(t) && (0 != this.decimalDigits || /^-?[0-9]*$/.test(t)) ? null !== this.min && this.min >= 0 && "-" == t[0] ? !1 : !0 : !1
                                     },_buildHtml: function() {
                                     this.__html.field = document.createElement("input"), this.__html.field.className = "photonui-widget photonui-field photonui-field-numeric", this.__html.field.type = "text"
                                     },__onKeypress: function(t) {
                                     if (!t.ctrlKey)
                                     if (13 == t.keyCode)
                                     this._updateFieldValue(), this._callCallbacks("value-changed", [this.value]);
                                     else {
                                     var e = this.__html.field, n = e.value.slice(0, e.selectionStart) + String.fromCharCode(t.charCode) + e.value.slice(e.selectionEnd);
                                     this._validateInput(n) || t.preventDefault()
                                     }
                                     },__onKeyup: function() {
                                     var t = this.__html.field.value.replace(/[^0-9.,-]*/g, "");
                                     t != this.__html.field.value && (this.__html.field.value = t), this._updateValue(this.__html.field.value)
                                     },__onChange: function() {
                                     this._updateFieldValue(), this._callCallbacks("value-changed", [this.value])
                                     },__onMouseWheel: function(t) {
                                     if (document.activeElement == this.__html.field) {
                                     var n = null;
                                     t.wheelDeltaY != e && (n = t.wheelDeltaY), t.wheelDelta != e && (n = t.wheelDelta), t.axis != e && t.detail != e && 2 == t.axis && (n = -t.detail), null != n && (n >= 0 ? this.value += this.step : this.value -= this.step, t.preventDefault()), this._callCallbacks("value-changed", [this.value])
                                     }
                                     },__onKeydown: function(t) {
                                     38 == t.keyCode ? (this.setValue(this.getValue() + this.step), t.preventDefault(), this._callCallbacks("value-changed", [this.value])) : 40 == t.keyCode && (this.setValue(this.getValue() - this.step), t.preventDefault(), this._callCallbacks("value-changed", [this.value]))
                                     }});
    var n = n || {};
    n.Viewport = n.Container.$extend({__init__: function(t) {
                                     this.$super(t), this._updateProperties(["padding", "verticalScrollbar", "horizontalScrollbar"])
                                     },_padding: 0,getPadding: function() {
                                     return this._padding
                                     },setPadding: function(t) {
                                     this._padding = t, this.containerNode.style.padding = t + "px"
                                     },_verticalScrollbar: null,getVerticalScrollbar: function() {
                                     return this._verticalScrollbar
                                     },setVerticalScrollbar: function(t) {
                                     this._verticalScrollbar = t, this.__html.viewport.style.overflowY = t === !0 ? "scroll" : t === !1 ? "hidden" : "auto"
                                     },_horizontalScrollbar: null,getHorizontalScrollbar: function() {
                                     return this._horizontalScrollbar
                                     },setHorizontalScrollbar: function(t) {
                                     this._horizontalScrollbar = t, this.__html.viewport.style.overflowX = t === !0 ? "scroll" : t === !1 ? "hidden" : "auto"
                                     },getHtml: function() {
                                     return this.__html.viewport
                                     },getContainerNode: function() {
                                     return this.html
                                     },_buildHtml: function() {
                                     this.__html.viewport = document.createElement("div"), this.__html.viewport.className = "photonui-widget photonui-viewport photonui-container"
                                     },__onLocaleChanged: function() {
                                     }});
    var n = n || {};
    n.Switch = n.CheckBox.$extend({__init__: function(t) {
                                  this.$super(t), this.removeClass("photonui-checkbox"), this.addClass("photonui-switch")
                                  }});
    var n = n || {};
    n.BaseWindow = n.Container.$extend({__init__: function(t) {
                                       this._registerWEvents(["position-changed"]), this.$super(t);
                                       var t = t || {};
                                       t.visible === e && (this.visible = !1), n.domInsert(this), this._updateProperties(["position", "width", "height", "minWidth", "minHeight", "maxWidth", "maxHeight", "padding"])
                                       },getPosition: function() {
                                       return this.visible && this.html.parentNode ? this.absolutePosition : {x: this._x,y: this._y}
                                       },setPosition: function(t, n) {
                                       "object" == typeof t && n == e ? (this.html.style.left = t.x + "px", this.html.style.top = t.y + "px", this._x = t.x, this._y = t.y) : ("number" == typeof t && (this.html.style.left = t + "px", this._x = t), "number" == typeof n && (this.html.style.top = n + "px", this._y = n)), this._callCallbacks("position-changed", [this.x, this.y])
                                       },_x: 0,getX: function() {
                                       return this.position.x
                                       },setX: function(t) {
                                       this.setPosition(t, null)
                                       },_y: 0,getY: function() {
                                       return this.position.y
                                       },setY: function(t) {
                                       this.setPosition(null, t)
                                       },_width: null,getWidth: function() {
                                       return this.visible && this.html.parenNode ? this.containerNode.offsetWidth : this._width || 0
                                       },setWidth: function(t) {
                                       this._width = t || null, this.containerNode.style.width = this._width ? t + "px" : "auto"
                                       },_height: null,getHeight: function() {
                                       return this.visible && this.html.parenNode ? this.containerNode.offsetHeight : this._height || 0
                                       },setHeight: function(t) {
                                       this._height = t || null, this.containerNode.style.height = this._height ? t + "px" : "auto"
                                       },_minWidth: null,getMinWidth: function() {
                                       return this._minWidth
                                       },setMinWidth: function(t) {
                                       this._minWidth = t || null, this.containerNode.style.minWidth = this._minWidth ? t + "px" : "0"
                                       },_minHeight: null,getMinHeight: function() {
                                       return this._minHeight
                                       },setMinHeight: function(t) {
                                       this._minHeight = t || null, this.containerNode.style.minHeight = this._minHeight ? t + "px" : "0"
                                       },_maxWidth: null,getMaxWidth: function() {
                                       return this._maxWidth
                                       },setMaxWidth: function(t) {
                                       this._maxWidth = t || null, this.containerNode.style.maxWidth = this._maxWidth ? t + "px" : "auto"
                                       },_maxHeight: null,getMaxHeight: function() {
                                       return this._maxHeight
                                       },setMaxHeight: function(t) {
                                       this._maxHeight = t || null, this.containerNode.style.maxHeight = this._maxHeight ? t + "px" : "auto"
                                       },_padding: 0,getPadding: function() {
                                       return this._padding
                                       },setPadding: function(t) {
                                       this._padding = t, this.containerNode.style.padding = t + "px"
                                       },getHtml: function() {
                                       return this.__html.window
                                       },getContainerNode: function() {
                                       return this.html
                                       },center: function() {
                                       var t = n.e_parent || document.getElementsByTagName("body")[0];
                                       t && this.setPosition(Math.round((t.offsetWidth - this.offsetWidth) / 2), Math.round((t.offsetHeight - this.offsetHeight) / 2))
                                       },_buildHtml: function() {
                                       this.__html.window = document.createElement("div"), this.__html.window.className = "photonui-widget photonui-basewindow"
                                       }});
    var n = n || {}, o = {};
    n.getSpriteSheet = function(t) {
        return o[t] !== e ? o[t] : null
    }, n.SpriteSheet = n.Base.$extend({__init__: function(t) {
                                      this._icons = {}, this.$super(t), this._updateProperties(["name"])
                                      },_name: "default",getName: function() {
                                      return this._name
                                      },setName: function(t) {
                                      o[this.name] == this && delete o[this.name], this._name = t, o[this.name] = this
                                      },_imageUrl: null,getImageUrl: function() {
                                      return this._imageUrl
                                      },setImageUrl: function(t) {
                                      if (!t)
                                      return void (this._imageUrl = null);
                                      if (this._imageUrl != t) {
                                      this._imageUrl = t;
                                      var e = new Image;
                                      e.src = t
                                      }
                                      },_size: 16,getSize: function() {
                                      return this._size
                                      },setSize: function(t) {
                                      this._size = t
                                      },_icons: {},getIcons: function() {
                                      return this._icons
                                      },setIcons: function(t) {
                                      for (icon in t)
                                      this._icons[icon] = t[icon]
                                      },getIconPosition: function(t) {
                                      return {x: this.icons[t][0],y: this.icons[t][1]}
                                      },getIconCss: function(t) {
                                      return "width: " + this.size + "px; height: " + this.size + "px; background: url(" + this.imageUrl + ") -" + this.getIconPosition(t).x + "px -" + this.getIconPosition(t).y + "px;"
                                      },addIcon: function(t, e, n) {
                                      this.icons = {iconName: [e, n]}
                                      },removeIcon: function(t) {
                                      delete this._icons[t]
                                      }}), n.SpriteIcon = n.BaseIcon.$extend({__init__: function(t, e) {
                                                                             var n = {};
                                                                             if (t && "string" == typeof t) {
                                                                             if (n.icon = t, e && "object" == typeof e)
                                                                             for (var i in e)
                                                                             n[i] = e[i]
                                                                             } else
                                                                             t && (n = t);
                                                                             this.$super(n)
                                                                             },_spriteSheetName: "",getSpriteSheetName: function() {
                                                                             return this._spriteSheetName
                                                                             },setSpriteSheetName: function(t) {
                                                                             this._spriteSheetName = t || "", this._update()
                                                                             },_iconName: "",getIconName: function() {
                                                                             return this._iconName
                                                                             },setIconName: function(t) {
                                                                             this._iconName = t || "", this._update()
                                                                             },getIcon: function() {
                                                                             return this.spriteSheetName + "/" + this.iconName
                                                                             },setIcon: function(t) {
                                                                             var e = t.split("/");
                                                                             this.spriteSheetName = e[0], this.iconName = e[1]
                                                                             },getHtml: function() {
                                                                             return this.__html.outer
                                                                             },_update: function() {
                                                                             var t = "";
                                                                             this.spriteSheetName && this.iconName && (t = n.getSpriteSheet(this.spriteSheetName).getIconCss(this.iconName)), this.__html.icon.setAttribute("style", t)
                                                                             },_buildHtml: function() {
                                                                             this.__html.outer = document.createElement("span"), this.__html.outer.className = "photonui-widget photonui-icon photonui-spriteicon", this.__html.icon = document.createElement("span"), this.__html.outer.appendChild(this.__html.icon)
                                                                             }});
    var n = n || {};
    n.TextAreaField = n.Field.$extend({__init__: function(t) {
                                      this.$super(t), this._bindFieldEvents()
                                      },getCols: function() {
                                      return parseInt(this.__html.field.cols)
                                      },setCols: function(t) {
                                      this.__html.field.cols = t
                                      },getRows: function() {
                                      return parseInt(this.__html.field.rows)
                                      },setRows: function(t) {
                                      this.__html.field.rows = t
                                      },_buildHtml: function() {
                                      this.__html.field = document.createElement("textarea"), this.__html.field.className = "photonui-widget photonui-field photonui-field-textarea", this.__html.field.cols = 20, this.__html.field.rows = 3
                                      }});
    var n = n || {}, r = [];
    n.Window = n.BaseWindow.$extend({__init__: function(t) {
                                    this._registerWEvents(["close-button-clicked"]), this.$super(t), this._bindEvent("move.dragstart", this.__html.windowTitle, "mousedown", this.__moveDragStart.bind(this)), this._bindEvent("closeButton.click", this.__html.windowTitleCloseButton, "click", this.__closeButtonClicked.bind(this)), this._bindEvent("totop", this.__html.window, "mousedown", this.moveToFront.bind(this)), this._bindEvent("closeButton.mousedown", this.__html.windowTitleCloseButton, "mousedown", function(t) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                t.stopPropagation()
                                                                                                                                                                                                                                                                                                                                                                                                                                                }), this._updateProperties(["title", "closeButtonVisible"]), this.moveToFront()
                                    },_title: "Window",getTitle: function() {
                                    return this._title
                                    },setTitle: function(t) {
                                    this._title = t, n.Helpers.cleanNode(this.__html.windowTitleText), this.__html.windowTitleText.appendChild(document.createTextNode(t))
                                    },_movable: !0,isMovable: function() {
                                    return this._movable
                                    },setMovable: function(t) {
                                    this._movable = t
                                    },_closeButtonVisible: !0,getCloseButtonVisible: function() {
                                    return this._closeButtonVisible
                                    },setCloseButtonVisible: function(t) {
                                    this._closeButtonVisible = t, t ? (this.addClass("photonui-window-have-button"), this.__html.windowTitleCloseButton.style.display = "block") : (this.removeClass("photonui-window-have-button"), this.__html.windowTitleCloseButton.style.display = "none")
                                    },_modal: !1,isModal: function() {
                                    return this._modal
                                    },setModal: function(t) {
                                    if (this._modal = t, t) {
                                    this.__html.modalBox = document.createElement("div"), this.__html.modalBox.className = "photonui-window-modalbox";
                                    var e = n.e_parent || document.getElementsByTagName("body")[0];
                                    e.appendChild(this.__html.modalBox), this.visible = this.visible
                                    } else
                                    this.__html.modalBox && (this.__html.modalBox.parentNode.removeChild(this.__html.modalBox), delete this.__html.modalBox)
                                    },getContainerNode: function() {
                                    return this.__html.windowContent
                                    },setVisible: function(t) {
                                    this.$super(t), this.visible ? (this.moveToFront(), this.modal && (this.__html.modalBox.style.display = "block")) : (this.moveToBack(), this.modal && (this.__html.modalBox.style.display = "none"))
                                    },moveToFront: function() {
                                    var t = r.indexOf(this);
                                    t >= 0 && r.splice(t, 1), r.unshift(this), this._updateWindowList()
                                    },moveToBack: function() {
                                    var t = r.indexOf(this);
                                    t >= 0 && r.splice(t, 1), r.push(this), this._updateWindowList()
                                    },destroy: function() {
                                    this.modal = !1;
                                    var t = r.indexOf(this);
                                    t >= 0 && r.splice(t, 1), this.$super()
                                    },_buildHtml: function() {
                                    if (t.Stone) {
                                    t.Stone.lazyGettext
                                    }
                                    this.$super(), this.__html.window.className += " photonui-window", this.__html.windowTitle = document.createElement("div"), this.__html.windowTitle.className = "photonui-window-title", this.__html.window.appendChild(this.__html.windowTitle), this.__html.windowTitleCloseButton = document.createElement("button"), this.__html.windowTitleCloseButton.className = "photonui-window-title-close-button", this.__html.windowTitleCloseButton.title = t.Stone ? t.Stone.lazyGettext("Close") : "Close", this.__html.windowTitle.appendChild(this.__html.windowTitleCloseButton), this.__html.windowTitleText = document.createElement("span"), this.__html.windowTitleText.className = "photonui-window-title-text", this.__html.windowTitle.appendChild(this.__html.windowTitleText), this.__html.windowContent = document.createElement("div"), this.__html.windowContent.className = "photonui-container photonui-window-content photonui-container-expand-child", this.__html.window.appendChild(this.__html.windowContent)
                                    },_updateWindowList: function() {
                                    for (var t = r.length - 1, e = 0; t >= 0; t--, e++)
                                    0 == t ? (r[t].html.style.zIndex = 2001, r[t].addClass("photonui-active")) : (r[t].html.style.zIndex = 1e3 + e, r[t].removeClass("photonui-active")), r[t].modal && (r[t].html.style.zIndex = 3001)
                                    },__moveDragStart: function(t) {
                                    if (this.movable && !(t.button > 0)) {
                                    var n = t.offsetX != e ? t.offsetX : t.layerX, i = t.offsetY != e ? t.offsetY : t.layerY;
                                    this.__html.windowTitle.style.cursor = "move", this._bindEvent("move.dragging", document, "mousemove", this.__moveDragging.bind(this, n, i)), this._bindEvent("move.dragend", document, "mouseup", this.__moveDragEnd.bind(this))
                                    }
                                    },__moveDragging: function(t, e, n) {
                                    var i = document.getElementsByTagName("body")[0], o = Math.min(Math.max(n.pageX - t, 40 - this.offsetWidth), i.offsetWidth - 40), r = Math.max(n.pageY - e, 0);
                                    i.offsetHeight > 0 && (r = Math.min(r, i.offsetHeight - this.__html.windowTitle.offsetHeight)), this.setPosition(o, r)
                                    },__moveDragEnd: function() {
                                    this.__html.windowTitle.style.cursor = "default", this._unbindEvent("move.dragging"), this._unbindEvent("move.dragend")
                                    },__closeButtonClicked: function() {
                                    this._callCallbacks("close-button-clicked")
                                    },__onLocaleChanged: function() {
                                    this.$super(), this.__html.windowTitleCloseButton.title = t.Stone ? t.Stone.lazyGettext("Close") : "Close"
                                    }});
    var n = n || {};
    n.GridLayout = n.Layout.$extend({__init__: function(t) {
                                    this.$super(t), this._updateProperties(["verticalSpacing"])
                                    },_verticalSpacing: 5,getVerticalSpacing: function() {
                                    return this._verticalSpacing
                                    },setVerticalSpacing: function(t) {
                                    this._verticalSpacing = t, this.__html.grid.style.borderSpacing = this.verticalSpacing + "px " + this.horizontalSpacing + "px"
                                    },_horizontalSpacing: 5,getHorizontalSpacing: function() {
                                    return this._horizontalSpacing
                                    },setHorizontalSpacing: function(t) {
                                    this._horizontalSpacing = t, this.__html.grid.style.borderSpacing = this.verticalSpacing + "px " + this.horizontalSpacing + "px"
                                    },getHtml: function() {
                                    return this.__html.outerbox
                                    },_buildHtml: function() {
                                    this.__html.outerbox = document.createElement("div"), this.__html.outerbox.className = "photonui-widget photonui-gridlayout", this.__html.grid = document.createElement("table"), this.__html.outerbox.appendChild(this.__html.grid), this.__html.gridBody = document.createElement("tbody"), this.__html.grid.appendChild(this.__html.gridBody)
                                    },_updateLayout: function() {
                                    for (var t = 1 / 0, i = 1 / 0, o = 0, r = 0, s = this.children, a = 0; a < s.length; a++)
                                    s[a].layoutOptions.gridX = s[a].layoutOptions.gridX != e ? s[a].layoutOptions.gridX : 0, s[a].layoutOptions.gridY = s[a].layoutOptions.gridY != e ? s[a].layoutOptions.gridY : 0, s[a].layoutOptions.gridWidth = Math.max(s[a].layoutOptions.gridWidth, 1) || 1, s[a].layoutOptions.gridHeight = Math.max(s[a].layoutOptions.gridHeight, 1) || 1, t = Math.min(t, s[a].layoutOptions.gridX), i = Math.min(i, s[a].layoutOptions.gridY), o = Math.max(o, s[a].layoutOptions.gridX + s[a].layoutOptions.gridWidth), r = Math.max(r, s[a].layoutOptions.gridY + s[a].layoutOptions.gridHeight);
                                    o -= t, r -= i, n.Helpers.cleanNode(this.__html.gridBody);
                                    for (var l = [], h = 0; r > h; h++) {
                                    for (var c = [], u = 0; o > u; u++)
                                    c.push(!1);
                                    l.push(c)
                                    }
                                    for (var h = 0; r > h; h++) {
                                    var p = document.createElement("tr");
                                    this.__html.gridBody.appendChild(p);
                                    for (var u = 0; o > u; u++)
                                    if (!l[h][u]) {
                                    var d = !1, m = document.createElement("td");
                                    m.className = "photonui-container photonui-gridlayout-cell", p.appendChild(m);
                                    for (var a = 0; a < s.length; a++)
                                    if (s[a].layoutOptions.gridX - t == u && s[a].layoutOptions.gridY - i == h) {
                                    d = !0;
                                    var g = s[a].layoutOptions.gridWidth, f = s[a].layoutOptions.gridHeight;
                                    if (m.colSpan = g, m.rowSpan = f, m.appendChild(s[a].html), (s[a].layoutOptions.horizontalExpansion == e || s[a].layoutOptions.horizontalExpansion) && (m.className += " photonui-container-expand-child-horizontal"), (s[a].layoutOptions.verticalExpansion == e || s[a].layoutOptions.verticalExpansion) && (m.className += " photonui-container-expand-child-vertical"), s[a].layoutOptions.width != e && (m.style.height = s[a].layoutOptions.width + "px"), s[a].layoutOptions.height != e && (m.style.height = s[a].layoutOptions.height + "px"), s[a].layoutOptions.minWidth != e && (m.style.minWidth = s[a].layoutOptions.minWidth + "px"), s[a].layoutOptions.minHeight != e && (m.style.minHeight = s[a].layoutOptions.minHeight + "px"), s[a].layoutOptions.maxWidth != e && (m.style.maxWidth = s[a].layoutOptions.maxWidth + "px"), s[a].layoutOptions.maxHeight != e && (m.style.maxHeight = s[a].layoutOptions.maxHeight + "px"), s[a].layoutOptions.horizontalAlign != e && (m.style.textAlign = s[a].layoutOptions.horizontalAlign), g > 1 || f > 1)
                                    for (var y = h; h + f > y; y++)
                                    for (var _ = u; u + g > _; _++)
                                    l[y][_] = !0;
                                    break
                                    }
                                    d || (m.innerHTML = "&nbsp;")
                                    }
                                    }
                                    }});
    var n = n || {};
    n.Slider = n.NumericField.$extend({__init__: function(t) {
                                      this.$super(t), this.inputId = this.name + "-field", this.__html.field.id = this.inputId, this._updateProperties(["fieldVisible"]), this._bindEvent("slider-mousedown", this.__html.slider, "mousedown", this.__onSliderMouseDown.bind(this)), this._bindEvent("slider-keydown", this.__html.slider, "keydown", this.__onSliderKeyDown.bind(this)), this._bindEvent("slider-mousewheel", this.__html.slider, "mousewheel", this.__onSliderMouseWheel.bind(this)), this._bindEvent("slider-mousewheel-firefox", this.__html.slider, "DOMMouseScroll", this.__onSliderMouseWheel.bind(this)), this._bindEvent("field-contextmenu", this.__html.field, "contextmenu", this.__onFieldContextMenu.bind(this))
                                      },_min: 0,_max: 100,_decimalDigits: 0,_fieldVisible: !0,isFieldVisible: function() {
                                      return this._fieldVisible
                                      },setFieldVisible: function(t) {
                                      this._fieldVisible = t, t ? (this.__html.field.style.display = "", this.removeClass("photonui-slider-nofield")) : (this.__html.field.style.display = "none", this.addClass("photonui-slider-nofield"))
                                      },getHtml: function() {
                                      return setTimeout(function() {
                                                        this.value = this.value
                                                        }.bind(this), .01), this.__html.outer
                                      },setValue: function(t) {
                                      this.$super(t);
                                      var e = t - this.min, n = this.max - this.min, i = Math.min(Math.max(e / n, 0), 1), o = this.__html.slider.offsetWidth - this.__html.grip.offsetWidth - 4;
                                      this.__html.grip.style.left = Math.floor(i * o) + 2 + "px"
                                      },_buildHtml: function() {
                                      this.$super(), this.__html.outer = document.createElement("div"), this.__html.outer.className = "photonui-widget photonui-slider", this.__html.slider = document.createElement("div"), this.__html.slider.className = "photonui-slider-slider", this.__html.slider.tabIndex = 0, this.__html.outer.appendChild(this.__html.slider), this.__html.grip = document.createElement("div"), this.__html.grip.className = "photonui-slider-grip", this.__html.slider.appendChild(this.__html.grip), this.__html.outer.appendChild(this.__html.field)
                                      },_updateFromMouseEvent: function(t) {
                                      var e = n.Helpers.getAbsolutePosition(this.__html.slider).x, i = this.__html.grip.offsetWidth, o = Math.round(t.pageX - e - i / 2), r = this.__html.slider.offsetWidth - i - 3, s = (this.max - this.min) * o / r + this.min;
                                      this.value = Math.round(s / this.step) * this.step, this._callCallbacks("value-changed", [this.value])
                                      },__onSliderMouseDown: function(t) {
                                      this._updateFromMouseEvent(t), this._bindEvent("slider-mousemove", document, "mousemove", this.__onSliderMouseMove.bind(this)), this._bindEvent("slider-mouseup", document, "mouseup", this.__onSliderMouseUp.bind(this))
                                      },__onSliderMouseMove: function(t) {
                                      this._updateFromMouseEvent(t)
                                      },__onSliderMouseUp: function(t) {
                                      this._unbindEvent("slider-mousemove"), this._unbindEvent("slider-mouseup"), this._updateFromMouseEvent(t)
                                      },__onSliderKeyDown: function(t) {
                                      38 == t.keyCode || 39 == t.keyCode ? (this.value += this.step, this._callCallbacks("value-changed", [this.value])) : (40 == t.keyCode || 37 == t.keyCode) && (this.value -= this.step, this._callCallbacks("value-changed", [this.value]))
                                      },__onSliderMouseWheel: function(t) {
                                      var n = null;
                                      t.wheelDeltaY != e && (n = t.wheelDeltaY), t.wheelDelta != e && (n = t.wheelDelta), t.axis != e && t.detail != e && 2 == t.axis && (n = -t.detail), null != n && (n >= 0 ? this.value += this.step : this.value -= this.step, t.preventDefault(), t.stopPropagation()), this._callCallbacks("value-changed", [this.value])
                                      },__onContextMenu: function(t) {
                                      t.stopPropagation(), t.preventDefault(), this.contextMenuName && this.contextMenu.popupXY(t.pageX, t.pageY)
                                      },__onFieldContextMenu: function(t) {
                                      t.stopPropagation()
                                      }});
    var n = n || {};
    n.Button = n.Widget.$extend({__init__: function(t) {
                                this._registerWEvents(["click"]), this.$super(t), this._bindEvent("click", this.__html.button, "click", this.__onButtonClicked.bind(this)), this._updateProperties(["text", "leftIconName", "rightIconName"]), this._update()
                                },_text: "Button",getText: function() {
                                return this._text
                                },setText: function(t) {
                                this._text = t, n.Helpers.cleanNode(this.__html.text), this.__html.text.appendChild(document.createTextNode(t))
                                },_textVisible: !0,isTextVisible: function() {
                                return this._textVisible
                                },setTextVisible: function(t) {
                                this._textVisible = t, this._update()
                                },_leftIconName: null,getLeftIconName: function() {
                                return this._leftIconName
                                },setLeftIconName: function(t) {
                                this._leftIconName = t, n.Helpers.cleanNode(this.__html.leftIcon), this._leftIconName && (this.__html.leftIcon.appendChild(this.leftIcon.html), this.leftIconVisible = !0)
                                },getLeftIcon: function() {
                                return n.getWidget(this._leftIconName)
                                },setLeftIcon: function(t) {
                                return t instanceof n.BaseIcon ? void (this.leftIconName = t.name) : void (this.leftIconName = null)
                                },_leftIconVisible: !0,isLeftIconVisible: function() {
                                return this._leftIconVisible
                                },setLeftIconVisible: function(t) {
                                this._leftIconVisible = t, this._update()
                                },_rightIconName: null,getRightIconName: function() {
                                return this._rightIconName
                                },setRightIconName: function(t) {
                                this._rightIconName = t, n.Helpers.cleanNode(this.__html.rightIcon), this._rightIconName && (this.__html.rightIcon.appendChild(this.rightIcon.html), this.rightIconVisible = !0)
                                },getRightIcon: function() {
                                return n.getWidget(this._rightIconName)
                                },setRightIcon: function(t) {
                                return t instanceof n.BaseIcon ? void (this.rightIconName = t.name) : void (this.rightIconName = null)
                                },_rightIconVisible: !0,isRightIconVisible: function() {
                                return this._rightIconVisible
                                },setRightIconVisible: function(t) {
                                this._rightIconVisible = t, this._update()
                                },_appearance: "normal",getAppearance: function() {
                                return this._appearance
                                },setAppearance: function(t) {
                                this._appearance = t, "flat" == t ? this.addClass("photonui-button-appearance-flat") : this.removeClass("photonui-button-appearance-flat")
                                },getHtml: function() {
                                return this.__html.button
                                },_update: function() {
                                this.__html.leftIcon.parentNode == this.__html.button && this.__html.button.removeChild(this.__html.leftIcon), this.__html.text.parentNode == this.__html.button && this.__html.button.removeChild(this.__html.text), this.__html.rightIcon.parentNode == this.__html.button && this.__html.button.removeChild(this.__html.rightIcon), this.leftIconName && this.leftIconVisible && this.__html.button.appendChild(this.__html.leftIcon), this.text && this.textVisible && this.__html.button.appendChild(this.__html.text), this.rightIconName && this.rightIconVisible && this.__html.button.appendChild(this.__html.rightIcon)
                                },_buildHtml: function() {
                                this.__html.button = document.createElement("button"), this.__html.button.className = "photonui-widget photonui-button", this.__html.leftIcon = document.createElement("span"), this.__html.leftIcon.className = "photonui-button-icon", this.__html.button.appendChild(this.__html.leftIcon), this.__html.text = document.createElement("span"), this.__html.text.className = "photonui-button-text", this.__html.button.appendChild(this.__html.text), this.__html.rightIcon = document.createElement("span"), this.__html.rightIcon.className = "photonui-button-icon", this.__html.button.appendChild(this.__html.rightIcon)
                                },__onButtonClicked: function(t) {
                                this._callCallbacks("click", [t])
                                }});
    var s = {_text: n.Button.prototype._text,getText: n.Button.prototype.getText,setText: n.Button.prototype.setText,_textVisible: n.Button.prototype._textVisible,isTextVisible: n.Button.prototype.isTextVisible,setTextVisible: n.Button.prototype.setTextVisible,_leftIconName: n.Button.prototype._leftIconName,getLeftIconName: n.Button.prototype.getLeftIconName,setLeftIconName: n.Button.prototype.setLeftIconName,getLeftIcon: n.Button.prototype.getLeftIcon,setLeftIcon: n.Button.prototype.setLeftIcon,_leftIconVisible: n.Button.prototype._leftIconVisible,isLeftIconVisible: n.Button.prototype.isLeftIconVisible,setLeftIconVisible: n.Button.prototype.setLeftIconVisible,_rightIconName: n.Button.prototype._rightIconName,getRightIconName: n.Button.prototype.getRightIconName,setRightIconName: n.Button.prototype.setRightIconName,getRightIcon: n.Button.prototype.getRightIcon,setRightIcon: n.Button.prototype.setRightIcon,_rightIconVisible: n.Button.prototype._rightIconVisible,isRightIconVisible: n.Button.prototype.isRightIconVisible,setRightIconVisible: n.Button.prototype.setRightIconVisible,_appearance: n.Button.prototype._appearance,getAppearance: n.Button.prototype.getAppearance,setAppearance: n.Button.prototype.setAppearance,_update: n.Button.prototype._update,_buildButtonHtml: n.Button.prototype._buildHtml,__onButtonClicked: n.Button.prototype.__onButtonClicked}, n = n || {};
    n.FluidLayout = n.Layout.$extend({_verticalSpacing: 0,getVerticalSpacing: function() {
                                     return this._verticalSpacing
                                     },setVerticalSpacing: function(t) {
                                     this._verticalSpacing = t, this._updateLayout()
                                     },_horizontalSpacing: 2,getHorizontalSpacing: function() {
                                     return this._horizontalSpacing
                                     },setHorizontalSpacing: function(t) {
                                     this._horizontalSpacing = t, this._updateLayout()
                                     },getHtml: function() {
                                     return this.__html.outerbox
                                     },_buildHtml: function() {
                                     this.__html.outerbox = document.createElement("div"), this.__html.outerbox.className = "photonui-widget photonui-fluidlayout"
                                     },_updateLayout: function() {
                                     for (var t = this.children, e = document.createDocumentFragment(), i = null, o = 0; o < t.length; o++)
                                     i = document.createElement("div"), i.className = "photonui-container", i.style.padding = "0 " + this.horizontalSpacing + "px " + this.verticalSpacing + "px 0", i.appendChild(t[o].html), e.appendChild(i);
                                     n.Helpers.cleanNode(this.__html.outerbox), this.__html.outerbox.appendChild(e)
                                     }});
    var n = n || {};
    n.PopupWindow = n.BaseWindow.$extend({__init__: function(t) {
                                         this.$super(t), this._bindEvent("document-mousedown-close", document, "mousedown", this.hide.bind(this)), this._bindEvent("popup-click-close", this.html, "click", this.hide.bind(this)), this._bindEvent("mousedown-preventclose", this.html, "mousedown", function(t) {
                                                                                                                                                                                                                                                   t.stopPropagation()
                                                                                                                                                                                                                                                   }.bind(this))
                                         },getContainerNode: function() {
                                         return this.__html.inner
                                         },popupXY: function(t, e) {
                                         this.setPosition(-1337, -1337), this.show();
                                         var n = document.getElementsByTagName("body")[0].offsetWidth, i = document.getElementsByTagName("body")[0].offsetHeight, o = this.offsetWidth, r = this.offsetHeight;
                                         t + o > n && (t = n - o), e + r > i && (e -= r), 0 > t && (t = 0), 0 > e && (e = 0), this.setPosition(t, e)
                                         },popupWidget: function(t) {
                                         this.setPosition(-1337, -1337), this.show();
                                         var e = document.getElementsByTagName("body")[0], n = 0, i = 0, o = t.absolutePosition, r = t.offsetHeight, s = t.offsetWidth, a = this.offsetWidth, l = this.offsetHeight;
                                         n = o.x + a < e.offsetWidth ? o.x : o.x + s < e.offsetWidth ? o.x + s - a : e.offsetWidth - a, o.y + r + l < e.offsetHeight ? i = o.y + r + 1 : o.y - l >= 0 && (i = o.y - l - 1), 0 > n && (n = 0), 0 > i && (i = 0), this.setPosition(n, i)
                                         },_buildHtml: function() {
                                         this.$super(), this.__html.window.className += " photonui-popupwindow", this.__html.inner = document.createElement("div"), this.__html.window.appendChild(this.__html.inner)
                                         }});
    var n = n || {}, r = [];
    n.Dialog = n.Window.$extend({__init__: function(t) {
                                this._buttonsNames = [], this.$super(t)
                                },_buttonsNames: [],getButtonsNames: function() {
                                return this._buttonsNames
                                },setButtonsNames: function(t) {
                                this._buttonsNames = t, this._updateButtons()
                                },getButtons: function() {
                                for (var t = [], e = 0; e < this._buttonsNames.length; e++)
                                t.push(n.getWidget(this._buttonsNames[e]));
                                return t
                                },setButtons: function(t) {
                                for (var e = [], i = 0; i < t.length; i++)
                                t[i] instanceof n.Widget && e.push(t[i].name);
                                this.buttonsNames = e
                                },addButton: function(t) {
                                this._childrenNames.push(t.name), this._updateButtons()
                                },removeButton: function(t) {
                                var e = this._buttonsNames.indexOf(t.name);
                                e >= 0 && this._buttonsNames.splice(t.name, 1), this._updateButtons()
                                },_updateButtons: function() {
                                n.Helpers.cleanNode(this.__html.buttons);
                                for (var t = this.buttons, e = t.length - 1; e >= 0; e--)
                                this.__html.buttons.appendChild(t[e].html)
                                },_buildHtml: function() {
                                this.$super(), this.addClass("photonui-dialog"), this.__html.buttons = document.createElement("div"), this.__html.buttons.className = "photonui-dialog-buttons", this.__html.window.appendChild(this.__html.buttons)
                                }});
    var n = n || {};
    n.ColorPicker = n.Widget.$extend({__init__: function(t) {
                                     this._registerWEvents(["value-changed"]), this._color = new n.Color, this.__buffH = document.createElement("canvas"), this.__buffH.width = 200, this.__buffH.height = 200, this.__buffSB = document.createElement("canvas"), this.__buffSB.width = 100, this.__buffSB.height = 100, this.__buffSBmask = document.createElement("canvas"), this.__buffSBmask.width = 100, this.__buffSBmask.height = 100, this.$super(t), this._updateH(), this._updateSB(), this._updateSBmask(), this._updateCanvas(), this._updateProperties(["color"]), this.__mouseManager = new n.MouseManager(this.__html.canvas), this.__mouseManager.registerCallback("click", "mouse-move", this.__onMouseMove.bind(this)), this.__mouseManager.registerCallback("mouse-down", "mouse-down", this.__onMouseDown.bind(this)), this.__mouseManager.registerCallback("drag-start", "drag-start", this.__onDragStart.bind(this)), this._bindEvent("value-changed", this.__html.preview, "change", this.__onValueChanged.bind(this))
                                     },getValue: function() {
                                     return this.color.hexString
                                     },setValue: function(t) {
                                     this.color.hexString = t, this._updateSB(), this._updateCanvas()
                                     },_color: null,getColor: function() {
                                     return this._color
                                     },setColor: function(t) {
                                     t instanceof n.Color && (this._color && this._color.removeCallback("photonui.colorpicker.value-changed::" + this.name), this._color = t, this._color.registerCallback("photonui.colorpicker.value-changed::" + this.name, "value-changed", function() {
                                                                                                                                                                                                           this._updateSB(), this._updateCanvas()
                                                                                                                                                                                                           }.bind(this)), this._updateSB(), this._updateCanvas())
                                     },getHtml: function() {
                                     return this.__html.outer
                                     },__buffH: null,__buffSB: null,__mouseManager: null,__disableSBUpdate: !1,destroy: function() {
                                     this.__mouseManager.destroy(), this._color.removeCallback("photonui.colorpicker.value-changed::" + this.name), this.$super()
                                     },_buildHtml: function() {
                                     this.__html.outer = document.createElement("div"), this.__html.outer.className = "photonui-widget photonui-colorpicker", this.__html.canvas = document.createElement("canvas"), this.__html.canvas.width = 200, this.__html.canvas.height = 200, this.__html.outer.appendChild(this.__html.canvas), this.__html.previewOuter = document.createElement("span"), this.__html.previewOuter.className = "photonui-colorpicker-previewouter", this.__html.outer.appendChild(this.__html.previewOuter), this.__html.preview = document.createElement("input"), this.__html.preview.type = "text", this.__html.preview.autocomplete = "off", this.__html.preview.spellcheck = !1, this.__html.preview.className = "photonui-colorpicker-preview", this.__html.previewOuter.appendChild(this.__html.preview)
                                     },_updateH: function() {
                                     var t = this.__buffH, e = t.getContext("2d"), i = new n.Color;
                                     e.clearRect(0, 0, t.width, t.height);
                                     for (var o = 0; 360 > o; o++)
                                     i.hue = 360 - o, e.beginPath(), e.fillStyle = i.hexString, e.arc(100, 100, 90, Math.PI * o / 180, Math.PI * ((o + 2) % 360) / 180, !1), e.lineTo(100, 100), e.fill();
                                     e.beginPath(), e.fillStyle = "#000", e.arc(100, 100, 73, 2 * Math.PI, !1), e.globalCompositeOperation = "destination-out", e.fill()
                                     },_updateSBmask: function() {
                                     var t = this.__buffSBmask, e = t.getContext("2d"), n = e.getImageData(0, 0, t.width, t.height), i = 0, o = 0, r = 0, s = 0;
                                     for (r = 0; 100 > r; r++)
                                     for (s = 0; 100 > s; s++)
                                     i = 400 * r + 4 * s, o = (.5 * (1 - s / 100) + .5) * (1 - r / 100) * 255 << 0, n.data[i + 0] = o, n.data[i + 1] = o, n.data[i + 2] = o, n.data[i + 3] = 255 * (1 - s / 100 * (1 - r / 100)) << 0;
                                     e.putImageData(n, 0, 0)
                                     },_updateSB: function() {
                                     if (!this.__disableSBUpdate) {
                                     var t = this.__buffSB, e = t.getContext("2d"), i = new n.Color({hue: this.color.hue,saturation: 100,brightness: 100});
                                     e.save(), e.clearRect(0, 0, t.width, t.height), e.fillStyle = i.hexString, e.rect(0, 0, t.width, t.height), e.fill(), e.drawImage(this.__buffSBmask, 0, 0), e.restore()
                                     }
                                     },_updateCanvas: function() {
                                     var t = this.__html.canvas, e = t.getContext("2d");
                                     e.save(), e.clearRect(0, 0, t.width, t.height), e.drawImage(this.__buffH, 0, 0), e.drawImage(this.__buffSB, 50, 50), e.strokeStyle = "#fff", e.shadowColor = "rgba(0, 0, 0, .7)", e.shadowBlur = 3, e.lineWidth = 2, e.beginPath(), e.arc(this.color.saturation + 50, 100 - this.color.brightness + 50, 6, 2 * Math.PI, !1), e.stroke(), e.translate(100, 100), e.rotate(-this.color.hue * Math.PI / 180), e.beginPath(), e.arc(81, 0, 6, 2 * Math.PI, !1), e.stroke(), e.restore(), this.__html.preview.style.backgroundColor = this.color.rgbaString, this.__html.preview.value = this.color.hexString
                                     },_pointerOnSquare: function(t) {
                                     return t.x >= 50 && t.x <= 150 && t.y >= 50 && t.y <= 150
                                     },_pointerOnCircle: function(t) {
                                     var e = Math.abs(100 - t.x), n = Math.abs(100 - t.y), i = Math.sqrt(e * e + n * n);
                                     return i >= 74 && 90 >= i
                                     },_pointerAngle: function(t) {
                                     var e = Math.abs(100 - t.x), n = Math.abs(100 - t.y), i = 180 * Math.atan(n / e) / Math.PI;
                                     return t.x < 100 && t.y < 100 ? i = 180 - i : t.x < 100 && t.y >= 100 ? i += 180 : t.x >= 100 && t.y > 100 && (i = 360 - i), 0 | i
                                     },__onMouseMove: function(t, e) {
                                     this.__html.canvas.style.cursor = this._pointerOnSquare(e) || this._pointerOnCircle(e) ? "crosshair" : "default"
                                     },__onMouseDown: function(t, e) {
                                     this._pointerOnSquare(e) ? (this.__disableSBUpdate = !0, this.color.saturation = e.x - 50, this.color.brightness = 150 - e.y, this.__disableSBUpdate = !1, this._callCallbacks("value-changed", this.color)) : this._pointerOnCircle(e) && (this.color.hue = this._pointerAngle(e), this._callCallbacks("value-changed", this.color))
                                     },__onDragStart: function(t, e) {
                                     this._pointerOnSquare(e) ? (this.__disableSBUpdate = !0, this.__mouseManager.registerCallback("dragging", "dragging", this.__onDraggingSquare.bind(this)), this.__mouseManager.registerCallback("drag-end", "drag-end", this.__onDragEnd.bind(this))) : this._pointerOnCircle(e) && (this.__mouseManager.registerCallback("dragging", "dragging", this.__onDraggingCircle.bind(this)), this.__mouseManager.registerCallback("drag-end", "drag-end", this.__onDragEnd.bind(this)))
                                     },__onDraggingSquare: function(t, e) {
                                     this.color.saturation = e.x - 50, this.color.brightness = 150 - e.y, this._callCallbacks("value-changed", this.color)
                                     },__onDraggingCircle: function(t, e) {
                                     this.color.hue = this._pointerAngle(e), this._callCallbacks("value-changed", this.color)
                                     },__onDragEnd: function() {
                                     this.__mouseManager.removeCallback("dragging"), this.__mouseManager.removeCallback("drag-end"), this.__disableSBUpdate = !1
                                     },__onValueChanged: function() {
                                     this.color.hexString = this.__html.preview.value, this.__html.preview.value = this.color.hexString, this._callCallbacks("value-changed", this.color)
                                     }});
    var n = n || {};
    n.BoxLayout = n.GridLayout.$extend({__init__: function(t) {
                                       this.$super(t), this._updateProperties(["orientation"])
                                       },_orientation: "vertical",getOrientation: function() {
                                       return this._orientation
                                       },setOrientation: function(t) {
                                       if ("vertical" != t && "horizontal" != t)
                                       throw 'Error: The orientation should be "vertical" or "horizontal".';
                                       this._orientation = t, this.removeClass("photonui-layout-orientation-vertical"), this.removeClass("photonui-layout-orientation-horizontal"), this.addClass("photonui-layout-orientation-" + this.orientation), this._updateLayout()
                                       },_buildHtml: function() {
                                       this.$super(), this.__html.outerbox.className = "photonui-widget photonui-boxlayout"
                                       },_updateLayout: function() {
                                       n.Helpers.cleanNode(this.__html.gridBody);
                                       var t = null;
                                       "horizontal" == this.getOrientation() && (t = document.createElement("tr"), this.__html.gridBody.appendChild(t));
                                       for (var i = this.children, o = 0; o < i.length; o++) {
                                       "vertical" == this.getOrientation() && (t = document.createElement("tr"), this.__html.gridBody.appendChild(t));
                                       var r = document.createElement("td");
                                       r.className = "photonui-container photonui-boxlayout-cell", t.appendChild(r), (i[o].layoutOptions.horizontalExpansion == e || i[o].layoutOptions.horizontalExpansion) && (r.className += " photonui-container-expand-child-horizontal"), (i[o].layoutOptions.verticalExpansion == e || i[o].layoutOptions.verticalExpansion) && (r.className += " photonui-container-expand-child-vertical"), i[o].layoutOptions.width != e && (r.style.height = i[o].layoutOptions.width + "px"), i[o].layoutOptions.height != e && (r.style.height = i[o].layoutOptions.height + "px"), i[o].layoutOptions.minWidth != e && (r.style.minWidth = this.childrenWidgets[o].layoutOptions.minWidth + "px"), i[o].layoutOptions.minHeight != e && (r.style.minHeight = this.childrenWidgets[o].layoutOptions.minHeight + "px"), i[o].layoutOptions.maxWidth != e && (r.style.maxWidth = this.childrenWidgets[o].layoutOptions.maxWidth + "px"), i[o].layoutOptions.maxHeight != e && (r.style.maxHeight = this.childrenWidgets[o].layoutOptions.maxHeight + "px"), i[o].layoutOptions.horizontalAlign != e && (r.style.textAlign = this.childrenWidgets[o].layoutOptions.horizontalAlign, console.log("hhhh")), r.appendChild(i[o].html)
                                       }
                                       }});
    var n = n || {};
    n.Menu = n.Layout.$extend({__init__: function(t) {
                              this.$super(t), this._updateProperties(["iconVisible"])
                              },_iconVisible: !0,isIconVisible: function() {
                              return this._iconVisible
                              },setIconVisible: function(t) {
                              this._iconVisible = t, t ? this.removeClass("photonui-menu-noicon") : this.addClass("photonui-menu-noicon")
                              },getHtml: function() {
                              return this.__html.outer
                              },_buildHtml: function() {
                              this.__html.outer = document.createElement("div"), this.__html.outer.className = "photonui-widget photonui-menu photonui-menu-style-default"
                              },_updateLayout: function() {
                              n.Helpers.cleanNode(this.__html.outer);
                              for (var t = this.children, e = 0; e < t.length; e++)
                              this.__html.outer.appendChild(t[e].html)
                              }});
    var n = n || {};
    n.MenuItem = n.Container.$extend({__init__: function(t) {
                                     this._registerWEvents(["click"]), this.$super(t), this._updateProperties(["text", "icon", "active"]), this._bindEvent("click", this.__html.outer, "click", function(t) {
                                                                                                                                                           this._callCallbacks("click", [t])
                                                                                                                                                           }.bind(this))
                                     },_value: "",getValue: function() {
                                     return this._value
                                     },setValue: function(t) {
                                     this._value = t
                                     },_text: "Menu Item",getText: function() {
                                     return this._text
                                     },setText: function(t) {
                                     this._text = t, n.Helpers.cleanNode(this.__html.text), this.__html.text.appendChild(document.createTextNode(t))
                                     },_iconName: null,getIconName: function() {
                                     return this._iconName
                                     },setIconName: function(t) {
                                     this._iconName = t, n.Helpers.cleanNode(this.__html.icon), this._iconName && this.__html.icon.appendChild(this.icon.html)
                                     },getIcon: function() {
                                     return n.getWidget(this._iconName)
                                     },setIcon: function(t) {
                                     return t instanceof n.BaseIcon ? void (this.iconName = t.name) : void (this.iconName = null)
                                     },_active: !1,getActive: function() {
                                     return this._active
                                     },setActive: function(t) {
                                     this._active = t, t ? this.addClass("photonui-menuitem-active") : this.removeClass("photonui-menuitem-active")
                                     },getHtml: function() {
                                     return this.__html.outer
                                     },getContainerNode: function() {
                                     return this.__html.widget
                                     },_buildHtml: function() {
                                     this.__html.outer = document.createElement("div"), this.__html.outer.className = "photonui-widget photonui-menuitem", this.__html.icon = document.createElement("span"), this.__html.icon.className = "photonui-menuitem-icon", this.__html.outer.appendChild(this.__html.icon), this.__html.text = document.createElement("span"), this.__html.text.className = "photonui-menuitem-text", this.__html.outer.appendChild(this.__html.text), this.__html.widget = document.createElement("span"), this.__html.widget.className = "photonui-menuitem-widget", this.__html.outer.appendChild(this.__html.widget)
                                     }});
    var n = n || {};
    n.SubMenuItem = n.MenuItem.$extend({__init__: function(t) {
                                       this.$super(t), this.addClass("photonui-submenuitem"), this.registerCallback("toggle-folding", "click", this.__onItemClicked, this), this._updateProperties(["menuName"])
                                       },_menuName: null,getMenuName: function() {
                                       return this._menuName
                                       },setMenuName: function(t) {
                                       this.menuName && (this.menu.removeCallback("fold"), this.menu.removeCallback("unfold")), this._menuName = t, this.menuName && (this.menu.registerCallback("fold", "hide", this.__onToggleFold, this), this.menu.registerCallback("unfold", "show", this.__onToggleFold, this), this.active = this.menu.visible)
                                       },getMenu: function() {
                                       return n.getWidget(this.menuName)
                                       },setMenu: function(t) {
                                       this.menuName = t instanceof n.Menu ? t.name : null
                                       },__onToggleFold: function(t) {
                                       this.active = t.visible
                                       },__onItemClicked: function() {
                                       this.menu.visible = !this.menu.visible
                                       }});
    var n = n || {};
    n.ToggleButton = n.CheckBox.$extend({__init__: function(t) {
                                        this._registerWEvents(["click"]), this.$super(t), this.__buttonInit(), this.removeClass("photonui-checkbox"), this.addClass("photonui-togglebutton")
                                        },__buttonInit: function() {
                                        this._bindEvent("click", this.__html.button, "click", this.__onButtonClicked.bind(this)), this._updateProperties(["text", "leftIconName", "rightIconName"]), this._update()
                                        },__include__: [s],_buildHtml: function() {
                                        this.$super(), this._buildButtonHtml(), this.__html.outer.appendChild(this.__html.button), this.__html.outer.removeChild(this.__html.span), this.__html.span = this.__html.button
                                        }});
    var n = n || {};
    n.PopupMenu = n.PopupWindow.$extend({__init__: function(t) {
                                        this._childrenNames = [], this.$super(t)
                                        },__include__: [{getChildrenNames: n.Menu.prototype.getChildrenNames,setChildrenNames: n.Menu.prototype.setChildrenNames,getChildren: n.Menu.prototype.getChildren,setChildren: n.Menu.prototype.setChildren,getChildName: n.Menu.prototype.getChildName,setChildName: n.Menu.prototype.setChildName,getChild: n.Menu.prototype.getChild,setChild: n.Menu.prototype.setChild,isIconVisible: n.Menu.prototype.isIconVisible,setIconVisible: n.Menu.prototype.setIconVisible,addChild: n.Menu.prototype.addChild,removeChild: n.Menu.prototype.removeChild,destroy: n.Menu.prototype.destroy,_updateLayout: n.Menu.prototype._updateLayout}],_buildHtml: function() {
                                        this.$super(), n.Menu.prototype._buildHtml.call(this), this.__html.inner.appendChild(this.__html.outer), this.__html.window.className += " photonui-popupmenu", this.__html.outer.className = "photonui-widget photonui-menu photonui-menu-style-popupmenu"
                                        },__onLocaleChanged: function() {
                                        }});
    var n = n || {};
    n.Select = n.Widget.$extend({__init__: function(t) {
                                this.__popupMenu = new n.PopupMenu({maxHeight: 300,className: "photonui-select-popup"}), this.__popupMenu.iconVisible = !1, this._registerWEvents(["value-changed"]), this.$super(t), this._updateProperties(["value"]), this._bindEvent("popup", this.html, "click", this.__onClick.bind(this)), this.setValue(t.value || this.value, !0)
                                },_value: "",getValue: function() {
                                return this._value
                                },setValue: function(t, e) {
                                if (this.value != t || e) {
                                for (var i = this.__popupMenu.children, o = 0; o < i.length; o++)
                                if (i[o] instanceof n.MenuItem && i[o].value == t)
                                return this._value = t, n.Helpers.cleanNode(this.__html.select), void this.__html.select.appendChild(i[o].html.cloneNode(!0));
                                this._value = "";
                                var r = new n.MenuItem({text: this.placeholder,className: "photonui-select-placeholder"});
                                n.Helpers.cleanNode(this.__html.select), this.__html.select.appendChild(r.html)
                                }
                                },_placeholder: t.Stone ? t.Stone.lazyGettext("Select...") : "Select...",getPlaceholder: function() {
                                return this._placeholder
                                },setPlaceholder: function(t) {
                                this._placeholder = t
                                },getChildren: function() {
                                return this.__popupMenu.getChildren()
                                },setChildren: function(t) {
                                this.__popupMenu.setChildren(t), this._updateItemsBinding()
                                },getChildrenNames: function() {
                                return this.__popupMenu.getChildrenNames()
                                },setChildrenNames: function(t) {
                                this.__popupMenu.setChildrenNames(t), this._updateItemsBinding()
                                },getPopupWidth: function() {
                                return this.__popupMenu.getWidth()
                                },setPopupWidth: function(t) {
                                this.__popupMenu.setWidth(t)
                                },getPopupHeight: function() {
                                return this.__popupMenu.getHeight()
                                },setPopupHeight: function(t) {
                                this.__popupMenu.setHeight(t)
                                },getPopupMaxWidth: function() {
                                return this.__popupMenu.getMaxWidth()
                                },setPopupMaxWidth: function(t) {
                                this.__popupMenu.setMaxWidth(t)
                                },getPopupMinWidth: function() {
                                return this.__popupMenu.getMinWidth()
                                },setPopupMinWidth: function(t) {
                                this.__popupMenu.setMinWidth(t)
                                },getPopupMaxHeight: function() {
                                return this.__popupMenu.getMaxHeight()
                                },setPopupMaxHeight: function(t) {
                                this.__popupMenu.setMaxHeight(t)
                                },getPopupMinHeight: function() {
                                return this.__popupMenu.getMinHeight()
                                },setPopupMinHeight: function(t) {
                                this.__popupMenu.setMinHeight(t)
                                },getPopupOffsetWidth: function() {
                                return this.__popupMenu.getOffsetWidth()
                                },getPopupOffsetHeight: function() {
                                return this.__popupMenu.getOffsetHeight()
                                },getPopupPadding: function() {
                                return this.__popupMenu.getPadding()
                                },setPopupPadding: function(t) {
                                this.__popupMenu.setPadding(t)
                                },isIconVisible: function() {
                                return this.__popupMenu.isIconVisible()
                                },setIconVisible: function(t) {
                                this.__popupMenu.setIconVisible(t)
                                },getHtml: function() {
                                return this.__html.select
                                },__popupMenu: null,addChild: function(t, e) {
                                this.__popupMenu.addChild(t, e), this._updateItemsBinding()
                                },destroy: function() {
                                this.__popupMenu.destroy(), this.$super()
                                },_buildHtml: function() {
                                this.__html.select = document.createElement("div"), this.__html.select.className = "photonui-widget photonui-select", this.__html.select.tabIndex = "0"
                                },_updateItemsBinding: function() {
                                for (var t = this.__popupMenu.children, e = 0; e < t.length; e++)
                                t[e] instanceof n.MenuItem && t[e].registerCallback(this.name + "-click", "click", this.__onItemClicked, this)
                                },__onClick: function() {
                                this.__popupMenu.popupWidget(this)
                                },__onItemClicked: function(t) {
                                this.value = t.value, this._callCallbacks("value-changed", [this.value])
                                }});
    var n = n || {};
    n.FontSelect = n.Select.$extend({__init__: function(t) {
                                    this._fonts = [], this.$super(t), 0 == this.fonts.length && (this.fonts = ["sans-serif", "serif", "monospace"])
                                    },_fonts: null,getFonts: function() {
                                    return this._fonts
                                    },setFonts: function(t) {
                                    this._fonts = [];
                                    for (var e = 0; e < t.length; e++)
                                    this.addFont(t[e])
                                    },_value: "sans-serif",_placeholder: t.Stone ? t.Stone.lazyGettext("Select a font...") : "Select a font...",addFont: function(t) {
                                    var e = new n.MenuItem({value: t,text: t});
                                    e.html.style.fontFamily = t, this.addChild(e), this._fonts.push(t)
                                    }});
    var n = n || {};
    n.ColorPickerDialog = n.Dialog.$extend({__init__: function(t) {
                                           this.__widgets = {}, this._color = new n.Color;
                                           var t = t || {};
                                           t.title == e && (t.title = _("Select a color...")), this._registerWEvents(["value-changed"]), this.$super(t), this._buildUi(), this._updateProperties(["color"])
                                           },_color: null,getColor: function() {
                                           return this._color
                                           },setColor: function(t) {
                                           t instanceof n.Color && (this._color && this._color.removeCallback("photonui.colorpickerdialog.value-changed::" + this.name), this._color = t, this._color.registerCallback("photonui.colorpickerdialog.value-changed::" + this.name, "value-changed", this.__onColorChanged, this)), this.__onColorChanged()
                                           },setVisible: function(t) {
                                           this.$super(t), this._color && t && this.__widgets.labelRed && this._updateUi()
                                           },destroy: function() {
                                           this._color.removeCallback("photonui.colorpickerdialog.value-changed::" + this.name), this.$super()
                                           },_buildUi: function() {
                                           this.__widgets.hbox = new n.BoxLayout({orientation: "horizontal"}), this.child = this.__widgets.hbox, this.__widgets.colorPicker = new n.ColorPicker, this.__widgets.hbox.addChild(this.__widgets.colorPicker), this.__widgets.colorPalette = new n.ColorPalette, this.__widgets.hbox.addChild(this.__widgets.colorPalette), this.__widgets.separator = new n.Separator({orientation: "vertical"}), this.__widgets.hbox.addChild(this.__widgets.separator), this.__widgets.grid = new n.GridLayout, this.__widgets.hbox.addChild(this.__widgets.grid), this.__widgets.fieldRed = new n.Slider({min: 0,max: 255,decimalDigits: 0}), this.__widgets.labelRed = new n.Label({text: _("Red:"),forInput: this.__widgets.fieldRed}), this.__widgets.grid.addChild(this.__widgets.labelRed, {gridX: 0,gridY: 0,verticalExpansion: !1}), this.__widgets.grid.addChild(this.__widgets.fieldRed, {gridX: 1,gridY: 0,verticalExpansion: !1}), this.__widgets.fieldGreen = new n.Slider({min: 0,max: 255,decimalDigits: 0}), this.__widgets.labelGreen = new n.Label({text: _("Green:"),forInput: this.__widgets.fieldGreen}), this.__widgets.grid.addChild(this.__widgets.labelGreen, {gridX: 0,gridY: 1,verticalExpansion: !1}), this.__widgets.grid.addChild(this.__widgets.fieldGreen, {gridX: 1,gridY: 1,verticalExpansion: !1}), this.__widgets.fieldBlue = new n.Slider({min: 0,max: 255,decimalDigits: 0}), this.__widgets.labelBlue = new n.Label({text: _("Blue:"),forInput: this.__widgets.fieldBlue}), this.__widgets.grid.addChild(this.__widgets.labelBlue, {gridX: 0,gridY: 2,verticalExpansion: !1}), this.__widgets.grid.addChild(this.__widgets.fieldBlue, {gridX: 1,gridY: 2,verticalExpansion: !1}), this.__widgets.separator2 = new n.Separator, this.__widgets.grid.addChild(this.__widgets.separator2, {gridX: 0,gridY: 3,verticalExpansion: !1,gridWidth: 2}), this.__widgets.fieldHue = new n.Slider({min: 0,max: 360,decimalDigits: 0}), this.__widgets.labelHue = new n.Label({text: _("Hue:"),forInput: this.__widgets.fieldHue}), this.__widgets.grid.addChild(this.__widgets.labelHue, {gridX: 0,gridY: 4,verticalExpansion: !1}), this.__widgets.grid.addChild(this.__widgets.fieldHue, {gridX: 1,gridY: 4,verticalExpansion: !1}), this.__widgets.fieldSaturation = new n.Slider({min: 0,max: 100,decimalDigits: 0}), this.__widgets.labelSaturation = new n.Label({text: _("Saturation:"),forInput: this.__widgets.fieldSaturation}), this.__widgets.grid.addChild(this.__widgets.labelSaturation, {gridX: 0,gridY: 5,verticalExpansion: !1}), this.__widgets.grid.addChild(this.__widgets.fieldSaturation, {gridX: 1,gridY: 5,verticalExpansion: !1}), this.__widgets.fieldBrightness = new n.Slider({min: 0,max: 100,decimalDigits: 0}), this.__widgets.labelBrightness = new n.Label({text: _("Brightness:"),forInput: this.__widgets.fieldBrightness}), this.__widgets.grid.addChild(this.__widgets.labelBrightness, {gridX: 0,gridY: 6,verticalExpansion: !1}), this.__widgets.grid.addChild(this.__widgets.fieldBrightness, {gridX: 1,gridY: 6,verticalExpansion: !1}), this.__widgets.buttonOk = new n.Button({text: _("Ok")}), n.FAIcon && (this.__widgets.buttonOk.leftIcon = new n.FAIcon("fa-check")), this.__widgets.buttonCancel = new n.Button({text: _("Cancel")}), this.buttons = [this.__widgets.buttonOk, this.__widgets.buttonCancel], n.FAIcon && (this.__widgets.buttonCancel.leftIcon = new n.FAIcon("fa-times")), this.__widgets.colorPalette.color = this.__widgets.colorPicker.color, this.__widgets.colorPicker.color.registerCallback("colorpickerdialog.colorPicker.value-changed", "value-changed", this._updateUi, this), this.__widgets.fieldRed.registerCallback("colorpickerdialog.fieldRed.value-changed", "value-changed", function(t, e) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 this.__widgets.colorPicker.color.red = e
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 }, this), this.__widgets.fieldGreen.registerCallback("colorpickerdialog.fieldGreen.value-changed", "value-changed", function(t, e) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      this.__widgets.colorPicker.color.green = e
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      }, this), this.__widgets.fieldBlue.registerCallback("colorpickerdialog.fieldBlue.value-changed", "value-changed", function(t, e) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          this.__widgets.colorPicker.color.blue = e
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          }, this), this.__widgets.fieldHue.registerCallback("colorpickerdialog.fieldHue.value-changed", "value-changed", function(t, e) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             this.__widgets.colorPicker.color.hue = e
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             }, this), this.__widgets.fieldSaturation.registerCallback("colorpickerdialog.fieldSaturation.value-changed", "value-changed", function(t, e) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       this.__widgets.colorPicker.color.saturation = e
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       }, this), this.__widgets.fieldBrightness.registerCallback("colorpickerdialog.fieldBrightness.value-changed", "value-changed", function(t, e) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 this.__widgets.colorPicker.color.brightness = e
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 }, this), this.__widgets.buttonOk.registerCallback("colorpickerdialog.buttonOk.click", "click", this.__onValidate, this), this.__widgets.buttonCancel.registerCallback("colorpickerdialog.buttonCancel.click", "click", this.__onCancel, this), this.registerCallback("colorpickerdialog.close", "close-button-clicked", this.__onCancel, this)
                                           },_updateUi: function(t) {
                                           var t = t || this.color;
                                           this.__widgets.fieldRed.value = t.red, this.__widgets.fieldGreen.value = t.green, this.__widgets.fieldBlue.value = t.blue, this.__widgets.fieldHue.value = t.hue, this.__widgets.fieldSaturation.value = t.saturation, this.__widgets.fieldBrightness.value = t.brightness
                                           },__onCancel: function() {
                                           this.__widgets.colorPicker.color.setHSB(this._color.hue, this._color.saturation, this._color.brightness), this.hide()
                                           },__onValidate: function() {
                                           this._color.setHSB(this.__widgets.colorPicker.color.hue, this.__widgets.colorPicker.color.saturation, this.__widgets.colorPicker.color.brightness), this.hide(), this._callCallbacks("value-changed", [this.color])
                                           },__onColorChanged: function() {
                                           this.__widgets.colorPicker.color.setHSB(this._color.hue, this._color.saturation, this._color.brightness)
                                           }});
    var n = n || {};
    return n.ColorButton = n.Button.$extend({__init__: function(t) {
                                            this.__widgets = {}, this._color = new n.Color, this._registerWEvents(["value-changed"]), this.$super(t), this._buildUi(), this._updateProperties(["color"])
                                            },getValue: function() {
                                            return this.color.hexString
                                            },setValue: function(t) {
                                            this.color.hexString = t
                                            },_color: null,getColor: function() {
                                            return this._color
                                            },setColor: function(t) {
                                            t instanceof n.Color && (this._color && this._color.removeCallback("photonui.colorbutton.value-changed::" + this.name), this._color = t, this._color.registerCallback("photonui.colorbutton.value-changed::" + this.name, "value-changed", this.__onColorChanged, this)), this.__onColorChanged(), t instanceof n.Color && (this._color = t)
                                            },_dialogOnly: !1,isDialogOnly: function() {
                                            return this._dialogOnly
                                            },setDialogOnly: function(t) {
                                            this._dialogOnly = !!t
                                            },destroy: function() {
                                            this._color.removeCallback("photonui.colorbutton.value-changed::" + this.name), this.$super()
                                            },_update: function() {
                                            },_buildHtml: function() {
                                            this.$super(), this.__html.button = document.createElement("button"), this.__html.button.className = "photonui-widget photonui-button", this.__html.button.className += " photonui-colorbutton", this.__html.color = document.createElement("span"), this.__html.button.appendChild(this.__html.color)
                                            },_buildUi: function() {
                                            this.__widgets.popup = new n.PopupWindow, this.__widgets.vbox = new n.BoxLayout({verticalSpacing: 0,horizontalSpacing: 0}), this.__widgets.popup.child = this.__widgets.vbox, this.__widgets.palette = new n.ColorPalette, this.__widgets.vbox.addChild(this.__widgets.palette), this.__widgets.custom = new n.Button({text: _("Custom color..."),appearance: "flat"}), this.__widgets.custom.addClass("photonui-colorbutton-custombutton"), this.__widgets.vbox.addChild(this.__widgets.custom), this.__widgets.colorPickerDialog = new n.ColorPickerDialog, this.__widgets.palette.registerCallback("value-changed", "value-changed", this.__onValueChanged, this), this.__widgets.colorPickerDialog.registerCallback("value-changed", "value-changed", this.__onValueChanged, this), this.__widgets.custom.registerCallback("click", "click", this.__onCustomButtonClicked, this), this.__widgets.palette.color = this.color, this.__widgets.colorPickerDialog.color = this.color
                                            },__onButtonClicked: function(t) {
                                            this._callCallbacks("click", [t]), this.dialogOnly ? (this.__widgets.colorPickerDialog.show(), this.__widgets.colorPickerDialog.center()) : this.__widgets.popup.popupWidget(this)
                                            },__onValueChanged: function() {
                                            this._callCallbacks("value-changed", [this.color])
                                            },__onColorChanged: function() {
                                            this.__html.color.style.backgroundColor = this.color.hexString
                                            },__onCustomButtonClicked: function() {
                                            this.__widgets.colorPickerDialog.show(), this.__widgets.colorPickerDialog.center()
                                            }}), n
}(window);