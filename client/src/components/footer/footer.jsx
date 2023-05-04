import React from 'react';
import './Footer.css';

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
            <li><a href="/contact">Terms &</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <ul>
          <link rel="icon" href="favicon.ico" />
            <li><a href="https://www.facebook.com/"><i class="fa fa-facebook-square fa-1.75x" aria-hidden="true"></i></a></li>
            <li><a href="https://www.youtube.com/"><i class="fa fa-youtube-square fa-1.75x" aria-hidden="true"></i></a></li>
            <li><a href="https://github.com/mitrya/ONDC-LOGISTICS-BAP"><i class="fa fa-github-square fa-1.75x" aria-hidden="true"></i></a></li>
            
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
