function getComputerChoice () {
  return Math.floor(Math.random()* 3);
}

function getHumanChoice () {
  let choice = prompt("Choose Rock, Paper or Scissors!");
  return choice;
}