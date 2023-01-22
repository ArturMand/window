// import Swiper from 'swiper';
// import 'swiper/swiper-bundle.min.css';
// // import Swiper styles
import Swiper, { Navigation, Pagination } from 'swiper';

new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 10,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
