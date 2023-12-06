module.exports = function () {
  $('.search-item').on('click', function () {
    $(this).hide();
    $('.search-input, .search-close').css('display', 'initial');
  });

  $('.search-close').on('click', function () {
    $('.search-input, .search-close').css('display', 'none');
    $('.search-item').show();
  });

  let cartItemCount = 0;

  $('#cartIcon').on('click', function () {
    cartItemCount++;
    $('#cartCount').text(cartItemCount);
  });
};
