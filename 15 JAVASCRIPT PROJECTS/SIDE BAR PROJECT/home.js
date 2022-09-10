const sideBar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close");
const toggleBtn = document.querySelector(".toggle");

toggleBtn.addEventListener("click", function () {
  sideBar.classList.add("show-sidebar");
  toggleBtn.classList.remove("toggle");
  console.log("button was clicked");
});

closeBtn.addEventListener("click", function () {
  sideBar.classList.remove("show-sidebar");
  toggleBtn.classList.add("toggle");
});
