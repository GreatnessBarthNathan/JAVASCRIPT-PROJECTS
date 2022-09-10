const linksEl = document.querySelector(".links-container");
const toggleBtn = document.getElementById("toggle");

toggleBtn.addEventListener("click", function () {
  // if (linksEl.classList.contains("show-links")) {
  //   linksEl.classList.remove("show-links");
  // } else {
  //   linksEl.classList.add("show-links");
  // }
  linksEl.classList.toggle("show-links");
});
