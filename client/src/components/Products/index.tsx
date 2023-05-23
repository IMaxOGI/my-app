import React from 'react';
import { Product } from '../../services/slices/products';
import {useSelector} from "react-redux";
import {RootState} from "../../services/store";

type ProductsProps = {
    productsInOrder?: Product[];
};

const Products: React.FC<ProductsProps> = ({ productsInOrder }) => {
    const products = useSelector((state: RootState) => state.products.list);

    if (!productsInOrder) {
        return null;
    }

    return (
        <div className="container p-5">
            <h1 className="mb-5">Продукты \ {products.length}</h1>
            <div className="row">
                {productsInOrder.map(product => (
                    <div className="col-lg-12 order-card" key={product.id}>
                        <div className="card mb-4">
                            <div className="card-body d-flex align-items-center">
                                <div className="card-body d-flex align-items-center justify-content-between">
                                    <p className="card-text mb-0">{product.title}</p>
                                    <p className="card-text mb-0">{product.serialNumber}</p>
                                    <p className="card-text mb-0">{product.isNew ? 'Да' : 'Нет'}</p>
                                    <p className="card-text mb-0">{product.photo}</p>
                                    <p className="card-text mb-0">{product.type}</p>
                                    <p className="card-text mb-0">{product.specification}</p>
                                    <p className="card-text mb-0">{product.guarantee.start}</p>
                                    <p className="card-text mb-0">{product.guarantee.end}</p>
                                    <p className="card-text mb-0">{product.price.map(price => `${price.value} ${price.symbol}`).join(", ")}</p>
                                    <p className="card-text mb-0">{product.order}</p>
                                    <p className="card-text mb-0">{product.date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Products;
