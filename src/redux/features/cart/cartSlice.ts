/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { IProduct } from "@/types/globalTypes";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

interface ICart {
    products: IProduct[];
    total: number
}

const initialState: ICart = {
    products: [],
    total: 0
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IProduct>) => {
            const existingProduct = state.products.find(product => product._id === action.payload._id);
            if (!existingProduct) {
                state.products.push({ ...action.payload, quantity: 1 });
            } else {
                existingProduct.quantity = existingProduct.quantity! + 1;
            }
            state.total += action.payload.price;
        },
        addOne: (state, action: PayloadAction<IProduct>) => {
            const cartProduct = state.products.find(product => product._id === action.payload._id);
            if (!cartProduct) {
                console.log('Error');
            } else {
                cartProduct.quantity = cartProduct.quantity! + 1;
            }
            state.total += action.payload.price;
        },
        removeOne: (state, action: PayloadAction<IProduct>) => {
            const existingProduct = state.products.find(product => product._id === action.payload._id);
            if (existingProduct && existingProduct.quantity! > 1) {
                existingProduct.quantity = existingProduct.quantity! - 1;
            } else {
                state.products = state.products.filter(product => product._id !== action.payload._id);
            }
            state.total -= action.payload.price;
        },
        removeFromCart: (state, action: PayloadAction<IProduct>) => {
            state.products = state.products.filter(product => product._id !== action.payload._id);

            state.total -= action.payload.price * action.payload.quantity!;
        }
    },
});

export const { addToCart, removeFromCart, removeOne, addOne } = cartSlice.actions;

export default cartSlice.reducer;