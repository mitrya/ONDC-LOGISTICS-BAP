import React from 'react'
import { useState,useEffect } from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import  '@fortawesome/fontawesome-free-solid'

 import  './grievance.styles.css'
 import '../contact/contact.styles.css'

function Grievance() {

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
                <form action ="/user/grievance" method="post" onSubmit = {handleClick}  style={{color:'black'}}>
                    <input type="text" name="name" placeholder="Your Name" onChange={handleChange} />
                    <input type="text" name="email" placeholder="Your Email" onChange={handleChange} />
                    
                    <label for="query" style={{color:'white'}}>Choose Type of Complaint: &nbsp;</label>
                    <select id="query" name="queryType" style={{width:'100%'}}>
                        <option value="Order">Order</option>
                        <option value="Account">Account</option>
                        <option value="Others">Others</option>
                    </select>
                    <br/><br/>
                    <label style={{color:'white'}}>Describe Your Complaint</label><br/>
                    <textarea name="content" placeholder="Message" onChange={handleChange} style={{width:'100%'}}/>
                    <input type="submit" id="grievance-message-submit" value="SUBMIT" />
                </form>
            </>
        )
    }

    return (
        <>
            <div className='container-fluid box mt-3 mx-1 temp'>

                <div class="grievance-box">
                    <div id="grievance grievance-helper" className='grievance-section'>
                        <div id="grievance-header">
                            <span>Raise Complaint</span>
                        </div>
                        <div id="grievance-flex_user">
                            <div id="grievance-message-section">
                                {MyForm()}
                            </div>
                        </div>
                    </div>
                </div> 
            </div>  
        </>
    );
}

export default Grievance;