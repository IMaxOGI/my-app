import { createSelector } from 'reselect'
import { RootState } from '../store';
import { Product } from "../slices/products";

// функция получения списка всех продуктов
const getProductsList = (state: RootState) => state.products.list;

// функция получения выбранного типа
const getSelectedType = (_state: RootState, selectedType: string) => selectedType;

const getProductsInOrder = (_state: RootState, _selectedType: string, productsInOrder: Product[]) => productsInOrder;

// селектор для получения отфильтрованных по типу продуктов
export const getFilteredProducts = createSelector(
    [getProductsList, getSelectedType],
    (list: Product[], selectedType: string) => {
        if (selectedType === "") return list;
        return list.filter(product => product.type === selectedType);
    }
);

// селектор для получения отфильтрованных по типу и заказам продуктов
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

