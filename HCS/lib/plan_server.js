var fs = require('fs');
var users = {};
var plans = {};

exports.start = function (app) {
    app.io.set('log level', 1);
    
    app.io.on('connection', function (socket) {
        console.log('connection');
    });
    handleInit(app);
    handleStorage(app);
    handleDisconnect(app);
};

exports.saveToDisk = function (){
    for (uuid in plans) { 
        fs.writeFileSync(getStorePath(uuid), JSON.stringify(plans[uuid]));
    }
    console.log('Save data completed.');
}
function loadPlan(uuid, exec) { 
    if (plans[uuid]) {
        console.log('read data from mem!');
        exec();
    } else {
        var path = getStorePath(uuid);
        fs.exists(path, function (exists) {
            //Check if file exists
            if (exists) {
                fs.readFile(path, function (err, data) {
                    try {
                        plans[uuid] = JSON.parse(data);
                    }
                    catch (e) {
                        plans[uuid] = {};
                    }
                    exec();
                });
            } else {
                plans[uuid] = {};
                exec();
            }
                
        });
    }
}

function getStorePath(uuid) { 
    return 'data/plans/' + uuid + '.json';
}
function handleInit(app) {
    app.io.route('init', function (req) {
        console.log(req.data.uuid + ' join');
        var uuid = req.data.uuid;
        users[req.socket.id] = uuid;
        loadPlan(uuid, function () { 
            req.io.respond(plans[uuid]);
        });
    });
}

function handleStorage(app) {
    app.io.route('get', function (req) {
        var uuid = users[req.socket.id];
        console.log(plans[uuid]);
        loadPlan(uuid, function (plan) {
            data = plans[uuid][req.data.key] || null;
            req.io.respond(data);
        });
    });
    app.io.route('set', function (req) {
        var uuid = users[req.socket.id];
        loadPlan(uuid, function (plan) {
            plans[uuid][req.data.key] = req.data.val;
        });
        
    });
    app.io.route('del', function (req) {
        var uuid = users[req.socket.id];
        loadPlan(uuid, function (plan) {
            delete plans[uuid][req.data.key];
        });        
    });
}

function handleDisconnect(app){
    app.io.route('disconnect', function (req) {
        console.log(req.socket.id + "disconnect");
        var uuid = users[req.socket.id];
        delete users[req.socket.id];
        fs.writeFile(getStorePath(uuid), JSON.stringify(plans[uuid]), function (err) {
            if (err) return console.log(err);
            delete plans[uuid];
        });
    });
}