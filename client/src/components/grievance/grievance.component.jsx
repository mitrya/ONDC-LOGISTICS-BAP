import React from 'react'
import { useState,useEffect } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import  '@fortawesome/fontawesome-free-solid'
import { Button } from 'react-bootstrap';
 import  './grievance.styles.css'
 import '../contact/contact.styles.css'

function Grievance() {

    const [messageBody,setMessageBody] = useState({
        email:'',
        name:'',
        content:'',
        queryType:'Order'
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
			let res = await fetch("https://logigoapi.onrender.com/grievance", {
				method: "post",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					messageBody
				}),
			})
			let data = await res.json();
            //console.log(data);
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
                <form action ="/user/grievance" method="post" onSubmit = {handleClick} className='gform' style={{color:'black'}}>
                    {/* <div className="row">

                    </div> */}
                    <input type="text" name="name" placeholder="Your Name" onChange={handleChange} />
                    <input type="text" name="email" placeholder="Your Email" onChange={handleChange} />
                    
                    <label for="query" style={{color:'black', fontSize:'16px', textAlign:'left', margin:'10px 0', display: 'block'}}>Choose Type of Complaint: &nbsp;</label>
                    <select id="query" name="queryType" style={{width:'100%', height: '4vh', border: '1px solid #ccc', borderRadius: '5px', paddingLeft: '10px', fontSize: '16px'}} onChange={handleChange}>
                        <option value="Order">Order</option>
                        <option value="Account">Account</option>
                        <option value="Others">Others</option>
                    </select>
                    <br/><br/>
                    <label style={{color:'white'}}>Describe Your Complaint</label><br/>
                    <textarea name="content" placeholder="Complaint/Feedback" onChange={handleChange} style={{width:'100%', paddingBottom:'50px'}}/>
                    {info.length>0 && displayMessage(info)}
                    {/* <input type="submit" id="grievance-message-submit" value="SUBMIT" /> */}
                    <Button id="Submit-complaint" onClick={handleClick} >Submit</Button>
                </form>
            </>
        )
    }

    return (
        <>
            <div className='grievance-container-fluid box  d-flex'>                
                <div id="flex_user">
                            
                    <div id="other-info">
                        <div className="promotion">
                            <h1 className='gheader'>Do you have any complaints?</h1 > 
                        </div>
                        <div className="promotion-sub">
                            <span>
                            We value your feedback! 
                            Tell us about your experience.
                            </span>
                        
                        </div>
                     </div>
                     <div id="message-section" className='gform-cont' >
                        <h3>Raise A Complaint Form</h3>
                        {MyForm()}
                    </div>
                </div>
                    
            </div>      
        </>
    );
}

export default Grievance;
