import React from 'react'
import { useState } from 'react';

import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import  './header.styles.css'
function Header() {
    const [signedIn, setSignedIn] = useState(true)
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 750;

    React.useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
         // subscribe to window resize event "onComponentDidMount"
         window.addEventListener("resize", handleResizeWindow);
         return () => {
           // unsubscribe "onComponentDestroy"
           window.removeEventListener("resize", handleResizeWindow);
         };
       }, []);
     
  return (
        <Navbar  expand="lg " >
          <Container fluid>
            <Navbar.Brand href="#">Rev Logistics</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link as={Link} to = "/">Home</Nav.Link>
                <Nav.Link as={Link} to = "/about" disabled>About</Nav.Link>
                <NavDropdown title="Contact Us" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#" disabled>Customer Care</NavDropdown.Item>
                  <NavDropdown.Item href="#" disabled>
                    Locate Us
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="https://github.com/mitrya/ONDC-LOGISTICS-BAP">
                    Project Repository
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              {
                (signedIn)?

                <NavDropdown title="UserName" id="navbarScrollingDropdown" className={(width>breakpoint) ? 'dropstart' : 'dropdown' }>
                <NavDropdown.Item href="#action3">Current Shipments</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Track Shipments</NavDropdown.Item>
                <NavDropdown.Item href="#action4">History</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Raise Grievance
                </NavDropdown.Item>
              </NavDropdown>
                :
                <>
                  <Link to="/signIn" className='link'>Login</Link>
                </>

              }
            </Navbar.Collapse>
          </Container>
        </Navbar>    
  );
}

export default Header;