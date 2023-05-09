import React, {useState, useEffect} from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate , useLocation } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';
import {ThreeDots} from "react-loading-icons"

import './payment.styles.css';
const Payment = () => {
	
	const location = useLocation();
	const navigate = useNavigate();  
	const [loading,setLoading] = useState(false);

	const [order,setorder] = useState(location.state.order);
	const [user,setuser] = useState(JSON.parse(localStorage.getItem('user')));
	console.log(order);
	const makePayment = async (e) => {
		e.preventDefault();
		setLoading(true);

		const res = await fetch('https://logigoapi.onrender.com/neworder', {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				order
			}),
		})

		let data = await res.json();
		console.log(data);
		
		if(data.error) {
			setLoading(false);
			alert('Error Please reload and try again',data.error);
		} else {
			setLoading(false);
			navigate('/orders');
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
						{
							Object.keys(order.address).map((key) => {
								return <ListGroup.Item>{key + " : " + order.address[key]}</ListGroup.Item>
							})
						}
					</ListGroup>

					<Button onClick={makePayment}>
						{loading ? <span> Loading</span>: <span>Pay</span>} &nbsp; {loading && <span className='loader'><ThreeDots/></span>}
					</Button>
				</Card.Body>
			</Card>

		</div>
	)
}

export default Payment