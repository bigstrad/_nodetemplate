// models
var Cat = require('./catModel');

exports.add_routes = function (app, router, passport) {
    router.get('/api/findCat', isLoggedIn, function(req, res, next) {
        Cat.find(function(err, obj) {
            if (err) { return next(err); }
            res.json(obj); // return data in JSON format
        });
    });

    router.get('/api/removeCat/:id', isLoggedIn, function(req, res, next) {
        var id = "" + req.params.id;
        Cat.findOne({_id: id}, function(err, obj){
            if (err) { return next(err); }
            if(obj) {
                obj.remove()
                res.send("removed id:"+ id);
            } else {
                res.send("id not found");
            }
        });
    });

    router.get('/api/saveCat', isLoggedIn, function(req, res, next) {
        var name = generateId();
        var cat = new Cat({
            name: "cat-"+name,
            body: "body for cat-"+name,
            comments: [
                { body: "comment for cat-"+name, date: new Date() }
            ],
            //date: { type: Date, default: Date.now },
            protected: false,
            meta: {
                votes: 0,
                favs: 0
            }
        });

        cat.save(function (err, obj) {
            if (err) { return next(err); }
            cat.speak();
            res.send("saved:"+ cat.name);
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

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    console.log("not logged in!");
    // if they aren't redirect them to the home page
    //res.redirect('/');
    req.end;
}