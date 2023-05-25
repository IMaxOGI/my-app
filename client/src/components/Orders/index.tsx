import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../services/store';
import { Product, Price } from '../../services/slices/products';
import { deleteOrder } from '../../services/slices/orders';
import Modal from '../Modal';
import ProductCard from "../ProductsCard";

const Orders: React.FC = () => {
    const dispatch = useDispatch();
    const orders = useSelector((state: RootState) => state.orders.list);
    const products = useSelector((state: RootState) => state.products.list);
    const [showDetails, setShowDetails] = useState<Record<string, boolean>>({});
    const [showModal, setShowModal] = useState(false);
    const [modalOrder, setModalOrder] = useState<any | null>(null);

    useEffect(() => {
        const keysToUpdate = Object.keys(showDetails).filter(key =>
            showDetails[key] && !products.find(product => product.order === parseInt(key))
        );

        if (keysToUpdate.length > 0) {
            const newShowDetails = { ...showDetails };
            keysToUpdate.forEach(key => {
                newShowDetails[key] = false;
            });

            setShowDetails(newShowDetails);
        }
    }, [products]);

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
                                    <div className="card-body col-md-6 d-flex align-items-center justify-content-between ">
                                        {!showDetails[order.id] && (
                                            <div>
                                                <h5 className="card-title flex-grow-1 mb-0">{title}</h5>
                                            </div>
                                        )}
                                        <div>
                                            <p className="card-text mb-0">{productsInOrder.length} продуктов</p>
                                        </div>
                                        <div>
                                            <p className="card-text mb-0">{order.date}</p>
                                        </div>
                                        {!showDetails[order.id] && (
                                            <div>
                                                <p className="card-text mb-0">{totalCostUSD} USD, {totalCostUAH} UAH</p>
                                            </div>
                                        )}
                                        {!showDetails[order.id] && (
                                            <div>
                                                <button className="btn" onClick={() => handleDelete(order)}><i
                                                    className="bi bi-trash-fill"></i></button>
                                            </div>
                                        )}
                                        <div>
                                            <button
                                                className="btn btn-primary mr-2"
                                                onClick={() => toggleDetails(order.id)}
                                                disabled={productsInOrder.length === 0}
                                            >
                                                {showDetails[order.id] ? 'Скрыть' : 'Подробнее'}
                                            </button>
                                        </div>
                                    </div>
                                    {showDetails[order.id] && (
                                        <div className="order-details">
                                            {productsInOrder.map(product => <ProductCard key={product.id} product={product} />)}
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
