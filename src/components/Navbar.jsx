import React from 'react';
import { Link } from 'react-router-dom';
import { FcMoneyTransfer } from "react-icons/fc";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar" style={{ padding: '20px', height: '200px' }}>
        <div className="container-xl">
          <div className="d-flex justify-content-start align-items-center" style={{marginLeft:'0px'}}>
            <Link to="/seller" className="text-decoration-none">
              <button className="btn btn-outline-primary me-2 btn-lg" type="button" style={{ color: 'black', height: '200px', fontSize: '80px', padding: '20px', fontWeight: 'bold', marginLeft: '0px' }}>Sell</button>
            </Link>
            <FcMoneyTransfer style={{ width: '100px', height: '100px', marginBottom: '0px' }} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
