import React from 'react'
import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {ThreeDots} from "react-loading-icons"

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
            <Navbar.Brand>
            <Link to="/" className='logo-helper'>
               <img
                  src="/logigo.jpeg"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
                LogiGo
            </Link>
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
                    {/* <Nav.Link as={Link} to = "/form">New Courier</Nav.Link> */}
                </Nav>
                
                {
                      (user)?
                      <div>
                          <NavDropdown title={user.name} id="offcanvasNavbarDropdown-expand-lg" className={(width>breakpoint) ? 'dropstart' : 'dropdown' }>
                                <NavDropdown.Item className='temp'><Link to="/profile" className="helper">My Account</Link></NavDropdown.Item>
                                {/* <NavDropdown.Item><Link to="/track" className="helper">Track Shipments</Link></NavDropdown.Item> */}
                                <NavDropdown.Item><Link to="/orders" className="helper">History</Link></NavDropdown.Item>
                                <NavDropdown.Item onClick={LogoutHandler}><Link to="" className="helper">Logout</Link></NavDropdown.Item>
                                <NavDropdown.Item className='temp1'><Link to="/grievance" className="helper">Raise a Complaint</Link></NavDropdown.Item>

                                
                        </NavDropdown>
                      </div>
                      :
                      <>
                        {/* <a href="/signIn" className="btn btn1" role="button">Login</a>
                        <a href="/signUp" className="btn btn1" role="button">Register</a> */}
                        <div className="d-flex">
                          <Link to="/signIn" className='link btn btn1'>Login</Link>
                          <Link to="/signUp" className='link btn btn1'>Register</Link>
                        </div>
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