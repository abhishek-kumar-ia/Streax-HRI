$(function () {
// Awards Popup Homepage Start


// awardsHome profile modal (leadership — Our awardsHome)
  const $awardsHomeModal = $(".awardsHome_profile_modal_wrap");
  const $awardsHomeBackdrop = $(".awardsHome_profile_backdrop");
  const $awardsHomeClose = $(".awardsHome_profile_close");

  function openawardsHomeProfileModal($card) {
    if (!$awardsHomeModal.length) return;

    $awardsHomeModal.addClass("is_open").attr("aria-hidden", "false");
    $("body").css("overflow", "hidden");
    $awardsHomeClose.trigger("focus");
  }

  function closeawardsHomeProfileModal() {
    if (!$awardsHomeModal.hasClass("is_open")) return;
    $awardsHomeModal.removeClass("is_open").attr("aria-hidden", "true");
    $("body").css("overflow", "auto");
  }

  $(document).on("click", ".awardsHome_profile_open", function (e) {
    e.preventDefault();
    const $card = $(this).closest(".single_block");
    openawardsHomeProfileModal($card);
  });

  $awardsHomeClose.on("click", closeawardsHomeProfileModal);
  $awardsHomeBackdrop.on("click", closeawardsHomeProfileModal);

  // Escape key to close (awardsHome modal first, then video)
  $(document).on("keydown", function (e) {
    if (e.key !== "Escape") return;
    if ($awardsHomeModal.hasClass("is_open")) {
      closeawardsHomeProfileModal();
      return;
    }
    closeVideoPopup();
  });

// Awards Popup Homepage End
});