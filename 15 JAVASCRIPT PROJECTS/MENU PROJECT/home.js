const menu = [
  {
    id: 1,
    title: "Buttermilk Pancakes",
    category: "breakfast",
    price: "$ 15.99",
    img: "/images/buttermilk pancakes.jpg",
    desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis reprehenderit voluptate quisquam libero quasi sapiente eaque iste vero, laborum dolores.",
  },
  {
    id: 2,
    title: "Dinner Double",
    category: "lunch",
    price: "$ 13.99",
    img: "/images/dinner double.jpg",
    desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis reprehenderit voluptate quisquam libero quasi sapiente eaque iste vero, laborum dolores.",
  },
  {
    id: 3,
    title: "Godzilla Milkshake",
    category: "shakes",
    price: "$ 6.99",
    img: "/images/godzilla milkshake.jpg",
    desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis reprehenderit voluptate quisquam libero quasi sapiente eaque iste vero, laborum dolores.",
  },
  {
    id: 4,
    title: "Country Delight",
    category: "breakfast",
    price: "$ 20.99",
    img: "/images/country delight.jpg",
    desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis reprehenderit voluptate quisquam libero quasi sapiente eaque iste vero, laborum dolores.",
  },
  {
    id: 5,
    title: "Egg Attack",
    category: "lunch",
    price: "$ 22.99",
    img: "/images/egg attack.jpg",
    desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis reprehenderit voluptate quisquam libero quasi sapiente eaque iste vero, laborum dolores.",
  },
  {
    id: 6,
    title: "Oreo Dream",
    category: "shakes",
    price: "$ 18.99",
    img: "/images/oreo dream.jpg",
    desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis reprehenderit voluptate quisquam libero quasi sapiente eaque iste vero, laborum dolores.",
  },
  {
    id: 7,
    title: "Bacon Overflow",
    category: "breakfast",
    price: "$ 8.99",
    img: "/images/bacon overflow.jpg",
    desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis reprehenderit voluptate quisquam libero quasi sapiente eaque iste vero, laborum dolores.",
  },
  {
    id: 8,
    title: "American Classic",
    category: "lunch",
    price: "$ 12.99",
    img: "/images/american  classic.jpg",
    desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis reprehenderit voluptate quisquam libero quasi sapiente eaque iste vero, laborum dolores.",
  },
  {
    id: 9,
    title: "African Special",
    category: "shakes",
    price: "$ 10.99",
    img: "/images/african special.jpg",
    desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis reprehenderit voluptate quisquam libero quasi sapiente eaque iste vero, laborum dolores.",
  },
  {
    id: 10,
    title: "Steak dinner",
    category: "dinner",
    price: "$ 39.99",
    img: "/images/african special.jpg",
    desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis reprehenderit voluptate quisquam libero quasi sapiente eaque iste vero, laborum dolores.",
  },
];

const container = document.querySelector(".section-center");
const links = document.querySelector(".links");

function createButtons() {
  let btnCategory = menu
    .reduce(
      (total, item) => {
        if (!total.includes(item.category)) {
          total.push(item.category);
        }
        return total;
      },
      ["all"]
    )
    .map((items) => {
      return `<button class="filter-btn" type="button" data-id="${items}">${items}</button>`;
    }).join('')
    ;
  links.innerHTML = btnCategory;
}
createButtons();

const buttons = document.querySelectorAll(".filter-btn");
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let category = btn.dataset.id;
    let menuCategory = menu.filter((items) => {
      if (items.category === category) {
        return items;
      }
    });
    createPage(menuCategory);
    if (category === "all") {
      createPage(menu);
    }
  });
});

function createPage(menu) {
  // let output = menu
  //   .map((item) => {
  //     return `<div class="container">
  //   <div class="image">
  //     <img src="${item.img}" class="photo" alt="" />
  //   </div>
  //   <div class="content">
  //     <div class="content-heading">
  //       <h4>${item.title}</h4>
  //       <span class="price">${item.price}</span>
  //     </div>
  //     <p>${item.desc}</p>
  //   </div>
  // </div>`;
  //    })
  //   .join("");
  // container.innerHTML = output;
  let output = "";
  menu.forEach((item) => {
    output += `<div class="container">
    <div class="image">
      <img src="${item.img}" class="photo" alt="" />
    </div>
    <div class="content">
      <div class="content-heading">
        <h4>${item.title}</h4>
        <span class="price">${item.price}</span>
      </div>
      <p>${item.desc}</p>
    </div>
  </div>`;
  });
  container.innerHTML = output;
}
createPage(menu);
