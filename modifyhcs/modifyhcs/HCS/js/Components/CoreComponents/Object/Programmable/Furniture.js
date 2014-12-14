/**
 * @module hcsdesign
 * @namespace hcs
 * @submodule Programmable
 */

var hcs = window.hcs || {};
hcs.Programmable = hcs.Programmable || {};

hcs.Programmable.Furniture = (function () {
    /**
     * Define a basic 3D object (draw dynamically)
     * @constructor
     * @class Furniture
     * @param {hcs.Core} 
     * @param {Object} 
     */
    var Furniture = function (engine, structure, params) {
        hcs.Programmable.call(this, engine, structure, params);
        for (var i in params) {
            this[i] = params[i];
        }
        this.objectName = 'Furniture';
        this._roundedConfiguration = false;
    };

    // heritage
    for (var i in hcs.Programmable.prototype) {
        Furniture.prototype[i] = hcs.Programmable.prototype[i];
    }

    Furniture.prototype.calcMeasure = function (measure) {
        var w = this._width;
        var h = this._height;
        var reg = new RegExp("[^wh0-9\-\\\+\*\/]");
        if (reg.test(measure) === false) {
            return eval(measure);
        }

        return measure;
    }


    Furniture.prototype.getDefaultMaterials = function(scene) {
        var materials = {};

        materials['global'] =  new hcs.WhiteMaterial("global", scene, {factor : 0.8});
        materials['wheel'] =  new hcs.WhiteMaterial("global", scene, {factor : 0.8});
        // materials['global'] =  new hcs.WoodMaterial("global", scene, {factor : 0.8});
        materials['top'] =  new hcs.WhiteMaterial("top", scene, {factor : 0.8});
        materials['tray'] =  new hcs.WhiteMaterial("tray", scene, {factor : 0.8});
        //materials['fond'] =  new hcs.WhiteMaterial("fond", scene, {factor : 0.8});
        materials['bottom'] =  new hcs.WhiteMaterial("bottom", scene, {factor : 0.8});
        materials['handle'] =  new hcs.MetalMaterial("handle", scene);
        materials['handle_deco'] =  new hcs.MetalMaterial("handle_deco", scene);
        materials['foots'] =  new hcs.WoodMaterial("foots", scene);
        //materials['fond'] =  new hcs.WoodMaterial("fond", scene);
        materials['tiroir'] =   new hcs.LuxensMaterial("tiroir", scene, {
            ambientColor : new BABYLON.Color3(0.7, 1.0, 1.0)
        });
        materials['casement'] =   new hcs.LuxensMaterial("casement", scene, {
            ambientColor : new BABYLON.Color3(0.7, 1.0, 1.0)
        });

        return materials;
    };


    Furniture.prototype.localizeAndSortParams = function() {
        var params = {};

        params.basic = {
            "width" : _("宽度"),
            "height" : _("高度"),
            "depth" : _("长度"),
            "elevation" : _("距地面高度"),
        }

        params.advanced = {
            "thickness" : _("厚度"),
            "nbColumns" : _("列数"),
            "shelfs" : _("架子"),
            "shelfs.nb" : _("架子"),
            "shelfs.elevations" : _("架子距地面高度 （逗号分隔）"),
            "shelfs.columns" : _("columns (comma separated)"),
            "shelfs.depths" : _("depths (comma separated)"),
            "shelfs.orientations" : _("orientations (comma separated)"),
            "shelfs.widths" : _("widths (comma separated)"),
            "shelfs.thickness" : _("thickness"),
            "structure" : _("structure"),
            "structure.rounded" : _("rounded (0/1)"),
            "structure.radius" : _("radius"),
            "structure.back" : _("back (0/1)"),
            "drawers" : _("drawers"),
            "drawers.nb" : _("nb drawers"),
            "drawers.heights" : _("heights (comma separated)"),
            "drawers.elevations" : _("elevations (comma separated)"),
            "drawers.columns" : _("columns (comma separated)"),
            "drawers.inside" : _("inside / outside the structure"),
            "drawers.handle" : _("handle type"),
            "drawers.handle_positions" : _("handle position"),
            "drawers.thickness" : _("thickness"),
            "drawers.stretched_texture" : _("stretched texture"),
            "doors" : _("doors"),
            "doors.nb" : _("nb doors"),
            "doors.hinge" : _("doors' hinge"),
            "doors.heights" : _("heights (comma separated)"),
            "doors.inside" : _("inside / outside the structure"),
            "doors.elevations" : _("elevations (comma separated)"),
            "doors.columns" : _("columns (comma separated)"),
            "doors.handle" : _("handle type"),
            "doors.handle_positions" : _("handle position"),
            "doors.thickness" : _("thickness"),
            "doors.stretched_texture" : _("stretched texture"),
            "dblDoors" : _("double doors"),
            "dblDoors.nb" : _("nb double doors"),
            "dblDoors.heights" : _("heights (comma separated)"),
            "dblDoors.inside" : _("inside / outside the structure"),
            "dblDoors.elevations" : _("elevations (comma separated)"),
            "dblDoors.columns" : _("columns (comma separated)"),
            "dblDoors.handle" : _("handle type"),
            "dblDoors.handle_positions" : _("handle position"),
            "dblDoors.thickness" : _("thickness"),
            "dblDoors.stretched_texture" : _("stretched texture"),
            "bottom" : _("bottom"),
            "top" : _("top"),
            "bottom.thickness" : _("thickness"),
            "bottom.type" : _("type"),
            "bottom.offset" : _("offset"),
            "bottom.angle" : _("angle (only if foots)"),
            "bottom.size" : _("size"),
            "top.thickness" : _("thickness"),
            "top.offset" : _("offset"),
        }

        params.hidden = {
            "version" : _("version")
        }

        return params;
    }

    Furniture.prototype.getParamType = function( name ){
        switch( name ){
            case "shelfs.elevations" :
            case "shelfs.columns" :
            case "shelfs.depths" :
            case "shelfs.orientations" :
            case "shelfs.widths" :
            case "drawers.elevations" :
            case "drawers.columns" :
            case "doors.elevations" :
            case "doors.columns" :
            case "dblDoors.elevations" :
            case "dblDoors.columns" :
            case "structure.rounded" :
            case "drawers.heights" :
            case "doors.heights" :
            case "dblDoors.heights" :
            case "bottom.angle" :
            case "bottom.offset" :
                return { 
                    type:"string"
                }
            
            case "dblDoors.handle_positions" :
            case "doors.handle_positions" :
            case "drawers.handle_positions" :
                return "string"
            
            case "structure.back" :
            case "structure.rounded" :
            case "drawers.inside" :
            case "dblDoors.inside" :
            case "doors.inside" :
            case "drawers.stretched_texture" :
            case "doors.stretched_texture" :
            case "dblDoors.stretched_texture" :
                return 'boolean'

            case "dblDoors.nb" :
            case "doors.nb" :
            case "drawers.nb" :
            case "shelfs.nb" :
                return { 
                    type:"number",
                    round:1,
                    min:0
                }

            case "bottom.type" :
                return { 
                    type:"number",
                    round:1,
                    min:0,
                    max:10
                }

            case "drawers.handle" :
            case "doors.handle" :
            case "dblDoors.handle" :
                return { 
                    type:"string",
                }

        }
        return hcs.Programmable.prototype.getParamType.call( this , name );
    }

    Furniture.prototype.getDefaultParams = function() {
        var params = {
            version : 0,
            width : 80,
            height : 200,
            depth : 50,
            thickness : 3,
            elevation : 0,
            nbColumns : 1,
            structure : {
                rounded : 0,
                frontRounded : 0,
                radius : 20,
                back : 1,
            },
            shelfs : {
                nb : 3,
                elevations : "100,150",
                columns : 1,
                thickness : 3,
                widths : 0,
                orientations : -1,
                depths : 0
            },
            drawers : {
                nb : 3,
                elevations : "0,31,62",
                columns : 1,
                heights : "30,30,38",
                inside : 1,
                handle : 1,
                handle_positions : -1,
                thickness : 3,
                stretched_texture : 1
            },
            doors : {
                nb : 1,
                hinge : 1,
                elevations : 103,
                columns : 1,
                heights : 47,
                inside: 1,
                handle : 1,
                handle_positions : -1,
                thickness : 3,
                stretched_texture : 1
            },
            dblDoors : {
                nb : 1,
                elevations : 153,
                columns : 1,
                heights : 47,
                inside : 1,
                handle : 1,
                handle_positions : -1,
                thickness : 3,
                stretched_texture : 1
            },
            top : {
                thickness : 3,
                offset : 0
            },
            bottom : {
                thickness : 10,
                type : 1,
                angle : 0,
                offset : 0,
                size : 2,
            }
        };

        return params;
    };

    Furniture.prototype.animate = function(object, target) {

        var mesh = target.getParentByName("tiroir");
        if (!mesh)
            mesh = target.getParentByName("door"); 
        
        if (mesh) {
            if (mesh.name == "tiroir") {
                mesh.animationState = mesh.animationState ? mesh.animationState * -1 : 1;
                this.animateTiroir(object, mesh);
            }

            if (mesh.name == "door") {
                mesh.animationState = mesh.animationState ? mesh.animationState * -1 : 1;
                this.animateDoor(object, mesh);
            }   
        }

    }

    Furniture.prototype.animateTiroir = function (object, tiroir) {    
        var iteration = 0;
        var pas = 5;
        var that = this;
        var max = object.structure.programmableInstance.params.depth * 2/3;
        var interval = setInterval(function(){
            iteration += pas * tiroir.animationState;
            if (Math.abs(iteration) < max) {
                //that.slideAnimation(casements[i], iteration, pas, sens);
                tiroir.position.z += pas * tiroir.animationState;
                object.markAsDirty();
            } else {
                clearInterval(interval);
            }

        }, 50);
    }


    Furniture.prototype.animateDoor = function (object, door) {
        var iteration = 0;
        var pas = 0.1;
        var that = this;
        var hinge = door.hinge || this.params.doors.hinge || 1;

        if (hinge == 1 || hinge == -1){
            var interval = setInterval(function(){
                iteration += pas * door.animationState;
                if (Math.abs(iteration) < Math.PI/2) {
                    door.rotation.y += -door.animationState * hinge * pas;
                    object.markAsDirty();
                } else {
                    clearInterval(interval);
                }

            }, 50);
        } else {
            var hingeAdapted = -hinge*(-2) + 5;
            var interval = setInterval(function(){
                iteration += 2 * pas * door.animationState;
                if (Math.abs(iteration) < Math.PI/2) {
                    door.rotation.x += door.animationState * hingeAdapted * pas;
                    object.markAsDirty();
                } else {
                    clearInterval(interval);
                }

            }, 50);
        }
    }

    Furniture.prototype.getShelfs = function (object, scene) {
        var elevationShelf = this.params.shelfs.elevations.toString().split(",");
        var depths = this.params.shelfs.depths.toString().split(",");
        var columns = this.params.shelfs.columns.toString().split(",");
        var orientations = this.params.shelfs.orientations.toString().split(",");
        var widths = this.params.shelfs.widths.toString().split(",");

        for (var i = 0; i < +this.params.shelfs.nb ; i++) {
            if ((+(elevationShelf[i] || elevationShelf[0]) + this.params.shelfs.thickness/2) > this.params.height) {continue;}
                
            var width = +(widths[i] || widths[0]);
            width = width > 0 ? width : (this.params.width - 2*this.params.thickness);

            var orientation = +(orientations[i] || orientations[0]);
            var column = (columns[i] || columns[0]);

            var depth = +(depths[i] || depths[0]);
            depth = depth > 0 ? depth : this.params.depth;

            var shelf = BABYLON.Mesh.CreateBloc("global", width, this.params.shelfs.thickness, depth, scene);
            //shelf.material = materials['global'];
            shelf.position.y = +(elevationShelf[i] || elevationShelf[0]) + this.params.shelfs.thickness/2;
            shelf.position.z -= 0.1;
            shelf.parent = object;

            if (orientation == 1) {
                shelf.rotation.z = Math.PI/2;
            }

            if (this.params.nbColumns > 1 && column <= this.params.nbColumns && column > 0) {
               shelf.position.x = this.params.width / 2 - width/2 - this.params.thickness - (column - 1)*width;
           } else {
                var positionWidth = orientation == 1 ? 0 : width/2;
                shelf.position.x = this.params.width / 2 -positionWidth - this.params.thickness - this.calcMeasure(column);
           }



            GeometryHelper.giftWraper( shelf );
        }
    }

    Furniture.prototype.getDrawer = function (object, width, height, elevation, columnTiroir, handlePosition, scene) {

        var equipmentParams = this.getEquipmentParams(width, height, elevation, columnTiroir, this.params.drawers.inside);
        if (equipmentParams == false) {return;}
        equipmentParams.params.stretched_texture = this.params.drawers.stretched_texture;
        equipmentParams.params.handle_position = handlePosition;
        var elevation = equipmentParams.elevation;
        var width = equipmentParams.width;
        var height = equipmentParams.height;
        var tiroir = GeometryHelper.createTiroir(width , this.params.depth - this.params.thickness - this.params.drawers.thickness/2, height , this.params.drawers.thickness,  this.params.drawers.handle, equipmentParams.params, scene);
        tiroir.position.y = elevation;
        
        tiroir.position.z = (this.params.thickness - this.params.drawers.thickness/2)/2;
        tiroir.position.z += this.params.drawers.inside ? 0 : this.params.drawers.thickness + 0.2;
        

        if (this.params.nbColumns > 1) {
            var needThickness = this.params.drawers.inside ? this.params.thickness : 0;
            tiroir.position.x = this.params.width / 2 - width/2 - needThickness - (columnTiroir - 1)*width;
        }
        

        tiroir.name = "tiroir";
        tiroir.parent = object;
    }

    Furniture.prototype.getDrawers = function (object, scene) {
        var elevationTiroir = this.params.drawers.elevations.toString().split(",");
        var columnTiroirs = this.params.drawers.columns.toString().split(",");
        var heightTiroir = this.params.drawers.heights.toString().split(",");
        var widthT = this.params.drawers.inside ? this.params.width - 2*this.params.thickness - 1 : this.params.width - .2;
        var handlePositionDrawers = this.params.drawers.handle_positions.toString().split("|");
        for (var i = 0; i < +this.params.drawers.nb ; i++) {
            var heightT = +(heightTiroir[i] || heightTiroir[0]) - .6;
            var elevation = heightT/2 + ( +(elevationTiroir[i] || elevationTiroir[0]));
            var columnTiroir = +(columnTiroirs[i] || columnTiroirs[0]);
            var handlePosition = (handlePositionDrawers[i] || handlePositionDrawers[0]);
            this.getDrawer(object, widthT, heightT, elevation, columnTiroir, handlePosition, scene);
        }
    }

    Furniture.prototype.getEquipmentParams = function (width, height, elevation, column, inside) {

        if (this.params.nbColumns > 1) {
            width = width / this.params.nbColumns;
        }

        if (elevation.toString().indexOf(':') !== -1){
            elevation = +(elevation.split(":")[0]);
        }

        var inside = inside || 0;
        var bottomY = elevation-height/2;
        var topY = elevation+height/2;
        var params = {configuration:[0,0,0,0]};
        var configuration = this.getRoundedConfiguration();
        var cadreHeight = this.params.height - this.params.bottom.thickness - this.params.thickness - 0.2;
        if (inside == 1) {
           cadreHeight -= this.params.top.thickness;
        }
        if (this.params.structure.rounded) { // on gere l'interieur du cadre si jamais c'est arrondis
            cadreHeight += inside == 1 ? this.params.thickness : (2*this.params.thickness - this.params.top.thickness);//(- this.params.thickness/2);
            cadreHeight += this.params.top.thickness - 2*this.params.thickness;
        }
        if (bottomY > cadreHeight) { return false; } 
            
        if (topY > cadreHeight) {
            elevation -= height/2;
            height -= topY - (cadreHeight);
            elevation += height/2;
        }
        if (this.params.structure.rounded && bottomY <= this.params.structure.radius && (configuration[0] == 1 || configuration[3] == 1)) {
            params.rounded = true;
            params.radius = this.params.structure.radius;
            params.configuration[0] = configuration[0];
            params.configuration[3] = configuration[3];
        } 
        if (this.params.structure.rounded && topY > (cadreHeight- this.params.structure.radius/2) && (configuration[1] == 1 || configuration[2] == 1)) {
            params.rounded = true;
            params.radius = this.params.structure.radius;
            params.configuration[1] = configuration[1];
            params.configuration[2] = configuration[2];
        }

        if (this.params.nbColumns > 1 && column > 1) {
            params.configuration[3] = 0;
            params.configuration[2] = 0;
        }
        if (this.params.nbColumns > 1 && column < this.params.nbColumns) {
            params.configuration[1] = 0;
            params.configuration[0] = 0;
        }

        return {params:params, elevation:elevation, height:height, width:width};
    }

    Furniture.prototype.getDoor = function (object, width, height, elevation, column, hinge, handlePosition, scene) {

        var equipmentParams = this.getEquipmentParams(width, height, elevation, column, this.params.doors.inside);
        if (equipmentParams == false) {return;}
        equipmentParams.params.stretched_texture = this.params.doors.stretched_texture;
        equipmentParams.params.handle_position = handlePosition;
        var elevation = equipmentParams.elevation;
        var width = equipmentParams.width;
        var height = equipmentParams.height;
        //var door = GeometryHelper.createSimplePorte(width, height, this.params.doors.thickness, this.params.doors.hinge, materials['casement'], materials['handle'], this.params.doors.handle, equipmentParams.params, scene);
        var door = GeometryHelper.createSimplePorte(width, height, this.params.doors.thickness, -hinge, this.params.doors.handle, equipmentParams.params, scene);
        door.position.y += elevation;
        door.position.z = this.params.depth/2 -this.params.doors.thickness;
        door.position.z += this.params.doors.inside ? 0 : this.params.doors.thickness + 0.2;

        if (this.params.nbColumns > 1) {
            var needThickness = this.params.doors.inside ? this.params.thickness : 0;
            var hingeWidth = hinge <= 1 ? 0 : width/2;
            door.position.x = this.params.width / 2 - hingeWidth - needThickness - (column - 1)*width;
        }

        door.parent = object;

        GeometryHelper.giftWraper( door );
    }

    Furniture.prototype.getDoors = function (object, scene) {
        var elevationDoor = this.params.doors.elevations.toString().split(",");
        var columnDoors = this.params.doors.columns.toString().split(",");
        var heightDoor = this.params.doors.heights.toString().split(",");
        var hingeDoor = this.params.doors.hinge.toString().split(",");
        var handlePositionDoor = this.params.doors.handle_positions.toString().split("|");
        var widthD = this.params.doors.inside ? this.params.width - 2*this.params.thickness - 1 : this.params.width - .2;
        for (var i = 0; i < +this.params.doors.nb ; i++) {
            var heightD = +(heightDoor[i] || heightDoor[0]) - .6;
            var elevation = heightD/2 + ( + (elevationDoor[i] || elevationDoor[0]));
            var columnDoor = +(columnDoors[i] || columnDoors[0]);
            var hinge = hingeDoor[i] || hingeDoor[0];
            var handlePosition = (handlePositionDoor[i] || handlePositionDoor[0]);
            this.getDoor(object, widthD, heightD, elevation, columnDoor, hinge, handlePosition, scene);
        }
    }

    Furniture.prototype.getDblDoor = function (object, width, height, elevation, column,  handlePosition, scene) {

        var equipmentParams = this.getEquipmentParams(width, height, elevation, column, this.params.dblDoors.inside);
        if (equipmentParams == false) {return;}
        equipmentParams.params.stretched_texture = this.params.dblDoors.stretched_texture;
        equipmentParams.params.handle_position = handlePosition;

        var elevation = equipmentParams.elevation;
        var width = equipmentParams.width;
        var height = equipmentParams.height;

        var ddoor = GeometryHelper.createDoublePorte(width, height, this.params.dblDoors.thickness, this.params.dblDoors.handle, equipmentParams.params, scene);
        ddoor.position.y = elevation;
        ddoor.position.z = this.params.depth/2 -this.params.dblDoors.thickness;
        ddoor.position.z += this.params.dblDoors.inside ? 0 : this.params.dblDoors.thickness + 0.2;
        ddoor.parent = object;

        if (this.params.nbColumns > 1) {
            var needThickness = this.params.dblDoors.inside ? this.params.thickness : 0;
            ddoor.position.x = this.params.width / 2 - width/2  - needThickness - (column - 1)*width;
        }

        GeometryHelper.giftWraper( ddoor );
    }

    Furniture.prototype.getDblDoors = function (object, scene) {
        var elevationDblDoor = this.params.dblDoors.elevations.toString().split(",");
        var columnDoors = this.params.dblDoors.columns.toString().split(",");
        var heightDblDoor = this.params.dblDoors.heights.toString().split(",");
        var handlePositionDblDoor = this.params.dblDoors.handle_positions.toString().split("|");

        var widthD = this.params.dblDoors.inside ? this.params.width - 2*this.params.thickness - 1 : this.params.width - .2;
        for (var i = 0; i < +this.params.dblDoors.nb ; i++) {
            var heightD = +(heightDblDoor[i] || heightDblDoor[0]) - .6;
            var elevation = heightD/2 + ( + (elevationDblDoor[i] || elevationDblDoor[0]));
            var columnDoor = +(columnDoors[i] || columnDoors[0]);
            var handlePosition = (handlePositionDblDoor[i] || handlePositionDblDoor[0]);
            this.getDblDoor(object, widthD, heightD, elevation, columnDoor, handlePosition, scene);
        }
    } 

    Furniture.prototype.getMain = function(object, scene) {
        
        var main = new BABYLON.Mesh("main", scene);
        main.isVisible = false;
        

        this.getShelfs(main,scene);

        this.getDrawers(main,scene);

        this.getDoors(main,scene);

        this.getDblDoors(main,scene);

        main.position.y = this.params.elevation +  this.params.bottom.thickness + this.params.thickness;
        main.parent = object;
    }

    Furniture.prototype.getTop = function(object, scene) {
        if (this.params.structure.rounded) {return;}
        var width = this.params.width;
        width = this.params.structure.rounded ? width - this.params.structure.radius*2 : width;
        var top = BABYLON.Mesh.CreateBloc("top", width, this.params.top.thickness, this.params.depth + this.params.thickness/2 + this.params.top.offset, scene);
        //top.material = materials['top']);
        //top.position.y = this.params.elevation + this.params.bottom.thickness + this.params.thickness + this.params.top.thickness/2 + this.params.height;
        top.position.y = this.params.elevation + this.params.height - this.params.top.thickness/2;
        top.position.z += this.params.top.offset/2 - this.params.thickness/4;
        //top.name = "top";
        top.parent = object;

        GeometryHelper.giftWraper( top );
    }

    Furniture.prototype.getBottom = function(object, scene) {
        var width = this.params.width;
        width = (this.params.structure.rounded ? width - this.params.structure.radius*2 : width);
        if (this.params.bottom.type == 1) {
            var bottom = BABYLON.Mesh.CreateBloc("bottom", width, this.params.bottom.thickness, this.params.depth - this.params.bottom.offset, scene);
            bottom.position.y = this.params.elevation + this.params.bottom.thickness/2;
            GeometryHelper.giftWraper( bottom );
            //bottom.name = "bottom";
            bottom.parent = object;
        } else if (this.params.bottom.type >= 2) {

            var bottom = new BABYLON.Mesh("bottom", scene);
            bottom.isVisible = false;
            GeometryHelper.giftWraper( bottom );
            var footA = null;
            var angles = this.params.bottom.angle.toString().split(',');
            
            var angle =  +angles[0]*Math.PI/180;
            var angley = angles[1] ? +(angles[1]) : 0;
            angley *= Math.PI/180;
           
            
            if (this.params.bottom.type == 2) {
              footA = BABYLON.Mesh.CreateCylinder("foots", this.params.bottom.thickness*(1+Math.sin(angle)), this.params.bottom.size*2,  this.params.bottom.size*2, 10, 1, true, scene);
              // TODO : material
              //footA.material = materials['foots'];  
            } else if (this.params.bottom.type == 4) {
                footA = BABYLON.Mesh.CreateBloc("foots", this.params.bottom.size, this.params.bottom.thickness*(1+Math.sin(angle))/2, this.params.bottom.size, scene);
                var wheel = BABYLON.Mesh.CreateCylinder("wheel", this.params.bottom.size*2, this.params.bottom.thickness, this.params.bottom.thickness, 10, 1, true, scene);
                wheel.position.z -= this.params.bottom.thickness/3;
                wheel.rotation.z = Math.PI/2;
                wheel.position.y -= this.params.bottom.thickness*(1+Math.sin(angle))/3;
                wheel.parent = footA;
                footA.position.y += this.params.bottom.thickness*(1+Math.sin(angle))/3;
            } else {
              footA = BABYLON.Mesh.CreateBloc("foots", this.params.bottom.size, this.params.bottom.thickness*(1+Math.sin(angle)), this.params.bottom.size, scene);
            }
            var footB = footA.clone("foots");
            var footC = footA.clone("foots");
            var footD = footA.clone("foots");


            //footA.name = footB.name = footC.name = footD.name = "foots";

            var offsets = this.params.bottom.offset.toString().split(",");

            var offsetx = (+offsets[0]) + (+this.params.bottom.size);
            var offsety = (+(offsets[1] || offsets[0])) + (+this.params.bottom.size);

            
            footA.rotation.z = angle;
            footB.rotation.z = angle;
            footC.rotation.z = -angle;
            footD.rotation.z = -angle;

            footA.rotation.y = -angley;
            footB.rotation.y = angley;
            footC.rotation.y = -angley;
            footD.rotation.y = angley;

            footA.position.x = width/2 - offsetx + Math.sin(angle)/2*(+this.params.bottom.thickness);
            footB.position.x = width/2 - offsetx + Math.sin(angle)/2*(+this.params.bottom.thickness);
            footC.position.x = -width/2 + offsetx - Math.sin(angle)/2*(+this.params.bottom.thickness);
            footD.position.x = -width/2 + offsetx -  Math.sin(angle)/2*(+this.params.bottom.thickness);
            
           
            footA.position.z = this.params.depth/2 - offsety;
            footB.position.z = -this.params.depth/2 + offsety;
            footC.position.z = -this.params.depth/2 + offsety;
            footD.position.z = this.params.depth/2 - offsety;

            footA.parent = bottom;
            footB.parent = bottom;
            footC.parent = bottom;
            footD.parent = bottom;
            bottom.position.y = this.params.elevation + this.params.bottom.thickness/2;
            bottom.parent = object;


            if (this.params.bottom.type == 4) {
                footC.rotation.y += Math.PI;
                footB.rotation.y += Math.PI;
            }
        }
        
    }

    Furniture.prototype.getRoundedConfiguration = function() {
        if (!this._roundedConfiguration) {
            this._roundedConfiguration = this.params.structure.rounded.toString().split(',').length == 4 ? this.params.structure.rounded.toString().split(',') : [1, 1, 1, 1];
        } 
        return this._roundedConfiguration;
    }

    Furniture.prototype.getFond = function(object, scene) {
        if (this.params.structure.back == 0) {return;}
        //var heightC = this.params.height + this.params.thickness;
        var heightC = this.params.height - this.params.bottom.thickness - this.params.top.thickness;

        if (this.params.structure.rounded && this.params.structure.radius >= 0) {
            var configuration = this.getRoundedConfiguration();
            heightC += this.params.top.thickness;

            var fond = GeometryHelper.createRoundedPane(this.params.width, heightC, this.params.thickness, this.params.structure.radius, this.params.structure.nbseg, configuration, scene);
            fond.name = "global";
        } else {
           var fond = BABYLON.Mesh.CreateBloc("global", this.params.width, heightC, this.params.thickness, scene); 
        }
        fond.position.z -= this.params.depth/2;
        fond.position.y += heightC/2 + this.params.elevation +  this.params.bottom.thickness ;
        fond.parent = object;

        GeometryHelper.giftWraper( fond , null , false );
    }

    Furniture.prototype.getCadre = function(object, scene) {
        var heightC = this.params.height - this.params.bottom.thickness - this.params.top.thickness + this.params.thickness;
        this._height = heightC;
        this._width = this.params.width;
        if (this.params.structure.rounded && this.params.structure.radius >= 0) {
            var configuration = this.getRoundedConfiguration();
            heightC += this.params.top.thickness - this.params.thickness;
        } else {
            var configuration = [0,1,1,1];
        }
        var cadre = GeometryHelper.createCadre(this.params.width, heightC, this.params.thickness, this.params.depth, configuration, this.params.structure, scene);
        //cadre.material = materials['global'];
        cadre.position.y = heightC/2 + this.params.elevation + this.params.bottom.thickness;
        cadre.name = "global";
        
        cadre.parent = object;

        GeometryHelper.giftWraper( cadre , null , false );

        this.getTop(object, scene);

        this.getFond(object, scene);
    }

    Furniture.prototype.getObject3D = function(scene) {

        this.params.structure.rounded = this.params.structure.rounded.toString().indexOf(",") !== -1 ? this.params.structure.rounded : +(this.params.structure.rounded);
        if (this.params.structure.frontRounded == 1) {
            this.params.structure.rounded = 0;
        } else if (this.params.structure.rounded) {
            this.params.structure.frontRounded = 0;
        }

        this.migrateParams();

        var object = new BABYLON.Mesh("object", scene);
        object.isVisible = false;

        var object2 = new BABYLON.Mesh("object2", scene);
        object2.isVisible = false;
        //controle du radius
        if (this.params.structure.rounded) {
            if (this.params.structure.radius > this.params.width/2) {
                this.params.structure.radius = this.params.width/2;
            }
            if (this.params.structure.radius > this.params.height/2) {
                this.params.structure.radius = this.params.height/2;
            }
        }
        this.getCadre(object2, scene);

        this.getBottom(object2, scene);

        this.getMain(object2, scene);

        object2.rotation.y = Math.PI;

        object2.parent = object;
        return object;
    }

    Furniture.prototype.migrateParams = function () {
        var current = 1; 
        this.params.version = this.params.version || 0;

        if (this.params.version < current) {

            if (this.params.version == 0) { 
                var addThickness = this.params.structure.rounded ? (2*this.params.thickness - this.params.top.thickness) : this.params.thickness;
                this.params.height = this.params.height + this.params.top.thickness + this.params.bottom.thickness + addThickness;
            }

            this.params.version ++;
            this.migrateParams();
        }
    }

    return Furniture;
})();