module.exports = function () {
  $(function () {
    const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));

    function generateProductPage() {
      const productImageContainerFor = $('.slider-for');
      const productImageContainerNav = $('.slider-nav');
      productImageContainerFor.empty();
      productImageContainerNav.empty();

      if (selectedProduct.imageUrl) {
        for (let i = 0; i < 4; i++) {
          const imageElementFor = $('<img>')
            .attr('src', selectedProduct.imageUrl)
            .attr('alt', 'img');
          const imageElementNav = $('<img>')
            .attr('src', selectedProduct.imageUrl)
            .attr('alt', 'img');
          productImageContainerFor.append(imageElementFor);
          productImageContainerNav.append(imageElementNav);
        }
      } else {
        console.error('No images found in selectedProduct.');
      }

      const productName = $('.product__text-title');
      const productPrice = $('.product__text-price');
      productName.text(selectedProduct.productName);
      productPrice.text('$' + selectedProduct.price);

      $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        centerMode: false,
        fade: true,
        asNavFor: '.slider-nav',
        infinite: true,
      });
      $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        arrows: false,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        infinite: true,
      });
    }

    if (selectedProduct) {
      generateProductPage();
    } else {
      console.error('No selected product found.');
      window.location.href = './shop.html';
    }
  });
};
