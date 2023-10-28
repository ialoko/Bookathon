import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";


const Navigation= () =>{
  return (
    <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">Bookathon</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/book">My Books</Nav.Link>
            <Nav.Link href="#recommend">Recommendations</Nav.Link>
            <Nav.Link href="#search">Search</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}
export default Navigation;