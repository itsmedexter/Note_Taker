var express = require("express");

var app = express();
var PORT = process.env.PORT || 9000;

// data parsing via Express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// this is to point to the directory where routes, html, css, index.js reside 
app.use(express.static("public"));
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// starts the server to begin listening
app.listen(PORT, function() {
    console.log("Hey, I'm on PORT " + PORT);
});