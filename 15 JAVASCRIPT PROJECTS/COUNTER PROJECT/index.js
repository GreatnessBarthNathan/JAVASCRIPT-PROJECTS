let count = 0;
let colors = ["green", "red", "black"];
let countEl = document.getElementById("count");
let decreaseBtn = document.getElementById("decrease-btn");
let resetBtn = document.getElementById("reset-btn");
let increaseBtn = document.getElementById("increase-btn");

increaseBtn.addEventListener("click", function () {
  count = count + 1;
  countEl.textContent = count;
  if (count >= 1) {
    countEl.style.color = colors[0];
  } else if (count === 0) {
    countEl.style.color = colors[2];
  }
});

decreaseBtn.addEventListener("click", function () {
  count = count - 1;
  countEl.textContent = count;
  if (count < 0) {
    countEl.style.color = colors[1];
  } else if (count === 0) {
    countEl.style.color = colors[2];
  }
});

resetBtn.addEventListener("click", function () {
  count = 0;
  countEl.textContent = count;
  if (count === 0) {
    countEl.style.color = colors[2];
  }
});
