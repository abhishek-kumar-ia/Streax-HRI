$(function () {
    // custom select start
$(".custom-select__trigger").on("click", function () {
    $(this).parent().toggleClass("open");
});

$(".custom-select__options li").on("click", function () {
    const text = $(this).text();
    const value = $(this).data("value");

    const $select = $(this).closest(".custom-select");

    $select.find(".custom-select__trigger span:first").text(text);
    $select.find('input[type="hidden"]').val(value);

    $select.removeClass("open");
});

$(document).on("click", function (e) {
    if (!$(e.target).closest(".custom-select").length) {
        $(".custom-select").removeClass("open");
    }
});
// custom select end

// Header Sticky Functionality Start
if ($(window).width() < 992) return;

    let lastScrollTop = 0;
    const $header = $('header');

    $(window).on('scroll', function () {
        let currentScroll = $(this).scrollTop();

        // Keep visible at top
        if (currentScroll <= 0) {
            $header.removeClass('header-hidden');
            return;
        }

        if (currentScroll > lastScrollTop) {
            // Scrolling down
            $header.addClass('header-hidden');
        } else {
            // Scrolling up
            $header.removeClass('header-hidden');
        }

        lastScrollTop = currentScroll;
    });
// Header Sticky Functionality End
});