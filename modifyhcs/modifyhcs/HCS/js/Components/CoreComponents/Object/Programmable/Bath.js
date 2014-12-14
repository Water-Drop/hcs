/**
 * @module hcsdesign
 * @namespace hcs
 * @submodule Programmable
 */

var hcs = window.hcs || {};
hcs.Programmable = hcs.Programmable || {};

hcs.Programmable.Bath = (function () {
    /**
     * Define a basic 3D object (draw dynamically)
     *
     * @constructor
     * @class Bath
     * @param {hcs.Core}
     * @param {Object}
     */
    var Bath = function (engine, structure, params) {
        hcs.Programmable.call(this, engine, structure, params);
        for (var i in params) {
            this[i] = params[i];
        }
        structure.magnetismCollider = hcs.Constants.MAGNETISM.DEFAULT;
        this.objectName = 'Bath';
        structure.preferredYAngle = -Math.PI;
    };

    // heritage
    for (var i in hcs.Programmable.prototype) {
        Bath.prototype[i] = hcs.Programmable.prototype[i];
    }

    Bath.prototype.localizeAndSortParams = function() {
        var params = {};

        params.basic = {
            "top" : _("浴缸顶部"),
            "top.width" : _("顶部宽度"),
            "top.depth" : _("顶部长度"),
            "bottom" : _("浴缸底部"),
            "bottom.width" : _("底部宽度"),
            "bottom.height" : _("底部高度"),
            "height" : _("整体高度"),
        }

        params.advanced = {
            "top.thickness" : _("顶部厚度"),
            "top.radius" : _("顶部半径"),
            "bottom.thickness" : _("底部厚度"),
            "bottom.radius" : _("底部半径"),
            "bottom.depth" : _("底部长度"),
            "smoothness" : _("光滑度"),
            "tap" : _("水龙头"),
            "tap.elevation" : _("水龙头距地面高度"),
        }

        return params;
    }


    Bath.prototype.getDefaultParams = function() {
        var params = {
            top : {
                width : 80,
                depth : 160,
                thickness : 10,
                radius : 25
            },
            bottom : {
               width : 60,
               depth : 140,
               radius : 25
            },
            height : 55,
            smoothness : 10,
            tap : {
                elevation : 13
            }
        };

        return params;
    };

    Bath.prototype.getDefaultMaterials = function(scene) {
        var materials = {};


        materials['global'] =  new hcs.WhiteMaterial("global", scene, {factor : 0.8});
        //materials['global'] =  new hcs.WhiteMaterial("global", scene);
        materials['coffrage'] = new hcs.WhiteMaterial("coffrage", scene, {factor : 0.8});
        materials['frames'] = new hcs.MetalMaterial("frames", scene);


        // materials['global'] =  new hcs.WhiteMaterial();
        // materials['global'].side = THREE.DoubleSide;

        // materials['coffrage'] =  new hcs.WhiteMaterial();
        // materials['frames'] =  new hcs.MetalMaterial();

        return materials;
    };

    Bath.prototype.getObject3D = function(scene) {
        var object = new BABYLON.Mesh("object", scene);
        object.isVisible = false;

        return object;
    };

    Bath.prototype.CoffrageGeometry = function(width, height, depth, scene) {
        var f1 = BABYLON.Mesh.CreatePlan("coffrage", width, height, scene);
        f1.position.z = -depth/2;
        f1.position.y = height/2;
        
        var f2 = f1.clone();
        f2.position.z = depth/2;
        f2.position.y = height/2;
        f2.rotation.y = Math.PI;
        
        var f3 = BABYLON.Mesh.CreatePlan("coffrage", depth, height, scene);
        f3.rotation.y = -Math.PI/2;
        f3.position.x = width/2;
        f3.position.y = height/2;
        
        var f4 = f3.clone();
        f4.rotation.y = Math.PI/2;
        f4.position.x = -width/2;
        f4.position.y = height/2;
        
        return BABYLON.Mesh.mergeMeshesRec("coffrage", [f1, f2, f3, f4], scene);
    }


    Bath.prototype.generateStrate = function(position, strate, bL, bW, sheight, radius, nbseg, radiusL, radiusW, last) {
            var nbseg = nbseg || 3;

            var radiusL = radiusL || radius;
            var radiusW = radiusW || radius;
                
            position.push(-bL/2 + radiusL, sheight, bW/2);
            position.push(bL/2 -radiusL, sheight, bW/2);

            
            GeometryHelper.generateArc(position, nbseg, new BABYLON.Vector3(bL/2 -radiusL, sheight, bW/2),  new BABYLON.Vector3(bL/2, sheight, bW/2), new BABYLON.Vector3(bL/2, sheight, bW/2 - radiusW));
            

            //right;
            position.push(bL/2, sheight, bW/2 - radiusW);
            position.push(bL/2, sheight, -bW/2 + radiusW);

            //arc bottom right
            GeometryHelper.generateArc(position, nbseg, new BABYLON.Vector3(bL/2, sheight, -bW/2 + radiusW),  new BABYLON.Vector3(bL/2 , sheight, -bW/2),new BABYLON.Vector3(bL/2 - radiusL, sheight, -bW/2));
            

            //bottom
            position.push(bL/2 - radiusL, sheight, -bW/2);
            position.push(-bL/2 +radiusL, sheight, -bW/2);

            //arc bottom left
            GeometryHelper.generateArc(position, nbseg, new BABYLON.Vector3(-bL/2 +radiusL, sheight, -bW/2),  new BABYLON.Vector3(- bL/2, sheight, -bW/2),new BABYLON.Vector3(-bL/2, sheight, - bW/2 + radiusW));
            

            //left
            position.push(-bL/2, sheight, - bW/2 + radiusW);
            position.push(-bL/2, sheight, +bW/2 - radiusW);

            //arc top left
            GeometryHelper.generateArc(position, nbseg, new BABYLON.Vector3(-bL/2, sheight, +bW/2 - radiusW),  new BABYLON.Vector3(- bL/2, sheight, bW/2),new BABYLON.Vector3(-bL/2 + radiusL, sheight, bW/2));
                
        }   

       Bath.prototype.BathGeometry = function(name, params, scene) {

            var positions = [];
       
            var params = params || {};
            var height = params.height || 35;
            var bottomL = params.bottomL || 140;
            var topL = params.topL || 160;
            var bottomW = params.bottomW || 40;
            var topW = params.topW || 50;
            var radius = params.radius || 10;
            var nbseg = params.nbseg || 3;
            var thickness = params.thickness || 10;

            var nbStrate = 0;

            for (var strate = 0.1; strate <= height; strate++) {

                bL = bottomL + (Math.asin(2*strate / (height) - 1) + Math.PI/2) * (topL-bottomL)/Math.PI;
                bW = bottomW + (Math.asin(2*strate / (height) - 1) + Math.PI/2) * (topW-bottomW)/Math.PI;

                if (strate < (3/10*height) || strate > (9/10*height)) {
                  this.generateStrate(positions, ++nbStrate, bL, bW,strate, radius, nbseg);  
                }
            } 

            var bL = topL + thickness;
            var bW = topW + thickness;
            var radius = 2;

            this.generateStrate(positions, ++nbStrate, bL, bW,strate, radius, nbseg, undefined, undefined, true);
            this.generateStrate(positions, ++nbStrate, bL, bW,strate-1, radius, nbseg, undefined, undefined, true);

            return GeometryHelper.generateStrateFacesForGeometry(name, positions, 8 + 4 * (nbseg - 1), true, false, scene);//, strateNormalId);

        }

    return Bath;
})();