import React, { createContext, useContext, useState,useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // useEffect(() => {
  //   const storedCartItems = localStorage.getItem('cartItems');
  //   if (storedCartItems) {
  //     try {
  //       setCartItems(JSON.parse(storedCartItems));
  //     } catch (error) {
  //       console.error('Error parsing cart items from local storage:', error);
  //     }
  //   }
  // }, []);

  const addToCart = (item) => {
    const newItem = { ...item, imageUrl: item.url };
    const updatedCartItems = [...cartItems, newItem];
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
  };

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
