$(function () {
    $(".js-nav-toggle").on("click", function () {
        $(this).toggleClass("toggler__icon--open");
        $(".js-navigation").toggleClass("navigation--open");
    });
});

$(document).ready(function () {
    $('a[href*=#]').bind('click', function (e) {
        e.preventDefault();

        let target = $(this).attr("href");

        $('html, body').stop().animate({ scrollTop: $(target).offset().top }, 500, function () {
            location.hash = target;
        });

        return false;
    });
});



$(".accordeon__item-body")
    .hide()
    .prev()
    .click(function () {
        $(this).next().slideToggle(500);
        $(this).toggleClass("toggler__icon--open");
        // $(".accordeon__body").not(this).slideUp();
        // $(this).next().not(":visible").slideDown();
    });

$(".tabs-nav li").click(function (e) {
    var a = $(this),
        parent = a.parents(".tabs"),
        nav = parent.children(".tabs-nav").children("li"),
        box = parent.children(".tabs-box").children("div");

    if (!a.hasClass("active")) {
        a.addClass("active").siblings().removeClass("active");

        box.eq(a.index()).addClass("active").siblings().removeClass("active");
    }

    e.preventDefault();
});

$(document).ready(function () {
    $(".sl").slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000,
        // responsive: [
        //     {
        //         breakpoint: 1025,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //         },
        //     },

        //     {
        //         breakpoint: 769,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //             dots: false,
        //         },
        //     },
        //     {
        //         breakpoint: 426,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //             dots: false,
        //         },
        //     },
        // ],
    });
});

let map;
function initMap() {
    let dote = { lat: 51.4957591, lng: 31.220499 };
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 51.4957591, lng: 31.220499 },
        zoom: 9,
    });
    let marker = new google.maps.Marker({
        position: dote,
        map: map,
    });
}

$(document).ready(function () {
    $('.js-slider').slick({
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000,
        // vertical: true,
        // swipe: slick,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,

                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,

                }
            }
        ]
    });
});