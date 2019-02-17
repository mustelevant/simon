const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];

// Generate a random number from 0-3
function nextSequence() {
  const randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;
}

// Pick the color from buttonColors array according to the random number
const randomChosenColor = buttonColors[nextSequence()];

// Add the randomly chosen color to the gamePattern array
gamePattern.push(randomChosenColor);
