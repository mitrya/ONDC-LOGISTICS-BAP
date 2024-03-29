import './App.css'
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import SignUp from './components/signUp/signUp.component';
import SignIn from './components/signIn/signIn.component';
import ServiceList from './components/serviceList/serviceList.component';
// import About from './components/about/about.component';
import Contact from './components/contact/contact.component';
import Profile from './pages/Dashboard/profile.component';
import Preview from './pages/preview/preview.component';
import Grievance from './components/grievance/grievance.component';
import {Route, Routes} from 'react-router-dom'
import Payment from './components/payment/payment.component';
import OrderHistory from './components/orderHistory/orderHistory.component';
import Footer from './components/footer/footer';
import Formpage from './pages/Form/formpage.component';
import Track from './components/track/track.component';
import Terms from './components/terms_and_conditions/terms.component';
import Verifyotp from './components/verifyOTP/verifyotp.component';
import ForgotPassword from './components/forgotPassword/forgotPassword.component';
import SetNewPassword from './components/setNewPassword/setNewPassword.component';

function App() {
  return (
    <div className='body'>
      <main className="body-content ">
          <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/results" element={<ServiceList />} />
          <Route path="/preview" element={<Preview />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/form" element={<Formpage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/orders" element={<OrderHistory />} />
          <Route path="/grievance" element={<Grievance />} />
          <Route path="/track" element={<Track />} />
          <Route path="/terms_and_conditions" element={<Terms />} />
          <Route path="/verifyOTP" element={<Verifyotp/>} />
          <Route path="/forgotPassword" element={<ForgotPassword/>} />
          <Route path="/setNewPassword" element={<SetNewPassword/>} />
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App
