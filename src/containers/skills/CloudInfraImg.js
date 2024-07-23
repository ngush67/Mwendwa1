import React from "react";
import "./CloudInfraImg.css"; // Ensure this CSS file exists and is correctly named

export default function CloudInfraImg(props) {
  const theme = props.theme;
  return (
    <div className="cloudinfra-img-container">
      <img
        src={require("./Canon.jpg")} // Ensure this path is correct
        alt="Cloud Infra Illustration"
        className="CloudInfra-img"
        style={{ borderColor: theme.borderColor }} // Optional, if you want to style based on theme
      />
    </div>
  );
}
