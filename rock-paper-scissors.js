function getComputerChoice() {
  const rdChoice = Math.floor(Math.random()* 3);
  if (rdChoice === 0) {
    return "Rock";
  } else if (rdChoice === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getHumanChoice() {
  const choice = prompt("Choose Rock, Paper or Scissors!").toLowerCase();
  return choice[0].toUpperCase() + choice.slice(1);
}

function displayScores(humanScore, computerScore) {
  console.log(`
    Player Score = ${humanScore}
    Computer Score = ${computerScore}
    `)
}

function playGame () {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("You tied!");
      displayScores(humanScore, computerScore);
    } else if  (
      (humanChoice === "Rock" && computerChoice === "Scissors") ||
      (humanChoice === "Scissors" && computerChoice === "Paper") ||
      (humanChoice === "Paper" && computerChoice === "Rock")
    ) {
      console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
      displayScores(humanScore, computerScore);
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
      displayScores(humanScore, computerScore);
    }
  }

  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  if (humanScore === computerScore) {
    console.log(`You tied the Computer! Maybe next time you win!`);
  } else if (humanScore > computerScore) {
    console.log(`You won! Congratulations!`);
  } else {
    console.log(`You lost! But don't give up, try again!`);
  }
}

playGame();