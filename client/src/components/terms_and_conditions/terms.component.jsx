import React from 'react'
import { useState,useEffect } from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import  '@fortawesome/fontawesome-free-solid'
import {Link} from 'react-router-dom';

import  './terms.styles.css'

function Terms() {
    return (
        <div class="writing-board-container">
            <h1 style={{fontFamily:'Roboto, sans-serif'}}>
            <b>Terms & Condition</b>
            </h1>
            
            <div>
            <p style={{fontFamily:'Roboto, sans-serif', fontSize:'20px', fontWeight:'400', margin: '13px'}}>
                Welcome to our package delivery website, which operates on the Ondc protocol. Before using our services, please carefully read the following terms and conditions. By accessing our website or using our services, you agree to be bound by these terms and conditions.
            </p>
            <ul id="terms" style={{listStyle:'none'}}>
                <li class="term">
                    <b>User Eligibility </b> 
                    <p>Our services are only available to individuals who are 18 years of age or older.
                     By using our website or services, you represent and warrant that you are at least 18 years old.</p>

                </li>
                <li class="term">
                    <b>Service Availability </b> 
                    <p>Our services are subject to availability, and we reserve the right to modify or discontinue our 
                        services at any time without notice. 
                        We also reserve the right to refuse service to anyone at any time for any reason.</p>
                </li>
                <li class="term">
                    <b>User Account</b> 
                    <p>To use our services, you may be required to create an account. You agree to provide accurate and complete information when creating your account, and you agree to keep your account information up-to-date. You are responsible for maintaining the confidentiality of your account login credentials and for all activities that occur under your account.
                     You agree to notify us immediately of any unauthorized use of your account or any other breach of security.</p>
                </li>
                <li class="term">
                    <b>Package Delivery </b> 
                    <p>Our website allows you to send and receive packages using the Ondc protocol.
                     You agree to comply with all applicable laws and regulations regarding package delivery, 
                     including but not limited to customs regulations and export controls.
                      You are solely responsible for the contents of any package you send or receive using our services.</p>
                </li>
                <li class="term">
                    <b>Payment</b> 
                    <p>Our services may require payment, and you agree to pay all fees and charges associated with your use
                         of our services. We may change our fees and charges at any time without notice.
                          If you dispute any charges, you must notify us in writing within 30 days of the date of the disputed 
                          charge. </p>
                </li>
                <li class="term">
                    <b>Intellectual Property </b>
                    <p> Our website and services contain proprietary content, including but not limited to text, graphics, logos, images, and software. 
                        You agree not to reproduce, modify, distribute, or otherwise use any of our proprietary content without 
                        our prior written consent.</p>
                </li>
                <li class="term">
                    <b>Disclaimer of Warranties </b> 
                    <p>Our services are provided on an "as is" and "as available" basis without warranties of any kind, 
                    either express or implied. We do not warrant that our services will be uninterrupted, error-free, or free 
                    from viruses or other harmful components.</p>
                </li>
                <li class="term">
                    <b>Limitation of Liability </b> 
                    <p>We shall not be liable for any direct, indirect, incidental, special, or consequential damages 
                    arising out of or in connection with your use of our website or services, including but not limited to 
                    damages for loss of profits, goodwill, use, data, or other intangible losses.</p>
                </li>
                <li class="term">
                    <b>Indemnification </b> 
                    <p>You agree to indemnify, defend, and hold us harmless from any claims, actions, suits, or proceedings
                         brought against us arising out of or in connection with your use of our website or services.</p>
                </li>
                <li class="term">
                    <b>Governing Law and Dispute Resolution </b> 
                    <p>These terms and conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which we operate. 
                    Any dispute arising out of or in connection with these terms and conditions shall be resolved through binding arbitration in accordance 
                    with the rules of the jurisdiction in which we operate.</p>
                </li>
                <li class="term">
                    <b>Changes to Terms and Conditions </b> 
                    <p>We reserve the right to change these terms and conditions at any time without notice.
                         Your continued use of our website or services following any such changes shall constitute
                          your acceptance of the revised terms and conditions.</p>
                </li>
            </ul>
            <p class="text">
                Thank you for choosing our package delivery website. If you have any questions or concerns about these terms and conditions, please contact us <Link to="/contact">here</Link>.
            </p>
            </div>
            
        </div>
    );
}

export default Terms;
