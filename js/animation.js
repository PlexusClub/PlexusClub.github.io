$(document).ready(function () {
  $(window).on("scroll load", function () {
    if ($(window).width() <= 768) {
    if ($(window).scrollTop() === 0) {
      $("nav .links").fadeIn(400); // Fade in when at the top
    } else {
      $("nav .links").fadeOut(400); // Fade out when scrolled down
    }}
  });
  
  
  $("#home h1, #home h5, #home h4, #home img").on("animationend", function () {
    $(this).css("animation", "none"); // Disable animation
    $(this).css("opacity", 1);
    $(this).css("filter", "blur(0)");
  });
  $(window).on("scroll", function () {
    window.requestAnimationFrame(function () {
      var scrollTop = $(window).scrollTop();
      var imagePosition = scrollTop * 0.3;
      var opacity = Math.max(1 - scrollTop / 500, 0.5);
  
      // Apply scale only on mobile devices (width <= 768px)
      if ($(window).width() <= 768) {
        var scale2 = Math.min(1 + scrollTop / 3000, 1.5); // Scale up to 1.5
        var scale = Math.min(1 + scrollTop / 2000, 1.5);  // Scale up to 1.5
  
        $("#home h1").css({
          transform: "translateY(" + imagePosition + "px) scale(" + scale2 + ")",
          opacity: opacity,
        });
        $("#home h5").css({
          transform: "translateY(" + imagePosition + "px) scale(" + scale + ")",
          opacity: opacity,
        });
      } else {
        // On larger screens, only apply translate and opacity without scaling
        $("#home h1, #home h5").css({
          transform: "translateY(" + imagePosition + "px)",
          opacity: opacity,
        });
      }
    });
  });
  
  $(window).on("scroll", function () {
    var scrollTop = $(window).scrollTop();
    var imagePosition = -scrollTop * 0.1;
    var opacity = Math.max(1 - scrollTop / 500, 0.25);
    var scale = Math.max(1 - scrollTop / 2000, 0.5); // Scale reduces to 0.75
    $("#home img").css({
      transform: "scale(" + scale + ")",
      opacity: opacity,
    });
    $("#home h4").css({
      transform: "translateY(" + imagePosition + "px)",
    });
  });
  

  // $(".card").on("click", function () {
  //   var h4Element = $(this).find(".card-body h4");
  //   console.log(h4Element); // Check the console to see if h4Element is empty
  //   h4Element.show(); // Hide and then slide down with fade in
  // });
});
