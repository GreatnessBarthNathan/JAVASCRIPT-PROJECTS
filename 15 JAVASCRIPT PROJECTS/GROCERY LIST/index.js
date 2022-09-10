// SELECT ITEMS
const form = document.querySelector("form");
const input = document.querySelector(".input");
const submitBtn = document.querySelector(".btn");
const container = document.querySelector(".item-container");
const clearBtn = document.querySelector(".clear-btn");
const list = document.querySelector(".lists");
const message = document.querySelector(".alert");

// GLOBAL VARIABLES
let editElement = "";
let editFlag = false;
let editID = "";

// load the dom
window.addEventListener("DOMContentLoaded", function () {
  let items = getLocalStorage();
  if (items.length > 0) {
    items.forEach(function (item) {
      createElement(item.id, item.value);
    });
    container.classList.add("show-container");
  }
});

// EVENT LISTENERS
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let value = input.value;
  let id = new Date().getTime().toString();
  input.value = "";

  if (value && !editFlag) {
    createElement(id, value);
    addToLocalStorage(id, value);
  } else if (value && editFlag) {
    editElement.innerHTML = value;
    editLocalStorage(editID, value);
    displayAlert("Item successfully edited", "alert-success");
    backToDefault();
  } else {
    displayAlert("please enter an item", "alert-danger");
    backToDefault();
  }
});

// FUNCTIONS
function displayAlert(text, action) {
  message.textContent = text;
  message.classList.add(action);
}

function removeAlert() {
  if (message.classList.contains("alert-success")) {
    message.classList.remove("alert-success");
  } else [message.classList.remove("alert-danger")];
}

function backToDefault() {
  editID = "";
  submitBtn.textContent = "Submit";
  input.value = "";
  editFlag = false;
  setTimeout(removeAlert, 1000);
}
function createElement(id, value) {
  let items = document.createElement("div");
  items.classList.add("items");
  items.setAttribute("data-id", id);
  items.innerHTML = `<p>${value}</p>
  <span class="button-container">
    <button class="edit-btn">
      <i class="fa-solid fa-pen-to-square"></i>
    </button>
    <button class="delete-btn">
      <i class="fa-solid fa-trash"></i>
    </button>
  </span>`;
  list.appendChild(items);
  container.classList.add("show-container");
  displayAlert("Item added to list", "alert-success");
  backToDefault();

  // Delete Items
  const deleteBtn = items.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => {
    let id = items.dataset.id;
    list.removeChild(items);
    displayAlert("item deleted from list", "alert-danger");
    backToDefault();
    if (list.children.length === 0) {
      container.classList.remove("show-container");
    }
    deleteFromLocalStorage(id);
  });

  // Edit Items
  const editBtn = items.querySelector(".edit-btn");
  editBtn.addEventListener("click", () => {
    editID = items.dataset.id;
    editElement = items.querySelector(".items p");
    input.value = editElement.textContent;
    submitBtn.textContent = "Edit";
    editFlag = true;
  });

  // Clear Items
  clearBtn.addEventListener("click", function () {
    let items = document.querySelectorAll(".items");
    items.forEach(function (item) {
      item.remove();
      container.classList.remove("show-container");
    });
    displayAlert("list cleared", "alert-danger");
    backToDefault();
    localStorage.clear();
  });
}
// LOCAL STORAGE
// Add to local storage
function addToLocalStorage(id, value) {
  let grocery = { id: id, value: value };
  let items = getLocalStorage();

  items.push(grocery);

  localStorage.setItem("list", JSON.stringify(items));
}

//Get from local storage
function getLocalStorage() {
  let items;
  if (localStorage.getItem("list") === null) {
    items = [];
  } else {
    items = JSON.parse(localStorage.getItem("list"));
  }
  return items;
}

// Delete from local storage
function deleteFromLocalStorage(id) {
  let items = getLocalStorage();
  items = items.filter(function (item) {
    if (item.id !== id) {
      return item;
    }
  });
  localStorage.setItem("list", JSON.stringify(items));
}

// Edit Local Storage
function editLocalStorage(id, value) {
  let items = getLocalStorage();
  items = items.map(function (item) {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}
