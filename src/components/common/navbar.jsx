import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = ({ currentPage, onPageChange }) => {
  return (
    <React.Fragment>
      <Navbar
        // className="navbar"
        collapseOnSelect
        expand="lg"
        fixed="top"
      >
        <Navbar.Brand id="navbar-brand" href="#top" className="p-0 ps-5 m-0">
          Ariel.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto pe-5">
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
