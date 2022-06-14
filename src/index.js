import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Head from './Components/Header'
import Tabs from './Components/Tabs';
import Home from "./Components/Intro"
import Intro from './Components/Intro';
import FProduct from './Components/FProduct';
import Ap from './Components/try';
import Custom from './Components/Custom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Custom />
  </React.StrictMode>
);

