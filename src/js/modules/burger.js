module.exports = function () {
  $('.burger').on('click', function () {
    $(this).hide();
    $('.navbar').css({ display: 'block', height: '100vh', opacity: '1' });
    $('.burger-close').css({ display: 'block', opacity: '1' });
  });

  $('.burger-close').on('click', function () {
    $('.burger').show();
    $('.search-cart').show();
    $('.navbar, .burger-close').css({ display: 'none' });
  });
};
