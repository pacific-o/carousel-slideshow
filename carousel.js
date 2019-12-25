

jQuery(document).ready(function () {
  setInterval(function () {
        nextSlide();
    }, 6000);
});


 function nextSlide() {
   if ($(".dot").last().hasClass("active-dot")) {
     $(".dot").first().addClass("active-dot");
     $(".dot").last().removeClass("active-dot");
   }else {
     $(".active-dot").next().addClass("active-dot");
     $(".active-dot").prev().removeClass("active-dot");

   };

   var length = $(".slide").eq(5).css("margin-left");
   if (length === "-1200px") {
     $(".slides").children().not(".l-slide").not(".active").not(".r-slide").appendTo(".slides");
   };

   $(".active").addClass("l-slide");
   $(".r-slide").addClass("active");
   $(".r-slide").next().addClass("r-slide");
   $(".active").prev().removeClass("active");
   $(".l-slide").prev().removeClass("l-slide");
   $(".active").removeClass("r-slide");

};

$(".next-btn").click(nextSlide);


function prevSlide() {
  if ($(".dot").first().hasClass("active-dot")) {
    $(".dot").last().addClass("active-dot");
    $(".dot").first().removeClass("active-dot");
  }else {
    $(".active-dot").prev().addClass("active-dot");
    $(".active-dot").next().removeClass("active-dot");

  };
  var length = $(".slide").first().css("margin-left");
  if (length === "-1200px") {
    $(".r-slide").nextAll().prependTo(".slides");
  };
  $(".active").addClass("r-slide");
  $(".l-slide").addClass("active");
  $(".l-slide").prev().addClass("l-slide");
  $(".r-slide").prev().removeClass("l-slide");
  $(".r-slide").removeClass("active");
  $(".r-slide").next().removeClass("r-slide");

};
$(".pre-btn").click(prevSlide);
