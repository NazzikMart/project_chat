import React from "react";
import "./MessageChatUser.css";

export default function MessageChatUser() {
  return (
    <div className="MessageChatUser">
      <div class="chat-input">
        <textarea
          class="input-field"
          placeholder="Напишіть повідомлення..."
        ></textarea>
        <button class="send-button">Надіслати</button>
      </div>
    </div>
  );
}
