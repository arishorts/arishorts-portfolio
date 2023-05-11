import React from "react";
import NavBar from "./navbar";
// import { Outlet, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <React.Fragment>
      <div
        className="header-container row p-0 m-0"
        style={{ position: "fixed", width: "100%" }}
      >
        <div className="col-2 ">
          {/* <NavLink className="navbar-brand" to="/">
            Ariel
          </NavLink> */}

          <a
            href="#top"
            className="h1"
            style={{ textDecoration: "none", color: "white" }}
          >
            Ariel.
          </a>
        </div>
        <div className="col-10  d-flex justify-content-end">
          <NavBar />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
