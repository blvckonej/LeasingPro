$('.leasing-slider-item').on('click', function() {
    $(this).addClass('active').siblings().removeClass('active');
})

const menuBtn = document.querySelector('.header-content__burger');
const menuContent = document.querySelector('.header-content__burger-menu');

const closeMenu = ({ target }) => {

    if (!target.closest('.header-content__burger-menu, .header-content__burger')) {
        menuBtn.classList.remove('active');
    menuContent.classList.remove('active-burger');

    document.body.removeEventListener('click', closeMenu);
 }
}

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    menuContent.classList.toggle('active-burger');
    document.body.addEventListener('click', closeMenu);
})
