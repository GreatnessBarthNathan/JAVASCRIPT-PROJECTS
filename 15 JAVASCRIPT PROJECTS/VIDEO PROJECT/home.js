const controlBtn = document.querySelector(".control-btn");

const video = document.querySelector(".video-container");

controlBtn.addEventListener("click", function () {
  if (!controlBtn.classList.contains("slide-switch")) {
    controlBtn.classList.add("slide-switch");
    video.pause();
  } else {
    controlBtn.classList.remove("slide-switch");
    video.play();
  }
});

const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("remove-preloader");
});
