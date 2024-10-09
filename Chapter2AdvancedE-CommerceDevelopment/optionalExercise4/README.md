## Optional Exercise 4: Implementing a Simple Shopping Cart Feature using Redux

In this exercise, you’ll learn how to use Redux to manage the state of a shopping cart in a React app. We'll track the items added to the cart, display the total number of items and cost, and allow users to add or remove items. You’ll also learn how to persist the cart state across page reloads.

### Step 1: Install Redux and React-Redux
First, we need to install Redux and the React bindings for Redux:

```bash
yarn add redux react-redux
```

### Step 2: Create a Redux Store

In Redux, the store holds all the state for your application. Create a `store.js` file and set up the basic Redux store.

```javascript
import { createStore } from 'redux';
import cartReducer from './reducers/cartReducer';

const store = createStore(cartReducer);

export default store;
```

### Step 3: Set Up Cart Actions

Actions are how we tell Redux what we want to do with our state. Create a file called `actions/cartActions.js` and define the following actions:

```javascript
export const addToCart = (product) => {
  return {
    type: 'ADD_TO_CART',
    payload: product
  };
};

export const removeFromCart = (productId) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: productId
  };
};
```

### Step 4: Create a Reducer

Reducers specify how the state changes in response to actions. Create `reducers/cartReducer.js` and handle the logic for adding and removing items from the cart.

```javascript
const initialState = {
  cartItems: [],
  total: 0
};

const cartReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TO_CART':
      const updatedCart = [...state.cartItems, action.payload];
      return {
        ...state,
        cartItems: updatedCart,
        total: state.total + action.payload.price
      };

    case 'REMOVE_FROM_CART':
      const filteredCart = state.cartItems.filter(item => item.id !== action.payload);
      const removedItem = state.cartItems.find(item => item.id === action.payload);
      return {
        ...state,
        cartItems: filteredCart,
        total: state.total - removedItem.price
      };

    default:
      return state;
  }
};

export default cartReducer;
```

### Step 5: Connect Redux to React

In `App.js`, import the `Provider` component from `react-redux` and wrap your app so that Redux is available throughout the component tree.

```javascript
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>My E-commerce Cart</h1>
        {/* Components */}
      </div>
    </Provider>
  );
}

export default App;
```

### Step 6: Dispatch Actions from Components

In your components (e.g., `ProductCard.js`), use the `useDispatch` and `useSelector` hooks to dispatch actions and access the cart state.

```javascript
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};
```

### Step 7: Display Cart Information

Create a `ShoppingCart.js` component that displays the total number of items and total cost, using `useSelector` to access the state.

```javascript
import { useSelector } from 'react-redux';

const ShoppingCart = () => {
  const cartItems = useSelector(state => state.cartItems);
  const total = useSelector(state => state.total);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>Total Items: {cartItems.length}</p>
      <p>Total Cost: ${total.toFixed(2)}</p>
    </div>
  );
};
```

### Step 8: Persist Cart State

To persist the cart state across page reloads, you can use localStorage in combination with Redux middleware. Set up persistence by loading and saving the state in `store.js`.

```javascript
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cartState', serializedState);
  } catch (e) {
    console.error(e);
  }
};

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('cartState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

const store = createStore(cartReducer, loadState());

store.subscribe(() => {
  saveState(store.getState());
});
```

### Final Notes:
- You’ve now set up a simple shopping cart with Redux, handling actions for adding and removing items, and persisting the state across reloads.
- **Debugging Tip:** Use Redux DevTools in the browser to track and debug state changes. You can visualize actions and state transformations, making it easier to catch bugs in the flow.

This exercise should help you understand Redux’s workflow, from managing state through reducers and actions to connecting the state to the React components.