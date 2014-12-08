/**
 * @module Wanaplan
 * @namespace wnp
 * @submodule Programmable
 */


var wnp = window.wnp || {};
wnp.Programmable = wnp.Programmable || {};

wnp.Programmable.Aperture.Door = (function() {
    var that;
    /**
     * Define a basic 3D object (draw dynamically)
     *
     * @constructor
     * @class Door
     * @param {wnp.Core}
     * @param {Object}
     */
    var door = function (engine, structure, params) {
        wnp.Programmable.Aperture.call(this, engine, structure, params);
        for (var i in params) {
            this[i] = params[i];
        }
        this.animationState = 0;
        this.objectName = 'Overture';
        that = this;
    }

    door.prototype.loaded = false;

    if (typeof wnp.Programmable.Aperture != "undefined") {
        for (var i in wnp.Programmable.Aperture.prototype) {
            if (typeof door.prototype[i] == 'undefined') {
                door.prototype[i] = wnp.Programmable.Aperture.prototype[i];
            }
        }
        door.prototype.loaded = true;
    }

    door.prototype.getDefaultMaterials = function(scene) {
        var materials = {};
        // materials['bati'] = new wnp.WoodMaterial("bati", scene);
        //materials['cadre'] = new wnp.WoodMaterial("cadre", scene); //cadre
        materials['serrure'] = new wnp.MetalMaterial("serrure", scene, {brillance : 0.2});//{ color : 0xffffff, ambient : 0xFFFFFF, specular : 0xFFFFFF },true);
        materials['poigneeB1'] = new wnp.MetalMaterial("poigneeB1", scene, {brillance : 0.2});//{ color : 0xffffff, ambient : 0xFFFFFF, specular : 0xFFFFFF },true);
        materials['poigneeB2'] = new wnp.MetalMaterial("poigneeB2", scene, {brillance : 0.2});//{ color : 0xffffff, ambient : 0xFFFFFF, specular : 0xFFFFFF },true);
        materials['porteFront'] = new wnp.WoodMaterial("porteFront", scene);
        materials['porteBack'] = new wnp.WoodMaterial("porteBack", scene);
        materials['plinte'] = new wnp.WhiteMaterial("plinte", scene, {factor : 0.8}); //plinte
        materials['hinge'] = new wnp.MetalMaterial("hinge", scene, {brillance : 0.2});

        return materials;
    };

    door.prototype.getIsDoor = function(){
        return (1);
    }

    door.prototype.createCasement = function(index, cWidth, hingeBattant, scene) {

        var interieur = new BABYLON.Mesh("interieur", scene);
        interieur.isVisible = false;
        var hingeAdapted = (hingeBattant - 1/2) * 2;


        //var porteG = BABYLON.Mesh.CreateBloc("porteG", cWidth - 0.2, this.height -1, 3.5, scene);
        var porteFront = BABYLON.Mesh.CreateBloc("porteFront", cWidth - 0.2, this.height -1, 3.5, scene);
        if (this.stretched_texture != 0)  {
            GeometryHelper.setStretchUV(porteFront);
        }
       // porteFront.materials = materials['porteFront'];
        //var porteFront = new THREE.Mesh(porteG.clone(), materials['porteFront']);
        porteFront.name = "porteFront";
        porteFront.position.z = -1.75;
        porteFront.isDecorable = true;
      //  GeometryHelper.giftWraper(porteFront);

        var porteBack = BABYLON.Mesh.CreateBloc("porteBack", cWidth - 0.2, this.height -1, 3.5, scene);
        if (this.stretched_texture != 0)  {
            GeometryHelper.setStretchUV(porteBack);
        }
      //  porteBack.material = materials['porteBack']
        //var porteBack = new THREE.Mesh(porteG.clone(), materials['porteBack']);
        porteBack.name = "porteBack";
        porteBack.isDecorable = true;
        porteBack.position.z = 1.75;
      //  GeometryHelper.giftWraper(porteBack);

        porteFront.castShadow = true;
        porteBack.castShadow = true;

        var porte = new BABYLON.Mesh("porte", scene);
        porte.isVisible = false;
        porteBack.parent = porte;
        porteFront.parent = porte;
        porte.name = 'porte';

    //    var matHinge = materials['poignee'];

        var mesHinges = [];
        var widthHinge = 2;
        var heightHinge = 12;
        var tailleAbaissee = 8 * this.height / 10;
        //TODO : Mettre en params
        var nbHinges = 3;

        for(var i = 0; i < nbHinges; i++){
            var h = this.getHinge(heightHinge, widthHinge, scene);
            if (h) {
                mesHinges.push(h);
                mesHinges[i].position.x = (cWidth / 2 + widthHinge / 2) * (-hingeAdapted);
                mesHinges[i].position.y = (i * tailleAbaissee / (nbHinges-1)) - tailleAbaissee / 2;
                mesHinges[i].position.z = 2;
                mesHinges[i].name = 'mesHinges';
                mesHinges[i].isDecorable = true;
            }
        }

        if (mesHinges.length) {
            everyHinge = BABYLON.Mesh.mergeMeshesRec("hinge", mesHinges, scene);
            everyHinge.parent = interieur;
        }

       // var matPoignee = materials['poignee'];
        var isDoor = true;
        var poignee = this.getPoignee(isDoor, hingeAdapted, scene);
        // Position of the handle
        poignee.position.x = (cWidth/2-6) * hingeAdapted;
        // if (this.nbCasement >= 2) {
        //     hinge = hinge == 0 ? 0 : 1;
        // } else {
        //     hinge =  side == 1 ? Math.abs(1-hinge) : hinge;
        // }
        // poignee.position.x = (hinge == 0) ? poignee.position.x : -1*poignee.position.x;
        // poignee.rotation.y = (hinge == 0) ? poignee.rotation.y : poignee.rotation.y + Math.PI;
        poignee.name = 'poignee';

        poignee.isDecorable = true;
        porte.parent = interieur;
        poignee.parent = interieur;
        
        interieur.position.z += (this.thickness - 5) / 2 ;
        interieur.name = "casement";

        return interieur;
    }

    door.prototype.getObject3D = function(scene) {
        
        var hinge = that.hinge;
        var hingeAdapted = (hinge - 1/2) * 2;
        var object = new BABYLON.Mesh("object", scene);
        object.isVisible = false; 
        //console.warn("TODO : enlever les hacks de la porte")

        // var bati = GeometryHelper.createCadre(this.width, this.height, 0, this.thickness, null, null, scene);   
        // bati.name = 'bati';
        // bati.parent = object;
        // bati.castShadow = true;
        var hingeBattant;
        var casementWidth = this.width/this.nbCasement;

        for (var i = 0; i < this.nbCasement; i ++) {
            if (i%2 == 0) { 
                hingeBattant = hinge;
            } else {
                hingeBattant = 1 - hinge;
            }
            var casement = this.createCasement(i, casementWidth, hingeBattant, scene);
            casement.position.x = hingeAdapted * (-this.width/2 + (2*i+1)*casementWidth/2);
            if(this.sliding == true){
                casement.position.z = (i%4) * 4;
            }
            casement.parent = object;
            

        }

        var cadreThickness = 10, cadreDepth = 4;
        var plintesAvant = GeometryHelper.createCadre(this.width+2*cadreThickness+1, this.height + 2 * cadreThickness, cadreThickness + 0.1, cadreDepth, [1,1,1,0], null, scene );
        var plintesArriere = GeometryHelper.createCadre(this.width+2*cadreThickness+1, this.height + 2 * cadreThickness, cadreThickness + 0.1, cadreDepth, [1,1,1,0], null, scene );
        plintesAvant.position.z = this.structure.parentWall.thickness / 2;
        plintesArriere.position.z = -this.structure.parentWall.thickness / 2;
        var plinte = new BABYLON.Mesh.mergeMeshesRec("plinte", [plintesAvant, plintesArriere], scene);
        plinte.parent = object;

      
 
        //TODO
        object = this.positionAndRotate(object);

        object.isSceneObject = true;
        object.meshIdentifier = 'overture';
        object.name = 'Overture';

        // TODO this.applyShadow(object);

        return object;
    };

    door.prototype.getAvailableProperties = function () {
        return [];
    };

    return door;
})();