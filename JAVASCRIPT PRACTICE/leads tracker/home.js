const input = document.querySelector(".input");
const saveBtn = document.querySelector(".save-btn");
const deleteBtn = document.querySelector(".delete-btn");
const container = document.querySelector(".container");

let inputArray = [];

window.addEventListener("DOMContentLoaded", function () {
  let items = getFromLocalStorage();
  if (items.length > 0) {
    items.forEach(function (item) {
      createLeads(item.i);
    });
  }
});

saveBtn.addEventListener("click", function () {
  let i = input.value;
  createLeads(i);
  saveToLocalStorage(i);
});

function createLeads(i) {
  inputArray.push(i);
  let list = "";
  inputArray.forEach(function (item) {
    list += `<li><a href="#">${item}</a></li>`;
  });
  container.innerHTML = list;
}

deleteBtn.addEventListener("click", function () {
  i = input.value;
  i = "";
  inputArray = [];
  createLeads(i);
  localStorage.clear();
});

function getFromLocalStorage() {
  let items;
  if (localStorage.getItem("item") === null) {
    items = [];
  } else {
    items = JSON.parse(localStorage.getItem("item"));
  }
  return items;
}

function saveToLocalStorage(i) {
  let inputObject = { i: i };
  let items = getFromLocalStorage();
  items.push(inputObject);
  localStorage.setItem("item", JSON.stringify(items));
}
