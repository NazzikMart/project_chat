import React from "react";
import "./LeftMenu.css";
import User from "../User/User";
import Users from "../Users/Users";
import MenuFunctions from "../MenuFunctions/MenuFunctions";
import NewChat from "../NewChat/NewChat";
import { useState } from "react";

export default function LeftMenu() {
  const [state, setState] = useState(true);
  if (state === true) {
    return (
      <div className="LeftMenu">
        <User />
        <Users newChat={() => setState(false)} />

        <MenuFunctions />
      </div>
    );
  } else {
    return (
      <div className="LeftMenu">
        <User />
        <Users newChat={() => setState(false)} />

        <MenuFunctions />

        <div className="NewChat">
          <NewChat />
        </div>
      </div>
    );
  }
}
