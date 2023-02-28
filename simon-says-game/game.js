var buttonColors = ['red', 'blue', 'green', 'yellow'];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var gameIsGoing = true;

function playSound(name) {
  new Audio('sounds/' + name + '.mp3').play();
}

function nextSequence() {
  level++;
  $('#level-title').text('Level ' + level);
  var randomNum = Math.floor(Math.random() * 3);
  var randomChosenColor = buttonColors[randomNum];
  gamePattern.push(randomChosenColor);

  $('#' + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColor);
}

function animatePress(currentColor) {
  $('#' + currentColor).addClass('pressed');

  setTimeout(function () {
    $('#' + currentColor).removeClass('pressed');
  }, 100);
}

function checkAnswer(currentLevel) {
  console.log(currentLevel);
  console.log(gamePattern);
  console.log(userClickedPattern);
  if (userClickedPattern[currentLevel] !== gamePattern[currentLevel]) {
    playSound('wrong');
    $("body").addClass("game-over");
    setTimeout(function () {
      $('body').removeClass("game-over");
    }, 200);
    gamePattern = [];
    userClickedPattern = [];
    $('#level-title').text('Game over. Press any key to play again.');
    level = 0;
  } else {
    if (userClickedPattern.length == gamePattern.length) { // if check is to see if the user is done with recreating the sequence correctly
      setTimeout(function () {
        nextSequence();
        userClickedPattern = [];
      }, 1000);
    }
  }
}

$('.btn').click(function (e) {
  var userChosenColor = e.target.id;
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length - 1);
});

$(document).keydown(function (e) {
  if (level == 0) {
    nextSequence();
  }
});
