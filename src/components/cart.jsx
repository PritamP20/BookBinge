import React, { useEffect } from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, setCartItems } = useCart(); 

  
  // useEffect(() => {
  //   const storedCartItems = localStorage.getItem('cartItems');
  //   if (storedCartItems) {
  //     setCartItems(JSON.parse(storedCartItems));
  //   }
  // }, [setCartItems]);

  // const handleDelete = (index) => {
  //   removeFromCart(index); 
  // };
  
  // useEffect(() => {
  //   localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
  // }, [cartItems]);

  return (
    <div>
      <center>
        <h2 className='fs-2 fw-medium text-decoration-underline'>Cart</h2>
      </center>
      {cartItems.length === 0 ? (
        <p style={{ textAlign: 'center' }}>Cart is empty. Please shop.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} style={{ padding: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src={item.url}
                  alt={item.name}
                  style={{ width: '90px', marginRight: '10px' }}
                />
                <div>
                  <div>{item.name}</div>
                  <div>Rs. {item.disPrice}</div>
                </div>
                <button
                  className="btn btn-danger"
                  style={{ margin: '12px' }}
                  onClick={() => removeFromCart(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div style={{ textAlign: 'center' }}>
        <button className="btn btn-primary" >
          Buy
        </button>
      </div>
    </div>
  );
};

export default Cart;
