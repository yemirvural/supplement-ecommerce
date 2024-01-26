import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../features/product/productSlice'
import cartReducer from '../features/product/cartSlice'
import cartDataReducer from '../features/cart/cartData'
import slidingCartReducer from '../features/cart/slidingCart'

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    cartData: cartDataReducer,
    slidingCart: slidingCartReducer,
  },
})