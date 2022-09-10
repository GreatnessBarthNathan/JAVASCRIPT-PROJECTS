const searchBtn = document.querySelector(".form button");
const input = document.querySelector(".form input");
const container = document.querySelector("section");
const sorry = document.querySelector(".sorry");
const modal = document.querySelector(".modal-container");

searchBtn.addEventListener("click", () => {
  let inputEl = input.value.trim();
  input.value = "";

  async function display() {
    try {
      let response = await fetch(
        `https://themealdb.com/api/json/v1/1/filter.php?i=${inputEl}`
      );

      if (!response.ok) {
        throw new Error(`This is an error ${response.status}`);
      }

      let jsonFile = await response.json();
      // jsonFile returned an object with an array(meals) inside it

      let output = "";
      if (jsonFile.meals) {
        jsonFile.meals.forEach((file) => {
          output += `<div class="content" data-id="${file.idMeal}">
      <img src="${file.strMealThumb}" alt="" />
      <h3>${file.strMeal}</h3>
      <button class="view-modal">Get Recipe</button>
    </div>`;
        });
        container.innerHTML = output;
        sorry.classList.remove("show-sorry");
      } else {
        sorry.classList.add("show-sorry");
        container.innerHTML = "";
      }
    } catch (error) {
      alert(error);
    }
  }

  display();
});

container.addEventListener("click", (e) => {
  if (e.target.classList.contains("view-modal")) {
    let content = e.target.parentElement;

    async function view() {
      try {
        let response = await fetch(
          `https://themealdb.com/api/json/v1/1/lookup.php?i=${content.dataset.id}`
        );

        if (!response.ok) {
          throw new Error(`This is an error: ${response.status}`);
        }
        let jsonFile = await response.json();

        modal.innerHTML = `<div class="modal">
        <button class="close-btn"><i class="fa-solid fa-xmark"></i></button>
        <h3>${jsonFile.meals[0].strMeal}</h3>
        <button class="category">${jsonFile.meals[0].strCategory}</button>
        <h4>Instructions:</h4>
        <p>${jsonFile.meals[0].strInstructions}</p>
        <img src="${jsonFile.meals[0].strMealThumb}" alt="" />
        <h5><a href="${jsonFile.meals[0].strYoutube}" target="_blank">Watch Video</a></h5>
      </div>`;

        modal.classList.add("show-modal");

        const button = modal.querySelector(".close-btn");
        button.addEventListener("click", () =>
          modal.classList.remove("show-modal")
        );
      } catch (error) {
        alert(error);
      }
    }
    view();
  }
});
