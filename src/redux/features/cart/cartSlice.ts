/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { IProduct } from "@/types/globalTypes";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

interface ICart {
    products: IProduct[];
}

const initialState: ICart = {
    products: []
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IProduct>) => {
            const existingProduct = state.products.find(product => product._id = action.payload._id);
            if (!existingProduct) {
                state.products.push({ ...action.payload, quantity: 1 });
            } else {
                existingProduct.quantity = existingProduct.quantity! + 1;
            }
        },
        addOne: (state, action: PayloadAction<IProduct>) => {
            const cartProduct = state.products.find(product => product._id = action.payload._id);
            if (!cartProduct) {
                console.log('Error');
            } else {
                cartProduct.quantity = cartProduct.quantity! + 1;
            }
        },
        removeOne: (state, action: PayloadAction<IProduct>) => {
            const existingProduct = state.products.find(product => product._id = action.payload._id);
            if (existingProduct && existingProduct.quantity! > 0) {
                existingProduct.quantity = existingProduct.quantity! - 1;
            } else {
                state.products = state.products.filter(product => product._id !== action.payload._id);
            }
        },
        removeFromCart: (state, action: PayloadAction<IProduct>) => {
            state.products = state.products.filter(product => product._id !== action.payload._id);
        }
    },
});

export const { addToCart, removeFromCart, removeOne, addOne } = cartSlice.actions;

export default cartSlice.reducer;