$(document).ready(function () {
  $(window).on("scroll", function () {
    var scrollTop = $(window).scrollTop();
    var imagePosition = -scrollTop * 0.1;
    var opacity = Math.max(1 - scrollTop / 500, 0.25);
    console.log(opacity);
    $("#home img").css({
      transform: "translateY(" + imagePosition + "px)",
      opacity: opacity,
    });
  });


  $(window).on("scroll", function () {
    var scrollTop = $(window).scrollTop();
    var imagePosition = +scrollTop * 0.3;
    var opacity = Math.max(1 - scrollTop / 500, 0.25);
    $("#home h1").css({
      transform: "translateY(" + imagePosition + "px)",
      opacity: opacity,
    });
    $("#home h5").css({
      transform: "translateY(" + imagePosition + "px)",
      opacity: opacity,
    });
  });


  // $(".card").on("click", function () {
  //   var h4Element = $(this).find(".card-body h4");
  //   console.log(h4Element); // Check the console to see if h4Element is empty
  //   h4Element.show(); // Hide and then slide down with fade in
  // });
});
