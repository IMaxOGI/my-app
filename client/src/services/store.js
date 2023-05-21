import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/products';
import ordersReducer from './slices/orders';

export default configureStore({
    reducer: {
        products: productsReducer,
        orders: ordersReducer
    },
});
