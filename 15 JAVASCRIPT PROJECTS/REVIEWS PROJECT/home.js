// local reviews data
const reviews = [
  {
    id: 1,
    name: "Susan Smith",
    job: "Web developer",
    img: "/images/image-2.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam amet magni laudantium. Aliquid odio beatae aut, fugiat dolores exercitationem, blanditiis quia, deserunt a ad quas aliqua tenetur maxime placeat quos.",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "Web designer",
    img: "/images/image-3.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam amet magni laudantium. Aliquid odio beatae aut, fugiat dolores exercitationem, blanditiis quia, deserunt a ad quas aliqua tenetur maxime placeat quos.",
  },
  {
    id: 3,
    name: "mercy johnson",
    job: "front end",
    img: "/images/image-6.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam amet magni laudantium. Aliquid odio beatae aut, fugiat dolores exercitationem, blanditiis quia, deserunt a ad quas aliqua tenetur maxime placeat quos.",
  },
  {
    id: 4,
    name: "julia henderson",
    job: "back end",
    img: "/images/image-7.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam amet magni laudantium. Aliquid odio beatae aut, fugiat dolores exercitationem, blanditiis quia, deserunt a ad quas aliqua tenetur maxime placeat quos.",
  },
];

const personImg = document.getElementById("person-img");
const authorEl = document.getElementById("author");
const jobEl = document.getElementById("job");
const infoEl = document.getElementById("info");

const previousBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");
const surpriseBtn = document.getElementById("surprise");

let reviewIndex = 0;

function showPerson() {
  const item = reviews[reviewIndex];
  personImg.src = item.img;
  authorEl.textContent = item.name;
  jobEl.textContent = item.job;
  infoEl.textContent = item.text;
}

nextBtn.addEventListener("click", function () {
  reviewIndex++;
  if (reviewIndex > 3) {
    reviewIndex = 0;
  }
  showPerson();
});

previousBtn.addEventListener("click", function () {
  reviewIndex--;
  if (reviewIndex < 0) {
    reviewIndex = 3;
  }
  showPerson();
});

function getRandomNumber() {
  return Math.floor(Math.random() * reviews.length);
}
surpriseBtn.addEventListener("click", function () {
  reviewIndex = getRandomNumber();
  showPerson();
});
