import React from "react";
import CPUMember from "../assets/CPU photos/Membership.svg";
import fireworks from "../assets/Membership gif/fireworks.gif";
import networking from "../assets/Membership gif/networking.gif";
import industry from "../assets/Membership gif/industry.gif";
import experience from "../assets/Membership gif/experience.gif";
import "./Membership.css";

const Membership = () => {
  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        {/* Hero Section */}
        <div className="container-fluid p-0">
          <div className="row g-0 min-h-screen py-5 mb-3">
            <div className="col-md-6 d-flex align-items-center justify-content-center p-5">
              <img
                src={CPUMember}
                alt="CPU Club Members"
                className="w-75 h-auto"
              />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center position-relative p-5">
              <div className="d-flex mb-5">
                <div className="border-start border-5 border-white me-4"></div>
                <div>
                  <h1 className="text-white ultra-bold mb-4">
                    CODE &{" "}
                    <span
                      style={{
                        WebkitTextStroke: "2px #75FF66",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      INNOVATE
                    </span>
                  </h1>
                  <p className="text-white">
                    Become a member of CPU and dive into the world of computing
                    with exclusive access to coding events, hackathons, and
                    industry connections
                  </p>
                </div>
              </div>
              <button
                className="btn px-4 py-2 ms-0 glow-button"
                style={{
                  width: "fit-content",
                  borderColor: "#75FF66",
                  borderWidth: "2px",
                  color: "white",
                  borderRadius: "14px",
                }}
              >
                Join Now
              </button>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="container text-center py-5 my-5">
          <h1 className="text-white ultra-bold mb-4">
            WHY JOIN{" "}
            <span
              style={{
                WebkitTextStroke: "2px #75FF66",
                WebkitTextFillColor: "transparent",
              }}
            >
              CPU
            </span>{" "}
            ?
          </h1>

          <div className="row justify-content-center py-5 my-5">
            <div className="col-md-3 benefit-item">
              <div className="gif-container mb-3">
                <img
                  src={fireworks}
                  alt="Free Events"
                  className="rounded-circle"
                  width="150"
                  height="150"
                />
              </div>
              <p className="text-white">Free Events</p>
            </div>
            <div className="col-md-3 benefit-item">
              <div className="gif-container mb-3">
                <img
                  src={networking}
                  alt="Networking"
                  className="rounded-circle"
                  width="150"
                  height="150"
                />
              </div>
              <p className="text-white">Networking Opportunities</p>
            </div>
            <div className="col-md-3 benefit-item">
              <div className="gif-container mb-3">
                <img
                  src={industry}
                  alt="Industry Visit"
                  className="rounded-circle"
                  width="150"
                  height="150"
                />
              </div>
              <p className="text-white">Industry Visit</p>
            </div>
            <div className="col-md-3 benefit-item">
              <div className="gif-container mb-3">
                <img
                  src={experience}
                  alt="Experience"
                  className="rounded-circle"
                  width="150"
                  height="150"
                />
              </div>
              <p className="text-white">Gain Experience</p>
            </div>
          </div>

          <button
            className="btn px-4 py-2 glow-button"
            style={{
              borderColor: "#75FF66",
              borderWidth: "2px",
              color: "white",
              borderRadius: "14px",
            }}
          >
            Sign Up Here
          </button>
        </div>
      </div>
    </>
  );
};

export default Membership;
