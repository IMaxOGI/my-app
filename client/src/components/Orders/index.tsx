import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import {RootState} from "../../services/store";

const Orders: React.FC = () => {
    const dispatch = useDispatch();
    const products = useSelector((state: RootState) => state.products.list);

    console.log(products)
    return (
        <div></div>
    )
}

export default Orders