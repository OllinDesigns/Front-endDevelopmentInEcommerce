# **Exercise 2: Styling the Product Card with CSS (Using Flexbox)**

In this exercise, you will take the **semantic HTML structure** of the product card you created earlier and apply **CSS styling** using **Flexbox**. The aim is to create a visually appealing and responsive product card.

### **Objectives:**
- Use **Flexbox** to align and position elements such as the product image, name, price, and button.
- Make the product card **responsive** to adapt to different screen sizes.
- Style the product card to make it **aesthetically appealing** and improve user experience.

### **Instructions:**

1. **Link a CSS file** to your HTML.
2. Use **Flexbox** to:
   - Lay out the image and product details horizontally or vertically.
   - Make sure the layout adapts to different screen sizes (consider using media queries).
3. Add **styling** to the product card:
   - Use colors, font sizes, margins, and padding for better presentation.
   - Ensure that the button stands out as a **call-to-action**.

### **Key Considerations:**

- **Flexbox Layout:** You will use Flexbox to control the layout and alignment. For example, consider how you’ll position the image relative to the product information (side-by-side on larger screens, stacked on smaller screens).
  
- **Responsiveness:** The layout should adjust on smaller screens. You can achieve this using **media queries**.

### **CSS Clues:**

- Create a flexible layout using `display: flex` for the card container.
- Use properties like `justify-content` and `align-items` to control alignment.
- Think about hover effects for the button to improve interactivity.

```css
/* Example clue */
.product-card {
  display: flex;
  flex-direction: column; /* Consider changing this for wider screens */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

button {
  padding: 10px;
  background-color: #28a745;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #218838; /* Interactive hover effect */
}
```

### **Additional Challenge:**
- Make the product card fully **responsive**. Use **media queries** to change the layout on different screen sizes.

```css
/* Example media query */
@media (max-width: 600px) {
  .product-card {
    flex-direction: column; /* Stack elements on smaller screens */
  }
}
```

### **Deliverable:**
By the end of this exercise, you should have a fully styled product card that uses Flexbox to align elements, with a responsive design that works on different screen sizes.

