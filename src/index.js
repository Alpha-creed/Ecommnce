import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Head from './Components/Header'
import Tabs from './Components/Tabs';
import Intro from './Components/Intro';
import FProduct from './Components/FProduct';
import Custom from './Components/Custom';
import Card from './Components/Card';
import Footer from './Components/Footer';
import Home from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

