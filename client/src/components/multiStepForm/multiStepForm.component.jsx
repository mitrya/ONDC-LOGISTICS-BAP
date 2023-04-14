import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import LocationDetails from './locationDetails.component'
import PayloadDimensions from './payloadDimensions.component'
import PayloadDetails from './payloadDetails.component';
import ServiceDetails from './serviceDetails.component';
import FormEntryPreview from './formEntryPreview.component';

import Button from 'react-bootstrap/Button';
import './multiStepForm.styles.css'

const MultiStepForm = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1)
  const [searchQuery,setSearchQuery] = useState({
    source:"",
    destination:"",
    weight:"",
    length:"",
    width:"",
    height:"",
    value:"",
    objectType:"",
    serviceType:"Immediate",
  });    
  const [fillCount,setFillCount] = useState(0);
  const [isValidPIN,setIsValidPIN] = useState(false)
  
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
    // console.log(searchQuery)
    if(fillCount !== 9) 
    {
        alert("All fields are required");
        return;
    }
        try {
			let res = await fetch("http://localhost:9000/search", {
				method: "post",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					searchQuery
				}),
			})
			let data = await res.json();
            // console.log(data)
			if (data.error) {
				alert(data.error);
			} else {
				// alert(data.message);
                navigate('/results',{state:{data : data, query : searchQuery}});
			}
		}
		catch(err){
			console.log("There is some error", err);
		}
  };


  useEffect(() => {
    let count = 0
    Object.entries(searchQuery).map(([key, val], i) => 
    {
        if(val !== "")
            count = count + 1
    })
    setFillCount(count)
    }, [searchQuery])
    
    return (
    <>
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

        {  step === 5 &&
            fillCount !== 9 ?
                <span className='color-danger fw-bolder'>all fields are required</span>
            :
            <></>
        }

        <div className="h-50 w-100 d-flex align-items-start flex-column ">
            {
                step > 1 && <Button  onClick={() => setStep(step - 1)}>Back</Button>
            }
            {
                step === 5 ?
                    <Button variant="primary" onClick={submitFormData}>
                    Submit
                    </Button>
              :
                  <Button onClick={handleNext} >
                      Next
                  </Button>
            }
            
        </div>

    </>
  )
}

export default MultiStepForm;
