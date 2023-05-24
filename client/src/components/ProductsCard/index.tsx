import React from 'react';
import {deleteProduct, Product} from '../../services/slices/products';
import {useDispatch} from "react-redux";

type ProductCardProps = {
    product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteProduct(product.id));
    };

    return (
        <div className="col-lg-12 order-card" key={product.id}>
            <div className="card mb-4">
                <div className="card-body d-flex align-items-center">
                    <div className="card-body d-flex align-items-center justify-content-between">
                        <p className="card-text mb-0">{product.photo}</p>
                        <div className="d-flex flex-column">
                            <p className="card-text mb-0">{product.title}</p>
                            <p className="card-text mb-0 text-secondary">{product.serialNumber}</p>
                        </div>
                        <p className="card-text mb-0">{product.isNew ? "Новый" : "Б/У"}</p>
                        <p className="card-text mb-0">{product.specification}</p>
                        <button className="btn" onClick={handleDelete}><i
                            className="bi bi-trash-fill"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;
