const headerMenu = document.getElementById('header_menu');
const headerLeft = document.querySelector('.header_left');
const outline = document.getElementById('outline')

headerMenu.addEventListener('click', () => {
  headerLeft.classList.toggle('menu_toggle')
  outline.classList.toggle('outline')
})

// swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});