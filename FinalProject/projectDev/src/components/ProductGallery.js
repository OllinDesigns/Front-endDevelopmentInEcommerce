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
