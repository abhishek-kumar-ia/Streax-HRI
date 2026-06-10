$(function () {
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }

  const timeline = document.querySelector(".timeline");
  const fill = document.querySelector(".timeline-progress__fill");
  const progressTrack = document.querySelector(".timeline-progress");

  if (!timeline || !fill || !progressTrack) return;

  const blocks = timeline.querySelectorAll(".timelineBlock");

  function updateTimelineProgress() {
    const trackRect = progressTrack.getBoundingClientRect();
    const viewportMid = window.innerHeight * 0.55;
    const trackStart = trackRect.top;
    const trackEnd = trackRect.bottom;
    const progress = (viewportMid - trackStart) / (trackEnd - trackStart);
    const clamped = Math.min(Math.max(progress, 0), 1);

    fill.style.height = clamped * 100 + "%";

    blocks.forEach(function (block) {
      const nodeRect = block.querySelector(".node").getBoundingClientRect();
      block.classList.toggle("is-active", nodeRect.top <= viewportMid);
    });
  }

  let ticking = false;
  $(window).on("scroll resize", function () {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(function () {
        updateTimelineProgress();
        ticking = false;
      });
    }
  });

  updateTimelineProgress();

  document.querySelectorAll("[data-aos-offset]").forEach((el) => {
    if (window.innerWidth < 993) {
      el.removeAttribute("data-aos-offset");
    }
  });
  
  AOS.refresh();
});
