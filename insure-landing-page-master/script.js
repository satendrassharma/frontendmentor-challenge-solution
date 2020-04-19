const hamburger = document.getElementById("hamburger");

const close = document.getElementById("close");

const links = document.getElementById("links");

const div = document.querySelector("#mobile-nav-control");

div.addEventListener("click", e => {
  div.classList.toggle("show");
  if (div.className == "show") {
    links.classList.remove("mobile-nav");
  } else {
    links.classList.add("mobile-nav");
  }
});
