import { configureStore } from '@reduxjs/toolkit';
import productsReducer, { ProductsState } from './slices/products';
import ordersReducer, { OrdersState } from './slices/orders';

export interface RootState {
    products: ProductsState;
    orders: OrdersState;
}

const store = configureStore({
    reducer: {
        products: productsReducer,
        orders: ordersReducer
    },
});

export default store;
