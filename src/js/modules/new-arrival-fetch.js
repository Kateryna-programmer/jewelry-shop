module.exports = function () {
  fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => {
      const container = $('.new-arrival__container');

      data.forEach((product) => {
        if (product.category === 'jewelery') {
          const card = $('<div class="new-arrival__card"></div>');

          const cardImgLink = $(
            '<a class="new-arrival__card-img-link" href=""></a>'
          );
          const cardImg = $(
            '<img class="new-arrival__card-image" alt="jewelry">'
          );
          cardImg.attr('src', product.image);
          cardImgLink.append(cardImg);
          card.append(cardImgLink);

          const cardText = $('<div class="new-arrival__card-text"></div>');

          const cardPrice = $('<p class="new-arrival__card-text_price"></p>');
          cardPrice.text(`$${product.price}`);
          cardText.append(cardPrice);

          const cardTitleLink = $(
            '<a href="" class="new-arrival__card-title-link"></a>'
          );
          const cardTitle = $('<h4 class="new-arrival__card-text_title"></h4>');
          cardTitle.text(product.title);
          cardTitleLink.append(cardTitle);
          cardText.append(cardTitleLink);

          card.append(cardText);

          container.append(card);

          const hoverIcons = $('<div class="hover-icons"></div>');
          const cartIcon = $('<i class="pe-7s-cart"></i>');
          const likeIcon = $('<i class="pe-7s-like"></i>');
          const lookIcon = $('<i class="pe-7s-look"></i>');

          hoverIcons.append(cartIcon, likeIcon, lookIcon);
          cardImgLink.append(hoverIcons);

          hoverIcons.css('opacity', '0');

          cardTitleLink.on({
            mouseenter: function () {
              hoverIcons.css({ opacity: '1', transition: '0.4s ease' });
            },
            mouseleave: function () {
              hoverIcons.css('opacity', '0');
            },
          });

          cardImgLink.on({
            mouseenter: function () {
              hoverIcons.css({ opacity: '1', transition: '0.4s ease' });
            },
            mouseleave: function () {
              hoverIcons.css('opacity', '0');
            },
          });
        }
      });
    })
    .catch((error) => console.error('Fetch error:', error));
};
