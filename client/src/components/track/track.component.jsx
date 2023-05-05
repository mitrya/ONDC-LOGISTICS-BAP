import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form,Card , ListGroup} from "react-bootstrap";


const Track = () => {
	const [oid, setOid] = useState("") 
	const [orders, setOrders] = useState({});
	const [isErr,setIsErr ] = useState(false)
	const errText= "Error finding your order please try again"
	
	const submitFormData =  async(e) => {
		e.preventDefault();
		let response = await fetch(`https://logigoapi.onrender.com/${oid}`)
		let data = await response.json();
		// console.log(data);
		if(data.error) {
			setIsErr(true)
		}
		else setOrders(data)
	}

	const handleChange = (event ) => {
		setOid(event.target.value)
	}

	return (
		<div className="mt-5 d-flex justify-content-center form1">
			<Form>
			<div className="form-heading">
				Track Shipments
			</div><br></br>

				<Form.Group className="mb-3" controlId="signInFormBasicEmail">
                        <Form.Label> Enter Order Id</Form.Label>
                        <Form.Control 
                            name="oid"
                            type="order" 
                            placeholder="Enter order Id"
                            required
                            value={oid}
                            onChange={handleChange}
                        />
                        <Form.Text className="text-muted">
						Order Id is a unique Id which you can find in your  <br></br>order history page
			                        </Form.Text>
						<Button variant="primary" onClick={submitFormData}>
						Submit
						</Button>
                    </Form.Group>
			</Form>
			{
				orders?.state ?  
				(isErr? 
				<Card  className='mt-3' style={{ width: 'max-content' }}>

					<Card.Body>
						<Card.Title> {errText}</Card.Title>
					
							
					</Card.Body>

				</Card> :
				<Card  className='mt-3' style={{ width: 'max-content' }}>
						<div className='card-rows'>    
							<div className="card-row">
								<Card.Body>
									<Card.Title>To {orders.deliveryaddress[0].rName}</Card.Title>
								
									<ListGroup className="list-group-flush">
										<ListGroup.Item>Pickup : {orders.pickupaddress[0].city}</ListGroup.Item>
										<ListGroup.Item>Drop : {orders.deliveryaddress[0].city}</ListGroup.Item>
										<ListGroup.Item>Item Type : {orders.items.type}</ListGroup.Item>
										<ListGroup.Item className='font-weight-bold'>Paid amount : {orders.paymentdetails.amount} INR</ListGroup.Item>
									</ListGroup>

									<Card.Text className='mt-2'>
										State : {orders.state}
										</Card.Text>
										
								</Card .Body>
							</div>
						</div>
				</Card> 
				)
				: <></>
				
			}
		</div>
	)
}

export default Track;