$(document).ready(function () {
  $('.slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});
});

$(document).ready(function () {
  $('.revievs__slider_container').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 2.03,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});
});