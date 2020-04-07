const form = document.forms[0];
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");

const first_wrapper = document.getElementById("first_wrapper");
const last_wrapper = document.getElementById("last_wrapper");
const email_wrapper = document.getElementById("email_wrapper");
const password_wrapper = document.getElementById("password_wrapper");

form.addEventListener("submit", e => {
  e.preventDefault();

  if (firstName.value == "") {
    first_wrapper.classList.add("error");
  } else {
    first_wrapper.classList.remove("error");
  }

  if (lastName.value == "") {
    last_wrapper.classList.add("error");
  } else {
    last_wrapper.classList.remove("error");
  }

  if (!isValidEmail(email.value)) {
    email_wrapper.classList.add("error");
  } else {
    email_wrapper.classList.remove("error");
  }

  if (password.value == "") {
    password_wrapper.classList.add("error");
  } else {
    password_wrapper.classList.remove("error");
  }
});

function isValidEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
