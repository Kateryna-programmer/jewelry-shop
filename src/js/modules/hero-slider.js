const slick = require('slick-carousel');

module.exports = function () {
  $('.one-item').slick({
    // infinite: true,
    // autoplay: true,
    // speed: 3000,
    slidesToShow: 1,
    arrows: false,
  });
};
