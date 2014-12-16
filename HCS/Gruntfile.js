module.exports = function (grunt){
    
	var modules =  [
        "hcs.Prepare",
        "Logger",
        "Handjs",
        "Babylon",
        "hcs.Widget.Rotator",
        "hcs.Widget.Info",
        "hcs.Widget.Elevation",
        "hcs.Widget.Clone",
        "hcs.Widget.Remove",
        "hcs.Widget.Group",
        "hcs.API",
        "Ujs",
        "PolygonMerger",
        "hcs.Module",
        "SaveAs",
        "Stats",
        "I18njs",
        "BrowserDetector",
        "GeometryHelper",
        "GlobalHelper",
        "HTMLHelper",
        "hcs.Symbols2D",
        "hcs.uuid",
        "hcs.Dummy",
        "hcs.Assets",
        "hcs.AnimationHandler",
        "hcs.Constants",
        "hcs.CameraFeatures",
        "hcs.DragControls",
        "hcs.Box3",
        "MaterialInfo",
// UI js

        "UI/hcs.UI.FormBuilder",
        "UI/hcs.UI.Frame",
        "UI/hcs.UI.ProductList",
        "UI/hcs.UI.ContextMenu",
        "hcs.UI.AboutWindow",
        "hcs.UI.BackgroundPopup",
        "hcs.UI.ColorPopup",
        "hcs.UI.HelpBubble",
        "hcs.UI.HelpBubbleManager",
        "hcs.UI.RemoteController",
        "UI/hcs.UI.MessageBox",
        "UI/hcs.UI.Menu",
        "hcs.UI.LanguageSelector",
        "UI/hcs.UI.IFrame",


//modified by Dujw

        "hcs.Input.OrbitCamera",
        "hcs.Input.FirstPersonCamera",
        "hcs.Input.TouchManager",
        "hcs.Input.PointerManager",
        "hcs.KeyboardManager",
        "hcs.MaterialFactory",
        "hcs.Structure",
        "hcs.Configuration",
        "hcs.ComponentCollection",
        "hcs.Core",
        "hcs.Engine2D",
        "hcs.Engine3D",
        "hcs.Basics",
        "Structure",
        "BaseComponent2D",
        "BaseComponent3D",
        "BaseEditionComponent",
        "MainMenuComponent",
        "TopMenuComponent",
        "BaseTopMenuComponent2D",
        "SaveComponent",
        "NewComponent",
        "OptionsComponent",
        "ExitComponent",
        "ScreenShotMenuComponent",
        "FullscreenComponent",
        "TransparencyComponent",
        "CameraComponent",
        "GridStructure",
        "GridComponent2D",
        "GridBackgroundComponent2D",
        "GridComponent3D",
        "HistoryEditionComponent",
        "HistoryComponent",
        "PrintComponent2D",
        "PrintComponent3D",
        "PerformanceComponent3D",
        "HardwareScalingComponent3D",
        "RemoteControlComponent3D",
        "MeasureStructure",
        "MeasureComponent",
        "DebugComponent2D",
        "DebugState",
        "DebugComponent3D",
        "updateRenderer",
        "DebugMark",
        "AnalyticsComponent",
        "GroupConfiguratorModComponent3D",
        "GroupConfiguratorPanelComponent3D",
        "ConfiguratorModComponent3D",
        "ConfiguratorPanelComponent3D",
        "ConfiguratorInOutAnimationComponent3D",
        "ConfiguratorXrayComponent3D",
        "MasterReshaperComponent3D",
        "DimensionReshaperComponent3D",
        "HandlesDisplayerForDimensionReshaperFactoryComponent3D",
        "BoundingLimitDisplayerForDimensionReshaperFactoryComponent3D",
        "MesureDisplayerForDimensionReshaperFactoryComponent3D",
        "MagnetismComponent2D",
        "MagnetismComponent3D",
        "AvatarComponent3D",
        "FloorStructure",
        "FloorComponent3D",
        "FloorController",
        "PointStructure",
        "PointComponent2D",
        "Graph",
        "WallStructure",
        "WallPane3D",
        "PolygonWall",
        "CurvedWall",
        "WallComponent2D",
        "WallComponent3D",
        "RoomStructure",
        "RoomHierarchy",
        "RoomComponent2D",
        "RoomComponent3D",
        "OvertureStructure",
        "OvertureComponent2D",
        "OvertureComponent3D",
        "SubSlopeStructure",
        "SubSlopeOvertureStructure",
        "SubSlopeComponent2D",
        "SubSlopeOvertureComponent2D",
        "SubSlopeComponent3D",
        "StairwayStructure",
        "SpiralStairwayStructure",
        "StairwayComponent2D",
        "StairwayComponent3D",
        "HopperStructure",
        "HopperComponent2D",
        "HopperComponent3D",
        "GeneralOptionComponent2D",
        "ObjectStructure",
        "hcs.Programmable",
        "DecorationComponent3D",
        "LuxensComponent3D",
        "OutsideComponent3D",
        "ObjectComponent3D",
        "EditionComponent3D",
        "MobileComponent",
        "MobileInputComponent",
        "PedagoComponent",
        "LockComponent",
        "EditMeasureComponent",
        "HideAvatarComponent",
        "hcs.LoopTimer",
        "hcs.init"
    ];
    var jsFiles = [];
    modules.forEach(function (e) { 
        jsFiles.push("public/js/" + e + ".js");
    });
	//配置
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			domop: 
				{ src: jsFiles, dest: 'public/js/hcs.js' }			
		},
        uglify: {
			options: {
				banner: '\n'
			},
			bulid: {
				src: 'public/js/hcs.js',
				dest: 'public/js/hcs.min.js'
			}
        },
        watch: {
            js: {
                files: jsFiles,
                tasks: ['concat']
            }
        }
	});

	//载入concat和uglify插件，分别对于合并和压缩
	grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

	//注册任务
	grunt.registerTask('default', ['concat', 'uglify']);

};