import React from "react";
import { useState } from "react";
import "./ChatScreen.css";
import Avatar from "@mui/material/Avatar";
import Header from "./Header";

function ChatScreen() {
  const [input, Setinput] = useState("");
  const [messages, SetMessages] = useState([
    {
      name: "Ellen",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
      message: "whats up? :))",
    },
    {
      name: "Ellen",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
      message: "whats up? :))",
    },
    {
      message: "Im fine and you?",
    },
  ]);
  const handleSend = (e) => {
    e.preventDefault();
    SetMessages([...messages, {message: input}]);
    Setinput("");
  };
  return (
    <div calssName="chatScreen ">
      <Header backButton="/chats" />
      <p className="chatScreen__title">YOU MATCHED WITH ELLEN ON 10/08/2022</p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser ">{message.message}</p>
          </div>
        )
      )}
      <div>
        <form className="chatScreen__input">
          <input
            className="chatScreen__inputfield"
            value={input}
            onChange={(e) => Setinput(e.target.value)}
            type= "text"
            placeholder="Type a message"
          />
          <button
            className="chatScreen__inputbutton"
            type="submit"
            onClick={handleSend}
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatScreen;
