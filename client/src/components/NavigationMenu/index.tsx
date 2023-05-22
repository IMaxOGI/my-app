import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Products from "../Products";
import Orders from "../Orders";
import {useSelector} from "react-redux";
import {RootState} from "../../services/store";

const NavigationMenu: React.FC = () => {
    const location = useLocation();
    const allProducts = useSelector((state: RootState) => state.products.list);

    return (
        <div className="navigation-menu row">
            <div className="col-md-2">
                <nav className="navigation-menu__navbar d-flex flex-column align-items-center">
                    <div className="navigation-menu__avatar rounded-circle mb-4 mt-5">
                       <span className="position-absolute bottom-0 end-0 p-1 bg-white border border-light rounded-circle">
                            <i className="bi bi-gear-fill text-dark"></i>
                        </span>
                    </div>
                    <ul className="navigation-menu__items w-100 list-unstyled">
                        <li className={`navigation-menu__item ${location.pathname === '/orders' ? 'active' : ''}`}>
                            <Link to="/orders">Приход</Link>
                        </li>
                        <li className={`navigation-menu__item ${location.pathname === '/products' ? 'active' : ''}`}>
                            <Link to="/products">Продукты</Link>
                        </li>
                        <li className={`navigation-menu__item ${location.pathname === '/' ? 'active' : ''}`}>
                            <Link to="/">Группы</Link>
                        </li>
                        <li className={`navigation-menu__item ${location.pathname === '/' ? 'active' : ''}`}>
                            <Link to="/">Пользователи</Link>
                        </li>
                        <li className={`navigation-menu__item ${location.pathname === '/' ? 'active' : ''}`}>
                            <Link to="/">Настройки</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="col-md-10">
                <div className="navigation-menu__content flex-grow-1">
                    <Routes>
                        <Route path="/orders" element={<Orders />} />
                        <Route path="/products" element={<Products productsInOrder={allProducts} />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default NavigationMenu;
