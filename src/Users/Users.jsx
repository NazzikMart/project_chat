import React from "react";
import "./Users.css";
let users = [
  {
    id: 1,
    name: "Nazar",
    surname: "Mart",
    message: "OMW bro...",
    date: "17.05.2023",
  },
  {
    id: 2,
    name: "Dima",
    surname: "Mart",
    message: "Did you see the new movie of...",
    date: "17.05.2023",
  },
  {
    id: 3,
    name: "Oleg",
    surname: "Mart",
    message: "Our new project will be awesome...",
    date: "17.05.2023",
  },
  {
    id: 3,
    name: "Oleg",
    surname: "Mart",
    message: "Davis please call me when you...",
    date: "17.05.2023",
  },
  {
    id: 3,
    name: "Oleg",
    surname: "Mart",
    message: "I did it yesterday.",
    date: "17.05.2023",
  },
  {
    id: 3,
    name: "Oleg",
    surname: "Mart",
    message: "I’ll send you the files today.",
    date: "17.05.2023",
  },
  {
    id: 3,
    name: "Oleg",
    surname: "Mart",
    message: "I’ll send you the files today.",
    date: "17.05.2023",
  },
  {
    id: 3,
    name: "Oleg",
    surname: "Mart",
    message: "I’ll send you the files today.",
    date: "17.05.2023",
  },
  {
    id: 3,
    name: "Oleg",
    surname: "Mart",
    message: "I’ll send you the files today.",
    date: "17.05.2023",
  },
  {
    id: 3,
    name: "Oleg",
    surname: "Mart",
    message: "I’ll send you the files today.",
    date: "17.05.2023",
  },
  {
    id: 3,
    name: "Oleg",
    surname: "Mart",
    message: "I’ll send you the files today.",
    date: "17.05.2023",
  },
  {
    id: 3,
    name: "Oleg",
    surname: "Mart",
    message: "I’ll send you the files today.",
    date: "17.05.2023",
  },
  {
    id: 3,
    name: "Oleg",
    surname: "Mart",
    message: "I’ll send you the files today.",
    date: "17.05.2023",
  },
  {
    id: 3,
    name: "Oleg",
    surname: "Mart",
    message: "I’ll send you the files today.",
    date: "17.05.2023",
  },
  {
    id: 3,
    name: "Oleg",
    surname: "Mart",
    message: "I’ll send you the files today.",
    date: "17.05.2023",
  },
  {
    id: 3,
    name: "Oleg",
    surname: "Mart",
    message: "I’ll send you the files today.",
    date: "17.05.2023",
  },
  {
    id: 3,
    name: "Oleg",
    surname: "Mart",
    message: "I’ll send you the files today.",
    date: "17.05.2023",
  },
];

export default function Users(props) {
  return (
    <div className="Users">
      <div className="scroll">
        {users.map((item) => {
          return (
            <div className="UserChat" onClick={props.newChat}>
              <span className="UsersLogo"></span>
              <p className="UsersName">{item.name}</p>
              <span className="UsersMessage">{item.message}</span>
              <span className="UsersDate">{item.date}</span>
              <span className="OnlyUsers">. .</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
