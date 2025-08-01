(function ($) {
  "use strict";

  // preloader
  $(window).on("load", function () {
    var $preloader = $("#preloader");

    // Step-by-step animations
    setTimeout(function () {
      $preloader.addClass("animate1");
    }, 0);

    setTimeout(function () {
      $preloader.addClass("animate2");
    }, 1000); // 0.3s later

    setTimeout(function () {
      $preloader.addClass("animate3");
    }, 2000); // 0.3s later

    setTimeout(function () {
      $preloader.addClass("animate4");
    }, 3000); // 0.3s later

    // Fade out 1.5s after the last animation
    setTimeout(function () {
      $preloader.addClass("animate5");
    }, 4500); // total delay: 2.4s
  });

  // Events when window is scrolled
  $(window).on("scroll", function () {
    // site_header
    if ($(this).scrollTop() > 50) {
      $(".site_header").addClass("menu_sticky");
    } else {
      $(".site_header").removeClass("menu_sticky");
    }
  });

  $(window).trigger("scroll");

  // Events when document is ready
  $(document).ready(function () {
    // roadmap_slider
    $(".roadmap_slider").owlCarousel({
      loop: true,
      autoplay: false,
      nav: false,
      dots: true,
      margin: 0,
      autoWidth: true,
      responsive: {
        0: {
          autoWidth: true,
        },
        768: {
          autoWidth: true,
        },
        992: {
          autoWidth: true,
        },
      },
    });

    $(document).ready(function () {
      const navLinks = $(".nav_menu a");
      const sections = $(".section");

      // Smooth scroll and set active class on click
      navLinks.on("click", function (e) {
        e.preventDefault();
        const targetId = $(this).attr("href");
        const targetSection = $(targetId);

        if (targetSection.length) {
          // Animate the scroll to the section
          $("html, body").animate(
            {
              scrollTop: targetSection.offset().top,
            },
            800,
            function () {
              // After the animation, update the active class
              navLinks.removeClass("active");
              $(e.currentTarget).addClass("active");
            }
          );
        }
      });

      // Highlight active menu item on scroll
      $(window).on("scroll", function () {
        let currentSectionId = "";
        const scrollPosition = $(this).scrollTop() + 100; // Add an offset for better UX

        sections.each(function () {
          const sectionTop = $(this).offset().top;
          const sectionBottom = sectionTop + $(this).outerHeight();

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSectionId = $(this).attr("id");
          }
        });

        if (currentSectionId) {
          navLinks.removeClass("active");
          $(`.nav_menu a[href="#${currentSectionId}"]`).addClass("active");
        }
      });
    });
  });
})(jQuery);
