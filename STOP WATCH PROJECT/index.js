// MY OWN WORK

const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const resetBtn = document.querySelector(".reset");
const timeDisplay = document.querySelector(".container h1");

let startTime = 0;
let countedTime = 0;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;
let paused = true;

startBtn.addEventListener("click", () => {
  if (paused) {
    paused = false;
    startTime = Date.now() - countedTime;
    intervalId = setInterval(updateTime, 1000);
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
  countedTime = 0;
  startTime = 0;
  hrs = 0;
  mins = 0;
  secs = 0;
  paused = true;
  clearInterval(intervalId);
  timeDisplay.textContent = "00:00:00";
});

function updateTime() {
  countedTime = Date.now() - startTime;

  let h = 60 * 60 * 1000;
  let m = 60 * 1000;
  let s = 1000;

  hrs = Math.floor(countedTime / h);
  mins = Math.floor((countedTime % h) / m);
  secs = Math.floor((countedTime % m) / s);

  if (secs < 10) {
    secs = "0" + secs;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  if (hrs < 10) {
    hrs = "0" + hrs;
  }

  timeDisplay.textContent = `${hrs}:${mins}:${secs}`;
}
