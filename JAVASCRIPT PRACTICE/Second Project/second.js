let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
let sumEl = document.getElementById("sum-el");

function add() {
  let sum = num1 + num2;
  sumEl.textContent = "Sum " + sum;
}

function subtract() {
  let minus = num1 - num2;
  sumEl.textContent = "Sum " + minus;
}

function divide() {
  let divide = num1 / num2;
  sumEl.textContent = "Sum " + divide;
}

function multiply() {
  let multiply = num1 * num2;
  sumEl.textContent = "Sum " + multiply;
}
