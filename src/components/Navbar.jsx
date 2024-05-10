import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa'; // Ensure the correct imports
import { IoPersonCircleOutline } from "react-icons/io5";

import { useCart } from './CartContext'; // Check that CartContext is correctly defined and imported

const Navbar = () => {
  const { cartItems } = useCart(); // Verify that useCart is valid

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'rgb(227, 173, 87)' }}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Navbar</Link> {/* Check that 'Link' is imported */}
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/seller" className="nav-link">Seller</Link> {/* Check for correct path */}
            </li>
            {/* <li className="nav-item">
              <Link to="/cart" style={{ display: 'flex', alignItems: 'center' }}>
                <FaShoppingCart style={{ fontSize: '24px' }} />
                <span className="badge bg-secondary">{cartItems.length}</span> {/* Ensure cartItems is valid */}
              {/* </Link>
            </li> */}
            <li className="nav-item"> 
              <Link to="/signin" style={{ display: 'flex', alignItems: 'center' }}>
                <IoPersonCircleOutline style={{ fontSize: '24px', }} /> {/* Ensure correct icon import */}
              </Link>
            </li>
          </ul>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
