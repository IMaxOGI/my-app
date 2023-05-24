import { createSelector } from 'reselect'
import { RootState } from '../store';
import { Product } from "../slices/products";

const getProductsList = (state: RootState) => state.products.list;

const getSelectedType = (_state: RootState, selectedType: string) => selectedType;

const getProductsInOrder = (_state: RootState, _selectedType: string, productsInOrder: Product[]) => productsInOrder;

export const getFilteredProducts = createSelector(
    [getProductsList, getSelectedType],
    (list: Product[], selectedType: string) => {
        if (selectedType === "") return list;
        return list.filter(product => product.type === selectedType);
    }
);

export const getFilteredProductsByOrders = createSelector(
    [getProductsList, getSelectedType, getProductsInOrder],
    (list: Product[], selectedType: string, productsInOrder: Product[]) => {
        let filteredList = list.filter(product => productsInOrder?.some(order => order.order === product.order));

        if (selectedType !== "") {
            filteredList = filteredList.filter(product => product.type === selectedType);
        }

        return filteredList;
    }
);

