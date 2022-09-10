const cardArray = [
  {
    name: "fries",
    img: "/images/fries.jpg",
  },
  {
    name: "fries",
    img: "/images/fries.jpg",
  },
  {
    name: "cheeseburger",
    img: "/images/cheeseburger.jpg",
  },
  {
    name: "cheeseburger",
    img: "/images/cheeseburger.jpg",
  },
  {
    name: "hot dog",
    img: "/images/hot dog.jpg",
  },
  {
    name: "hot dog",
    img: "/images/hot dog.jpg",
  },
  {
    name: "ice cream",
    img: "/images/ice cream.jpg",
  },
  {
    name: "ice cream",
    img: "/images/ice cream.jpg",
  },
  {
    name: "milk shake",
    img: "/images/milk shake.jpg",
  },
  {
    name: "milk shake",
    img: "/images/milk shake.jpg",
  },
  {
    name: "pizza",
    img: "/images/pizza.jpg",
  },
  {
    name: "pizza",
    img: "/images/pizza.jpg",
  },
];

cardArray.sort(function () {
  return 0.5 - Math.random();
});

const grid = document.querySelector(".grid");

const resultDisplay = document.querySelector("#result");

// Global Arrays
let cardChosen = [];
let cardChosenId = [];
let cardsWon = [];

// Create Board
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    let card = document.createElement("img");
    card.setAttribute("src", "/images/blank.jpg");
    card.setAttribute("data-id", i);
    grid.appendChild(card);

    // Add Click event to card so that each card will display a new card when clicked
    card.addEventListener("click", function () {
      let cardId = this.getAttribute("data-id");
      this.setAttribute("src", cardArray[cardId].img);
      cardChosen.push(cardArray[cardId].name);
      cardChosenId.push(cardId);

      // Condition
      if (cardChosen.length === 2) {
        setTimeout(createMatch, 300);
      }
    });
  }
}
createBoard();

function createMatch() {
  let cards = document.querySelectorAll("img");
  let firstCardId = cardChosenId[0];
  let secondCardId = cardChosenId[1];

  if (cardChosen[0] === cardChosen[1]) {
    cards[firstCardId].setAttribute("src", "/images/white.jpg");
    cards[secondCardId].setAttribute("src", "/images/white.jpg");
    alert(" You've got a match!");
    cardsWon.push(cardArray);
    resultDisplay.textContent = cardsWon.length;
  } else {
    cards[firstCardId].setAttribute("src", "/images/blank.jpg");
    cards[secondCardId].setAttribute("src", "/images/blank.jpg");
    alert("Sorry, try again");
  }
  if (cardsWon.length === cardArray / 2) {
    resultDisplay.textContent = "Congratulations! You hav won the game.";
  }
  cardChosen = [];
  cardChosenId = [];
}
