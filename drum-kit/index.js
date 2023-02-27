var drums = document.querySelectorAll('.drum');

// Detecting button click on the individual buttons
for (var i = 0; i < drums.length; i++) {
  drums[i].addEventListener('click', function () {
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

// Detecting keyboard event (adding to the entire page)
document.addEventListener('keydown', function (e) {
  makeSound(e.key);
  buttonAnimation(e.key);
});

function makeSound(key) {
  switch (key) {
    case 'w':
      new Audio('sounds/crash.mp3').play();
      break;
    case 'a':
      new Audio('sounds/kick-bass.mp3').play();
      break;
    case 's':
      new Audio('sounds/snare.mp3').play();
      break;
    case 'd':
      new Audio('sounds/tom-1.mp3').play();
      break;
    case 'j':
      new Audio('sounds/tom-2.mp3').play();
      break;
    case 'k':
      new Audio('sounds/tom-3.mp3').play();
      break;
    case 'l':
      new Audio('sounds/tom-4.mp3').play();
      break;
    default:
      console.log(this.innerHTML);
  }
}

function buttonAnimation(key) {
  var activeBtn = document.querySelector("." + key);
  activeBtn.classList.add("pressed");
  
  setTimeout(() => {
    activeBtn.classList.remove("pressed")
  }, 100);
}
