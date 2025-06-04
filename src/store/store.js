import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Any time the store changes, save the cart’s “items” to sessionStorage also this is part of the requirement for state management / redux toolkit 
store.subscribe(() => {
  const state = store.getState();
  sessionStorage.setItem("cart", JSON.stringify(state.cart.items));
});

export default store;
