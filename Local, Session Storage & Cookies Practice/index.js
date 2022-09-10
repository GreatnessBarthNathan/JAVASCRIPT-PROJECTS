const firstName = document.querySelector(".firstname");
const surName = document.querySelector(".surname");
const submitBtn = document.querySelector(".sign-up");
const getCookies = document.querySelector(".login");

submitBtn.addEventListener("click", () => {
  setCookie("firstName", firstName.value, 365);
  setCookie("lastName", surName.value, 365);
});

getCookies.addEventListener("click", () => {
  firstName.value = getCookie("firstName");
  console.log(firstName.value);
  surName.value = getCookie("lastName");
  console.log(surName.value);
});


function setCookie(name, value, daysToLive) {
  let date = new Date();
  date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
  let expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function deleteCookie(name) {
  setCookie(name, null, null);
}

function getCookie(name) {
  const decodeCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodeCookie.split(";");

  let result;
  cookieArray.forEach((element) => {
    if (element.indexOf(name) === 0) {
      result = element.substring(name.length + 1);
    }
  });
  return result;
}
