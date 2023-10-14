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
            let s = $(this).parent().find(".number").val();
            s > 1 && (s = parseInt(s) - 1), $(this).parent().find(".number").val(s);
        }),
        $(".display-number .value .plus").click(function (e) {
            let s = $(this).parent().find(".number").val();
            s >= 1 && (s = parseInt(s) + 1), $(this).parent().find(".number").val(s);
        }),
        $(".languages").click(function (e) {
            $(".languages .en").hasClass("active") ? ($(".languages .en").removeClass("active"), $(".languages .vn").addClass("active")) : ($(".languages .en").addClass("active"), $(".languages .vn").removeClass("active"));
        }),
        $("#banner-ads").hasClass("banner-ads") && ($(".header-mobile").css("top", "80px"), $(".main-mobile").addClass("top"), $(".form-search").addClass("top"), $(".menu-mobile").addClass("top")),
        $("#banner-ads .close").click(function (e) {
            $("#banner-ads").addClass("hidden"), $(".header-mobile").css("top", "0"), $(".main-mobile").removeClass("top"), $(".form-search").removeClass("top"), $(".menu-mobile").removeClass("top");
        });
}),
    $(document).ready(function () {
        new Swiper(".sec-popuplar .swiper-container", { scrollbar: { el: ".swiper-scrollbar-popuplar" }, slidesPerView: "auto", paginationClickable: !0, spaceBetween: 30 }),
        new Swiper(".sec-product-sell .swiper-container", { scrollbar: { el: ".swiper-scrollbar-sell" }, slidesPerView: "auto", paginationClickable: !0, spaceBetween: 30 }),
        new Swiper(".sec-product-viewer .swiper-container", { scrollbar: { el: ".swiper-scrollbar-viewer" }, slidesPerView: "auto", paginationClickable: !0, spaceBetween: 30 });
        $(".sec-projects-complete .owl-carousel").owlCarousel({
            nav: !0,
            navText: ["<span class='prev'><img src='images/product/prev.svg'/></span>", "<span class='next'><img src='images/product/next.svg'/></span>"],
            margin: 30,
            dots: !1,
            autoplay: !0,
            loop: !0,
            responsive: { 0: { nav: !1, items: 1.5 }, 768: { items: 2 }, 1024: { items: 4 } },
        }),
            $(".detail-product .more a").click(function (e) {
                $(".detail-product .context").hasClass("active")
                    ? ($(".detail-product .context").removeClass("active"), $(".detail-product .more a").text("Xem thêm"), $(".detail-product .more").removeClass("active"))
                    : ($(".detail-product .context").addClass("active"), $(".detail-product .more a").text("Thu gọn"), $(".detail-product .more").addClass("active"));
            }),
            $(".rtl-slider").on("init reInit afterChange", function (e, s, a, o) {
                var c = (a || 0) + 1;
                $("#counter").text(c + "/" + s.slideCount);
            }),
            $(".rtl-slider").slick({ infinite: !0, slidesToShow: 1, slidesToScroll: 1, arrows: !0, fade: !0, autoplay: !0, asNavFor: ".rtl-slider-nav" }),
            $(".rtl-slider-nav").slick({ infinite: !0, slidesToShow: 5, slidesToScroll: 1, autoplay: !0, vertical: !0, asNavFor: ".rtl-slider", centerMode: !1, focusOnSelect: !0, arrows: !0 }),
            $(".tab-products ul li").click(function (e) {
                $(this).hasClass("active") ? $(this).removeClass("active") : ($(".tab-products ul li").removeClass("active"), $(this).addClass("active"));
            }),
            $(".main-product .item-context .more a").click(function (e) {
                $(".item-context .context").hasClass("active")
                    ? ($(".item-context .context").removeClass("active"), $(".main-product .item-context .more a").text("Xem thêm"))
                    : ($(".item-context .context").addClass("active"), $(".main-product .item-context .more a").text("Rút gọn"));
            }),
            $(".popup-view-product .owl-carousel").owlCarousel({
                nav: !0,
                navText: ["<span class='prev'><img src='images/product/popup-prev.svg'/></span>", "<span class='next'><img src='images/product/popup-next.svg'/></span>"],
                items: 1,
                dots: !1,
                autoplay: !0,
                loop: !0,
            }),
            $(document).on("click", ".rtl-slider .rtl-slider-slide", function () {
                $(".bg-popup-view-product").removeClass("hidden"), $(".popup-view-product").removeClass("hidden"), $(".product-page").css("overflow", "hidden");
            }),
            $(".popup-view-product .close").click(function (e) {
                $(".bg-popup-view-product").addClass("hidden"), $(".popup-view-product").addClass("hidden"), $(".product-page").css("overflow", "auto");
            }),
            $(".bg-popup-view-product").click(function (e) {
                $(".bg-popup-view-product").addClass("hidden"), $(".popup-view-product").addClass("hidden"), $(".product-page").css("overflow", "auto");
            }),
            $(".item-size ul li").click(function (e) {
                $(".item-size ul li").removeClass("active"), $(this).addClass("active");
                let s = $(this).data("price-old"),
                    a = $(this).data("price-new");
                $(".display-number .price-old .price-value:nth-child(1)").text(s), $(".display-number .new .price-value:nth-child(1)").text(a);
            }),
            $(".item-colors ul li").click(function (e) {
                $(".popup-view-product .owl-carousel").trigger("destroy.owl.carousel"), $(".rtl-slider").slick("destroy"), $(".rtl-slider-nav").slick("destroy"), $(".item-colors ul li").removeClass("active"), $(this).addClass("active");
                let s = $(this).data("color"),
                    a = {
                        color1: [{ big: "images/product/product-big-color1.jpg", thumb: "images/product/product-big-color1.jpg" }],
                        color2: [
                            { big: "images/product/product-big-color2.jpg", thumb: "images/product/product-big-color2.jpg" },
                            { big: "images/product/product-big-color2.jpg", thumb: "images/product/product-big-color2.jpg" },
                        ],
                        color3: [
                            { big: "images/product/product-big-color3.jpg", thumb: "images/product/product-big-color3.jpg" },
                            { big: "images/product/product-big-color3.jpg", thumb: "images/product/product-big-color3.jpg" },
                            { big: "images/product/product-big-color3.jpg", thumb: "images/product/product-big-color3.jpg" },
                        ],
                        color4: [
                            { big: "images/product/product-big-color4.jpg", thumb: "images/product/product-big-color4.jpg" },
                            { big: "images/product/product-big-color4.jpg", thumb: "images/product/product-big-color4.jpg" },
                            { big: "images/product/product-big-color4.jpg", thumb: "images/product/product-big-color4.jpg" },
                            { big: "images/product/product-big-color4.jpg", thumb: "images/product/product-big-color4.jpg" },
                        ],
                        color5: [
                            { big: "images/product/product-big-color5.jpg", thumb: "images/product/product-big-color5.jpg" },
                            { big: "images/product/product-big-color5.jpg", thumb: "images/product/product-big-color5.jpg" },
                            { big: "images/product/product-big-color5.jpg", thumb: "images/product/product-big-color5.jpg" },
                            { big: "images/product/product-big-color5.jpg", thumb: "images/product/product-big-color5.jpg" },
                            { big: "images/product/product-big-color5.jpg", thumb: "images/product/product-big-color5.jpg" },
                        ],
                    };
                var o = "",
                    c = "",
                    i = "";
                for (var r in a[s])
                    (o += '<div class="rtl-slider-slide"><div class="img"><img src="' + a[s][r].big + '" /></div></div>'),
                        (c += '<div class="rtl-slider-slide"><div class="img"><img src="' + a[s][r].thumb + '" /></div></div>'),
                        (i += '<div class="item"><img src="' + a[s][r].big + '" /></div>');
                $(".rtl-slider").html(o),
                    $(".rtl-slider-nav").html(c),
                    $(".popup-view-product .owl-carousel").html(i),
                    $(".rtl-slider").on("init reInit afterChange", function (e, s, a, o) {
                        var c = (a || 0) + 1;
                        $("#counter").text(c + "/" + s.slideCount);
                    }),
                    $(".rtl-slider").slick({ infinite: !0, slidesToShow: 1, slidesToScroll: 1, arrows: !0, fade: !0, autoplay: !0, asNavFor: ".rtl-slider-nav" }),
                    $(".rtl-slider-nav").slick({ infinite: !0, slidesToShow: 5, slidesToScroll: 1, autoplay: !0, vertical: !0, asNavFor: ".rtl-slider", centerMode: !1, focusOnSelect: !0, arrows: !0 }),
                    $(".popup-view-product .owl-carousel").owlCarousel({
                        nav: !0,
                        navText: ["<span class='prev'><img src='images/product/popup-prev.svg'/></span>", "<span class='next'><img src='images/product/popup-next.svg'/></span>"],
                        items: 1,
                        dots: !1,
                        autoplay: !0,
                        loop: !0,
                    });
            });
            $(".product-page .add-to-cart").click(function(e){
              $(this).addClass("is-adding");
              $(this).delay(1000).queue(function(){
                  $(this).removeClass("is-adding").dequeue();
              });
              $(".bg-black-opacity").removeClass("hidden");
              $(".sec-cart").removeClass("hidden");
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
