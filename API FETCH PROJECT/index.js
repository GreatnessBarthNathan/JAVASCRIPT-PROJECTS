const container = document.querySelector(".container");

// async function store() {
//   try {
//     let response = await fetch("https://fakestoreapi.com/products");

//     if (!response.ok) {
//       throw new Error(`This is an error ${response.status}`);
//     }
//     let jsonFile = await response.json();
//     let output = "";
//     jsonFile.forEach((file) => {
//       output += `<div class="product">
//         <h3 class="title">${file.title}</h3>
//         <img class="image" src="${file.image}" alt="" />
//         <h3 class="category">${file.category}</h3>
//                <p class="description">${file.description}</p>
//         <h2 class="price">$${file.price}</h2>
//       </div>`;
//     });
//     container.innerHTML = output;
//   } catch (error) {
//     container.innerHTML = `${error}`;
//   }
// }

// store();

function getApi() {
  axios
    .get("https://fakestoreapi.com/products")
    .then((response) => response.data)
    .then((data) => {
      let output = "";
      data.forEach((file) => {
        output += `<div class="product">
         <h3 class="title">${file.title}</h3>
         <img class="image" src="${file.image}" alt="" />
         <h3 class="category">${file.category}</h3>
                <p class="description">${file.description}</p>
         <h2 class="price">$${file.price}</h2>
       </div>`;
      });
      container.innerHTML = output;
    })
    .catch((err) => console.error("This is an " + err));
}
getApi();
