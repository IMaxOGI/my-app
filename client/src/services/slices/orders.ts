import { createSlice } from "@reduxjs/toolkit";

interface Order {
    id: number;
    title: string;
    date: string;
    description: string;
    products: number[];
}

export const orders: Order[] = [
    {
        id: 1,
        title: "Order 1",
        date: "2017-06-29 12:09:33",
        description: "desc",
        products: [1, 2],
    },
    {
        id: 2,
        title: "Order 2",
        date: "2017-06-29 12:09:33",
        description: "desc",
        products: [3, 4],
    },
    {
        id: 3,
        title: "Order 3",
        date: "2017-06-29 12:09:33",
        description: "desc",
        products: [5, 6],
    },
];

interface OrdersState {
    list: Order[];
    loading: boolean;
    error: string | null;
}

const initialState: OrdersState = {
    list: orders,
    loading: false,
    error: null,
};

const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {},
});

export default ordersSlice.reducer;
