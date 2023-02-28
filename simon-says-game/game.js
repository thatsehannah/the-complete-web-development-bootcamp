var buttonColors = ['red', 'blue', 'green', 'yellow'];
var gamePattern = [];
var userClickedPattern = [];

function nextSequence() {
  var randomNum = Math.floor(Math.random() * 3);
  var randomChosenColor = buttonColors[randomNum];
  gamePattern.push(randomChosenColor);

  $('#' + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

    playSound(randomChosenColor);
}

$(".btn").click(function (e) { 
  var userChosenColor = e.target.id;
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
});

function playSound(name) {
  new Audio("sounds/" + name + ".mp3").play();
}
