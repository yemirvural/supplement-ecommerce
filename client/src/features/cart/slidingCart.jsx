import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isActive: false,
};

export const slidingCartSlice = createSlice({
    name: 'slidingCart',
    initialState,
    reducers: {
        openSlidingCart: (state) => {
            state.isActive = true
        },
        closeSlidingCart: (state) => {
            state.isActive = false
        },
    },
})

export const { openSlidingCart, closeSlidingCart } = slidingCartSlice.actions

export default slidingCartSlice.reducer