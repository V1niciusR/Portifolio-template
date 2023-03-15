const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

toggleButton.addEventListener("click", function () {
  body.classList.toggle("light-mode");
});



const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', function() {
  const icon = themeToggle.querySelector('ion-icon');
  if (icon.getAttribute('name') === 'sunny-outline') {
    icon.setAttribute('name', 'moon-outline');
  } else {
    icon.setAttribute('name', 'sunny-outline');
  }
});
