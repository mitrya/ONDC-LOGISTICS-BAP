import React from 'react'
import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddressForm = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  const [address, setaddress] = useState({
    door:'',
    name:'',
    building:'',
    street:'',
    locality:'',
    ward:'',
    city:'',
    state:'',
    country:'',
    area_code:''
  })

  const handleAddress = (event) => {
    setaddress({ ...address, [event.target.name]: event.target.value });
  };

  function validateObj(obj) {
		if (typeof obj === 'object' && obj !== null) {
			for (const key in obj) {
				if(obj[key]=="") {
					return false;
				}
			}
		}
		return true;
	}
  const handleSubmit = async e => {
    e.preventDefault();
    if(!validateObj(address)) {
			alert('Please Fill all details in the address')
			return;
		}
    try {
      let res = await fetch('https://logigoapi.onrender.com/updateaddress', {
				method: "post",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
          email:user.email,
          address
				}),
			})
      let data = await res.json();
      if(data.error) {
        alert(data.error);
      } else {
        alert(data.message);
        localStorage.setItem('user',JSON.stringify(data.user))
        location.reload();
      }

    } catch (err) {
      console.log("Error: ",err);
    }
  }

  return (
    <div className="container form">
      <div className="row">
        <Form>
          <div className="form-subheading">Please fill Address Details</div>
              <Form.Group className="mb-3" controlId="signUpFormAddDoor">
                  <Form.Label>Door Number</Form.Label>
                  <Form.Control 
                    name="door"
                    type="text" 
                    placeholder="Door Number" 
                    required
                    value={address.door}
                    onChange={handleAddress}
                  />
              </Form.Group>
              <Form.Group className="mb-3" controlId="signUpFormAddStreet">
                <Form.Label>Street</Form.Label>
                <Form.Control 
                  name="street"
                  type="text" 
                  placeholder="Enter Street" 
                  required
                  value={address.street}
                  onChange={handleAddress}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="signUpFormAreaCode">
                <Form.Label>Area Code</Form.Label>
                <Form.Control 
                  name="area_code"
                  type="text" 
                  placeholder="Enter Area Code" 
                  required
                  value={address.area_code}
                  onChange={handleAddress}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="signUpFormCity">
                <Form.Label>City</Form.Label>
                <Form.Control 
                  name="city"
                  type="text" 
                  placeholder="Enter city" 
                  required
                  value={address.city}
                  onChange={handleAddress}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="signUpFormState">
                <Form.Label>State</Form.Label>
                <Form.Control 
                  name="state"
                  type="text" 
                  placeholder="Enter State" 
                  required
                  value={address.state}
                  onChange={handleAddress}
                />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="signUpFormCountry">
                <Form.Label>Country</Form.Label>
                <Form.Control 
                  name="country"
                  type="text" 
                  placeholder="Enter country" 
                  required
                  value={address.country}
                  onChange={handleAddress}
                />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
            </Button>
        </Form>
      </div>
    </div>
  )
}

export default AddressForm;