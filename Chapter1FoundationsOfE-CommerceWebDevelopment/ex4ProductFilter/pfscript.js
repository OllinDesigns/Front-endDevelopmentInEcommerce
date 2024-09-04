document.addEventListener('DOMContentLoaded', function () {
    const categoryFilter = document.getElementById('category');
    const priceFilter = document.getElementById('price');
    const products = document.querySelectorAll('.product');
  
    function filterProducts() {
      const category = categoryFilter.value;
      const price = priceFilter.value;
  
      products.forEach((product) => {
        const productCategory = product.getAttribute('data-category');
        const productPrice = parseFloat(product.getAttribute('data-price'));
        let priceMatch = true;
  
        // Check category match
        const categoryMatch = category === 'all' || category === productCategory;
  
        // Check price match
        if (price !== 'all') {
          const [minPrice, maxPrice] = price.split('-').map(Number);
          priceMatch = productPrice >= minPrice && productPrice <= maxPrice;
        }
  
        // Show or hide product based on filters
        if (categoryMatch && priceMatch) {
          product.style.display = 'block';
        } else {
          product.style.display = 'none';
        }
      });
    }
  
    categoryFilter.addEventListener('change', filterProducts);
    priceFilter.addEventListener('change', filterProducts);
  });
  