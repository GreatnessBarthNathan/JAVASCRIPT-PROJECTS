const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
const modal = document.querySelector(".modal");

openBtn.addEventListener("click", function () {
  modal.classList.add("module");
});

closeBtn.addEventListener("click", function () {
  modal.classList.remove("module");
});
