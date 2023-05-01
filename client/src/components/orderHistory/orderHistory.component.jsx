import React, {useState, useEffect} from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

import './orderHistory.styles.css';
import '../serviceCard/serviceCard.styles.css'
const OrderHistory = () => {
    
    const [user,setuser] = useState(JSON.parse(localStorage.getItem('user')));
    const [orders, setOrders] = useState(undefined);

    async function getOrderDetails(orderID){
        const response = await fetch(`http://localhost:8000/${orderID}`)
        return response.json();
    }

    useEffect( () => {
        fetch(`http://localhost:8000/allorders/${user.email}`)
        .then(res => {
			return res.json()
        })
        .then(async data =>{
            const promises = []
            data.orders.map(async orderID => {
                promises.push(getOrderDetails(orderID));                   
            })
            return Promise.all(promises)
        })
        .then(orderList => {
            setOrders(orderList)
        })
        .catch(
			error => {
				console.log(error);
			}
		)        
    
    }, [user])
   

        
        
        return (
            <div>
                <div style={{fontSize:'large'}}>Order History</div>
                
                { 
                    orders && orders.length?
                    
                        orders.map((order ) => {
                            return (<div key={order._id}>
                                    <Card  className='mt-3' style={{ width: 'max-content' }}>
                                                <div className='card-rows'>    
                                                    <div className="card-row">
                                                            <Card.Body>
                                                                <Card.Title>To {order.deliveryaddress[0].rName}</Card.Title>
                                                            
                                                                    <ListGroup className="list-group-flush">
                                                                        <ListGroup.Item>Pickup : {order.pickupaddress[0].city}</ListGroup.Item>
                                                                        <ListGroup.Item>Drop : {order.deliveryaddress[0].city}</ListGroup.Item>
                                                                        <ListGroup.Item>Item Type : {order.items.type}</ListGroup.Item>
                                                                        <ListGroup.Item className='font-weight-bold'>Paid amount : {order.paymentdetails.amount} INR</ListGroup.Item>
                                                                    </ListGroup>

                                                                    <Card.Text className='mt-2'>
                                                                        State : {order.state}
                                                                    </Card.Text>
                                                                    
                                                            </Card.Body>
                                                    </div>
                                                
                                                </div>
                                    </Card>
                            </div>)
            
                        })      
                    :
                        <>No Orders</>

                }

                </div>
            )
}

export default OrderHistory