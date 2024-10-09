## **Exercise 2: Styling the Product Card with CSS (Using Flexbox)**

In this exercise, you will take the **semantic HTML structure** of the product card you created earlier and apply CSS to style it. You will use **Flexbox** to lay out the elements, making the product card visually appealing and responsive.

#### Requirements:
- Style the **product card** using CSS.
- Use **Flexbox** to align and position elements like the image, product name, price, and button.
- Make the product card **responsive** so that it adapts to different screen sizes.
- Add basic styling for the **button** to make it stand out as a call-to-action.

#### Steps:
1. Create a new CSS file and link it to your HTML file.
2. Use Flexbox to:
   - Align the image and product information horizontally or vertically, depending on your design.
   - Ensure the layout remains responsive on smaller screens (use media queries if necessary).
3. Style the **product card** with colors, padding, margins, and font sizes to make it visually appealing.
4. Style the **button** to be more prominent with background colors, padding, and hover effects.

#### Example Flexbox Layout:

- Use Flexbox to align the image and product details side by side or stack them vertically on smaller screens.
- Apply Flexbox to the card container and button to ensure they are properly aligned.

#### Example CSS:

```css
article {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  max-width: 300px;
  margin: auto;
}

figure {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
}

h2 {
  font-size: 1.5rem;
  margin: 10px 0;
}

p {
  font-size: 1.2rem;
  color: #333;
}

button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
```

#### Optional: Responsive Design

You can make the card responsive using media queries to adjust the layout for smaller screens.

```css
@media (max-width: 600px) {
  article {
    flex-direction: column;
  }
}
```

### **Deliverable:**
By the end of this exercise, students should have a fully styled product card using Flexbox, with a responsive layout that works on different screen sizes.