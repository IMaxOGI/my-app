import { RootState } from '../store';

export const selectProductsByType = (state: RootState, productType: string) => {
    const products = state.products.list.filter(product => product.type === productType);
    return products;
}

export const selectProductsByPrice = (state: RootState, price: number) => {
    const products = state.products.list.filter(product => product.price.some(p => p.value <= price));
    return products;
}

export const selectProductsAlphabetically = (state: RootState) => {
    const products = [...state.products.list].sort((a, b) => a.title.localeCompare(b.title));
    return products;
}
