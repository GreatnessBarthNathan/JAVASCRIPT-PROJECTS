// const fetchPromise = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
// );
// fetchPromise
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data[0].name))
//   .catch((error) => console.error(`Could not get products: ${error}`));

// async function getProducts() {
//   try {
//     let response = await fetch(
//       "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
//     );
//     if (!response.ok) {
//       throw new Error(`This is an error ${response.status}`);
//     }
//     let jsonFile = await response.json();
//     console.log(jsonFile[3]);
//   } catch (error) {
//     console.error(`${error}`);
//   }
// }
// getProducts();

// AXIOS GLOBALS
axios.defaults.headers.common["X-Auth-Token"] =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

const container = document.querySelector(".container");
const getBtn = document.querySelector(".get");
const postBtn = document.querySelector(".post");
const putPatch = document.querySelector(".put-patch");
const deleteBtn = document.querySelector(".delete");
const simRequest = document.querySelector(".sim-request");
const customHeaders = document.querySelector(".custom-headers");
const transform = document.querySelector(".transform");
const errorHandling = document.querySelector(".error-handling");
const cancelRequest = document.querySelector(".cancel");

function showOutput(res) {
  container.innerHTML = `<div class="status">
<h3>Status: ${res.status}</h3>
</div>
<div class="headers">
<h3>Headers</h3>
<pre>${JSON.stringify(res.headers, null, 2)}</pre>
</div>
<div class="data">
<h3>Data</h3>
<pre>${JSON.stringify(res.data, null, 2)}</pre>
</div>
<div class="config">
<h3>Config</h3>
<pre>${JSON.stringify(res.config, null, 2)}</pre>
</div>`;
}

// Get request
getBtn.addEventListener("click", () => {
  axios
    .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
    .then((res) => showOutput(res))
    .catch((err) => console.error("This is an " + err));
});

// Post request
postBtn.addEventListener("click", () => {
  axios
    .post("https://jsonplaceholder.typicode.com/todos", {
      title: "New Todo",
      completed: false,
    })
    .then((res) => showOutput(res))
    .catch((err) => console.error("This is an " + err));
});

// put or patch request
putPatch.addEventListener("click", () => {
  // axios
  //   .patch("http://jsonplaceholder.typicode.com/todos/1", {
  //     title: "put todo",
  //     completed: false,
  //   })
  //   .then((res) => showOutput(res))
  //   .catch((err) => console.error("This is an " + err));
  axios
    .put("http://jsonplaceholder.typicode.com/todos/2", {
      title: "put todo",
      completed: false,
    })
    .then((res) => showOutput(res))
    .catch((err) => console.error("This is an " + err));
});

// Delete request
deleteBtn.addEventListener("click", () => {
  axios
    .delete("http://jsonplaceholder.typicode.com/todos/1")
    .then((res) => showOutput(res))
    .catch((err) => console.error("This is an " + err));
});

// Simultaneous request
simRequest.addEventListener("click", () => {
  axios
    .all([
      axios.get("http://jsonplaceholder.typicode.com/todos?_limit=5"),
      axios.get("http://jsonplaceholder.typicode.com/posts?_limit=5"),
    ])
    .then((res) => {
      showOutput(res[0]);
      // showOutput(res[1]);
    })
    .catch((err) => console.error("This is an " + err));
});

// Custom Headers
customHeaders.addEventListener("click", () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "sometoken",
    },
  };
  axios
    .post(
      "http://jsonplaceholder.typicode.com/todos",
      {
        title: "new post",
        completed: false,
      },
      config
    )
    .then((res) => showOutput(res))
    .catch((err) => console.error("This is an " + err));
});

// transform
transform.addEventListener("click", () => {
  const options = {
    method: "post",
    url: "http://jsonplaceholder.typicode.com/todos",
    data: {
      title: "hello world",
      completed: true,
    },
    transformResponse: axios.defaults.transformResponse.concat((data) => {
      data.title = data.title.toUpperCase();
      data.completed = false;
      return data;
    }),
  };

  axios(options)
    .then((res) => showOutput(res))
    .catch((err) => console.error("This is an " + err));
});

// Error handling
errorHandling.addEventListener("click", () => {
  axios
    .get("https://jsonplaceholder.typicode.com/todoss")
    .then((res) => showOutput(res))
    .catch((err) => {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      }
    });
});

// Cancel request
cancelRequest.addEventListener("click", () => {
  const source = axios.CancelToken.source();

  axios
    .get("https://jsonplaceholder.typicode.com/todos", {
       cancelToken: source.token,
    })
    .then((res) => showOutput(res))
    .catch((thrown) => {
      if (axios.isCancel(thrown)) {
        console.log("Request canceled", thrown.message);
      }
    });

  if (true) {
    source.cancel("Request canceled!");
  }
});

// INTERCEPTING REQUESTS AND RESPONSES
axios.interceptors.request.use(
  (message) => {
    console.log(
      `${message.method.toUpperCase()} request was sent to ${
        message.url
      } at ${new Date().getTime()}`
    );

    return message;
  },

  (error) => {
    return Promise.reject(error);
  }
);
