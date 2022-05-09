$('.leasing-slider-item').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
})

const menuBtn = document.querySelector('.header-content__burger');
const menuContent = document.querySelector('.header-content__burger-menu');

const closeMenu = ({
    target
}) => {

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



$(window).resize(function () {
    if ($(window).width() < 768) {
        $(document).ready(function () {
            $(".owl-carousel").owlCarousel({
                items: 2,
                stagePadding: 50,
                responsive: {
                    // breakpoint from 480 up
                    375: {
                        items: 1,
                        stagePadding: 30,
                    },
                    480: {
                        items: 2,
                        stagePadding: 50,
                    }
                }

            });
        });;
    }
});