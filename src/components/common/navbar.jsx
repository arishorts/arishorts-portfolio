import React from "react";
// import { Outlet, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item mx-3">
                <a
                  href="#top"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Home
                </a>
                {/* <NavLink className="nav-link" to="/home">
                  Home
                </NavLink> */}
              </li>
              <li className="nav-item mx-3">
                <a
                  href="#aboutme"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  About Me
                </a>
                {/* <NavLink className="nav-link" to="/aboutme">
                  About Me
                </NavLink> */}
              </li>
              <li className="nav-item mx-3">
                <a
                  href="#portfolio"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Portfolio
                </a>
                {/* <NavLink className="nav-link" to="/home">
                  Home
                </NavLink> */}
              </li>
              <li className="nav-item mx-3">
                <a
                  href="#resume"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Resume
                </a>
                {/* <NavLink className="nav-link" to="/resume">
                  Resume
                </NavLink> */}
              </li>
              <li className="nav-item mx-3">
                <a
                  href="#contactme"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Contact Me
                </a>
                {/* <NavLink className="nav-link" to="/contactme">
                  Contact Me
                </NavLink> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <Outlet /> */}
    </React.Fragment>
  );
};

export default NavBar;
