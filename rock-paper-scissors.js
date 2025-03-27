function getComputerChoice () {
  const computerChoice = Math.floor(Math.random()* 3);
  if (computerChoice === 0) {
    return "Rock";
  } else if (computerChoice === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}
console.log(getComputerChoice())

function getHumanChoice () {
  let choice = prompt("Choose Rock, Paper or Scissors!").toUpperCase();
  return choice;
}

let humanScore = 0;
let compuerScore = 0;