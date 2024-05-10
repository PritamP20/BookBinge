import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { CartProvider } from './components/CartContext.jsx';
// import { AuthProvider } from './components/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AuthProvider>  */}
      <CartProvider> {/* Cart context depends on user authentication */}
        <App />
      </CartProvider>
    {/* </AuthProvider> */}
  </React.StrictMode>
);
