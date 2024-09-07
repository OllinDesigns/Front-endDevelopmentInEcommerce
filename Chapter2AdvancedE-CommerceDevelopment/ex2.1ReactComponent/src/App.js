import React, { useState } from 'react';
import { products } from './products';
import Product from './Product';
import './styles.css';


function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
	setCart([...cart, product]);
  };

  return (
	<div className="App">
  	<h1>E-Commerce Product List</h1>
  	<div className="product-grid">
    	{products.map((product) => (
      	<Product key={product.id} product={product} onAddToCart={handleAddToCart} />
    	))}
  	</div>
  	<h2>Cart ({cart.length} items)</h2>
  	<ul>
    	{cart.map((item, index) => (
      	<li key={index}>{item.name} - ${item.price.toFixed(2)}</li>
    	))}
  	</ul>
	</div>
  );
}

export default App;
