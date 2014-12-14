/**
 * @module hcsdesign
 * @namespace hcs
 * @submodule Programmable
 */

var hcs = window.hcs || {};
hcs.Programmable = hcs.Programmable || {};

hcs.Programmable.Aperture = (function () {
    /**
     * Define a basic 3D object (draw dynamically)
     *
     * @constructor
     * @class Overture
     * @param {hcs.Core} Le moteur principal.
     * @param {Object} Des paramètres de configuration.
     */

    var isWindow = 1; 

    var overture = function (engine, structure, params) {
        hcs.Programmable.call(this, engine, structure, params);
        for (var i in params) {
            this[i] = params[i];
        }
        this.animationState = 0;
        this.objectName = 'Overture';
        this.invertOrientation = false;
        this.invertSide = false;
    };
                             
    for (var i in hcs.Programmable.prototype) {
        overture.prototype[i] = hcs.Programmable.prototype[i];
    }

    overture.prototype.getObject3D = function(scene) {
        var object = new BABYLON.Mesh("object", scene);
        object.isVisible = false;

        return object;
    };


    overture.prototype.getHinge = function(heightHinge, widthHinge, scene){
        
        if (!this.sliding){
            var tailleDemiGond = heightHinge / 2;
            var hingeGlobal = new BABYLON.Mesh("hingeGlobal", scene);
            hingeGlobal.isVisible = false;

            var hingeTop = BABYLON.Mesh.CreateBloc("hingeTop", widthHinge, tailleDemiGond, widthHinge, scene);
            hingeTop.position.y = tailleDemiGond / 2 + 0.1;
            hingeTop.parent = hingeGlobal;

            var hingeBottom = BABYLON.Mesh.CreateBloc("hingeBottom", widthHinge, tailleDemiGond, widthHinge, scene);
            hingeBottom.position.y = - tailleDemiGond / 2 - 0.1;
            hingeBottom.parent =  hingeGlobal;

            return hingeGlobal;
        }

        return null;
    };

    overture.prototype.getPoignee = function (isDoor, hinge, scene) {
        var poignee = new BABYLON.Mesh("poignee", scene);
        poignee.isVisible = false;
        
        var that = this;

        if(this.sliding){
            if (isDoor  == true){
                var serrure = BABYLON.Mesh.CreateBloc("serrure", 6, 22, 10, scene);
            } else {
                var serrure = BABYLON.Mesh.CreateBloc("serrure", 6, 6, 7, scene);
                serrure.position.z = 1;
            }
        } else {
            if (isDoor  == true){
                var serrure = BABYLON.Mesh.CreateBloc("serrure", 6, 22, 10, scene);
            } else {
                var serrure = BABYLON.Mesh.CreateBloc("serrure", 5, 22, 3, scene);
                serrure.position.z = 2;
            }
        }

        serrure.parent = poignee;

        if (this.sliding) {

        } else {

            if (isDoor == true){
                var poigneeB1 = BABYLON.Mesh.CreateBloc("poigneeB1", 16, 3, 3, scene);
                poigneeB1.position.y = 6;
                poigneeB1.position.z = 7;
                poigneeB1.position.x = 6 * (-hinge);
                poigneeB1.parent = poignee;
            } else {
                var poigneeB1 = BABYLON.Mesh.CreateCylinder("poigneeB1", 16, 3, 3, 5, 1, true, scene);
                var joint = BABYLON.Mesh.CreateBloc("joint", 2, 3, 5, scene);
                poigneeB1.position.z = 6;
                poigneeB1.position.y = -5;
                joint.position.z = 3;
                joint.position.y = 1.5;
                poigneeB1.parent = poignee;
                joint.parent = poignee;
            }
            
            if (isDoor == true){
                var poigneeB2 = BABYLON.Mesh.CreateBloc("poigneeB2", 16, 3, 3, scene);
                poigneeB2.position.y = 6;
                poigneeB2.position.z = -7;
                poigneeB2.position.x = 6 * (-hinge);
                poigneeB2.parent = poignee;
                
            }
        }
        //poignee = BABYLON.Mesh.mergeMeshesRec("poignee", [poignee], scene);
        return poignee;
    };

    overture.prototype.getCasementWidth = function(hinge) {
        return this.width / this.nbCasement;
    }

    overture.prototype.getPositionX = function(index, hinge) {
        
        var batiThickness = this.batiThickness || 5;
        var hingeAdapted = (hinge - 1/2) * 2;
        var widthBarre = 10;
        var PositionX;
        if(this.getIsDoor() == 0){
            if(this.sliding == false){
                PositionX = hingeAdapted * ((batiThickness -this.width/2 + (2*index+1)*(this.getCasementWidth(hinge))/2) + parseInt((index)/2) * widthBarre);
            } else {
                PositionX = -(this.width/2 - this.getCasementWidth(hinge) / 2 - index * this.getCasementWidth(hinge));
                
            }
        } else {
            if(this.sliding == false){
                PositionX = hingeAdapted * (-this.width/2 + (2*index+1)*this.getCasementWidth(hinge)/2);
            } else {
                PositionX = (this.width/2 - this.getCasementWidth(hinge) / 2 - index * this.getCasementWidth(hinge));
            }
        }
        return PositionX;
    }

    overture.prototype.getIsDoor = function(){
        return 0;
    }


    overture.prototype.rotateCasement = function(object, angle, width) {
        var rotObjectMatrix = new THREE.Matrix4();
        var transObjectMatrix = new THREE.Matrix4();
        var transInvObjectMatrix = new THREE.Matrix4();
        rotObjectMatrix.makeRotationAxis(new BABYLON.Vector3(0,1,0), angle);
        transObjectMatrix.makeTranslation(width/2,0,0);
        transInvObjectMatrix.makeTranslation(-width/2,0,0);
        transInvObjectMatrix.multiply(rotObjectMatrix).multiply(transObjectMatrix);
        object.applyMatrix(transInvObjectMatrix);
    }

    

    overture.prototype.animate = function(object) {
        var casements = [];
        object.traverse(function(mesh) {
            if (mesh.name == "casement") {
                casements.push(mesh);
            }
        });

        if (this.animationState == 0) {
            this.animationState = 1;
            this.launchAnimation(object, casements, 1);
        } else {
            this.animationState = 0;
            this.launchAnimation(object, casements, -1);
        }

    };

    overture.prototype.launchAnimation = function(object, casements, sens) {
        var iteration = 0;
        var pas = 5;
        var that = this;
        var hinge = that.hinge || 0;

        var interval = setInterval(function(){

            hcsdesign.engine3D.scene.getMeshByName("FloorMesh_0").markAsDirty();
            iteration += pas;
            if(that.sliding == true){
                if (iteration < casements.length * that.params.height) {
                    for (var i = 0; i < casements.length; i ++) {
                        that.slideAnimation(casements[i], iteration, pas, sens, hinge, i);
                    }
                } else {
                    clearInterval(interval);
                }
            } else {
                if (iteration < 75) {
                    for (var i = 0; i < casements.length; i ++) {
                        that.rotateAnimation(casements[i], iteration, pas, sens, hinge, i);
                    }
                } else {
                    clearInterval(interval);
                }
            }

        }, 50);

    }


    overture.prototype.slideAnimation = function(casement, iteration, pas, sens, hinge, index) {
        if(hinge == 1){
            if (sens == 1) {
                if(casement.position.x > - (this.width/2 - this.getCasementWidth(hinge)/2 - 5)){
                    
                    casement.position.x -= sens * pas;
                }
            } else {
                if(casement.position.x <= this.getPositionX(index, hinge)) {  
                                 
                    casement.position.x -= sens * pas;
                }
            }
        } else {
            if (sens == 1) {
                if(casement.position.x < (this.width/2 - this.getCasementWidth(hinge)/2 - 5)){
                    casement.position.x += sens * pas;
                }
            } else {
                if(casement.position.x > this.getPositionX(index, hinge)) {            
                    casement.position.x += sens * pas;
                }
            }
        }
    }


    overture.prototype.rotateAnimation = function(casement, iteration, pas, sens, hinge, index) {
        var poigneeB1 = casement.getChildByName("poigneeB1");
        var hingeAdapted = (hinge - 1/2) * 2;
        var hingeIndex;
        if (index%2 == 1) {
            hingeIndex = -1;
        } else {
            hingeIndex = 1;
        }

        if (this.getIsDoor() == 0){
            if (poigneeB1 != null){
                if (sens == 1) {
                    poigneeB1.position.y = 3;
                    poigneeB1.position.x = -6*hingeIndex*hingeAdapted;
                    poigneeB1.rotation.z = Math.PI/2;
                }
            }
            if (sens == -1 && iteration == 70 && poigneeB1 != null){
                poigneeB1.rotation.z = 0;
                poigneeB1.position.y = -5;
                poigneeB1.position.x = 0;
            }
        }
    
        var largeurGond = 2;
        var doorWindow = this.getIsDoor();
        casementEntier = this.getCasementWidth(hinge) + largeurGond;
        casement.rotation.y += -hingeAdapted * (hingeIndex) * sens * 0.1;
        casement.position.x = -hingeAdapted * (hingeIndex) * ((casementEntier/2) -(casementEntier/2) * Math.cos(casement.rotation.y)) + this.getPositionX(index, hinge);
        casement.position.z = -hingeAdapted * (hingeIndex) * (((this.getCasementWidth(hinge)/2) + 1.5*largeurGond) * Math.sin(casement.rotation.y));    
        casement.computeWorldMatrix(true);
        
    }

    overture.prototype.positionAndRotate = function (object) {
        if (!this.structure.getAbsolutePos) {return object}

        var pos2D = this.structure.getAbsolutePos().position;
        object.position.copyFromFloats(pos2D.x, (this.height)/2+this.structure.elevation, -pos2D.y);

        object.rotation.y = this.structure.getAngle();
        if(this.side == 1){
            object.rotation.y += Math.PI;
        }

        return object;
    }

    overture.prototype.getAvailableProperties = function (objectInstance) {
        var that = this;

        var items = [];

        if (this.nbCasement == 1 && !this.sliding) {
            items.push({
                name: "hinge",
                label: "hinge",
                type: "button",
                cast: "int",
                value: "inverser",
                eventParams: {
                    eventName: "hcs.contextMenu.propertyChanged",
                    property : "hinge",
                    cast: "int"
                }
            });
        }

        if (this.nbCasement > 0 && !this.sliding) {
            items.push({
                name: "side",
                label: "side",
                type: "button",
                cast: "int",
                value: "inverser",
                eventParams: {
                    eventName: "hcs.contextMenu.propertyChanged",
                    property : "side",
                    cast: "int"
                }
            });
        }

        if (this.stretched_texture !== 'undefined') {
            items.push({
                name: "stretched_texture",
                label: "stretched texture",
                type: "button",
                cast: "bool",
                value: this.stretched_texture
            });
        }

        return items;
    };

    return overture;
})();