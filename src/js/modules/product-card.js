module.exports = function () {
  $(document).ready(function () {
    const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));

    function generateProductPage() {
      const productImage = $('.product__img img');
      const productName = $('.product__text-title');
      const productPrice = $('.product__text-price');
      const breadcrumberName = $('.breadcrumbs-product .breadcrumbs__title');
      const breadcrumberSubtitle = $(
        '.breadcrumbs-product .breadcrumbs__subtitle'
      );

      productImage.attr('src', selectedProduct.imageUrl);
      productName.text(selectedProduct.productName);
      productPrice.text('$' + selectedProduct.price);
      breadcrumberName.text(selectedProduct.productName);
      breadcrumberSubtitle.text(selectedProduct.productName);
    }

    if (selectedProduct) {
      generateProductPage();
    } else {
      console.error('No selected product found.');
      window.location.href = './shop.html';
    }
  });
};
