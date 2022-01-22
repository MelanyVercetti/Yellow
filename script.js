const navList = document.querySelector('.main-nav');
const menuBtn = document.querySelector('.menu');
const menuClose = document.querySelector('.menu-close');

menuBtn.addEventListener('click', () => {
    console.log('menu click')
    navList.classList.toggle('active');
    menuBtn.classList.toggle('active');
    menuClose.classList.toggle('active');
});

menuClose.addEventListener('click', () => {
    console.log('menu close')
    navList.classList.toggle('active');
    menuBtn.classList.toggle('active');
    menuClose.classList.toggle('active');
});