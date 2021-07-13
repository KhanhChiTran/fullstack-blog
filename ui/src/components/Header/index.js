import React from "react"
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand>
          {" "}
          <Link to="/home" className="nav-link">
            {" "}
            Home
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Link to="/home" className="nav-link">
                {" "}
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/contact" className="nav-link">
                {" "}
                Contact
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link to="/about" className="nav-link">
                {" "}
                About
              </Link>
            </Nav.Item>
            <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavDropdown.ItemText>
                <Link to="/login"> Login</Link>
              </NavDropdown.ItemText>
              <NavDropdown.ItemText>
                <Link to="/registration"> Sign Up</Link>
              </NavDropdown.ItemText>
              <NavDropdown.ItemText></NavDropdown.ItemText>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
