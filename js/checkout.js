$(document).ready(function() {
    $(".scrollbar-inner").scrollbar(), $(".header .menu .open").click(function(e) {
        $(this).hasClass("close") ? ($(".overlay").addClass("hidden"), $(".menu-mobile").removeClass("active"), $(this).removeClass("close")) : ($(".overlay").removeClass("hidden"), $(".menu-mobile").addClass("active"), $(this).addClass("close")), $(".header .account").removeClass("active"), $(".form-search").hasClass("active") && ($(".form-search").removeClass("active"), $(".search .close-search").addClass("open-search"), $(".search .open-search").removeClass("close-search"))
    }), $(".menu-mobile li.main > a").click(function(e) {
        $(".menu-mobile li.main").removeClass("active"), $(this).parent().addClass("active")
    }), $(".menu-mobile li.main ul li").click(function(e) {
        $(".menu-mobile li.main ul li").removeClass("active"), $(this).addClass("active")
    }), $(".overlay").click(function(e) {
        $(".overlay").addClass("hidden"), $(".menu-mobile").removeClass("active"), $(".header .menu .open").removeClass("close")
    }), $(".bg-black-opacity").click(function(e) {
        $(".bg-black-opacity").addClass("hidden"), $(".popup").addClass("hidden"), $(".sec-cart").addClass("hidden")
    }), $(".popup .close").click(function(e) {
        $(".bg-black-opacity").addClass("hidden"), $(".popup").addClass("hidden")
    }), $(document).on("click", ".search .open-search", function() {
        $(this).addClass("close-search"), $(this).removeClass("open-search"), $(".form-search").addClass("active"), $(".header .account").removeClass("active"), $(".header .menu .open").hasClass("close") && ($(".overlay").addClass("hidden"), $(".menu-mobile").removeClass("active"), $(".header .menu .open").removeClass("close"))
    }), $(document).on("click", ".search .close-search", function() {
        $(this).addClass("open-search"), $(this).removeClass("close-search"), $(".form-search").removeClass("active")
    }), $(".open-account").click(function(e) {
        $(".form-search").hasClass("active") && ($(".form-search").removeClass("active"), $(".search .close-search").addClass("open-search"), $(".search .open-search").removeClass("close-search")), $(".header .menu .open").hasClass("close") && ($(".overlay").addClass("hidden"), $(".menu-mobile").removeClass("active"), $(".header .menu .open").removeClass("close")), $(this).parent().toggleClass("active")
    }), $(document).on("click", function(e) {
        document.getElementById("header-desktop").contains(e.target) || ($(".form-search").removeClass("active"), $(".search > div").addClass("open-search"), $(".search > div").removeClass("close-search"), $(".account").removeClass("active"), $(".header .menu ul li").removeClass("active"), $(".menu-desktop .menu-item").addClass("hidden"))
    }), $(".header .cart").click(function(e) {
        $(".bg-black-opacity").removeClass("hidden"), $(".sec-cart").removeClass("hidden"), $(".header .account").removeClass("active"), $(".form-search").hasClass("active") && ($(".form-search").removeClass("active"), $(".search .close-search").addClass("open-search"), $(".search .open-search").removeClass("close-search"))
    }), $(".sec-cart .head-cart .close").click(function(e) {
        $(".bg-black-opacity").addClass("hidden"), $(".sec-cart").addClass("hidden")
    }), $(".display-number .value .minus").click(function(e) {
        let a = $(this).parent().find(".number").val();
        a > 1 && (a = parseInt(a) - 1), $(this).parent().find(".number").val(a)
    }), $(".display-number .value .plus").click(function(e) {
        let a = $(this).parent().find(".number").val();
        a >= 1 && (a = parseInt(a) + 1), $(this).parent().find(".number").val(a)
    }), $(".languages").click(function(e) {
        $(".languages .en").hasClass("active") ? ($(".languages .en").removeClass("active"), $(".languages .vn").addClass("active")) : ($(".languages .en").addClass("active"), $(".languages .vn").removeClass("active"))
    }), $("#banner-ads").hasClass("banner-ads") && ($(".header-mobile").css("top", "80px"), $(".main-mobile").addClass("top"), $(".form-search").addClass("top"), $(".menu-mobile").addClass("top")), $("#banner-ads .close").click(function(e) {
        $("#banner-ads").addClass("hidden"), $(".header-mobile").css("top", "0"), $(".main-mobile").removeClass("top"), $(".form-search").removeClass("top"), $(".menu-mobile").removeClass("top")
    })
}), $(document).ready(function() {
    $(".change-address").click(function(e) {
        $(".bg-black-opacity").removeClass("hidden"), $(".popup-address").removeClass("hidden")
    }), $(".add-new-address").click(function(e) {
        $(".popup-address").addClass("hidden"), $(".popup-add-address").removeClass("hidden")
    }), $(".update-address").click(function(e) {
        $(".popup-address").addClass("hidden"), $(".popup-add-address").removeClass("hidden")
    }), $("input[name='check-payment']").change(function(e) {
        "payment-atm" == $(this).attr("id") ? $(".check-payment .grid").addClass("active") : $(".check-payment .grid").removeClass("active")
    })
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
