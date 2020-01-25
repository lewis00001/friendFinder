// bring in the express node modual
var express = require("express");

// setup the server by declaring it - storying it as a var
var app = express();

// sets us ports for heroku || localhost
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing from a POST request
// url encoded 
app.use(express.urlencoded({ extended: true }));
// json encoded
app.use(express.json());

// requires a file, and then calling it with (app) - returns a function
// and passes to it the app var. 
// (app) says there is a function in route file that needs to have app
// passed to it so it can be run
require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

// activates server listening 
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
