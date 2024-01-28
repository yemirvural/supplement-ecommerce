import { createSlice } from "@reduxjs/toolkit";


const calcProductQuantity = (state) => {
    let value = 0;
    state.allProducts.map(el => value += Number(el.amount));
    return value;
}

const calculateCartStep = (state) => {
    let lastItem = state.cartStages.find(el => state.totalPrice < el.value)
    if (!lastItem) return null;
    return lastItem;
}

const calculateSubTotalPrice = (cartProducts) => {
    let value = 0;
    cartProducts.map(item => value += (item.price * item.amount));
    return value;
}
const calculateTotalDiscount = () => {
    let discountCost = 0;
    return discountCost > 0 ? `-${discountCost}` : discountCost;
}
const calculateTotalPrice = (cartProducts) => {
    let totalPrice = calculateSubTotalPrice(cartProducts);
    let cargoCost = 0;
    return (totalPrice + cargoCost) - calculateTotalDiscount();
}

const updateGifts = (state) => {
    let stageIndex = state.cartStages.findLastIndex(el => state.totalPrice >= el.value) + 1
    return state.cartStages.slice(0, stageIndex);
};

const updateCartState = (state) => {
    state.totalPrice = calculateTotalPrice(state.cartProducts);
    state.nextStage = calculateCartStep(state);
    state.gifts = updateGifts(state);
    state.allProducts = [...state.cartProducts, ...state.gifts]
    state.productQuantity = calcProductQuantity(state);
};

const initialState = {
    cartProducts: [],
    allProducts: [],
    productQuantity: 0,
    totalPrice: 0,
    nextStage: { name: "Pocket Shaker", value: 1000 },
    gifts: [],
    cartStages: [
        {
            id: "958",
            title: "POCKET SHAKER",
            subTitle: "500 ML",
            image: "https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/57b6cc14-53a3-4aba-9fb6-c26aa2fdcefc/image_180.webp",
            price: 0,
            grayPrice: 119,
            amount: 1,
            value: 1000
        },
        {
            id: "568",
            title: "PROTEİNOCEAN HAVLU",
            subTitle: "",
            image: "https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/a3828351-69ff-40ab-8bd4-00631c9e352d/image_180.webp",
            price: 0,
            grayPrice: 129,
            amount: 1,
            value: 2500
        },
        {
            id: "462",
            title: "RELENTLESS GYM HANDBAG",
            subTitle: "",
            image: "https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/5c9b28de-7b3e-4d96-b959-f00366ecf2f1/image_180.webp",
            price: 0,
            grayPrice: 249,
            amount: 1,
            value: 4000
        },
    ]
};

export const carDataSlice = createSlice({
    name: 'cartData',
    initialState,
    reducers: {
        updateProducts: (state, action) => {
            state.cartProducts = action.payload
            updateCartState(state);
        },
        updateProduct: (state, action) => {
            let product = state.cartProducts.find((el) => el.id === action.payload.id && el.aroma === action.payload.aroma && el.size === action.payload.size) // Paid Products
            if (action.payload.value) {
                product = state.cartStages.find((el) => el.id === action.payload.id && el.aroma === action.payload.aroma && el.size === action.payload.size) // Gift Products
            }   
            product.amount = action.payload.count
            updateCartState(state);
        },
        addProduct: (state, action) => {
            state.cartProducts.push(action.payload)
            updateCartState(state);
        },
        deleteProduct: (state, action) => {
            const filteredProducts = state.cartProducts.filter(item => item.id !== action.payload)
            state.cartProducts = filteredProducts
            updateCartState(state);
        },
    },
})

export const { updateProducts, deleteProduct, updateProduct, addProduct } = carDataSlice.actions

export default carDataSlice.reducer