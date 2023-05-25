document.addEventListener('DOMContentLoaded', function () {

  // lazyload

  lazyload();

  // header-burger

  const header = document.querySelector('.header');

  document.getElementById('burger').addEventListener('click', (e) => {
    header.classList.toggle('open');
    e._isClickWithInMenu = true;
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      header.classList.remove('open');
    }
  });

  document.getElementById('menu').addEventListener('click', (e) => {
    e._isClickWithInMenu = true;
  });

  document.body.addEventListener('click', (e) => {
    if (e._isClickWithInMenu) return;
    header.classList.remove('open');
  });

  //header-search

  const headerForm = document.getElementById('header-form-search');

  document.getElementById('open-header-btn-search').addEventListener('click', () => {
    headerForm.classList.add('header__form-search--active');
  });

  document.getElementById('form-search-btn-close').addEventListener('click', () => {
    headerForm.classList.remove('header__form-search--active');
  });

  headerForm.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      headerForm.classList.remove('header__form-search--active');
    }
  });

  //hero-swiper

  let swiper = new Swiper('.swiper', {
    loop: true,
    spaceBetween: 25,
    pagination: {
      el: '.swiper-pagination',
      draggable: true,
      clickable: true,
    },
    a11y: {
      paginationBulletMessage: 'Панорамная фотография дома {{index}}',
    },
    autoplay: {
      delay: 5000,
    },
  },
  );

  //working-tabs

  const tabsBtn = document.querySelectorAll('.working-stages__step');
  const tabsItem = document.querySelectorAll('.tabs-content__tabs-item');

  tabsBtn.forEach(function (element) {
    element.addEventListener('click', function (e) {
      const path = e.currentTarget.dataset.path;

      tabsBtn.forEach(function (btn) { btn.classList.remove('working-stages__step--active') });
      e.currentTarget.classList.add('working-stages__step--active');

      tabsItem.forEach(function (element) { element.classList.remove('tabs-content__tabs-item--active') });
      document.querySelector(`[data-target="${path}"]`).classList.add('tabs-content__tabs-item--active');
    });
  });

  //questions-accordion

  new Accordion('.accordion-container');
});
