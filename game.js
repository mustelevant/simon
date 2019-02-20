const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let started = 0;

// Generate a random number from 0-3, pick the color from buttonColors array and push the color to gamePattern array
// Flash the chosen color and playSound
// Change h1 text to current Level
// Increase level by 1
function nextSequence() {
  userClickedPattern = [];
  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
  $("h1").text("Level " + level);
  level++;
}

// Event listener for first keypress - Start game
$("html").on("keypress", function() {
  if (started === 0) {
    nextSequence();
    started = 1;
  } else {
    console.log("Game already in progress!");
  }
});

// Detect which button is clicked and add the ID to userClickedPattern array + playSound() + animatePress()
$(".btn").on("click", function(event) {
  let userClickedButton = event.target.id;
  userClickedPattern.push(event.target.id);
  playSound(event.target.id);
  animatePress(event.target.id);
  // console.log(event.target.id);
  checkAnwser(userClickedPattern.length - 1);
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

// Check users anwser, game over if answer is wrong + startOver()
function checkAnwser (currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("Success");
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout (function () {
      $("body").removeClass("game-over");
    }, 400);
    $("h1").text("Game Over! Press Any Key to Restart!");
    startOver();
    console.log("Game over");
  }
// Do nothing if user has not finished pattern
// Wait 1 s and nextSequence() if pattern is finished correctly
  if (userClickedPattern.length < gamePattern.length || userClickedPattern.length === 0) {
    return null;
  } else {
    setTimeout (function () {
      nextSequence();
    }, 1000);
  }
}

// Function to restart the game and reset progress
function startOver () {
  gamePattern = [];
  userClickedPattern = [];
  level = 0;
  started = 0;
}
