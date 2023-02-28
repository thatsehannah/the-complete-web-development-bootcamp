var buttonColors = ['red', 'blue', 'green', 'yellow'];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

function playSound(name) {
  new Audio('sounds/' + name + '.mp3').play();
}

// TODO: figure out how to repeat the game sequence back to us after each turn
function playCurrentSequence() {
  if (gamePattern.length > 0) {
    console.log(gamePattern);
    var count = 0;
    while (count < gamePattern.length) {
      var color = gamePattern[count];
      setTimeout(function() {
        $('#' + color)
          .fadeIn(100)
          .fadeOut(100)
          .fadeIn(100);
        playSound(color);
      }, 1000)
      count++;
    }
  }
  
}

function nextSequence() {
  //playCurrentSequence();
  userClickedPattern = [];
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
  if (userClickedPattern[currentLevel] !== gamePattern[currentLevel]) {
    playSound('wrong');
    $('#level-title').text('Game over. Press any key to play again.');
    $("body").addClass("game-over");
    setTimeout(function () {
      $('body').removeClass("game-over");
    }, 200);

    gamePattern = [];
    level = 0;
  } else {
    if (userClickedPattern.length == gamePattern.length) { // if check is to see if the user is done with recreating the sequence correctly
      setTimeout(function () {
        nextSequence();
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
