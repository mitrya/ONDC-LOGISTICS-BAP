import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import {lookup as PINLookup} from 'india-pincode-lookup'
import Button from 'react-bootstrap/Button';
import {ThreeDots} from "react-loading-icons"
import Container from 'react-bootstrap/Container';
import './homepage.styles.css'

const Homepage = () => {
	const navigate = useNavigate();

	const pinExample = "Example 110001"
    const pinError  = "invalid PIN"
    const [sourceDescription, setSourceDescription] = useState(pinExample)
    const [destinationDescription, setDestinationDescription] = useState(pinExample)
	const [locationQuery,setlocationQuery] = useState({
		source:"",
		destination:""
	  });    
	  const [isValidPIN,setIsValidPIN] = useState(false)
	  
	  const handleChange = (event) => {
		setlocationQuery({ ...locationQuery, [event.target.name]: event.target.value });
	  };

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

	const submitLocationData = async (e) => {
		e.preventDefault();
		if(locationQuery.source=="" || locationQuery.destination=="") {
			alert('Please enter the pincodes')
			return
		}
		if(!localStorage.getItem('user')) {
			navigate('/signin')
			return
		}
		navigate('/form',{state : {locationData : {
			...locationQuery,
			isValidPIN
		}}})

	}
    useEffect(() => {
      	document.title='LogiGo'
    });
	useEffect(() => {
        setSourceDescription(returnDescription(locationQuery.source))
    }, [locationQuery.source])
     
     useEffect(() => {
        setDestinationDescription(returnDescription(locationQuery.destination))
    }, [locationQuery.destination])
    
    useEffect(() => {
        setIsValidPIN(returnIsValid(destinationDescription) && returnIsValid(sourceDescription))
    })
    
    
  	return (
      	<div className="home">
			<div className="hhero">
				<h1 className="">
					Welcome to <span>LogiGO</span>
				</h1>
				<p className="hhero-subtext">
					Your reliable and efficient courier service provider. <a href="https://logigo.netlify.app/">Visit</a> our website on the Open Network for Digital Commerce (ONDC) Network!
				</p>
			</div>
			<div className="image-container" >
				<img src='/banner.jpg' className='img-fluid' alt='Sample' />
					<div className='d-flex justify-content-center align-items-center'>
						<div className="formContainer">
							<Form>
								<Form.Group className="mb-3 ">
									<h3>Courier Details</h3>
								</Form.Group>
								<Form.Group className="mb-3 ">
									<Form.Label>Source Pincode*</Form.Label>
									<Form.Control 
										name="source"
										type="text" 
										placeholder="Enter source PIN code"
										required
										value={locationQuery.source}
										onChange={handleChange}
									/>
									<Form.Text className="text-muted ">
										<span className={(returnIsValid(sourceDescription))?"text-success fw-bolder ":""}>{sourceDescription}</span>
									</Form.Text>
								</Form.Group>
									<Form.Group className="mb-3 ">
									<Form.Label>Destination Pincode*</Form.Label>
									<Form.Control 
										name="destination"
										type="text" 
										placeholder="Enter destination PIN code" 
										required
										value={locationQuery.destination}
										onChange={handleChange}
									/>
									<Form.Text className="text-muted ">
										<span className={(returnIsValid(destinationDescription))?"text-success fw-bolder ":""}>{destinationDescription}</span>
									</Form.Text>
								</Form.Group>
								<Button variant="primary" onClick={submitLocationData} >
									Submit
								</Button>
							</Form>
						</div>
					</div>
			</div>

			<div className="content">
				<Container>
					<h2 className="section-header">Our Mission</h2>
					<p>
						At ONDC Logistics, our mission is to provide reliable, efficient, and sustainable shipping solutions to our customers, while delivering exceptional customer service and a seamless user experience. We are constantly evolving and innovating to stay ahead of the ever-changing logistics landscape, and we are proud to be a trusted partner for businesses and individuals who value speed, reliability, and sustainability in their shipping operations.
					</p>
					<div className="image-homepage">
						<img src="https://th.bing.com/th/id/OIP.447YziGb5D5LTmhWH7AceAHaEU?pid=ImgDet&rs=1" alt="Mission image" />
					</div>

					<h2 className="section-header">Our Team</h2>
					<p>
						Our team of experienced logistics professionals is dedicated to delivering exceptional service with a customer-centric approach. We take pride in our ability to offer customized shipping solutions that meet the unique needs of each customer, whether it's a small package or a large shipment. With our extensive network of shipping partners and carriers, we can offer competitive rates and reliable transit times to destinations across the globe.
					</p>
					<div className="image-homepage justify-content-center">
						<img src="https://th.bing.com/th/id/OIP.e1me_6IwMOcMZVH_MUk_9gHaFb?pid=ImgDet&rs=1" alt="Team image" />
					</div>

					<h2 className="section-header">Our Platform</h2>
					<p>
						Our user-friendly platform is designed to make shipping easy and convenient for our customers. With just a few clicks, you can easily create shipments, track packages in real-time, manage your shipping preferences, and access detailed shipping analytics. We also offer flexible payment options and transparent pricing, so you can have peace of mind knowing that you are getting the best value for your shipping needs.
					</p>
					<div className="image-homepage">
						<img src="https://my1wifi.b-cdn.net/wp-content/uploads/2021/04/What-to-know-about-Internet-Speed-while-Working-from-Home-768x528.jpg" alt="Platform image" />
					</div>
					<h2 className="section-header">Our Commitment to Sustainability</h2>
					<p>
						At ONDC Logistics, we are committed to sustainability and environmental responsibility. We strive to minimize our carbon footprint by optimizing shipping routes, using eco-friendly packaging materials, and promoting responsible shipping practices. We also offer innovative solutions, such as consolidated shipping and smart packaging, to reduce waste and promote sustainable shipping practices.
					</p>
          
       			 </Container>
      		</div>
        </div>
  	)
}

export default Homepage;
