var path = require('path');
var express = require('express');
var app = express();

app.get("/api", function (req, res) {
  res.sendFile(path.join(__dirname, "survey.html"));
});

var friends = require("../data/friends");

module.exports = function (app) {

  app.get('../data/friends', function (req, res) {
    res.json(friends);
  });


  app.post('/api/friends', function (req, res) {

    var userInput = req.body;
    console.log('userInput = ' + JSON.stringify(userInput));
    var userResponses = userInput.scores;

    console.log('userResponses = ' + userResponses);



    var matchName = '';
    var matchImage = '';
    var totalDifference = 1000;

    for (var i = 0; i < friends.length; i++) {

      var diff = 0;
      for (var x = 0; x < userResponses.length; x++) {
        diff += Math.abs(friends[i].scores[j] - userResponses[j]);
      }
console.log('diff = ' + diff);

      if (diff < totalDifference) {
        console.log('Closest match found = ' + diff);
				console.log('Friend name = ' + friends[i].name);
				console.log('Friend image = ' + friends[i].photo);


        totalDifference = diff;
        matchName = friends[i].name;
        matchImage = friends[i].photo;
      }
    }

    res.json({ status: 'OK', matchName: matchName, matchImage: matchImage });
  });
};