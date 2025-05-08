const btnList = document.querySelectorAll("#btns-cont");

btnList.forEach((btn) => btn.addEventListener("click", (e) => {
  playRound(e.target.id);
}))

let audio = document.getElementById("my-audio");
audio.volume = 0.2;

const rocks = ["./images/pedras/pedra0.jpeg", "./images/pedras/pedra1.jpeg", "./images/pedras/pedra2.jpeg"];
const scissors = ["./images/tesouras/tesoura0.jpeg", "./images/tesouras/tesoura1.jpeg", "./images/tesouras/tesoura2.jpeg"];
const papers = ["./images/papeis/papel0.jpeg", "./images/papeis/papel1.jpeg"];

function randomRocks() {
  const randomRock = Math.floor(Math.random() * rocks.length);
  document.getElementById("pedra").src = rocks[randomRock];
}

function randomScissors() {
  const randomScissor = Math.floor(Math.random() * scissors.length);
  document.getElementById("tesoura").src = scissors[randomScissor];
}

function randomPapers() {
  const randomPaper = Math.floor(Math.random() * papers.length);
  document.getElementById("papel").src = papers[randomPaper];
}

window.addEventListener("DOMContentLoaded", () => {
  randomRocks();
  randomScissors();
  randomPapers();
});

let humanScore = 0;
let computerScore = 0;

const choiceCont = document.querySelector("#choice-cont");
const scoreCont = document.querySelector("#score-cont");
const mainCont = document.querySelector("#main-cont");

const humanChoicePara = document.createElement("p");
const computerChoicePara = document.createElement("p");
const humanScorePara = document.createElement("p");
const computerScorePara = document.createElement("p");

function getComputerChoice() {
  const randomChoice = Math.floor(Math.random()* 3);
  if (randomChoice === 0) {
    return "pedra";
  } else if (randomChoice === 1) {
    return "papel";
  } else {
    return "tesoura";
  }
}

const startMessage = document.querySelector(".startMsg");

function displayScores() {
  humanScorePara.innerHTML = `<span>Seus pontos:</span> ${humanScore}`;
  computerScorePara.innerHTML = `<span>Pontos do computador:</span> ${computerScore}`;

  scoreCont.appendChild(humanScorePara);
  scoreCont.appendChild(computerScorePara);

  if (humanScore === 5 || computerScore === 5) {
    displayFinalMsg();
  }
}

function playRound(humanSelection) {

  if (humanScore === 5 || computerScore === 5) {
    return;
  }

  startMessage.style.display = "none";

  const humanChoice = humanSelection;
  const computerChoice = getComputerChoice();

  humanChoicePara.innerHTML = `<span>Você:</span> ${humanChoice}`;
  computerChoicePara.innerHTML = `<span>Computador:</span> ${computerChoice}`;

  choiceCont.appendChild(humanChoicePara);
  choiceCont.appendChild(computerChoicePara);

  if (humanChoice === computerChoice) {
    displayScores();
    return;
  } else if  (
    (humanChoice === "pedra" && computerChoice === "tesoura") ||
    (humanChoice === "tesoura" && computerChoice === "papel") ||
    (humanChoice === "papel" && computerChoice === "pedra")
  ) {
    humanScore++;
  } else {
    computerScore++;
  }

  displayScores();
}

const finalMsg = document.createElement("p");
finalMsg.setAttribute("class", "msgEle");

const resetBtn = document.createElement("button");
resetBtn.setAttribute("class", "resetBtnEle");

function displayFinalMsg() {
  if (humanScore === 5 && computerScore === 5) {
    finalMsg.innterText = "É um empate!";
    finalMsg.style.color = "black";
  } else if (humanScore === 5) {
    finalMsg.innerText = "Parabéns! Você venceu!";
    finalMsg.style.color = "yellow";
  } else if (computerScore === 5) {
    finalMsg.innerText = `Ah não! Você perdeu :(
    Tente novamente.`;
    finalMsg.style.color = "red";
  }

  mainCont.appendChild(finalMsg);
  resetBtn.innerText = "Reset";
  mainCont.appendChild(resetBtn);
  resetBtn.addEventListener("click", handleReset);

}

function handleReset() {
  startMessage.style.display = "block";

  humanScore = 0;
  computerScore = 0;

  choiceCont.innerHTML = "";
  scoreCont.innerHTML = "";

  finalMsg.remove();
  resetBtn.remove();
  randomRocks();
  randomScissors();
  randomPapers();

}