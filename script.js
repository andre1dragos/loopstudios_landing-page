'use strict';

const navEl = document.querySelector('.navigation');
const openMenuEl = document.querySelector('.mobile-menu');
const closeMenuEl = document.querySelector('.close-menu-btn');

openMenuEl.addEventListener('click', () => {
  openMenuEl.classList.add('hide');
  navEl.classList.add('show');
  closeMenuEl.classList.add('show');
  document.querySelector('body').style.overflowY = 'hidden';
});
closeMenuEl.addEventListener('click', () => {
  closeMenuEl.classList.remove('show');
  openMenuEl.classList.remove('hide');
  navEl.classList.remove('show');
  document.querySelector('body').style.overflowY = 'scroll';
});
