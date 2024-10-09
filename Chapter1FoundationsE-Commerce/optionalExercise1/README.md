# **Optional Exercise 1: Styling a Responsive Product Grid**

## **Overview**

In this exercise, you will create a **responsive product grid** using **HTML and CSS**. The goal is to structure and style a grid of product cards, where each card contains an image, product name, price, and an "Add to Cart" button. You will also make sure the grid adapts to different screen sizes using **CSS Grid** and **media queries**.

### **Objectives**:

- Structure a product grid with **semantic HTML**.
- Use **CSS Grid** to create a flexible layout.
- Implement **responsive design** with **media queries**.
- Add hover effects to make the product cards interactive.

### **Instructions**:

1. **Create the HTML Structure**:
   - Start by creating a container for your product grid.
   - Inside the container, add product cards with images, product names, prices, and buttons.

2. **Apply CSS**:
   - Use **CSS Grid** to control the layout of the product cards.
   - Add hover effects to each product card to make it interactive.
   - Ensure the grid adapts to different screen sizes with **media queries**.

3. **Responsive Design**:
   - On small screens (e.g., mobile), display one product per row.
   - On medium screens (e.g., tablets), show two products per row.
   - On large screens (e.g., desktops), show three products per row.

### **CSS Clues**:

- Use **grid-template-columns** to define how many columns your grid should have at different screen sizes.
- Use **hover effects** to add interactivity, such as a card lifting effect or shadow when hovered over.

```css
/* Example clue for the grid */
.product-grid {
  display: grid;
  gap: 20px;
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

### **Expected Outcome**:

By the end of this exercise, you will have a **responsive product grid** that adjusts the number of columns based on the screen size. Each product card will also have basic hover effects to enhance user interaction.

