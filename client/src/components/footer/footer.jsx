import React from 'react';
import './footer.component.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
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
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-links">
        <p>&copy; 2023 LogiGo All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
