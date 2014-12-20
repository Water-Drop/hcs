/*
 * Author：虞思源
 *
 * 存放本次项目中用到的一些常量
 * 包括local storage的key值，一些文件的路径等
 *
 */
var hcs = window.hcs || {};
hcs.Constants = {
    VERSION: "1.2.0.0",
    BACK_URL: "",
    WNP_URL: "",
    MIGRATION_PATH: "migration/plan?json=",
    ENGINE_2D: 1,
    ENGINE_3D: 2,
    MODE_STANDALONE: 0,
    MODE_CUSTOMER: 1,
    LANG: "en",
    LOCAL_STORAGE_STRUCTURE_KEY: "wanadev.planner.structure",
    LC_REM_LOGIN_KEY: "wanadev.planner.remember",
    LC_REM_CRYPT_KEY: "wanadev",
    LC_LANG_KEY: "wanadev.planner.lang",
    LC_MAC_GL_CHECK: "wanadev.planner.macosx.check",
    PRODUCTS_PATH: "data/products/",
    TEMPLATE_PATH: "js/Core/UI/Templates/",
    PROGRAMMABLE_PATH: "js/Components/CoreComponents/Object/Programmable",
    GRAPHICS_FAST: 0,
    GRAPHICS_GOOD: 1,
    GRAPHICS_QUALITY: 2,
    MAGNETISM: {
        NONE: 0,
        WALL: 1,
        OBJECT: 2,
        VERTICAL: 4
    },
    PRODUCTS_FILE: "data/products.json",
    PRODUCTS_PREVIEWS: "models/previews/"
}, hcs.Constants.MAGNETISM.DEFAULT = hcs.Constants.MAGNETISM.WALL | hcs.Constants.MAGNETISM.OBJECT | hcs.Constants.MAGNETISM.VERTICAL;