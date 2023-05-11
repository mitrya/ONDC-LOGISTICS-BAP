import React, {useState, useEffect} from "react";
import { useNavigate,useLocation } from "react-router-dom";
import { Button, Form,Card , ListGroup} from "react-bootstrap";
import {ThreeDots} from "react-loading-icons"
import "./track.styles.css"
const Track = () => {
	const location = useLocation()
	const [oid, setOid] = useState(location?.state?.tid) 
	const [data, setdata] = useState({})
	const [checked,setchecked ] = useState(false)
	const errText= "Error finding your order please try again"
	const [loading,setLoading] = useState(false);
	var orderData

	const submitFormData =  async(e) => { 
		e.preventDefault();
		setLoading(true);

		let response = await fetch(`https://logigoapi.onrender.com/${oid}`)
		let res = await response.json();
		setchecked(true)
		setLoading(false);
		setdata(res)
	}

	const handleChange = (event ) => {
		setOid(event.target.value)
	}

	return (
		<div className="mt-5 d-flex justify-content-center form1">
			<Form className="">
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
                        {loading ? <span> Loading</span>: <span>Submit</span>} &nbsp; {loading && <span className='loader'><ThreeDots/></span>}
						</Button>
                    </Form.Group>
			</Form>
			{
				(data.error || data.state) ?  
				((data.error)? 
				<Card  className='mt-3 dumbo ' style={{ width: 'max-content' }}>
					<Card.Body>
						<Card.Title> {" Error " + data.error}</Card.Title>
							
					</Card.Body>
				</Card> 
				:
				<Card  className='mt-3' style={{ width: 'max-content' }}>
						<div className='card-rows'>    
							<div className="card-row">
								<Card.Img variant="top" src="/tracking.jpeg" className="ifluid"/>
								<Card.Body>
									<Card.Title>To {data.deliveryaddress[0].rName}</Card.Title>
								
									<ListGroup className="list-group-flush">
										<ListGroup.Item>Pickup : {data.pickupaddress[0].city}</ListGroup.Item>
										<ListGroup.Item>Drop : {data.deliveryaddress[0].city}</ListGroup.Item>
										<ListGroup.Item>Item Type : {data.items.type}</ListGroup.Item>
										<ListGroup.Item className='font-weight-bold'>Paid amount : {data.paymentdetails.amount} INR</ListGroup.Item>
									</ListGroup>

									<Card.Text className='mt-2'>
										State : {data.state}
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