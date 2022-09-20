// SELECT ITEMS
const form = document.querySelector("form");
const input = document.querySelector(".input");
const submitBtn = document.querySelector(".btn");
const container = document.querySelector(".item-container");
const clearBtn = document.querySelector(".clear-btn");
const list = document.querySelector(".lists");
const message = document.querySelector(".alert");

// GLOBAL VARIABLES
let editFlag = false;
let editID = "";
let itemArray = [];

window.addEventListener('DOMContentLoaded', ()=> {
   itemArray = getLocalStorage()
   createList();
   if(itemArray.length > 0) {container.classList.add('show-container')}
})

form.addEventListener('submit', (e)=> {
 e.preventDefault();
 const item = {name: input.value, id: Math.random()}
 if (!input.value) {
    displayAlert('alert-danger', 'please add Item')
 } 
 if (input.value && !editFlag) {
 itemArray.push(item)
 createList()
 container.classList.add('show-container');
 localStorage.setItem('myList', JSON.stringify(itemArray));
 displayAlert('alert-success', 'Item added to list')
 input.value = '';
 }
 if (input.value && editFlag) {
   itemArray = itemArray.map((item)=> {
    if (item.id === editID) {
        item.name = input.value
    }
    return item
   })
   createList();
 localStorage.setItem('myList', JSON.stringify(itemArray));
 displayAlert('alert-success', 'item edited')
 input.value = '';
 }
})

function createList() {
    const items = itemArray.map((item)=> {
        const {name, id} = item
    return `<div class="items" data-id=${id}>
            <p>${name}</p>
            <span class="button-container">
              <button class="edit-btn">edit</button>
              <button class="delete-btn">delete</button>
            </span>
          </div>`
    }).join('')
    list.innerHTML = items;

    // delete
 const element = list.querySelectorAll('.items')
 element.forEach((item) => {
    deleteBtn = item.querySelector('.delete-btn')
    deleteBtn.addEventListener('click', ()=> {
     const id = Number(item.dataset.id);
     itemArray = itemArray.filter((item)=> item.id !== id)
     createList()
     displayAlert('alert-danger', 'item deleted')
     localStorage.setItem('myList', JSON.stringify(itemArray));
     if (itemArray.length < 1) {container.classList.remove('show-container')
    displayAlert('alert-danger', 'list cleared')
    }
    })
 })

 // edit 
 element.forEach((item)=> {
    editBtn = item.querySelector('.edit-btn')
    editBtn.addEventListener('click', (e)=> {
        const id = Number(item.dataset.id);
        editFlag = true;
        editID = id;
        let editElement = e.currentTarget.parentElement.previousElementSibling;
        input.value = editElement.textContent;
        input.focus();
    })
 })
}
 
clearBtn.addEventListener('click', ()=> {
    itemArray = [];
    createList();
     localStorage.setItem('myList', JSON.stringify(itemArray));
     displayAlert('alert-danger', 'list cleared')
    container.classList.remove('show-container');
})

// get local storage
function getLocalStorage() {
    let myList;
    if (localStorage.getItem('myList') === null) {
        myList = []
    }
    else {
        myList = JSON.parse(localStorage.getItem('myList'))
    }
     return myList;
}

function displayAlert(type, content) {
   message.classList.add(type)
   message.textContent = content;

   setTimeout(()=> {
    message.classList.remove(type);
   }, 1500)
}
