### Exercise: Building a New Reusable Component

**Objective:**  
In this exercise, students will create **one new reusable component**: either a **Product Gallery** or a **Shopping Cart**. This will be integrated with the previously developed product card component and designed with a focus on **responsiveness** and **accessibility**.

#### Instructions:

1. **Choose your Component**: You will either build a **Product Gallery** to showcase a list of product images or a **Shopping Cart** to display selected products.
   
2. **Break Down the HTML Structure**:  
   Start by sketching the basic semantic HTML structure for the component you’re building, making sure it's clear and accessible.
   
   - For **Product Gallery**: Focus on an accessible list of images, using appropriate `<figure>`, `<img>`, and `<figcaption>` elements.
   - For **Shopping Cart**: Structure it using lists like `<ul>` and ensure products are listed with details such as name, price, and quantity.
   
3. **Convert into a React Component**:  
   Transform your HTML structure into a functional React component. Follow these steps:
   
   - **Create a New Component** (e.g., `ProductGallery.js` or `ShoppingCart.js`).
   - Inside the component, return the appropriate JSX markup.
   - Make use of **props** to pass dynamic data to your component.

   Here's an example of starting the `ProductGallery` component:
   ```jsx
   const ProductGallery = ({ images }) => {
     return (
       <div className="product-gallery">
         {images.map((img, index) => (
           <figure key={index}>
             <img src={img.src} alt={img.alt} />
             <figcaption>{img.caption}</figcaption>
           </figure>
         ))}
       </div>
     );
   };

   export default ProductGallery;
   ```

4. **Styling with Flexbox**:  
   Use **flexbox** to style the components for responsiveness. For instance, ensure that images in the gallery wrap on smaller screens or items in the shopping cart align neatly.

   Here's some guidance on flexbox styling:
   ```css
   .product-gallery {
     display: flex;
     flex-wrap: wrap;
     gap: 10px;
   }

   .product-gallery figure {
     flex: 1 1 calc(25% - 10px);
     max-width: 100%;
   }

   .shopping-cart {
     display: flex;
     flex-direction: column;
   }
   ```

5. **Accessibility**:  
   - Add proper **ARIA labels** and ensure that key navigation features like focus states are accessible.
   - For the shopping cart, ensure screen readers can recognize product quantities and details.

6. **Integration with Product Card**:  
   If you're building the product gallery, integrate it with your product card by passing image data to both components. If it's the shopping cart, ensure products from the product card can be passed as props.

#### Code Guidance:
- Start by creating the basic component structure.
- Focus on the UI layout and ensure responsiveness with Flexbox.
- Ensure proper use of semantic HTML and accessibility attributes.

**Note**: You will be working on state management soon, but for now, concentrate on structure, style, and accessibility.

By the end of this exercise, students should have one additional reusable component (Product Gallery or Shopping Cart) that integrates smoothly with their existing product card.