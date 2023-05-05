import React, { useEffect } from 'react'
import MultiStepForm from '../../components/multiStepForm/multiStepForm.component';

import './formpage.styles.css'
const Formpage = () => {
    useEffect(() => {
      document.title='Fill Courier Details'
    });
    
    
  return (
    <div className="form-background container">
      <MultiStepForm/>
    </div>
  )
}

export default Formpage;