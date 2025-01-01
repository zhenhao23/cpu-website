import React from "react";
import CPULogo from "../assets/CPU logo.svg";
import linkedin from "../assets/Footer social icons/linkedin.svg";
import instagram from "../assets/Footer social icons/instagram.svg";
import facebook from "../assets/Footer social icons/facebook.svg";
import gmail from "../assets/Footer social icons/gmail.svg";

const Footer = () => {
  return (
    <footer
      className="text-white py-4 mt-auto"
      style={{ backgroundColor: "black" }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Logo and Club Name Section */}
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="d-flex align-items-center">
              <img
                src={CPULogo}
                alt="CPU Logo"
                className="me-3"
                width="80"
                height="80"
              />
              <span className="h5 mb-0 lh-sm">
                Computing & Programming
                <br />
                Unplugged
              </span>
            </div>
          </div>

          {/* Navigation Links Section */}
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="row text-center">
              <div className="col-4">
                <a
                  href="#"
                  className="text-white text-decoration-none mb-2 d-block"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-white text-decoration-none mb-2 d-block"
                >
                  About Us
                </a>
              </div>
              <div className="col-4">
                <a
                  href="#"
                  className="text-white text-decoration-none mb-2 d-block"
                >
                  Events
                </a>
                <a
                  href="#"
                  className="text-white text-decoration-none mb-2 d-block"
                >
                  Social
                </a>
              </div>
              <div className="col-4">
                <a
                  href="#"
                  className="text-white text-decoration-none mb-2 d-block"
                >
                  Recruitment
                </a>
                <a
                  href="#"
                  className="text-white text-decoration-none mb-2 d-block"
                >
                  Membership
                </a>
              </div>
            </div>
          </div>

          {/* Social Icons Section */}
          <div className="col-md-4">
            <div className="d-flex justify-content-center gap-4">
              <a href="#" className="social-icon-link">
                <img
                  src={linkedin}
                  alt="LinkedIn"
                  className="rounded-circle"
                  width="40"
                  height="40"
                />
              </a>
              <a href="#" className="social-icon-link">
                <img
                  src={instagram}
                  alt="Instagram"
                  className="rounded-circle"
                  width="40"
                  height="40"
                />
              </a>
              <a href="#" className="social-icon-link">
                <img
                  src={facebook}
                  alt="Facebook"
                  className="rounded-circle"
                  width="40"
                  height="40"
                />
              </a>
              <a href="#" className="social-icon-link">
                <img
                  src={gmail}
                  alt="Gmail"
                  className="rounded-circle"
                  width="40"
                  height="40"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
