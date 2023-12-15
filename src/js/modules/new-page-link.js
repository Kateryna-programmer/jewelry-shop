module.exports = function () {
  const decodedImageSrc = decodeURIComponent(
    localStorage.getItem('articleImageSrc')
  );
  const decodedTitle = decodeURIComponent(localStorage.getItem('articleTitle'));

  $('.new-page__main-title').text(decodedTitle);
  $('.new-page__main-img').attr('src', decodedImageSrc);
  const breadcrumbsTitle = $('#new-page .breadcrumbs__title');
  const breadcrumbsSubitle = $('#new-page .breadcrumbs__subtitle');
  breadcrumbsTitle.text(decodedTitle);
  breadcrumbsSubitle.text(decodedTitle);

  const sourceElement = $('.new-page__main-img')
    .closest('picture')
    .find('source');
  const decodedWebPSrc = decodedImageSrc.replace('.jpg', '.webp');

  sourceElement.attr('srcset', decodedWebPSrc);

  localStorage.removeItem('articleImageSrc');
  localStorage.removeItem('articleTitle');

  $('.new-page__main-img').attr('src', '');
};
