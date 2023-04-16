import React from "react";
import "./LeftMenu.css";
import User from "../User/User";
import Users from "../Users/Users";
import MenuFunctions from "../MenuFunctions/MenuFunctions";
import NewChat from "../NewChat/NewChat";
import { useState } from "react";
import HeaderUserChat from "../HeaderUsersChat/HeaderUserChat";
import MessageChatUser from "../MessageChatUser/MessageChatUser";

export default function LeftMenu() {
  const [state, setState] = useState(true);
  const [toogle, setToogle] = useState(true);
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
          <HeaderUserChat />
          <MessageChatUser />
        </div>
      </div>
    );
  }
}
