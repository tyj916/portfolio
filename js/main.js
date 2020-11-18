"use strict";

footerGetYear();
menuBtn();

function footerGetYear() {
  let thisYear = new Date();
  document.getElementById("js-footer__year").innerHTML = thisYear.getFullYear();
}

function menuBtn() {
  const menuBtn = document.querySelector('.js-menu-btn');
  const hamburger = document.querySelector('.js-menu-btn__burger');
  const nav = document.querySelector('.js-nav');
  const menuNav = document.querySelector('.js-menu-nav');
  const navItems = document.querySelectorAll('.js-menu-nav__item');

  let showMenu = false;

  menuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    if (!showMenu) {
      hamburger.classList.add('open');
      nav.classList.add('open');
      menuNav.classList.add('open');
      navItems.forEach(item => item.classList.add('open'));

      showMenu = true;
    } else {
      hamburger.classList.remove('open');
      nav.classList.remove('open');
      menuNav.classList.remove('open');
      navItems.forEach(item => item.classList.remove('open'));

      showMenu = false;
    }
  }
}


