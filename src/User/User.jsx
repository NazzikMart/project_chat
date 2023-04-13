import React from "react";
import "./User.css";

export default function User() {
  return (
    <div className="User">
      <span className="UserLogo"></span>
      <p className="UserName">Nazik Mart</p>
      <span className="UserMemory">Memory</span>
      <div className="optionsUser">
        <span className="option">.</span>
        <span className="option">.</span>
        <span className="option">.</span>
      </div>
    </div>
  );
}
