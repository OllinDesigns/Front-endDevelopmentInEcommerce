### Hands-on Exercise: Transforming the Product Card into a React Component

#### Objective:
The goal of this exercise is to guide students through transforming the previously created **Product Card** (structured with Semantic HTML and styled with CSS) into a reusable **React component**. While the focus will be on React, students with stronger knowledge in **Angular** or **Vue** are encouraged to implement the component in those frameworks if they prefer.

#### Steps:
1. **Break Down the HTML**:
   - Begin by reviewing the static HTML of your product card.
   - Identify different parts (image, title, description, price, etc.) that will map to different elements within the React component.

2. **Create a New React Component**:
   - Use **`create-react-app`** or another React setup to get started (if needed).
   - Create a new file named `ProductCard.js` for the component.

   ```jsx
   import React from 'react';
   import './ProductCard.css'; // Import the CSS file you created earlier

   const ProductCard = () => {
     return (
       <div className="product-card">
         <img src="path_to_image" alt="Product Image" className="product-image" />
         <h2 className="product-title">Product Title</h2>
         <p className="product-description">Product description goes here.</p>
         <p className="product-price">$XX.XX</p>
       </div>
     );
   };

   export default ProductCard;
   ```

3. **Link the CSS**:
   - Use the CSS created in the previous exercise to style the component. Make sure to link the stylesheet in your React app.

4. **Refactor for Reusability**:
   - Refactor the component to accept **props** so it can display different products.

   ```jsx
   const ProductCard = ({ image, title, description, price }) => {
     return (
       <div className="product-card">
         <img src={image} alt={title} className="product-image" />
         <h2 className="product-title">{title}</h2>
         <p className="product-description">{description}</p>
         <p className="product-price">{price}</p>
       </div>
     );
   };
   ```

5. **Render the Component**:
   - In your **App.js** or main component file, render the `ProductCard` component and pass in different product data using props.

   ```jsx
   import ProductCard from './ProductCard';

   function App() {
     return (
       <div>
         <ProductCard 
           image="url_to_image"
           title="Sample Product"
           description="This is a sample product description."
           price="$20.00"
         />
       </div>
     );
   }

   export default App;
   ```

6. **Alternative Frameworks (Optional)**:
   - If you prefer **Angular** or **Vue**, feel free to build your product card component in your preferred framework. 
   - The key concepts are the same: break the product card into a component, structure it using reusable logic, and pass in dynamic data.

#### Challenge:
- Once the guidance is provided, students are tasked with transforming their own product card into a fully functional React component using the steps above.

Have fun!