import Swiper, { Pagination, Autoplay } from 'swiper';

new Swiper('.swiper', {
  modules: [Autoplay, Pagination],
  slidesPerView: 1,
  spaceBetween: 50,
  speed: 1000,
  autoplay: {
    delay: 5000,
  },
  loop: true,
  lazy: {
    loadPrevNext: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
  },

});

