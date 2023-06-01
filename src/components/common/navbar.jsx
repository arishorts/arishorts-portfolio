import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <React.Fragment>
      <Navbar className="text-center" collapseOnSelect expand="lg" fixed="top">
        <Navbar.Brand id="navbar-brand" href="#home" className="p-0 ps-5 mx-0">
          Ariel.
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="me-5"
          id="burger"
        />
        <Navbar.Collapse id="responsive-navbar-nav" className="text-center">
          <Nav className="ms-auto pe-lg-5 pe-0">
            <Nav.Link href="#home" id="navbar-item-aboutme">
              Home
            </Nav.Link>
            <Nav.Link href="#aboutme" id="navbar-item-aboutme">
              About Me
            </Nav.Link>
            <Nav.Link href="#portfolio" id="navbar-item-portfolio">
              Portfolio
            </Nav.Link>
            <Nav.Link href="#resume" id="navbar-item-resume">
              Resume
            </Nav.Link>
            <Nav.Link href="#contactme" id="navbar-item-contactme">
              Contact Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
};

export default NavBar;
