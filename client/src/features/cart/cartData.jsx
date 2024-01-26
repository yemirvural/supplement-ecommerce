import { createSlice } from "@reduxjs/toolkit";


const calcProductQuantity = (cartProducts) => {
    let value = 0;
    cartProducts.map(el => value += el.amount);
    return value;
}

const initialState = {
    cartProducts: [],
    productQuantity: 0,
};

export const carDataSlice = createSlice({
    name: 'cartData',
    initialState,
    reducers: {
        updateProducts: (state, action) => {
            state.cartProducts = action.payload
            state.productQuantity = calcProductQuantity(state.cartProducts)
        },
        updateProduct: (state, action) => {
            const product = state.cartProducts.find(item => item.id === action.payload.id)
            product.amount = action.payload.amount
            state.productQuantity = calcProductQuantity(state.cartProducts)
        },
        addProduct: (state, action) => {
            state.cartProducts.push(action.payload)
            state.productQuantity = calcProductQuantity(state.cartProducts)
        },
        deleteProduct: (state, action) => {
            const filteredProducts = state.cartProducts.filter(item => item.id !== action.payload)
            state.cartProducts = filteredProducts
            state.productQuantity = calcProductQuantity(state.cartProducts)
        },
    },
})

export const { updateProducts, deleteProduct, updateProduct, addProduct } = carDataSlice.actions

export default carDataSlice.reducer