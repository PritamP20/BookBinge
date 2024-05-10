import React from 'react';
import { useLocation } from 'react-router-dom';
import { useCart } from './CartContext';
import { FaRegSmile } from 'react-icons/fa';
import Cart from './cart';

const Portfolio = () => {
  const location = useLocation(); // Extract email from state
  const userEmail = location.state?.email || 'User'; // Default value if state is undefined

  const { cartItems } = useCart(); // Get cart data from context

  // Example data for books sold
  const booksSoldCount = 10; // Sample data (replace with real data if needed)

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Welcome, {userEmail}! 😊</h2>

      <div style={{ fontSize: '1.2rem' }}>
        <p>
          <FaRegSmile /> 
          Books Sold: {booksSoldCount}
        </p>
      </div>

      <h3>Your Cart</h3> {/* Title for the cart section */}

      {/* Displaying the Cart component */}
      <Cart /> {/* Includes the Cart component in the Portfolio page */}
    </div>
  );
};

export default Portfolio;
