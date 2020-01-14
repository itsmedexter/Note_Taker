// html path
var path = require("path");

module.exports = function(app) {

    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"))
    });

    // app.use(express.static(__dirname + '/assets/css')); look at programing language
    app.use("/style.css", function(req, res) {
            res.sendFile(path.join(__dirname, "./public/assets/css"));
        });

    // default to index
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });



    // app.use(express.static(__dirname + '../public/assets/js'));
    app.use("/index", function(req, res) {
            res.sendFile(path.join(__dirname, "./public/assets/js"));
        });

}


