import React from 'react'
import { Nav, Container, Navbar, Button} from 'react-bootstrap';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Logo from '../assets/logo-dark2.png';
import { NavItems } from '../Constants';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavbarMenu() {


  return (
    <div className='header'>
        <Navbar expand="lg" className="navbar py-3">
          <Container>
            <Navbar.Brand href="#home">
              <img src={Logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
              {NavItems.map((item, index) => (
                        // <li key={index}> <a href={item.href}>{item.label}</a></li>
                        <Nav.Link href={item.href} className='nav-link'>{item.label}</Nav.Link>
                    ))
                    }
               

                <Button href='#' variant="primary"> Book Now</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  )
}

export default NavbarMenu