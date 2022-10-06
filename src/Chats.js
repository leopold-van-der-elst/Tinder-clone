import React from 'react';
import "./Chats.css"
import Chat from './Chat';
import Header from './Header';

function Chats() {
  return (
    <div className="chats">
        <Header backButton="/"/>
        <Chat
        name="Elon"
        message="Hello"
        timestamps="40 sconds ago"
        profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg"
         />
        <Chat
        name="Sarah"
        message="Hello"
        timestamps="40 sconds ago"
        profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg"
         />
        <Chat
        name="Sarah"
        message="Hello"
        timestamps="40 sconds ago"
        profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg"
         />
        <Chat
        name="Sarah"
        message="Hello"
        timestamps="40 sconds ago"
        profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg"
         />
    </div>
  )
}

export default Chats