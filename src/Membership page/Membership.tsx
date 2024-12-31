import React from "react";
import CPUMember from "../assets/CPU photos/MemberBody.svg";
import "./Membership.css";

const roles = [
  {
    title: "Project Executive",
    color: "#032A46",
    description:
      "Lead and manage various technical projects within CPU. Work closely with team members to ensure successful project delivery.",
  },
  {
    title: "Event Executive",
    color: "#063424",
    description:
      "Plan and execute engaging events for the computing community. Coordinate with stakeholders and ensure smooth event operations.",
  },
  {
    title: "Event Director",
    color: "#199C57",
    description:
      "Oversee the strategic planning of CPU events. Develop innovative event concepts and guide the event team to success.",
  },
  {
    title: "Project Director",
    color: "#7CC55A",
    description:
      "Direct and supervise multiple project teams. Set project guidelines and ensure alignment with CPU's objectives.",
  },
];

const AboutUs = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="row g-0 min-h-screen py-5 mb-3">
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
                  Become a committee member of CPU and help shape the future of
                  our computing club through leadership, innovation, and
                  collaboration!
                </p>
              </div>
            </div>
            <button
              className="btn rounded-pill px-4 py-2 ms-0 glow-button"
              style={{
                width: "fit-content",
                borderColor: "#75FF66",
                borderWidth: "2px",
                color: "white",
              }}
            >
              View roles
            </button>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center p-5">
            <img
              src={CPUMember}
              alt="CPU Club Members"
              className="w-75 h-auto border border-dark border-3"
            />
          </div>
        </div>

        <div className="container py-5">
          <h2 className="text-white text-center mb-5 ultra-bold">
            WE ARE{" "}
            <span
              style={{
                WebkitTextStroke: "1px #75FF66",
                WebkitTextFillColor: "transparent",
              }}
            >
              RECRUITING
            </span>{" "}
            FOR...
          </h2>
          <div className="row g-4 justify-content-center">
            {roles.map((role, index) => (
              <div key={index} className="col-md-3">
                <div
                  className="role-container"
                  style={{
                    backgroundColor: role.color,
                  }}
                >
                  <div className="role-content">
                    <h3 className="role-title">{role.title}</h3>
                    <div className="plus-icon-wrapper">
                      <div className="plus-icon">+</div>
                    </div>
                    <div className="role-description">
                      <p>{role.description}</p>
                      <button className="apply-button">Apply Now</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
