Here's a simplified solution for the final project exercise, where we build a small e-commerce app featuring a **Product Card**, **Product Gallery**, and **Shopping Cart**.

We'll start by creating individual React components. This solution is built without state management libraries (like Redux) for now, focusing on basic component structure, responsiveness, and functionality using **Semantic HTML**, **CSS Flexbox**, and **JavaScript** for interactivity.

### File Structure
We'll structure the app like this:
```
/src
  /components
    ProductCard.js
    ProductGallery.js
    ShoppingCart.js
  App.js
  index.js
  styles.css
```

---

### **1. `ProductCard.js` Component**
This component represents an individual product card and displays product details like an image, name, and price.

```jsx
import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h2>{product.name}</h2>
        <p>${product.price}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
```

### **2. `ProductGallery.js` Component**
This component renders multiple product cards and passes down the `addToCart` function.

```jsx
import React from 'react';
import ProductCard from './ProductCard';

const ProductGallery = ({ products, addToCart }) => {
  return (
    <div className="product-gallery">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductGallery;
```

### **3. `ShoppingCart.js` Component**
This component displays the number of items added to the cart.

```jsx
import React from 'react';

const ShoppingCart = ({ cartItems }) => {
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <p>Total Items: {cartItems.length}</p>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.name} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
```

### **4. `App.js` Component**
This is the main component that ties everything together.

```jsx
import React, { useState } from 'react';
import ProductGallery from './components/ProductGallery';
import ShoppingCart from './components/ShoppingCart';

const App = () => {
  // Sample product data
  const products = [
    { id: 1, name: 'Product 1', price: 20, image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 30, image: 'product2.jpg' },
    { id: 3, name: 'Product 3', price: 40, image: 'product3.jpg' },
    { id: 4, name: 'Product 4', price: 50, image: 'product4.jpg' },
  ];

  // Cart state
  const [cartItems, setCartItems] = useState([]);

  // Add to cart functionality
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="app">
      <h1>My E-Commerce App</h1>
      <ProductGallery products={products} addToCart={addToCart} />
      <ShoppingCart cartItems={cartItems} />
    </div>
  );
};

export default App;
```

### **5. `styles.css`**
CSS to make the product gallery responsive using **Flexbox**.

```css
/* Global styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}

h1 {
  text-align: center;
  margin: 20px 0;
}

.app {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

/* Product Gallery Styling */
.product-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 70%;
}

.product-card {
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  flex: 1 1 calc(25% - 20px);
  box-sizing: border-box;
}

.product-card img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.product-info {
  text-align: center;
  margin-top: 10px;
}

.product-info h2 {
  font-size: 1.2rem;
  margin: 10px 0;
}

.product-info p {
  font-size: 1rem;
  margin: 5px 0;
}

.product-info button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.product-info button:hover {
  background-color: #0056b3;
}

/* Shopping Cart Styling */
.shopping-cart {
  width: 25%;
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.shopping-cart h2 {
  text-align: center;
}

.shopping-cart ul {
  list-style-type: none;
  padding: 0;
}

.shopping-cart li {
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
}
```

---

### **How it Works:**
1. **App Component**: The `App.js` component manages the cart state and renders the `ProductGallery` and `ShoppingCart` components.
2. **ProductGallery Component**: This renders a list of product cards using the `ProductCard` component.
3. **ProductCard Component**: Each product card shows the product name, price, and image, and includes an "Add to Cart" button.
4. **ShoppingCart Component**: Displays the current cart contents and the total number of items.

---

### **Project Flow Recap:**
- **Semantic HTML**: The structure of the components reflects a semantic approach to accessibility and search engines.
- **Flexbox**: Flexbox ensures a responsive layout for product cards in the gallery.
- **JavaScript (React)**: The interactivity is handled using React’s state and component-based architecture, where products can be added to the cart dynamically.

This solution provides the foundation for the final project. State management can be integrated later if required. Let me know if you'd like to add more details or see any particular aspect of the project in-depth!