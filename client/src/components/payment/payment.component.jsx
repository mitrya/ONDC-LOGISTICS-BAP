import React, {useState, useEffect} from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate , useLocation } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';

import './payment.styles.css';
const Payment = () => {
	
	const location = useLocation();
	const navigate = useNavigate();
	const [order,setorder] = useState(location.state.order);
	const [user,setuser] = useState(JSON.parse(localStorage.getItem('user')));

	const makePayment = async (e) => {
		e.preventDefault();
		const res = await fetch('http://localhost:8000/neworder', {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				order
			}),
		})
		console.log(res);

		let data = await res.json();
		console.log(data);
		
		if(data.error) {
			alert('Error Please reload and try again',data.error);
		} else {

			navigate('/');
		}
		
	}

	return (
		<div className="container">
			<Card style={{width:"20rem"}}>
				<Card.Body>
					<Card.Title> Order </Card.Title>
					<Card.Text className=''>Please confirm the details before payment</Card.Text>
					<ListGroup className="list-group-flush">
						<ListGroup.Item>Customer Name : {order.username}</ListGroup.Item>
						<ListGroup.Item>Courier Name : {order.courier.name}</ListGroup.Item>
						<ListGroup.Item>Pickup : {order.source}</ListGroup.Item>
						<ListGroup.Item>Drop : {order.destination}</ListGroup.Item>
						<ListGroup.Item>Item Type : {order.type}</ListGroup.Item>
						<ListGroup.Item >Amount to Pay : {order.price} INR</ListGroup.Item>
						
					</ListGroup>

					<Button onClick={makePayment}>
						Pay
					</Button>
				</Card.Body>
			</Card>

		</div>
	)
}

export default Payment