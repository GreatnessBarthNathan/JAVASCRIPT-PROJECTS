let cards = [];
let sum = "";
let message = "";
let hasBlackjack = false;
let isAlive = false;

let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");

let playerEl = document.getElementById("player-el");
let player = {
  name: "Greatness",
  score: 500,
};
playerEl.textContent = player.name + ": $" + player.score;

function startGame() {
  let firstCard = getRandomNumber();
  let secondCard = getRandomNumber();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  return randomNumber;
}
function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i += 1) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;

  if (sum === 21) {
    message = "You have got blackjack";
    hasBlackjack = true;
  } else if (sum < 21) {
    message = "Do you want to draw a new card?";
    isAlive = true;
  } else {
    message = "You are out of the game";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackjack === false) {
    let newcard = getRandomNumber();
    sum = sum + newcard;
    cards.push(newcard);
    renderGame();
  }
}
