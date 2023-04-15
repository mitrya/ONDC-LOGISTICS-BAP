import React from 'react'
import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import  './about.styles.css'

function About() {
    return (
        <div className='text mt-5 mx-5 font-weight-normal'>
            <div className='mb-3'>
                Welcome to ONDC Logistics, your reliable and efficient courier service provider based on the Open Network for Digital Commerce (ONDC)
                framework! We are committed to simplifying your logistics needs and providing seamless, end-to-end shipping solutions for businesses and individuals alike.
                At ONDC Logistics, we understand that shipping plays a critical role in today's fast-paced world of e-commerce and digital commerce. That's why we have built our platform on the ONDC framework,
                which allows us to leverage the latest technology and industry standards to provide an unparalleled shipping experience for our customers
            </div>
            <div className='mb-3'>
                Our team of experienced logistics professionals is dedicated to delivering exceptional service with a customer-centric approach. 
                We take pride in our ability to offer customized shipping solutions that meet the unique needs of each customer, whether it's a small package or a large shipment.
                With our extensive network of shipping partners and carriers, we can offer competitive rates and reliable transit times to destinations across the globe.
            </div>
            <div className="mb-3">
                Our user-friendly platform is designed to make shipping easy and convenient for our customers. With just a few clicks, 
                you can easily create shipments, track packages in real-time, manage your shipping preferences, and access detailed shipping analytics. 
                We also offer flexible payment options and transparent pricing, so you can have peace of mind knowing that you are getting the best value
                for your shipping needs.
            </div>
            <div className='mb-3'>
                At ONDC Logistics, we are committed to sustainability and environmental responsibility. We strive to minimize our carbon footprint by optimizing 
                shipping routes, using eco-friendly packaging materials, and promoting responsible shipping practices. We also offer innovative solutions, 
                such as consolidated shipping and smart packaging, to reduce waste and promote sustainable shipping practices.
            </div>
            <div>
                Our mission is to provide reliable, efficient, and sustainable shipping solutions to our customers, while delivering exceptional 
                customer service and a seamless user experience. We are constantly evolving and innovating to stay ahead of the ever-changing 
                logistics landscape, and we are proud to be a trusted partner for businesses and individuals who value speed, reliability, 
                and sustainability in their shipping operations.
            </div>
        </div>
    );
}

export default About;