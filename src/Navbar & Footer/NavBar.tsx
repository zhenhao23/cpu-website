import React from "react";
import CPULogo from "../assets/CPU logo.svg";
import "./NavBar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container">
        <div className="d-flex align-items-center">
          <img
            src={CPULogo}
            alt="CPU Logo"
            className="me-3"
            width="80"
            height="80"
          />
          <span className="navbar-brand mb-0 h1 text-white lh-2">
            Computing & Programming
            <br />
            Unplugged
          </span>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <div className="nav-container px-4 py-2">
            <ul className="navbar-nav gap-4">
              <li className="nav-item">
                <button className="nav-link btn btn-link text-white position-relative hover-underline">
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-link text-white position-relative hover-underline">
                  About Us
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-link text-white position-relative hover-underline">
                  Events
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-link text-white position-relative hover-underline">
                  Social
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-link text-white position-relative hover-underline">
                  Membership
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-link text-white position-relative hover-underline">
                  Recruitment
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
