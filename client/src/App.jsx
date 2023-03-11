import './App.css'
import { Button } from 'react-bootstrap';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component'
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component'
import {Route, Routes} from 'react-router-dom'

function App() {

  return (
    <>
      <Header/>
      <div className='background-1'>
        <div className='background-2'>
          <Routes>
            <Route path="/" element={ <HomePage/> } />
            <Route path="/signIn" element={ <SignInSignUp/> } />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
