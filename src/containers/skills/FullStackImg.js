import React from "react";
import "./FullStackImg.css"; // Ensure this CSS file exists and is correctly named

export default function FullStackImg(props) {
  const theme = props.theme;
  return (
    <div className="fullstack-img-container">
      <img
        src={require("/Users/user/Mwendwa1/src/containers/skills/Canon.jpg")} // Ensure this path is correct
        alt="Full Stack Illustration"
        className="fullstack-img"
        style={{ borderColor: theme.borderColor }} // Optional, if you want to style based on theme
      />
    </div>
  );
}
