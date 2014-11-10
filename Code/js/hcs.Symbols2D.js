/*
 * Author：Du Jiawei
 * Date：2014/11/07
 * Email：jiaweidu.js@gmail.com
 * 
 * 用于2D图形的绘制（绘图函数）
 * 
 * context.arc(x,y,r,sAngle,eAngle,counterclockwise);
 * x	圆的中心的 x 坐标。
 * y	圆的中心的 y 坐标。
 * r	圆的半径。
 * sAngle	起始角，以弧度计。（弧的圆形的三点钟位置是 0 度）。
 * eAngle	结束角，以弧度计。
 * counterclockwise	可选。规定应该逆时针还是顺时针绘图。False = 顺时针(clockwise)，true = 逆时针(counterclockwise)。
 * 
 * context.translate(x,y);
 * x	添加到水平坐标（x）上的值
 * y	添加到垂直坐标（y）上的值
 * 
 */
var hcs = window.hcs || {};

hcs.Symbols2D = function() {
	///// modify: t --> symbols2D
    var symbols2D = function() {
        this.COLOR_ACTIVE_STROKE = "#89B808", 
        this.COLOR_ACTIVE_STROKE_DARKER = "#6C9104", 
        this.COLOR_ACTIVE_FILL = "rgba(137, 184, 8, 0.2)", 
        this.COLOR_ACTIVE_LARGEZONE_FILL = "rgba(137, 137, 137, 0.5)", 
        this.COLOR_INACTIVE_STROKE = "#777777", 
        this.COLOR_INACTIVE_FILL = "rgba(90, 119, 119, 0.1)", 
        this.COLOR_BACKGROUND = "#FAFAFA", 
        this.COLOR_ANNOTATION = "#888";
    };
    return symbols2D.prototype.drawPoint = function(context2D, o) {
    	/*
    	 * function: 画点（实心圆）
    	 * modify: 
    	 * t --> context2D(canvas.getContext("2d")) ： canvas的2D上下对象
    	 * e --> o (BABYLON.Vector2(x, y)) ： 圆心
    	 */
        context2D.save(),
        context2D.fillStyle = this.COLOR_ACTIVE_STROKE, // 填充（实心圆）
        context2D.beginPath(), 
        context2D.arc(o.x, o.y, 6, 0, 2 * Math.PI, !1), 
        context2D.fill(), // 填充（实心圆）
        context2D.restore();
    }, symbols2D.prototype.drawPointHover = function(context2D, o, out_r) {
    	/*
    	 * function: 画鼠标悬挂点（实心圆，外围一个圆环（空心圆））
    	 * modify:
    	 * t --> context2D(canvas.getContext("2d")) ： canvas的2D上下对象
    	 * e --> o (BABYLON.Vector2(x, y)) ： 圆心
    	 * n --> out_r (number, 表示外围圆环距圆心的距离/12，空心圆)
    	 */
        var out_r = out_r || 1;
        context2D.save(), 
        this.drawPoint(context2D, o), 
        context2D.strokeStyle = this.COLOR_ACTIVE_STROKE, // 描边（空心圆）
        context2D.lineWidth = 4, // 边宽度
        context2D.beginPath();
        var out_R = 12 * out_r;  // 表示外围圆环距圆心的距离
        10 > out_R && (out_R = 10), 
        context2D.arc(o.x, o.y, out_R, 0, 2 * Math.PI, !1), 
        context2D.stroke(), // 描边（空心圆）
        context2D.restore();
    }, symbols2D.prototype.drawAngle = function(context2D, v, n, sector_r, s_angle, e_angle, isClockwise) {
    	/*
    	 * function: 画角度（扇形+圆形+角度标注）
    	 * modify:
    	 * t --> context2D(canvas.getContext("2d")) ： canvas的2D上下对象
    	 * e --> v (BABYLON.Vector2(x, y)) ： 顶点
    	 * i --> sector_r ：扇形半径
    	 * o --> s_angle ：起始角弧度
    	 * r --> e_angle ：终止角弧度
    	 * s --> isClockwise ：是否是顺时针（推荐顺时针/False）
    	 * n --> not use
    	 */
        context2D.save(), 
        context2D.fillStyle = this.COLOR_ACTIVE_LARGEZONE_FILL, 
        context2D.strokeStyle = this.COLOR_ACTIVE_STROKE, 
        context2D.beginPath(), // 起始一条路径
        // 画扇形 
        context2D.moveTo(v.x, v.y), // 把路径移动到画布中的指定点，不创建线条
        context2D.arc(v.x, v.y, sector_r, s_angle, e_angle, isClockwise), 
        context2D.lineTo(v.x, v.y), 
        
        context2D.fill(), 
        context2D.stroke(), 
        
        context2D.font = "normal 8pt sans-serif", 
        context2D.textBaseline = "middle", 
        context2D.textAlign = "center";
        var a = {x: v.x + sector_r * Math.cos((e_angle + s_angle) / 2),y: v.y + sector_r * Math.sin((e_angle + s_angle) / 2)}, // 小圆圆心在1/2扇形圆弧处
        l = Math.round(180 * Math.abs(e_angle - s_angle) / Math.PI) + " °"; // 计算角度（弧度->角度）
        context2D.fillStyle = this.COLOR_BACKGROUND, 
        context2D.beginPath(), 
        context2D.arc(a.x, a.y, context2D.measureText(l).width / 2 + 2, 0, 2 * Math.PI), // 小圆形大小随角度数自适应
        context2D.fill(), 
        context2D.stroke(), 
        context2D.fillStyle = this.COLOR_ANNOTATION, 
        context2D.fillText(l, a.x, a.y), 
        context2D.restore();
    }, symbols2D.prototype.drawSegment = function(context2D, start, end) {
    	/*
    	 * function ：分割线（当鼠标移动至分隔线上，出现的绿色分割线，由一条线和两个圆形端点构成）
    	 * modify: 
    	 * e --> start ({x:10, y:10})
    	 * n --> end ({x:10, y:10})
    	 * t --> context2D
    	 */
        start.x = Math.round(start.x) + .5, 
        start.y = Math.round(start.y) + .5, 
        end.x = Math.round(end.x) + .5, 
        end.y = Math.round(end.y) + .5, 
        context2D.save(), 
        context2D.strokeStyle = this.COLOR_ACTIVE_STROKE, 
        context2D.fillStyle = this.COLOR_ACTIVE_STROKE, 
        context2D.lineWidth = 5, 
        this.drawPoint(context2D, start), 
        this.drawPoint(context2D, end), 
        context2D.beginPath(), 
        context2D.moveTo(start.x, start.y), 
        context2D.lineTo(end.x, end.y), 
        context2D.stroke(), 
        context2D.restore();
    }, symbols2D.prototype.drawArc = function(context2D, start, control, end) {
    	/*
    	 * function ：画弧线（采用二次贝塞尔曲线）
    	 * modify ：
    	 * e --> start（开始点）
    	 * n --> control（控制点）
    	 * i --> end（结束点）
    	 * t --> context2D
    	 */
        start.x = Math.round(start.x) + .5, 
        start.y = Math.round(start.y) + .5, 
        end.x = Math.round(end.x) + .5, 
        end.y = Math.round(end.y) + .5, 
        control.x = Math.round(control.x) + .5, 
        control.y = Math.round(control.y) + .5, 
        context2D.save(), 
        context2D.strokeStyle = this.COLOR_ACTIVE_STROKE, 
        context2D.fillStyle = this.COLOR_ACTIVE_STROKE, 
        context2D.lineWidth = 5, 
        this.drawPoint(context2D, start), 
        this.drawPoint(context2D, end), 
        context2D.beginPath(), 
        // 绘制二次贝塞尔曲线
        context2D.moveTo(start.x, start.y), 
        context2D.quadraticCurveTo(control.x, control.y, end.x, end.y), 
        
        context2D.stroke(), 
        context2D.restore();
    }, symbols2D.prototype.drawGrip = function(context2D, o, directions, startRotate) {
    	/*
    	 * function ：中间为一空心圆 周围（上下左右）四方向有三角形，分别由数组directions决定有无
    	 * modify：
    	 * t --> context2D
    	 * e --> o （空心圆圆心）
    	 * n --> directions [up, right, down, left]
    	 * i --> startRotate （调用drawArrows时，起始三角形的偏转度数） // [0, 1, 0, 1] --> MATH.PI/4 [1, 1, 1, 1] --> 0
    	 */
        var startRotate = startRotate || 0;
        o.x = Math.round(o.x), 
        o.y = Math.round(o.y), 
        context2D.save(), 
        context2D.strokeStyle = this.COLOR_ACTIVE_STROKE, 
        context2D.fillStyle = this.COLOR_BACKGROUND, 
        context2D.lineWidth = 2, 
        context2D.translate(o.x, o.y), 
        context2D.beginPath(), 
        context2D.arc(0, 0, 9, 0, 2 * Math.PI, !1), 
        context2D.fill(), 
        context2D.stroke(), 
        this.drawArrows(context2D, {x: 0,y: 0}, directions, 12, startRotate), 
        context2D.restore();
    }, symbols2D.prototype.drawCheckGrip = function(context2D, o, directions, startRotate) {
    	/*
    	 * function ：中间为一空心圆 周围（上下左右）四方向有三角形，分别由数组directions决定有无，中心圆包含一个对勾
    	 * modify：
    	 * t --> context2D
    	 * e --> o （空心圆圆心）
    	 * n --> directions [up, left, down, right]
    	 * i --> startRotate （调用drawArrows时，起始三角形的偏转度数） // [0, 1, 0, 1] --> MATH.PI/4 [1, 1, 1, 1] --> 0
    	 */
        var startRotate = startRotate || 0;
        o.x = Math.round(o.x), 
        o.y = Math.round(o.y), 
        context2D.save(), 
        context2D.translate(o.x, o.y), 
        context2D.strokeStyle = this.COLOR_BACKGROUND, 
        context2D.fillStyle = this.COLOR_INACTIVE_STROKE, 
        context2D.lineWidth = 2, 
        context2D.beginPath(), 
        context2D.arc(0, 0, 11, 0, 2 * Math.PI, !1), 
        context2D.fill(), 
        context2D.stroke(), 
        context2D.save(), 
        // 画对勾
        context2D.fillStyle = this.COLOR_BACKGROUND, 
        context2D.rotate(Math.PI / 4), 
        context2D.fillRect(-5, 2, 5, 4), 
        context2D.rotate(Math.PI / 2), 
        context2D.fillRect(-7, -3, 13, 4), 
        context2D.restore(), 
        this.drawArrows(context2D, {x: 0,y: 0}, directions, 12, startRotate), 
        context2D.restore();
    }, symbols2D.prototype.drawCancelGrip = function(context2D, o, directions, startRotate) {
    	/*
    	 * function ：中间为一空心圆 周围（上下左右）四方向有三角形，分别由数组directions决定有无，中心圆包含一个叉
    	 * modify：
    	 * t --> context2D
    	 * e --> o （空心圆圆心）
    	 * n --> directions [left, up, right, down]
    	 * i --> startRotate （调用drawArrows时，起始三角形的偏转度数） // [1, 0, 1, 0] --> MATH.PI/4 [1, 1, 1, 1] --> 0
    	 */
        var startRotate = startRotate || 0;
        o.x = Math.round(o.x), 
        o.y = Math.round(o.y), 
        context2D.save(), 
        context2D.translate(o.x, o.y), 
        context2D.strokeStyle = this.COLOR_BACKGROUND, 
        context2D.fillStyle = this.COLOR_INACTIVE_STROKE, 
        context2D.lineWidth = 2, 
        context2D.beginPath(), 
        context2D.arc(0, 0, 11, 0, 2 * Math.PI, !1), 
        context2D.fill(), 
        context2D.stroke(), 
        context2D.save(), 
        // 画叉
        context2D.fillStyle = this.COLOR_BACKGROUND, 
        context2D.rotate(Math.PI / 4), 
        context2D.fillRect(-7, -2, 14, 4), 
        context2D.rotate(Math.PI / 2), 
        context2D.fillRect(-7, -2, 14, 4), 
        context2D.restore(), 
        this.drawArrows(context2D, {x: 0,y: 0}, directions, 12, startRotate), 
        context2D.restore();
    }, symbols2D.prototype.drawGripSegment = function(context2D, start, end, startDirections, endDirections, startRotate) {
    	/*
    	 * function :两头带空心圆（包括小三角形）的线段
    	 * t --> context2D
    	 * e --> start
    	 * n --> end
    	 * i --> startDirections
    	 * o --> endDirections
    	 * r --> startRotate
    	 */
        var startRotate = startRotate || 0;
        start.x = Math.round(start.x) + .5, 
        start.y = Math.round(start.y) + .5, 
        end.x = Math.round(end.x) + .5, 
        end.y = Math.round(end.y) + .5, 
        context2D.save(), 
        context2D.strokeStyle = this.COLOR_ACTIVE_STROKE, 
        context2D.fillStyle = this.COLOR_ACTIVE_STROKE, 
        context2D.lineWidth = 5, 
        context2D.beginPath(), 
        context2D.moveTo(start.x, start.y), 
        context2D.lineTo(end.x, end.y), 
        context2D.stroke(), 
        this.drawGrip(context2D, start, startDirections, startRotate), 
        this.drawGrip(context2D, end, endDirections, startRotate), 
        context2D.restore();
    }, symbols2D.prototype.drawArrows = function(context2D, translatePt, directions, distFromO, startRotate, isStoke, triSize) {
    	///// to be continued....
    	/*
    	 * function ：画箭头上的小三角形（上下左右）
    	 * modify ：
    	 * t --> context2D
    	 * n --> directions(array:up right down left)
    	 * r --> startRotate(起始三角形偏转角度)
    	 * e --> translatePt(偏移位置)
    	 * s --> isStoke 是否描边
    	 * o --> distFromO 三角形顶点据中心圆圆心的位置
    	 * a --> triSize 三角形的尺寸
    	 */
        var a = a || {}, 
        l = a.size || 6, // 三角形的尺寸（等腰三角形，底为2*l，高为l）
        r = r || 0; // 起始三角形偏转角度
        var o = distFromO;
        for (context2D.save(), 
        	 context2D.translate(translatePt.x, translatePt.y), 
        	 context2D.rotate(startRotate), 
        	 context2D.fillStyle = this.COLOR_ACTIVE_STROKE, 
        	 context2D.strokeStyle = this.COLOR_BACKGROUND, 
        	 context2D.lineWidth = 2, 
        	 i = 0; 4 > i; i++) {
            directions[i] && (
            	context2D.beginPath(), 
            	context2D.moveTo(0, -o - l), 
            	context2D.lineTo(-l, -o), 
            	context2D.lineTo(l, -o), 
            	context2D.closePath(), 
            	isStoke && context2D.stroke(), 
            	context2D.fill()
            	), context2D.rotate(Math.PI / 2); // 旋转90°
           }
        context2D.restore();
    }, symbols2D.prototype.drawMeasure = function(context2D, start, end, message, color) {
    	/*
    	 * function ：箭头线段，中间有数值表示
    	 * modify ：
    	 * t --> context2D
    	 * e --> start
    	 * n --> end
    	 * i --> message
    	 * o --> color
    	 */
        context2D.save(), 
        context2D.strokeStyle = color || this.COLOR_ANNOTATION, 
        context2D.fillStyle = color || this.COLOR_ANNOTATION, 
        context2D.lineWidth = 1, 
        context2D.font = "normal 8pt sans-serif", 
        context2D.textBaseline = "middle", 
        context2D.textAlign = "center";
        /*
         * modify:
         * r --> deltaX
         * s --> deltaY
         * a --> distStart2End
         */
        var deltaX = end.x > start.x ? end.x - start.x : start.x - end.x, 
        deltaY = end.y > start.y ? end.y - start.y : start.y - end.y, 
        distStart2End = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2)), 
        l = Math.atan2(end.y - start.y, end.x - start.x),  // 旋转角度
        h = message ? context2D.measureText(message).width + 10 : 0; // 文字部分长度
        // 迁移坐标原点至线段中点
        // 文字前面部分线段绘制
        h > distStart2End - 2 || (context2D.translate(Math.round((start.x + end.x) / 2), Math.round((start.y + end.y) / 2)), 
        context2D.rotate(l), 
        context2D.beginPath(), 
        (distStart2End - h) / 2 > 5 && (context2D.moveTo(-Math.round(distStart2End / 2), .5), 
        context2D.lineTo(-Math.round(h / 2) + 1, .5), 
        // 文字前面部分线段绘制
        context2D.moveTo(Math.round(distStart2End / 2), .5), 
        context2D.lineTo(Math.round(h / 2) - 1, .5)), 
        context2D.save(), 
        
        // 画文字前面部分的箭头两个叉
        context2D.translate(-Math.round(distStart2End / 2), 0), 
        context2D.moveTo(.5, .5), 
        context2D.lineTo(5, 5), 
        context2D.moveTo(.5, .5), 
        context2D.lineTo(5, -4), 
        context2D.stroke(), 
        context2D.restore(), 
        context2D.save(), 
        
        // 画文字后面部分的箭头两个叉
        context2D.translate(Math.round(distStart2End / 2), 0), 
        context2D.moveTo(-.5, .5), 
        context2D.lineTo(-5, 5), 
        context2D.moveTo(-.5, .5), 
        context2D.lineTo(-5, -4), 
        context2D.restore(), 
        context2D.stroke(), 
        
        // 描写文字(保证文字方向)
        message && ((l >= Math.PI / 2 || l < -Math.PI / 2) && context2D.rotate(Math.PI), context2D.fillText(message, 0, -.5)), context2D.restore());
    }, symbols2D.prototype.drawCursorCheck = function(context2D, pt) {
    	/*
    	 * function ：画对勾
    	 * modify ：
    	 * t --> context2D
    	 * e --> pt (position/point)
    	 */
        var n = pt.x + 20, i = pt.y + 20;
        context2D.save(), 
        context2D.translate(n, i), 
        context2D.fillStyle = "rgba(0,0,0,.2)", 
        context2D.rotate(Math.PI / 4), 
        context2D.fillRect(-6, 2, 7, 6), 
        context2D.rotate(Math.PI / 2), 
        context2D.fillRect(-7, -5, 15, 6), 
        context2D.restore(), 
        context2D.save(), 
        context2D.translate(n, i), 
        context2D.fillStyle = this.COLOR_ACTIVE_STROKE_DARKER, 
        context2D.fillStyle = "#000", 
        context2D.rotate(Math.PI / 4), 
        context2D.fillRect(-7, 1, 7, 6), 
        context2D.rotate(Math.PI / 2), 
        context2D.fillRect(-8, -4, 15, 6), 
        context2D.restore(), 
        context2D.save(), 
        context2D.translate(n, i), 
        context2D.fillStyle = this.COLOR_BACKGROUND, 
        context2D.rotate(Math.PI / 4), 
        context2D.fillRect(-6, 2, 6, 4), 
        context2D.rotate(Math.PI / 2), 
        context2D.fillRect(-7, -3, 13, 4), 
        context2D.restore();
    }, symbols2D.prototype._drawAllSymbols = function(t) {
        this.drawPoint(t, {x: 100,y: 100}), 
        this.drawPointHover(t, {x: 150,y: 100}), 
        this.drawPointHover(t, {x: 200,y: 100}, 1.5), 
        this.drawSegment(t, {x: 250,y: 90}, {x: 300,y: 110}), 
        this.drawGrip(t, {x: 350,y: 100}, [!0, !0, !0, !0]), 
        this.drawGrip(t, {x: 400,y: 100}, [!1, !0, !1, !0], Math.PI / 4), 
        this.drawCheckGrip(t, {x: 450,y: 100}, [!0, !0, !0, !0]), 
        this.drawCancelGrip(t, {x: 500,y: 100}, [!1, !0, !1, !0], 3 * Math.PI / 4), 
        this.drawGripSegment(t, {x: 550,y: 90}, {x: 600,y: 110}, [!1, !1, !1, !0], [!1, !0, !1, !1], .4), 
        this.drawMeasure(t, {x: 650,y: 80}, {x: 750,y: 80}, "measure"), 
        this.drawMeasure(t, {x: 650,y: 100}, {x: 715,y: 100}, "measure"), 
        this.drawMeasure(t, {x: 650,y: 120}, {x: 706,y: 120}, "measure"), 
        this.drawCursorCheck(t, {x: 100,y: 150});
    }, symbols2D;
}();
