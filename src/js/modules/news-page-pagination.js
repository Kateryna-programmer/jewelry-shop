module.exports = function () {
  let articlesPerPage = 8;

  $('.prev').hide();

  $('.news-page__pagination-list a').on('click', function (e) {
    e.preventDefault();

    let pageNumber = parseInt($(this).text());
    let startIndex = (pageNumber - 1) * articlesPerPage;
    let endIndex = startIndex + articlesPerPage;

    $('.news-page__item').removeClass('active').hide();
    $('.news-page__item').slice(startIndex, endIndex).addClass('active').show();

    let totalPages = Math.ceil($('.news-page__item').length / articlesPerPage);

    $('.prev').toggle(pageNumber !== 1);
    $('.next').toggle(pageNumber !== totalPages);

    $('.news-page__pagination-list li').removeClass('active');
    $(this).parent('li').addClass('active');

    $('html, body').scrollTop(0);
  });
};
