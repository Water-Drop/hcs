/**
 * @module hcsdesign
 * @namespace hcs
 * @submodule Programmable
 */


var hcs = window.hcs || {};
hcs.Programmable = hcs.Programmable || {};

hcs.Programmable.Furniture.Dressing = (function() {
    var that;

    /**
     * Define a basic 3D object (draw dynamically)
     *
     * @constructor
     * @class Dressing
     * @param {hcs.Core}
     * @param {Object}
     */
    var Dressing = function (engine, structure, params) {
        hcs.Programmable.Furniture.call(this, engine, structure, params);
        that = this;
        structure.magnetismCollider = hcs.Constants.MAGNETISM.DEFAULT;
        structure.preferredYAngle = Math.PI;
    }

    if (typeof hcs.Programmable.Furniture != "undefined") {
        for (var i in hcs.Programmable.Furniture.prototype) {
            if (typeof Dressing.prototype[i] == 'undefined') {
                Dressing.prototype[i] = hcs.Programmable.Furniture.prototype[i];
            }
        }
    }

    Dressing.prototype.getRobs = function(object, scene) {
        var elevationTringle = this.params.robs.elevations.toString().split(",");
        for (var i = 0; i < +this.params.robs.nb ; i++) {
            if (+(elevationTringle[i] || elevationTringle[0]) > this.params.height) {continue;}
            var tringle = BABYLON.Mesh.CreateCylinder("rob",this.params.width - this.params.thickness,2,2,4, 1, true,scene);
            // TODO : material
            // tringle.material = materials['rob'];
            tringle.rotation.z = Math.PI/2;
            tringle.position.y = +(elevationTringle[i] || elevationTringle[0]);
            tringle.parent = object;
        }
    }

    Dressing.prototype.getDefaultMaterials = function(scene) {
        var materials = hcs.Programmable.Furniture.prototype.getDefaultMaterials(scene);
        materials['rob'] = new hcs.WhiteMaterial("rob", scene);

        return materials;
    }

    Dressing.prototype.getMain = function(object, scene) {
        var main = new BABYLON.Mesh("main", scene);
        main.isVisible = false;

        this.getShelfs(main,scene);

        this.getDrawers(main,scene);

        this.getDoors(main,scene);

        this.getDblDoors(main,scene);

        this.getRobs(main,scene);

        main.position.y = this.params.elevation +  this.params.bottom.thickness + this.params.thickness;
        main.parent = object;
    }

    Dressing.prototype.localizeAndSortParams = function() {
        var params = hcs.Programmable.Furniture.prototype.localizeAndSortParams();
            
        params.advanced["robs"] = _("rods");
        params.advanced["robs.nb"] = _("nb");
        params.advanced["robs.elevations"] = _("rod's elevations (comma separated)");
        

        return params;
    }

    Dressing.prototype.getParamType = function( name ){
        switch( name ){
            case "robs.elevations" :
                return { 
                    type:"string",
                    intList:true,
                }
        }
        return hcs.Programmable.Furniture.prototype.getParamType.call( this , name );
    }

    Dressing.prototype.getCadre = function(object, scene) {
        // var heightC = this.params.height + 2 * this.params.thickness;
        // var configuration = [1,1,1,1];
        // if (this.params.structure.rounded) {
        //     configuration = this.getRoundedConfiguration();
        // }

        var heightC = this.params.height - this.params.bottom.thickness - this.params.top.thickness + this.params.thickness;
        if (this.params.structure.rounded && this.params.structure.radius >= 0) {
            var configuration = this.getRoundedConfiguration();
            heightC += this.params.thickness;
        } else {
            var configuration = [1,1,1,1];
        }

        var cadre = GeometryHelper.createCadre(this.params.width, heightC, this.params.thickness, this.params.depth+1, configuration, this.params.structure, scene); 
        //TODO : material
        //cadre.material = materials['global'];
        cadre.position.y = heightC/2 + this.params.elevation + this.params.bottom.thickness;
        cadre.name = "global";
        cadre.parent = object;

        this.getFond(object, scene);
    }

    Dressing.prototype.getDefaultParams = function() {
        var params = hcs.Programmable.Furniture.prototype.getDefaultParams();
        params.shelfs.nb = 1;
        params.shelfs.elevations = 70;
        params.doors.nb = 0;
        params.dblDoors.nb = 0;
        params.drawers.nb = 2;
        params.drawers.heights = "34,34";
        params.drawers.elevations = "0,35";
        params.top.thickness = params.thickness;
        params.top.offset = 0;

        params.robs = {
            nb : 1,
            elevations : 180
        }

        return params;
    };

    return Dressing;
})();