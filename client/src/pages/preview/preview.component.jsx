import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate ,useLocation} from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { RatingStar } from "rating-star";
import { ListGroup } from 'react-bootstrap'

const Preview = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const [service, setService] = useState(location.state.previewService);
	const [item, setitem] = useState(location.state.path);
	const [user,setuser] = useState(JSON.parse(localStorage.getItem('user')));

	useEffect(() => {
        document.title=service.name
    })
	console.log(item);
	const checkoutHandler = async(e) => {

		const order = {
			username: user.name,
			email: user.email,
			courier:{
				id:service.id,
				name:service.name
			},
			price:service.Orderprice,
			...item,
		}
		localStorage.setItem('order',JSON.stringify(order))
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
			
			<Button id={service.id} variant="primary" onClick={checkoutHandler}>Order</Button>
		</Card.Body>
	</Card>
	</div>
  )
}

export default Preview