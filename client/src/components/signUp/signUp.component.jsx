import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './signUp.styles.css'
// import axios
const SignUp = () => {
    useEffect(() => {
        document.title='Sign Up'
    })
    const navigate = useNavigate();
    const [signUpDetails, setSignUpDetails] = useState({
        displayName:'',
        email:'',
        contact:'',
        password:'',
        confirmPassword:''
    })
    
    const handleChange = (event) => {
        setSignUpDetails({ ...signUpDetails, [event.target.name]: event.target.value });
    };
    
    const handleSubmit = async event => {
        event.preventDefault();
        console.log(signUpDetails)
        try {
			let res = await fetch("http://localhost:8000/signup", {
				method: "post",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name:signUpDetails.displayName,
					email: signUpDetails.email,
					password:signUpDetails.password,
                    Contact : signUpDetails.contact
				}),
			})
			let data = await res.json();

			if (data.error) {
				alert(data.error);
			} else {
				// alert(data.message);
        
        navigate('/signin')
			}
		}
		catch(err){
			console.log("There is some error", err);
		}
    }
    
    return (
      <div className="forms mt-5 d-flex justify-content-center">
        <div className='form'> 
              <div className="form-heading">Sign Up</div>
              <div className="form-subheading">Sign up with your email and password</div>

            <Form>
                <Form.Group className="mb-3" controlId="signUpFormName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                      name="displayName"
                      type="text" 
                      placeholder="Enter name" 
                      required
                      value={signUpDetails.displayName}
                      onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="signUpFormBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                      name="email"
                      type="email" 
                      placeholder="Enter email" 
                      required
                      value={signUpDetails.email}
                      onChange={handleChange}
                    />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="signUpFormContact">
                    <Form.Label>Contact</Form.Label>
                    <Form.Control 
                      name="contact"
                      type="text" 
                      placeholder="Enter contact" 
                      required
                      value={signUpDetails.contact}
                      onChange={handleChange}
                  />
                    <Form.Text className="text-muted">
                    We'll never share your contact with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="signUpFormBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                      name="password"
                      type="password" 
                      placeholder="Password" 
                      required
                      value={signUpDetails.password}
                      onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="signUpFormConfirmBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control 
                      name="confirmPassword"
                      type="password" 
                      placeholder="Confirm Password" 
                      required
                      value={signUpDetails.confirmPassword}
                      onChange={handleChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Sign Up
                </Button>

            </Form>
        </div>
      </div>
  )
}

export default SignUp;