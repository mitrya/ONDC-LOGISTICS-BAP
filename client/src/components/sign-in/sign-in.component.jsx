import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './sign-in.styles.css'
const SignIn = () => {
   const [signInDetails, setSignInDetails] = useState({
        email:'',
        password:'',
    })
    const handleChange = (event) => {
        
        setSignInDetails({ ...signInDetails, [event.target.name]: event.target.value });
    };
    const handleSubmit = async event => {
        event.preventDefault();
        console.log(signInDetails)
        const {email,password}=signInDetails;
        
        try {
                //sign in logic
        } catch (error) {
            alert(error);
        }
    }

    return (
        <div className='form'> 
            <div className="form-heading">I already have an account</div>
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
  )
}

export default SignIn;