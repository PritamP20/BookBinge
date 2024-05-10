import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'; // Correct import for brand icons
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Correct import for solid icons
import './Footer.css'; // Ensure CSS path is correct

const Footer = () => (
  <div>
    <div className="grid grid-padding page-width" style={{ marginBottom: '0px', borderBottom: '1px solid #C7D7CA' }}>
      <div className="w-100 border-r-3 p-30" style={{ backgroundColor: '#e7926c' }}>
        <p style={{ textAlign: 'center', paddingTop: '2.8rem', marginTop: '0px' }}>
          <img src="images.jpeg" alt="Footer Image" />
        </p>
        <h3 style={{ textAlign: 'center', color: 'white' }}>
          "Indulge in Affordable Reads, Discover New Adventures."
        </h3>
      </div>
    </div>

    <div className="footer"> {/* Footer container */}
      <div className="footer-section"> {/* Email subscription section */}
        <h3>Subscribe to our Newsletter</h3>
        <form className="footer-form"> {/* Form with email input and submit button */}
          <input
            type="email"
            placeholder="Enter your email"
            required
          />
          <button type="submit">
            <FontAwesomeIcon icon={faArrowRight} /> {/* Arrow icon */}
          </button>
        </form>
      </div>

      <div className="footer-section"> {/* Social media contact section */}
        <h3>Contact Us on Social Media</h3>
        <div className="footer-social-icons"> {/* Social media icons */}
          <a href="https://www.instagram.com/" className="footer-social-link"> {/* Instagram */}
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://twitter.com/" className="footer-social-link"> {/* Twitter */}
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.youtube.com/" className="footer-social-link"> {/* YouTube */}
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
