// The App
var express = require("express");
var bodyParser = require('body-parser')
var app = express();

// Use static middleware
app.use(express.static(__dirname + '/public'));

// Use the bodyParser middleware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

// Set the view engine
app.set('view engine', 'jade');

// Set the directory that contains the views
app.set('views', __dirname + '/views');

// Get route with one middleware
app.get("/", function (req, res) {
  res.send("<html><head></head><body><h1>Hello World</h1></body>");
});

// Create HTTP server with your app
var http = require("http");
var server = http.createServer(app)

// Listen to port 3000 
server.listen(3000);

