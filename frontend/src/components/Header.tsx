//rafce

import React from 'react'
import { Navbar,Nav,Container } from 'react-bootstrap';



const Header = () => {
  return (

        <Navbar    className='sticky-top' bg="dark"  variant='dark'  expand="lg" >
          <Container>
            <Navbar.Brand href="/">React Auth</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"> 
            <Nav.Link href="/store"> store</Nav.Link>
            </Nav>
              <Nav className="ms-auto">
                <Nav.Link href="/signup">Sign Up</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
export default Header
