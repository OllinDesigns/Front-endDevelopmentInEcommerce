## **Exercise 1: Creating a Product Card with Semantic HTML**

In this exercise, you will create the basic **semantic HTML structure** for a product card. This card will later be styled with CSS and eventually turned into a ProductCard component.

#### Requirements:
- Use **semantic HTML elements** to structure the product card.
- The card should include a **product image**, **name**, **price**, and a **button** for adding the product to the cart.
- Focus only on the HTML structure for now – you’ll add styling in a later exercise.
- This structure will serve as the foundation for creating a reusable component later in the course.

#### Example Layout:
- **Header (h2)** for the product name
- **Image** element for the product image
- **Paragraph (p)** for the product price
- **Button** for adding the product to the cart

#### Steps:
1. Create a new HTML file.
2. Use appropriate semantic tags like `<article>`, `<section>`, `<header>`, `<figure>`, and `<footer>`.
3. Include an image, and structure the content using semantic tags.

#### Example Code Structure:

```html
<article>
  <header>
    <h2>Product Name</h2>
  </header>
  <figure>
    <img src="product-image.jpg" alt="Description of the product">
  </figure>
  <section>
    <p>Price: $XX.XX</p>
  </section>
  <footer>
    <button>Add to Cart</button>
  </footer>
</article>
```

### **Deliverable:**
By the end of the exercise, each student should have a structured HTML file with a product card layout using semantic HTML only.