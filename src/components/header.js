import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown, FormControl, Button, Form} from 'react-bootstrap';
import {Link} from 'gatsby';
const Header = () => {
    return (
        <div>
        <Navbar bg="light" expand="lg">
        <Navbar.Brand ><Link to="/">Projekt</Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <div className="d-flex justify-content-center justify-items-center ">
            
            <Nav.Link ><Link to="/">Systemy baz</Link> </Nav.Link>
            
            <Nav.Link ><Link to="/Warunki">Warunki</Link> </Nav.Link>
            <Nav.Link ><Link to="/InOut">I/O</Link> </Nav.Link>
            <Nav.Link ><Link to="/Int">Integralność </Link> </Nav.Link>
            <Nav.Link ><Link to="/Distinct">Distinct </Link> </Nav.Link>
            <Nav.Link ><Link to="/Select">Select </Link> </Nav.Link>
            <Nav.Link ><Link to="/LikeBetween">Like/Between </Link> </Nav.Link>
            <Nav.Link ><Link to="/Sorting">Sortowanie </Link> </Nav.Link>
            <Nav.Link ><Link to="/DB">DB </Link> </Nav.Link>
            </div>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        </div>
    );
}

export default Header;
