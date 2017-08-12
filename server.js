var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//set up express app
var app = express();
var PORT = process.env.PORT || 3000;

//set up express app for data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

app.listen(PORT, function() {
	console.log("app listening on port " + PORT);
})