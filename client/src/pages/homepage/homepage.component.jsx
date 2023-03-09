import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import MultiStepForm from '../../components/multiStepForm/multiStepForm.component';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import './homepage.styles.css'
const Homepage = () => {
    
    const { height, width } = useWindowDimensions();
    useEffect(() => {
        if(width>1050 && height>700)
           { 
             window.scrollTo(0, 0)
             document.body.style.overflow = "hidden";
           }
        return () => (document.body.style.overflow = "scroll");
    });
    
    
  return (
    <div className="background-1">
        <div className='background-2'>
            <div className="form-background">
                    <MultiStepForm/>
            </div>
        </div>
    </div>
  )
}

export default Homepage;