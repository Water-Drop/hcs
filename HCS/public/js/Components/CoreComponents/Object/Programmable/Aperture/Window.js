/**
 * @module Wanaplan
 * @namespace wnp
 * @submodule Programmable
 */

var wnp = window.wnp || {};
wnp.Programmable = wnp.Programmable || {};

wnp.Programmable.Aperture.Window = (function() {
                                    
                                    var that;
                                    var widthBarre = 10;
                                    /**
                                     *  Define a basic 3D object (draw dynamically)
                                     * @constructor
                                     * @class Window
                                     * @param {wnp.Core} Le moteur principal.
                                     * @param {Object} Des paramètres de configuration.
                                     */
                                    var pWindow = function(engine, structure, params) {
                                    wnp.Programmable.Aperture.call(this, engine, structure, params);
                                    
                                    for (var i in params) {
                                    this[i] = params[i];
                                    }
                                    
                                    this.animationState = 0;
                                    this.objectName = 'Window';
                                    that = this;
                                    };
                                    
                                    pWindow.prototype.loaded = false;
                                    
                                    if (typeof wnp.Programmable.Aperture != "undefined") {
                                    for (var i in wnp.Programmable.Aperture.prototype) {
                                    if (typeof pWindow.prototype[i] == 'undefined') {
                                    
                                    pWindow.prototype[i] = wnp.Programmable.Aperture.prototype[i];
                                    }
                                    }
                                    
                                    }
                                    
                                    pWindow.prototype.loaded = true;
                                    
                                    pWindow.prototype.getDefaultMaterials = function(scene) {
                                    var materials = {};
                                    materials['cadre'] = new wnp.WhiteMaterial("cadre", scene, {factor : 0.7}); //cadre
                                    //materials['poignee'] = new wnp.WhiteMaterial(); //poignee
                                    materials['vitre'] = new wnp.TransparentMaterial("vitre", scene, {opacity : 0.2}); //porte
                                    materials['vitre'].backFaceCulling = false;
                                    materials['serrure'] = new wnp.MetalMaterial("serrure", scene, {brillance : 0.2});
                                    materials['poignee'] = new wnp.MetalMaterial("poignee", scene, {brillance : 0.2});
                                    materials['poigneeB1'] = new wnp.MetalMaterial("poigneeB1", scene, {brillance : 0.2});
                                    materials['poigneeB2'] = new wnp.MetalMaterial("poigneeB2", scene, {brillance : 0.2});
                                    materials['joint'] = new wnp.MetalMaterial("joint", scene, {brillance : 0.2});
                                    materials['hinge'] = new wnp.WhiteMaterial("hinge", scene, {factor : 0.7});
                                    materials['Barre'] = new wnp.WhiteMaterial("Barre", scene, {factor : 0.7});
                                    materials['bati'] = new wnp.WhiteMaterial("bati", scene, {factor : 0.7});
                                    
                                    return materials;
                                    };
                                    
                                    pWindow.prototype.createCasement = function(index, cWidth, hingeBattant, scene) {
                                    
                                    
                                    var casement = new BABYLON.Mesh("casement", scene);
                                    casement.isVisible = false;
                                    var hingeAdapted = (hingeBattant - 1/2) * 2;
                                    var cadreThickness = 10, cadreDepth = 2;
                                    var cadre = GeometryHelper.createCadre(cWidth-0.2, this.height - 2*this.batiThickness, cadreThickness, cadreDepth, null, null, scene);
                                    cadre.position.z = 2;
                                    
                                    cadre.castShadow = true;
                                    cadre.name = 'cadre';
                                    cadre.isDecorable = true;
                                    cadre.parent = casement;
                                    
                                    
                                    //var poignee = BABYLON.Mesh.CreateBloc("poignee", 5, 5, cadreThickness+4, scene);
                                    //poignee.material = materials['poignee'];
                                    
                                    
                                    var mesHinges = [];
                                    var widthHinge = 2;
                                    var heightHinge = 12;
                                    var tailleAbaissee = 8 * this.height / 10;
                                    //TODO : Mettre en params
                                    var nbHinges = 3;
                                    
                                    if (!this.sliding) {
                                    for(var i = 0; i < nbHinges; i++){
                                    
                                    mesHinges.push(this.getHinge(heightHinge, widthHinge, scene));
                                    mesHinges[i].position.x = (cWidth / 2 + widthHinge / 2) * (-hingeAdapted);
                                    mesHinges[i].position.y = (i * tailleAbaissee / (nbHinges-1)) - tailleAbaissee / 2;
                                    mesHinges[i].position.z = 2 ;
                                    mesHinges[i].name = 'mesHinge';
                                    mesHinges[i].isDecorable = true;
                                    //mesHinges[i].parent = casement;
                                    
                                    }
                                    
                                    everyHinge = BABYLON.Mesh.mergeMeshesRec("hinge", mesHinges, scene);
                                    everyHinge.parent = casement;
                                    
                                    }
                                    
                                    var isDoor = false;
                                    
                                    if ((hingeBattant == 1) || (index == this.nbCasement-1)){
                                    var poignee = this.getPoignee(isDoor, hingeAdapted, scene);
                                    poignee.isDecorable = true;
                                    poignee.position.x =  -hingeAdapted * (-cWidth/2 + cadreThickness/2);
                                    poignee.position.z += 1;
                                    poignee.parent = casement;
                                    }
                                    var vitre = new BABYLON.Mesh.CreatePlan("vitre", cWidth - 2*cadreThickness, this.height - 2*cadreThickness, scene);
                                    vitre.position.z = 2;
                                    
                                    vitre.parent = casement;
                                    
                                    return casement;
                                    }
                                    
                                    pWindow.prototype.getCasementWidth = function() {
                                    var casementWidth;
                                    var batiThickness = this.batiThickness || 5;
                                    if(this.sliding == false){
                                    var nbBarres = parseInt((this.nbCasement - 1) / 2);
                                    } else {
                                    var nbBarres = 0;
                                    }
                                    casementWidth = (this.width  - 2*batiThickness - widthBarre * nbBarres)/this.nbCasement;
                                    return casementWidth;
                                    }
                                    
                                    pWindow.prototype.getIsDoor = function(){
                                    return 0;
                                    }
                                    
                                    pWindow.prototype.getObject3D = function(scene) {
                                    
                                    
                                    var hinge = that.hinge;
                                    var hingeAdapted = (hinge - 1/2) * 2;
                                    
                                    var object = new BABYLON.Mesh("object", scene);
                                    object.isVisible = false;
                                    
                                    
                                    var batiThickness = this.batiThickness || 5;
                                    var bati = GeometryHelper.createCadre(this.width, this.height, batiThickness, 2, null, null, scene);
                                    bati.name = 'bati';
                                    bati.castShadow = true;
                                    bati.parent = object;
                                    var casementWidth = this.getCasementWidth();
                                    var hingeBattant;
                                    
                                    for (var i = 0; i < this.nbCasement; i ++) {
                                    if (i%2 == 0) { 
                                    hingeBattant = hinge;
                                    } else {
                                    hingeBattant = 1 - hinge;
                                    }
                                    var casement = this.createCasement(i, casementWidth, hingeBattant, scene);
                                    casement.parent = object;
                                    if (this.sliding == false) {
                                    casement.position.x = hingeAdapted * ((batiThickness -this.width/2 + (2*i+1)*(casementWidth)/2) + parseInt((i)/2) * widthBarre);
                                    } else {
                                    casement.position.x = hingeAdapted * ((batiThickness -this.width/2 + (2*i+1)*(casementWidth)/2));
                                    casement.position.z = (i%4) * 4;
                                    }
                                    
                                    }
                                    
                                    if (this.sliding == false) {
                                    var nbBarres = parseInt((this.nbCasement - 1) / 2);
                                    for (var j = 0; j < nbBarres; j ++) {
                                    var Barre = BABYLON.Mesh.CreateBloc("bati", widthBarre, this.height, 2, scene);
                                    if(this.nbCasement%2 == 1){
                                    Barre.position.x = -hingeAdapted * (widthBarre - this.width / 2 + (j+0.5)*2*casementWidth + j*widthBarre);
                                    }
                                    Barre.parent = object;
                                    }
                                    }
                                    
                                    
                                    var plinteThickness = 10;
                                    cadreDepth = 4;
                                    
                                    if (this.plinte === 1) {
                                    var plinteAvant = GeometryHelper.createCadre(this.width+2*plinteThickness , this.height+2*plinteThickness, plinteThickness, cadreDepth, [1,1,1,1], null, scene);
                                    
                                    plinteAvant.position.z =  this.structure.parentWall.thickness / 2 + 2;
                                    plinteAvant.name = 'bati';
                                    plinteAvant.parent = object;
                                    }
                                    
                                    object.name = 'Overture';
                                    object.isSceneObject = true;
                                    
                                    object = this.positionAndRotate(object);
                                    object.meshIdentifier = 'overture';
                                    
                                    return object;
                                    }
                                    
                                    return pWindow;
                                    })();