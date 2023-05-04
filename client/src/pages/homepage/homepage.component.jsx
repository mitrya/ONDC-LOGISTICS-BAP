import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import MultiStepForm from '../../components/multiStepForm/multiStepForm.component';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import './homepage.styles.css'
const Homepage = () => {
    useEffect(() => {
      document.title='LogiGo'
    });
    
    
  return (
            <div className="form-background">
                    <MultiStepForm/>
            </div>
  )
}

export default Homepage;