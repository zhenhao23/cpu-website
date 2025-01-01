import React from "react";
import ZhenHaoImg from "../assets/CPU committee/Zhen Hao.jpg";
import CheerfulImg from "../assets/CPU committee/Loh Yue Hung.png";
import DavidImg from "../assets/CPU committee/David Ling.jpg";
import AvrilImg from "../assets/CPU committee/Lim Avril.jpg";
import SuhaibImg from "../assets/CPU committee/Suhaib Hameed Zuberi.jpg";
import RyanImg from "../assets/CPU committee/Ryan Goh.jpg";
import TengkuImg from "../assets/CPU committee/Tengku Adam.jpg";
import CandraImg from "../assets/CPU committee/Candra.png";

interface TeamMember {
  name: string;
  role?: string;
  imageUrl: string;
}

const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Zhen Hao",
      imageUrl: ZhenHaoImg,
      role: "President",
    },
    {
      name: "Cheerful",
      imageUrl: CheerfulImg,
      role: "Vice President",
    },
    {
      name: "David",
      imageUrl: DavidImg,
      role: "Treasurer",
    },
    {
      name: "Avril",
      imageUrl: AvrilImg,
      role: "Secretary",
    },
    {
      name: "Suhaib",
      imageUrl: SuhaibImg,
      role: "Project Director",
    },
    {
      name: "Ryan",
      imageUrl: RyanImg,
      role: "Event Director",
    },
    {
      name: "Tengku Adam",
      imageUrl: TengkuImg,
      role: "Marketing Director",
    },
    {
      name: "Candra",
      imageUrl: CandraImg,
      role: "Publicity Director",
    },
  ];

  // Colors for each column
  const columnColors = ["#032A46", "#063424", "#199C57", "#7CC55A"];

  return (
    <div className="container py-5">
      <h1 className="text-white text-center ultra-bold mb-4">
        MEET THE{" "}
        <span
          style={{
            WebkitTextStroke: "2px #75FF66",
            WebkitTextFillColor: "transparent",
          }}
        >
          TEAM
        </span>
      </h1>
      <div className="row g-4">
        {teamMembers.map((member, index) => (
          <div key={member.name} className="col-md-3 col-sm-6">
            <div
              className="team-member-card"
              style={{
                backgroundColor: columnColors[index % 4],
                borderRadius: "20px",
                padding: "2rem",
                height: "300px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",
                transition: "all 0.3s ease",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseOver={(e) => {
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-10px)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 10px 20px rgba(0,0,0,0.2)";
              }}
              onMouseOut={(e) => {
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div
                className="team-member-image mb-3"
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              >
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <h3
                className="text-white mb-2 text-center"
                style={{ fontSize: "1.25rem", fontWeight: 700 }}
              >
                {member.name}
              </h3>
              {member.role && (
                <p className="text-white-50 mb-0 text-center">{member.role}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
