import React from 'react';
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', height: '100%', width: '100%', overflow: 'hidden', display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)' }}>
      <Link to="/genre/merbooks">
        <div style={{ backgroundColor: '#f4f1ee' }}>
          <img style={{ color: '#000000', cursor: 'pointer' }} src="//kitabay.com/cdn/shop/files/kapda410.png?v=1709291960" alt="icon" ></img>
          <label>Merchs</label>
        </div>
      </Link>

      <Link to="/genre/horror">
        <div style={{ backgroundColor: '#f4f1ee' }}>
          <img style={{ color: '#000000', cursor: 'pointer' }} src="https://kitabay.com/cdn/shop/files/Horror_d7281c5e-a090-462f-9348-a26a613d4bdf.png?v=1699968239" alt="" />
          <label>Horror</label>
        </div>
      </Link>

      <Link to="/genre/youngadults">
        <div style={{ backgroundColor: '#f4f1ee' }}>
          <img style={{ color: '#000000', cursor: 'pointer' }} src="//kitabay.com/cdn/shop/files/Young-Adult_7053d8a0-73ba-4c13-9277-5a7f522fff0e.png?v=1708167698" alt="" />
          <label>Young_Adult</label>
        </div>
      </Link>

      <Link to="/genre/fantasy">
        <div style={{ backgroundColor: '#f4f1ee' }}>
          <img style={{ color: '#000000', cursor: 'pointer' }} src="https://kitabay.com/cdn/shop/files/Fantasy_acd2c861-2295-42fd-b2ef-ff39915d9785.png?v=1699968239" alt="icon" ></img>
          <label>Fantasy</label>
        </div>
      </Link>

      <Link to="/genre/sciencefiction">
        <div style={{ backgroundColor: '#f4f1ee' }}>
          <img style={{ color: '#000000', cursor: 'pointer' }} src="https://kitabay.com/cdn/shop/files/Sci-Fi.png?v=1699968240" alt="icon"  ></img>
          <label>Science_Fiction</label>
        </div>
      </Link>

      <Link to="/genre/bookcombos">
        <div style={{ backgroundColor: '#f4f1ee' }}>
          <img style={{ color: '#000000', cursor: 'pointer' }} src="https://kitabay.com/cdn/shop/files/Non-Fiction.png?v=1699967994" alt="icon" ></img>
          <label>Book Combos</label>
        </div>
      </Link>

      <Link to="/genre/hindibooks">
        <div style={{ backgroundColor: '#f4f1ee' }}>
          <img style={{ color: '#000000', cursor: 'pointer' }} src="	https://kitabay.com/cdn/shop/files/Hindi_c248160e-b823-4912-b7d4-594a063c4738.png?v=1699968239" alt="icon" ></img>
          <label>Hindi Books</label>
        </div>
      </Link>

      <Link to="/genre/classicnovel">
        <div style={{ backgroundColor: '#f4f1ee' }}>
          <img style={{ color: '#000000', cursor: 'pointer' }} src="//kitabay.com/cdn/shop/files/kapda410.png?v=1709291960" alt="icon" ></img>
          <label>Classic_Novels</label>
        </div>
      </Link>

      <Link to="/genre/romance">
        <div style={{ backgroundColor: '#f4f1ee' }}>
          <img style={{ color: '#000000', cursor: 'pointer' }} src="https://kitabay.com/cdn/shop/files/Romance_2_ff774fdb-6cfe-4eb5-8bfe-f447aee148eb.png?v=1709291997" alt="icon" ></img>
          <label>Romance</label>
        </div>
      </Link>

      <Link to="/genre/mystery">
        <div style={{ backgroundColor: '#f4f1ee' }}>
          <img style={{ color: '#000000', cursor: 'pointer' }} src="	https://kitabay.com/cdn/shop/files/Mystery_c01884b8-8ae9-462f-840b-7b9fa7e84362.png?v=1699968159" alt="icon" ></img>
          <label>Mystery</label>
        </div>
      </Link>

      <Link to="/genre/adventure">
        <div style={{ backgroundColor: '#f4f1ee' }}>
          <img style={{ color: '#000000', cursor: 'pointer' }} src="https://kitabay.com/cdn/shop/files/adventure_2ed3fe7d-f11e-4808-b346-3564fa98d3ed.png?v=1699968239" alt="icon" ></img>
          <label>Adventure</label>
        </div>
      </Link>

      <Link to="/genre/philosophy">
        <div style={{ backgroundColor: '#f4f1ee' }}>
          <img style={{ color: '#000000', cursor: 'pointer' }} src="https://kitabay.com/cdn/shop/files/khopdi.png?v=1707193632" alt="icon" ></img>
          <label>Philosophy</label>
        </div>
      </Link>

    </div>
  )
}

export default Category;
