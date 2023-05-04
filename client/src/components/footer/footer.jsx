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
            <li><a className='footer-link' href="/about">About Us</a></li>
            <li><a className='footer-link' href="/contact">Feedback/Inquire</a></li>
            <li><a className='footer-link' href="/contact">Terms & Conditons</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <ul>
          <link rel="icon" href="favicon.ico"/>
            <li><a className='footer-link footer-icon' href="https://www.facebook.com/"><i class="fa fa-facebook-square fa-1.75x" aria-hidden="true"></i></a></li>
            <li><a className='footer-link footer-icon' href="https://www.youtube.com/"><i class="fa fa-youtube-square fa-1.75x" aria-hidden="true"></i></a></li>
            <li><a className='footer-link footer-icon' href="https://github.com/mitrya/ONDC-LOGISTICS-BAP"><i class="fa fa-github-square fa-1.75x" aria-hidden="true"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-links">
        <p>&copy; 2023 LogiGo All rights reserved.</p>
      </div>
    </div>
  );
}

// function Footer() {
//   return (
//     <footer>

//     <div className="footer">
//        <div className='footer-content'>
        
//        </div>
//         <div className="footer-row">
//           <div className="footer-column">
//             <h3>Contact Us</h3>
//             <ul>
//               <li>Address: Delhi, India</li>
//               <li>Phone: 0123456789</li>
//               <li>Email: ourEmail@gmail.com</li>
//             </ul>
//           </div>
//           <div className="footer-column">
//             <h3>Links</h3>
//             <ul>
//               <li><a href="/about">About Us</a></li>
//               <li><a href="/contact">Write to us</a></li>
//             </ul>
//           </div>
//           <div className="footer-column">
//               <h3>Follow Us</h3>
//               <ul>
//                 <link rel="icon" href="favicon.ico" />
//                 <li><a href="https://www.facebook.com/"><i class="fa fa-facebook-square fa-1.75x" aria-hidden="true"></i></a></li>
//                 <li><a href="https://www.youtube.com/"><i class="fa fa-youtube-square fa-1.75x" aria-hidden="true"></i></a></li>
//                 <li><a href="https://github.com/mitrya/ONDC-LOGISTICS-BAP"><i class="fa fa-github-square fa-1.75x" aria-hidden="true"></i></a></li> 
//               </ul>
//         </div>
//         </div>
     
//       <div className="footer-row">
//         <p>&copy; 2023 LogiGo All rights reserved.</p>
//       </div>
//     </div>
//     </footer>
//   );
// }

export default Footer;
