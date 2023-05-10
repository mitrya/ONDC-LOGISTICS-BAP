import React, { useState, useEffect,useLocation} from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {ThreeDots} from 'react-loading-icons'

const ForgotPassword = () => {

    useEffect(() => {
        document.title='Password-Reset'
    })

    const history=useNavigate();
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [loading,setLoading] = useState(false);
    const [info,setInfo] = useState('');
    const [result,setResult] = useState(false);
    
    const handleChange = (event) => {
        setEmail(email);
        setInfo('');
        setResult(false);
    };

    const handleSubmit = async event => {
        event.preventDefault();
        const email = JSON.parse(localStorage.getItem('email'));
        setLoading(true);
        try {
            let res = await fetch('https://logigoapi.onrender.com/validate',{
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
            console.log('data= ',data);
            if(data.error) {
			    setLoading(false);
                setInfo(data.error);
                setResult(false);
            } else {
			    setLoading(false);
                setInfo(data.message);
                setResult(true);
                navigate('/signin');
            }
        } catch (error) {
            console.log('error= ',error);
			setLoading(false);
            setInfo("There was some error");
            setResult(false);
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



    return (
        <div className="forms mt-5 d-flex justify-content-center">
            <div className='form1'> 
                <div className="form-heading">Reset Password</div>
                <div className="form-subheading">Please enter the email id associated to your account.</div>
                <Form>

                    <Form.Group className="mb-3" controlId="signInFormBasicPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            name="email"
                            type="email" 
                            placeholder="Enter email" 
                            required
                            value={email}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                    {loading ? <span> Loading</span>: <span>Get OTP</span>} &nbsp; {loading && <span className='loader'><ThreeDots/></span>}
                    </Button>
                </Form>
                {info.length>0 && displayMessage(info)}
            </div>
        </div>
    )
}

export default ForgotPassword;