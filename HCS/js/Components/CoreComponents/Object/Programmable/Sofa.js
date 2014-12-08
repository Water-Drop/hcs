/**
 * @module Wanaplan
 * @namespace wnp
 * @submodule Programmable
 */

var wnp = window.wnp || {};
wnp.Programmable = wnp.Programmable || {};

wnp.Programmable.Sofa = (function () {
    /**
     * Define a basic 3D object (draw dynamically)
     *
     * @constructor
     * @class Sofa
     * @param {wnp.Core}
     * @param {Object}
     */
    var Sofa = function (engine, structure, params) {
        wnp.Programmable.call(this, engine, structure, params);
        for (var i in params) {
            this[i] = params[i];
        }
        this.objectName = 'Sofa';
    };

    // heritage
    for (var i in wnp.Programmable.prototype) {
        Sofa.prototype[i] = wnp.Programmable.prototype[i];
    }

    Sofa.prototype.getDefaultMaterials = function(scene) {
        var materials = {};
        // c est la bonne ligne a modifier : materials['global'] =  new wnp.MattMaterial({color:0x646268});
        // materials['global'] =  new wnp.MattMaterial({ map: wnp.Assets.mattTexture });
        materials['global'] =  new wnp.MattMaterial("global", scene, { diffuseTexture: wnp.Assets.mattTexture }, {red : 0.2, green : 0.2, blue : 0.2});
        materials['foot'] =  new wnp.WoodMaterial("foot", scene);

        return materials;
    };

    Sofa.prototype.getObject3D = function(scene) {
        var object = new BABYLON.Mesh("object", scene);
        object.isVisible = false;

        return object;
    };

    return Sofa;
})();