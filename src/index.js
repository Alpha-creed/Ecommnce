import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Head from './Components/Header'
import Tabs from './Components/Tabs';
import Home from "./Components/Intro"
import Intro from './Components/Intro';
import FProduct from './Components/FProduct';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FProduct />
  </React.StrictMode>
);

