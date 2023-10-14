$(document).ready(function () {
    $(".scrollbar-inner").scrollbar(),
        $(".header .menu .open").click(function (e) {
            $(this).hasClass("close")
                ? ($(".overlay").addClass("hidden"), $(".menu-mobile").removeClass("active"), $(this).removeClass("close"))
                : ($(".overlay").removeClass("hidden"), $(".menu-mobile").addClass("active"), $(this).addClass("close")),
                $(".header .account").removeClass("active"),
                $(".form-search").hasClass("active") && ($(".form-search").removeClass("active"), $(".search .close-search").addClass("open-search"), $(".search .open-search").removeClass("close-search"));
        }),
        $(".menu-mobile li.main > a").click(function (e) {
            $(".menu-mobile li.main").removeClass("active"), $(this).parent().addClass("active");
        }),
        $(".menu-mobile li.main ul li").click(function (e) {
            $(".menu-mobile li.main ul li").removeClass("active"), $(this).addClass("active");
        }),
        $(".overlay").click(function (e) {
            $(".overlay").addClass("hidden"), $(".menu-mobile").removeClass("active"), $(".header .menu .open").removeClass("close");
        }),
        $(".bg-black-opacity").click(function (e) {
            $(".bg-black-opacity").addClass("hidden"), $(".popup").addClass("hidden"), $(".sec-cart").addClass("hidden");
        }),
        $(".popup .close").click(function (e) {
            $(".bg-black-opacity").addClass("hidden"), $(".popup").addClass("hidden");
        }),
        $(document).on("click", ".search .open-search", function () {
            $(this).addClass("close-search"),
                $(this).removeClass("open-search"),
                $(".form-search").addClass("active"),
                $(".header .account").removeClass("active"),
                $(".header .menu .open").hasClass("close") && ($(".overlay").addClass("hidden"), $(".menu-mobile").removeClass("active"), $(".header .menu .open").removeClass("close"));
        }),
        $(document).on("click", ".search .close-search", function () {
            $(this).addClass("open-search"), $(this).removeClass("close-search"), $(".form-search").removeClass("active");
        }),
        $(".open-account").click(function (e) {
            $(".form-search").hasClass("active") && ($(".form-search").removeClass("active"), $(".search .close-search").addClass("open-search"), $(".search .open-search").removeClass("close-search")),
                $(".header .menu .open").hasClass("close") && ($(".overlay").addClass("hidden"), $(".menu-mobile").removeClass("active"), $(".header .menu .open").removeClass("close")),
                $(this).parent().toggleClass("active");
        }),
        $(document).on("click", function (e) {
            document.getElementById("header-desktop").contains(e.target) ||
                ($(".form-search").removeClass("active"),
                $(".search > div").addClass("open-search"),
                $(".search > div").removeClass("close-search"),
                $(".account").removeClass("active"),
                $(".header .menu ul li").removeClass("active"),
                $(".menu-desktop .menu-item").addClass("hidden"));
        }),
        $(".header .cart").click(function (e) {
            $(".bg-black-opacity").removeClass("hidden"),
                $(".sec-cart").removeClass("hidden"),
                $(".header .account").removeClass("active"),
                $(".form-search").hasClass("active") && ($(".form-search").removeClass("active"), $(".search .close-search").addClass("open-search"), $(".search .open-search").removeClass("close-search"));
        }),
        $(".sec-cart .head-cart .close").click(function (e) {
            $(".bg-black-opacity").addClass("hidden"), $(".sec-cart").addClass("hidden");
        }),
        $(".display-number .value .minus").click(function (e) {
            let a = $(this).parent().find(".number").val();
            a > 1 && (a = parseInt(a) - 1), $(this).parent().find(".number").val(a);
        }),
        $(".display-number .value .plus").click(function (e) {
            let a = $(this).parent().find(".number").val();
            a >= 1 && (a = parseInt(a) + 1), $(this).parent().find(".number").val(a);
        }),
        $(".languages").click(function (e) {
            $(".languages .en").hasClass("active") ? ($(".languages .en").removeClass("active"), $(".languages .vn").addClass("active")) : ($(".languages .en").addClass("active"), $(".languages .vn").removeClass("active"));
        }),
        $("#banner-ads").hasClass("banner-ads") && ($(".header-mobile").css("top", "78px"), $(".main-mobile").addClass("top"), $(".form-search").addClass("top"), $(".menu-mobile").addClass("top")),
        $("#banner-ads .close").click(function (e) {
            $("#banner-ads").addClass("hidden"), $(".header-mobile").css("top", "0"), $(".main-mobile").removeClass("top"), $(".form-search").removeClass("top"), $(".menu-mobile").removeClass("top");
        });
}),
    $(document).ready(function () {
        $(".slider .owl-carousel").owlCarousel({ items: 1, lazyLoad: !0, loop: !0, dots: !1 });
        new Swiper(".swiper-container", { scrollbar: { el: ".swiper-scrollbar" }, slidesPerView: "auto", paginationClickable: !0, spaceBetween: 30 });
        $(".colors ul li").click(function (e) {
            let a = $(this).data("color");
            $(".product-item").attr("src", a);
        }),
            $(".services-item").hover(function (e) {
                $(".services-item").removeClass("active"), $(this).addClass("active");
            }),
            $(".sec-partners .owl-carousel").owlCarousel({ dots: !0, autoplay: !0, autoplayTimeout: 3e3, loop: !0, responsive: { 0: { nav: !1, items: 2 }, 768: { items: 3 }, 1024: { items: 5 } } });
        let e = $(".sec-projects .owl-carousel");
        e
            .on("initialized.owl.carousel changed.owl.carousel", function (e) {
                if (e.namespace) {
                    var a = e.relatedTarget;
                    $("#counter").text(a.relative(a.current()) + 1 + "/" + a.items().length);
                }
            })
            .owlCarousel({
                items: 1,
                loop: !0,
                autoplay: !1,
                dots: !1,
                responsive: {
                    0: { nav: !1 },
                    1024: {
                        nav: !0,
                        navText: [
                            "<span class='prev'><svg width='28' height='54' viewBox='0 0 28 54' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M27 1L1 27L27 53' stroke='#424B5A' stroke-linecap='round' stroke-linejoin='round'/></svg></span>",
                            "<span class='next'><svg width='28' height='54' viewBox='0 0 28 54' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 53L27 27L1 1' stroke='#424B5A' stroke-linecap='round' stroke-linejoin='round'/></svg></span>",
                        ],
                    },
                },
            }),
            e.on("dragged", ".owl-stage", function (a) {
                a.deltaY > 0 ? e.trigger("next.owl") : e.trigger("prev.owl"), a.preventDefault();
            });
    });
   $(document).ready(function () {
     let h_mobile = '';
     if($("#banner-ads").length)
     {
       h_mobile = $(window).height() - 150;
       $(".menu-mobile > ul").css("height",h_mobile);
     }
     else
     {
       h_mobile = $(window).height() - 72;
       $(".menu-mobile > ul").css("height",h_mobile);
     }
     $(".header .menu .open").click(function (e) {
       if($(this).hasClass("close")){
         $("body").css("overflow","hidden");
       }
       else
       {
         $("body").css("overflow","");
       }
     })
     $(".overlay").click(function (e) {
       $("body").css("overflow","");
     })
   })
