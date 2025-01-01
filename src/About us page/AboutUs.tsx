import React from "react";
import CPUMember1 from "../assets/CPU photos/AboutUs2.svg";
import CPUMember2 from "../assets/CPU photos/AboutUs1.svg";
import TeamSection from "./TeamSection";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        {/* Hero Section */}
        <div className="container-fluid p-0">
          <div className="row g-0 min-h-screen py-5 my-3">
            <div className="col-md-6 d-flex flex-column justify-content-center position-relative p-5">
              <div className="d-flex mb-5">
                <div className="border-start border-5 border-white me-4"></div>
                <div>
                  <h1 className="text-white ultra-bold mb-4">
                    UNLOCK YOUR
                    <br />
                    <span
                      style={{
                        WebkitTextStroke: "2px #75FF66",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      POTENTIAL
                    </span>
                  </h1>
                  <p className="text-white">
                    Become a committee member of CPU and help shape the future
                    of our computing club through leadership, innovation, and
                    collaboration!
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
                View roles
              </button>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center p-5 position-relative">
              <div className="images-container">
                <img
                  src={CPUMember1}
                  alt="CPU Club Members 1"
                  className="image-back w-75"
                />
                <img
                  src={CPUMember2}
                  alt="CPU Club Members 2"
                  className="image-front w-75"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="container py-5 my-5">
          <h1 className="text-white text-center ultra-bold mb-4">
            OVERVIEW OF WHAT{" "}
            <span
              style={{
                WebkitTextStroke: "2px #75FF66",
                WebkitTextFillColor: "transparent",
              }}
            >
              CPU
            </span>{" "}
            DOES
          </h1>
          <div className="row g-4 my-5">
            <div className="col-md-4">
              <div
                className="overview-card"
                style={{ backgroundColor: "#7CC55A" }}
              >
                <h3 className="overview-title">SKILL DEVELOPMENT</h3>
                <p className="overview-text">
                  Enhance your technical skills through workshops, coding
                  sessions, and hands-on projects. Learn industry-relevant
                  programming languages and tools while developing
                  problem-solving abilities.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="overview-card"
                style={{ backgroundColor: "#199C57" }}
              >
                <h3 className="overview-title">INDUSTRY EXPOSURE</h3>
                <p className="overview-text">
                  Connect with industry professionals through networking events,
                  company visits, and guest speaker sessions. Gain insights into
                  real-world applications and career opportunities in
                  technology.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="overview-card"
                style={{ backgroundColor: "#063424" }}
              >
                <h3 className="overview-title">COLLABORATION & INNOVATION</h3>
                <p className="overview-text">
                  Work on team projects, participate in hackathons, and engage
                  in creative problem-solving. Foster innovation while building
                  lasting connections with like-minded peers.
                </p>
              </div>
            </div>
          </div>
        </div>
        <TeamSection />
      </div>
    </>
  );
};

export default AboutUs;
