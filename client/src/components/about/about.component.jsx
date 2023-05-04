import React from 'react'
import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MultiStepForm from '../multiStepForm/multiStepForm.component';
import  './about.styles.css'


function About() {
  return (
    <div className="about">
      <div className="hero">
        <h1 className="hero-text">
          Welcome to <span>LogiGO</span>
        </h1>
        <p className="hero-subtext">
          Your reliable and efficient courier service provider. Visit our website on the Open Network for Digital Commerce (ONDC) Network!
        </p>
      </div>
      <div class="image-container" style={{ 
        backgroundImage: `url("https://howtostartabusinessindubai.com/wp-content/uploads/2020/07/logistics-business.jpg")` 
      }}>
        {/* <img src="https://howtostartabusinessindubai.com/wp-content/uploads/2020/07/logistics-business.jpg" alt="your-image"></img> */}
        <div className="formContainer">
        <MultiStepForm></MultiStepForm>

        </div>
      </div>

      <div className="content">
        <Container>
          <h2 className="section-header">Our Mission</h2>
          <p>
            At ONDC Logistics, our mission is to provide reliable, efficient, and sustainable shipping solutions to our customers, while delivering exceptional customer service and a seamless user experience. We are constantly evolving and innovating to stay ahead of the ever-changing logistics landscape, and we are proud to be a trusted partner for businesses and individuals who value speed, reliability, and sustainability in their shipping operations.
          </p>
          <div className="image">
      <img src="https://th.bing.com/th/id/OIP.447YziGb5D5LTmhWH7AceAHaEU?pid=ImgDet&rs=1" alt="Mission image" />
    </div>

          <h2 className="section-header">Our Team</h2>
          <p>
            Our team of experienced logistics professionals is dedicated to delivering exceptional service with a customer-centric approach. We take pride in our ability to offer customized shipping solutions that meet the unique needs of each customer, whether it's a small package or a large shipment. With our extensive network of shipping partners and carriers, we can offer competitive rates and reliable transit times to destinations across the globe.
          </p>
          <div className="image">
      <img src="https://th.bing.com/th/id/OIP.e1me_6IwMOcMZVH_MUk_9gHaFb?pid=ImgDet&rs=1" alt="Team image" />
    </div>

          <h2 className="section-header">Our Platform</h2>
          <p>
            Our user-friendly platform is designed to make shipping easy and convenient for our customers. With just a few clicks, you can easily create shipments, track packages in real-time, manage your shipping preferences, and access detailed shipping analytics. We also offer flexible payment options and transparent pricing, so you can have peace of mind knowing that you are getting the best value for your shipping needs.
          </p>
          <div className="image">
      <img src="https://my1wifi.b-cdn.net/wp-content/uploads/2021/04/What-to-know-about-Internet-Speed-while-Working-from-Home-768x528.jpg" alt="Platform image" />
    </div>
          <h2 className="section-header">Our Commitment to Sustainability</h2>
          <p>
            At ONDC Logistics, we are committed to sustainability and environmental responsibility. We strive to minimize our carbon footprint by optimizing shipping routes, using eco-friendly packaging materials, and promoting responsible shipping practices. We also offer innovative solutions, such as consolidated shipping and smart packaging, to reduce waste and promote sustainable shipping practices.
          </p>
          
        </Container>
      </div>
      
    </div>
  );
}

export default About;
