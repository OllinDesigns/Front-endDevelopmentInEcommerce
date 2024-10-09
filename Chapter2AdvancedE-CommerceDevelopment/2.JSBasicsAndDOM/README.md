# JavaScript Basics and DOM Manipulation

In this section, we will explore the **fundamentals of JavaScript syntax** and understand how to manipulate the **Document Object Model (DOM)** for creating dynamic and interactive e-commerce websites.

## JavaScript Syntax and Fundamentals

JavaScript is a versatile and essential programming language for front-end web development. It helps you build interactive elements and dynamic content for web pages. Let’s break down the fundamental concepts.

### Overview of JavaScript Syntax

#### Variables
In JavaScript, variables are used to store data values. You can declare variables using `var`, `let`, or `const`. 

- **`var`**: Has function scope and can be redeclared.
- **`let`**: Block-scoped and cannot be redeclared within the same scope.
- **`const`**: Block-scoped but must be assigned a value when declared (used for constants).

```js
let productName = "Laptop";
const price = 999.99;
```

#### Data Types
JavaScript has two categories of data types: **Primitive** and **Reference**.

- **Primitive Data Types**:
  These are immutable, and their values are stored directly in the variable.
  - `string` (e.g., `"Hello"`)
  - `number` (e.g., `100`, `3.14`)
  - `boolean` (e.g., `true`, `false`)
  - `null` (e.g., represents intentional absence of a value)
  - `undefined` (e.g., declared but not assigned a value)
  - `symbol` (introduced in ES6 for unique identifiers)
  - `bigint` (used for very large numbers)

- **Reference Data Types**:
  These are objects and stored as a reference in memory, meaning they are mutable.
  - `object` (e.g., `let product = {name: "Laptop", price: 999};`)
  - `array` (e.g., `let items = ["Laptop", "Phone", "Tablet"];`)
  - `function` (e.g., `function addToCart() { ... }`)

```js
let product = { name: "Phone", price: 699.99 };
let cart = ["Laptop", "Tablet", "Phone"];
```

#### Operators
JavaScript includes various operators for performing calculations and comparisons.

- **Arithmetic operators**: `+`, `-`, `*`, `/`, `%`
- **Comparison operators**: `==`, `===`, `!=`, `!==`, `>`, `<`
- **Logical operators**: `&&` (AND), `||` (OR), `!` (NOT)

```js
let totalPrice = price * 2;
let isMember = user === "premium";
```

#### Control Structures
Use control structures to execute code based on conditions or loops.

- `if`, `else`, and `switch` for conditional logic.
- `for`, `while`, and `do-while` for looping through data.

```js
if (totalPrice > 1000) {
  console.log("You qualify for a discount!");
}
```

#### Functions
Functions are reusable blocks of code that perform specific tasks. You can define functions using either the function keyword or arrow functions.

```js
function calculateTotal(price, quantity) {
  return price * quantity;
}
```

### DOM Manipulation for E-Commerce Interactions

The **Document Object Model (DOM)** represents the structure of an HTML document. JavaScript allows you to manipulate the DOM to create dynamic and interactive web applications.

For e-commerce, DOM manipulation is often used to dynamically update product details, handle cart interactions, and implement filtering or sorting functionalities. Here are some common DOM manipulation techniques:

- **Accessing elements**: Use methods like `getElementById()`, `querySelector()`, or `getElementsByClassName()` to select and manipulate HTML elements.

```js
let productTitle = document.getElementById("product-title");
productTitle.textContent = "New Product Name";
```

- **Modifying content**: Use `textContent`, `innerHTML`, or `value` to update the text or HTML structure inside an element.

```js
let cartCount = document.querySelector(".cart-count");
cartCount.textContent = "3 items";
```

- **Handling events**: You can attach event listeners to elements to trigger actions, such as adding products to the cart or displaying additional product details when a button is clicked.

```js
let addToCartButton = document.querySelector(".add-to-cart");
addToCartButton.addEventListener("click", function() {
  console.log("Product added to cart!");
});
```

- **Updating Styles**: Use JavaScript to dynamically change CSS styles of elements.

```js
let productImage = document.querySelector(".product-image");
productImage.style.border = "2px solid red";
```

In this section of the course, you will explore these basic JavaScript concepts and practice manipulating the DOM to make your e-commerce website dynamic and interactive. This is an important foundation for building more complex features such as shopping carts, product filters, and checkout forms.

### Conclusion
Mastering JavaScript syntax and DOM manipulation allows you to enhance the user experience on e-commerce websites, making them more interactive and functional. You’ll apply these concepts in future exercises to handle user interactions, update product information, and manage dynamic content on your web pages.