module.exports = function () {
  $(document).ready(function () {
    const articlesPerPage = 15;
    const imageUrls = [
      '../../image/product-1.jpg',
      '../../image/product-2.jpg',
      '../../image/product-3.jpg',
      '../../image/product-4.jpg',
      '../../image/product-5.jpg',
      '../../image/product-6.jpg',
      '../../image/product-7.jpg',
      '../../image/product-8.jpg',
      '../../image/product-9.jpg',
      '../../image/product-10.jpg',
      '../../image/product-11.jpg',
      '../../image/product-12.jpg',
      '../../image/product-13.jpg',
      '../../image/product-14.jpg',
      '../../image/product-15.jpg',
      '../../image/product-16.jpg',
      '../../image/product-17.jpg',
      '../../image/product-18.jpg',
      '../../image/product-19.jpg',
      '../../image/product-20.jpg',
      '../../image/product-21.jpg',
      '../../image/product-22.jpg',
      '../../image/product-23.jpg',
      '../../image/product-1.jpg',
      '../../image/product-2.jpg',
      '../../image/product-3.jpg',
      '../../image/product-4.jpg',
      '../../image/product-5.jpg',
      '../../image/product-6.jpg',
      '../../image/product-7.jpg',
      '../../image/product-8.jpg',
      '../../image/product-9.jpg',
      '../../image/product-10.jpg',
    ];

    const jewelryNames = [
      'CONTEMPORARY RING',
      'BRIDAL SET',
      'CLADDAGH RING',
      'DIAMOND PENDANT',
      'GEMSTONE EARRINGS',
      'VINTAGE NECKLACE',
      'SOLITAIRE BRACELET',
      'ETERNITY BAND',
      'ROSE GOLD CHARM',
      'PEARL BROOCH',
      'SAPPHIRE BRACELET',
      'TANZANITE EARRINGS',
      'AMETHYST PENDANT',
      'EMERALD RING',
      'RUBY NECKLACE',
      'CITRINE BROOCH',
      'AQUAMARINE BRACELET',
      'TOPAZ EARRINGS',
      'ONYX CUFFLINKS',
      'GARNET RING',
      'PERIDOT PENDANT',
      'JADE BRACELET',
      'OPAL BROOCH',
      'CONTEMPORARY RING',
      'BRIDAL SET',
      'CLADDAGH RING',
      'DIAMOND PENDANT',
      'GEMSTONE EARRINGS',
      'VINTAGE NECKLACE',
      'SOLITAIRE BRACELET',
      'ETERNITY BAND',
      'ROSE GOLD CHARM',
      'PEARL BROOCH',
    ];

    const container = $('.shop__container');
    const totalItems = jewelryNames.length;
    let currentPage = 1;

    function generateProductCard(index) {
      const card = $('<div class="shop__card"></div>');
      const cardImgLink = $('<a class="shop__card-link" href=""></a>');
      const cardImg = $(
        `<img class="shop__card-image" alt="jewelry" src="${imageUrls[index]}">`
      );
      const cardText = $('<div class="shop__card-text"></div>');
      const cardPrice = $(
        `<p class="shop__card-text_price">$${generateRandomPrice()}</p>`
      );
      const cardTitleLink = $('<a href="" class="shop__card-link"></a>');
      const cardTitle = $(
        `<h4 class="shop__card-text_title">${jewelryNames[index]}</h4>`
      );
      const hoverIcons = $('<div class="hover-icons"></div>');
      const cartIcon = $('<i class="pe-7s-cart"></i>');
      const likeIcon = $('<i class="pe-7s-like"></i>');
      const lookIcon = $('<i class="pe-7s-look"></i>');

      hoverIcons.append(cartIcon, likeIcon, lookIcon);
      cardImgLink.append(cardImg, hoverIcons);
      cardTitleLink.append(cardTitle);
      cardText.append(cardPrice, cardTitleLink);
      cardImgLink.append(hoverIcons);
      card.append(cardImgLink, cardText);

      hoverIcons.css('opacity', '0');

      cardImgLink.hover(
        function () {
          hoverIcons.css({ opacity: '1', transition: '0.4s ease' });
        },
        function () {
          hoverIcons.css('opacity', '0');
        }
      );

      return card;
    }

    function renderPage(pageNumber) {
      const startIndex = (pageNumber - 1) * articlesPerPage;
      const endIndex = Math.min(startIndex + articlesPerPage, totalItems);
      container.empty();

      for (let i = startIndex; i < endIndex; i++) {
        const card = generateProductCard(i);
        container.append(card);
      }
    }

    function generateRandomPrice() {
      return (Math.random() * (500 - 50) + 50).toFixed(2);
    }

    renderPage(currentPage);

    $('.prev, .next').hide();

    $('.shop__pagination-list a').on('click', function (e) {
      e.preventDefault();

      const clickedPage = parseInt($(this).text());

      if (clickedPage !== currentPage) {
        currentPage = clickedPage;
        renderPage(currentPage);

        const totalPages = Math.ceil(totalItems / articlesPerPage);

        $('.prev').toggle(currentPage !== 1);
        $('.next').toggle(currentPage !== totalPages);

        $('.shop__pagination-list li').removeClass('active');
        $(this).parent('li').addClass('active');
      }

      $('html, body').scrollTop(400);
    });
  });
};
