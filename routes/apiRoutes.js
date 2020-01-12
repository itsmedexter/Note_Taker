// linking routes
var dbData = require("../data/db");
var journalData = require("../data/journal");

module.exports = function(app) {
    // to db api
    app.get("/api/db", function(req, res) {
        res.json(dbData);
    });
// to journal api
    app.get("/api/journal", function(req, res) {
        res.json(journalData);
    });

    app.post("/api/db", function(req, res) {

        if (dbData.length < 5) {
            dbData.push(req.body);
            res.json(true);
          }
          else {
            journalData.push(req.body);
            res.json(false);
          }
    });

    app.put("/api/clear", function(req, res) {
        // Empty out the arrays of data
        dbData.length = [];
        journalData.length = [];
    
        res.json({ ok: true });
      });

// request Id?
var app = require('express')();
var addRequestId = require('express-request-id')();
 
app.use(addRequestId);
 
app.get('/', function (req, res, next) {
    res.send(req.id);
    next();
});
 
app.listen(9000, function() {
    console.log('Listening on port %d', server.address().port);
});

    };