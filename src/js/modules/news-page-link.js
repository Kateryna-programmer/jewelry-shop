module.exports = function () {
  $('.news-page__item').on('click', function (event) {
    event.preventDefault();

    const articleImageSrc = $(this).find('.news-page__img').attr('src');
    const articleTitle = $(this).find('.news-page__title').text();

    const urlTitle = articleTitle.toLowerCase().replace(/\s+/g, '-');

    const encodedImageSrc = encodeURIComponent(articleImageSrc);
    const encodedTitle = encodeURIComponent(articleTitle);

    localStorage.setItem('articleImageSrc', encodedImageSrc);
    localStorage.setItem('articleTitle', encodedTitle);

    console.log('Saving to localStorage:');
    console.log('Image Src:', articleImageSrc);
    console.log('Title:', articleTitle);

    console.log('Encoded Image Src:', encodedImageSrc);
    console.log('Encoded Title:', encodedTitle);

    window.location.href = `./new-page.html?${urlTitle}`;
  });
};
