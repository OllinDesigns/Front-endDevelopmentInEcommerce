# Exercise 3: Transforming the Product Card into a React Component

### Objective
The goal of this exercise is to guide you through transforming the previously created **Product Card** (structured with Semantic HTML and styled with CSS) into a reusable **React component**. If you are more comfortable with **Angular** or **Vue**, feel free to implement the component in those frameworks instead.

### Steps

- **Break Down the HTML**:
  - Review the static HTML of your product card.
  - Identify different parts (image, title, description, price) that will correspond to elements in the React component.

- **Create a New React Component**:
  - Use **`create-react-app`** or your preferred React setup.
  - Create a new file named `ProductCard.js`.

    ```jsx
    import React from 'react';
    import './ProductCard.css'; // Link your CSS file

    const ProductCard = () => {
      return (
        <div className="product-card">
          {/* Add your elements here */}
        </div>
      );
    };

    export default ProductCard;
    ```

- **Link the CSS**:
  - Ensure your previously created CSS styles are applied to the new component by importing the stylesheet.

- **Refactor for Reusability**:
  - Modify the component to accept **props** for dynamic data input, such as image, title, description, and price.

    ```jsx
    const ProductCard = ({ image, title, description, price }) => {
      return (
        <div className="product-card">
          {/* Use props to display content */}
        </div>
      );
    };
    ```

- **Render the Component**:
  - In your main component file (like **App.js**), render the `ProductCard` component and pass in product data using props.

    ```jsx
    import ProductCard from './ProductCard';

    function App() {
      return (
        <div>
          {/* Render your ProductCard with props */}
        </div>
      );
    }

    export default App;
    ```

- **Alternative Frameworks (Optional)**:
  - If you prefer **Angular** or **Vue**, create your product card component in your chosen framework. 
  - The same principles apply: structure it for reusability and pass dynamic data.

### Challenge
Once you understand the guidance, your task is to transform your own product card into a fully functional React component following the steps outlined above.

Have fun!

