// THE EXAMPLE

const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const resetBtn = document.querySelector(".reset");
const timeDisplay = document.querySelector(".container h1");

let startTime = 0;
let countedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;

startBtn.addEventListener("click", () => {
  if (paused) {
    paused = false;
    startTime = Date.now() - countedTime;
    intervalId = setInterval(updateTime, 75);
  }
});
pauseBtn.addEventListener("click", () => {
  if (!paused) {
    paused = true;
    countedTime = Date.now() - startTime;
    clearInterval(intervalId);
  }
});
resetBtn.addEventListener("click", () => {
  paused = true;
  clearInterval(intervalId);
  startTime = 0;
  countedTime = 0;
  currentTime = 0;
  hrs = 0;
  mins = 0;
  secs = 0;
  timeDisplay.textContent = "00:00:00";
});

function updateTime() {
  countedTime = Date.now() - startTime;

//   let h = 60 * 60 * 1000;
//   let m = 60 * 1000;
//   let s = 1000;

//   hrs = Math.floor(countedTime / h);
//   mins = Math.floor((countedTime % h) / m);
//   secs = Math.floor((countedTime % m) / s);

  secs = Math.floor((elapsedTime / 1000) % 60);
  mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
  hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

  secs = pad(secs);
  mins = pad(mins);
  hrs = pad(hrs);

  timeDisplay.textContent = `${hrs}:${mins}:${secs}`;

  function pad(unit) {
    if (("0" + unit).length > 2) {
      return unit;
    } else {
      return "0" + unit;
    }
  }
}
