import { createSlice } from "@reduxjs/toolkit";

const steps = ["info", "shipping", "payment"];

const initialState = {
    step: 'info',
    addressId: "",
};

export const productSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        updateStep: (state) => {
            const nextIndex = steps.indexOf(state.step) + 1;
            if(steps[nextIndex]){
                state.step = steps[nextIndex];
            }
        },
        updateAddress: (state, action) => {
            state.addressId = action.payload
        }
    },
})


export const { updateStep, updateAddress } = productSlice.actions

export default productSlice.reducer