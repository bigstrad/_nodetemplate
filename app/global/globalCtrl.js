var smtp            = require('../../app_config/smtp'),
    nodemailer      = require("nodemailer"),
    bodyParser      = require('body-parser');

// create application/json parser
var jsonParser = bodyParser.json()

// models
// ...

// http://www.nodemailer.com/
var transporter = nodemailer.createTransport({
    service: smtp.service,
    auth: {
        user: smtp.auth.user,
        pass: smtp.auth.pass
    }
});

exports.add_routes = function (app, router, passport) {

    router.post('/api/sendEmail', jsonParser, function (req, res, next) {
        if (!req.body) return next(new Error("No data"));

        var mailOptions = {
            from: "Big Strad ✔ <cecil.stradford@gmail.com>", // sender address
            to: "cecil.stradford@gmail.com", // comma-delimited list of receivers
            subject: req.body.subject, // Subject line
            //text: "", // plaintext body
            html: req.body.message // html body
        }

        transporter.sendMail(mailOptions, function(err, info){
            if (err) {
                return next(err);
            } else {
                console.log("Message sent: " + info.response);
                res.send("Sent");
            }
        });
    })

}

