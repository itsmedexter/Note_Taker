// linking routes
var dbData = require("../data/db");
var journalData = require("../data/journal");
var fs = require('fs');


module.exports = function(app) {
    // to db api
    app.post("/api/db", function(req, res) {
        res.json(dbData);
    });

    // to journal api
    app.get("/api/journal", function(req, res) {
    res.json(journalData);
    });

// This is where I'm having trouble not reading or writing to file

    // get fs read file
    app.get('/api/db', function(request, response) {
        readFile(request.query.url);
      })

    //  get fs save file
     app.post('/api/db', function(request, response) {
        saveFile(request.query.url, request.body.body);
      });
      
      

    


// app.get("/api/journal/:journal", function(req, res) {
//     return res.json(journalData);
// });

// // create new data, push new data to dbData and journalData
//     app.post("/api/db/new", function(req, res) {
//         var newdbdata = req.body;
//         console.log(newdbdata);
//         dbData.push(newdbdata);
//         journalData.push(newdbdata);
//         res.json(newdbdata);
//     });



//     app.put("/api/clear", function(req, res) {
//         // Empty out the arrays of journal
//         journalData.length = [];
    
//         res.json({ ok: true });
//       });

// request Id?
// var app = require('express')();
// var addRequestId = require('express-request-id')();
 
// app.use(addRequestId);
 
// app.get('/', function (req, res, next) {
//     res.send(req.id);
//     next();
// });
 
// app.listen(9000, function() {
//     console.log('Listening on port %d', server.address().port);
// });

    };