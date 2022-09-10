const form = document.querySelector(".form");
const title = document.querySelector(".title-input");
const textArea = document.querySelector("#textarea-input");
const storage = document.querySelector(".storage");
const modal = document.querySelector(".modal");
const modalTitle = document.querySelector(".modal-content h3");
const modalP = document.querySelector(".modal-content p");
const alertText = document.querySelector(".alert");
const submitBtn = document.querySelector(".submit-btn");

// load the dom
window.addEventListener("DOMContentLoaded", function () {
  let notes = getLocalStorage();
  if (notes.length > 0) {
    notes.forEach(function (note) {
      createNotes(note.id, note.head, note.text);
    });
  }
});

// Global variables
let editHead;
let editText;
let editFlag = false;
let editID = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let id = new Date().getTime().toString();
  let head = title.value;
  let text = textArea.value;
  title.value = "";
  textArea.value = "";

  if (head && text && !editFlag) {
    createNotes(id, head, text);
    addToLocalStorage(id, head, text);
    displayAlert("note has been added", "alert-success");
    setTimeout(removeAlert, 1000);
  } else if (head && text && editFlag) {
    editHead.textContent = head;
    editText.textContent = text;
    submitBtn.textContent = "Submit";
    editFlag = false;
    displayAlert("note has been edited", "alert-success");
    setTimeout(removeAlert, 1000);
    editLocalStorage(editID, head, text);
  } else if (head && !text) {
    displayAlert("please add text", "alert-danger");
    setTimeout(removeAlert, 1000);
  } else if (!head && text) {
    displayAlert("please add title", "alert-danger");
    setTimeout(removeAlert, 1000);
  } else {
    displayAlert("please add a note", "alert-danger");
    setTimeout(removeAlert, 1000);
  }
});

// display alert
function displayAlert(text, action) {
  alertText.textContent = text;
  alertText.classList.add(action);
}

// remove alert
function removeAlert() {
  if (alertText.classList.contains("alert-success")) {
    alertText.classList.remove("alert-success");
  } else {
    alertText.classList.remove("alert-danger");
  }
}

// CREATE NOTE

function createNotes(id, head, text) {
  let content = document.createElement("div");
  content.classList.add("contain");
  content.setAttribute("data-id", id);
  content.innerHTML = `<h3>${head}</h3>
  <p>${text}</p>
  <div class="buttons">
    <button class="view-btn">View Detail</button>
    <button class="edit-btn">Edit Note</button>
    <button class="delete-btn">Delete Note</button>
  </div>`;
  storage.appendChild(content);

  // Delete note

  const deleteBtn = content.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => {
    let id = content.dataset.id;
    storage.removeChild(content);
    displayAlert("note has been deleted", "alert-danger");
    setTimeout(removeAlert, 1000);
    deleteFromLocalStorage(id);
  });

  // Edit Note
  const editBtn = content.querySelector(".edit-btn");
  editBtn.addEventListener("click", () => {
    editID = content.dataset.id;
    editHead = content.querySelector(".contain h3");
    editText = content.querySelector(".contain p");
    title.value = editHead.textContent;
    textArea.value = editText.textContent;
    editFlag = true;
    submitBtn.textContent = "Edit";
    window.scrollTo({
      top: 50,
      left: 0,
    });
  });

  // View Modal Content
  const viewBtn = content.querySelector(".view-btn");
  viewBtn.addEventListener("click", () => {
    let currentTitle = content.querySelector(".contain h3").textContent;
    let currentText = content.querySelector(".contain p").textContent;
    modalTitle.textContent = currentTitle;
    modalP.textContent = currentText;
    modal.classList.add("show-modal");
  });

  // Close Modal Content
  const closeBtn = document.querySelector(".close-btn");
  closeBtn.addEventListener("click", function () {
    modal.classList.remove("show-modal");
  });
}

// LOCAL STORAGE

// add to local storage
function addToLocalStorage(id, head, text) {
  let element = { id: id, head: head, text: text };
  let notes = getLocalStorage();
  notes.push(element);
  localStorage.setItem("note", JSON.stringify(notes));
}

// get local storage
function getLocalStorage() {
  let notes;
  if (localStorage.getItem("note") === null) {
    notes = [];
  } else {
    notes = JSON.parse(localStorage.getItem("note"));
  }
  return notes;
}
// delete from local storage
function deleteFromLocalStorage(id) {
  let notes = getLocalStorage();
  notes = notes.filter(function (note) {
    if (note.id !== id) {
      return note;
    }
  });
  localStorage.setItem("note", JSON.stringify(notes));
}

// Edit local storage
function editLocalStorage(id, head, text) {
  let notes = getLocalStorage();
  notes = notes.map(function (note) {
    if (note.id === id) {
      note.head = head;
      note.text = text;
    }
    return note;
  });
  localStorage.setItem("note", JSON.stringify(notes));
}
