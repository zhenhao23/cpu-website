import React from "react";

const Social = () => {
  return (
    <div
      style={{
        background: `
    linear-gradient(135deg, #000000 10%, transparent 50%),
    linear-gradient(-45deg, #000000 10%, transparent 50%),
    linear-gradient(25deg, #000000 10%, transparent 70%),
    #199C57
  `,
        minHeight: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container position-relative">
        {/* Your content will go here */}
      </div>
    </div>
  );
};

export default Social;
