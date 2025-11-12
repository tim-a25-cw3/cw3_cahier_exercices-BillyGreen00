import Icons from './utils/Icons.js';
import Swiper from 'swiper/bundle';

Icons.load();

class Main {
  constructor() {
    this.init();
    this.initSwiperPagination();
  }

  init() {
    Icons.load();
  }

  initSwiperPagination() {
    const target = document.querySelector('.js-swiper-pagination');

    if (target) {
      const swiper = new Swiper(target, {
        pagination: {
          el: '.swiper-pagination',
        },
      });
    }
  }
}
new Main();
