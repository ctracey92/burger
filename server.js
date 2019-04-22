//Requiring express
var express = require("express");

//Defines the port to be used
var PORT = process.env.PORT || 3000;

//Defines the app using express
var app = express();

//Allows for static content for the app from the 'public' directory.
app.use(express.static("public"));

//Middleware
// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Requires Handlebars...
var exphbs = require("express-handlebars");

app.engine("handlebars",exphbs({defaultLayout: "main"}));
app.set("view engine","handlebars");

//Imports the routes from the controller
var routes = require("./controllers/burgers_controller.js");

//Use said routes
app.use(routes);

//Starts the server
app.listen(PORT, function(){
    console.log("Server is listening on http://localhost:" + PORT);
});