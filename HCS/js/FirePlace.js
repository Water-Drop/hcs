/**
 * @module Wanaplan
 * @namespace wnp
 * @submodule Programmable
 */

var wnp = window.wnp || {};
wnp.Programmable = wnp.Programmable || {};

wnp.Programmable.FirePlace = (function () {
    /**
     * Définit un objet 3D chaise construit procéduralement.
     *
     * @constructor
     * @class FirePlace
     * @param {wnp.Core} Le moteur principal.
     * @param {Object} Des paramètres de configuration.
     */
    var fireplace = function (engine, structure, params) {
        wnp.Programmable.call(this, engine, structure, params);
        this.objectName = "FirePlace";
        structure.magnetismCollider = wnp.Constants.MAGNETISM.DEFAULT;
        structure.preferredYAngle = Math.PI;
    };

    // heritage
    for (var i in wnp.Programmable.prototype) {
        fireplace.prototype[i] = wnp.Programmable.prototype[i];
    }

    fireplace.prototype.getDefaultParams = function() {

        var params = {

            border: {
                widthoffset : 12,
                depthoffset : 12,
                height : 75,
                offset : 5
            },

            height : 150,
            depth : 100,
            width : 150
        };

        return params;
    };

    fireplace.prototype.localizeAndSortParams = function() {
            var params = {};

            params.basic = {
                "height" : _("height"),
                "depth" : _("depth"),
                "width" : _("width"),

                "border" : _("border"),
                "border.widthoffset" : _("offset width"),
                "border.depthoffset" : _("offset depth"),
                "border.height" : _("height"),
                "border.offset" : _("offset"),

            }

            params.advanced = {
                
            }

        return params;
    };

    fireplace.prototype.getDefaultMaterials = function(scene) {
        var materials = {};
        
        //TODO
        materials['simple'] =  new wnp.PolishedMaterial("simple", scene, {
                diffuseTexture : wnp.Assets.firePlaceWood["diffuse"],
                bumpTexture : wnp.Assets.firePlaceWood["normal"]
        });

        materials['brick'] =  new wnp.PolishedMaterial("brick", scene, {
                diffuseTexture : wnp.Assets.firePlaceBrick2["diffuse"],
                bumpTexture : wnp.Assets.firePlaceBrick2["normal"]
        });

        materials['fire'] = new wnp.MattMaterial("fire", scene, {
                diffuseTexture : wnp.Assets.firePlaceFire["diffuse"]
        });

        return materials;
    };

    fireplace.prototype.getObject3D = function(scene) {
         
        var object = new BABYLON.Mesh("object", scene);
        object.isVisible  = false;

        var base = BABYLON.Mesh.CreateBloc("brick", this.params.width - this.params.border.widthoffset, this.params.height / 2, this.params.depth - this.params.border.depthoffset, scene);
        base.position = new BABYLON.Vector3(0,(this.params.height / 2) + (this.params.border.height / 2),(this.params.depth - this.params.border.depthoffset) / 2);
        GeometryHelper.giftWraper(base);
       
        var plate = BABYLON.Mesh.CreateBloc("simple", this.params.width, 15, this.params.depth, scene);
        // TODO : material
        // plate.material = materials["simple"];
        plate.position  = new BABYLON.Vector3(0,this.params.border.height + 7.5,this.params.depth/ 2);
        
        var back = BABYLON.Mesh.CreateBloc("brick", this.params.width - (this.params.border.widthoffset * 2) - (this.params.width / 16), this.params.border.height, 5, scene);
        back.position  = new BABYLON.Vector3(0,this.params.border.height/2, 2.5 );
        
        var strucPos = (this.params.width - (this.params.width / 8) - this.params.border.widthoffset) / 2;

        var structure1 = BABYLON.Mesh.CreateBloc("brick", this.params.width / 8, this.params.border.height, this.params.depth, scene);
        structure1.position  = new BABYLON.Vector3( strucPos,this.params.border.height/2,this.params.depth/ 2);
        GeometryHelper.giftWraper(structure1);
        var structure2 = BABYLON.Mesh.CreateBloc("brick", this.params.width / 8, this.params.border.height, this.params.depth, scene);
        structure2.position  = new BABYLON.Vector3(- strucPos,this.params.border.height/2,this.params.depth/ 2);
        GeometryHelper.giftWraper(structure2);

        
        var planelenght = Math.sqrt( ((this.params.width / 8) * (this.params.depth / 8)) * 2);
        var planerotat = Math.atan( (this.params.width / 8) / (this.params.depth / 8) );

        var plane1 = BABYLON.Mesh.CreatePlan("brick", planelenght, this.params.border.height, scene);
        plane1.position  = new BABYLON.Vector3( (this.params.width/2) - (this.params.width / 4.2),this.params.border.height/2,this.params.depth - (this.params.depth / 11))
        plane1.rotation.y -= 5*Math.PI/4;

        var plane2 = BABYLON.Mesh.CreatePlan("brick", planelenght, this.params.border.height, scene);
        plane2.position  = new BABYLON.Vector3( - (this.params.width/2) + (this.params.width / 4.2),this.params.border.height/2,this.params.depth - (this.params.depth / 11))
        plane2.rotation.y += 5*Math.PI/4;
        var plane3 = BABYLON.Mesh.CreatePlan("brick", this.params.width - this.params.border.widthoffset, planelenght, scene);
        plane3.position  = new BABYLON.Vector3( 0,this.params.border.height - (this.params.border.height / 17),this.params.depth - (this.params.depth / 11))
        plane3.rotation.z += Math.PI;
        plane3.rotation.x += 5*Math.PI/4;
       

        var brick = BABYLON.Mesh.mergeMeshesRec("brick", [base, back, structure1, structure2, plane1, plane2, plane3], scene);
        // TODO : material
        //brick.material = materials["brick"];
      

        var plane4 = BABYLON.Mesh.CreatePlan("fire", this.params.width - (this.params.border.widthoffset * 2) - (this.params.width / 16) - (planelenght * 0.75), this.params.border.height - (planelenght * 0.3), scene);
        // TODO : material
        //plane4.material = materials["fire"];
        plane4.position  = new BABYLON.Vector3(0,(this.params.border.height/2) - (planelenght * 0.15), this.params.depth - (this.params.depth / 5.5));

        plane4.rotation.y += Math.PI;

        brick.parent = object;
        plate.parent = object;
        plane4.parent = object;
        //object.position.y += 5;

        // TODO : shadow : this.applyShadow(object);

        var object2 = new BABYLON.Mesh("object", scene);
        object2.isVisible  = false;

        object.rotation.y = Math.PI;
        object.parent = object2;
        return object2;
    };

    return fireplace;
})();