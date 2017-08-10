var friends = require("../data/friends.js");

module.exports = function(app) {
  app.get("/api/friends", function(req,res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req,res){
    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
    };
    console.log(req.body);

    //Parse user's survey POST (input)
    var userData = req.body;
    var userScores = userData.scores;

    console.log(userScores)

    //calculate differnece between the user's scores and the friends already in the database
    var totalDifference = 0;

    //Nested for loop first we go through each friend
    for(var i = 0; i<friends.length; i++) {
      console.log(friends[i]);
      totalDifference = 0;
      //Then we loop through each friend's scores
      for (var j = 0; j <friends[i].scores[j]; j++) {
        totalDifference += Math.abs(parseInt(userScores[j])-parseInt(friends[i].scores[j]));
        if (totalDifference <= bestMatch.friendDifference) {
          //print best match
          bestMatch.name = friends[i].name;
          bestMatch.photo = friends[i].photo;
          bestMatch.friendDifference = totalDifference;
        }
      }
    }
    //push user data to friends array
    friends.push(userData);
    //returns JSON  with user's best match
    res.json(bestMatch);
  });
}
