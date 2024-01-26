import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartProducts: [],
};

export const carDataSlice = createSlice({
    name: 'cartData',
    initialState,
    reducers: {
        updateProducts: (state, action) => {
            state.cartProducts = action.payload
        },
        updateProduct: (state, action) => {
            const product = state.cartProducts.find(item => item.id === action.payload.id)
            product.amount = action.payload.amount
        },
        /*
        addProduct: (state, action) => {
            state.cartProducts = action.payload
        },
        */
        deleteProduct: (state, action) => {
            const filteredProducts = state.cartProducts.filter(item => item.id !== action.payload)
            state.cartProducts = filteredProducts
        },
    },
})

export const { updateProducts, deleteProduct, updateProduct } = carDataSlice.actions

export default carDataSlice.reducer