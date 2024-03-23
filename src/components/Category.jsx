import React from 'react';
import { Link } from "react-router-dom";

const Category = () => {
  return (

    <div className='mt-5' style={{ display: 'flex', justifyContent: 'center', gap: '20px', height: '100%', width: '100%', overflow: 'hidden', display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)' }}>
      <Link to="/genre/merbooks"/>
        <div style={{ backgroundColor: '#f4f1ee' }}>
          <img style={{ color: '#000000', cursor: 'pointer' }} src="//kitabay.com/cdn/shop/files/kapda410.png?v=1709291960" alt="icon" ></img>
          <label>Merchs</label>

        </div>
        <div className="col-md-2">
          <Link to="/genre/horror" className="card-link">
            <div className="card text-center">
              <img className="card-img-top" src="https://kitabay.com/cdn/shop/files/Horror_d7281c5e-a090-462f-9348-a26a613d4bdf.png?v=1699968239" alt="Horror" />
              <div className="card-body">
                <label className="card-title">Horror</label>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-2">
          <Link to="/genre/youngadults" className="card-link">
            <div className="card text-center">
              <img className="card-img-top" src="//kitabay.com/cdn/shop/files/Young-Adult_7053d8a0-73ba-4c13-9277-5a7f522fff0e.png?v=1708167698" alt="Young_Adult" />
              <div className="card-body">
                <label className="card-title">Young_Adult</label>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-2">
          <Link to="/genre/fantasy" className="card-link">
            <div className="card text-center">
              <img className="card-img-top" src="https://kitabay.com/cdn/shop/files/Fantasy_acd2c861-2295-42fd-b2ef-ff39915d9785.png?v=1699968239" alt="Fantasy" />
              <div className="card-body">
                <label className="card-title">Fantasy</label>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-2">
          <Link to="/genre/sciencefiction" className="card-link">
            <div className="card text-center">
              <img className="card-img-top" src="https://kitabay.com/cdn/shop/files/Sci-Fi.png?v=1699968240" alt="Science_Fiction" />
              <div className="card-body">
                <label className="card-title">Science_Fiction</label>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-2">
          <Link to="/genre/bookcombos" className="card-link">
            <div className="card text-center">
              <img className="card-img-top" src="https://kitabay.com/cdn/shop/files/Non-Fiction.png?v=1699967994" alt="Book Combos" />
              <div className="card-body">
                <label className="card-title">Book Combos</label>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-2">
          <Link to="/genre/classicnovel" className="card-link">
            <div className="card text-center">
              <img className="card-img-top" src="//kitabay.com/cdn/shop/files/kapda410.png?v=1709291960" alt="Classic_Novels" />
              <div className="card-body">
                <label className="card-title">Classic_Novels</label>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-2">
          <Link to="/genre/romance" className="card-link">
            <div className="card text-center">
              <img className="card-img-top" src="https://kitabay.com/cdn/shop/files/Romance_2_ff774fdb-6cfe-4eb5-8bfe-f447aee148eb.png?v=1709291997" alt="Romance" />
              <div className="card-body">
                <label className="card-title">Romance</label>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-2">
          <Link to="/genre/mystery" className="card-link">
            <div className="card text-center">
              <img className="card-img-top" src="https://kitabay.com/cdn/shop/files/Mystery_c01884b8-8ae9-462f-840b-7b9fa7e84362.png?v=1699968159" alt="Mystery" />
              <div className="card-body">
                <label className="card-title">Mystery</label>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-2">
          <Link to="/genre/adventure"   className="card-link">
            <div className="card text-center">
              <img className="card-img-top" src="https://kitabay.com/cdn/shop/files/adventure_2ed3fe7d-f11e-4808-b346-3564fa98d3ed.png?v=1699968239" alt="icon" />
              <div className="card-body">
                <label className="card-title">Adventure</label>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-2">
          <Link to="/genre/philosophy"   className="card-link">
            <div className="card text-center">
              <img className="card-img-top" src="https://kitabay.com/cdn/shop/files/khopdi.png?v=1707193632" alt="icon" />
              <div className="card-body">
                <label className="card-title">Philosophy</label>
              </div>
            </div>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Category;
