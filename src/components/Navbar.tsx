import React from "react"
import { Navbar, Nav } from 'react-bootstrap';

class NavbarSample extends React.Component {
  render() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                SampleApp
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#Select1">Select1</Nav.Link>
                    <Nav.Link href="#Select2">Select2</Nav.Link>
                    <Nav.Link href="#Select3">Select3</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
  }
}
export default NavbarSample