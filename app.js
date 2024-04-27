let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  // Bad things happen if these get called here! See playGame() comment
  // getHumanChoice();
  // getComputerChoice();
  console.log("Human:", humanChoice);
  console.log("Computer:", computerChoice);
  switch (humanChoice) {
    case "rock":
      switch (computerChoice) {
        case "rock":
          console.log("It's a tie. You both chose Rock.");
          break;
        case "paper":
          console.log("You lose! Paper beats Rock.");
          computerScore++;
          break;
        case "scissors":
          console.log("You win! Rock beats Scissors.");
          humanScore++;
          break;
      }
      break;

    case "paper":
      switch (computerChoice) {
        case "rock":
          console.log("You win! Paper beats Rock");
          humanScore++;
          break;
        case "paper":
          console.log("It's a tie. You both chose Paper");
          break;
        case "scissors":
          console.log("You lose! Scissors Beats Paper");
          computerScore++;
          break;
      }
      break;

    case "scissors":
      switch (computerChoice) {
        case "rock":
          console.log("You lose! Rock beats Scissors.");
          computerScore++;
          break;
        case "paper":
          console.log("You win! Scissors beats Paper.");
          humanScore++;
          break;
        case "scissors":
          console.log("It's a tie. You both chose Scissors.");
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

function getHumanChoice() {
  const choice = prompt("What's your choice?");

  // Will need better validation than this
  if (choice === null) {
    return "rock";
  }

  // Just so any variation of the word can be input
  return choice.toLowerCase();
}

function playGame() {
  for (let i = 1; i < 6; i++) {
    console.log("Round:", i);
    // Important that these variables and function calls are here and nowhere else, otherwise user will get prompted without the result being used
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
  }
  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (humanScore < computerScore) {
    console.log("You lost the game!");
  } else {
    console.log("It's a tie!");
  }
}

playGame();
