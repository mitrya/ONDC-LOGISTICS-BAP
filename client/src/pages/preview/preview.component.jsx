import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate ,useLocation} from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { RatingStar } from "rating-star";
import { ListGroup } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
// import AddressForm from '../../components/addressForm/addressForm.component'
const Preview = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const [service, setService] = useState(location.state.previewService);
	const [item, setitem] = useState(location.state.path);
	const [user,setuser] = useState(JSON.parse(localStorage.getItem('user')));
	const [address, setaddress] = useState({
		rName:'',
		door:'',
		street:'',
		city:'',
		state:'',
		country:'',
		areaCode:''
	})

	const handleAddress = (event) => {
	setaddress({ ...address, [event.target.name]: event.target.value });
	};
	
	useEffect(() => {
        document.title=service.name
    })
	
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
			address
		}
		// localStorage.setItem('order',JSON.stringify(order))
		navigate('/payment',{state:{order}})
	}

  return (
	<div className='mx-auto mt-5 d-flex flex-row justify-content-around'>
		<Card style={{ width: '50rem' }}>
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
								name="areaCode"
								type="text" 
								placeholder="Enter Area Code" 
								required
								value={address.areaCode}
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