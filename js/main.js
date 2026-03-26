console.log("Test")

const bannerSwiper = new Swiper('.banner_container', {
    loop: true,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // autoplay: {
    //     delay: 4000,
    //     disableOnInteraction: false,
    // },
});


const brandsSwiper = new Swiper('.swiper_brands.swiper', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
        1024: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 2.4,
        },
        0: {
            slidesPerView: 1.4,
        },
    },
});