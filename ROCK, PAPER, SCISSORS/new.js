// THE OTHER GUY

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
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
  });
});

function computerTurn() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    computer = "ROCK";
  } else if (randomNumber === 2) {
    computer = "PAPER";
  } else if (randomNumber === 3) {
    computer = "SCISSORS";
  }
}

function checkWinner() {
  if (player == computer) {
    return "Draw!";
  } else if (computer == "ROCK") {
    return player == "PAPER" ? "You win!" : "You lose!";
  } else if (computer == "PAPER") {
    return player == "SCISSORS" ? "You win!" : "You lose!";
  } else if (computer == "SCISSORS") {
    return player == "ROCK" ? "You win!" : "You lose!";
  }
}
