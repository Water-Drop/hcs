/**
 * @module hcsdesign
 * @namespace hcs
 * @submodule Programmable
 */

var hcs = window.hcs || {};
hcs.Programmable = hcs.Programmable || {};
hcs.Programmable.Bed = (function () {
    /**
     * Define a basic 3D object (draw dynamically)
     *
     * @constructor
     * @class Bed
     * @param {hcs.Core}
     * @param {Object}
     */
    var bed = function (engine, structure, params) {
        hcs.Programmable.call(this, engine, structure, params);
        this.objectName = "Bed";

        structure.magnetismCollider = hcs.Constants.MAGNETISM.DEFAULT;
        structure.preferredYAngle = Math.PI;
    }

    for (var i in hcs.Programmable.prototype) {
        bed.prototype[i] = hcs.Programmable.prototype[i];
    }

    bed.prototype.localizeAndSortParams = function() {
        var params = {};

        params.basic = {
            "mattress" : _("床垫"),
            "mattress.width" : _("床垫宽度"),
            "mattress.length" : _("床垫长度"),
            "mattress.thickness" : _("床垫厚度"),
        };

        params.advanced = {
            "mattress.elevation" : _("床垫距地面高度"),
            "springbed" : _("弹簧床垫"),
            "springbed.elevation" : _("弹簧床垫距地面高度"),
            "springbed.thickness" : _("弹簧床垫距地面厚度"),
            "springbed.offsetWidth" : _("弹簧床垫相对宽度"),
            "frontSide" : _("床头"),
            "frontSide.height" : _("床头高度"),
            "backSide.height" : _("床尾高度"),
            "frontSide.thickness" : _("床头厚度"),
            "backSide.thickness" : _("床尾厚度"),
            "backSide" : _("床尾"),
            "foots" : _("床脚"),
            "foots.radius" : _("床脚半径"),
            "foots.width" : _("床脚宽度"),
            "foots.height" : _("床脚高度"),
        };

        return params;
    }

    bed.prototype.getDefaultParams = function() {
        var params = {
            mattress : {
                width : 160,
                length : 200,
                thickness : 20,
                elevation : 0,
            },
            springbed: {
                offsetWidth : 10,
                elevation : 5,
                thickness: 10,
            },
            frontSide: {
                height : 60,
                thickness : 6,
            }, 
            backSide: {
                height : 40,
                thickness : 6,
            },
            foots: {
                radius : 4,
                width : 3,
                height: 10,
            }
        };

        return params;
    };

    bed.prototype.getDefaultMaterials = function (scene) {
        var materials = {};
        materials['structure'] = new hcs.WhiteMaterial("foots", scene, {factor : 0.6});
        materials['foots'] =  new hcs.MetalMaterial("structure", scene);
        materials['mattress'] = new hcs.MattMaterial("mattress", scene, {
            diffuseTexture : hcs.Assets.bedSheetsTextures["diffuse"],
            bumpTexture : hcs.Assets.bedSheetsTextures["normal"],
            specularTexture : hcs.Assets.bedSheetsTextures["specular"]
        });
   
        materials['cushion'] = new hcs.MattMaterial("cushion", scene, { diffuseTexture : hcs.Assets.cushionTexture });

        return materials;
    };

    bed.prototype.getFoots = function(object, scene) {
       
        var height = this.params.foots.height+this.params.springbed.elevation;
        
        var footA = BABYLON.Mesh.CreateCylinder("foots", height, this.params.foots.width,  this.params.foots.width, this.params.foots.radius, 1, true, scene);   
        footA.rotation.y = Math.PI/4;

        var footB = footA.clone();
        var footC = footA.clone();
        var footD = footA.clone();

        var offset = 2+this.params.foots.width;
        var springbedWidth = this.params.mattress.width + (+this.params.springbed.offsetWidth)*2;
        

        footA.position.x = springbedWidth/2 - offset;
        footB.position.x = springbedWidth/2 - offset;
        footC.position.x = -springbedWidth/2 + offset;
        footD.position.x = -springbedWidth/2 + offset;

        footA.position.z = this.params.mattress.length/2 - offset;
        footB.position.z = -this.params.mattress.length/2 + offset;
        footC.position.z = -this.params.mattress.length/2 + offset;
        footD.position.z = this.params.mattress.length/2 - offset;

        var bottom = BABYLON.Mesh.mergeMeshesRec("foots", [footA, footB, footC, footD], scene);

        bottom.position.y = height/2;
        bottom.parent = object;
    }

    bed.prototype.getObject3D = function(scene) {
        var object = new BABYLON.Mesh("object", scene);
        object.isVisible = false;

        var object2 = new BABYLON.Mesh("object2", scene);
        object2.isVisible = false;
         

        var main = new BABYLON.Mesh("main", scene);
        main.isVisible = false;


            var radius = 6;
            var springbedWidth = this.params.mattress.width + (+this.params.springbed.offsetWidth)*2;
            var thickness = this.params.springbed.offsetWidth;
            var springbed = GeometryHelper.createCadre(springbedWidth, this.params.mattress.length + thickness*2 + radius*2, thickness, this.params.springbed.thickness, [0,1,1,0], undefined, scene);
            springbed.name = "structure";
            springbed.position.y = this.params.springbed.thickness/2 + this.params.springbed.elevation;
            springbed.rotation.x = Math.PI/2;
            if (this.params.springbed.thickness > 0) {
                springbed.parent = main;
            }
           

            var mattress = GeometryHelper.createPillow("mattress", 10, 4, new BABYLON.Vector3(0, 0, 0), this.params.mattress.width, this.params.mattress.length, this.params.mattress.thickness , 0, 0, scene, this.params.mattress.width/2-5, this.params.mattress.length/2-5)
            mattress.position.y = this.params.springbed.elevation + this.params.mattress.elevation + (this.params.mattress.thickness + radius*2)/2;
            mattress.rotation.x = Math.PI/2;
            mattress.parent = main;
            GeometryHelper.giftWraper( mattress , null , true )

            var front = BABYLON.Mesh.CreateBloc("structure", springbedWidth, this.params.frontSide.height, this.params.frontSide.thickness, scene);
            front.position.z = - this.params.mattress.length/2 - this.params.frontSide.thickness/2 - radius/2;
            front.position.y = this.params.frontSide.height/2;
            front.parent = main;
            GeometryHelper.giftWraper( front );

            var back = BABYLON.Mesh.CreateBloc("structure", springbedWidth, this.params.backSide.height, this.params.backSide.thickness, scene);
            back.position.z =  this.params.mattress.length/2 + this.params.backSide.thickness/2 + radius/2;
            back.position.y = this.params.backSide.height/2;
            back.parent = main;
            GeometryHelper.giftWraper( back );
            
            var cushionWidth = 50,
                cushionDepth = 40,
                cushionHeight = 10;

            
            var cushion1 = GeometryHelper.createPillow("cushion", 10, 4, new BABYLON.Vector3(0, 0, 0), cushionWidth, cushionDepth, cushionHeight, 2, 2, scene);
            
            if (this.params.mattress.width >= 140) {
                cushion1.rotation.x = Math.PI/2;
                cushion1.position.x = 0;
                cushion1.position.y = mattress.position.y + this.params.mattress.thickness/2 + radius/2;
                cushion1.position.z = - this.params.mattress.length/2 + cushionDepth;
                var cushion2 = cushion1.clone("cushion");
                cushion2.position.x = -this.params.mattress.width/4;
                cushion1.position.x = this.params.mattress.width/4;
                cushion1.parent = main;
                cushion2.parent = main;
            } else {
                cushion1.rotation.x = Math.PI/2;
                cushion1.position.x = 0;
                cushion1.position.y = mattress.position.y + this.params.mattress.thickness/2 + radius/2;
                cushion1.position.z = - this.params.mattress.length/2 + cushionDepth;
                cushion1.parent = main;
            }
         


        main.position.y = this.params.foots.height;
        main.parent = object2;

        if (this.params.foots.height > 0) {
            this.getFoots(object2, scene);
        }


        // TODO : shadow
        //this.applyShadow(object);
        object2.rotation.y = Math.PI;
        object2.parent = object;

        return object;
    }


    return bed;
})();