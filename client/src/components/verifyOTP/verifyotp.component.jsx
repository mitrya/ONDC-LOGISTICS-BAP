import React, { useState, useEffect,useLocation} from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {ThreeDots} from 'react-loading-icons'

const Verifyotp = () => {

    useEffect(() => {
        document.title='OTP-Verification'
    })

    const history=useNavigate();
    const [otp, setOTP] = useState('');
    const [email,setEmail] = useState('');
    const [loading,setLoading] = useState(false);
    
    
    const handleChange = (event) => {
        setOTP(event.target.value);
    };

    const handleSubmit = async event => {
        event.preventDefault();
        const email = JSON.parse(localStorage.getItem('email'));
        setLoading(true);
        try {
            let res = await fetch('http://localhost:8000/validateOTP',{
                method: "post",
                headers: {
                    "Content-Type" : "application/json",
                },
                body:JSON.stringify( {
                    otp:otp,
                    email:email
                })
            });
            let data = await res.json();
            if(data.error) {
			    setLoading(false);
                console.log(data.error);
                alert(data.error);
            } else {
			    setLoading(false);
                console.log(data.message);
                navigate('/signin');
            }
        } catch (error) {
			setLoading(false);
            alert(error);
        }
    }

    return (
        <div className="forms mt-5 d-flex justify-content-center">
            <div className='form1'> 
                <div className="form-heading">OTP Verification</div>
                <div className="form-subheading">Please enter the otp sent to your email</div>
                <Form>

                    <Form.Group className="mb-3" controlId="signInFormBasicPassword">
                        <Form.Label>OTP</Form.Label>
                        <Form.Control 
                            name="otp"
                            type="text" 
                            placeholder="Enter OTP" 
                            required
                            value={otp}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                    {loading ? <span> Loading</span>: <span>Verify</span>} &nbsp; {loading && <span className='loader'><ThreeDots/></span>}
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Verifyotp;