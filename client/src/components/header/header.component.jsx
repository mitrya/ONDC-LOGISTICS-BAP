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
      // useNavigate('/');
      location.assign('/')
    }
     
  return (
    <>
        <Navbar  expand="lg " >
          <Container fluid>
            <Navbar.Brand href='/'>
              <img
                src="/logigo.jpeg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
              LogiGo
            </Navbar.Brand>
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
                </Nav>
                
                {
                      (user)?
                      <div>
                          <NavDropdown title={user.name} id="offcanvasNavbarDropdown-expand-lg" className={(width>breakpoint) ? 'dropstart' : 'dropdown' }>
                              <NavDropdown.Item  href="/profile" className='temp'>My Account</NavDropdown.Item>
                                <NavDropdown.Item  href="/track">Track Shipments</NavDropdown.Item>
                                <NavDropdown.Item  href="/orders">History</NavDropdown.Item>
                                <NavDropdown.Item  href="" onClick={LogoutHandler}>Logout</NavDropdown.Item>
                                <NavDropdown.Item  href="/grievance" className='temp1'>
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