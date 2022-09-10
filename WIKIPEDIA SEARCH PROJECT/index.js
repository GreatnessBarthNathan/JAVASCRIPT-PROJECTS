const submitBtn = document.querySelector(".input button");
const input = document.querySelector(".input input");
const container = document.querySelector("section");

const endPoint = 'https://en.wikipedia.org/w/api.php?'
const params = {
    origin: '*',
    format: 'json',
    action: 'query',
    prop: 'extracts',
    exchars: 250,
    exintro: true,
    explaintext: true,
    generator: 'search',
    gsrlimit: 20
}

submitBtn.addEventListener("click", () => {});

