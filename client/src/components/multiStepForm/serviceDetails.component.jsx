import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import './multiStepForm.styles.css'
const ServiceDetails = ({searchQuery,handleChange}) => {

 return (
    <Form>
        <Form.Group className="mb-3">
            <Form.Label>Select Service</Form.Label>
            <Form.Control 
                as="select" 
                name="serviceType"
                required
                value={searchQuery.serviceType}
                onChange={handleChange}
            
            >
                <option value="Immediate">Standard</option>
                <option value="Express">Express</option>
                {/* <option value="Immediate">Standard : Immediate</option>
                <option value="Today">Standard : Today</option>
                <option value="Tomorrow">Standard : Tomorrow</option> */}
          </Form.Control>
        </Form.Group>
    </Form>
);
}

export default ServiceDetails;