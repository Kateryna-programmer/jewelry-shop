const slick = require('slick-carousel');

module.exports = function () {
  $('.single-item').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 3000,
    slidesToShow: 1,
    arrows: false,
    dots: false,
  });
};
