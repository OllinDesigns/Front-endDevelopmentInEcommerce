## Optional Exercise 1: Styling a Responsive Product Grid

### Exercise Overview

In this exercise, you will create a **responsive product grid** using HTML and CSS. The focus is on using **CSS Grid** to display multiple product cards, with each card containing an image, product name, price, and an "Add to Cart" button. The grid will be **responsive**, adjusting the number of columns based on the screen size. You will also implement some basic hover effects to enhance the user experience.

## Objectives

- Understand how to structure a product grid using **semantic HTML**.
- Learn how to apply **responsive design principles** using **CSS Grid** and **media queries**.
- Add **hover effects** to the product cards for enhanced interaction.
- Practice aligning elements inside the product cards with **Flexbox**.

## Prerequisites

- Basic knowledge of HTML and CSS.
- Familiarity with **CSS Grid** and **Flexbox**.

## Instructions

1. **Create the HTML structure**:
    - Start by defining a `div` container for the product grid.
    - Inside the container, add product cards with images, product names, prices, and "Add to Cart" buttons.

2. **Apply styles using CSS**:
    - Use **CSS Grid** for the layout, ensuring that the grid is responsive.
    - Apply **hover effects** on the product cards to add interactivity (e.g., card lifts and shadow effects).
    - Use **media queries** to ensure the grid adapts to different screen sizes (2 columns for medium screens, 3 columns for large screens).

3. **Responsive Design**:
    - Implement responsive behavior with media queries:
      - On small screens (<600px), the grid should display 1 product per row.
      - On medium screens (600px–899px), display 2 products per row.
      - On large screens (900px+), display 3 products per row.

## Code Snippets

**HTML**:
```html
<div class="product-grid">
  <div class="product-card">
    <img src="product1.jpg" alt="Product 1" />
    <h3>Product Name</h3>
    <p>$19.99</p>
    <button>Add to Cart</button>
  </div>
  <!-- Add more product cards as needed -->
</div>
```

**CSS**:
```css
.product-grid {
  display: grid;
  gap: 20px;
  padding: 20px;
}

.product-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

@media (min-width: 600px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 900px) {
  .product-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

## Expected Outcome

By the end of this exercise, you will have a **responsive product grid** that adjusts the number of product cards per row depending on the screen size. Each product card will have basic hover effects to enhance user interaction. This grid will be a great starting point for building more complex e-commerce interfaces.

## Further Challenges

- Customize the styling of the buttons and cards.
- Experiment with different hover effects for more dynamic user interactions.
- Add more details to the product cards, such as ratings or stock levels.
