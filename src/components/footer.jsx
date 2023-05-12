import React from "react";
import { BsLinkedin, BsGithub, BsMailbox } from "react-icons/bs";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="py-3">
        <footer>
          <h3 className="footer-header text-center">
            ARIEL SCHWARTZ PORTFOLIO
          </h3>
          <div className="footer-links text-center">
            <a
              className="footer-icon linkedin m-4"
              href="https://www.linkedin.com/in/ariel--schwartz/"
            >
              <BsLinkedin />
            </a>
            <a
              className="footer-icon github m-4"
              href="https://github.com/arishorts"
            >
              <BsGithub />
            </a>
            <a
              className="footer-icon mail m-4"
              href="mailto:arieljschwartz@gmail.com"
            >
              <BsMailbox />
            </a>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default Footer;
