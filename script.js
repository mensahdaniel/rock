function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  const humanChoice = prompt("Enter your choice: rock, paper, or scissors");
  return humanChoice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore++;
      console.log("You win! Rock beats Scissors");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;
      console.log("You win! Paper beats Rock");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore++;
      console.log("You win! Scissors beats Paper");
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
      computerScore++;
      console.log("You lose! Rock beats Scissors");
    } else if (computerChoice === "paper" && humanChoice === "rock") {
      computerScore++;
      console.log("You lose! Paper beats Rock");
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
      computerScore++;
      console.log("You lose! Scissors beats Paper");
    }
  }

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  console.log("Game over!");
  console.log("Your score: " + humanScore);
  console.log("Computer score: " + computerScore);

  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (computerScore > humanScore) {
    console.log("The computer won the game!");
  } else {
    console.log("The game was a tie!");
  }
}

playGame();