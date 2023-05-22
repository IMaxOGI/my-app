import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../services/store';
import { Product, Price } from '../../services/slices/products';
import { deleteOrder } from '../../services/slices/orders';
import Products from '../Products';
import Modal from '../Modal';

const Orders: React.FC = () => {
    const dispatch = useDispatch();
    const orders = useSelector((state: RootState) => state.orders.list);
    const products = useSelector((state: RootState) => state.products.list);
    const [showDetails, setShowDetails] = useState<Record<string, boolean>>({});
    const [showModal, setShowModal] = useState(false);
    const [modalOrder, setModalOrder] = useState<any | null>(null);

    const toggleDetails = (id: number) => {
        setShowDetails((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const handleDelete = (order: any) => {
        setModalOrder(order);
        setShowModal(true);
    };

    const confirmDelete = () => {
        if (modalOrder) {
            dispatch(deleteOrder(modalOrder.id));
        }
        setShowModal(false);
    };

    return (
        <div className="container p-5">
            <h1 className="mb-5">Приход \ {orders.length}</h1>
            <div className="row">
                {orders.map((order) => {
                    const productsInOrder = products.filter(
                        (product) => product.order === order.id
                    );

                    const totalCostUSD = productsInOrder.reduce(
                        (total: number, product: Product) => {
                            const priceUSD = product.price.find(
                                (price: Price) => price.symbol === 'USD'
                            );
                            return total + (priceUSD ? priceUSD.value : 0);
                        },
                        0
                    );

                    const totalCostUAH = productsInOrder.reduce(
                        (total: number, product: Product) => {
                            const priceUAH = product.price.find(
                                (price: Price) => price.symbol === 'UAH'
                            );
                            return total + (priceUAH ? priceUAH.value : 0);
                        },
                        0
                    );

                    const title =
                        order.title.length > 30 ? order.title.substring(0, 27) + '...' : order.title;

                    return (
                        <div key={order.id} className="col-lg-12 order-card">
                            <div className="card mb-4">
                                <div className="card-body d-flex align-items-center">
                                    <div className="card-body d-flex align-items-center justify-content-between ">
                                        <div>
                                            <h5 className="card-title flex-grow-1 mb-0">{title}</h5>
                                        </div>
                                        <div>
                                            <p className="card-text mb-0">{productsInOrder.length} продуктов</p>
                                        </div>
                                        <div>
                                            <p className="card-text mb-0">{order.date}</p>
                                        </div>
                                        <div>
                                            <p className="card-text mb-0">{totalCostUSD} USD, {totalCostUAH} UAH</p>
                                        </div>
                                        <div>
                                            <button className="btn btn-danger" onClick={() => handleDelete(order)}>
                                                Удалить приход
                                            </button>
                                        </div>
                                        <div>
                                            <button
                                                className="btn btn-primary mr-2"
                                                onClick={() => toggleDetails(order.id)}
                                            >
                                                Подробнее
                                            </button>
                                        </div>
                                    </div>
                                    {showDetails[order.id] && (
                                        <div className="order-details">
                                            <Products productsInOrder={productsInOrder} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            {showModal && (
                <Modal
                    order={modalOrder}
                    confirmDelete={confirmDelete}
                    closeModal={() => setShowModal(false)}
                    showModal={showModal}
                />
            )}
        </div>
    );
};

export default Orders;
