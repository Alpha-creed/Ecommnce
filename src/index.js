import React from 'react';
import ReactDOM from 'react-dom/client';
import Head from './Components/Header';
import FProduct from './Components/Home/FProduct';
import Intro from './Components/Home/Intro';
import ProdDisplay from './Components/Product/ProdDisplay';
import TabsL from './Components/Tabs';
import TabsR from './Components/Tabss';
import Test from './Components/Test';
import About from './pages/About';
import Home from './pages/Home';
import Product from './pages/Product'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Head/>
  </React.StrictMode>
);

