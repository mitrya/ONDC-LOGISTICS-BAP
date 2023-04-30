import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './signIn.styles.css'
const SignIn = () => {

    useEffect(() => {
        document.title='Login'
    })

    const history=useNavigate();
   const [signInDetails, setSignInDetails] = useState({
        email:'',
        password:'',
    })
    
    const handleChange = (event) => {
        
        setSignInDetails({ ...signInDetails, [event.target.name]: event.target.value });
    };

    function validateObj(obj) {
		if (typeof obj === 'object' && obj !== null) {
			for (const key in address) {
				if(address[key]=="") {
					return false;
				}
			}
		}
		return true;
	}
    const handleSubmit = async event => {
        event.preventDefault();
        
        const {email,password}=signInDetails;
        
        try {
            let res = await fetch('http://localhost:8000/signin',{
                method: "post",
                headers: {
                    "Content-Type" : "application/json",
                },
                body:JSON.stringify( {
                    email,
                    password
                })
            })
            let data = await res.json();
            if(data.error) {
                alert(data.error);
            } else {
                let addr = data.user.address;
                if(addr.door=="") data.user.address = {};
                localStorage.setItem('user',JSON.stringify(data.user));
                localStorage.setItem('token',JSON.stringify(data.token));
                // history('/');
                location.assign('/');
            }
        } catch (error) {
            alert(error);
        }
    }

    return (
        <div className="forms mt-5 d-flex justify-content-center">
            <div className='form1'> 
                <div className="form-heading">Sign In</div>
                <div className="form-subheading">Sign in with your email and password</div>
                <Form>
                    <Form.Group className="mb-3" controlId="signInFormBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            name="email"
                            type="email" 
                            placeholder="Enter email"
                            required
                            value={signInDetails.email}
                            onChange={handleChange}
                        />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="signInFormBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            name="password"
                            type="password" 
                            placeholder="Password" 
                            required
                            value={signInDetails.password}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Sign In
                    </Button>
                </Form>
            </div>
        </div>
  )
}

export default SignIn;