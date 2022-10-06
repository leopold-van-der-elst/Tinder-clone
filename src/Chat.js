import React from "react";
import Avatar from '@mui/material/Avatar';
import "./Chat.css";
import {Link} from "react-router-dom";

function Chat({ name, message, profilePic, timestamps }) {
  return (
    <Link to={`/chats/${name}`}>
    <div className="chat">
      <Avatar className="chat__image" alt={name} src={profilePic} />
      <div className="chat__details">
        <h2>{name}</h2>
        <p>{message}</p>
      </div>
      <p className="chat__timestamps ">{timestamps}</p>
    </div>
    </Link>
  );
}

export default Chat;
