/**
 * @module hcsdesign
 * @namespace hcs
 * @submodule Programmable
 */


var hcs = window.hcs || {};
hcs.Programmable = hcs.Programmable || {};

hcs.Programmable.Furniture.Angle = (function() {
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
        hcs.Programmable.Furniture.call(this, engine, structure, params);
        that = this;
        structure.magnetismCollider = hcs.Constants.MAGNETISM.WALL;
        structure.preferredYAngle = Math.PI;
    }

    /*h¨¦ritage*/
    if (typeof hcs.Programmable.Furniture != "undefined") {
        for (var i in hcs.Programmable.Furniture.prototype) {
            if (typeof Angle.prototype[i] == 'undefined') {
                Angle.prototype[i] = hcs.Programmable.Furniture.prototype[i];
            }
        }
    }

    Angle.prototype.getCache = function(object, scene) {
        var cacheHeight = this.params.height - this.params.top.thickness - this.params.bottom.thickness -this.params.thickness;
        var cache = BABYLON.Mesh.CreateBloc("global", this.params.elbow.width, cacheHeight, this.params.thickness, scene);
        // TODO : material
        //cache.material = materials["global"];
        cache.position.z = this.params.depth/2;
        cache.position.y = cacheHeight/2;
        if (this.params.elbow.side) {
            cache.position.x = this.params.width/2;
        } else {
            cache.position.x = -this.params.width/2;
        }

        if (this.params.top.offset > 0) {
            var add = BABYLON.Mesh.CreateBloc("global", this.params.thickness, cacheHeight, this.params.top.offset, scene);
            // TODO : material
            //add.material = materials["global"];
            add.position.x = cache.position.x + this.params.elbow.width/2 - this.params.thickness/2;
            add.position.y = cacheHeight/2;  
            add.position.z = this.params.depth/2 + this.params.top.offset/2
            var add2 = add.clone("global");
            add2.position.x = cache.position.x - this.params.elbow.width/2 + this.params.thickness/2;
            
            add.parent = object;
            add2.parent = object;

            if (this.params.bottom.type === 1){
                var addplinthe = BABYLON.Mesh.CreateBloc("bottom", this.params.thickness, this.params.bottom.thickness + this.params.thickness, this.params.top.offset, scene);
                // TODO : material
                //addplinthe.material = materials["bottom"];
                addplinthe.position.x = cache.position.x + this.params.elbow.width/2 - this.params.thickness/2;
                addplinthe.position.y = -this.params.bottom.thickness/2 -this.params.thickness/2;  
                addplinthe.position.z = this.params.depth/2 + this.params.top.offset/2
                var addplinthe2 = addplinthe.clone("bottom");
                addplinthe2.position.x = cache.position.x - this.params.elbow.width/2 + this.params.thickness/2;
                addplinthe.parent = object;
                addplinthe2.parent = object;
                //object.rotation.y += Math.PI;
            }
        }
        //cache.position.y += 150;
        //cache.rotation.y += Math.PI/2;
        cache.parent = object;
    }

    Angle.prototype.getDoor = function (object, width, height, elevation, column, hinge, handlePosition, scene) {

        var equipmentParams = this.getEquipmentParams(width, height, elevation);
        if (equipmentParams == false) {return;}
        var elevation = equipmentParams.elevation;
        equipmentParams.params.stretched_texture = this.params.doors.stretched_texture;
        equipmentParams.params.handle_position = handlePosition;
        var width = equipmentParams.width;
        var height = equipmentParams.height;

        //var door = GeometryHelper.createSimplePorte(width, height, this.params.doors.thickness, this.params.doors.hinge, materials['casement'], materials['handle'], this.params.doors.handle, equipmentParams.params, scene);
        var door = GeometryHelper.createSimplePorte(width, height, this.params.doors.thickness, -hinge, this.params.doors.handle, equipmentParams.params, scene);
        door.position.y = elevation;
        door.name = "door";
        door.position.z = this.params.depth/2 - this.params.thickness/2;
        door.position.z += this.params.doors.inside ? 0 : this.params.doors.thickness/2 + this.params.thickness/2 + 0.2;
        //door.position.x = 0;
        door.parent = object;
    }

    Angle.prototype.getMain = function(object, scene) {
        var originalWidth = 1*this.params.width;
        this.params.width = originalWidth  - this.params.elbow.width;  
        var main = new BABYLON.Mesh("main", scene);
        main.isVisible = false;

        this.getShelfs(main, scene);

        this.getDrawers(main, scene);

        this.getDoors(main, scene);

        this.getDblDoors(main, scene);

        
        main.position.y = this.params.elevation +  this.params.bottom.thickness + this.params.thickness;
        
        if (this.params.elbow.side) {
            main.position.x = -this.params.elbow.width/2;
        } else {
            main.position.x = this.params.elbow.width/2;
        }
        
        this.params.width = originalWidth;
       
        this.getCache(main, scene);

        // object.getBoundingBox = function() {
            
        //     return  new hcs.Box3(
        //          new BABYLON.Vector3(
        //                 -that.params.width/2,
        //                 0,
        //                 -that.params.depth/2
        //             ), 
        //         new BABYLON.Vector3(
        //                 that.params.width/2,
        //                 that.params.height,
        //                 that.params.depth/2
        //             )
        //     );
        // };

        main.parent = object;

    }

    Angle.prototype.getObject3D = function(scene) {
        this.migrateParams();
        //this.params.doors.hinge = - this.params.doors.hinge;
        //this.params.elbow.side = 1 - this.params.elbow.side;
        var object = new BABYLON.Mesh("object", scene);
        object.isVisible = false;

        var object2 = new BABYLON.Mesh("object2", scene);
        object2.isVisible = false;
        //controle du radius
        // if (this.params.structure.rounded) {
        //     if (this.params.structure.radius > this.params.width/2) {
        //         this.params.structure.radius = this.params.width/2;
        //     }
        //     if (this.params.structure.radius > this.params.height/2) {
        //         this.params.structure.radius = this.params.height/2;
        //     }
        // }
        this.getCadre(object2, scene);

        this.getBottom(object2, scene);

        this.getMain(object2, scene);

        object2.rotation.y = Math.PI;
        object2.parent = object;

        // TODO : S'occuper des ombres
        //this.applyShadow(object);

        return object;
    }

    Angle.prototype.getDefaultParams = function() {
        var params = hcs.Programmable.Furniture.prototype.getDefaultParams();
        params.width = 140;
        params.height = 70;
        params.depth = 60;
        params.shelfs.nb = 0;
        params.doors.nb = 1;
        params.dblDoors.nb = 0;
        params.drawers.nb = 0;
        params.doors.inside = 0;
        params.doors.heights = 70;
        params.doors.elevations = 0;

        params.elbow = {
            width : 60,
            side : 1,
        }

        return params;
    }

    Angle.prototype.localizeAndSortParams = function() {
        var params = hcs.Programmable.Furniture.prototype.localizeAndSortParams();
            
        params.advanced["elbow"] = _("elbow");
        params.advanced["elbow.width"] = _("width");
        params.advanced["elbow.side"] = _("side");
        

        return params;
    }

    Angle.prototype.getDefaultMaterials = function(scene) {
        var materials = hcs.Programmable.Furniture.prototype.getDefaultMaterials(scene);

        materials["door"] = new hcs.WhiteMaterial("door", scene, {factor : 0.8});
        //materials["sink"].side = THREE.DoubleSide; 
        //TODO : Z Fighting


        return materials;
    }

    return Angle;
})();