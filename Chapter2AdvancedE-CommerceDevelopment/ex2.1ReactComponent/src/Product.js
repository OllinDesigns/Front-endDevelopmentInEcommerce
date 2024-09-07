import React from 'react';

function Product({ product, onAddToCart }) {
  return (
	<div className="product-card">
  	<img src={product.image} alt={product.name} />
  	<h3>{product.name}</h3>
  	<p>${product.price.toFixed(2)}</p>
  	<button onClick={() => onAddToCart(product)}>Add to Cart</button>
	</div>
  );
}

export default Product;
