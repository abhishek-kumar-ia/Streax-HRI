$(function () {
  const $hamburger = $(".hamburger_icon");
  const $menu = $(".mobile_menu");

  $hamburger.on("click", function () {
    $(this).toggleClass("is_open");
    $menu.stop(true, true).slideToggle(250).toggleClass("is_open");
  });

//   Banner
const bannerSwiper = new Swiper('.banner_container', {
    // loop: true,
    slidesPerView: 1,
    pagination: {
        el: '.swiper_pagination_banner',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next-banner',
        prevEl: '.swiper-button-prev-banner',
    },
    // autoplay: {
    //     delay: 4000,
    //     disableOnInteraction: false,
    // },
});


  // Brands Swiper
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


  // Awards Swiper Start
  const $awardsSlider = $('.awards_slider.swiper');
  const $awardsSection = $awardsSlider.closest('section');
  const $awardsTrack = $awardsSection.find('.progress-track');
  const $awardsIndicator = $awardsSection.find('.progress-indicator');
  const $awardsPrev = $awardsSection.find('.awards_slider_prev');
  const $awardsNext = $awardsSection.find('.awards_slider_next');

  const awardsSwiper = new Swiper('.awards_slider.swiper', {
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: $awardsNext[0],
      prevEl: $awardsPrev[0],
    },
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


  function updateAwardsProgress() {
    const totalSteps = awardsSwiper.snapGrid.length;
    if (!totalSteps || !$awardsTrack.length) return;

    const trackWidth = $awardsTrack.width();
    const stepWidth = trackWidth / totalSteps;
    // snapIndex aligns with snapGrid; with loop, activeIndex does not
    const stepIndex =
      typeof awardsSwiper.snapIndex === 'number'
        ? awardsSwiper.snapIndex
        : awardsSwiper.activeIndex;

    $awardsIndicator.width((stepIndex + 1) * stepWidth);
    $awardsPrev.prop('disabled', awardsSwiper.isBeginning);
    $awardsNext.prop('disabled', awardsSwiper.isEnd);
  }

  awardsSwiper.on('slideChange', updateAwardsProgress);
  awardsSwiper.on('resize', updateAwardsProgress);
  awardsSwiper.on('breakpoint', updateAwardsProgress);
  $(window).on('resize', updateAwardsProgress);
  updateAwardsProgress();
// Awards Swiper End


// Linkedin Posts Swiper Start
const linkedinPostsSwiper = new Swiper('.linkedin_posts.swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
        1024: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2.4,
        },
        0: {
            slidesPerView: 1.3,
        },
    },
});

// Linkedin Posts Swiper End


// Stakeholder Swiper Start
const $stakeholderSlider = $('.stakeholder_slider.swiper');
const $stakeholderSection = $stakeholderSlider.closest('section');
const $stakeholderTrack = $stakeholderSection.find('.progress-track');
const $stakeholderIndicator = $stakeholderSection.find('.progress-indicator');
const $stakeholderPrev = $stakeholderSection.find('.stakeholder_slider_prev');
const $stakeholderNext = $stakeholderSection.find('.stakeholder_slider_next');

const stakeholderSwiper = new Swiper('.stakeholder_slider.swiper', {
  // loop: true,
  slidesPerView: 4.5,
  slidesPerGroup: 1,
  spaceBetween: 40,
  navigation: {
    nextEl: $stakeholderNext[0],
    prevEl: $stakeholderPrev[0],
  },
  breakpoints: {
    1024: {
      slidesPerView: 4.5,
    },
    768: {
      slidesPerView: 2.4,
    },
    0: {
      slidesPerView: 1.4,
    },
  },
});


  function updateStakeholderProgress() {
  const totalSteps = stakeholderSwiper.snapGrid.length;
  if (!totalSteps || !$stakeholderTrack.length) return;

  const trackWidth = $stakeholderTrack.width();
  const stepWidth = trackWidth / totalSteps;
  // snapIndex aligns with snapGrid; with loop, activeIndex does not
  const stepIndex =
    typeof stakeholderSwiper.snapIndex === 'number'
      ? stakeholderSwiper.snapIndex
      : stakeholderSwiper.activeIndex;

  $stakeholderIndicator.width((stepIndex + 1) * stepWidth);
  $stakeholderPrev.prop('disabled', stakeholderSwiper.isBeginning);
  $stakeholderNext.prop('disabled', stakeholderSwiper.isEnd);
}

stakeholderSwiper.on('slideChange', updateStakeholderProgress);
stakeholderSwiper.on('resize', updateStakeholderProgress);
stakeholderSwiper.on('breakpoint', updateStakeholderProgress);
$(window).on('resize', updateStakeholderProgress);
updateStakeholderProgress();
// Stakeholder Swiper End


// Video Slider Swiper Start
const videoSliderSwiper = new Swiper('.video_slider.swiper', {
  // loop: true,
  slidesPerView: 1,
  pagination: {
      el: '.swiper_pagination_videos',
      clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next-videos',
      prevEl: '.swiper-button-prev-videos',
  },
});
// Video Slider Swiper End

});
