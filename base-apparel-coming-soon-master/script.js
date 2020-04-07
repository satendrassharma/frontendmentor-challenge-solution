const form = document.forms[0];
console.log(form);

const Email = document.getElementById("email");
const btn = document.button;

function isValidEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

form.addEventListener("submit", e => {
  e.preventDefault();
  const email = Email.value;

  if (!isValidEmail(email)) {
    form.classList.add("error");
  } else {
    form.classList.remove("error");
  }
});
