import React, { useState } from 'react';
import {deleteProduct, Product} from '../../services/slices/products';
import {useDispatch, useSelector} from "react-redux";
import { RootState } from "../../services/store";
import {
    getFilteredProducts,
    getFilteredProductsByOrders
} from "../../services/selectors/filterProducts";

type ProductsProps = {
    productsInOrder?: Product[];
};

const Products: React.FC<ProductsProps> = ({ productsInOrder }) => {
    const dispatch = useDispatch();
    const [selectedType, setSelectedType] = useState<string>("");

    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedType(event.target.value);
    };

    const filteredProducts = useSelector((state: RootState) => getFilteredProductsByOrders(state, selectedType, productsInOrder || []));

    if (!filteredProducts) {
        return null;
    }

    return (
        <div className="p-5">
            <div className="d-flex align-items-center mb-5">
                <div>
                    <h1 className="mb-0">Продукты \ {filteredProducts.length}</h1>
                </div>
                <div className="ps-4 mt-2">
                    <select className="form-select" aria-label="Default select example" onChange={handleSelect}>
                        <option selected value="">Select type</option>
                        <option value="Mouse">Mouse</option>
                        <option value="Monitors">Monitors</option>
                        <option value="Keyboard">Keyboards</option>
                    </select>
                </div>
            </div>
            <div className="row">
                {filteredProducts.map(product => {
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
                                        <p className="card-text mb-0">{product.type}</p>
                                        <p className="card-text mb-0">{product.specification}</p>
                                        <div className="d-flex flex-column">
                                            <div className="d-flex">
                                                <p className="text-secondary pe-2 mb-0">c</p>
                                                <p className="card-text mb-0">{product.guarantee.start}</p>
                                            </div>
                                            <div className="d-flex">
                                                <p className="text-secondary pe-2 mb-0">по</p>
                                                <p className="card-text mb-0">{product.guarantee.end}</p>
                                            </div>
                                        </div>
                                        <p className="card-text mb-0">{product.price.map(price => `${price.value} ${price.symbol}`).join(", ")}</p>
                                        <p className="card-text mb-0">{product.order}</p>
                                        <p className="card-text mb-0">{product.date}</p>
                                        <button className="btn" onClick={handleDelete}><i
                                            className="bi bi-trash-fill"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Products;
