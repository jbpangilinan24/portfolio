$(document).ready(function(){
  $('.works-carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2500,
    dots: false,
    arrows: false,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    variableWidth: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
          centerMode: false
        }
      },
    ]
  });

// Hook your custom arrows
  $('.slick-prev').on('click', function () {
    $('.works-carousel').slick('slickPrev');
  });

  $('.slick-next').on('click', function () {
    $('.works-carousel').slick('slickNext');
  });

  // gsap.registerPlugin(ScrollTrigger);

  // gsap.utils.toArray('.fade-section').forEach((section) => {
  //   gsap.fromTo(section,
  //     {
  //       scale: 1.1,
  //       opacity: 0.9,
  //     },
  //     {
  //       scale: 1,
  //       opacity: 1,
  //       ease: 'power2.out',
  //       scrollTrigger: {
  //         trigger: section,
  //         start: 'top 80%',
  //         end: 'bottom top',
  //         scrub: true,
  //       }
  //     }
  //   );
  // });

  document.getElementById("year").textContent = new Date().getFullYear();
});