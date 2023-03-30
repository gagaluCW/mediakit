var ClassNames$4 = {
  EXPANDED: "expand",
  OPENED: "opened",
  SHOW: "show",
  ISMOBILE: "is-mobile-mode",
};
var width;

// 導覽列樣式

$(function () {
  //區塊動態效果
  var timer = null;
  $(window)
    .resize(function () {
      width = $(window).width();
      window.clearTimeout(timer);
      timer = window.setTimeout(function () {
        if (width > 1199) {
          // 桌機版導覽列hover效果
          $("html").removeClass("Mobile");
        }
        if (width > 1000) {
          // 桌機版導覽列hover效果
          $("html").removeClass("Mobile");
        }
        if (width > 500) {
          $(".slides-timeline").on("wheel", function (e) {
            e.preventDefault();
            if (e.originalEvent.deltaY < 0) {
              $(this).slick("slickPrev");
            } else {
              $(this).slick("slickNext");
            }
          });
        } else {
          // 手機版
          $("html").addClass("Mobile");

          //手機版導覽列按鈕觸發
          // $("#Nav .nav-a, #Contact").click(function () {
          //   $("html").removeClass(ClassNames$4.ISMOBILE);
          //   $(".main-nav").removeClass(ClassNames$4.EXPANDED);
          //   $("#menuToggle").removeClass(ClassNames$4.EXPANDED);
          //   if ($("#menuToggle").attr("aria-expanded") == "true") {
          //     $("#menuToggle").attr("aria-expanded", "false");
          //   } else {
          //     $("#menuToggle").attr("aria-expanded", "true");
          //   }
          // });

          // 手機版漢堡按鈕觸發
          // $("#menuToggle").click(function () {
          //   $(this).toggleClass(ClassNames$4.EXPANDED);
          //   if ($(this).attr("aria-expanded") == "true") {
          //     $(this).attr("aria-expanded", "false");
          //   } else {
          //     $(this).attr("aria-expanded", "true");
          //   }

          //   $("html").toggleClass(ClassNames$4.ISMOBILE);
          //   $(".main-nav").toggleClass(ClassNames$4.EXPANDED);
          // });
        }
      }, 500);
    })
    .trigger("resize");

  $(".menu .nav-item").hover(function () {
    var $this = $(this);
    var dropdown = $this.find("ul");
    var isHovered = $(this).is(":hover");
    if (isHovered) {
      $this.addClass("show");
      dropdown.addClass("show");
      dropdown.stop().slideDown(300);
    } else {
      $this.removeClass("show");
      dropdown.removeClass("show");
      dropdown.stop().slideUp(300);
    }
  });

  $("#Nav .dropdown-item").click(function (e) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      e.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    } // End if
    return false;
  });

  // $('.wrapper').append('<a href="javascript: void(0)" class="scrollToTop"><i class="fas fa-chevron-up"></i></a>');

  // header
  $(document)
    .off("scroll")
    .on("scroll", function () {
      if ($(window).scrollTop() > 20) {
        $("#Nav").addClass("show");
      } else {
        $("#Nav").removeClass("show");
      }
    })
    .scroll();
});

var celebrityOptions = {
  autoplay: true,
  fade: true,
  autoplaySpeed: 5000,
  speed: 1000,
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  rows: 0,
  // dotsClass: "slick-pagination",
  prevArrow: $(".prev-slide"),
  nextArrow: $(".next-slide"),
};
$(".slides-celebrity").slick(celebrityOptions);

//---------------------------------------------------------

var nextImg;
var nextValue;
var thisImg;

var keyValue = $(".slides-keyvalue");

var keyvalueOptions = {
  fade: true,
  autoplay: false,
  speed: 1000,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  rows: 0,
  arrows: false,
  asNavFor: ".keyvalueNav",
};
keyValue.slick(keyvalueOptions);
var allImg = keyValue.find(".img-box");
var allValue = keyValue.find(".values");
console.log(allImg);

// allImg.removeClass("aos-init aos-animate");
// allValue.removeClass("aos-init aos-animate");
// allValue.removeClass("aos-init aos-animate");

var keyvalueNavOptions = {
  slidesToShow: 4,
  centerPadding: "15px",
  focusOnSelect: true,
  variableWidth: true,
  asNavFor: ".slides-keyvalue",
  rows: 0,
};
$(".keyvalueNav").slick(keyvalueNavOptions);

// console.log(allImg);

keyValue.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
  allImg.removeClass("aos-init aos-animate");
  allValue.removeClass("aos-init aos-animate");
  var nextValue = $(slick.$slides.get(nextSlide)).find(".values");
  var nextImg = $(slick.$slides.get(nextSlide)).find(".img-box");
  nextValue.removeClass("aos-init aos-animate");
  nextImg.removeClass("aos-init aos-animate");
  // nextImg.css("border", "3px solid blue");
});

keyValue.on("afterChange", function (event, slick, currentSlide, nextSlide) {
  var thisValue = $(slick.$slides.get(currentSlide)).find(".values");
  var thisImg = $(slick.$slides.get(currentSlide)).find(".img-box");
  thisValue.addClass("aos-init aos-animate");
  thisImg.addClass("aos-init aos-animate");
  // thisImg.css("border", "3px solid red");

  // AOS.init();
});

//特色頻道
var subOptions = {
  fade: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 3000,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  rows: 0,
  arrows: false,
  asNavFor: ".subNav",
};
$(".slides-sub").slick(subOptions);

var subNavOptions = {
  slidesToShow: 5,
  centerPadding: "15px",
  focusOnSelect: true,
  variableWidth: true,
  asNavFor: ".slides-sub",
  lazyLoad: "progressive",
  cssEase: "linear",
  rows: 0,
  // arrows: true,

  responsive: [
    {
      breakpoint: 1000,
      // settings: "unslick",
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        centerPadding: "0",
        variableWidth: false,
      },
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        centerMode: true,
        centerPadding: "15px",
        infinite: true,
      },
    },
  ],
};
$(".subNav").slick(subNavOptions);

//年度亮點
var lightOptions = {
  fade: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 3000,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  rows: 0,
  arrows: false,
};
$(".slides-highlight").slick(lightOptions);

//年度活動
var timelineOptions = {
  autoplay: false,
  speed: 1000,
  slidesToShow: 6,
  slidesToScroll: 1,
  rows: 0,
  arrows: false,
  initialSlide: 1,
  // centerMode: true,
  infinite: false,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        rows: 0,
      },
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        rows: 0,
      },
      breakpoint: 500,
      settings: "unslick",
    },
  ],
};

$(".slides-timeline").slick(timelineOptions);

// 年度活動月份判斷
$(function () {
  var currentMonth = new Date().getMonth() + 1;
  // alert(currentMonth);

  $(".timeline-wrap .slide-box .month").each(function () {
    var THIS = $(this);
    var Month = THIS.attr("data-num");

    if (Month == currentMonth) {
      THIS.addClass("active");
    }
    if (Month < currentMonth) {
      THIS.parent(".slide-box").addClass("disabled");
    }
  });
});

//判斷手機行動裝置
function isMobile() {
  return (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/BlackBerry/)
  );
}
