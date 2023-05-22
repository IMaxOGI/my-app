import React from 'react';
import { Product } from '../../services/slices/products';

type ProductsProps = {
    productsInOrder: Product[];
};

const Products: React.FC<ProductsProps> = ({ productsInOrder }) => {
    return (
        <div>
            {productsInOrder.map(product => (
                <div key={product.id}>
                    <p>Product name: {product.title}</p>
                    {/* Display other product details as needed */}
                </div>
            ))}
        </div>
    )
}

export default Products;
