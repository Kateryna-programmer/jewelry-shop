module.exports = function () {
  $('.navbar__item-link.toggle-shop')
    .on('mouseenter', function () {
      if ($(window).width() >= 900) {
        $('.navbar__shop').addClass('visible');
      }
    })
    .on('mouseleave', function () {
      $('.navbar__shop').removeClass('visible');
    });

  $('.navbar__shop')
    .on('mouseenter', function () {
      if ($(window).width() >= 900) {
        $('.navbar__shop').addClass('visible');
      }
    })
    .on('mouseleave', function () {
      $('.navbar__shop').removeClass('visible');
    });

  $(window).resize(function () {
    if ($(window).width() < 900) {
      $('.navbar__shop').removeClass('visible');
    }
  });
};
