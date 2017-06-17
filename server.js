var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var friendsArray = [];

//creates express server and sets an initial port
var app = express();   
var PORT = process.env.PORT || 3000;

// BodyParser makes it possible for our server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static files
// needs to be called before the routes in order to work
app.use(express.static('app/public'));
app.use(express.static('app/data'));
app.use(express.static('app/routing'));

//Router/route files
require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app);

//Listening to the port that was set up
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});