// module.exports = function () {
//   const url = 'https://fakestoreapi.com/products';

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       const container = $('.new-arrival__container');

//       data.forEach((product) => {
//         if (product.category === 'jewelery') {
//           const card = $('<div class="new-arrival__card"></div>');

//           const cardImgLink = $(
//             '<a class="new-arrival__card-link" href=""></a>'
//           );
//           const cardImg = $(
//             '<img class="new-arrival__card-image" alt="jewelry">'
//           );
//           cardImg.attr('src', product.image);
//           cardImgLink.append(cardImg);
//           card.append(cardImgLink);

//           const cardText = $('<div class="new-arrival__card-text"></div>');

//           const cardPrice = $('<p class="new-arrival__card-text_price"></p>');
//           cardPrice.text(`$${product.price}`);
//           cardText.append(cardPrice);

//           const cardTitleLink = $(
//             '<a href="" class="new-arrival__card-link"></a>'
//           );
//           const cardTitle = $('<h4 class="new-arrival__card-text_title"></h4>');
//           cardTitle.text(product.title);
//           cardTitleLink.append(cardTitle);
//           cardText.append(cardTitleLink);

//           card.append(cardText);

//           container.append(card);
//         }
//       });
//     })
//     .catch((error) => console.error('Fetch error:', error));
// };

// module.exports = function () {
//   const url = 'https://fakestoreapi.com/products';

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       const container = $('.new-arrival__container');

//       data.forEach((product) => {
//         if (product.category === 'jewelery') {
//           const card = $('<div class="new-arrival__card"></div>');

//           const cardImgLink = $(
//             '<a class="new-arrival__card-link" href=""></a>'
//           );
//           const cardImg = $(
//             '<img class="new-arrival__card-image" alt="jewelry">'
//           );
//           cardImg.attr('src', product.image);
//           cardImgLink.append(cardImg);
//           card.append(cardImgLink);

//           const cardText = $('<div class="new-arrival__card-text"></div>');

//           const cardPrice = $('<p class="new-arrival__card-text_price"></p>');
//           cardPrice.text(`$${product.price}`);
//           cardText.append(cardPrice);

//           const cardTitleLink = $(
//             '<a href="" class="new-arrival__card-link"></a>'
//           );
//           const cardTitle = $('<h4 class="new-arrival__card-text_title"></h4>');
//           cardTitle.text(product.title);
//           cardTitleLink.append(cardTitle);
//           cardText.append(cardTitleLink);

//           card.append(cardText);

//           container.append(card);

//           // Добавим обработчики событий для эффекта ховера
//           const hoverIcons = $('<div class="hover-icons"></div>');
//           const cartIcon = $('<i class="pe-7s-cart"></i>');
//           const settingsIcon = $(
//             '<i class="pe-7s-settings animated rotateIn infinite"></i>'
//           );
//           const checkIcon = $('<i class="pe-7s-check"></i>');

//           hoverIcons.append(cartIcon, settingsIcon, checkIcon);
//           cardImgLink.append(hoverIcons);

//           cardImgLink.hover(
//             function () {
//               hoverIcons.css('opacity', '1');
//             },
//             function () {
//               hoverIcons.css('opacity', '0');
//             }
//           );
//         }
//       });
//     })
//     .catch((error) => console.error('Fetch error:', error));
// };

module.exports = function () {
  fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => {
      const container = $('.new-arrival__container');

      data.forEach((product) => {
        if (product.category === 'jewelery') {
          const card = $('<div class="new-arrival__card"></div>');

          const cardImgLink = $(
            '<a class="new-arrival__card-link" href=""></a>'
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
            '<a href="" class="new-arrival__card-link"></a>'
          );
          const cardTitle = $('<h4 class="new-arrival__card-text_title"></h4>');
          cardTitle.text(product.title);
          cardTitleLink.append(cardTitle);
          cardText.append(cardTitleLink);

          card.append(cardText);

          container.append(card);

          const hoverIcons = $('<div class="hover-icons"></div>');
          const cartIcon = $('<i class="pe-7s-cart"></i>');
          const settingsIcon = $(
            '<i class="pe-7s-settings animated rotateIn infinite"></i>'
          );
          const checkIcon = $('<i class="pe-7s-check"></i>');

          hoverIcons.append(cartIcon, settingsIcon, checkIcon);
          cardImgLink.append(hoverIcons);

          hoverIcons.css('opacity', '0');

          cardImgLink.hover(
            function () {
              hoverIcons.css({ opacity: '1', transition: '0.4s ease' });
            },
            function () {
              hoverIcons.css('opacity', '0');
            }
          );
        }
      });
    })
    .catch((error) => console.error('Fetch error:', error));
};
