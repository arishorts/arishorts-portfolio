import React from "react";

const NavBar = ({ currentPage, onPageChange }) => {
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
            <ul className="navbar-nav ">
              <li className="nav-item mx-3">
                <a
                  href="#aboutme"
                  onClick={() => onPageChange("AboutMe")}
                  style={{ textDecoration: "none" }}
                  className={
                    currentPage === "AboutMe"
                      ? "navbar-item active"
                      : "navbar-item"
                  }
                >
                  About Me
                </a>
              </li>
              <li className="nav-item mx-3">
                <a
                  href="#portfolio"
                  onClick={() => onPageChange("Portfolio")}
                  style={{ textDecoration: "none" }}
                  className={
                    currentPage === "Portfolio"
                      ? "navbar-item active"
                      : "navbar-item"
                  }
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item mx-3">
                <a
                  href="#resume"
                  onClick={() => onPageChange("Resume")}
                  style={{ textDecoration: "none" }}
                  className={
                    currentPage === "Resume"
                      ? "navbar-item active"
                      : "navbar-item"
                  }
                >
                  Resume
                </a>
              </li>
              <li className="nav-item mx-3">
                <a
                  href="#contactme"
                  onClick={() => onPageChange("ContactMe")}
                  style={{ textDecoration: "none" }}
                  className={
                    currentPage === "ContactMe"
                      ? "navbar-item active"
                      : "navbar-item"
                  }
                >
                  Contact Me
                </a>
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
