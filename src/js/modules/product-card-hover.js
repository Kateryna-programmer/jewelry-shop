module.exports = () => {
  const cardContainers = $('.related-products__card');

  cardContainers.each(function () {
    const card = $(this);
    const cardImgLink = card.find('.related-products__card-img-link');
    const cardTitleLink = card.find('.related-products__card-title-link');

    const hoverIcons = $('<div class="related-products__hover-icons"></div>');
    const cartIcon = $('<i class="pe-7s-cart"></i>');
    const likeIcon = $('<i class="pe-7s-like"></i>');
    const lookIcon = $('<i class="pe-7s-look"></i>');
    hoverIcons.append(cartIcon, likeIcon, lookIcon);
    card.append(hoverIcons);

    cardImgLink.on({
      mouseenter: function () {
        hoverIcons.css({ display: 'inline-block', transition: '0.4s ease' });
      },
      mouseleave: function (event) {
        if (
          !$(event.relatedTarget).closest('.related-products__hover-icons')
            .length
        ) {
          hoverIcons.css('display', 'none');
        }
      },
    });

    cardTitleLink.on({
      mouseenter: function () {
        hoverIcons.css({ display: 'inline-block', transition: '0.4s ease' });
      },
      mouseleave: function (event) {
        if (
          !$(event.relatedTarget).closest('.related-products__hover-icons')
            .length
        ) {
          hoverIcons.css('display', 'none');
        }
      },
    });
  });
};
