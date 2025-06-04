import { createSelector } from '@reduxjs/toolkit';
//grabs the array of cart items 
export const selectCartItems = (state) => state.cart.items;
//the total item count (the sum)
export const selectCartCount = createSelector([selectCartItems], (items) =>
  items.reduce((sum, item) => sum + item.quantity, 0)
);
//the total price 
export const selectCartTotal = createSelector([selectCartItems], (items) =>
  items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)
);
