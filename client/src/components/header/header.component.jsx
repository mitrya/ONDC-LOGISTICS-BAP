import React from 'react'
import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import  './header.styles.css'
function Header() {
    const [user, setuser] = useState('')
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint =  980;
    const navigate = useNavigate();
    // console.log(localStorage.getItem('user'));
    // console.log(user);
    React.useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
         // subscribe to window resize event "onComponentDidMount"
         window.addEventListener("resize", handleResizeWindow);
        setuser(JSON.parse(localStorage.getItem('user')));
         return () => {
           // unsubscribe "onComponentDestroy"
           window.removeEventListener("resize", handleResizeWindow);
         };
       }, []);

    function LogoutHandler() {
      setuser('');
      localStorage.clear();
      useNavigate('/');
    }

  return (
    <>
        <Navbar  expand="lg " >
          <Container fluid>
            <Navbar.Brand href="#">ONDC Logistics</Navbar.Brand>
            <Navbar.Toggle aria-controls='offcanvasNavbar-expand-lg' />
            <Navbar.Offcanvas
              id='offcanvasNavbar-expand-lg'
              aria-labelledby='offcanvasNavbarLabel-expand-lg'
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id='offcanvasNavbarLabel-expand-lg'>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 pe-3">
                    <Nav.Link as={Link} to = "/">Home</Nav.Link>
                    <Nav.Link as={Link} to = "/about">About</Nav.Link>
                    <Nav.Link as={Link} to ="/contact">Contact Us</Nav.Link>
                </Nav>
                
                {
                      (user)?
                      <div>
                          <NavDropdown title={user.name} id="offcanvasNavbarDropdown-expand-lg" className={(width>breakpoint) ? 'dropstart' : 'dropdown' }>
                                <NavDropdown.Item href="#action3" style={{':hover' : {"color" : "black"} }}>Current Shipments</NavDropdown.Item>
                                <NavDropdown.Item href="#action3">Track Shipments</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">History</NavDropdown.Item>
                                <NavDropdown.Item href="#action4" onClick={LogoutHandler}>Logout</NavDropdown.Item>
                  
                                <NavDropdown.Item href="#action5">
                                  Raise Grievance
                                </NavDropdown.Item>
                        </NavDropdown>
                      </div>
                      :
                      <>
                        <Link to="/signIn" className='link'>Login</Link>
                        <Link to="/signUp" className='link'>Register</Link>
                      </>
              }

              </Offcanvas.Body>
            
            </Navbar.Offcanvas>
          </Container>
        </Navbar>    
    </>
    );
}

export default Header;