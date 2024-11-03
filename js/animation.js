$(document).ready(function () {
  $("#about-us").css("opacity", 0);
 
  $("#club-association .card").each(function (index) {
    $(this).fadeOut(1000);
  });
  $("#clubs .club-card").each(function (index) {
    $(this).fadeOut(1000);
  });
  $("#management .card").each(function (index) {
    $(this).fadeOut(1000);
  });

  $(window).on("scroll load", function () {
    if ($(window).width() <= 768) {
      if ($(window).scrollTop() === 0) {
        $("nav .links").fadeIn(400); // Fade in when at the top
      } else {
        $("nav .links").fadeOut(400); // Fade out when scrolled down
      }
    }
  });

  $("#home h1, #home h5, #home h4, #home img").on("animationend", function () {
    $(this).css("animation", "none"); // Disable animation
    $(this).css("opacity", 1);
    $(this).css("filter", "blur(0)");
  });
  $(window).on("scroll", function () {
    window.requestAnimationFrame(function () {
      var scrollTop = $(window).scrollTop();
      console.log(scrollTop);
      var imagePosition = scrollTop * 0.3;
      var opacity = Math.max(1 - scrollTop / 500, 0.5);

      // Apply scale only on mobile devices (width <= 768px)
      if ($(window).width() <= 768) {
        var scale2 = Math.min(1 + scrollTop / 3000, 1.5); // Scale up to 1.5
        var scale = Math.min(1 + scrollTop / 2000, 1.5); // Scale up to 1.5

        $("#home h1").css({
          transform:
            "translateY(" + imagePosition + "px) scale(" + scale2 + ")",
          opacity: opacity,
        });
        $("#home h5").css({
          transform: "translateY(" + imagePosition + "px) scale(" + scale + ")",
          opacity: opacity,
        });

        if (scrollTop > 300 && scrollTop < 800) {
          $("#about-us").css("opacity", 1);
        } else {
          $("#about-us").css("opacity", 0);
        }
      } else {
        // On larger screens, only apply translate and opacity without scaling
        $("#home h1, #home h5").css({
          transform: "translateY(" + imagePosition + "px)",
          opacity: opacity,
        });

        if (scrollTop > 300 && scrollTop < 1000) {
          $("#about-us").css("opacity", 1);
        } else {
          $("#about-us").css("opacity", 0);
        }
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
  if ($(window).width() <= 768) {
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 700) {
        $(".club-card").each(function (index) {
          $(this)
            .delay(index * 300) // Delay each card's animation
            .animate({ opacity: 1 }, 800); // Fade in each card over 800ms
        });
      }
    });
  } else {
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 1100) {
        $(".club-card").each(function (index) {
          $(this)
            .delay(index * 300)
            .animate({ opacity: 1 }, 800);
        });
      }
    });
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Selects child elements with a common class pattern based on the section's ID
        const targetClass = entry.target.id === "clubs" ? ".club-card" : ".card";
        
        // Applies staggered fade-in to the child elements within the observed section
        $(`#${entry.target.id} ${targetClass}`).each(function(index) {
          $(this)
            .delay(500 * index)
            .fadeIn(1000);
        });
        
        // Stop observing this target once the animation is triggered
        observer.unobserve(entry.target);
      }
    });
  });

  // Observe each section element by ID
  observer.observe(document.getElementById("club-association"));
  observer.observe(document.getElementById("clubs"));
  observer.observe(document.getElementById("management"));
});
