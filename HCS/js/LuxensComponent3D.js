var LuxensComponent3D = function() {
    var t = function(t) {
        BaseComponent3D.call(this, t, "LuxensComponent3D")
    };
    t.prototype = new BaseComponent3D, t.prototype.initialize = function() {
        _item = {
            title: _("家具颜色"),
            id: "luxens",
            items: e,
            layout: "layout-table-26"
        }, ujs.notify("wnp.menu.main.add", {
            item: _item,
            menuPath: "decorate3D",
            position: 10
        })
    }, t.getLuxens = function() {
        return e
    };
    var e = [{
        texture: !0,
        title: "Blanc 1",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "wnp.WhiteMaterial",
            color: {
                r: 1,
                g: 1,
                b: 1
            }
        }
    }, {
        texture: !0,
        title: "Blanc 2",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "wnp.WhiteMaterial",
            color: {
                r: .96,
                g: .96,
                b: .96
            }
        }
    }, {
        texture: !0,
        title: "Blanc3",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "wnp.WhiteMaterial",
            color: {
                r: .9,
                g: .9,
                b: .9
            }
        }
    }, {
        texture: !0,
        title: "Noir 1",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: 0,
                g: 0,
                b: 0
            }
        }
    }, {
        texture: !0,
        title: "Noir 2",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .05,
                g: .05,
                b: .05
            }
        }
    }, {
        texture: !0,
        title: "Noir 3",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .07,
                g: .07,
                b: .07
            }
        }
    }, {
        texture: !0,
        title: "Blanc calcaire 1",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .85,
                g: .85,
                b: .82
            }
        }
    }, {
        texture: !0,
        title: "Blanc calcaire 2",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .91,
                g: .9,
                b: .82
            }
        }
    }, {
        texture: !0,
        title: "Blanc calcaire 3",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .92,
                g: .93,
                b: .89
            }
        }
    }, {
        texture: !0,
        title: "Blanc calcaire 4",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .92,
                g: .93,
                b: .89
            }
        }
    }, {
        texture: !0,
        title: "Blanc calcaire 5",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .88,
                g: .89,
                b: .86
            }
        }
    }, {
        texture: !0,
        title: "Blanc calcaire 6",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .91,
                g: .88,
                b: .84
            }
        }
    }, {
        texture: !0,
        title: "Blanc ivoire 1",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .85,
                g: .8,
                b: .71
            }
        }
    }, {
        texture: !0,
        title: "Blanc ivoire 2",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .93,
                g: .87,
                b: .77
            }
        }
    }, {
        texture: !0,
        title: "Blanc ivoire 3",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .91,
                g: .87,
                b: .76
            }
        }
    }, {
        texture: !0,
        title: "Blanc ivoire 4",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .94,
                g: .91,
                b: .83
            }
        }
    }, {
        texture: !0,
        title: "Blanc ivoire 5",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .91,
                g: .89,
                b: .84
            }
        }
    }, {
        texture: !0,
        title: "Blanc ivoire 6",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .93,
                g: .89,
                b: .76
            }
        }
    }, {
        texture: !0,
        title: "Blanc coquille 1",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .84,
                g: .78,
                b: .73
            }
        }
    }, {
        texture: !0,
        title: "Blanc coquille 2",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .86,
                g: .83,
                b: .77
            }
        }
    }, {
        texture: !0,
        title: "Blanc coquille 3",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .91,
                g: .86,
                b: .78
            }
        }
    }, {
        texture: !0,
        title: "Blanc coquille 4",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .9,
                g: .86,
                b: .81
            }
        }
    }, {
        texture: !0,
        title: "Blanc coquille 5",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .93,
                g: .89,
                b: .84
            }
        }
    }, {
        texture: !0,
        title: "Blanc coquille 6",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .96,
                g: .88,
                b: .75
            }
        }
    }, {
        texture: !0,
        title: "Gris galet 1",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .31,
                g: .32,
                b: .35
            }
        }
    }, {
        texture: !0,
        title: "Gris galet 2",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .39,
                g: .38,
                b: .41
            }
        }
    }, {
        texture: !0,
        title: "Gris galet 3",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .49,
                g: .49,
                b: .5
            }
        }
    }, {
        texture: !0,
        title: "Gris galet 4",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .58,
                g: .62,
                b: .63
            }
        }
    }, {
        texture: !0,
        title: "Gris galet 5",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .7,
                g: .71,
                b: .72
            }
        }
    }, {
        texture: !0,
        title: "Gris galet 6",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .78,
                g: .79,
                b: .8
            }
        }
    }, {
        texture: !0,
        title: "Gris zingué 1",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .2,
                g: .22,
                b: .23
            }
        }
    }, {
        texture: !0,
        title: "Gris zingué 2",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .29,
                g: .33,
                b: .36
            }
        }
    }, {
        texture: !0,
        title: "Gris zingué 3",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .29,
                g: .36,
                b: .43
            }
        }
    }, {
        texture: !0,
        title: "Gris zingué 4",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .47,
                g: .51,
                b: .54
            }
        }
    }, {
        texture: !0,
        title: "Gris zingué 5",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .6,
                g: .65,
                b: .69
            }
        }
    }, {
        texture: !0,
        title: "Gris zingué 6",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .69,
                g: .73,
                b: .78
            }
        }
    }, {
        texture: !0,
        title: "Gris smoke 1",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .26,
                g: .27,
                b: .27
            }
        }
    }, {
        texture: !0,
        title: "Gris smoke 2",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .36,
                g: .37,
                b: .33
            }
        }
    }, {
        texture: !0,
        title: "Gris smoke 3",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .4,
                g: .42,
                b: .36
            }
        }
    }, {
        texture: !0,
        title: "Gris smoke 4",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .47,
                g: .51,
                b: .45
            }
        }
    }, {
        texture: !0,
        title: "Gris smoke 5",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .58,
                g: .62,
                b: .59
            }
        }
    }, {
        texture: !0,
        title: "Gris smoke 6",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .73,
                g: .75,
                b: .74
            }
        }
    }, {
        texture: !0,
        title: "Gris gris 1",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .08,
                g: .08,
                b: .08
            }
        }
    }, {
        texture: !0,
        title: "Gris gris 2",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .4,
                g: .41,
                b: .39
            }
        }
    }, {
        texture: !0,
        title: "Gris gris 3",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .52,
                g: .52,
                b: .5
            }
        }
    }, {
        texture: !0,
        title: "Gris gris 4",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .59,
                g: .56,
                b: .51
            }
        }
    }, {
        texture: !0,
        title: "Gris gris 5",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .65,
                g: .64,
                b: .57
            }
        }
    }, {
        texture: !0,
        title: "Gris gris 6",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .79,
                g: .81,
                b: .77
            }
        }
    }, {
        texture: !0,
        title: "Gris poivré 1",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .12,
                g: .11,
                b: .1
            }
        }
    }, {
        texture: !0,
        title: "Gris poivré 2",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .3,
                g: .27,
                b: .26
            }
        }
    }, {
        texture: !0,
        title: "Gris poivré 3",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .41,
                g: .4,
                b: .37
            }
        }
    }, {
        texture: !0,
        title: "Gris poivré 4",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .57,
                g: .53,
                b: .54
            }
        }
    }, {
        texture: !0,
        title: "Gris poivré 5",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .69,
                g: .67,
                b: .67
            }
        }
    }, {
        texture: !0,
        title: "Gris poivré 6",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .82,
                g: .78,
                b: .75
            }
        }
    }, {
        texture: !0,
        title: "Gris doré 1",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .38,
                g: .33,
                b: .27
            }
        }
    }, {
        texture: !0,
        title: "Gris doré 2",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .41,
                g: .38,
                b: .31
            }
        }
    }, {
        texture: !0,
        title: "Gris doré 3",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .53,
                g: .45,
                b: .36
            }
        }
    }, {
        texture: !0,
        title: "Gris doré 4",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .56,
                g: .52,
                b: .46
            }
        }
    }, {
        texture: !0,
        title: "Gris doré 5",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .64,
                g: .58,
                b: .48
            }
        }
    }, {
        texture: !0,
        title: "Gris doré 6",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .8,
                g: .77,
                b: .72
            }
        }
    }, {
        texture: !0,
        title: "Brun taupe 1",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .27,
                g: .24,
                b: .23
            }
        }
    }, {
        texture: !0,
        title: "Brun taupe 2",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .35,
                g: .29,
                b: .27
            }
        }
    }, {
        texture: !0,
        title: "Brun taupe 3",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .46,
                g: .41,
                b: .37
            }
        }
    }, {
        texture: !0,
        title: "Brun taupe 4",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .53,
                g: .47,
                b: .46
            }
        }
    }, {
        texture: !0,
        title: "Brun taupe 5",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .67,
                g: .57,
                b: .56
            }
        }
    }, {
        texture: !0,
        title: "Brun taupe 6",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .81,
                g: .75,
                b: .75
            }
        }
    }, {
        texture: !0,
        title: "Brun gatsby 1",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .25,
                g: .18,
                b: .19
            }
        }
    }, {
        texture: !0,
        title: "Brun gatsby 2",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .3,
                g: .22,
                b: .22
            }
        }
    }, {
        texture: !0,
        title: "Brun gatsby 3",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .43,
                g: .31,
                b: .27
            }
        }
    }, {
        texture: !0,
        title: "Brun gatsby 4",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .61,
                g: .5,
                b: .43
            }
        }
    }, {
        texture: !0,
        title: "Brun gatsby 5",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .73,
                g: .63,
                b: .54
            }
        }
    }, {
        texture: !0,
        title: "Brun gatsby 6",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .85,
                g: .78,
                b: .68
            }
        }
    }, {
        texture: !0,
        title: "Brun brun 1",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .27,
                g: .22,
                b: .18
            }
        }
    }, {
        texture: !0,
        title: "Brun brun 2",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .42,
                g: .31,
                b: .22
            }
        }
    }, {
        texture: !0,
        title: "Brun brun 3",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .47,
                g: .39,
                b: .31
            }
        }
    }, {
        texture: !0,
        title: "Brun brun 4",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .67,
                g: .57,
                b: .42
            }
        }
    }, {
        texture: !0,
        title: "Brun brun 5",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .81,
                g: .69,
                b: .52
            }
        }
    }, {
        texture: !0,
        title: "Brun brun 6",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .83,
                g: .75,
                b: .62
            }
        }
    }, {
        texture: !0,
        title: "Brun argileux 1",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .27,
                g: .25,
                b: .24
            }
        }
    }, {
        texture: !0,
        title: "Brun argileux 2",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .31,
                g: .29,
                b: .2
            }
        }
    }, {
        texture: !0,
        title: "Brun argileux 3",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .53,
                g: .42,
                b: .23
            }
        }
    }, {
        texture: !0,
        title: "Brun argileux 4",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .57,
                g: .51,
                b: .36
            }
        }
    }, {
        texture: !0,
        title: "Brun argileux 5",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .71,
                g: .68,
                b: .58
            }
        }
    }, {
        texture: !0,
        title: "Brun argileux 6",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .81,
                g: .79,
                b: .69
            }
        }
    }, {
        texture: !0,
        title: "Brun chocolat 1",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .22,
                g: .17,
                b: .14
            }
        }
    }, {
        texture: !0,
        title: "Brun chocolat 2",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .32,
                g: .21,
                b: .16
            }
        }
    }, {
        texture: !0,
        title: "Brun chocolat 3",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .36,
                g: .21,
                b: .15
            }
        }
    }, {
        texture: !0,
        title: "Brun chocolat 4",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .5,
                g: .35,
                b: .25
            }
        }
    }, {
        texture: !0,
        title: "Brun chocolat 5",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .8,
                g: .66,
                b: .49
            }
        }
    }, {
        texture: !0,
        title: "Brun chocolat 6",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .91,
                g: .81,
                b: .71
            }
        }
    }, {
        texture: !0,
        title: "Brun havane 1",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .16,
                g: .12,
                b: .12
            }
        }
    }, {
        texture: !0,
        title: "Brun havane 2",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .25,
                g: .14,
                b: .14
            }
        }
    }, {
        texture: !0,
        title: "Brun havane 3",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .5,
                g: .28,
                b: .24
            }
        }
    }, {
        texture: !0,
        title: "Brun havane 4",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .62,
                g: .39,
                b: .29
            }
        }
    }, {
        texture: !0,
        title: "Brun havane 5",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .77,
                g: .5,
                b: .39
            }
        }
    }, {
        texture: !0,
        title: "Brun havane 6",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .88,
                g: .73,
                b: .63
            }
        }
    }, {
        texture: !0,
        title: "Rouge velours 1",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .27,
                g: .12,
                b: .12
            }
        }
    }, {
        texture: !0,
        title: "Rouge velours 2",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .43,
                g: .12,
                b: .16
            }
        }
    }, {
        texture: !0,
        title: "Rouge velours 3",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .48,
                g: .13,
                b: .18
            }
        }
    }, {
        texture: !0,
        title: "Rouge velours 4",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .58,
                g: .22,
                b: .22
            }
        }
    }, {
        texture: !0,
        title: "Rouge velours 5",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .81,
                g: .32,
                b: .31
            }
        }
    }, {
        texture: !0,
        title: "Rouge velours 6",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .85,
                g: .45,
                b: .43
            }
        }
    }, {
        texture: !0,
        title: "Rouge rubis 1",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .25,
                g: .11,
                b: .11
            }
        }
    }, {
        texture: !0,
        title: "Rouge rubis 2",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .4,
                g: .08,
                b: .14
            }
        }
    }, {
        texture: !0,
        title: "Rouge rubis 3",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .6,
                g: .07,
                b: .24
            }
        }
    }, {
        texture: !0,
        title: "Rouge rubis 4",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .64,
                g: .14,
                b: .27
            }
        }
    }, {
        texture: !0,
        title: "Rouge rubis 5",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .75,
                g: .33,
                b: .43
            }
        }
    }, {
        texture: !0,
        title: "Rouge rubis 6",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .89,
                g: .61,
                b: .63
            }
        }
    }, {
        texture: !0,
        title: "Rouge gourmand 1",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .27,
                g: .05,
                b: .09
            }
        }
    }, {
        texture: !0,
        title: "Rouge gourmand 2",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .54,
                g: .02,
                b: .15
            }
        }
    }, {
        texture: !0,
        title: "Rouge gourmand 3",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .65,
                g: 0,
                b: .18
            }
        }
    }, {
        texture: !0,
        title: "Rouge gourmand 4",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .84,
                g: .07,
                b: .2
            }
        }
    }, {
        texture: !0,
        title: "Rouge gourmand 5",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .87,
                g: .15,
                b: .28
            }
        }
    }, {
        texture: !0,
        title: "Rouge gourmand 6",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .99,
                g: .76,
                b: .76
            }
        }
    }, {
        texture: !0,
        title: "Rouge-rouge 1",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .4,
                g: .12,
                b: .12
            }
        }
    }, {
        texture: !0,
        title: "Rouge-rouge 2",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .59,
                g: .06,
                b: .14
            }
        }
    }, {
        texture: !0,
        title: "Rouge-rouge 3",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .65,
                g: 0,
                b: .11
            }
        }
    }, {
        texture: !0,
        title: "Rouge-rouge 4",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .85,
                g: .07,
                b: .09
            }
        }
    }, {
        texture: !0,
        title: "Rouge-rouge 5",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .91,
                g: .16,
                b: .19
            }
        }
    }, {
        texture: !0,
        title: "Rouge-rouge 6",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .99,
                g: .88,
                b: .84
            }
        }
    }, {
        texture: !0,
        title: "Rouge corail 1",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .55,
                g: .12,
                b: .13
            }
        }
    }, {
        texture: !0,
        title: "Rouge corail 2",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .69,
                g: .16,
                b: .21
            }
        }
    }, {
        texture: !0,
        title: "Rouge corail 3",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .74,
                g: .15,
                b: .16
            }
        }
    }, {
        texture: !0,
        title: "Rouge corail 4",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .87,
                g: .24,
                b: .25
            }
        }
    }, {
        texture: !0,
        title: "Rouge corail 5",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .92,
                g: .26,
                b: .19
            }
        }
    }, {
        texture: !0,
        title: "Rouge corail 6",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: 1,
                g: .54,
                b: .45
            }
        }
    }, {
        texture: !0,
        title: "Orange vitaminé 1",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .69,
                g: .21,
                b: .13
            }
        }
    }, {
        texture: !0,
        title: "Orange vitaminé 2",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .82,
                g: .18,
                b: .09
            }
        }
    }, {
        texture: !0,
        title: "Orange vitaminé 3",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: 1,
                g: .23,
                b: .11
            }
        }
    }, {
        texture: !0,
        title: "Orange vitaminé 4",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: 1,
                g: .31,
                b: .16
            }
        }
    }, {
        texture: !0,
        title: "Orange vitaminé 5",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: 1,
                g: .38,
                b: .29
            }
        }
    }, {
        texture: !0,
        title: "Orange vitaminé 6",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: 1,
                g: .81,
                b: .69
            }
        }
    }, {
        texture: !0,
        title: "Orange fusion 1",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .95,
                g: .24,
                b: .07
            }
        }
    }, {
        texture: !0,
        title: "Orange fusion 2",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .81,
                g: .43,
                b: .29
            }
        }
    }, {
        texture: !0,
        title: "Orange fusion 3",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .97,
                g: .37,
                b: .11
            }
        }
    }, {
        texture: !0,
        title: "Orange fusion 4",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: 1,
                g: .39,
                b: .15
            }
        }
    }, {
        texture: !0,
        title: "Orange fusion 5",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: 1,
                g: .55,
                b: .28
            }
        }
    }, {
        texture: !0,
        title: "Orange fusion 6",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: 1,
                g: .65,
                b: .42
            }
        }
    }, {
        texture: !0,
        title: "Orange-orange 1",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .62,
                g: .29,
                b: .11
            }
        }
    }, {
        texture: !0,
        title: "Orange-orange 2",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .76,
                g: .29,
                b: .07
            }
        }
    }, {
        texture: !0,
        title: "Orange-orange 3",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .87,
                g: .38,
                b: .09
            }
        }
    }, {
        texture: !0,
        title: "Orange-orange 4",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: 1,
                g: .45,
                b: .04
            }
        }
    }, {
        texture: !0,
        title: "Orange-orange 5",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: 1,
                g: .56,
                b: .12
            }
        }
    }, {
        texture: !0,
        title: "Orange-orange 6",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: 1,
                g: .74,
                b: .41
            }
        }
    }, {
        texture: !0,
        title: "Orange doré 1",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .73,
                g: .33,
                b: .06
            }
        }
    }, {
        texture: !0,
        title: "Orange doré 2",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .84,
                g: .45,
                b: 0
            }
        }
    }, {
        texture: !0,
        title: "Orange doré 3",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .99,
                g: .48,
                b: .07
            }
        }
    }, {
        texture: !0,
        title: "Orange doré 4",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: 1,
                g: .56,
                b: .15
            }
        }
    }, {
        texture: !0,
        title: "Orange doré 5",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: 1,
                g: .56,
                b: 0
            }
        }
    }, {
        texture: !0,
        title: "Orange doré 6",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: 1,
                g: .82,
                b: .51
            }
        }
    }, {
        texture: !0,
        title: "Jaune solaire 1",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .96,
                g: .52,
                b: .21
            }
        }
    }, {
        texture: !0,
        title: "Jaune solaire 2",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .8,
                g: .54,
                b: .16
            }
        }
    }, {
        texture: !0,
        title: "Jaune solaire 3",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: 1,
                g: .63,
                b: 0
            }
        }
    }, {
        texture: !0,
        title: "Jaune solaire 4",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: 1,
                g: .66,
                b: .22
            }
        }
    }, {
        texture: !0,
        title: "Jaune solaire 5",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: 1,
                g: .74,
                b: .29
            }
        }
    }, {
        texture: !0,
        title: "Jaune solaire 6",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: 1,
                g: .89,
                b: .61
            }
        }
    }, {
        texture: !0,
        title: "Jaune pépite 1",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .67,
                g: .46,
                b: .19
            }
        }
    }, {
        texture: !0,
        title: "Jaune pépite 2",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .77,
                g: .6,
                b: .34
            }
        }
    }, {
        texture: !0,
        title: "Jaune pépite 3",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .92,
                g: .62,
                b: 0
            }
        }
    }, {
        texture: !0,
        title: "Jaune pépite 4",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: 1,
                g: .73,
                b: .2
            }
        }
    }, {
        texture: !0,
        title: "Jaune pépite 5",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: 1,
                g: .78,
                b: .38
            }
        }
    }, {
        texture: !0,
        title: "Jaune pépite 6",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .95,
                g: .88,
                b: .69
            }
        }
    }, {
        texture: !0,
        title: "Jaune louxor 1",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .77,
                g: .55,
                b: .08
            }
        }
    }, {
        texture: !0,
        title: "Jaune louxor 2",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: 1,
                g: .72,
                b: 0
            }
        }
    }, {
        texture: !0,
        title: "Jaune louxor 3",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .94,
                g: .72,
                b: 0
            }
        }
    }, {
        texture: !0,
        title: "Jaune louxor 4",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: 1,
                g: .8,
                b: .19
            }
        }
    }, {
        texture: !0,
        title: "Jaune louxor 5",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: 1,
                g: .9,
                b: .4
            }
        }
    }, {
        texture: !0,
        title: "Jaune louxor 6",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .98,
                g: .86,
                b: .48
            }
        }
    }, {
        texture: !0,
        title: "Jaune-jaune 1",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .56,
                g: .4,
                b: .12
            }
        }
    }, {
        texture: !0,
        title: "Jaune-jaune 2",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .83,
                g: .68,
                b: 0
            }
        }
    }, {
        texture: !0,
        title: "Jaune-jaune 3",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .93,
                g: .69,
                b: 0
            }
        }
    }, {
        texture: !0,
        title: "Jaune-jaune 4",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .94,
                g: .73,
                b: 0
            }
        }
    }, {
        texture: !0,
        title: "Jaune-jaune 5",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .96,
                g: .87,
                b: .32
            }
        }
    }, {
        texture: !0,
        title: "Jaune-jaune 6",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .94,
                g: .91,
                b: .64
            }
        }
    }, {
        texture: !0,
        title: "Jaune anis 1",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .55,
                g: .47,
                b: .14
            }
        }
    }, {
        texture: !0,
        title: "Jaune anis 2",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .71,
                g: .62,
                b: .07
            }
        }
    }, {
        texture: !0,
        title: "Jaune anis 3",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .76,
                g: .81,
                b: 0
            }
        }
    }, {
        texture: !0,
        title: "Jaune anis 4",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .82,
                g: .78,
                b: 0
            }
        }
    }, {
        texture: !0,
        title: "Jaune anis 5",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .91,
                g: .79,
                b: .09
            }
        }
    }, {
        texture: !0,
        title: "Jaune anis 6",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .93,
                g: .91,
                b: .4
            }
        }
    }, {
        texture: !0,
        title: "Vert botanique 1",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .4,
                g: .35,
                b: .23
            }
        }
    }, {
        texture: !0,
        title: "Vert botanique 2",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .48,
                g: .49,
                b: .11
            }
        }
    }, {
        texture: !0,
        title: "Vert botanique 3",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .6,
                g: .58,
                b: 0
            }
        }
    }, {
        texture: !0,
        title: "Vert botanique 4",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .64,
                g: .65,
                b: .21
            }
        }
    }, {
        texture: !0,
        title: "Vert botanique 5",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .71,
                g: .7,
                b: .32
            }
        }
    }, {
        texture: !0,
        title: "Vert botanique 6",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .82,
                g: .78,
                b: .44
            }
        }
    }, {
        texture: !0,
        title: "Vert kaki 1",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .34,
                g: .38,
                b: .25
            }
        }
    }, {
        texture: !0,
        title: "Vert kaki 2",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .45,
                g: .47,
                b: .31
            }
        }
    }, {
        texture: !0,
        title: "Vert kaki 3",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .58,
                g: .58,
                b: .36
            }
        }
    }, {
        texture: !0,
        title: "Vert kaki 4",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .58,
                g: .59,
                b: .31
            }
        }
    }, {
        texture: !0,
        title: "Vert kaki 5",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .67,
                g: .72,
                b: .4
            }
        }
    }, {
        texture: !0,
        title: "Vert kaki 6",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .75,
                g: .78,
                b: .46
            }
        }
    }, {
        texture: !0,
        title: "Vert pistache 1",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .21,
                g: .35,
                b: .19
            }
        }
    }, {
        texture: !0,
        title: "Vert pistache 2",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .32,
                g: .39,
                b: .21
            }
        }
    }, {
        texture: !0,
        title: "Vert pistache 3",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .43,
                g: .62,
                b: 0
            }
        }
    }, {
        texture: !0,
        title: "Vert pistache 4",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .59,
                g: .67,
                b: .13
            }
        }
    }, {
        texture: !0,
        title: "Vert pistache 5",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .72,
                g: .81,
                b: .36
            }
        }
    }, {
        texture: !0,
        title: "Vert pistache 6",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .81,
                g: .89,
                b: .35
            }
        }
    }, {
        texture: !0,
        title: "Vert-vert 1",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .15,
                g: .23,
                b: .17
            }
        }
    }, {
        texture: !0,
        title: "Vert-vert 2",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .33,
                g: .46,
                b: .18
            }
        }
    }, {
        texture: !0,
        title: "Vert-vert 3",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .33,
                g: .62,
                b: .21
            }
        }
    }, {
        texture: !0,
        title: "Vert-vert 4",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .34,
                g: .69,
                b: .13
            }
        }
    }, {
        texture: !0,
        title: "Vert-vert 5",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .56,
                g: .78,
                b: .25
            }
        }
    }, {
        texture: !0,
        title: "Vert-vert 6",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .78,
                g: .84,
                b: .61
            }
        }
    }, {
        texture: !0,
        title: "Vert lagon 1",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: 0,
                g: .29,
                b: .24
            }
        }
    }, {
        texture: !0,
        title: "Vert lagon 2",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .13,
                g: .44,
                b: .33
            }
        }
    }, {
        texture: !0,
        title: "Vert lagon 3",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: 0,
                g: .58,
                b: .45
            }
        }
    }, {
        texture: !0,
        title: "Vert lagon 4",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: 0,
                g: .63,
                b: .55
            }
        }
    }, {
        texture: !0,
        title: "Vert lagon 5",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .22,
                g: .69,
                b: .64
            }
        }
    }, {
        texture: !0,
        title: "Vert lagon 6",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .52,
                g: .83,
                b: .81
            }
        }
    }, {
        texture: !0,
        title: "Vert cèdre 1",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: 0,
                g: .13,
                b: .12
            }
        }
    }, {
        texture: !0,
        title: "Vert cèdre 2",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .23,
                g: .33,
                b: .3
            }
        }
    }, {
        texture: !0,
        title: "Vert cèdre 3",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .3,
                g: .47,
                b: .36
            }
        }
    }, {
        texture: !0,
        title: "Vert cèdre 4",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .42,
                g: .55,
                b: .47
            }
        }
    }, {
        texture: !0,
        title: "Vert cèdre 5",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .56,
                g: .71,
                b: .69
            }
        }
    }, {
        texture: !0,
        title: "Vert cèdre 6",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .71,
                g: .82,
                b: .73
            }
        }
    }, {
        texture: !0,
        title: "Bleu baltique 1",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .18,
                g: .33,
                b: .41
            }
        }
    }, {
        texture: !0,
        title: "Bleu baltique 2",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .25,
                g: .46,
                b: .54
            }
        }
    }, {
        texture: !0,
        title: "Bleu baltique 3",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .36,
                g: .56,
                b: .65
            }
        }
    }, {
        texture: !0,
        title: "Bleu baltique 4",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .33,
                g: .64,
                b: .66
            }
        }
    }, {
        texture: !0,
        title: "Bleu baltique 5",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .49,
                g: .64,
                b: .64
            }
        }
    }, {
        texture: !0,
        title: "Bleu baltique 6",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .7,
                g: .78,
                b: .78
            }
        }
    }, {
        texture: !0,
        title: "Bleu atoll 1",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: 0,
                g: .31,
                b: .38
            }
        }
    }, {
        texture: !0,
        title: "Bleu atoll 2",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: 0,
                g: .46,
                b: .5
            }
        }
    }, {
        texture: !0,
        title: "Bleu atoll 3",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .13,
                g: .55,
                b: .6
            }
        }
    }, {
        texture: !0,
        title: "Bleu atoll 4",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: 0,
                g: .62,
                b: .71
            }
        }
    }, {
        texture: !0,
        title: "Bleu atoll 5",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .19,
                g: .76,
                b: .78
            }
        }
    }, {
        texture: !0,
        title: "Bleu atoll 6",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .51,
                g: .73,
                b: .74
            }
        }
    }, {
        texture: !0,
        title: "Bleu turquoise 1",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: 0,
                g: .2,
                b: .3
            }
        }
    }, {
        texture: !0,
        title: "Bleu turquoise 2",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: 0,
                g: .38,
                b: .53
            }
        }
    }, {
        texture: !0,
        title: "Bleu turquoise 3",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: 0,
                g: .48,
                b: .63
            }
        }
    }, {
        texture: !0,
        title: "Bleu turquoise 4",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .13,
                g: .62,
                b: .71
            }
        }
    }, {
        texture: !0,
        title: "Bleu turquoise 5",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .34,
                g: .65,
                b: .71
            }
        }
    }, {
        texture: !0,
        title: "Bleu turquoise 6",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .56,
                g: .81,
                b: .84
            }
        }
    }, {
        texture: !0,
        title: "Bleu cyclades 1",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: 0,
                g: .33,
                b: .53
            }
        }
    }, {
        texture: !0,
        title: "Bleu cyclades 2",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: 0,
                g: .32,
                b: .57
            }
        }
    }, {
        texture: !0,
        title: "Bleu cyclades 3",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: 0,
                g: .49,
                b: .75
            }
        }
    }, {
        texture: !0,
        title: "Bleu cyclades 4",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .18,
                g: .5,
                b: .7
            }
        }
    }, {
        texture: !0,
        title: "Bleu cyclades 5",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .29,
                g: .6,
                b: .78
            }
        }
    }, {
        texture: !0,
        title: "Bleu cyclades 6",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .48,
                g: .76,
                b: .89
            }
        }
    }, {
        texture: !0,
        title: "Bleu-bleu 1",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: 0,
                g: .14,
                b: .36
            }
        }
    }, {
        texture: !0,
        title: "Bleu-bleu 2",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: 0,
                g: .21,
                b: .5
            }
        }
    }, {
        texture: !0,
        title: "Bleu-bleu 3",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .14,
                g: .38,
                b: .66
            }
        }
    }, {
        texture: !0,
        title: "Bleu-bleu 4",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .29,
                g: .52,
                b: .78
            }
        }
    }, {
        texture: !0,
        title: "Bleu-bleu 5",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .4,
                g: .57,
                b: .76
            }
        }
    }, {
        texture: !0,
        title: "Bleu-bleu 6",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .53,
                g: .72,
                b: .87
            }
        }
    }, {
        texture: !0,
        title: "Bleu orageux 1",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .06,
                g: .11,
                b: .25
            }
        }
    }, {
        texture: !0,
        title: "Bleu orageux 2",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .24,
                g: .27,
                b: .36
            }
        }
    }, {
        texture: !0,
        title: "Bleu orageux 3",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .19,
                g: .25,
                b: .56
            }
        }
    }, {
        texture: !0,
        title: "Bleu orageux 4",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .25,
                g: .31,
                b: .57
            }
        }
    }, {
        texture: !0,
        title: "Bleu orageux 5",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .53,
                g: .63,
                b: .78
            }
        }
    }, {
        texture: !0,
        title: "Bleu orageux 6",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .62,
                g: .69,
                b: .8
            }
        }
    }, {
        texture: !0,
        title: "Violet-violet 1",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .22,
                g: .19,
                b: .28
            }
        }
    }, {
        texture: !0,
        title: "Violet-violet 2",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .29,
                g: .22,
                b: .36
            }
        }
    }, {
        texture: !0,
        title: "Violet-violet 3",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .4,
                g: .18,
                b: .44
            }
        }
    }, {
        texture: !0,
        title: "Violet-violet 4",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .5,
                g: .32,
                b: .57
            }
        }
    }, {
        texture: !0,
        title: "Violet-violet 5",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .69,
                g: .49,
                b: .73
            }
        }
    }, {
        texture: !0,
        title: "Violet-violet 6",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .77,
                g: .71,
                b: .85
            }
        }
    }, {
        texture: !0,
        title: "Violet tulipe 1",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .24,
                g: .17,
                b: .25
            }
        }
    }, {
        texture: !0,
        title: "Violet tulipe 2",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .37,
                g: .25,
                b: .36
            }
        }
    }, {
        texture: !0,
        title: "Violet tulipe 3",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .48,
                g: .18,
                b: .41
            }
        }
    }, {
        texture: !0,
        title: "Violet tulipe 4",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .62,
                g: .29,
                b: .59
            }
        }
    }, {
        texture: !0,
        title: "Violet tulipe 5",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .73,
                g: .47,
                b: .68
            }
        }
    }, {
        texture: !0,
        title: "Violet tulipe 6",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .81,
                g: .7,
                b: .82
            }
        }
    }, {
        texture: !0,
        title: "Violet aubergine 1",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .22,
                g: .11,
                b: .16
            }
        }
    }, {
        texture: !0,
        title: "Violet aubergine 2",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .37,
                g: .2,
                b: .33
            }
        }
    }, {
        texture: !0,
        title: "Violet aubergine 3",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .48,
                g: .35,
                b: .4
            }
        }
    }, {
        texture: !0,
        title: "Violet aubergine 4",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .55,
                g: .43,
                b: .49
            }
        }
    }, {
        texture: !0,
        title: "Violet aubergine 5",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .69,
                g: .58,
                b: .64
            }
        }
    }, {
        texture: !0,
        title: "Violet aubergine 6",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .72,
                g: .65,
                b: .71
            }
        }
    }, {
        texture: !0,
        title: "Violet figue 1",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .35,
                g: .14,
                b: .22
            }
        }
    }, {
        texture: !0,
        title: "Violet figue 2",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .46,
                g: .18,
                b: .33
            }
        }
    }, {
        texture: !0,
        title: "Violet figue 3",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .47,
                g: .13,
                b: .31
            }
        }
    }, {
        texture: !0,
        title: "Violet figue 4",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .52,
                g: .3,
                b: .39
            }
        }
    }, {
        texture: !0,
        title: "Violet figue 5",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .62,
                g: .4,
                b: .49
            }
        }
    }, {
        texture: !0,
        title: "Violet figue 6",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .86,
                g: .62,
                b: .77
            }
        }
    }, {
        texture: !0,
        title: "Rose antique 1",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .29,
                g: .13,
                b: .16
            }
        }
    }, {
        texture: !0,
        title: "Rose antique 2",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .42,
                g: .15,
                b: .22
            }
        }
    }, {
        texture: !0,
        title: "Rose antique 3",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .59,
                g: .21,
                b: .36
            }
        }
    }, {
        texture: !0,
        title: "Rose antique 4",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .74,
                g: .45,
                b: .55
            }
        }
    }, {
        texture: !0,
        title: "Rose antique 5",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .82,
                g: .64,
                b: .64
            }
        }
    }, {
        texture: !0,
        title: "Rose antique 6",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .95,
                g: .84,
                b: .84
            }
        }
    }, {
        texture: !0,
        title: "Rose-rose 1",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .49,
                g: .09,
                b: .31
            }
        }
    }, {
        texture: !0,
        title: "Rose-rose 2",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .67,
                g: .11,
                b: .38
            }
        }
    }, {
        texture: !0,
        title: "Rose-rose 3",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .69,
                g: .28,
                b: .51
            }
        }
    }, {
        texture: !0,
        title: "Rose-rose 4",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .82,
                g: .3,
                b: .6
            }
        }
    }, {
        texture: !0,
        title: "Rose-rose 5",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .92,
                g: .44,
                b: .69
            }
        }
    }, {
        texture: !0,
        title: "Rose-rose 6",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .95,
                g: .69,
                b: .8
            }
        }
    }, {
        texture: !0,
        title: "Rose shocking 1",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .46,
                g: .07,
                b: .2
            }
        }
    }, {
        texture: !0,
        title: "Rose shocking 2",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .75,
                g: .18,
                b: .37
            }
        }
    }, {
        texture: !0,
        title: "Rose shocking 3",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .75,
                g: .12,
                b: .36
            }
        }
    }, {
        texture: !0,
        title: "Rose shocking 4",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .89,
                g: .25,
                b: .42
            }
        }
    }, {
        texture: !0,
        title: "Rose shocking 5",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .97,
                g: .53,
                b: .71
            }
        }
    }, {
        texture: !0,
        title: "Rose shocking 6",
        icon: "",
        action: "wnp.engine3D.paint",
        items: [],
        params: {
            materialType: "luxens",
            color: {
                r: .95,
                g: .71,
                b: .76
            }
        }
    }];
    return t
}();