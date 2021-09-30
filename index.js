//button Press

var drumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < drumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonPress = this.innerHTML;

    keyBoard(buttonPress);
    animate(buttonPress);

//keyboard press

  });
}
document.addEventListener('keydown', function (event) {
keyBoard(event.key);
animate(event.key);

});

function keyBoard(key){
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var kickBass = new Audio("sounds/kick-bass.mp3");
    kickBass.play();
      break;
    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    default:
      console.log(buttonPress);

  }
}

function animate(currentKey){
var ani=  document.querySelector('.'+ currentKey);
ani.classList.add("pressed");

setTimeout(function(){
ani.classList.remove("pressed"); }, 100);
}
