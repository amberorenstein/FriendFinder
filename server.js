//Dependencies
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

// //json parser
// var jsonParser = bodyParser.json()

//url encoded parser
app.use(bodyParser.urlencoded({extended: true}));
//parse application JSON
app.use(bodyParser.json({ type: 'application/*+json'}))
app.use(bodyParser.raw({ type: 'application/vnd.custom-type'}))
//parse html/text
app.use(bodyParser.text({ type: 'text/html'}))

//required routes to files within the application
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function(){
  console.log("app listening on http://localhost:%s", PORT);
});
