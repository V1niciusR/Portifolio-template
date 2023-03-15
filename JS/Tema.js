const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

toggleButton.addEventListener("click", function () {
  body.classList.toggle("light-mode");
});