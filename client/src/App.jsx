import './App.css'
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import SignUp from './components/sign-up/sign-up.component';
import SignIn from './components/sign-in/sign-in.component';
import ServiceList from './components/serviceList/serviceList.component';
import About from './components/about/about.component';
import Contact from './components/contact/contact.component';
import Profile from './pages/Dashboard/profile.component';
import {Route, Routes} from 'react-router-dom'



function App() {
  return (
    <>
      <Header/>
      <div className='background-1'>
        <div className='background-2'>
          <Routes>
            <Route path="/" element={ <HomePage/> } />
            <Route path="/signIn" element={ <SignIn/> } />
            <Route path="/signUp" element={ <SignUp/> } />
            <Route path="/results" element={ <ServiceList/> } />
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/profile" element={<Profile/>}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
