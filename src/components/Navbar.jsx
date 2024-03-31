import React from 'react';
import { Link } from 'react-router-dom';
import { FcMoneyTransfer } from "react-icons/fc";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from './CartContext'; 


const Navbar = () => {
  const { cartItems } = useCart();
  return (

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
  <Link to="/" className="nav-link" aria-current="page">Home</Link>
</li>
            <li class="nav-item">
              <a class="nav-link" href="/seller">seller</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
           
        <li className="nav-item">
        <Link to="/cart" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
  <FaShoppingCart style={{ fontSize: '24px' }} />
  <span className="badge bg-secondary">{cartItems.length}</span>
</Link>


              
            </li>

        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
</nav >
  );
};

export default Navbar;
