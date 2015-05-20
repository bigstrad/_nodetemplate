The following files must be included:

// MONGODB
A file db.js must be created containing the connection string for mongodb formatted as follows

module.exports = {
    uri: 'mongodb://localhost:27017/_nodetemplate',
    options: {
        //db: { native_parser: true },
        //server: { poolSize: 5 },
        //replset: { rs_name: 'myReplicaSetName' },
        server: { auto_reconnect:true, socketOptions: { keepAlive: 1, connectTimeoutMS: 5000 } },
        replset: { auto_reconnect:true, socketOptions: { keepAlive: 1, connectTimeoutMS : 5000 } }//,
        //user: 'user_info',
        //pass: 'password_info'
    }
}


// SMTP
A file smtp.js must be created containing the smtp server information formatted as follows

module.exports = {
    service: "Gmail",
    auth: {
        user: "user_info",
        pass: "password_info"
    }
}