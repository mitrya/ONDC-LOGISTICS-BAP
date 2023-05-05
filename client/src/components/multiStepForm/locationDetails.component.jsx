import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import {lookup as PINLookup} from 'india-pincode-lookup'
import './multiStepForm.styles.css'

const LocationDetails = ({searchQuery,handleChange,setIsValidPIN}) => {
    const pinExample = "Example 110001"
    const pinError  = "invalid PIN"
    const [sourceDescription, setSourceDescription] = useState(pinExample)
    const [destinationDescription, setDestinationDescription] = useState(pinExample)
    
    const returnDescription = (pinString) => {
        if(pinString.length==0)
            return pinExample;
    
        if(isNaN(pinString))
            return pinError
        
        if(pinString.length<6 || pinString.length>6)
             return pinError
        
        if(PINLookup(Number(pinString))[0] === undefined ||  PINLookup(Number(pinString).length === 0))
            return pinError
 
        return (PINLookup(Number(pinString))[0].taluk)
    }

    const returnIsValid = (description) => {
        if(description === pinExample || description ===  pinError)
            return false;
        else {
            return true;    
        }
    }

    useEffect(() => {
        setSourceDescription(returnDescription(searchQuery.source))
    }, [searchQuery.source])
     
     useEffect(() => {
        setDestinationDescription(returnDescription(searchQuery.destination))
    }, [searchQuery.destination])
    
    useEffect(() => {
        setIsValidPIN(returnIsValid(destinationDescription) && returnIsValid(sourceDescription))
    })
    
    return (
    <Form>
        <Form.Group className="mb-3">
            <Form.Label>Source Pincode*</Form.Label>
            <Form.Control 
                name="source"
                type="text" 
                placeholder="Enter source PIN code"
                required
                value={searchQuery.source}
                onChange={handleChange}
            />
            <Form.Text className="text-muted">
                <span className={(returnIsValid(sourceDescription))?"text-success fw-bolder":""}>{sourceDescription}</span>
            </Form.Text>
        </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label>Destination Pincode*</Form.Label>
            <Form.Control 
                name="destination"
                type="text" 
                placeholder="Enter destination PIN code" 
                required
                value={searchQuery.destination}
                onChange={handleChange}
            />
            <Form.Text className="text-muted">
                <span className={(returnIsValid(destinationDescription))?"text-success fw-bolder":""}>{destinationDescription}</span>
            </Form.Text>
        </Form.Group>
    </Form>
);
}

export default LocationDetails;