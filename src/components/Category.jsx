import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    to: '/genre/merbooks',
    imgSrc: 'https://kitabay.com/cdn/shop/files/kapda410.png?v=1709291960',
    alt: 'Merchs',
    label: 'Merchs',
  },
  {
    to: '/genre/horror',
    imgSrc: 'https://kitabay.com/cdn/shop/files/Horror_d7281c5e-a090-462f-9348-a26a613d4bdf.png?v=1699968239',
    alt: 'Horror',
    label: 'Horror',
  },
  {
    to: '/genre/youngadults',
    imgSrc: 'https://kitabay.com/cdn/shop/files/Young-Adult_7053d8a0-73ba-4c13-9277-5a7f522fff0e.png?v=1708167698',
    alt: 'Young Adult',
    label: 'Young Adult',
  },
  {
    to: '/genre/fantasy',
    imgSrc: 'https://kitabay.com/cdn/shop/files/Fantasy_acd2c861-2295-42fd-b2ef-ff39915d9785.png?v=1699968239',
    alt: 'Fantasy',
    label: 'Fantasy',
  },
  {
    to: '/genre/sciencefiction',
    imgSrc: 'https://kitabay.com/cdn/shop/files/Sci-Fi.png?v=1699968240',
    alt: 'Science Fiction',
    label: 'Science Fiction',
  },
  {
    to: '/genre/classicnovel',
    imgSrc: 'https://kitabay.com/cdn/shop/files/kapda410.png?v=1709291960',
    alt: 'Classic Novels',
    label: 'Classic Novels',
  },
  {
    to: '/genre/romance',
    imgSrc: 'https://kitabay.com/cdn/shop/files/Romance_2_ff774fdb-6cfe-4eb5-8bfe-f447aee148eb.png?v=1709291997',
    alt: 'Romance',
    label: 'Romance',
  },
  {
    to: '/genre/mystery',
    imgSrc: 'https://kitabay.com/cdn/shop/files/Mystery_c01884b8-8ae9-462f-840b-7b9fa7e84362.png?v=1699968159',
    alt: 'Mystery',
    label: 'Mystery',
  },
  {
    to: '/genre/adventure',
    imgSrc: 'https://kitabay.com/cdn/shop/files/adventure_2ed3fe7d-f11e-4808-b346-3564fa98d3ed.png?v=1699968239',
    alt: 'Adventure',
    label: 'Adventure',
  },
  {
    to: '/genre/philosophy',
    imgSrc: 'https://kitabay.com/cdn/shop/files/khopdi.png?v=1707193632',
    alt: 'Philosophy',
    label: 'Philosophy',
  },
];

const Category = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        {categories.slice(0, 5).map((category, index) => (
          <div
            key={index}
            className="col-2" // Ensures 5 columns per row
            style={{ marginBottom: '15px' }}
          >
            <Link to={category.to} className="card-link">
              <div className="card text-center" style={{ border: 'none', width: '100px' }}>
                <img
                  className="card-img-top img-fluid"
                  src={category.imgSrc}
                  alt={category.alt}
                />
                <div className="card-body">
                  <label
                    className="card-title"
                    style={{ fontSize: '10px', fontWeight: 'bold' }}
                  >
                    {category.label}
                  </label>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="row justify-content-center">
        {categories.slice(5, 10).map((category, index) => (
          <div
            key={index}
            className="col-2" // Ensures 5 columns per row
            style={{ marginBottom: '15px' }}
          >
            <Link to={category.to} className="card-link">
              <div className="card text-center" style={{ border: 'none', width: '100px' }}>
                <img
                  className="card-img-top img-fluid"
                  src={category.imgSrc}
                  alt={category.alt}
                />
                <div className="card-body">
                  <label
                    className="card-title"
                    style={{ fontSize: '10px', fontWeight: 'bold' }}
                  >
                    {category.label}
                  </label>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
