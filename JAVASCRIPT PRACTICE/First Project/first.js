let countEl = document.getElementById("count-el");
let count = 0;
function increment() {
  count = count + 1;
  countEl.textContent = count;
}

let saveEl = document.getElementById("save-el");
function save() {
  newCount = count + " - ";
  saveEl.textContent += newCount;
  countEl.textContent = 0;
  count = 0;
}
