"use strict";
var mongoose = require('mongoose'),
    db = require('../../app_config/db'),
    moment = require('moment');

//
// db object
//
var connection = mongoose.connection;

connection.on('connecting', function() {
    console.log(moment().toISOString() + ' - DB connecting...');
});

connection.on('error', function(err) {
    console.error(moment().toISOString() + ' - DB connection error:', err);
});

connection.on('connected', function() {
    console.log(moment().toISOString() + ' - DB connected.');
});

connection.once('open', function() {
    console.log(moment().toISOString() + ' - DB connection opened.');
});

connection.on('reconnected', function () {
    console.log(moment().toISOString() + ' - DB reconnected.');
});

connection.on('disconnected', function() {
    console.log(moment().toISOString() + ' - DB disconnected.');
});

//
// connect to mongoDB *IF* not connected - (credentials in config/db.js)
//
if (mongoose.connection.readyState == 0) {
    mongoose.connect(db.uri, db.options);
}

//
// export
//
module.exports = mongoose;