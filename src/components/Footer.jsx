import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="container-fluid bg-orange text-black py-5">
      <div className="row">
        <div className="col-md-12">
          <h2 className="fs-3 text-center mb-4">About Book-Binge</h2>
          <p className="text-center fs-5 fw-bold">
            A venture of VEDAS CORP, est. 2018 Kitabay.com is a Jaipur based startup promoting sustainable and affordable reading. We are an online bookstore that takes immense pride in curating an extensive collection of original books, both new and pre-loved. Our mission is to make quality literature accessible without burdening the reader's pocket.{' '}
            <a href="https://kitabay.com/pages/about-us" className="text-decoration-none text-black">Know More</a>
          </p>
        </div>
      </div>
      <div className="row py-5">
        <div className="col-md-6">
          <h2 className="fs-3 text-center">Follow Us</h2>
          <div className="d-flex justify-content-center">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="me-3">
              <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="me-3">
              <FontAwesomeIcon icon={faTwitter} size="3x" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} size="3x" />
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <h2 className="fs-3 text-center">Environmental Impact</h2>
          <ul className="list-unstyled d-flex justify-content-center fs-5">
            <li className="me-4">
              <img src="https://cdn.shopify.com/s/files/1/0302/6927/6291/files/trees.png?v=1697272086" alt="tree" className="img-fluid" style={{ width: '100px' }} />
              <strong className="d-block text-center">0.0106 Tree(s)</strong>
            </li>
            <li className="me-4">
              <img src="https://cdn.shopify.com/s/files/1/0302/6927/6291/files/co2.png?v=1697272086" alt="co2" className="img-fluid" style={{ width: '100px' }} />
              <strong className="d-block text-center">1.41Kg of CO2 Emission</strong>
            </li>
            <li>
              <img src="https://cdn.shopify.com/s/files/1/0302/6927/6291/files/water.png?v=1697272086" alt="water" className="img-fluid" style={{ width: '100px' }} />
              <strong className="d-block text-center">176Liters of Water</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
