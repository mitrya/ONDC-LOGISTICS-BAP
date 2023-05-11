import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';
import {Card ,Button} from 'react-bootstrap';
import {ThreeDots} from "react-loading-icons"
import { Link } from 'react-router-dom';
import './orderHistory.styles.css';
import '../serviceCard/serviceCard.styles.css'
const OrderHistory = () => {
    
    const [user,setuser] = useState(JSON.parse(localStorage.getItem('user')));
    const token = JSON.parse(localStorage.getItem('token'))
    const [orders, setOrders] = useState(undefined);
    const [loading,setLoading] = useState(false);
    const [userData, setUserData] = useState()

    const navigate = useNavigate()
    useEffect( () => {
        setLoading(true)
        fetch(`https://logigoapi.onrender.com/allorders/${user.email}`)
        .then(res => {
			return res.json()
        })
        .then(data => {
            setUserData(data.user)
            setOrders(data.user.orders)
            setLoading(false)
        })
        .catch(
			error => {
                setLoading(false)
				console.log(error);
			}
		)        
    
    }, [user])
   

    const handleCancel = async (e) => {
        e.preventDefault()
        let oid = e.target.attributes.id.value;
		const parCard  = e.target.closest('div.card');
        try {
            let res = await fetch(`https://logigoapi.onrender.com/delete/${oid}`, {
              method: "post",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `${token}` 
              },
              body: JSON.stringify({
                email:user.email,
                id:userData._id
              }),
            })
            let data = await res.json();
  
            if (data.error) {
              setLoading(false);
              alert(data.error);
            } else {
                setLoading(false);
                alert('Order Cancelled Successfully')
				parCard.remove()
            }
        }
        catch(err){
            setLoading(false);
            console.log("There is some error", err);
        }
		e.stopPropogation()
    }

    const toTrack = (e) => {
      e.preventDefault();
      // return
      // console.log('sdfkjsd');
      const id = e.target.attributes.id.value;
      navigate('/track', {state:{tid:id}})
    }

    return (
        <div className="mt-5 container justify-content-center">
            <h1 id="order-headline">Order History</h1>
            <div id="sub-head-order">
            <div id="order-subhead-part1">
                <span>Account Holder #{user.name}</span>
            </div>
            <div id="order-subhead-part2">
            
              <Link className="new_order" to="/">Place New Order</Link>
        
            </div>
            </div>


            <div className="order-card-container">
            { 
                orders && orders.length?
                
                    orders.map((order ) => {
                        return (<div key={order._id}>
                                <Card  className='mt-3' style={{ width: 'max-content' }}>
                                            <div className='order-card-rows'>    
                                                <div className="order-card-row">
                                                <div className="order-card-image">
                                                  <img>

                                                  </img>
                                                      </div>
                                                        <Card.Body>
                                                            <Card.Title>Order Recipient: {order.deliveryaddress[0].rName.toUpperCase()}</Card.Title>
                                                        
                                                                <ListGroup className="list-group-flush">
                                                                    {/* <ListGroup.Item>Order Id : {order._id}</ListGroup.Item> */}
                                                                    <ListGroup.Item>Pickup : {order.pickupaddress[0].city}</ListGroup.Item>
                                                                    <ListGroup.Item>Drop : {order.deliveryaddress[0].city}</ListGroup.Item>
                                                                    <ListGroup.Item>Item Type : {order.items.type}</ListGroup.Item>
                                                                    <ListGroup.Item className='font-weight-bold'>Paid amount : {order.paymentdetails.amount} INR</ListGroup.Item>
                                                                </ListGroup>

                                                                <Card.Text className='mt-2'>
                                                                    State : {order.state}
                                                                </Card.Text>
                                                               <div id="order-card-buttons">
                                                                 <Card.Text><Button className="cancel_order" id={order._id} onClick={handleCancel}>Cancel</Button></Card.Text>
                                                                <Card-Text><Button variant="primary" className="track_order custom-class" id={order._id}
                                                                 onClick={toTrack}
                                                                >
                                                                Track Order
                                                              </Button></Card-Text></div>
                                                        </Card.Body>
                                                </div>
                                            
                                            </div>
                                </Card>
                        </div>)
                        
        
                    })       
                :
            <>{loading ? <h3> Loading...</h3>: <h3>No orders </h3> }</>
        

            }</div>

            </div>
        )
}

export default OrderHistory
