import React, {useState, useEffect} from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { loadStripe } from "@stripe/stripe-js";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";


import React from 'react'

const Payment = () => {

	const [order,setorder] = useState({
		name : "courier",
		price: 50,
		user : "Vineeth",
		quantity: 1
	});

	const makePayment = async (e) => {
		e.preventDefault();
		const stripe =await loadStripe("pk_live_51N09tHSEY8xPCQ3e8r5YZLe2HSvzPpTlSESYzpZOZ6NBHvW67dwkhetlFUwTuvyD1COsZQWLqaW3Zb93SiAQeRDe00I5JFrFTy");
		const res = await fetch("http://localhost:8000/create-checkout-ssession", {
			method:"POST",
			headers: {
				"Content-Type" : "application/json"
			},
			body: {
				order
			}
		});
		const session = await res.json();
		const data  = stripe.redirectToCheckout({
			sessionId : session.id,
		});

		if(data.error) {
			console.log(data.error);
		}
		
	}

	return (
		<div>
			<Card style={{width:"20rem"}}>
				<Card.Body>
					<Card.Title> Order </Card.Title>
					<Card.Text>{order.user} costs you {order.price*order.quantity}</Card.Text>

					<Button onClick={makepayment}>
						Pay
					</Button>
				</Card.Body>
			</Card>

		</div>
	)
}

export default Payment