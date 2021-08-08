import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ProductProvider } from './context/product-context';
import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from './context/cart-context';

ReactDOM.render(
  <React.StrictMode>
      <Router>
        <ProductProvider>
            <CartProvider>
                <App />
            </CartProvider>
        </ProductProvider>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);