import React from "react";
import "./HeaderUserChat.css";

export default function HeaderUserChat() {
  return (
    <div
      className="HeaderUserChat"
      style={{
        display: "flex",
        borderRadius: "20px",
      }}
    >
      <div
        style={{
          color: "white",
          display: "flex",
          background: "#6588DE",
          height: "40px",
          width: "125px",
          justifyContent: "center",
          alignItems: "center",
          borderTopLeftRadius: "20px",
          borderBottomLeftRadius: "20px",
        }}
      >
        Chat
      </div>
      <div
        style={{
          color: "white",
          width: "125px",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderTopRightRadius: "20px",
          borderBottomRightRadius: "20px",
          color: "black",
        }}
      >
        Media
      </div>
    </div>
  );
}
