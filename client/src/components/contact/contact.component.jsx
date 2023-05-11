
 

import React from 'react'
import { useState,useEffect } from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import  '@fortawesome/fontawesome-free-solid'

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
        // console.log(messageBody);
        try {
			let res = await fetch("https://logigoapi.onrender.com/message", {
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
                <form action ="/user/contactMessage" method="post" onSubmit = {handleClick}  style={{color:'black'}}>
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
        <div className='container-contact-fluid '>
            <div className="hero">
                <h1 className="hero-text" style={{paddingBottom:'0', margin:'0'}}>
                Don't be a stranger 
                </h1>
                <h1 className="hero-text" style={{paddingBottom:'30px'}}>
                Just say hello
                </h1>
                <p className="hero-query-subtext">
                Have some questions? Need a demo?
                </p>
                <p className="hero-subtext">
                 Thank You for your interest in our services. 
                </p>
                <p className="hero-subtext">
                Please fill out the form below or email us at ourEmail@gmail.com
                </p>
           </div>
        </div>
        <div className='contact-floating-container'>
            <div id="other-info">
                <img id="contact-img" src="contact-us.jpg" style={{margin:'5px', maxWidth:'70%', height:'auto'}}>
                </img>
                                <div id="connect">
                                    <span style={{alignSelf:'center', fontSize:'40px', marginLeft:'20px',}}>Get in touch</span>
                                    <div id="connect-text">
                                    <span>While we are good with smoke signals,
                                        </span><span> there are simpler ways for us to get in touch and answer your questions</span>
                                    </div>
                                </div>
                                <div id="myaddress">
                                        <div id="contact-location">
                                            <span className='px-3'><FontAwesomeIcon className="icon" icon="fa-map-marker" /></span>
                                            <span>&nbsp;Allahabad, UP, India</span>
                                        </div>
                
                                        <div id="contact-mobile">
                                            <span className='px-3'><FontAwesomeIcon className="icon" icon="fa-phone" /></span>
                                            <span>&nbsp;9392436624</span>
                                        </div>
                
                                        <div id="contact-email">
                                            <span className='px-3'><FontAwesomeIcon className="icon" icon="fa-envelope" /></span>
                                            <span>&nbsp;logigo4u@gmail.com</span>
                                        </div>
                                </div>
            </div>
            <div className='contact-form'>
            <div style={{textAlign:'left', fontSize:'40px', color:'#58b384'}}>
                        <p >
                           Please fill this Form
                        </p>
                    </div>
                    <div id="message-section">
                                {MyForm()}
                            </div>
                    <div style={{textAlign:'center', marginLeft:'20', padding:'0'}}>
                        <span>
                            The Company shall not sell, share or trade customer information.</span>
                        
                        <span> Your Privacy is very important to us.</span>
                    </div>
            </div>

           </div>
        
           
           
        </>
    );
}

export default Contact;
