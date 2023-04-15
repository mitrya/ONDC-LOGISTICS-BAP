import React from 'react'
import { useState,useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


import  './contact.styles.css'

function Contact() {

    const [messageBody,setMessageBody] = useState({
        email:'',
        name:'',
        content:'',
    });

    const [info,setInfo] = useState('');
    const [result,setResult] = useState(false);

    const {email,name,content} = messageBody;

    const handleChange = (event) => {
        setMessageBody({ ...messageBody, [event.target.name]: event.target.value });
        setInfo('');
        setResult(false);
    };

    const handleClick = async (event) =>{
        event.preventDefault();
        console.log(messageBody);
        try {
			let res = await fetch("http://localhost:8000/message", {
				method: "post",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					messageBody
				}),
			})
			let data = await res.json();
            // console.log(data)
			if (data.error) {
                setInfo(data.error);
                setResult(false);
			} else {
                setInfo(data.message);
                setResult(true);
			}
		}
		catch(err){
			console.log("There is some error", err);
		}
    }

    const displayMessage = (info) => {
        if(result===true){
            return (
                <div class="success">
                    <p><strong>Success!</strong> {info}</p>
                </div>
            );
        }   
        else if(result===false){
            return (
                <div class="danger">
                    <p><strong>Error!</strong> {info}</p>
                </div>
            );
        }
    }

    function MyForm() {
        return (
            <>
                <form action ="/user/contactMessage" method="post" onSubmit = {handleClick}>
                    <input type="text" name="name" placeholder="Your Name" onChange={handleChange} />
                    <input type="text" name="email" placeholder="Your Email" onChange={handleChange} />
                    <input type="text" name="content" placeholder="Message" onChange={handleChange} />
                    {info.length>0 && displayMessage(info)}
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