import {createSlice, PayloadAction} from "@reduxjs/toolkit";
// import axios from 'axios';

interface Price {
    value: number;
    symbol: string;
    isDefault: number;
}

interface Guarantee {
    start: string;
    end: string;
}

interface Product {
    id: number;
    serialNumber: number;
    isNew: number;
    photo: string;
    title: string;
    type: string;
    specification: string;
    guarantee: Guarantee;
    price: Price[];
    order: number;
    date: string;
}

const initialProducts: Product[] = [
    {
        id: 1,
        serialNumber: 1234,
        isNew: 1,
        photo: "pathToFile.jpg",
        title: "Product 1",
        type: "Mouse",
        specification: "Specification 1",
        guarantee: {
            start: "2017-06-29 12:09:33",
            end: "2017-06-29 12:09:33",
        },
        price: [
            { value: 100, symbol: "USD", isDefault: 0 },
            { value: 2600, symbol: "UAH", isDefault: 1 },
        ],
        order: 1,
        date: "2017-06-29 12:09:33",
    },
    {
        id: 2,
        serialNumber: 1234,
        isNew: 1,
        photo: "pathToFile.jpg",
        title: "Product 1",
        type: "Mouse",
        specification: "Specification 1",
        guarantee: {
            start: "2017-06-29 12:09:33",
            end: "2017-06-29 12:09:33",
        },
        price: [
            { value: 100, symbol: "USD", isDefault: 0 },
            { value: 2600, symbol: "UAH", isDefault: 1 },
        ],
        order: 2,
        date: "2017-06-29 12:09:33",
    },
    {
        id: 7,
        serialNumber: 1234,
        isNew: 1,
        photo: "pathToFile.jpg",
        title: "Product 7",
        type: "Monitors",
        specification: "Specification 1",
        guarantee: {
            start: "2017-06-29 12:09:33",
            end: "2017-06-29 12:09:33",
        },
        price: [
            { value: 100, symbol: "USD", isDefault: 0 },
            { value: 2600, symbol: "UAH", isDefault: 1 },
        ],
        order: 4,
        date: "2017-06-29 12:09:33",
    },
    {
        id: 8,
        serialNumber: 1234,
        isNew: 1,
        photo: "pathToFile.jpg",
        title: "Product 8",
        type: "Monitors",
        specification: "Specification 1",
        guarantee: {
            start: "2017-06-29 12:09:33",
            end: "2017-06-29 12:09:33",
        },
        price: [
            { value: 100, symbol: "USD", isDefault: 0 },
            { value: 2600, symbol: "UAH", isDefault: 1 },
        ],
        order: 4,
        date: "2017-06-29 12:09:33",
    },
    {
        id: 9,
        serialNumber: 1234,
        isNew: 1,
        photo: "pathToFile.jpg",
        title: "Product 9",
        type: "Keyboard",
        specification: "Specification 1",
        guarantee: {
            start: "2017-06-29 12:09:33",
            end: "2017-06-29 12:09:33",
        },
        price: [
            { value: 100, symbol: "USD", isDefault: 0 },
            { value: 2600, symbol: "UAH", isDefault: 1 },
        ],
        order: 5,
        date: "2017-06-29 12:09:33",
    },
    {
        id: 10,
        serialNumber: 1234,
        isNew: 1,
        photo: "pathToFile.jpg",
        title: "Product 10",
        type: "Keyboard",
        specification: "Specification 1",
        guarantee: {
            start: "2017-06-29 12:09:33",
            end: "2017-06-29 12:09:33",
        },
        price: [
            { value: 100, symbol: "USD", isDefault: 0 },
            { value: 2600, symbol: "UAH", isDefault: 1 },
        ],
        order: 5,
        date: "2017-06-29 12:09:33",
    },
];

interface ProductsState {
    list: Product[];
    loading: boolean;
    error: string | null;
}

const initialState: ProductsState = {
    list: initialProducts,
    loading: false,
    error: null,
};

// export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
//     const response = await axios.get('endpoint');
//     return response.data as Product[];
// })

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        deleteProduct: (state, action: PayloadAction<number>) => {
            state.list = state.list.filter(product => product.id !== action.payload);
        },
    },
    // extraReducers: (builder) => {
    //     builder.addCase(fetchProducts.pending, (state) => {
    //         state.loading = true;
    //     });
    //     builder.addCase(fetchProducts.fulfilled, (state, action) => {
    //         state.loading = false;
    //         state.list = action.payload;
    //     });
    //     builder.addCase(fetchProducts.rejected, (state, action) => {
    //         state.loading = false;
    //         state.error = action.error.message;
    //     });
    // }
});

export default productsSlice.reducer;
export type { Product, Price };
export const {deleteProduct} = productsSlice.actions
// export const {fetchProducts} = productsSlice.actions;
export type {ProductsState}
