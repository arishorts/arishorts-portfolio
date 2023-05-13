import React from "react";
import NavBar from "./navbar";
// import { Outlet, NavLink } from "react-router-dom";

const Header = ({ currentPage, handlePageChange }) => {
  return (
    <React.Fragment>
      <div
        className="header-container row p-0 m-0"
        style={{ position: "fixed", width: "100%" }}
      >
        <div className="col-2">
          <a
            href="#top"
            className="h1 header-brand"
            style={{ textDecoration: "none" }}
          >
            Ariel.
          </a>
        </div>
        <div className="col-10  d-flex justify-content-end">
          <NavBar currentPage={currentPage} onPageChange={handlePageChange} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
