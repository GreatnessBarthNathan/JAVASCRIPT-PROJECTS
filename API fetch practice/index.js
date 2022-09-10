const getText = document.getElementById("get-text");
const container = document.getElementById("output");
const getUsers = document.getElementById("get-users");
const getAPI = document.getElementById("get-posts");

getText.addEventListener("click", () =>
  fetch("sample.txt")
    .then((result) => result.text())
    .then((data) => (container.innerHTML = data))
);

async function users() {
  let response = await fetch("users.json");

  let jsonFile = await response.json();

  let output = `<p> Users: </p>`;

  jsonFile.forEach((file) => {
    output += `<ul>
    <li>ID: ${file.id}</li>
    <li>Name: ${file.name}</li>
    <li>Email: ${file.email} </li>
    </ul>`;
  });
  container.innerHTML = output;
}
getUsers.addEventListener("click", () => {
  users();
});

getAPI.addEventListener("click", () => {
  async function api() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");

    let jsonFile = await response.json();

    let output = "";
    jsonFile.forEach((file) => {
      output += `<h3>${file.id}</h3>
                 <p>${file.title}</p>`;
    });
    container.innerHTML = output;
  }
  api();
});
