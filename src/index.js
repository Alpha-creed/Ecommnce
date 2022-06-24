import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Head from './Components/Header'
import Intro from './Components/Home/Intro';
import FProduct from './Components/Home/FProduct';
import Custom from './Components/Home/Custom';
import Card from './Components/Home/Card';
import Footer from './Components/Home/Footer';
import About from './pages/About';
import TabsConst from './Components/Tabs';
import End from './Components/End'
import Product from './pages/Product';
import ProdDisplay from './Components/Product/ProdDisplay';
import Cart from './Components/Cart/Cart';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Product />
  </React.StrictMode>
);

