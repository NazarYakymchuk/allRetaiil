let eventBurgerClose = new Event('eventBurgerClose');

document.addEventListener('click', function (e) {
    let target = e.target
    let trigger = target.closest('.header__burger-btn')
    if (!trigger) return
    e.preventDefault()
    let wrap = trigger.closest('[data-burger-menu-wrap]')
    let menu = wrap.querySelector('.burger-menu')

    if (!menu.classList.contains('_active')) {
        document.addEventListener('click', onClickOut)
        menu.addEventListener('click', onClose)
        open()
    }

    function open() {
        trigger.classList.add('_active')
        menu.classList.add('_active')
        document.body.classList.add('_scroll-lock')
    }

    function onClose(e) {
        let btn = e.target.closest('a')
        if (btn && btn.hasAttribute('data-menu-tab')) return
        if (btn) {
            close()
            menu.removeEventListener('click', onClose)
        }
    }

    function close() {
        document.dispatchEvent(eventBurgerClose);
        trigger.classList.remove('_active')
        menu.classList.remove('_active')
        document.removeEventListener('click', onClickOut)
        menu.removeEventListener('click', onClose)
        document.body.classList.remove('_scroll-lock')
    }

    function onClickOut(e) {
        if (!menu.classList.contains('_active')) return
        const isElement = e.target === menu || menu.contains(e.target)
        if (!isElement) {
            close()
        }
    }
});
window.addEventListener('load', () => {

    const mainNews = Array.from(document.querySelectorAll(".main-news__slider"));

    mainNews.forEach((item) => {
        let container = item.querySelector(".main-news__slider-wrap");
        let navPrev = item.querySelector(".main-news__nav._prev");
        let navNext = item.querySelector(".main-news__nav._next");


        let main = new Swiper(container, {
            wrapperClass: "main-news__slide-wrap",
            slideClass: "main-news__slide",
            slidesPerView: 'auto',
            speed: 750,
            loop: true,
            navigation: {
                prevEl: navPrev,
                nextEl: navNext,
                lockClass: "_lock",
                disabledClass: "_disabled",
            },
            autoplay: {
                delay: 2500,
            },
        });
    });

    /*-------------------------------------------------------------------------*/

    const magazineSlider = Array.from(document.querySelectorAll(".magazine__slider"));

    magazineSlider.forEach((item) => {
        let container = item.querySelector(".magazine__slider-inner");
        let navPrev = item.querySelector(".magazine__nav._prev");
        let navNext = item.querySelector(".magazine__nav._next");


        let main = new Swiper(container, {
            wrapperClass: "magazine__slider-wrap",
            slideClass: "magazine__slide",
            slidesPerView: 'auto',
            speed: 800,
            loop: true,
            navigation: {
                prevEl: navPrev,
                nextEl: navNext,
                lockClass: "_lock",
                disabledClass: "_disabled",
            },
            autoplay: {
                delay: 3000,
            },
        });
    });

    /*-------------------------------------------------------------------------*/

    const reportLeft = Array.from(document.querySelectorAll(".report__left"));

    reportLeft.forEach((item) => {
        let container = item.querySelector(".report__photo-slider");
        let navPrev = item.querySelector(".report__nav._prev");
        let navNext = item.querySelector(".report__nav._next");


        let main = new Swiper(container, {
            wrapperClass: "report__photo-wrap",
            slideClass: "report__photo-slide",
            slidesPerView: 'auto',
            speed: 800,
            loop: true,
            navigation: {
                prevEl: navPrev,
                nextEl: navNext,
                lockClass: "_lock",
                disabledClass: "_disabled",
            },
            autoplay: {
                delay: 3000,
            },
        });
    });


    /*-------------------------------------------------------------------------*/

    const bannerSlider = Array.from(document.querySelectorAll(".main-news__banner-slider"));

    bannerSlider.forEach((item) => {
        let navPrev = item.querySelector(".main-banner__nav._prev");
        let navNext = item.querySelector(".main-banner__nav._next");


        let main = new Swiper(item, {
            wrapperClass: "main-news__banner-wrap",
            slideClass: "main-news__banner-slide",
            slidesPerView: 'auto',
            speed: 1000,
            loop: true,
            navigation: {
                prevEl: navPrev,
                nextEl: navNext,
                lockClass: "_lock",
                disabledClass: "_disabled",
            },
            autoplay: {
                delay: 3500,
            },
        });
    });


})