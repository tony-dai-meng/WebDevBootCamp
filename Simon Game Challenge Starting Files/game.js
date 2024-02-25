const buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var audioFiles = {};
var resetEnabled = true;
var sequenceExcecuted = false;
var inputEnd = false;

// Preload audio files
buttonColours.forEach((color) => {
  audioFiles[color] = new Audio(`./sounds/${color}.mp3`);
});

$(document).on("keydown", nextSequence);

$("[type='button']").on("click", function () {
  if (sequenceExcecuted) {
    inputEnd = false;
    let userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    flash($(`#${userChosenColour}`));
    audioFiles[userChosenColour].play();
    let i = userClickedPattern.length-1;

    if (userClickedPattern[i] === gamePattern[i]) {
      resetEnabled = false;
      if (userClickedPattern.length === gamePattern.length) {
        inputEnd = true;
        userClickedPattern = [];
        setTimeout(nextSequence, 1400);
      }
    } else {
      setTimeout(()=>{$("#level-title").text("Game Over, Press Any Key to Restart");}, 700)
      resetEnabled = true;
      inputEnd = false
      sequenceExcecuted = false;
      gamePattern = [];
      userClickedPattern = [];
    }
  }
});

function nextSequence() {
  if (resetEnabled || inputEnd) {
    $("#level-title").text("Game Start!")
    inputEnd = false;
    resetEnabled = false;
    sequenceExcecuted = false;
    let randomNumber = Math.round(Math.random() * 3);
    let randomChosenColor = buttonColours[randomNumber];
    gamePattern.push(randomChosenColor);
    gamePattern.forEach((val, index) => {
      setTimeout(() => {
        flash($(`#${val}`));
        audioFiles[val].play();

        if (index === gamePattern.length - 1) {
          setTimeout(() => {
            sequenceExcecuted = true;
            inputEnd = false;
          }, 700); // This should match or exceed the longest delay in flash or sound playback
        }
      }, index * 700);
    });
  }
}

function flash(el) {
  el.fadeOut(100).fadeIn(100);
}
