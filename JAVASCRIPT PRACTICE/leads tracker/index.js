const input = document.querySelector(".input");
const saveBtn = document.querySelector(".save-btn");
const deleteBtn = document.querySelector(".delete-btn");
const container = document.querySelector(".container");

window.addEventListener("DOMContentLoaded", function () {
  let entries = getLocalStorage();
  if (entries.length > 0) {
    entries.forEach(function (entry) {
      createEntries(entry.i);
    });
  }
});

saveBtn.addEventListener("click", function () {
  let i = input.value;
  createEntries(i);
  saveToLocalStorage(i);
});

deleteBtn.addEventListener("click", function () {
  let entries = document.querySelectorAll(".link");
  entries.forEach(function (entry) {
    entry.remove();
    clearLocalStorage();
  });
});

//function
function createEntries(i) {
  let entry = document.createElement("li");
  entry.innerHTML = `<li><a class='link' href="#">${i}</a></li>`;
  container.appendChild(entry);
}
// save to local storage
function getLocalStorage() {
  let entries;
  if (JSON.parse(localStorage.getItem("entry")) === null) {
    entries = [];
  } else {
    entries = JSON.parse(localStorage.getItem("entry"));
  }
  return entries;
}

function saveToLocalStorage(i) {
  let entryObject = { i: i };
  let entries = getLocalStorage();
  entries.push(entryObject);
  localStorage.setItem("entry", JSON.stringify(entries));
}

function clearLocalStorage() {
  localStorage.clear();
}
