/* eslint-disable linebreak-style */
import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/ProductSlice';
import productsReducer from '../features/ProductsSlice';
import userReducer from '../features/UserSlice';

export const store = configureStore({
    reducer: {
        product: productReducer,
        products: productsReducer,
        users: userReducer
    },
});
