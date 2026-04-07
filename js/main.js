$(function () {
  const $hamburger = $(".hamburger_icon");
  const $menu = $(".mobile_menu");

  $hamburger.on("click", function () {
    $(this).toggleClass("is_open");
    $menu.stop(true, true).slideToggle(250).toggleClass("is_open");
    if ($menu.hasClass("is_open")) {
      $('body').css('overflow', 'hidden');
    } else {
      $('body').css('overflow', 'auto');
    }
  });

  // Accessibility Button Start
  $('#accessiblity_btn').on('click', function () {
    $('.accessiblity_popup').toggleClass('is_open');
  });
  // Accessibility Button End

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
  const $awardsSlider = $('.awards_slider');
  const $awardsSection = $awardsSlider.closest('section');
  const $awardsTrack = $awardsSection.find('.progress-track');
  const $awardsIndicator = $awardsSection.find('.progress-indicator');
  const $awardsPrev = $awardsSection.find('.awards_slider_prev');
  const $awardsNext = $awardsSection.find('.awards_slider_next');

  const awardsSwiper = new Swiper('.awards_slider', {
    slidesPerView: 4,
    // slidesPerGroup: 1,
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
const linkedinPostsSwiper = new Swiper('.linkedin_posts', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
        1100: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1.3,
        },
    },
});

// Linkedin Posts Swiper End


// Stakeholder Swiper Start
const $stakeholderSlider = $('.stakeholder_slider');
const $stakeholderSection = $stakeholderSlider.closest('section');
const $stakeholderTrack = $stakeholderSection.find('.progress-track');
const $stakeholderIndicator = $stakeholderSection.find('.progress-indicator');
const $stakeholderPrev = $stakeholderSection.find('.stakeholder_slider_prev');
const $stakeholderNext = $stakeholderSection.find('.stakeholder_slider_next');

const stakeholderSwiper = new Swiper('.stakeholder_slider', {
  // loop: true,
  slidesPerView: 4.5,
  // slidesPerGroup: 1,
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
const videoSliderSwiper = new Swiper('.video_slider', {
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

// Video Popup dynamic code start
  // Video Popup (opens on .play_button[data-src])
  const $videoPopup = $(".video_popup");
  const $videoPopupMedia = $(".video_popup_media");
  const $videoPopupClose = $(".video_popup_close");
  const $videoPopupBackdrop = $(".video_popup_backdrop");

  let backgroundVideoState = [];

  function getYouTubeEmbedUrl(src) {
    if (!src) return null;

    let s = String(src).trim();
    if (!s) return null;

    // If someone passed the full <iframe ...> markup into data-src,
    // extract its src attribute first.
    if (s.toLowerCase().includes("<iframe")) {
      const srcMatch = s.match(/src\s*=\s*["']([^"']+)["']/i);
      if (srcMatch && srcMatch[1]) s = srcMatch[1].trim();
    }

    const isYouTube = /youtube\.com|youtu\.be/i.test(s);
    if (!isYouTube) return null;

    const ensureAutoplayParams = (embedUrl) => {
      try {
        const u = new URL(embedUrl);
        u.searchParams.set("autoplay", "1");
        u.searchParams.set("rel", "0");
        return u.toString();
      } catch (e) {
        // If URL() fails, just return original.
        return embedUrl;
      }
    };

    try {
      // Short links: https://youtu.be/VIDEOID
      if (/youtu\.be/i.test(s)) {
        const id = s.split("youtu.be/")[1].split(/[?&#]/)[0];
        if (id) return ensureAutoplayParams(`https://www.youtube.com/embed/${id}`);
      }

      const url = new URL(s, window.location.href);
      const hostname = url.hostname.toLowerCase();
      if (!hostname.includes("youtube.com")) return null;

      // https://www.youtube.com/watch?v=VIDEOID
      const v = url.searchParams.get("v");
      if (v) return ensureAutoplayParams(`https://www.youtube.com/embed/${v}`);

      // https://www.youtube.com/embed/VIDEOID
      const embedMatch = url.pathname.match(/\/embed\/([^/]+)/i);
      if (embedMatch && embedMatch[1]) {
        return ensureAutoplayParams(`https://www.youtube.com/embed/${embedMatch[1]}`);
      }

      // https://www.youtube.com/shorts/VIDEOID
      const shortsMatch = url.pathname.match(/\/shorts\/([^/]+)/i);
      if (shortsMatch && shortsMatch[1]) {
        return ensureAutoplayParams(`https://www.youtube.com/embed/${shortsMatch[1]}`);
      }
    } catch (e) {
      // If URL() fails, try extracting IDs from raw text.
      const embedMatch = s.match(/\/embed\/([^/?&#]+)/i);
      if (embedMatch && embedMatch[1]) {
        return ensureAutoplayParams(`https://www.youtube.com/embed/${embedMatch[1]}`);
      }
      const watchMatch = s.match(/[?&]v=([^/?&#]+)/i);
      if (watchMatch && watchMatch[1]) {
        return ensureAutoplayParams(`https://www.youtube.com/embed/${watchMatch[1]}`);
      }
      const shortsMatch = s.match(/\/shorts\/([^/?&#]+)/i);
      if (shortsMatch && shortsMatch[1]) {
        return ensureAutoplayParams(`https://www.youtube.com/embed/${shortsMatch[1]}`);
      }
    }

    return null;
  }

  function pauseBackgroundVideos() {
    const $bgVideos = $(".video_slider .video_block video");
    backgroundVideoState = $bgVideos
      .toArray()
      .map((el) => ({
        el,
        time: el.currentTime || 0,
        wasPaused: el.paused,
      }));

    $bgVideos.each(function () {
      try {
        this.pause();
      } catch (e) {}
    });
  }

  function resumeBackgroundVideos() {
    backgroundVideoState.forEach(({ el, time, wasPaused }) => {
      try {
        el.currentTime = time;
        if (!wasPaused) {
          const p = el.play();
          if (p && typeof p.catch === "function") p.catch(() => {});
        }
      } catch (e) {}
    });
    backgroundVideoState = [];
  }

  function openVideoPopup(src) {
    if (!src) return;

    pauseBackgroundVideos();

    const embedUrl = getYouTubeEmbedUrl(src);
    let mediaHtml = "";

    if (embedUrl) {
      mediaHtml = `<iframe
        src="${embedUrl}"
        title="YouTube video player"
        frameborder="0"
        referrerpolicy="strict-origin-when-cross-origin"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>`;
    } else {
      mediaHtml = `<video src="${src}" controls autoplay playsinline></video>`;
    }

    $videoPopupMedia.html(mediaHtml);
    $videoPopup.addClass("is_open").attr("aria-hidden", "false");

    // Move focus to close button for accessibility
    $videoPopupClose.trigger("focus");
  }

  function closeVideoPopup() {
    if (!$videoPopup.hasClass("is_open")) return;

    // Stop playback
    const $video = $videoPopupMedia.find("video");
    if ($video.length) {
      try {
        $video[0].pause();
      } catch (e) {}
      $video.attr("src", "");
    }

    const $iframe = $videoPopupMedia.find("iframe");
    if ($iframe.length) {
      $iframe.attr("src", "");
    }

    $videoPopupMedia.empty();
    $videoPopup.removeClass("is_open").attr("aria-hidden", "true");

    resumeBackgroundVideos();
  }

  $(document).on("click", ".play_button[data-src]", function (e) {
    e.preventDefault();
    const src = $(this).data("src");

    // Re-open fresh if already open
    closeVideoPopup();
    openVideoPopup(src);
  });

  $videoPopupClose.on("click", function () {
    closeVideoPopup();
  });

  $videoPopupBackdrop.on("click", function () {
    closeVideoPopup();
  });

  // Prevent clicks inside modal from closing
  $videoPopup.on("click", ".video_popup_modal", function (e) {
    e.stopPropagation();
  });

  // Escape key to close
  $(document).on("keydown", function (e) {
    if (e.key === "Escape") closeVideoPopup();
  });

  
// Video Popup dynamic code emd


  // Video Hover Cards (play video only on active card) start -- uncomment below code for hover effect
  // (function initVideoHoverCards() {
  //   const $cards = $(".video_hover_container .card_item");
  //   if (!$cards.length) return;

  //   const getVideoEl = (cardEl) => {
  //     const v = cardEl.querySelector("video");
  //     return v instanceof HTMLVideoElement ? v : null;
  //   };

  //   const safePauseAndReset = (videoEl) => {
  //     if (!videoEl) return;
  //     try {
  //       videoEl.pause();
  //     } catch (e) {}
  //     try {
  //       videoEl.currentTime = 0;
  //     } catch (e) {}
  //   };

  //   const safePlayFromStart = (videoEl) => {
  //     if (!videoEl) return;
  //     try {
  //       if (videoEl.readyState >= 1) videoEl.currentTime = 0;
  //     } catch (e) {}
  //     try {
  //       const p = videoEl.play();
  //       if (p && typeof p.catch === "function") p.catch(() => {});
  //     } catch (e) {}
  //   };

  //   let activeCardEl = null;

  //   const deactivateCard = (cardEl) => {
  //     if (!cardEl) return;
  //     cardEl.classList.remove("active");
  //     safePauseAndReset(getVideoEl(cardEl));
  //     if (activeCardEl === cardEl) activeCardEl = null;
  //   };

  //   const activateCard = (cardEl) => {
  //     if (!cardEl || activeCardEl === cardEl) return;

  //     if (activeCardEl) deactivateCard(activeCardEl);

  //     activeCardEl = cardEl;
  //     cardEl.classList.add("active");
  //     safePlayFromStart(getVideoEl(cardEl));
  //   };

  //   // Ensure all videos are stopped on load; keep any .active as initial state.
  //   $cards.each(function () {
  //     const v = getVideoEl(this);
  //     safePauseAndReset(v);
  //   });
  //   const initialActive = $cards.filter(".active")[0] || null;
  //   if (initialActive) {
  //     activeCardEl = initialActive;
  //     safePlayFromStart(getVideoEl(initialActive));
  //   }

  //   $cards.on("pointerenter", function () {
  //     activateCard(this);
  //   });
  // })();
// Video Hover Cards (play video only on active card) end


// Mobile Slider for Teams Start
const teamsSwiper = new Swiper('.swiper_teams', {
  loop: true,
  slidesPerView: 1.4,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2.4,
    },
    0: {
      slidesPerView: 1.4,
    },
  },
});
// Mobile Slider for Teams End

// Mobile Slider for Innovation Cards Start
const innovationCardsSwiper = new Swiper('.swiper_innovation_cards', {
  loop: true,
  slidesPerView: 1.4,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2.4,
    },
    0: {
      slidesPerView: 1.4,
    },
  },
});
// Mobile Slider for Innovation Cards End


// Start
function Fn_And_Half_Col_Image_Slider() {
  $(".stakeholder_slider").each(function () {
    const slider = this;
    const $slider = $(slider);
    const $bottomBar = $slider.find(".bottom-bar");
 
    const $indicator = $bottomBar.find(".progress-indicator");
    const $prevBtn = $bottomBar.find(".prev");
    const $nextBtn = $bottomBar.find(".next");
 
    const swiper = new Swiper(slider, {
      slidesPerView: 4.01,
      spaceBetween: 20,
      speed: 2000,
      allowTouchMove: true,
 
      navigation: {
        nextEl: $nextBtn[0],
        prevEl: $prevBtn[0],
      },
      breakpoints: {
        0: { slidesPerView: 1.1 },
        768: { slidesPerView: 2.1 },
        1024: { slidesPerView: 3.1 },
        1220: { slidesPerView: 4.01 },
      },
    });
 
    const totalSlides = swiper.slides.length;
 
    function updateProgress() {
      let slidesPerView =
        typeof swiper.params.slidesPerView === "number"
          ? swiper.params.slidesPerView
          : swiper.slidesPerViewDynamic();
 
      const total = swiper.slides.length;
      const maxIndex = total - slidesPerView;
 
      let progress =
        maxIndex > 0
          ? ((swiper.activeIndex + slidesPerView) / total) * 100
          : 100;
 
      // Clamp between 0–100
      progress = Math.min(100, Math.max(0, progress));
 
      $indicator.css("width", progress + "%");
    }
 
    function updateButtons() {
      $prevBtn.prop("disabled", swiper.isBeginning);
      $nextBtn.prop("disabled", swiper.isEnd);
    }
 
    updateProgress();
    updateButtons();
 
    swiper.on("slideChange", () => {
      updateProgress();
      updateButtons();
    });
  });
}
 
// End
});
