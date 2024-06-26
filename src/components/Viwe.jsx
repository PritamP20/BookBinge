import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useCart } from './CartContext';

const Viwe = () => {
  const location = useLocation();
  const { books } = location.state;
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(books);
  };

  return (
    <div className='row min-vw-100 container' style={{ fontFamily: 'serif' }}>
      <div className='col-lg-6 col-md-6 d-flex justify-content-center align-content-center align-items-center ' style={{ backgroundColor: `${books.colour}` }}>
        <div className="col-lg-8 col-md-10 col-12 d-flex justify-content-center align-content-center align-items-center">
          <img className="col-lg-12 col-md-12 col-sm-5 col-7 p-2" src={books.url} alt={books.name} />
        </div>
      </div>
      <div className='col d-flex flex-column gap-lg-5 gap-md-3 gap-sm-1 gap-0 justify-content-center'>
        <div>
          <span className='fs-2 fw-medium text-decoration-underline'>{books.name}</span>
        </div>
        <div className='d-flex flex-column'>
          <span className='fs-4 fw-semibold'>About:</span>
          <span className='fs-4'>{books.detail}</span>
        </div>
        <div>
          <span className='fw-semibold fs-4'>Author:</span>
          <span className='fs-4'>{books.by}</span>
        </div>
        <div className='fs-5'>
          <span className='fw-semibold fs-4'>Price:</span>
          <span className='fs-4'>Rs. {books.disPrice}</span>
        </div>
        <span>
          <button type="button" className="btn fs-5 btn-info" onClick={handleAddToCart}>Add To Cart</button>
        </span>
      </div>
    </div>
  );
};

export default Viwe;
