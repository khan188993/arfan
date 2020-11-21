/* ========= Jquery Activation Start ===========  */

(function ($) {
    "use strict";


     /* !=========Responsive Nav Menu===========  */

     $(".hambergur-animatino,.hambergur-animatino-portfolio,.main-menu li a,.responsive-brand-img a").click(function () {
        $(".navigation-wrapper").toggleClass("active");
        $(".hambergur-animatino").toggleClass("active");

    });

    /* !=========Sticky Show Nav Menu===========  */

    if (window.innerWidth < 1190) {


        $(window).scroll(function () {
            if (this.scrollY > 0) {
                $('.header-area').addClass("sticky");
            } else {
                $('.header-area').removeClass("sticky");
            }

        });

    } else {
        // do something else or do nothing
    }

    /* ========= Scroll UP Button ===========  */
    $(window).scroll(function () {

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({
            scrollTop: 0
        });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });



    /* ========= Preloader Activation Start ===========  */

    $(window).on('load', function () {
        var preloaderFadeOutTime = 500;

        function hidePreloader() {
            var preloader = $('#loading');
            setTimeout(function () {
                preloader.fadeOut(preloaderFadeOutTime);
            }, 500);
        }
        hidePreloader();
    });


    /* ========= Image Scroll Activation Start ===========  */

    var divheight = $(".demo-img a").height();
    $(".demo-img").hover(function () {
            var objectheight = $(this).find(".preview-img").height();
            var objectheight1 = '-1' * objectheight;
            var finalheight = objectheight1 + divheight;
            $(this).find(".preview-img").css({
                top: finalheight
            });
        },
        function () {
            $(this).find(".preview-img").css({
                top: '0'
            });
        });


    /* ========= Portfolio Isotop Filter Plugin ===========  */

    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.grid-item'
        }
    })

    // filter items on button click
    $('.protfolio-part').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });

    //for menu active class
    $('.protfolio-part button').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });

    /* ========= One Page Nav Plugin===========  */
    $('#nav').onePageNav({
        scrollSpeed: 350,

    });


    /* =========Pricing Table Hover Active ===========  */

    $(".single-price-box").hover(function () {
        $(".single-price-box").removeClass("active");
        $(this).addClass("active");
    });


    /* =========My Client Testimonial owlCarousel ===========  */

    $('.testimonial-slider-active.owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        items: 1
    })

    /* !=========wow js code===========  */

    new WOW().init();

     /* =========Fancy box Js Plugin===========  */

})(jQuery);