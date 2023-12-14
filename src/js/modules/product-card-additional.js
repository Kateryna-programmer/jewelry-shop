module.exports = function () {
  $('#reviews, #details').css('opacity', 0).hide();
  $('#description').addClass('active');

  $('.product-additional__title').on('click', function (event) {
    event.preventDefault();
    let targetId = $(this).attr('href');
    $(
      '.product-additional__desc, .product-additional__reviews, .product-additional__details'
    )
      .not(targetId)
      .animate({ opacity: 0 }, 500, function () {
        $(this).hide().removeClass('active');
      });
    $(targetId).show().animate({ opacity: 1 }, 500).addClass('active');
    $('.product-additional__title').removeClass('active');
    $(this).addClass('active');
  });
  $('.product__text-reviews-link').on('click', function (e) {
    e.preventDefault();
    $('#description, #details').css('opacity', 0).hide();
    $('#reviews').css('opacity', 1).show();
    $('html, body').animate(
      {
        scrollTop: $('#reviews').offset().top,
      },
      500
    );
    $('.product-additional__title[href="#description"]').removeClass('active');
    $('.product-additional__title[href="#details"]').removeClass('active');
    $('.product-additional__title[href="#reviews"]').addClass('active');
  });
};
