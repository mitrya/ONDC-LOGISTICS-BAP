import React, { useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import './multiStepForm.styles.css'
const PayloadDimensions = ({searchQuery,handleChange}) => {
 
    const formatInput = (e) => {
        console.log(e.key)
        let checkIfNonValid  = !(!isNaN(e.key) || e.key === "Backspace" ||
        e.key === "ArrowRight" ||   e.key === "ArrowLeft")
        if(e.key === " ") checkIfNonValid = true
        return checkIfNonValid && e.preventDefault();
      }
   
 return (
    <Form>
        <Form.Group className="mb-3">
        <Form.Label>weight (grams)* </Form.Label>
        <Form.Control 
            name="weight"
            type="text" 
            placeholder="Enter weight"
            required
            value={searchQuery.weight}
            onChange={handleChange}
            onKeyDown={formatInput}
        />
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>length (cm)*</Form.Label>
        <Form.Control 
            name="length"
            type="text" 
            placeholder="Enter length" 
            required
            value={searchQuery.length}
            onChange={handleChange}
            onKeyDown={formatInput}
        />
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>width (cm)*</Form.Label>
        <Form.Control 
            name="width"
            type="text" 
            placeholder="Enter width" 
            required
            value={searchQuery.width}
            onChange={handleChange}
            onKeyDown={formatInput}
        />
        </Form.Group>    <Form.Group className="mb-3">
        <Form.Label>height (cm)*</Form.Label>
        <Form.Control 
            name="height"
            type="text" 
            placeholder="Enter height" 
            required
            value={searchQuery.height}
            onChange={handleChange}
            onKeyDown={formatInput}
        />
        </Form.Group>    
        <Form.Text className="text-muted">
                <span className='fw-bolder'>round values to the nearest whole number </span>
        </Form.Text>

    </Form>
);
}

export default PayloadDimensions;