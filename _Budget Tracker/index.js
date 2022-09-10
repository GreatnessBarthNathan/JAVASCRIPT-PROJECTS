// SELECT ITEMS
const moneyEarned = document.querySelector(".earned span");
const moneyAvailable = document.querySelector(".available span");
const moneySpent = document.querySelector(".spent span");
const description = document.querySelector(".description");
const amount = document.querySelector(".amount");
const incomeBtn = document.querySelector(".income-btn");
const expenseBtn = document.querySelector(".expense-btn");
const incomeContainer = document.querySelector(".income-container");
const expenseContainer = document.querySelector(".expense-container");


// GLOBAL VARIABLES

let incomeArray = [];
let incomeSum = 0;
let expenseSum = 0;
let balance = 0;
let expenseArray = [];


// load dom
window.addEventListener("DOMContentLoaded", () => {
  let incomes = getIncomeFromLocalStorage();
  if (incomes.length > 0) {
    incomes.forEach(function (income) {
      createIncome(income.id, income.d, income.a);
    });
  }
  let expenses = getExpenseFromLocalStorage();
  if (expenses.length > 0) {
    expenses.forEach(function (expense) {
      createExpense(expense.id, expense.d, expense.a);
    });
  }
});
// EVENT LISTENERS
// income
incomeBtn.addEventListener("click", () => {
  let id = new Date().getTime().toString();
  let d = description.value;
  let a = parseInt(amount.value);
  if (d && a) {
    createIncome(id, d, a);
    saveIncomeToLocalStorage(id, d, a);
    backToDefault();
  }
});

// create income
 function createIncome (id, d, a) {
  let income = document.createElement("div");
  income.classList.add("income");
  income.setAttribute("data-id", id);
  income.innerHTML = `<h3>${d}</h3>
    <p class="income-value">$${a}</p>
    <button class="delete-income">
      <i class="fa-solid fa-trash-can"></i>
    </button>`;
  incomeContainer.appendChild(income);
  calculateIncome(id, a);

  balance = incomeSum - expenseSum;
  moneyAvailable.textContent = balance;
  // delete income
  const deleteBtn = document.querySelectorAll(".delete-income");
  deleteBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let income = e.currentTarget.parentElement;
      let id = income.dataset.id;
      income.remove();
      deleteIncomeFromLocalStorage(id);
      incomeArray = incomeArray.filter((each) => {
        if (each.id !== id) {
          return each;
        }
      });
      incomeSum = incomeArray.reduce((total, value) => {
        return total + value.a;
      }, 0);
      moneyEarned.textContent = incomeSum;
      balance = incomeSum - expenseSum;
      moneyAvailable.textContent = balance;
    });
  });
};

// function calculateIncome
export function calculateIncome (id, a) {
  let incomeObject = {
    id: id,
    a: a,
  };
  incomeArray.push(incomeObject);
  incomeSum = incomeArray.reduce((total, value) => {
    return total + value.a;
  }, 0);
  moneyEarned.textContent = incomeSum;
};
// expense
expenseBtn.addEventListener("click", () => {
  let id = new Date().getTime().toString();
  let d = description.value;
  let a = parseInt(amount.value);
  if (d && a) {
    createExpense(id, d, a);
    saveExpenseToLocalStorage(id, d, a);
    backToDefault();
  }
});

// FUNCTIONS
// back to default
function backToDefault()  {
  amount.value = "";
  description.value = "";
};


// create expense
function createExpense (id, d, a) {
  let expense = document.createElement("div");
  expense.classList.add("expense");
  expense.setAttribute("data-id", id);
  expense.innerHTML = `<h3>${d}</h3>
    <p class="expense-value">$${a}</p>
    <button class="delete-expense">
      <i class="fa-solid fa-trash-can"></i>
    </button>`;
  expenseContainer.appendChild(expense);

  calculateExpense(id, a);
  balance = incomeSum - expenseSum;
  moneyAvailable.textContent = balance;

  // delete expense
  const deleteBtn = document.querySelectorAll(".delete-expense");
  deleteBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let expense = e.currentTarget.parentElement;
      let id = expense.dataset.id;
      expense.remove();
      deleteExpenseFromLocalStorage(id);
      expenseArray = expenseArray.filter((each) => {
        if (each.id !== id) {
          return each;
        }
      });
      expenseSum = expenseArray.reduce((total, value) => {
        return total + value.a;
      }, 0);
      moneySpent.textContent = expenseSum;
      balance = incomeSum - expenseSum;
      moneyAvailable.textContent = balance;
    });
  });
};

// function calculateIncome
function calculateExpense (id, a) {
  let expenseObject = {
    id: id,
    a: a,
  };
  expenseArray.push(expenseObject);
  expenseSum = expenseArray.reduce((total, value) => {
    return total + value.a;
  }, 0);
  moneySpent.textContent = expenseSum;
};


// LOCAL STORAGE

// income

function saveIncomeToLocalStorage (id, d, a) {
  let incomeObject = {
    id: id,
    d: d,
    a: a,
  };
  let incomes = getIncomeFromLocalStorage();
  incomes.push(incomeObject);
  console.log(incomes);
  localStorage.setItem("income", JSON.stringify(incomes));
};

// get income from local storage
function getIncomeFromLocalStorage () {
  let incomes;
  if (localStorage.getItem("income") === null) {
    incomes = [];
  } else {
    incomes = JSON.parse(localStorage.getItem("income"));
  }
  return incomes;
};

// delete income from local storage
function deleteIncomeFromLocalStorage (id) {
  let incomes = getIncomeFromLocalStorage();
  incomes = incomes.filter((each) => {
    if (each.id !== id) {
      return each;
    }
  });
  localStorage.setItem("income", JSON.stringify(incomes));
};

// save expense to local storage
function saveExpenseToLocalStorage (id, d, a) {
  let expenseObject = {
    id: id,
    d: d,
    a: a,
  };
  let expenses = getExpenseFromLocalStorage();
  expenses.push(expenseObject);
  localStorage.setItem("expense", JSON.stringify(expenses));
};

// get expenses from local storage
function getExpenseFromLocalStorage () {
  let expenses;
  if (localStorage.getItem("expense") === null) {
    expenses = [];
  } else {
    expenses = JSON.parse(localStorage.getItem("expense"));
  }
  return expenses;
};

// delete expense from local storage
function deleteExpenseFromLocalStorage (id) {
  let expenses = getExpenseFromLocalStorage();
  expenses = expenses.filter((each) => {
    if (each.id !== id) {
      return each;
    }
  });
  localStorage.setItem("expense", JSON.stringify(expenses));
};
