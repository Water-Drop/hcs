/**
 * @module hcsdesign
 * @namespace hcs
 * @submodule Programmable
 */

var hcs = window.hcs || {};
hcs.Programmable = hcs.Programmable || {};

hcs.Programmable.Sofa = (function () {
    /**
     * Define a basic 3D object (draw dynamically)
     *
     * @constructor
     * @class Sofa
     * @param {hcs.Core}
     * @param {Object}
     */
    var Sofa = function (engine, structure, params) {
        hcs.Programmable.call(this, engine, structure, params);
        for (var i in params) {
            this[i] = params[i];
        }
        this.objectName = 'Sofa';
    };

    // heritage
    for (var i in hcs.Programmable.prototype) {
        Sofa.prototype[i] = hcs.Programmable.prototype[i];
    }

    Sofa.prototype.getDefaultMaterials = function(scene) {
        var materials = {};
        // c est la bonne ligne a modifier : materials['global'] =  new hcs.MattMaterial({color:0x646268});
        // materials['global'] =  new hcs.MattMaterial({ map: hcs.Assets.mattTexture });
        materials['global'] =  new hcs.MattMaterial("global", scene, { diffuseTexture: hcs.Assets.mattTexture }, {red : 0.2, green : 0.2, blue : 0.2});
        materials['foot'] =  new hcs.WoodMaterial("foot", scene);

        return materials;
    };

    Sofa.prototype.getObject3D = function(scene) {
        var object = new BABYLON.Mesh("object", scene);
        object.isVisible = false;

        return object;
    };

    return Sofa;
})();