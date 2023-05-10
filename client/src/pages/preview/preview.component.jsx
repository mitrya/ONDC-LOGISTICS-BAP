import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate ,useLocation} from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { RatingStar } from "rating-star";
import { ListGroup } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
// import AddressForm from '../../components/addressForm/addressForm.component'
import {ThreeDots} from "react-loading-icons"
import {lookup as PINLookup} from 'india-pincode-lookup'

const Preview = () => {
	//global vars
	const pinExample = "Example 110001"
    const pinError  = "invalid PIN"
	const location = useLocation();
	const navigate = useNavigate();
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

	//usestate
	const [service, setService] = useState(location.state.previewService);
	const [item, setitem] = useState(location.state.path);
	const [user,setuser] = useState(JSON.parse(localStorage.getItem('user')));
	let query = location.state.path;
	
	let pinDetails = returnDescription(Number(query.destination))


	//useeffect
	useEffect(() => {
        document.title=service.name
    })

	const [address, setaddress] = useState({
		Receiver_Name:'',
		door:'',
		street:'',
		country:'India',
	})
	const [area_code,setArea] = useState(query?Number(query.destination):'')
	const [state, setState] = useState(pinDetails!=pinError?pinDetails.stateName:'')
	const [city, setCity] = useState(pinDetails!=pinError?pinDetails.taluk:'')

	const [loading,setLoading] = useState(false);
	


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

	const checkoutHandler = async(e) => {
		if(JSON.stringify(user.addressr) === '{}') {
			alert('Please Update your address')
			navigate('/profile');
		}
		if(!validateObj(address)) {
			alert('Please Fill all details of the receiver')
			return;
		}
		const order = {
			username: user.name,
			email: user.email,
			courier:{
				id:service.id,
				name:service.name
			},
			price:service.Orderprice,
			...item,
			address: {
				...address,
				state,
				city,
				area_code
			}
	}
		// localStorage.setItem('order',JSON.stringify(order))
		navigate('/payment',{state:{order}})
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
	<div className='mx-auto mt-5 d-flex flex-row justify-content-around'>
		<Card style={{ width: '30rem' }}>
			<Card.Body>
				<Card.Title>{service.name}</Card.Title>
				<ListGroup className="list-group-flush">
					<ListGroup.Item>Code : {service.serviceDescriptor.serviceName}</ListGroup.Item>
					<ListGroup.Item className='font-weight-bold'>Final Price : {service.Orderprice} INR</ListGroup.Item>
					<ListGroup.Item>Customer Rating	  
					<RatingStar id="123" rating={service.rating} />

					</ListGroup.Item>
				</ListGroup>

				<Card.Text className='mt-2'>
					{service.serviceDescriptor.description}
				</Card.Text>
				<div className="container form">
					<div className="row">
					
						
					<Form>
						<div className="form-subheading">Please fill the receivers address</div>
							<Form.Group className="mb-3" controlId="signUpFormAddName">
								<Form.Label>Receiver's Name </Form.Label>
								<Form.Control 
									name="rName"
									type="text" 
									placeholder="Receiver's Name" 
									required
									value={address.rName}
									onChange={handleAddress}
								/>
							</Form.Group>
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
						</Form>
					</div>
					</div>
				<Button id={service.id} variant="primary" onClick={checkoutHandler}>Order</Button>
			</Card.Body>
		</Card>
	</div>
  )
}

export default Preview