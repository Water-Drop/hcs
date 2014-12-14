var OutsideComponent3D = function() {
    var t = function(t) {
        BaseComponent3D.call(this, t, "OutsideComponent3D")
    };
    t.prototype = new BaseComponent3D, t.prototype.initialize = function() {
        var t = {
                title: _("地面"),
                id: "ground",
                items: e,
                layout: "layout-table-60"
            },
            i = {
                title: _("天空"),
                id: "sky",
                items: n,
                layout: "layout-table-60"
            },
            o = {
                title: _("外界环境"),
                id: "outside",
                items: [t, i],
                layout: "layout-list"
            };
        ujs.notify("hcs.menu.main.add", {
            item: o,
            menuPath: /*"decorate3D",*/ "furnishing3D",
            position: 1e3
        })
    };
    var e = [{
            title: "Grid (default)",
            texture: !0,
            icon: "",
            action: "hcs.engine3D.changeGround",
            id: "0",
            items: [],
            params: {
                materialType: "hcs.MattMaterial",
                url: "textures/textureset/ground/ground01.jpg",
                id: "0"
            }
        }, {
            title: "Macadam",
            texture: !0,
            icon: "",
            action: "hcs.engine3D.changeGround",
            id: "1",
            items: [],
            params: {
                materialType: "hcs.MattMaterial",
                url: "textures/textureset/ground/ground02.jpg",
                id: "1"
            }
        }, {
            title: "Soil",
            texture: !0,
            icon: "",
            action: "hcs.engine3D.changeGround",
            id: "2",
            items: [],
            params: {
                materialType: "hcs.MattMaterial",
                url: "textures/textureset/ground/ground03.jpg",
                id: "2"
            }
        }, {
            title: "Grass",
            texture: !0,
            icon: "",
            action: "hcs.engine3D.changeGround",
            id: "3",
            items: [],
            params: {
                materialType: "hcs.MattMaterial",
                url: "textures/textureset/ground/ground04.jpg",
                id: "3"
            }
        }, {
            title: "Grass 2",
            texture: !0,
            icon: "",
            action: "hcs.engine3D.changeGround",
            id: "4",
            items: [],
            params: {
                materialType: "hcs.MattMaterial",
                url: "textures/textureset/ground/ground05.jpg",
                id: "4"
            }
        }, {
            title: "Grass 3",
            texture: !0,
            icon: "",
            action: "hcs.engine3D.changeGround",
            id: "5",
            items: [],
            params: {
                materialType: "hcs.MattMaterial",
                url: "textures/textureset/ground/ground06.jpg"
            }
        }, {
            title: "Grass 4",
            texture: !0,
            icon: "",
            action: "hcs.engine3D.changeGround",
            id: "6",
            items: [],
            params: {
                materialType: "hcs.MattMaterial",
                url: "textures/textureset/ground/ground07.jpg"
            }
        }, {
            title: "Grass 5",
            texture: !0,
            icon: "",
            action: "hcs.engine3D.changeGround",
            id: "7",
            items: [],
            params: {
                materialType: "hcs.MattMaterial",
                url: "textures/textureset/ground/ground08.jpg"
            }
        }, {
            title: "Grass 6",
            texture: !0,
            icon: "",
            action: "hcs.engine3D.changeGround",
            id: "8",
            items: [],
            params: {
                materialType: "hcs.MattMaterial",
                url: "textures/textureset/ground/ground09.jpg"
            }
        }, {
            title: "Soil",
            texture: !0,
            icon: "",
            action: "hcs.engine3D.changeGround",
            id: "9",
            items: [],
            params: {
                materialType: "hcs.MattMaterial",
                url: "textures/textureset/ground/ground10.jpg"
            }
        }, {
            title: "Gray gravel",
            texture: !0,
            icon: "",
            action: "hcs.engine3D.changeGround",
            id: "10",
            items: [],
            params: {
                materialType: "hcs.MattMaterial",
                url: "textures/textureset/ground/ground11.jpg"
            }
        }, {
            title: "Brick",
            texture: !0,
            icon: "",
            action: "hcs.engine3D.changeGround",
            id: "11",
            items: [],
            params: {
                materialType: "hcs.MattMaterial",
                url: "textures/textureset/ground/ground12.jpg"
            }
        }, {
            title: "Brick 2",
            texture: !0,
            icon: "",
            action: "hcs.engine3D.changeGround",
            id: "12",
            items: [],
            params: {
                materialType: "hcs.MattMaterial",
                url: "textures/textureset/ground/ground13.jpg"
            }
        }, {
            title: "Brick 3",
            texture: !0,
            icon: "",
            action: "hcs.engine3D.changeGround",
            id: "13",
            items: [],
            params: {
                materialType: "hcs.MattMaterial",
                url: "textures/textureset/ground/ground14.jpg"
            }
        }, {
            title: "Brick 4",
            texture: !0,
            icon: "",
            action: "hcs.engine3D.changeGround",
            id: "14",
            items: [],
            params: {
                materialType: "hcs.MattMaterial",
                url: "textures/textureset/ground/ground15.jpg"
            }
        }],
        n = [{
            title: "Default sky",
            texture: !0,
            icon: "",
            action: "hcs.engine3D.changeSky",
            id: "0",
            items: [],
            params: {
                materialType: "lambert",
                url: "textures/textureset/sky/sky01.jpg"
            }
        }, {
            title: "Sky 1",
            texture: !0,
            icon: "",
            action: "hcs.engine3D.changeSky",
            id: "1",
            items: [],
            params: {
                materialType: "lambert",
                url: "textures/textureset/sky/sky02.jpg"
            }
        }, {
            title: "Sky 2",
            texture: !0,
            icon: "",
            action: "hcs.engine3D.changeSky",
            id: "2",
            items: [],
            params: {
                materialType: "lambert",
                url: "textures/textureset/sky/sky03.jpg"
            }
        }, {
            title: "Sky 3",
            texture: !0,
            icon: "",
            action: "hcs.engine3D.changeSky",
            id: "3",
            items: [],
            params: {
                materialType: "lambert",
                url: "textures/textureset/sky/sky04.jpg"
            }
        }];
    return t
}();