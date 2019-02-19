const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;

// Generate a random number from 0-3, pick the color from buttonColors array and push the color to gamePattern array
// Flash the chosen color and playSound
// Change h1 text to current Level
// Increase level by 1
function nextSequence() {
  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
  $("h1").text("Level " + level);
  level++;
}

// Event listener for first keypress - Start game
$("html").one("keypress", function() {
  nextSequence();
});

// Detect which button is clicked and add the ID to userClickedPattern array + playSound() + animatePress()
$(".btn").on("click", function(event) {
  let userClickedButton = event.target.id;
  userClickedPattern.push(event.target.id);
  playSound(event.target.id);
  animatePress(event.target.id);
  console.log(event.target.id);
});

// Play sound and flash clicked box
function playSound (name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// Animate button press
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
