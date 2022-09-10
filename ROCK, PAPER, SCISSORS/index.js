// MY OWN

const playerText = document.querySelector(".player");
const computerText = document.querySelector(".computer");
const resultText = document.querySelector(".result");
const choiceBtns = document.querySelectorAll("button");

let player;
let computer;
let result;

choiceBtns.forEach((button) => {
  button.addEventListener("click", () => {
    player = button.textContent;
    computer = computerChoice();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = generateResult();
  });
});

function computerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  //   console.log(randomNumber);
  if (randomNumber === 1) {
    return "ROCK";
  } else if (randomNumber === 2) {
    return "PAPER";
  } else if (randomNumber === 3) {
    return "SCISSORS";
  }
}

function generateResult() {
  if (player == computer) {
    return "Draw!";
  } else if (computer == "ROCK") {
    return player == "PAPER" ? "You win!" : "You lose";
  } else if (computer == "PAPER") {
    return player == "SCISSORS" ? "You win!" : "You lose";
  } else if (computer == "SCISSORS") {
    return player == "ROCK" ? "You win!" : "You lose";
  }
}
