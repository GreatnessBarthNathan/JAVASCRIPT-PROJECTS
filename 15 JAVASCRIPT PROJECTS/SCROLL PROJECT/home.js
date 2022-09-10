const navToggle = document.querySelector(".nav-toggle");
// const links = document.querySelector(".nav-links");
const linksContainer = document.querySelector(".nav-links");


navToggle.addEventListener("click", function () {
  linksContainer.classList.toggle("show-links");
});

const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    
    // calculate the heights
    const navHeight = navbar.getBoundingClientRect().height;

    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;
    if (!fixedNav) {
      position = position - navHeight;
    } 

    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});
