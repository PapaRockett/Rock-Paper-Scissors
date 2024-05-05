let humanScore = 0;
let computerScore = 0;
const choiceButtons = document.querySelectorAll(".choiceBtn");
const resultsDisplay = document.querySelector(".resultsDisplay");

choiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // the resultsDisplay textContent wasn't being updated until I added .toLowerCase(),
    // makes sense when you look at the switch statements in playRound()
    const humanSelection = button.textContent.toLowerCase();
    // Makes more sense to call getComputerChoice() here, when human also makes their choice,
    // but could it still be improved?
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  });
});

function playRound(humanChoice, computerChoice) {
  switch (humanChoice) {
    case "rock":
      switch (computerChoice) {
        case "rock":
          resultsDisplay.textContent = "It's a tie. You both chose Rock.";
          break;
        case "paper":
          resultsDisplay.textContent = "You lose! Paper beats Rock.";
          computerScore++;
          break;
        case "scissors":
          resultsDisplay.textContent = "You win! Rock beats Scissors.";
          humanScore++;
          break;
      }
      break;

    case "paper":
      switch (computerChoice) {
        case "rock":
          resultsDisplay.textContent = "You win! Paper beats Rock";
          humanScore++;
          break;
        case "paper":
          resultsDisplay.textContent = "It's a tie. You both chose Paper";
          break;
        case "scissors":
          resultsDisplay.textContent = "You lose! Scissors Beats Paper";
          computerScore++;
          break;
      }
      break;

    case "scissors":
      switch (computerChoice) {
        case "rock":
          resultsDisplay.textContent = "You lose! Rock beats Scissors.";
          computerScore++;
          break;
        case "paper":
          resultsDisplay.textContent = "You win! Scissors beats Paper.";
          humanScore++;
          break;
        case "scissors":
          resultsDisplay.textContent = "It's a tie. You both chose Scissors.";
          break;
      }
      break;
  }
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  // Multiply Math.random() by the array length to get numbers between 0-length of array (rather than 0-1)
  // And then using Math.floor to get the index of the array, rather than just a random, irrelevant number
  return choices[Math.floor(Math.random() * choices.length)];
}

// function playGame() {
//   for (let i = 1; i < 6; i++) {
//     console.log("Round:", i);
//     // Important that these variables and function calls are here and nowhere else, otherwise user will get prompted without the result being used
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();
//     playRound(humanSelection, computerSelection);
//     console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
//   }
//   if (humanScore > computerScore) {
//     console.log("You won the game!");
//   } else if (humanScore < computerScore) {
//     console.log("You lost the game!");
//   } else {
//     console.log("It's a tie!");
//   }
// }

// playGame();
