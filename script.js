'use strict';

// html elements
const bodyEl = document.querySelector('body');
const navigationEl = document.querySelector('.navigation');
const openMenuEl = document.querySelector('.mobile-open-menu');
const closeMenuEl = document.querySelector('.mobile-close-menu');

openMenuEl.addEventListener('click', () => {
  openMenuEl.classList.add('hide');
  closeMenuEl.classList.remove('hide');
  navigationEl.style.left = '0';
  bodyEl.style.overflowY = 'hidden';
});

closeMenuEl.addEventListener('click', () => {
  closeMenuEl.classList.add('hide');
  openMenuEl.classList.remove('hide');
  navigationEl.style.left = '100%';
  bodyEl.style.overflowY = 'initial';
});
