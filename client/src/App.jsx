import './App.css'
import { Button } from 'react-bootstrap';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component'
import {Route, Routes} from 'react-router-dom'

function App() {

  return (
    <>
    
      <Header/>
        <Routes>
          <Route path="/" element={ <HomePage/> } />
        </Routes>
        
    </>
  )
}

export default App
