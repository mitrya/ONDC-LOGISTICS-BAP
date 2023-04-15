import React from 'react'
import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import fontawesome from '@fortawesome/fontawesome'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import  '@fortawesome/fontawesome-free-solid'




import  './contact.styles.css'

function Contact() {

    function MyForm() {
        return (
            <>
                <form action ="/user/contactMessage" method="post">
                    <input type="text" name="name" placeholder="Your Name" />
                    <input type="text" name="email" placeholder="Your Email" />
                    <input type="text" name="message" placeholder="Message" />
                    <input type="submit" id="message-submit" value="SEND MESSAGE" />
                </form>
            </>
        )
    }

    return (
        <>
            <div className='container-fluid box mt-3 mb-2 mx-5'>
                <div className='contact-header'>
                    Contact Us:
                </div>
                <div class="contact-box">
                    <section id="contact">
                        <div id="contact-header">
                            <span>Add Contact Icon</span>
                            <span>Contact</span>
                        </div>
                        <div id="flex_user">
                            <div id="message-section">
                                {MyForm()}
                            </div>
                            <div id="other-info">
                                <div id="connect">
                                    <span>Get in touch</span>
                                    <div id="connect-text">
                                    <p>While we are good with smoke signals, there are simpler ways for us to get in touch and answer your questions :)</p>
                                    </div>
                                </div>
                                <div id="myaddress">
                                    <p>Our Address</p>
                                        <div id="contact-location">
                                            <span>Add Location Icon</span>
                                            <span>&nbsp;Delhi, India</span>
                                        </div>
                
                                        <div id="contact-mobile">
                                            <span>Add Mobile Phone Icon</span>
                                            <span>&nbsp;0123456789</span>
                                        </div>
                
                                        <div id="contact-email">
                                            <span>Add Email Icon</span>
                                            <span>&nbsp;ourEmail@gmail.com</span>
                                        </div>
                                </div>
                            </div>
                       </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default Contact;