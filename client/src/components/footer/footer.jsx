import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>

    <div className="footer">
        <div className="footer-row">
          <div className="footer-column">
            <h3>Contact Us</h3>
            <ul>
              <li>Address: Delhi, India</li>
              <li>Phone: 0123456789</li>
              <li>Email: ourEmail@gmail.com</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Links</h3>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Write to us</a></li>
            </ul>
          </div>
        </div>
      <div className="footer-row">
        <p>&copy; 2023 LogiGo All rights reserved.</p>
      </div>
    </div>
    </footer>
  );
}

export default Footer;
