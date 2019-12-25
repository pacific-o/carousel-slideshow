

jQuery(document).ready(function () {
  setInterval(function () {
        nextSlide();
    }, 7000);
});
 function nextSlide() {

   var length = $(".slide").last().css("margin-left");
   if (length === "0px") {
     $(".l-slide").prevAll().appendTo(".slides");

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
