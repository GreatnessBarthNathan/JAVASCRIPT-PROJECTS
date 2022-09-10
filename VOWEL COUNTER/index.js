const calculateBtn = document.querySelector(".calculate-btn");
const input = document.querySelector(".input");
const displayMessage = document.querySelector(".result");
let count = 0;

calculateBtn.addEventListener("click", function () {
  let value = input.value;
  let split = input.value.toLowerCase().split("");
  input.value = "";

  for (let i = 0; i < split.length; i++) {
    if (
      split[i] === "a" ||
      split[i] === "e" ||
      split[i] === "i" ||
      split[i] === "o" ||
      split[i] === "u"
    ) {
      count++;
    }
    if (count > 1) {
      displayMessage.textContent = `' ${value} ' has ${count} vowels`;
    } else {
      displayMessage.textContent = `' ${value} ' has ${count} vowel`;
    }
  }
  setTimeout(backToDefault, 2500);
});

function backToDefault() {
  location.reload();
}
