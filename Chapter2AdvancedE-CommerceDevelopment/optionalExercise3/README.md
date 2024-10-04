# Optional Exercise 3: Implementing a Dynamic Product Filter

### Overview:
This voluntary exercise guides you through the process of creating a dynamic product filter using JavaScript. The goal is to let users sort products by various criteria (category, price, etc.) without refreshing the page, improving the user experience on an e-commerce website.

### Objectives:
- Build a product filtering system using HTML and JavaScript.
- Dynamically display products based on selected filter criteria (e.g., category, price range).
- Understand how to manipulate the DOM to update product listings in real-time.

### Steps:

1. **Set Up HTML Structure**:  
   Begin by creating a product grid in HTML, along with filter elements like dropdowns for categories and sliders for price ranges. Example:

   ```html
   <div class="filter-section">
     <select id="category-filter">
       <option value="all">All Categories</option>
       <option value="electronics">Electronics</option>
       <!-- More categories... -->
     </select>

     <input type="range" id="price-filter" min="0" max="1000" />
   </div>
   ```

2. **JavaScript Logic**:  
   Implement basic JavaScript to update the product list based on the selected filter criteria. Here's an example snippet to get you started:

   ```javascript
   const filterProducts = () => {
     const selectedCategory = document.getElementById('category-filter').value;
     const maxPrice = document.getElementById('price-filter').value;
     // Filter logic here
   };

   document.getElementById('category-filter').addEventListener('change', filterProducts);
   document.getElementById('price-filter').addEventListener('input', filterProducts);
   ```

3. **Display Filtered Products**:  
   Update the DOM to show only the filtered products by dynamically generating product cards and inserting them into your product grid.

4. **Add Styling**:  
   Ensure that your product grid and filter UI are styled for a responsive and user-friendly experience. This will make the interface clean and easy to navigate.

### Assessment Criteria:
- **Functionality**: Does the filter system work dynamically, updating without reloading the page?
- **Usability**: Is the filter intuitive and user-friendly?
- **Code Quality**: Is the JavaScript code clean and maintainable?

### Challenge:  
Extend the filter to include more criteria, like brand or size, and implement multiple filters simultaneously.

This exercise will help you refine your JavaScript skills and create interactive e-commerce features.