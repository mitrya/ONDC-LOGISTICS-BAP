import React from 'react'
import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {ThreeDots} from "react-loading-icons"
import {lookup as PINLookup} from 'india-pincode-lookup'

const AddressForm = () => {
	const pinExample = "Example 110001"
    const pinError  = "invalid PIN"
	const user = JSON.parse(localStorage.getItem('user'))
  	const token = JSON.parse(localStorage.getItem('token'))

	const [address, setaddress] = useState({
		door:'',
		street:'',
		country:'India',
	})
	const [area_code,setArea] = useState('')
	const [state, setState] = useState('')
	const [city, setCity] = useState('')
	
	const [loading,setLoading] = useState(false);
	const returnDescription = (pinString) => {
		if(pinString.length==0)
			return pinError;

		if(isNaN(pinString))
			return pinError
		
		if(pinString.length<6 || pinString.length>6)
			return pinError
		// let data 
		if(PINLookup(Number(pinString))[0] === undefined ||  PINLookup(Number(pinString).length === 0))
			return pinError

		return (PINLookup(Number(pinString))[0])
	}
	const handleAddress = (event) => {
		setaddress({ ...address, [event.target.name]: event.target.value });
	};

	const handlePin = (event) => {
		setArea(event.target.value)
		let pinData = returnDescription(event.target.value)

		if(pinData!=pinError) {
			setState(pinData.stateName);
			setCity(pinData.taluk)
		} else {
			setState('');
			setCity('')
		}
	}

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
			setLoading(true);
    if(!validateObj(address)) {
			setLoading(false);
			alert('Please Fill all details in the address')
			return;
		}
    try {
      let res = await fetch('https://logigoapi.onrender.com/updateaddress', {
				method: "post",
				headers: {
					"Content-Type": "application/json",
          "Authorization": `${token}` 
				},
				body: JSON.stringify({
				email:user.email,
				address: {
					...address,
					state,
					city,
					area_code
				}

				}),
			})
      let data = await res.json();
      if(data.error) {
        setLoading(false);
        alert(data.error);
      } else {
        setLoading(false);
        alert(data.message);
        localStorage.setItem('user',JSON.stringify(data.user))
        location.reload();
      }

    } catch (err) {
			setLoading(false);
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
                  value={area_code}
                  onChange={handlePin}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="signUpFormCity">
                <Form.Label>City</Form.Label>
                <Form.Control 
                  name="city"
                  type="text" 
                  placeholder="Enter city" 
                  required
                  value={city}
                //   onChange={handlePin}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="signUpFormState">
                <Form.Label>State</Form.Label>
                <Form.Control 
                  name="state"
                  type="text" 
                  placeholder="Enter State" 
                  required
                  value={state}
                //   onChange={handlePin}
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
				  disabled={true}
                />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
            {loading ? <span> Loading</span>: <span>Submit</span>} &nbsp; {loading && <span className='loader'><ThreeDots/></span>}
            </Button>
        </Form>
      </div>
    </div>
  )
}

export default AddressForm;