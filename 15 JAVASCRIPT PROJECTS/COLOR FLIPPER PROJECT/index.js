const color = ["red", "blue", "green", "yellow", "purple"];
const colorEl = document.querySelector(".color");
const btnEl = document.getElementById("btn");
const bodyEl = document.body;

btnEl.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  bodyEl.style.background = color[randomNumber];
  colorEl.textContent = color[randomNumber];
});
function getRandomNumber() {
  return Math.floor(Math.random() * color.length);
}
