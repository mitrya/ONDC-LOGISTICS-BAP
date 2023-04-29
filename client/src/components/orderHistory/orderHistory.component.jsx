import React, {useState, useEffect} from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate , useLocation } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';

import './orderHistory.styles.css';
const OrderHistory = async() => {
    const [orders, setorders] = useState([]);
	const [user,setuser] = useState(JSON.parse(localStorage.getItem('user')));

    useEffect( () => {
        fetch('http://localhost:8000/allorders', {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body:{
                email: user.email,
            }
        })
        then(
			res => res.json()
		).then(data =>{
			setorders(data);

		}).catch(
			error => {
				console.log(error);
			}
		)        
    
    }, [])
    
    
    

    return (
        <div>OrderHistory
            <ListGroup className="list-group-flush">
            {
                orders.length>0 ? orders.map((order ) => {
                    <ListGroup className="list-group-flush">
						{/* <ListGroup.Item>Customer Name : {order.username}</ListGroup.Item> */}
						<ListGroup.Item>Courier Name : {order.providercontact.name}</ListGroup.Item>
						<ListGroup.Item>Pickup : {order.pickupaddress}</ListGroup.Item>
						<ListGroup.Item>Drop : {order.deliveryaddress}</ListGroup.Item>
						<ListGroup.Item>Item Type : {order.items.type}</ListGroup.Item>
						<ListGroup.Item >Amount to Pay : {order.paymentdetails.price} INR</ListGroup.Item>
						
					</ListGroup>

                })  : <div>No orders </div>
            }
            </ListGroup>

        </div>
    )
}

export default OrderHistory