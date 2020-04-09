const form = document.forms[0];
const email = document.getElementById("email");
form.addEventListener("submit", e => {
  e.preventDefault();
  if (!isValidEmail(email.value)) {
    form.classList.add("error");
  } else {
    form.classList.remove("error");
  }
});

function isValidEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
