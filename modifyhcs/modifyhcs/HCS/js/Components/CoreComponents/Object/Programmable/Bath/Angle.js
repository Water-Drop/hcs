/**
 * @module hcsdesign
 * @namespace hcs
 * @submodule Programmable
 */


var hcs = window.hcs || {};
hcs.Programmable = hcs.Programmable || {};

hcs.Programmable.Bath.Angle = (function() {
    var that;

    /**
     * Define a basic 3D object (draw dynamically)
     *
     * @constructor
     * @class Angle
     * @param {hcs.Core}
     * @param {Object}
     */
    var Angle = function (engine, structure, params) {
        hcs.Programmable.Bath.call(this, engine, structure, params);
        structure.preferredYAngle = Math.PI/2;
        that = this;
    }

    if (typeof hcs.Programmable.Bath != "undefined") {
        for (var i in hcs.Programmable.Bath.prototype) {
            if (typeof Angle.prototype[i] == 'undefined') {
                Angle.prototype[i] = hcs.Programmable.Bath.prototype[i];
            }
        }
    }

    Angle.prototype.getDefaultMaterials = function (scene) {
        var materials = {};
                
        // materials["global"] = new THREE.MeshFaceMaterial();

        // var mat1 = new hcs.WhiteMaterial(),
        //     mat2 = new hcs.LuxensMaterial({color:0x890526});

        // mat1.side = THREE.DoubleSide;
        // mat2.side = THREE.DoubleSide;

        // materials["global"].materials = [
        //    mat1,
        //    mat2
        // ];

        materials['global'] =  new hcs.WhiteMaterial("global", scene, {factor : 1.0});
        materials['coffrage'] = new hcs.LuxensMaterial("coffrage", scene, {baseColor : new BABYLON.Color3(0, 0.486, 0.749)});
        //materials['global'] =  new hcs.WhiteMaterial("global", scene, {opacity : 0.1});
       

        return materials;
    }

    Angle.prototype.generateSeatStrate = function (positions, width, depth, height, nbseg) {
        var p1 = new BABYLON.Vector3(0, height, depth/2);
        var p2 = new BABYLON.Vector3(width/2, height, 0);
        var cp1 = new BABYLON.Vector3(width/2, height, depth/2);
        
        positions.push(p1.x, p1.y, p1.z);
        GeometryHelper.generateArc(positions, nbseg, p1, cp1, p2);

        var nbPoints = positions.length/3;
        var p3 = new BABYLON.Vector3(0, height, -depth/2);
        var cp2 = new BABYLON.Vector3(width/2, height, -depth/2);

        var p2b = new BABYLON.Vector3(depth/2, height, 0);
        var cpTmp1 = new BABYLON.Vector3(positions[(nbPoints-nbseg/4) *3], positions[(nbPoints-nbseg/4) *3 + 1], positions[(nbPoints-nbseg/4) *3 + 2]);
        var pTmp1 = new BABYLON.Vector3(positions[(nbPoints-nbseg/4-1)*3], positions[(nbPoints-nbseg/4-1)*3 + 1], positions[(nbPoints-nbseg/4-1)*3 + 2]);
        var pTmp2 = pTmp1.clone().lerp(p2b , 1/2);

        positions.splice((nbPoints - nbseg/4)*3, (nbseg/4)*3);

        GeometryHelper.generateArc(positions, nbseg/6, pTmp1, cpTmp1, pTmp2);
        positions.push(pTmp2.x, pTmp2.y, pTmp2.z);
            

        var tmpGeomArc2 = [];
        GeometryHelper.generateArc(tmpGeomArc2, nbseg, p2, cp2, p3);
        var pTmp3 = new BABYLON.Vector3(tmpGeomArc2[(nbseg/4) * 3], tmpGeomArc2[(nbseg/4) * 3+1], tmpGeomArc2[(nbseg/4) * 3+2]);
        var cpTmp2 = new BABYLON.Vector3(tmpGeomArc2[(nbseg/4-1) *3], tmpGeomArc2[(nbseg/4-1) *3+1], tmpGeomArc2[(nbseg/4-1) *3+2]);
        var pTmp4 = pTmp3.clone().lerp(p2b, 1/2);

        GeometryHelper.generateArc(positions, nbseg/6, pTmp2, p2b, pTmp4);
        positions.push(pTmp4.x, pTmp4.y, pTmp4.z);
        GeometryHelper.generateArc(positions, nbseg/6, pTmp4, cpTmp2, pTmp3);

        for (var j=nbseg/4; j < tmpGeomArc2.length/3; j ++) {
            positions.push(tmpGeomArc2[j*3], tmpGeomArc2[j*3+1], tmpGeomArc2[j*3+2]);
        }
        
        positions.push(p3.x, p3.y, p3.z);

        var p4 = new BABYLON.Vector3(-width/2, height, 0);
        var cp3 = new BABYLON.Vector3(-width/2, height, -depth/2);

        GeometryHelper.generateArc(positions, nbseg, p3, cp3, p4);
        positions.push(p4.x, p4.y, p4.z);
        
        var cp4 = new BABYLON.Vector3(-width/2, height, depth/2);

        GeometryHelper.generateArc(positions, nbseg, p4, cp4, p1);
    }


    Angle.prototype.generateFinalStrate = function (positions, width, depth, height, nbseg) {
        var thickness = this.params.thickness;

        var depth = depth+thickness;
        var width = width+thickness;


        var p1 = new BABYLON.Vector3(0, height, depth/2);
        var p2 = new BABYLON.Vector3(depth/2, height, 0);
        var p3 = new BABYLON.Vector3(0, height, -depth/2);
        var p4 = new BABYLON.Vector3(-width/2, height, 0);
        var p4b = new BABYLON.Vector3(-depth/2, height, 0);
        var p4t = new BABYLON.Vector3(-width/2 + thickness/3, height, 0);
        var cp1 = new BABYLON.Vector3(width/2, height, depth/2);
        var cp2 = new BABYLON.Vector3(width/2, height, -depth/2);
        var cp3 = new BABYLON.Vector3(-width/2, height, -depth/2);
        var cp4 = new BABYLON.Vector3(-width/2, height, depth/2);
        var p1b = p1.clone().lerp(p2, 0);
        var p2b = p2.clone().lerp(p1, 0.01);
        var p2t = p2.clone().lerp(p3, 0.01);
        var p3b = p3.clone().lerp(p2, 0);
        var p3t = p3.clone().lerp(p4b, 0.25);
        var p1t = p1.clone().lerp(p4b, 0.25);
        var p12 = p1.clone().lerp(p2, 0.5);
        var p23 = p2.clone().lerp(p3, 0.5);

       
        var cp3b = p3.clone().lerp(p4b, (width-thickness/2)/depth);
        var cp4b = p1.clone().lerp(p4b, (width-thickness/2)/depth);
        var p4t = cp3b.clone().lerp(cp4b,0.5);
        
      
        
        positions.push(p1b.x, p1b.y, p1b.z);
        GeometryHelper.generateArc(positions , nbseg/2 , p1b, p12, p2b);
        positions.push(p2b.x, p2b.y, p2b.z);
        GeometryHelper.generateArc(positions , nbseg , p2b, p2, p2t);
        positions.push(p2t.x, p2t.y, p2t.z);
        GeometryHelper.generateArc(positions , nbseg / 2 , p2t, p23, p3b);
        positions.push(p3b.x, p3b.y, p3b.z);
        GeometryHelper.generateArc(positions , nbseg/2 -1, p3b, p3, p3t);
        positions.push(p3t.x, p3t.y, p3t.z);
        GeometryHelper.generateArc(positions , nbseg /2 -1, p3t, cp3b, p4t);
        positions.push(p4t.x, p4t.y, p4t.z);
        GeometryHelper.generateArc(positions , nbseg/2 +2, p4t, cp4b, p1t);
        positions.push(p1t.x, p1t.y, p1t.z);
        GeometryHelper.generateArc(positions , nbseg/2 , p1t, p1, p1b);

    }   

    Angle.prototype.generateVasqueStrate = function (positions, width, depth, height, nbseg) {
       
        var p1 = new BABYLON.Vector3(0, height, depth/2);
        var p2 = new BABYLON.Vector3(width/2, height, 0);
        var cp1 = new BABYLON.Vector3(width/2, height, depth/2);
        
        positions.push(p1.x, p1.y, p1.z);
        GeometryHelper.generateArc(positions , nbseg, p1, cp1, p2);
        positions.push(p2.x, p2.y, p2.z);

        var p3 = new BABYLON.Vector3(0, height, -depth/2);
        var cp2 = new BABYLON.Vector3(width/2, height, -depth/2);

        GeometryHelper.generateArc(positions , nbseg, p2, cp2, p3);
        positions.push(p3.x, p3.y, p3.z);

        var p4 = new BABYLON.Vector3(-width/2, height, 0);
        var cp3 = new BABYLON.Vector3(-width/2, height, -depth/2);

        GeometryHelper.generateArc(positions , nbseg, p3, cp3, p4);
        positions.push(p4.x, p4.y, p4.z);
        
        var cp4 = new BABYLON.Vector3(-width/2, height, depth/2);

        GeometryHelper.generateArc(positions , nbseg, p4, cp4, p1);
    }

    Angle.prototype.getVasqueGeometry = function (name, scene) {

        var nbseg = 32;

        var bathWidth = this.params.bathWidth;
        var bathDepth = this.params.finalWidth*Math.sqrt(2) - this.params.thickness;
        var bottomHeight = this.params.bottomHeight;
        var topHeight = this.params.height;
        var seatHeight = this.params.seatHeight;

        var positions = [], positions2 = [], positions3 = [];


        this.generateVasqueStrate(positions, 0, 0, bottomHeight, nbseg);
        this.generateVasqueStrate(positions, bathWidth, bathDepth, bottomHeight, nbseg);
        this.generateVasqueStrate(positions, bathWidth, bathDepth, seatHeight, nbseg);

        this.generateVasqueStrate(positions, bathWidth, bathDepth, seatHeight, nbseg);        
        this.generateSeatStrate(positions, bathWidth, bathDepth, seatHeight, nbseg);
        this.generateSeatStrate(positions, bathWidth, bathDepth, topHeight, nbseg);

        this.generateSeatStrate(positions, bathWidth, bathDepth, topHeight, nbseg);
        this.generateFinalStrate(positions, bathWidth, bathDepth, topHeight, nbseg);
     
        return GeometryHelper.generateStrateFacesForGeometry(name, positions, 4*nbseg, false, false, scene);
    }

    Angle.prototype.getCoffrageGeometry = function (name, scene) {

        var nbseg = 32;

        var bathWidth = this.params.bathWidth;
        var bathDepth = this.params.finalWidth*Math.sqrt(2) - this.params.thickness;
        var bottomHeight = this.params.bottomHeight;
        var topHeight = this.params.height;
        var seatHeight = this.params.seatHeight;

        var positions = [], positions2 = [], positions3 = [];

        this.generateFinalStrate(positions, bathWidth, bathDepth, topHeight, nbseg);
        this.generateFinalStrate(positions, bathWidth, bathDepth, 0, nbseg);
        
        return GeometryHelper.generateStrateFacesForGeometry(name, positions, 4*nbseg, false, false, scene);
    }

    Angle.prototype.localizeAndSortParams = function() {
           var params = {};

           params.basic = {
               "finalWidth" : _("外部半径"),
               "bathWidth" : _("内部宽度"),
           }

           params.advanced = {
               "thickness" : _("厚度"),
               "height" : _("高度"),
               "bottomHeight" : _("底部距地面距离"),
               "seatHeight" : _("底座距地面距离"),
               "tap" : _("水龙头"),
               "tap.side" : _("边 （1 或 2）"),
               "tap.elevation" : _("水龙头距地面高度"),
               "tap.position" : _("水龙头距圆心位置（厘米）"),
           }

           return params;
       }

    Angle.prototype.getDefaultParams = function() {
        var params = {
            finalWidth : 135,
            bathWidth : 65, 
            thickness : 40,
            height : 50,
            bottomHeight : 12,
            seatHeight : 40,
            tap : {
                side :1,
                position : 50,
                elevation : 20,
            }
        };

        return params;
    }

    Angle.prototype.getTap = function(object2) {
        var fRobinet = function (zOffset, robinet) {

            robinet.scaling = new BABYLON.Vector3(3, 3, 3);
            robinet.position.y = that.params.height + that.params.tap.elevation;

            robinet.rotation.y += Math.PI/2;

            if (that.params.tap.side == 2) {
                robinet.rotation.y += 0;
                robinet.position.x = that.params.finalWidth/2 - 3;
                robinet.position.z = -that.params.finalWidth/2 + that.params.tap.position;
                
            } else {
                robinet.rotation.y += Math.PI/2;
                robinet.position.z = -that.params.finalWidth/2 + 3;
                robinet.position.x = that.params.finalWidth/2 - that.params.tap.position;
            }

            robinet.parent = object2;
            if (that.engine3D && typeof(that.engine3D.refreshRenderer) == "function") {
                that.engine3D.refreshRenderer();
            }
        };
        this.importBabylon(hcs.Assets.robinet4DAE, fRobinet.bind(that, 0) );
    }

    Angle.prototype.getObject3D = function(scene) {

        var object = new BABYLON.Mesh("object", scene);
        object.isVisible = false;

        var object2 = new BABYLON.Mesh("object2", scene);
        object2.isVisible = false;

        

        var mesh = this.getVasqueGeometry("global", scene);
        var coffrage = this.getCoffrageGeometry("coffrage", scene);
  
        mesh.rotation.y = Math.PI/4;
        coffrage.rotation.y = Math.PI/4;

        mesh.parent = object2;
        coffrage.parent = object2;

        this.getTap(object2);
        
        //TODO : shadow
        //this.applyShadow(object2);

        //mesh.castShadow = false;
            
        //object.generateFlatUvs(true);
        object2.rotation.y = -Math.PI/2;
        object2.parent = object;
        return object;
    }

    return Angle;
})();