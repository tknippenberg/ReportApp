import React, { useState } from "react";
import { hamburger, logo } from "../assets";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className="header-div">
        <img
          className="hamburger-menu"
          src={hamburger}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <Link className="logo" to="/">
          {" "}
          <img src={logo} />
        </Link>
        <div className={`navbar-options-div ${isMenuOpen ? "show-menu" : ""}`}>
          <a className="nav-links" href="#">
            Login
          </a>
          <a className="nav-links" href="#">
            Terms and Conditions
          </a>
          <a className="nav-links" href="#">
            Privacy Policy
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
