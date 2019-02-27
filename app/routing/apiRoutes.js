var friends = require("../data/friends.js");

// Routes
// =============================================================
module.exports = function(app){
app.get("/api/friends", function(req, res){
  console.log("api/friends url hit!");
  res.json(friends);
});

app.post("/api/friends", function(req, res){
  var surveyResults = [];
  Object.values(req.body).forEach(function(value){
    surveyResults.push(value[0]);
  });
  friends.forEach(function(friend){
    var difference = 0;
    for(var i = 0; i < friend.scores.length; i++){
      difference += Math.abs(friend.scores[i] - surveyResults[i]);
    }
    compatibility.push(difference);
    console.log(compatibility);
  });

});
};

