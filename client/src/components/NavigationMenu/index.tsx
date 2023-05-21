import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Products from "../Products";
import Orders from "../Orders";

const NavigationMenu: React.FC = () => {
    const location = useLocation();
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
                        <li className={`navigation-menu__item ${location.pathname === '/' ? 'active' : ''}`}>
                            <Link to="/">Приход</Link>
                        </li>
                        <li className={`navigation-menu__item ${location.pathname === '/about' ? 'active' : ''}`}>
                            <Link to="/about">Группы</Link>
                        </li>
                        <li className={`navigation-menu__item ${location.pathname === '/contact' ? 'active' : ''}`}>
                            <Link to="/contact">Продукты</Link>
                        </li>
                        <li className={`navigation-menu__item ${location.pathname === '/users' ? 'active' : ''}`}>
                            <Link to="/users">Пользователи</Link>
                        </li>
                        <li className={`navigation-menu__item ${location.pathname === '/settings' ? 'active' : ''}`}>
                            <Link to="/settings">Настройки</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="col-md-10">
                <div className="navigation-menu__content flex-grow-1">
                    <Routes>
                        <Route path="/" element={<Products />} />
                        <Route path="/about" element={<Orders />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default NavigationMenu;
