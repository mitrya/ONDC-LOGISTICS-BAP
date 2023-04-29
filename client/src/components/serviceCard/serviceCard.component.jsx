import React from 'react'
import Button from 'react-bootstrap/Button';
import { RatingStar } from "rating-star";
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import './serviceCard.styles.css'
const ServiceCard = ({service,query}) => {
    const navigate = useNavigate();
    function previewHandler(s) {
      // const {price} 
      navigate('/preview',{state:{previewService: {
        ...service,
        Orderprice : service.price * query.weight,
      }}})
    }
    // console.log(service)
    return (
        
        <Card className='mt-3' style={{ width: 'max-content' }}>
          <div className='card-rows' onClick={previewHandler} >    
              <div className="card-row">
                  <div className='card-img-top'>
                    <img src={service.logo} className='image'/>
                  </div>
              </div>
                <div className="card-row">

                <Card.Body>
                <Card.Title>{service.name}</Card.Title>
                
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Code : {service.serviceDescriptor.serviceName}</ListGroup.Item>
                    <ListGroup.Item className='font-weight-bold'>Price : {service.price * query.weight} INR</ListGroup.Item>
                    <ListGroup.Item>Customer Rating	  
                    <RatingStar id="123" rating={service.rating} />
                    </ListGroup.Item>
                </ListGroup>

                <Card.Text className='mt-2'>
                    {service.serviceDescriptor.description}
                </Card.Text>
                
                {/* <Button id={service.id} variant="primary" onClick={previewHandler}>Preview</Button> */}
                </Card.Body>
                </div>
            
          </div>

        </Card>
      );
}

export default ServiceCard

