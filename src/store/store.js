import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'

// Factory function (for tests)
export function createStore() {
  return configureStore({
    reducer: {
      cart: cartReducer
    }
  })
}

// Default instance (for the app)
const store = createStore()
export default store
