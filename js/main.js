const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
const menuBtnBars = document.querySelectorAll('.menu-btn-bar');
const menuBtnClose = document.querySelector('.menu-btn-cls');

menuBtn.addEventListener('click', () => {
  if (menuBtn.classList.contains('menu-open')) {
    menuBtn.classList.remove('menu-open');
    nav.style.display = '';
    menuBtnBars.forEach(bar => bar.style.display = '');
    menuBtnClose.style.display = '';
  } else {
    menuBtn.classList.add('menu-open');
    nav.style.display = 'flex';
    menuBtnBars.forEach(bar => bar.style.display = 'none');
    menuBtnClose.style.display = 'flex';
  }
});

menuBtn.addEventListener('mouseenter', () => {
    menuBtnBars.forEach(bar => bar.style.backgroundColor = '#e1b382');
});
  
menuBtn.addEventListener('mouseleave', () => {
    menuBtnBars.forEach(bar => bar.style.backgroundColor = '');
});
