import React, {useState, useEffect} from "react";
import ListGroup from 'react-bootstrap/ListGroup';

import './orderHistory.styles.css';
const OrderHistory = async() => {
    // const [orders, setorders] = useState([]);
	const [user,setuser] = useState(JSON.parse(localStorage.getItem('user')));

    // useEffect( () => {
    //     fetch('http://localhost:8000/allorders', {
    //         method: "post",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body:{
    //             email: user.email,
    //         }
    //     })
    //     then(res => {

    //         console.log(res);
	// 		res.json()
    //     }
	// 	).then(data =>{
    //         console.log(data);
	// 		setorders(data);

	// 	}).catch(
	// 		error => {
	// 			console.log(error);
	// 		}
	// 	)        
    
    // }, [user])
    
    
    

    return (
        <></>
//         <div>OrderHistory
//             <ListGroup className="list-group-flush">
//             {/* {
//                 orders.map((order ) => {
//                     console.log(order);
//                     // <ListGroup className="list-group-flush">
// 					// 	<ListGroup.Item>Courier Name : {order.providercontact.name}</ListGroup.Item>
// 					// 	<ListGroup.Item>Pickup : {order.pickupaddress}</ListGroup.Item>
// 					// 	<ListGroup.Item>Drop : {order.deliveryaddress}</ListGroup.Item>
// 					// 	<ListGroup.Item>Item Type : {order.items.type}</ListGroup.Item>
// 					// 	<ListGroup.Item >Amount to Pay : {order.paymentdetails.price} INR</ListGroup.Item>
						
// 					// </ListGroup>
// ß
//                 }) 
//             } */}
//             {
//             orders.length==0 ? <div>No orders </div> : <></>
//             }
//             </ListGroup>

//         </div>
    )
}

export default OrderHistory