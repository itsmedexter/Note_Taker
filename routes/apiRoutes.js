// linking routes
var dbData = require("../data/db");
var journalData = require("../data/journal");
var fs = require('fs');
var path = require('path');

module.exports = function(app) {
  

// get fs read file
app.get('/api/db', function(request, response) {
    fs.readFile(path.join(__dirname, '..', 'data', 'db.json'),'utf8', (err, data) => {
        if (err) throw err;
        response.json(JSON.parse(data));
      });
  })

  app.delete('/api/db/:index', function(request, response) {
    fs.readFile(path.join(__dirname, '..', 'data', 'db.json'),'utf8', (err, data) => {
        if (err) throw err;
        const newData = JSON.parse(data);
        if (request.params.index >= newData.length) {
            response.sendStatus(500);
        }
        newData.splice(request.params.index, 1);
        fs.writeFile(path.join(__dirname, '..', 'data', 'db.json'),JSON.stringify(newData), (err) => {
            if (err) throw err;
            response.sendStatus(200);
          });
      });
  })

//  get fs save file
 app.post('/api/db', function(request, response) {
    fs.readFile(path.join(__dirname, '..', 'data', 'db.json'),'utf8', (err, data) => {
        if (err) throw err;
        var data = JSON.parse(data);
        //Accept input from user and actually add it
        data.push(request.body);
        fs.writeFile(path.join(__dirname, '..', 'data', 'db.json'),JSON.stringify(data), (err) => {
            if (err) throw err;
            response.sendStatus(200);
          });
      });
  });









    // to journal api
    app.get("/api/journal", function(req, res) {
    res.json(journalData);
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