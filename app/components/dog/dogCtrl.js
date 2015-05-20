// models
var Dog = require('./dogModel');

exports.add_routes = function (app, router, passport) {
    router.get('/api/findDog', function(req, res, next) {
        Dog.find(function(err, obj) {
            if (err) { return next(err); }
            res.json(obj); // return data in JSON format
        });
    });

    router.get('/api/removeDog/:id', function(req, res, next) {
        var id = "" + req.params.id;
        Dog.findOne({_id: id}, function(err, obj){
            if (err) { return next(err); }
            if(obj) {
                obj.remove()
                res.send("removed id:"+ id);
            } else {
                res.send("id not found");
            }
        });
    });

    router.get('/api/saveDog', function(req, res, next) {
        var name = generateId();
        var dog = new Dog({
            name: "dog-"+name,
            body: "body for dog-"+name,
            comments: [
                { body: "comment for dog-"+name, date: new Date() }
            ],
            //date: { type: Date, default: Date.now },
            protected: false,
            meta: {
                votes: 0,
                favs: 0
            }
        });

        dog.save(function (err, obj) {
            if (err) { return next(err); }
            dog.speak();
            res.send("saved:"+ dog.name);
        });
    });

}

// private functions
function generateId() {
    var genName = "";
    var possible = "abcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < 5; i++ )
        genName += possible.charAt(Math.floor(Math.random() * possible.length));
    return genName;
}