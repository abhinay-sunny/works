jQuery(document).ready(function(e) {

    $("body").on("contextmenu",function(){
       return false;
    }); 

    function t() {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return false }
        return true }

    function n() {
        var t = e(window).height();
        var n = e(window).width();
        var r = e("#banner").find(".banner-parallax-blog").height();
        if (n >= 480) { e("#banner, .banner-slider").css("height", t + "px") } else {
            var i = t - 140;
            e("#banner, .banner-slider").css("height", i + "px") }
        if (t > r) { e("#header, #banner").css({ height: r + "px" }) } else if (t <= r) { e("#header, #banner").css({ height: t + "px" }) } }

    function r() {
        var t = e(".head-menu .nav");
        if (e(window).height() < t.height() + 10) { t.css("overflow-y", "scroll") } else { t.css("overflow-y", "visible") } }

    function i() {
        var t = e(".banner-slider .owl-item").length;
        if (t > 0) {
            var n;
            e(".banner-slider .owl-item").each(function(t) {
                if (e(this).hasClass("active")) n = t + 1 });
            if (n < 10) n = "0" + n;
            if (t < 10) t = "0" + t;
            e(".index-item").text(n);
            e(".total-item").text(t) } }

    function c() { e("#banner .bg-parallax").parallax("50%", .3);
        e(".services .bg-parallax").parallax("50%", .3);
        e(".about .bg-parallax").parallax("50%", .3);
        e(".testimonial .bg-parallax").parallax("50%", .3);
        e(".team .bg-parallax").parallax("50%", .3);
        e(".our-work .bg-parallax").parallax("50%", .3);
        e(".funfact .bg-parallax").parallax("50%", .3);
        e(".twitter .bg-parallax").parallax("50%", .3);
        e(".pricing .bg-parallax").parallax("50%", .3);
        e(".latest-post .bg-parallax").parallax("50%", .3);
        e(".contact .bg-parallax").parallax("50%", .3) }
    e(window).load(function() { e("#preloader").slideUp(2e3) });
    e(window).bind("resize", function() { n() }).trigger("resize");
    e(".banner-slider .item img").css({ opacity: "0", visibility: "hidden" }).before(function() {
        var t = e(this).attr("src");
        return '<div class="item-img" style="background-image: url(' + t + ')">' });
    e(".slider-wrap").append('<ul class="owl-num"><li class="index-item"></li><li class="total-item"></li></ul>');
    r();
    e(".banner-slider").owlCarousel({ autoPlay: 1e4, navigation: true, slideSpeed: 1e3, transitionStyle: "fadeUp", singleItem: true, pagination: false, singleItem: true, addClassActive: true, afterMove: function() { i() } });
    i();
    e(window).load(function() {
        function n() {
            var t = e(window).width(),
                n = 1;
            if (t > 1200) { n = 4 } else if (t > 992) { n = 3 } else if (t > 768) { n = 2 } else if (t > 480) { n = 2 } else if (t < 480) { n = 1 }
            return n }

        function r() {
            var r = e(".our-flower .container").width(),
                i = n(),
                s = Math.floor(r / i);
            t.find(".flower-item").each(function() { e(this).css({ width: s + "px" }) }) }

        function i() { r();
            t.isotope("reLayout") }
        e(".head-page").sticky({ topSpacing: 0, className: "header-sticky" });
        e(".head-menu").prepend('<span class="button-menu-mobile"><i class="fa fa-bars"></i></span>');
        e("body").append('<div class="wrap-overlay"></div>');
        e(".button-menu-mobile").addClass("show-mb").click(function() { e(this).toggleClass("active-mb");
            e(".nav").toggleClass("menu-mobile-show");
            e(".wrap-overlay").fadeToggle().click(function() { e(".button-menu-mobile").removeClass("active-mb");
                e(".nav").removeClass("menu-mobile-show");
                e(this).fadeOut(300) }) });
        e(".nav li a").on("click", function(t) {
            var n = e(this);
            e("html, body").stop().animate({ scrollTop: e(n.attr("href")).offset().top + 5 }, 1200, "easeInOutExpo");
            t.preventDefault();
            e(".button-menu-mobile").removeClass("active-mb");
            e(".nav").removeClass("menu-mobile-show");
            e(".wrap-overlay").fadeOut(300) });
        e(".scroll-team").click(function() { e("html,body").animate({ scrollTop: e("#team").offset().top }, 1200, "easeInOutExpo");
            return false });
        e(".contact-with-us a").click(function() { e("html,body").animate({ scrollTop: e("#contact").offset().top }, 1200, "easeInOutExpo");
            return false });
        e(document).scroll(function() {
            var t = e(window).height();
            var n = t - 300;
            var r = e(this).scrollTop();
            if (r < n) {
                var i = 1 - r / n;
                e(".head-page").css({ opacity: i }) } });
        e(".sv-slider").owlCarousel({ autoPlay: 1e4, items: 3, itemsDesktop: [1199, 3], itemsDesktopSmall: [979, 3], itemsTablet: [768, 2], itemsTabletSmall: [600, 1], slideSpeed: 600, navigation: true, pagination: false });
        e(".team-slider").owlCarousel({ autoPlay: 1e4, items: 3, slideSpeed: 600, navigation: true, pagination: false });
        e(".testimonial-slider").owlCarousel({ autoPlay: 1e4, items: 3, itemsDesktop: [1199, 3], itemsDesktopSmall: [979, 2], itemsTablet: [768, 2], itemsTabletSmall: [600, 1], slideSpeed: 600, navigation: true, pagination: false });
        e(".bx-twitter-slider").bxSlider({ adaptiveHeight: true, mode: "fade", pagerSelector: "false" });
        e(".flower-slider").owlCarousel({ items: 4, slideSpeed: 500, navigation: true, pagination: false });
        var t = e("#flower-wrap");
        t.isotope({ animationEngine: "best-available", animationOptions: { duration: 200, queue: false }, layoutMode: "fitRows" });
        e("#filters a").click(function() { e(".select-filter").removeClass("select-filter");
            e(this).parent("li").addClass("select-filter");
            var t = e(this).attr("data-filter");
            e("#flower-wrap").isotope({ filter: t });
            i();
            return false });
        t.imagesLoaded(function() { r() });
        e(window).bind("resize", function() { i() });
        e("#all").click();
        e(".pricing-slider").owlCarousel({ items: 3, slideSpeed: 600, navigation: false, pagination: true });
        e(".latest-post-slider").owlCarousel({ items: 4, slideSpeed: 600, navigation: false, pagination: true });
        var s = window.location.href.split("#");
        if (s.length > 1) { s[1] = "#" + s[1];
            e.each(e(".nav li a"), function() {
                if (e(this).attr("href") == s[1]) { e(this).click() } }) } });
    e(".contact-with-us .text-ci").circleType({ fluid: true });
    e(".pricing-content .item .head h6").circleType({ radius: 150 });
    e(".social-icon .text-ci").circleType({ fluid: true });
    var s = e(".ab-content .contact-with-us").parent(".item");
    var o = s.parent().height();
    s.css({ display: "table", height: o + "px" });
    var u = e("aside", "#contact-sidebar");
    var a = e("#contact-form");
    var f = a.find("textarea");
    var l = function() {
        var e = u.height() + 70;
        var t = a.height();
        if (e < t) { u.height(t - 70) } else if (e > t) { f.height(f.height() + (e - t)) } };
    l();
    e(window).resize(function() { u.add(f).removeAttr("style");
        l() });
    if (e("#send-message-form").length > 0) { e("#send-message-form").validate({ rules: { firstname: { required: true, minlength: 2 }, lastname: { required: true, minlength: 2 }, email: { required: true, email: true }, message: { required: true, minlength: 10 } }, messages: { firstname: { required: "Please enter your first name.", minlength: e.format("At least {0} characters required.") }, lastname: { required: "Please enter your last name.", minlength: e.format("At least {0} characters required.") }, email: { required: "Please enter your email.", email: "Please enter a valid email." }, message: { required: "Please enter a message.", minlength: e.format("At least {0} characters required.") } }, submitHandler: function(t) { e("#submit-contact").html("Sending...");
                e(t).ajaxSubmit({ success: function(t, n, r, i) { e("#contact-content").slideUp(600, function() { e("#contact-content").html(t).slideDown(600) }) } });
                return false } }) }
    e("audio,video").mediaelementplayer();
    e(".post-slider").owlCarousel({ autoPlay: 1e4, navigation: true, slideSpeed: 400, singleItem: true, pagination: false, singleItem: true });
    e(".payment ul li label").prepend('<i class="icon-check"></i>');
    e(".booknow label").prepend('<i class="fa fa-check"></i>');
    e("#tabs-1 a, #tabs-2 a").click(function(t) { t.preventDefault();
        e(this).tab("show") });
    e("#accordion-1 .collapse").on("shown.bs.collapse", function() { e(this).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up") }).on("hidden.bs.collapse", function() { e(this).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down") });
    e("#accordion-2 .collapse").on("shown.bs.collapse", function() { e(this).parent().find(".fa-plus").removeClass("fa-plus").addClass("fa-minus") }).on("hidden.bs.collapse", function() { e(this).parent().find(".fa-minus").removeClass("fa-minus").addClass("fa-plus") });
    if (e(".popup-with-zoom-anim").length) { e(".popup-with-zoom-anim").magnificPopup({ type: "inline", fixedContentPos: false, fixedBgPos: true, overflowY: "auto", closeBtnInside: true, preloader: false, midClick: true, removalDelay: 300, mainClass: "my-mfp-zoom-in" }) }
    if (t()) { c() }
    e(window).bind("load", function() { c() }) })
