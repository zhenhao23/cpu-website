import CPULogo from "../assets/CPU logo.svg";
import linkedin from "../assets/Footer social icons/linkedin.svg";
import instagram from "../assets/Footer social icons/instagram.svg";
import facebook from "../assets/Footer social icons/facebook.svg";
import gmail from "../assets/Footer social icons/gmail.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const navLinks = [
    [
      { path: "/", label: "Home" },
      { path: "/about-us", label: "About Us" },
    ],
    [
      { path: "/events", label: "Events" },
      { path: "/social", label: "Social" },
    ],
    [
      { path: "/membership", label: "Membership" },
      { path: "/recruitment", label: "Recruitment" },
    ],
  ];

  const socialLinks = [
    {
      img: linkedin,
      alt: "LinkedIn",
      href: "https://www.linkedin.com/company/hwumcpu",
    },
    {
      img: instagram,
      alt: "Instagram",
      href: "https://www.instagram.com/cpuhwum/",
    },
    {
      img: facebook,
      alt: "Facebook",
      href: "https://www.facebook.com/hwumCPU",
    },
    {
      img: gmail,
      alt: "Gmail",
      href: "https://www.linkedin.com/company/hwumcpu" /* TODO */,
    },
  ];

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
              {navLinks.map((links) => {
                return (
                  <div className="col-4">
                    {links.map((link) => {
                      return (
                        <Link
                          to={link.path}
                          className="text-white text-decoration-none mb-2 d-block"
                        >
                          {link.label}
                        </Link>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Social Icons Section */}
          <div className="col-md-4">
            <div className="d-flex justify-content-center gap-4">
              {socialLinks.map((link) => {
                return (
                  <a href={link.href} className="social-icon-link">
                    <img
                      src={link.img}
                      alt={link.alt}
                      className="rounded-circle"
                      width="40"
                      height="40"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
