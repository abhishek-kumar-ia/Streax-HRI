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



// Create different slider for fourtwocolumslider

$(function () {

    function initSlider(selector, slidesPerView) {
  
      const $slider = $(selector);
      const $section = $slider.closest("section");
      const $prev = $section.find(".prev");
      const $next = $section.find(".next");
      const $indicator = $section.find(".progress-indicator");
      const $track = $section.find(".progress-track");
  
      const swiper = new Swiper(selector, {
        slidesPerView: slidesPerView,
        slidesPerGroup: 1,
        spaceBetween: 24,
        speed: 500,
        navigation: {
          nextEl: $next[0],
          prevEl: $prev[0]
        }
      });
  
      function updateProgress() {
  
        /* ✅ snapGrid FIX (works for 1.5 view) */
        const totalSteps = swiper.snapGrid.length;
        const stepWidth = $track.width() / totalSteps;
  
        $indicator.width((swiper.activeIndex + 1) * stepWidth);
  
        $prev.prop("disabled", swiper.isBeginning);
        $next.prop("disabled", swiper.isEnd);
      }
  
      swiper.on("slideChange", updateProgress);
      $(window).on("resize", updateProgress);
      updateProgress();
    }
  
    initSlider(".awards_slider", 4.2);
    initSlider(".stakeholders_slider", 4.2);
    initSlider(".linkedin_slider", 2.75);
  
  });