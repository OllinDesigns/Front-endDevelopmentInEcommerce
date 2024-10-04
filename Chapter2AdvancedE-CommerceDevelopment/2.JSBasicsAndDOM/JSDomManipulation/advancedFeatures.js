// Example: Filter products based on category
function filterProducts(category) {
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
      const productCategory = product.getAttribute('data-category');
      product.style.display = (category === 'all' || category === productCategory) ? 'block' : 'none';
    });
  }

// Example: Add item to cart
function addToCart(productId) {
    const cart = document.getElementById('cart');
    const item = document.createElement('div');
    item.textContent = `Product ${productId} added to cart`;
    cart.appendChild(item);
    updateCartTotal();
  }

  // Example: Update total price based on quantity
function updateTotalPrice() {
    const quantity = document.getElementById('quantity').value;
    const unitPrice = 50; // Example unit price
    const totalPrice = quantity * unitPrice;
    document.getElementById('totalPrice').textContent = `$${totalPrice}`;
  }
  
  // Example: Change available size options based on selected color
function updateSizeOptions(color) {
    const sizes = document.getElementById('sizes');
    sizes.innerHTML = ''; // Clear previous sizes
    const availableSizes = color === 'red' ? ['S', 'M', 'L'] : ['M', 'L', 'XL'];
    availableSizes.forEach(size => {
      const option = document.createElement('option');
      option.value = size;
      option.textContent = size;
      sizes.appendChild(option);
    });
  }

  // Example: Validate email format
function validateEmail() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    emailInput.style.borderColor = isValid ? 'green' : 'red';
  }
  