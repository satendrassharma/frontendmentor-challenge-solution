const prices = document.getElementById("prices");
const toggle = document.getElementById("toggle");
toggle.addEventListener("change", e => {
  prices.classList.toggle("show-monthly");
});
