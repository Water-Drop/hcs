/**
 * @module hcsdesign
 * @namespace hcs
 * @submodule Programmable
 */

var hcs = window.hcs || {};
hcs.Programmable = hcs.Programmable || {};

hcs.Programmable.Tv = (function () {
    /**
     * Define a basic 3D object (draw dynamically)
     *
     * @constructor
     * @class Tv
     * @param {hcs.Core} Le moteur principal.
     * @param {Object} Des paramètres de configuration.
     */

    var Tv = function (engine, structure, params) {
        hcs.Programmable.call(this, engine, structure, params);
        this.objectName = 'Tv';
        this._videoId = Tv.videoId++;
        structure.magnetismCollider = hcs.Constants.MAGNETISM.WALL | hcs.Constants.MAGNETISM.VERTICAL;
        structure.easeMagnetism = true;
        structure.preferredYAngle = Math.PI;
    };

    Tv.videoId = 0;

    // heritage
    for (var i in hcs.Programmable.prototype) {
        Tv.prototype[i] = hcs.Programmable.prototype[i];
    }


    Tv.prototype.localizeAndSortParams = function() {
        var params = {};

        params.basic = {
            "screen" : _("荧幕"),
            "screen.width" : _("荧幕宽度"),
            "screen.height" : _("荧幕高度")
        }

        params.advanced = {
            "cadre" : _("边框"),
            "cadre.thickness" : _("边框厚度"),
            "cadre.depth" : _("边框高度 "),
            "with_foot" : _("是否有支架")
        }

        return params;
    }



    Tv.prototype.getDefaultParams = function() {
        var params = {
            screen: {
                width: 88,
                height: 50
            },
            cadre: {
                thickness: 5,
                depth: 5
            },
            "with_foot" : 1
        };

        return params;
    };

    Tv.prototype.getParamType = function( name ){
        switch( name ){
            
            case "with_foot" :
                return 'boolean'

            case "screen.width" :
            case "cadre.depth" :
            case "screen.height" :
            case "cadre.thickness" :
                return { 
                    type:"number",
                    min:0,
                }
        }
        return hcs.Programmable.prototype.getParamType.call( this , name );
    }

    Tv.prototype._getVideoMaterial = function( scene ){

        if( this._videoMaterial )
            return this._videoMaterial;

        // all tv share the same material
        if( scene.getMaterialByName('tvVideoMaterial') )
            return ( this._videoMaterial = scene.getMaterialByName('tvVideoMaterial') );

        this._videoTexture = new BABYLON.VideoTexture("video", 
            [
                "textures/video/sintel.mp4", 
                "textures/video/sintel.webm"
            ],
            256, scene, true);

        this._videoTexture.video.setAttribute("autoplay", true);
        this._videoTexture.video.setAttribute("loop", true);
        this._videoTexture.video.setAttribute("paused", true);
        this._videoTexture.video.setAttribute("muted", true);


        this._videoMaterial = new BABYLON.StandardMaterial( "tvVideoMaterial" , scene );
        this._videoMaterial.diffuseTexture = this._videoTexture;
        this._videoMaterial.emissiveColor = new BABYLON.Color3(1,1,1);

        this._videoMaterial.numberUse = 0;

        return this._videoMaterial;
    };

    Tv.prototype._getIdleMaterial = function( scene ){

        if( this._idleMaterial )
            return this._idleMaterial;

        // all tv share the same material
        if( scene.getMaterialByName('tvIdleMaterial') )
            return ( this._idleMaterial = scene.getMaterialByName('tvIdleMaterial') );


        this._idleMaterial = new BABYLON.StandardMaterial( "tvIdleMaterial" , scene );
        this._idleMaterial.diffuseColor = new BABYLON.Color3(0.1,0.1,0.1);
        this._idleMaterial.emissiveColor = new BABYLON.Color3(0,0,0);

        return this._idleMaterial;
    };

    var getScreenMesh = function( mesh ){
        if( mesh.name == "tvScreen" )
            return mesh;
        var c = mesh.getChildren(),mm;
        for(var i=c.length; i-- && !(mm=getScreenMesh(c[i])) ; );
        return mm;
    };

    Tv.prototype.animate = function(object, target) {
        var screen = getScreenMesh( object );

        var scene = object.getScene();

        var videoMat = this._getVideoMaterial( scene );

        if (screen.playing) {
            //turn off
            
            screen.material = this._getIdleMaterial( scene );
            videoMat.numberUse --;
            if( !videoMat.numberUse )
                videoMat.diffuseTexture.video.pause();

            screen.playing = false;

        } else {
            // turn on
           
            screen.material = videoMat;
            if( !videoMat.numberUse )
                videoMat.diffuseTexture.video.play();
            videoMat.numberUse ++;

            screen.playing = true;
        }

    };

    Tv.prototype.getObject3D = function(scene) {
        var object = new BABYLON.Mesh("object", scene);
        object.isVisible = false;

        // start the video loading, prevent the tv to display a blank texture during the video loading when the user animate it
        this._getVideoMaterial(scene);


        var module = new BABYLON.Mesh("module", scene);
        module.isVisible = false;

        var screenMesh = BABYLON.Mesh.CreatePlan( "tvScreen", this.params.screen.width , this.params.screen.height, scene);
        screenMesh.rotation.y = Math.PI;

        screenMesh.material = this._getIdleMaterial( scene );
        
        var cadreTour = GeometryHelper.createCadre(this.params.screen.width + 2 * this.params.cadre.thickness,
                                    this.params.screen.height + 2 * this.params.cadre.thickness,
                                    this.params.cadre.thickness,
                                    this.params.cadre.depth,
                                    undefined,
                                    undefined,
                                    scene
                                    );
        var cadreFond = BABYLON.Mesh.CreateBloc("cadre", this.params.screen.width, this.params.screen.height, 2, scene);//, new THREE.Material());
        cadreFond.position.z -= 3;
        var cadre = BABYLON.Mesh.mergeMeshesRec("cadre", [cadreTour, cadreFond], scene);
        // TODO : material
        // cadre.material = ??

        screenMesh.parent = module;
        cadre.parent = module;
        module.position.y = this.params.screen.height/2;

        if (this.params.with_foot) {
            module.position.y += 16;

            var footFoot = BABYLON.Mesh.CreateCylinder("cadre", 4,40,40,16, 1, true, scene);
            footFoot.position.y = 2;
            var footBar = BABYLON.Mesh.CreateCylinder("cadre", 16,16,16,6, 1, true, scene);
            footBar.position.y = 8;

            var foot = BABYLON.Mesh.mergeMeshesRec("cadre", [footFoot, footBar], scene);
            // TODO : material
            //foot.material = materials["cadre"];
            foot.parent = object;
        }


        module.parent = object;

        var object2 = new BABYLON.Mesh("object", scene);
        object2.isVisible  = false;

        object.rotation.y = Math.PI;
        object.parent = object2;

        return object2;
    };

    return Tv;
})();
