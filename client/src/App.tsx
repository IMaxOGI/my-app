import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router } from 'react-router-dom';
import TopMenu from "./components/TopMenu";
import NavigationMenu from "./components/NavigationMenu";

function App() {
    return (
        <Router>
            <div className="app">
                <TopMenu/>
                <NavigationMenu/>
            </div>
        </Router>
    );
}

export default App;
