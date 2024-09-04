// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

document.getElementById("guessButton").addEventListener("click", function () {
  const userGuess = document.getElementById("guessInput").value;
  const result = document.getElementById("result");

  if (userGuess == randomNumber) {
    result.textContent = "Congratulations! You guessed it!";
    result.style.color = "green";
  } else if (userGuess < randomNumber) {
    result.textContent = "Too low! Try again.";
    result.style.color = "red";
  } else if (userGuess > randomNumber) {
    result.textContent = "Too high! Try again.";
    result.style.color = "red";
  }
});

document.getElementById("resetButton").addEventListener("click", function () {
  location.reload(); // Reloads the page to reset the game
});
