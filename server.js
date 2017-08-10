//Dependencies

var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

//json parser
var jsonParser = bodyParser.json()

//url encoded parser
var urlencodedParser = bodyParser.urlencoded({extended: false})

app.use(bodyParser.json({ type: 'application/*+json'}))
app.use(bodyParser.raw({ type: 'application/vnd.custom-type'}))
app.use(bodyParser.text({ type: 'text/html'}))

app.listen(PORT, function(){
  console.log("app listening on http://localhost:%s", PORT);
})
