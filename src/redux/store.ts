import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from './features/cart/cartSlice'
import productSliceReducer from "./features/products/productSlice";
import { api } from './api/apiSlice';

const store = configureStore({
    reducer: {
        cart: cartSliceReducer,
        product: productSliceReducer,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;