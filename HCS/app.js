﻿/**
 * Module dependencies.
 */

var express = require('express.io');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var ejs = require('ejs');

var app = express().http().io();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
//app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/design', routes.design);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

var planServer = require('./lib/plan_server');
planServer.start(app);

//截获contro-c命令
process.on('SIGINT', function () {
    process.exit();
});
//进程退出时触发
process.on('exit', function () {
    //保存数据到文件
    planServer.saveToDisk();
});

