import React, { useState } from 'react';
import ProductGallery from './components/ProductGallery';
import ShoppingCart from './components/ShoppingCart';
import './styles.css';

const App = () => {
  // Sample product data
  const products = [
    { id: 1, name: 'Rickenbacker Bass Guitar', price: 835.00, image: 'https://r2.gear4music.com/media/103/1034976/1200/preview.jpg' },
    { id: 2, name: 'Vitamin D3', price: 29.99, image: 'https://www.naturesaid.co.uk/images/vitamin-d3-4000iu-p265-1401_image.jpg' },
    { id: 3, name: 'Jack Daniel’s Whiskey', price: 40.00, image: 'https://www.masterofmalt.com/whiskies/jack-daniels/jack-daniels-bonded-whiskey.jpg?alt=1&w=700&h=781&b=0xFFFFFF&q=100' },
    { id: 4, name: 'Hiking Shoes The North Face', price: 150.00, image: 'https://www.ldmountaincentre.com/images/north-face-mens-verto-alpine-mid-gtx-p63584-332121_medium.jpg' },
  ];

  // Cart state
  const [cartItems, setCartItems] = useState([]);

  // Add to cart functionality
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="app-container">
      {/* Title Section */}
      <header className="app-header">
        <h1>My E-Commerce App</h1>
      </header>

      {/* Product Gallery Section - Passing products and addToCart */}
      <section className="product-gallery-section">
        <ProductGallery products={products} addToCart={addToCart} />
      </section>

      {/* Shopping Cart Section */}
      <aside className="shopping-cart-section">
        <ShoppingCart cartItems={cartItems} />
      </aside>
    </div>
  );
};

export default App;





// return (
//   <div className="app">
//     <h1>My E-Commerce App</h1>
//     <ProductGallery products={products} addToCart={addToCart} />
//     <ShoppingCart cartItems={cartItems} />
//   </div>
// );






// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
