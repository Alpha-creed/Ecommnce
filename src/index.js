import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Head from './Components/Header'
import Tabs from './Components/Tabs';
import Home from "./pages/Home"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Head />
  </React.StrictMode>
);

