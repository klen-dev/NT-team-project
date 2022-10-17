const elHamburgerBtn = document.querySelector(".toggle");
const elHeader = document.querySelector(".header");

elHamburgerBtn.addEventListener('click', ()=> {
  elHeader.classList.toggle('header--open');
})