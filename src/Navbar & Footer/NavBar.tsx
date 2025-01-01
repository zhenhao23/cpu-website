import React from "react";
import { Link, useLocation } from "react-router-dom";
import CPULogo from "../assets/CPU logo.svg";
import "./NavBar.css";

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about-us", label: "About Us" },
    { path: "/events", label: "Events" },
    { path: "/social", label: "Social" },
    { path: "/membership", label: "Membership" },
    { path: "/recruitment", label: "Recruitment" },
  ];

  return (
    <nav
      className="navbar navbar-expand-lg shadow"
      style={{ backgroundColor: "black" }}
    >
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
              {navLinks.map((link) => (
                <li className="nav-item" key={link.path}>
                  <Link
                    to={link.path}
                    className={`nav-link btn btn-link text-white position-relative hover-underline ${
                      location.pathname === link.path ? "active-link" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
