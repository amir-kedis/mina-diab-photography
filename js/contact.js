/* eslint-disable require-jsdoc */
// extention set up
document.addEventListener("DOMContentLoaded", function () {
  const getInTouch = document.querySelector('#getInTouch');

  if (window.innerWidth > 992) {

    var instance = OverlayScrollbars(document.querySelectorAll("body"), {
      scrollbars: {
        autoHide: 's',
      },
    });

    getInTouch.style.cursor = 'pointer';

    getInTouch.addEventListener('click', () => {
      instance.scroll(document.getElementById("form-container"), 500);
    });
  } else {
    getInTouch.href = '#form-container';
  }
});

// menu btn toggle
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

let showMenu = false;

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    navItems.forEach((item) => item.classList.add('show'));

    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    navItems.forEach((item) => item.classList.remove('show'));

    showMenu = false;
  }
};

menuBtn.addEventListener('click', toggleMenu);
