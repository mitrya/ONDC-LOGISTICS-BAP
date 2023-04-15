import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './multiStepForm.styles.css'
const PayloadDetails = ({searchQuery,handleChange}) => {
    
    const formatInput = (e) => {
        let checkIfNonValid  = !(!isNaN(e.key) || e.key === "Backspace" ||
        e.key === "ArrowRight" ||   e.key === "ArrowLeft")
        if(e.key === " ") checkIfNonValid = true
        return checkIfNonValid && e.preventDefault();
      }
   

 return (
    <Form>
        <Form.Group className="mb-3">
        <Form.Label>Payload Value INR*</Form.Label>
        <Form.Control 
            name="value"
            type="text" 
            placeholder="Enter value"
            required
            value={searchQuery.value}
            onChange={handleChange}
            onKeyDown={formatInput}
        />
        </Form.Group>
        <Form.Group className="mb-3">

        <Form.Label>Select Payload Object Type*</Form.Label>
            <Form.Control 
                as="select" 
                name="objectType"
                required
                value={searchQuery.objectType}
                onChange={handleChange}
            
            >
        <option value="glass">glass</option>
        <option value="electronics">electronics</option>
        <option value="perishable">perishable</option>

        </Form.Control>

       
        </Form.Group>
    </Form>
);
}

export default PayloadDetails;