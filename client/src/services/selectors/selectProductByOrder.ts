import { RootState } from '../store';

export const selectProductsByOrderId = (state: RootState, orderId: number) => {
    const order = state.orders.list.find(order => order.id === orderId);
    if (!order) {
        return [];
    }

    const products = order.products.map(productId =>
        state.products.list.find(product => product.id === productId)
    ).filter(Boolean);

    return products;
}
