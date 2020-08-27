// Selectors
const header = document.querySelector('.header');
const hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerMenu.addEventListener('click', function() {
  header.classList.toggle('menu-open');
});
