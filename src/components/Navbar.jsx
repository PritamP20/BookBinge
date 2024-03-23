import React from 'react';
import { Link } from 'react-router-dom';
import { FcMoneyTransfer } from "react-icons/fc";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-orange" style={{ width: '100%', padding: '10px',  backgroundColor:'orange', justifyContent:'center'}}>
        <form className="container-fluid justify-content-start">
          <Link to="/seller">
          <button className="btn btn-outline-primary me-2 btn-lg" type="button" style={{ borderColor: 'orange', color: 'black', backgroundColor: '' ,width:'70px',height:'20px'}}>Sell</button>
          <FcMoneyTransfer  style={{gap:'4px',width:'30px',height:'60px',marginBottom:'0px'}}/>
          </Link>
        </form>
      </nav>
    </div>
  );
};

export default Navbar;
