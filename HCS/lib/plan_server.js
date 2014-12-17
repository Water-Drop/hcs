var fs = require('fs');
var plans = {};
var users = {};

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
function getStorePath(uuid) { 
    return 'data/plans/' + uuid + '.json';
}
function handleInit(app) {
    app.io.route('init', function (req) {
        console.log(req.data.uuid + ' join');
        var uuid = req.data.uuid;
        users[req.socket.id] = uuid;
        if (plans[uuid]) {
            console.warn('read data from mem!');
            req.io.respond(plans[uuid]);
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
                        req.io.respond(plans[uuid]);
                    });
                } else {
                    plans[uuid] = {};
                    req.io.respond({});
                }
                
            });
        }
    });
}

function handleStorage(app) {
    app.io.route('get', function (req) {
        var uuid = users[req.socket.id];
        console.log(plans[uuid]);
        data = plans[uuid][req.data.key] || null;
        req.io.respond(data);
    });
    app.io.route('set', function (req) {
        var uuid = users[req.socket.id];
        plans[uuid][req.data.key] = req.data.val;
    });
    app.io.route('del', function (req) { 
        var uuid = users[req.socket.id];
        delete plans[uuid][req.data.key];
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