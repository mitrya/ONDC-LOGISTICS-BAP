import React, { useState,useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

import LocationDetails from './locationDetails.component'
import PayloadDimensions from './payloadDimensions.component'
import PayloadDetails from './payloadDetails.component';
import ServiceDetails from './serviceDetails.component';
import FormEntryPreview from './formEntryPreview.component';

import Button from 'react-bootstrap/Button';
import './multiStepForm.styles.css'

import {ThreeDots} from 'react-loading-icons'

const MultiStepForm = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const [step, setStep] = useState(1)
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState("");

  const [searchQuery,setSearchQuery] = useState({
    source:location.state?.locationData?.source,
    destination:location.state?.locationData?.destination,
    weight:"",
    length:"",
    width:"",
    height:"",
    value:"",
    objectType:"glass",
    serviceType:"Immediate",
  });    
  const [fillCount,setFillCount] = useState(0);
  const [isValidPIN,setIsValidPIN] = useState(location.state?.locationData?.isValidPIN)
  
  const handleChange = (event) => {
    setSearchQuery({ ...searchQuery, [event.target.name]: event.target.value });
  };

  const handleNext = () =>{
    if(isValidPIN === false)
        return;
    setStep(step + 1)
  }
  
  const submitFormData = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    if(!localStorage.getItem('user')) {
        setError("Please Login/Register");
        setLoading(false);
        return
    }
    if(fillCount !== 9) 
    {
        // alert("All fields are required");
        setError("All fields are required");
        setLoading(false);
        return;
    }
    try {
        let res = await fetch("https://ondc-sample-gateway.onrender.com/search", {
            method: "post",
            headers: {
                "Content-Type": "application/json",                
            },
            body: JSON.stringify({
                searchQuery
            }),
        })
        let data = await res.json();
        setLoading(false);
        if (data.error) {
            setError(data.error);
        } else {
            navigate('/results',{state:{data : data, query : searchQuery}});
        }
    }
    catch(err){
        console.log("There is some error", err);
    }
  };


  useEffect(() => {
    setLoading(false);
    setError("");
    let count = 0
    Object.entries(searchQuery).map(([key, val], i) => 
    {
        if(val !== "")
            count = count + 1
    })
    setFillCount(count)
  }, [searchQuery])
  
    
    return (
    <div className='d-flex justify-content-center mt-5'>
        <div style={{width: 300}}>
        {    
            (()=>{
                switch (step) {
                    case 1:
                           return <LocationDetails
                            searchQuery = {searchQuery}
                            handleChange={handleChange}
                            setIsValidPIN = {setIsValidPIN}
                            />
                            
                        break;
                    case 2:
                            return <PayloadDimensions
                            searchQuery = {searchQuery}
                            handleChange={handleChange}/>
                        break;
                    case 3:
                            return <PayloadDetails
                            searchQuery = {searchQuery}
                            handleChange={handleChange}/>
                        break;
                    case 4:
                            return <ServiceDetails
                            searchQuery = {searchQuery}
                            handleChange={handleChange}/>
                        break;
                    case 5:
                           return <FormEntryPreview
                           searchQuery = {searchQuery}/>
                        break;
                    default:
                        break;
                }
            })()
        }
        {  step === 1 &&
            isValidPIN === false &&
            (searchQuery.source.length !==0 ||
            searchQuery.destination.length !==0 )
            ?
                <span className='color-danger fw-bolder'>invalid PIN</span>
            :
            <></>
        }


        { 
            error!="" &&
                 <span className='color-danger'>Error - {error}</span>
        }

        <div className="h-50 w-100 d-flex align-items-start flex-column ">
            {
                step > 1 && <Button  onClick={() => setStep(step - 1)}>Back</Button>
            }
            {
                step === 5 ?

                    <Button variant="primary" onClick={submitFormData}>
                        {loading ? <span> Loading</span>: <span>Submit</span>} &nbsp; {loading && <span className='loader'><ThreeDots/></span>}
                    </Button>
                    
              :
                  <Button onClick={handleNext} >
                      Next
                  </Button>
            }
            
        </div>
        </div>
    </div>
  )
}

export default MultiStepForm;
