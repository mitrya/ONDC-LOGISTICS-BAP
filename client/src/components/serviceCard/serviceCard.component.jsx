import React from 'react'
import Button from 'react-bootstrap/Button';
import ReactStars from "react-rating-stars-component";

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import './serviceCard.styles.css'
const ServiceCard = ({service,query}) => {
    // console.log(service)
    return (
        
        <Card className='mt-3' style={{ width: ' 100%' }}>
          <div className=''>
            <div className='card-img-top'>
              <img src={service.logo} className='image'/>
            </div>
            <Card.Body>
                <Card.Title>{service.name}</Card.Title>
                
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Code : {service.serviceDescriptor.serviceName}</ListGroup.Item>
                    <ListGroup.Item className='font-weight-bold'>Price : {service.price * query.weight} INR</ListGroup.Item>
                    <ListGroup.Item>Customer Rating	  
                        <ReactStars
                        count={service.rating}
                        size={24}
                        activeColor="#ffd700"
                        />
                    </ListGroup.Item>
                </ListGroup>

                <Card.Text className='mt-2'>
                    {service.serviceDescriptor.description}
                </Card.Text>
                
                <Button variant="primary">Preview</Button>
            </Card.Body>
          </div>

        </Card>
      );
}

export default ServiceCard

