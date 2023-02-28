var buttonColors = ["red", "blue", "green", "yellow"]
var gamePattern = [];

function nextSequence() {
  var randomNum = Math.floor(Math.random() * 3);
  var randomChosenColor = buttonColors[randomNum];
  gamePattern.push(randomChosenColor);
}


