import './App.css'
import { Button } from 'react-bootstrap';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import SignUp from './components/sign-up/sign-up.component';
import SignIn from './components/sign-in/sign-in.component';
import ServiceList from './components/serviceList/serviceList.component';
<<<<<<< HEAD
import Preview from './pages/preview/preview.component';
=======
import About from './components/about/about.component';
import Contact from './components/contact/contact.component';

>>>>>>> a6199c216486a7d0cdc1b5bff7b9f5250f7b1623
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
<<<<<<< HEAD
            <Route path="/preview" element={ <Preview/> } />
=======
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
>>>>>>> a6199c216486a7d0cdc1b5bff7b9f5250f7b1623
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
