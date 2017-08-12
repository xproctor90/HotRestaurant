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

var reservations = [{
	name: "yoda",
	number: "9999999999",
	email: "yoda@theforce.org",
	id: "sizemattersnot"
}, {
	name: "aang",
	number: "0101010101",
	email: "thelastairbender@avatar.com",
	id: "momowashere"
}, {
	name: "cuzco",
	number: "3333333333",
	email: "theemperor@peru.gov",
	id: "imperialhairness"
}];

var waitlist = [{
	name: "",
	number: "",
	email: "",
	id: ""
}];

//routes
app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
	res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
	res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/tables", function(req, res) {
	res.json(reservations);
});

app.get("/api/waitlist", function(req, res) {
	res.json(waitlist);
});

//reservation create

//server start
app.listen(PORT, function() {
	console.log("app listening on port " + PORT);
});

