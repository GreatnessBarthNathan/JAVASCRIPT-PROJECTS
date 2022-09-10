let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

let player = {
  name: "Greatness",
  chips: 500,
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

//playerEl.textContent = "Player Name: " + playerName + " " + playerScore;
function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  return randomNumber;

  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  renderGame();
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  isAlive = true;
}

function renderGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "wohoo! You've got Blackjack!";
    hasBlackjack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: ";

  for (let i = 0; i < cards.length; i += 1) {
    cardsEl.textContent += " " + cards[i];
  }
}

function newCard() {
  if (isAlive === true && hasBlackjack === false) {
    let newcard = getRandomCard();
    sum = sum + newcard;
    cards.push(newcard);
    console.log(cards);
    renderGame();
  }
}
