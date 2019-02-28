var friends = require("../data/friends.js");

// Routes
// =============================================================
module.exports = function(app){
app.get("/api/friends", function(req, res){
  console.log("api/friends url hit!");
  res.json(friends);
});

app.post("/api/friends", function(req, res){
  var mostCompatibleScore = 45;
  var compatibleFriend;
  var surveyResults = [];
  var compatibility = [];
  //Creates an array of the survey answers.  Taking just the first character.
  req.body.scores.forEach(function(value){
    surveyResults.push(value[0]);
  });
  //Loops over each friend...
  friends.forEach(function(friend){
    var difference = 0;
    //Compares their scores to the results.
    for(var i = 0; i < friend.scores.length; i++){
      difference += Math.abs(friend.scores[i] - surveyResults[i]);
    }
    //Pushes the final compatibility score into an array.
    compatibility.push(difference);
  });
  for(var i = 0; i < compatibility.length; i++){
    if(compatibility[i] < mostCompatibleScore){
      mostCompatibleScore = compatibility[i];
      compatibleFriend = i;
    }
  }

  res.json({
    friendName: friends[compatibleFriend].name,
    friendPhoto: friends[compatibleFriend].photo
});

});
};

