import React, { useState, useEffect,useLocation} from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {ThreeDots} from 'react-loading-icons'

const SetNewPassword = () => {

    useEffect(() => {
        document.title='Password-Reset'
    })

    const history=useNavigate();
    const navigate = useNavigate();
    const [userInfo,setUserInfo] = useState({
        email:'',
        password:'',
        confirmPassword:'',
        otp:''
    });
    const {email,password,confirmPassword,otp} = userInfo;
    const [loading,setLoading] = useState(false);
    const [info,setInfo] = useState('');
    const [result,setResult] = useState(false);
    
    const handleChange = (event) => {
        setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
        setInfo('');
        setResult(false);
    };

    const handleSubmit = async event => {
        event.preventDefault();
        const email = JSON.parse(localStorage.getItem('email'));
        // console.log(email,password,confirmPassword,otp);
        setLoading(true);
        try {
            let res = await fetch('https://logigoapi.onrender.com/setPassword',{
                method: "post",
                headers: {
                    "Content-Type" : "application/json",
                },
                body:JSON.stringify( {
                    email:email,
                    password:password,
                    confirmPassword:confirmPassword,
                    otp:otp
                })
            });
            let data = await res.json();
            // console.log('data= ',data);
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
                <div className="form-heading">Password Reset</div>
                <div className="form-subheading">Please enter the otp received and set the new password.</div>
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
                    <Form.Group className="mb-3" controlId="signInFormBasicPassword">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control 
                            name="password"
                            type="password" 
                            placeholder="Enter new Password" 
                            required
                            value={password}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="signInFormBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control 
                            name="confirmPassword"
                            type="password" 
                            placeholder="Confirm new password" 
                            required
                            value={confirmPassword}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                    {loading ? <span> Loading</span>: <span>Set Password</span>} &nbsp; {loading && <span className='loader'><ThreeDots/></span>}
                    </Button>
                </Form>
                {info.length>0 && displayMessage(info)}
            </div>
        </div>
    )
}

export default SetNewPassword;