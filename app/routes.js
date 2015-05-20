"use strict";

var path = require('path');

// controllers
var GlobalCtrl = require('./global/globalCtrl');
var CatCtrl = require('./components/cat/catCtrl');
var DogCtrl = require('./components/dog/dogCtrl');

module.exports = function(app, router, passport) {

    // Inject Controller routes
    GlobalCtrl.add_routes(app, router);
    CatCtrl.add_routes(app, router);
    DogCtrl.add_routes(app, router);

    // *********
    // *********
    // *********


    //
    // TEST ERROR
    //
    router.get('/api/error', function(req, res, next) {
        // FORCE ERROR !!!!!!!!!!!!!!!!!!!!!!!!!!
        return next(new Error("FORCED test error"));
    });


    // *********
    // *********
    // *********


    //
    // Angular routes =========================================================
    //

    // route to handle all angular requests
    router.get('*', function(req, res) {
        res.sendFile('index.html', { root: path.join(__dirname, '../public') });
    });

};

