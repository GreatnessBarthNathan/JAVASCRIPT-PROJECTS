const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".content");
const articles = document.querySelectorAll(".write");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  console.log(id);
  if (id) {
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });

    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    console.log(element);
    element.classList.add("active");
  }
});
