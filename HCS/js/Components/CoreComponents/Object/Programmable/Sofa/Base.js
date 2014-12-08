/**
 * @module Wanaplan
 * @namespace wnp
 * @submodule Programmable
 */


var wnp = window.wnp || {};
wnp.Programmable = wnp.Programmable || {};

wnp.Programmable.Sofa.Base = (function() {
    var that;

    /**
     * Define a basic 3D object (draw dynamically)
     *
     * @constructor
     * @class Base
     * @param {wnp.Core}
     * @param {Object}
     */
    var Base = function (engine, structure, params) {
        wnp.Programmable.Sofa.call(this, engine, structure, params);
        that = this;
        structure.magnetismCollider = wnp.Constants.MAGNETISM.DEFAULT;
        structure.preferredYAngle = Math.PI;
    }

    if (typeof wnp.Programmable.Sofa != "undefined") {
        for (var i in wnp.Programmable.Sofa.prototype) {
            if (typeof Base.prototype[i] == 'undefined') {
                Base.prototype[i] = wnp.Programmable.Sofa.prototype[i];
            }
        }
    }


    Base.prototype.localizeAndSortParams = function() {
        var params = {};

        params.basic = {
            "width" : _("高度"),
            "nbCushion" : _("靠垫"),
            "depth" : _("长度"),
            "type" : _("类型")
        }

        params.advanced = {
            "armrest" : _("扶手"),
            "armrest.left" : _("left active"),
            "armrest.right" : _("right active"),
            "armrest.thickness" : _("thickness"),
            "armrest.height" : _("height"),
            "armrest.elevation" : _("elevation"),
            "back" : _("靠背"),
            "back.height" : _("height"),
            "back.thickness" : _("thickness"),
            "backCushion" : _("back cushions"),
            "backCushion.height" : _("back cushion height"),
            "backCushion.thickness" : _("back cushion thickness"),
            "foots" : _("沙发脚"),
            "foots.height" : _("height"),
            "foots.thickness" : _("thickness"),
            "seatCushion" : _("seat cushion"),
            "seatCushion.thickness" : _("thickness"),
            "bottom" : _("底部"),
            "bottom.thickness" : _("thickness"),
            "angle" : _("角度"),
            "angle.active" : _("active"),
            "angle.side" : _("side"),
            "angle.size" : _("size"),
        }

        return params;
    }

    Base.prototype.getParamType = function( name ){
        switch( name ){
            case "armrest.left" : 
            case "armrest.right" : 
            case "angle.active" : 
                return 'boolean';
 
            case "armrest.elevation" : 
                return { 
                    type:"number",
                }

            case "width" : 
            case "height" : 
            case "depth" : 
            case "back.height" : 
            case "back.thickness" :  
            case "foots.height" : 
            case "foots.thickness" : 
            case "armrest.thickness" : 
            case "armrest.height" : 
            case "backCushion.height" : 
            case "backCushion.thickness" : 
            case "seatCushion.thickness" : 
            case "bottom.thickness" : 
            case "angle.size" : 
                return { 
                    type:"number",
                    min:0
                }

            case "type" :
                return 'boolean';
            case "angle.side" : 
                return { 
                    type:"number",
                    min:0,
                    max:1,
                    round:1
                } 
        }
        return wnp.Programmable.prototype.getParamType.call( this , name );
    }

    Base.prototype.getDefaultParams = function() {
        var params = {
            width : 200,
            //height : 100,
            depth : 80,
            nbCushion : 3,
            type : false,
            armrest : {
                left :true,
                right : true,
                thickness : 20,
                height : 50,
                elevation : 0
            },
            back : {
                height : 60,
                thickness : 10
            },
            backCushion: {
                height : 40,
                thickness : 15
            },
            foots: {
                height : 10,
                thickness : 10
            },
            seatCushion : {
                thickness : 20,
            },
            bottom : {
                thickness : 10,
            },
            angle : {
                active : 0,
                side : 1,
                size : 40,
            }
        };

        return params;
    };

    Base.prototype.animate = function(object, target) {
        return;
    }

    Base.prototype.getObject3D = function(scene) {

        var object = new BABYLON.Mesh("object", scene);
        object.isVisible = false;

        var object2 = new BABYLON.Mesh("object2", scene);
        object2.isVisible = false;
         
        var that = this;

        var armature = new BABYLON.Mesh("armature", scene);
        armature.isVisible = false;

        // Normalisation de la taille du canap®¶
        var realWidth = this.params.width;
        realWidth = this.params.armrest.left ? realWidth - this.params.armrest.thickness - 2*3: realWidth;
        realWidth = this.params.armrest.right ? realWidth - this.params.armrest.thickness - 2*3 : realWidth;

        var bottom = BABYLON.Mesh.CreateBloc("global", realWidth, this.params.bottom.thickness, this.params.depth-10, scene);
        bottom.parent = armature;

        var back = BABYLON.Mesh.CreateBloc("global", realWidth, this.params.back.height, this.params.back.thickness, scene);
        back.position.y = (this.params.back.height - this.params.bottom.thickness )/ 2 ;
        back.position.z = - (this.params.depth + this.params.back.thickness) / 2;
        back.parent = armature;

        if (this.params.armrest.left) {
            if (this.params.type == false) {
                var leftArmrest = GeometryHelper.createRoundedBloc("global", 10, 10, 3, this.params.depth + this.params.back.thickness, this.params.armrest.thickness, this.params.armrest.height, scene);
                leftArmrest.rotation.x += Math.PI/2;
            } else {
                var leftArmrest = GeometryHelper.createPillow("global", 10, 4, new BABYLON.Vector3(0, 0, 0), this.params.depth + this.params.back.thickness, this.params.armrest.height, this.params.armrest.thickness + 10,0, 0, scene);
            }
            leftArmrest.rotation.y = Math.PI/2;
            leftArmrest.position.y = this.params.armrest.height/2 + this.params.armrest.elevation - 6;
            leftArmrest.position.x = - (realWidth + this.params.armrest.thickness) / 2 - 6;
            leftArmrest.position.z = - this.params.back.thickness + 3;
            leftArmrest.parent = armature;
        }

        if (this.params.armrest.right) {
            if (this.params.type == false) {
                var rightArmrest = GeometryHelper.createRoundedBloc("global", 10, 10, 3, this.params.depth + this.params.back.thickness, this.params.armrest.thickness, this.params.armrest.height, scene)
                rightArmrest.rotation.x += Math.PI/2;
            } else {
                var rightArmrest = GeometryHelper.createPillow("global", 10, 4, new BABYLON.Vector3(0, 0, 0), this.params.depth + this.params.back.thickness, this.params.armrest.height, this.params.armrest.thickness + 10,0, 0, scene);
            }
            rightArmrest.rotation.y = Math.PI/2;
            rightArmrest.position.y = this.params.armrest.height/2 + this.params.armrest.elevation -  6;// + 50;
            rightArmrest.position.x =   (realWidth + this.params.armrest.thickness) / 2 + 3 * this.params.nbCushion;
            rightArmrest.position.z = - this.params.back.thickness + 3;
            rightArmrest.parent = armature;
        }


        armature.position.y += this.params.foots.height;
        armature.parent = object2;

        var coussins = new BABYLON.Mesh("coussins", scene);
        coussins.isVisible = false;

        var nbCushion = this.params.nbCushion > 0 ? this.params.nbCushion : 1;
        var widthCushion = realWidth / nbCushion;
        var currentX = -realWidth/2 + (widthCushion-3)/2;

        for ( var i = 0; i < this.params.nbCushion; i ++ ) {

            
            var depth = this.params.depth;
            if (this.params.angle.active == 1) {
                if (i == 0 && this.params.angle.side === 1) {
                    depth = this.params.depth + this.params.angle.size;
                } else if (i == this.params.nbCushion-1 && this.params.angle.side !== 1) {
                    depth = this.params.depth + this.params.angle.size;
                } 
            }
            if (this.params.type == false) {
                var seatCushion = GeometryHelper.createRoundedBloc("global", 10, 10, 3, widthCushion-3, this.params.seatCushion.thickness, depth - 3, scene);
            } else {
                var seatCushion = GeometryHelper.createPillow("global", 10, 4, new BABYLON.Vector3(0, 0, 0), widthCushion , depth, this.params.seatCushion.thickness,  0, 0, scene, 5, 5);
                seatCushion.rotation.x = Math.PI/2;
            }
            // seatCushion.material = materials['global'];
            seatCushion.position.z = depth/2;
            seatCushion.position.x = currentX;
            GeometryHelper.giftWraper( seatCushion , null , true )
            seatCushion.parent = coussins;
      

            if (this.params.backCushion.height > 0) {
                if (this.params.type == false) {
                    var backCushion = GeometryHelper.createRoundedBloc("global", 10, 10, 3, widthCushion-0.1-3, this.params.backCushion.thickness, this.params.backCushion.height, scene);
                    backCushion.rotation.x += Math.PI/2;
                } else
                    var backCushion = GeometryHelper.createPillow("global", 10, 4, new BABYLON.Vector3(0, 0, 0), widthCushion , this.params.backCushion.height + 10, this.params.backCushion.thickness, 1, 2, scene);
                // TODO : material
                //backCushion.material = materials['global'];
                backCushion.position.y = this.params.backCushion.height/2 + this.params.seatCushion.thickness /2 + 5 ;
                backCushion.position.x = currentX;
                backCushion.position.z = 5;
                backCushion.rotation.x += -Math.PI/10;
                GeometryHelper.giftWraper( backCushion , null , true )
                backCushion.parent = coussins;
            }

            currentX += widthCushion+3;
        }
        coussins.position.y += this.params.foots.height + this.params.bottom.thickness/2 + this.params.seatCushion.thickness/2;
        coussins.position.z = - this.params.depth/2;
        coussins.parent = object2;

        if (this.params.foots.height > 0) {

            var footA = BABYLON.Mesh.CreateBloc("foot", this.params.foots.thickness,this.params.foots.height, this.params.foots.thickness, scene);
            var footB = footA.clone();
            var footC = footA.clone();
            var footD = footA.clone();
            
            var treshold = 15;
            var armrestTreshold = 0;
            if (this.params.armrest.left && this.params.armrest.right && this.params.armrest.elevation == 0) {
                armrestTreshold = this.params.armrest.thickness / 2 + treshold - 5;
            }

            footA.position.x = - realWidth/2 + treshold - armrestTreshold - 10;
            footA.position.z = - this.params.back.thickness + 3 - this.params.depth/2 + treshold;
            
            footB.position.x = - realWidth/2 + treshold - armrestTreshold - 10;
            footB.position.z =  - this.params.back.thickness + 3 + this.params.depth/2 - treshold;
            
            footC.position.x =  realWidth/2 - treshold + armrestTreshold + 10;
            footC.position.z = - this.params.back.thickness + 3 - this.params.depth/2 + treshold;
            
            footD.position.x =  realWidth/2 - treshold + armrestTreshold + 10;
            footD.position.z = - this.params.back.thickness + 3 + this.params.depth/2 - treshold;
            
            var foots = BABYLON.Mesh.mergeMeshesRec("foot", [footA, footB, footC, footD], scene);

            foots.position.y += this.params.foots.height / 2;

            // TODO : aterial
            //foots.material = materials['foots'];
            foots.parent = object2;
        }


        if (this.params.angle.active == 1) {
            var bottomA = BABYLON.Mesh.CreateBloc("global", widthCushion, this.params.bottom.thickness, this.params.angle.size, scene);
            // TODO : material
            //bottomA.material = materials['global'];
            bottomA.position.z = this.params.depth/2 + this.params.angle.size/2;
            var coef = this.params.angle.side == 1 ? -1 : 1;
            //bottomA.position.y += this.params.foots.height;
            bottomA.position.z -= 10;
            bottomA.position.x = coef * realWidth/2 - coef * (widthCushion/2 );
            bottomA.parent = armature;

            if (this.params.foots.height > 0) {
                var footE = BABYLON.Mesh.CreateBloc("foot", this.params.foots.thickness,this.params.foots.height, this.params.foots.thickness, scene);;
                var footF = footE.clone();

                footE.position.x =  bottomA.position.x + widthCushion/2 - treshold;
                footE.position.z =  bottomA.position.z + this.params.angle.size/2 - treshold;
                
                footF.position.x =  bottomA.position.x - widthCushion/2 + treshold;
                footF.position.z =  bottomA.position.z + this.params.angle.size/2 - treshold;
                foots = BABYLON.Mesh.mergeMeshesRec("foot", [footE, footF], scene);
                foots.position.y += this.params.foots.height / 2;

                foots.parent = object2;
            }
        }

        // TODO : shadow
        //this.applyShadow(object);
        object2.rotation.y = Math.PI;
        object2.parent = object;
        
        return object;
    }

    return Base;
})();