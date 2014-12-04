var wnp = window.wnp || {};
wnp.Assets = {
    globalPath: "http://v2.wanaplan.fr/",
    metalTextures: {
    diffuse: "http://v2.wanaplan.fr/textures/metal/metal_DIFFUSE.png",
        normal: "http://v2.wanaplan.fr/textures/metal/metal_NORMAL.png",
        specular: "http://v2.wanaplan.fr/textures/metal/metal_SPECULAR.png"
    },
    woodTextures: {
        diffuse: "http://v2.wanaplan.fr/textures/bois/bois_DIFFUSE.png",
        normal: "http://v2.wanaplan.fr/textures/bois/bois_NORMAL.png",
        specular: "http://v2.wanaplan.fr/textures/bois/bois_SPECULAR.png"
    },
    plasticTextures: {
        diffuse: "http://v2.wanaplan.fr/textures/plastique/plastique_DIFFUSE.png",
        normal: "http://v2.wanaplan.fr/textures/plastique/plastique_NORMAL.png",
        specular: "http://v2.wanaplan.fr/textures/plastique/plastique_SPECULAR.png"
    },
    whiteTexture: "http://v2.wanaplan.fr/textures/misc/white.jpg",
    blackTexture: "http://v2.wanaplan.fr/textures/misc/black.jpg",
    transparentTexture: "http://v2.wanaplan.fr/textures/misc/transparent.png",
    shadowTexture: "http://v2.wanaplan.fr/textures/shadow/shadow.png",
    roomTextures: {
        diffuse: "http://v2.wanaplan.fr/textures/parquet/parquet_DIFFUSE.png",
        normal: "http://v2.wanaplan.fr/textures/parquet/parquet_NORMAL.png",
        specular: "http://v2.wanaplan.fr/textures/parquet/parquet_SPEC.png"
    },
    firePlaceFire: "http://v2.wanaplan.fr/textures/fireplace/fireplace_tex.png",
    firePlaceBrick: {
        diffuse: "http://v2.wanaplan.fr/textures/fireplace/fire_place_brick.png",
        normal: "http://v2.wanaplan.fr/textures/fireplace/fire_place_brick_normals.png",
        specular: "http://v2.wanaplan.fr/textures/fireplace/fire_place_brick_spec.png"
    },
    firePlaceBrick2: {
        diffuse: "http://v2.wanaplan.fr/textures/textureset/brick/brick05.jpg",
        normal: "http://v2.wanaplan.fr/textures/textureset/brick/brick05_NORM.jpg",
        specular: "http://v2.wanaplan.fr/textures/textureset/brick/brick05_SPEC.jpg"
    },
    firePlacePlate: {
        diffuse: "http://v2.wanaplan.fr/textures/fireplace/fireplace_plate_tex.png",
        normal: "http://v2.wanaplan.fr/textures/fireplace/fireplace_plate_tex_normals.png",
        specular: "http://v2.wanaplan.fr/textures/fireplace/fireplace_plate_tex_spec.png"
    },
    induction: {
        map: "http://v2.wanaplan.fr/textures/misc/induction.jpg"
    },
    dishwasher: {
        map: "http://v2.wanaplan.fr/textures/misc/lavevaisselle.jpg"
    },
    hood: {
        map: "http://v2.wanaplan.fr/textures/misc/hotte.png"
    },
    oven: {
        map: "http://v2.wanaplan.fr/textures/misc/oven.png"
    },
    microwave: {
        map: "http://v2.wanaplan.fr/textures/misc/microwave.png"
    },
    firePlaceWood: {
        diffuse: "http://v2.wanaplan.fr/textures/fireplace/fireplace_wood.png",
        normal: "http://v2.wanaplan.fr/textures/fireplace/fireplace_wood_normals.png",
        specular: "http://v2.wanaplan.fr/textures/fireplace/fireplace_wood_spec.png"
    },
    envMapTexture: "http://v2.wanaplan.fr/textures/environment/SwedishRoyalCastle/src",
    flatEnvMapTexture: "http://v2.wanaplan.fr/textures/environment/flatInterior/flat",
    skyEnvMapTexture: "http://v2.wanaplan.fr/textures/environment/sky.jpg",
    toolbarTextures: {
        infoTexture: "http://v2.wanaplan.fr/textures/toolbar/info.png",
        infoTextureGroup: "http://v2.wanaplan.fr/textures/toolbar/infoGroup.png",
        rotateTexture: "http://v2.wanaplan.fr/textures/toolbar/rotate.png",
        arrowTexture: "http://v2.wanaplan.fr/textures/toolbar/arrow.png"
    },
    mattTexture: "http://v2.wanaplan.fr/textures/misc/CNPflat_tex.png",
    darkWoodTextures: {
        diffuse: "http://v2.wanaplan.fr/textures/wood/dark-wood1.png",
        normal: "http://v2.wanaplan.fr/textures/wood/dark-wood1_NORM.png",
        specular: "http://v2.wanaplan.fr/textures/wood/dark-wood1_SPEC.png"
    },
    bedSheetsTextures: {
        diffuse: "http://v2.wanaplan.fr/textures/bed/sheets.png",
        normal: "http://v2.wanaplan.fr/textures/bed/sheets_NORM.png",
        specular: "http://v2.wanaplan.fr/textures/bed/sheets_SPEC.png"
    },
    cromwellTextures: {
        diffuse: "models/babylon/chair/cromwell/cromwell_diff.png",
        normal: "models/babylon/chair/cromwell/cromwell_normals.png",
        specular: "models/babylon/chair/cromwell/cromwell_specular.png"
    },
    cushionTexture: "http://v2.wanaplan.fr/textures/bed/cushion-test3.png",
    vasqueDAE: "models/babylon/bathroom/components/vasque_s",
    doucheDAE: "models/babylon/bathroom/shower1/shower1.babylon",
    robinetDAE: "models/babylon/robinet/robinet.babylon",
    spotLampDAE: "models/babylon/lamps/lamp2/spot.babylon",
    robinet3DAE: "models/babylon/robinet/robinet3.babylon",
    robinet4DAE: "models/babylon/robinet/robinet4.babylon",
    robinet5DAE: "models/babylon/robinet/tap.babylon",
    boconceptfeetDAE: "models/babylon/table/boconcept/bocpart.babylon",
    ovaletableDAE: "models/babylon/table/ovale/ovale.babylon",
    cromwellleftsideDAE: "models/babylon/chair/cromwell/cromwell_leftside.babylon",
    cromwelrightsideDAE: "models/babylon/chair/cromwell/cromwell_rightside.babylon",
    cromwellcenterDAE: "models/babylon/chair/cromwell/cromwell_center.babylon",
    DaePath: "models/babylon/",
    retrieveImageScriptPath: "php/retrieveImage.php",
    retrieveObjectScriptPath: "php/retrieveObject.php",
    remote: {
        man: "images/remote-controller/green_man.png",
        cam: "images/remote-controller/green_cam.png",
        bg: "images/remote-controller/bg.png"
    },
    mainUIColor: "#897364",
    complementaryUIColor: "#897364",
    groupColor: "#897364"
};