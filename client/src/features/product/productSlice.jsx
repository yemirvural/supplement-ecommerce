import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    aroma: "Biskuvi",
    size: "400G",
    piece: 1,
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        updateAroma: (state, action) => {
            state.aroma = action.payload
        },
        updateSize: (state, action) => {
            state.size = action.payload
        },
        updatePiece: (state, action) => {
            state.piece = action.payload
        }
    },
})


export const { updateAroma, updateSize, updatePiece } = productSlice.actions

export default productSlice.reducer