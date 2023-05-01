import React, {useState, useEffect} from "react";
import ListGroup from 'react-bootstrap/ListGroup';

import './orderHistory.styles.css';
const OrderHistory = () => {
    const [orders, setorders] = useState([]);
	const [user,setuser] = useState(JSON.parse(localStorage.getItem('user')));

    async function getOrderDetails(orderID){
        const response = await fetch(`http://localhost:8000/${orderID}`)
        const details = await response.json();
        return details
    }

    useEffect( () => {
        fetch(`http://localhost:8000/allorders/${user.email}`)
        .then(res => {
			return res.json()
        }).then(data =>{
            let orderList = [];
            data.orders.map(async orderID => {
                let details = await getOrderDetails(orderID);  
                orderList.push(details) 
            })
            console.log(orderList)
            return orderList;
        }).then(list =>{
            console.log(list)
            console.log(list.length)

            setorders(list)
        }).catch(
			error => {
				console.log(error);
			}
		)        
    
    }, [user])
    
    
    

    return (
        
        <div>Order History
            <ListGroup className="list-group-flush">
            {
                orders.map((order ) => {
                    console.log(order);
                    <ListGroup className="list-group-flush">
						<ListGroup.Item>Courier Name : {order.providercontact.name}</ListGroup.Item>
						<ListGroup.Item>Pickup : {order.pickupaddress}</ListGroup.Item>
						<ListGroup.Item>Drop : {order.deliveryaddress}</ListGroup.Item>
						<ListGroup.Item>Item Type : {order.items.type}</ListGroup.Item>
						<ListGroup.Item >Amount to Pay : {order.paymentdetails.price} INR</ListGroup.Item>
						
					</ListGroup>

                }) 
            }
            {
            orders.length==0 ? <div>No orders </div> : <></>
            }
            </ListGroup>

        </div>
    )
}

export default OrderHistory