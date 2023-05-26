import { createSlice, PayloadAction  } from "@reduxjs/toolkit";
// import axios from 'axios';

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
    {
        id: 4,
        title: "Order 4",
        date: "2017-06-29 12:09:33",
        description: "desc",
        products: [7, 8],
    },
    {
        id: 5,
        title: "Order 5",
        date: "2017-06-29 12:09:33",
        description: "desc",
        products: [9, 10],
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

// export const fetchOrders = createAsyncThunk('orders/fetchOrders', async () => {
//     const response = await axios.get('endpoint');
//     return response.data as Order[];
// })

const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        deleteOrder: (state, action: PayloadAction<number>) => {
            state.list = state.list.filter(order => order.id !== action.payload);
        },
    },
    // extraReducers: (builder) => {
    //     builder.addCase(fetchOrders.pending, (state) => {
    //         state.loading = true;
    //     });
    //     builder.addCase(fetchOrders.fulfilled, (state, action) => {
    //         state.loading = false;
    //         state.list = action.payload;
    //     });
    //     builder.addCase(fetchOrders.rejected, (state, action) => {
    //         state.loading = false;
    //         state.error = action.error.message;
    //     });
    // }
});

export default ordersSlice.reducer;
export const {deleteOrder} = ordersSlice.actions
export type {OrdersState}
