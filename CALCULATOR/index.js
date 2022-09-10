const input = document.querySelector(".input");
const buttons = document.querySelectorAll(".active");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    input.value += e.currentTarget.textContent;
  });
});

const deleteBtn = document.querySelector(".delete");
deleteBtn.addEventListener("click", function () {
  input.value = input.value.slice(0, -1);
});

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", function () {
  input.value = "";
});

const equalsBtn = document.querySelector(".equals");
equalsBtn.addEventListener("click", function () {
  try {
    input.value = eval(input.value);
  } catch (error) {
    // input.value = "Invalid Expression";
    // backToDefault();
    displayAlert();
    setTimeout(removeAlert, 1000);
  }
});

function displayAlert() {
  input.value = "Invalid expression";
}

function removeAlert() {
  input.value = "";
}
// function backToDefault() {
//   location.reload();
// }
