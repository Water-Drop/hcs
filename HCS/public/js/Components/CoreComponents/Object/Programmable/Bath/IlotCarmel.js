/**
 * @module hcsdesign
 * @namespace hcs
 * @submodule Programmable
 */



// TODO : ROBINET MARCHE PAS

var hcs = window.hcs || {};
hcs.Programmable = hcs.Programmable || {};

hcs.Programmable.Bath.IlotCarmel = (function() {
    var that;

    /**
     * Define a basic 3D object (draw dynamically)
     *
     * @constructor
     * @class Ilot
     * @param {hcs.Core}
     * @param {Object}
     */
    var Ilot = function (engine, structure, params) {
        hcs.Programmable.Bath.call(this, engine, structure, params);
        structure.preferredYAngle = -Math.PI/2;
        that = this;
    }

    if (typeof hcs.Programmable.Bath != "undefined") {
        for (var i in hcs.Programmable.Bath.prototype) {
            if (typeof Ilot.prototype[i] == 'undefined') {
                Ilot.prototype[i] = hcs.Programmable.Bath.prototype[i];
            }
        }
    }

    Ilot.prototype.getDefaultMaterials = function (scene) {
        var materials = {};
                
        materials["tap"] = new hcs.MetalMaterial("tap", scene, {brillance : 0.1});/*{color:0xeeeeee}*/
        materials["frames"] = new hcs.MetalMaterial("frames", scene, {brillance : 0.1});
        materials["Model"] = new hcs.MetalMaterial("Model", scene, {brillance : 0.1});
        materials["pied"] = new hcs.MetalMaterial("pied", scene, {brillance : 0.1});
        materials["global"] = new hcs.WhiteMaterial("global", scene, {factor : 0.9});
        materials["robinet"] = new hcs.MetalMaterial("robinet", scene, {brillance : 0.1});
        //materials["global"].side = THREE.DoubleSide;

        return materials;
    }


    Ilot.prototype.generateVasqueStrate = function (positions, width, depth, height, nbseg) {

        var radius = this.params.radius;
       
        var p11 = new BABYLON.Vector3(width/2 - radius, height, depth/2);
        var p12 = new BABYLON.Vector3(width/2, height, depth/2 - radius);
        var cp1 = new BABYLON.Vector3(width/2, height, depth/2);
        
        var p21 = new BABYLON.Vector3(width/2, height, -depth/2 + radius);
        var p22 = new BABYLON.Vector3(width/2 - radius, height, -depth/2);
        var cp2 = new BABYLON.Vector3(width/2, height, -depth/2);
        
        var p31 = new BABYLON.Vector3(-width/2 + radius, height, -depth/2);
        var p32 = new BABYLON.Vector3(-width/2, height, -depth/2 + radius);
        var cp3 = new BABYLON.Vector3(-width/2, height, -depth/2);

        var p41 = new BABYLON.Vector3(-width/2, height, depth/2 - radius);
        var p42 = new BABYLON.Vector3(-width/2 + radius, height, depth/2);
        var cp4 = new BABYLON.Vector3(-width/2, height, depth/2);

        positions.push(p11.x, p11.y, p11.z);
        GeometryHelper.generateArc(positions , nbseg, p11, cp1, p12);
        positions.push(p12.x, p12.y, p12.z);

        positions.push(p21.x, p21.y, p21.z);
        GeometryHelper.generateArc(positions , nbseg, p21, cp2, p22);
        positions.push(p22.x, p22.y, p22.z);

        positions.push(p31.x, p31.y, p31.z);
        GeometryHelper.generateArc(positions , nbseg, p31, cp3, p32);
        positions.push(p32.x, p32.y, p32.z);

        positions.push(p41.x, p41.y, p41.z);
        GeometryHelper.generateArc(positions , nbseg, p41, cp4, p42);
        positions.push(p42.x, p42.y, p42.z);
    }

    Ilot.prototype.getVasqueGeometry = function (name, scene) {

        var updatable = updatable || false;
        var indices = [];
        var positions = [];
        var normals = [];
        var uvs = [];

        var nbseg = this.params.nbseg;

        var bottomHeight = this.params.bottomHeight;
        var topHeight = this.params.height;
        var thickness = this.params.thickness;

        this.generateVasqueStrate(positions, this.params.bottomWidth, this.params.bottomDepth, bottomHeight, nbseg);
        this.generateVasqueStrate(positions, this.params.bottomWidth + 5, this.params.bottomDepth + 10, bottomHeight + 2, nbseg);
        this.generateVasqueStrate(positions, this.params.topWidth, this.params.topDepth, topHeight, nbseg);
        this.generateVasqueStrate(positions, this.params.topWidth + thickness*2, this.params.topDepth+ thickness*2, topHeight, nbseg);
        this.generateVasqueStrate(positions, this.params.bottomWidth + thickness*2, this.params.bottomDepth+ thickness*2, 0, nbseg);

        return GeometryHelper.generateStrateFacesForGeometry(name, positions, 4*(nbseg+1), true, false, scene, [2]);//, strateNormalId);

    }

    Ilot.prototype.localizeAndSortParams = function() {
           var params = {};

           params.basic = {
               "height" : _("高度"),
               "thickness" : _("厚度"),
               "radius" : _("半径")
           }

           params.advanced = {
               "bottomHeight" : _("底部高度"),
               "bottomWidth" : _("底部宽度"),
               "bottomDepth" : _("底部长度"),
               "topHeight" : _("顶部高度"),
               "topWidth" : _("顶部宽度"),
               "topDepth" : _("顶部长度"),
               "nbseg" : _("光滑度"),
               "tap" : _("水龙头"),
               "tap.side" : _("边"),
               "tap.position" : _("位置"),
               "tap.elevation" : _("距地面高度")
           }

           return params;
    }

    

    Ilot.prototype.getDefaultParams = function() {
        var params = {
            height : 55,
            bottomHeight : 10,
            bottomWidth : 45.7,
            bottomDepth : 135.5,
            topWidth : 65,
            topDepth : 159,
            thickness : 3,
            radius : 2,
            nbseg : 5,
            tap : {
                side :1,
                position : 0,
                elevation : 0,
            }
        };

        return params;
    }

    Ilot.prototype.getTap = function(object2, scene) {
        var fRobinet = function (zOffset, robinet) {
            var bb = robinet.getBoundingBox();
            var length = Math.abs(bb.maximum.z - bb.minimum.z);
            robinet.scaling = new BABYLON.Vector3(3, 3, 3);
            var childrenArray = robinet.getChildren();
            var dddd = childrenArray[2].getChildren();
            //robinet.scale.scaleInPlace(150);
            robinet.position.y = that.params.height + that.params.tap.elevation - 2;
            

            if (that.params.tap.side == 2) {
                robinet.rotation.y += -Math.PI;
                robinet.position.z = (-that.params.topDepth/2 - 7 - that.params.thickness + 14);
                robinet.position.x = that.params.tap.position;
                
            } else {
                robinet.rotation.y += -Math.PI/2;
                robinet.position.x = -(that.params.topWidth/2 + 7 + that.params.thickness - length - 14);
                robinet.position.z = that.params.tap.position;
            }
            // robinet.traverse(function(mesh) {
            //     if (mesh instanceof THREE.Mesh) {
            //         mesh.material = materials["tap"];
            //     }
            // }); 
            
            var piedHeight = that.params.height + that.params.tap.elevation;
            //var pied = new THREE.Mesh(new THREE.CylinderGeometry(3.1,3.1,piedHeight), materials["tap"]);
            var pied = BABYLON.Mesh.CreateCylinder("pied", piedHeight, 5, 4, 16, 1, true, scene);
            if (that.params.tap.side == 2) {

                pied.position.z = robinet.position.z - 16.5;
                pied.position.x = robinet.position.x - 2.4;
                pied.position.y = piedHeight/2;
                pied.rotation.y = Math.PI/30;
            } else {
                pied.position.x = robinet.position.x - 16.5;
                pied.position.z = robinet.position.z + 2.4;
                pied.position.y = piedHeight/2;
                pied.rotation.y = Math.PI/30;
            }
            var materials2 = this.getDefaultMaterials(scene);
            pied.material = materials2["pied"];

            robinet.getChildByName("mesh1.001").material = materials2["robinet"];
            
            pied.parent = object2;
            robinet.parent = object2; 
            // Dans le Backoffice nous n'avons pas de Engine3D.
            if (that.engine3D && typeof(that.engine3D.refreshRenderer) == "function") {
                that.engine3D.refreshRenderer();
            }
        };
        this.importBabylon(hcs.Assets.robinet5DAE, fRobinet.bind(that, 0) );
        //var robinet = this.importDAE(hcs.Assets.robinet5DAE, fRobinet.bind(that, 0) );
    }

    Ilot.prototype.getObject3D = function(scene) {

        var object = new BABYLON.Mesh("object", scene);
        object.isVisible = false;

        var object2 = new BABYLON.Mesh("object2", scene);
        object2.isVisible = false;
         

        
        var mesh = this.getVasqueGeometry("global", scene);
        // TODO ; material
        //mesh.material = materials["global"];

        mesh.parent = object2;


        if (this.params.tap.side > 0) {
            this.getTap(object2, scene);
            var drain = BABYLON.Mesh.CreateCylinder("frames", 1, 5,5, 16, 1, true, scene);
            // TODO : material
            //drain.material = materials["frames"];
            drain.position.y = this.params.bottomHeight + 1/2;
            drain.parent = object2;
        }
        // TODO : shadow
        //this.applyShadow(object2);

        //mesh.castShadow = false;
            
        //object2.generateFlatUvs(true);
        object2.rotation.y = Math.PI;
        object2.parent = object;

        return object;
    }

    return Ilot;
})();