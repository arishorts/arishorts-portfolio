import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavBar = ({ currentPage, onPageChange }) => {
  return (
    <React.Fragment>
      <Navbar
        // className="navbar"
        collapseOnSelect
        expand="lg"
        fixed="top"
      >
        <Container>
          <Navbar.Brand id="navbar-brand" href="#top">
            Ariel.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#aboutme"
                id="navbar-item-aboutme"
                // onClick={() => onPageChange("AboutMe")}
                style={{ textDecoration: "none" }}
                // className={
                //   currentPage === "AboutMe" ? "nav-item active" : "nav-item"
                // }
              >
                About Me
              </Nav.Link>
              <Nav.Link
                href="#portfolio"
                // onClick={() => onPageChange("Portfolio")}
                // style={{ color: "yellow" }}
                id="navbar-item-portfolio"
                // className={
                //   currentPage === "Portfolio"
                //     ? "navbar-item active"
                //     : "navbar-item"
                // }
              >
                Portfolio
              </Nav.Link>
              <Nav.Link
                href="#resume"
                // onClick={() => onPageChange("Resume")}
                id="navbar-item-resume"
                style={{ textDecoration: "none" }}
                // className={
                //   currentPage === "Resume"
                //     ? "navbar-item active"
                //     : "navbar-item"
                // }
              >
                Resume
              </Nav.Link>
              <Nav.Link
                href="#contactme"
                // onClick={() => onPageChange("ContactMe")}
                id="navbar-item-contactme"
                style={{ textDecoration: "none" }}
                // className={
                //   currentPage === "ContactMe"
                //     ? "navbar-item active"
                //     : "navbar-item"
                // }
              >
                Contact Me
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};

export default NavBar;
