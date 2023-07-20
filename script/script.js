var expand = document.querySelector('.expand')
var expand__button = document.querySelector('.expand__button')
var expand__img = document.querySelector('.expand__img')
var brends__list = document.querySelector('.brends__list')

expand__button.addEventListener('click', expand__button_listener)

function expand__button_listener() {

    var brends__list_child = document.querySelectorAll('.brends__li')
    var expand__hide = document.querySelector('.expand__hide') //скрыть
    var expand__show = document.querySelector('.expand__show') //показать все
    var i

    if ( window.innerWidth < 1120 ) {
        i = 6
    }

    if ( window.innerWidth >= 1120 ) {
        i = 8
    }

    if (expand__hide.classList.contains('hidden')) {

        for ( i; i < brends__list_child.length; i++ ) {
            brends__list_child[i].style.display = 'flex'
        }

        expand.style.alignItems = 'center';

        expand__img.style.transform = 'rotate(180deg)';

        expand__hide.classList.remove('hidden');
        expand__show.classList.add('hidden');

    } else {

        for (i; i < brends__list_child.length; i++) {
            brends__list_child[i].style.display = 'none'
        }

        expand.style.alignItems = 'start';

        expand__img.style.transform = 'rotate(0deg)';

        expand__hide.classList.add('hidden');
        expand__show.classList.remove('hidden');

    }

}

function swiperFunc() {

    const breakpoint = window.matchMedia('(min-width:768px)');

    let mySwiper;

    const breakpointChecker = function () {

        if (breakpoint.matches === true) {
            if (mySwiper !== undefined) mySwiper.destroy(true, true);
            return;
        }

        if (breakpoint.matches === false) {
            return enableSwiper();
        }

    };

    const enableSwiper = function () {

        mySwiper = new Swiper(

            '.swiper-container', {

            spaceBetween: 16,

            slidesPerView: 'auto',

            grabCursor: true,

            pagination: {

                el: '.swiper-pagination',

                clickable: true,

            },

        }
        );

    };

    breakpoint.addListener(breakpointChecker);

    breakpointChecker();

}

swiperFunc()