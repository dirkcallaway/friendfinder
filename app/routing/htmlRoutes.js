var express = require('express');
var app = module.exports = express();
// Routes
// =============================================================

app.get("/survey", function(req, res){
  res.sendFile("C:/Users/mattp/Documents/Code/friendfinder/app/public/" + "survey.html");
});

app.get("*", function(req, res){
  res.sendFile("C:/Users/mattp/Documents/Code/friendfinder/app/public/" + "home.html");
});