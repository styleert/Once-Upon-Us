$(document).ready(function () {
  $('.slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    mobileFirst:true,
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: false,
        }
      },
      {
        breakpoint: 1200,
        settings: 'unslick'
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

$(document).ready(function () {
  $('.revievs__slider_container').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 2.03,
    arrows: true,
    mobileFirst:true,
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 2.03,
          slidesToScroll: 1,
          infinite: false,
        }
      },
      {
        breakpoint: 1200,
        settings: 'unslick'
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
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