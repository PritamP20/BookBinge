import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <>
    <div>
      <div className="brick__block__text text--neutral" style={{ backgroundColor: '#c17130', minHeight: 'calc(281px + var(--menu-height))', fontSize:'30px' }} data-overflow-frame="">
        <div className="brick__block__text__inner">
          <div className="text__standard text-left" data-overflow-content="">
            <div className="flexed">
              <p className="standard__kicker aos-init aos-animate" data-aos="hero" id="hero1" data-aos-anchor="[data-section-id='template--16765706961119__3d14398a-ba61-494c-bfda-78fa32b54ee2']" data-aos-order="1" style={{fontSize:'40px',fontWeight:'bold'}}>
                About
              </p>
              <h2 className="standard__heading heading-size-9 aos-init aos-animate" data-aos="hero" id="hero1" data-aos-anchor="[data-section-id='template--16765706961119__3d14398a-ba61-494c-bfda-78fa32b54ee2']" data-aos-order="2">
                Book-Binge
              </h2>
            </div>
            <div className="rte body-size-3 columns--1 aos-init aos-animate" data-aos="hero" data-aos-anchor="[data-section-id='template--16765706961119__3d14398a-ba61-494c-bfda-78fa32b54ee2']" data-aos-order="3">
              <p>A venture of VEDAS CORP, est. 2018 Kitabay.com is a Jaipur based startup promoting sustainable and affordable reading. We are an online bookstore that takes immense pride in curating an extensive collection of original books, both new and pre-loved. Our mission is to make quality literature accessible without burdening the reader's pocket. <span style={{ marginLeft: '5px' }}><a href="https://kitabay.com/pages/about-us">Know More</a></span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="brick__block__text brick__block__text--transparent text--neutral" data-overflow-frame="" style={{ '--bg': '', minHeight: 'calc(275px + var(--menu-height))' }}>
      <div className="brick__block__text__inner">
        <div className="text__standard text-left" data-overflow-content="">
          <div className="flexed"></div>
          <div className="rte body-size-5 columns--1 aos-init aos-animate" data-aos="hero" data-aos-anchor="[data-section-id='template--16765706961119__3d14398a-ba61-494c-bfda-78fa32b54ee2']" data-aos-order="3">
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p><strong><span className="For every">For every</span>&nbsp;&nbsp;<span className="usebook">used book</span>&nbsp;&nbsp;<span className="For every">you buy</span>,&nbsp;&nbsp;<span className="usebook">You Save:</span></strong></p>
            <ul>
              <li>
                <img src="https://cdn.shopify.com/s/files/1/0302/6927/6291/files/trees.png?v=1697272086" alt="icon" style={{ display: 'inline-block', marginRight: '6px', width: '16px', height: '16px' }} />
                <strong>0.0106 Tree(s)</strong>
              </li>
              <li>
                <img src="https://cdn.shopify.com/s/files/1/0302/6927/6291/files/co2.png?v=1697272086" alt="icon" style={{ display: 'inline-block', marginRight: '6px', width: '16px', height: '16px' }} />
                <strong>1.41Kg of CO2 Emission</strong>
              </li>
              <li>
                <img src="https://cdn.shopify.com/s/files/1/0302/6927/6291/files/water.png?v=1697272086" alt="icon" style={{ display: 'inline-block', marginRight: '6px', width: '16px', height: '16px' }} />
                <strong>176Liters of Water</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

   
          <div className="flexed">
           
            <a href="https://www.instagram.com/" target="blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x"  style={{ marginRight: '10px', color: '#000' }} />
            </a>
            
            <a href="https://twitter.com/" target="blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" style={{ marginRight: '10px', color: '#000' }} />
            </a>
           
            <a href="https://www.youtube.com/" target="blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube}  size="2x" style={{ marginRight: '10px', color: '#000', }} />
            </a>
          </div>
 </>
    
  );
};

export default Footer;
